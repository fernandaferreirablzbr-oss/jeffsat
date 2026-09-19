"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDown, Pause, Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./hero-motion.css";

const VIDEO_SRC = "/video%20home.mp4";

type Props = { children: ReactNode; header: ReactNode };

export function HeroMotion({ children, header }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const userPaused = useRef(false);
  const introduced = useRef(false);
  const [playback, setPlayback] = useState<"poster" | "playing" | "paused">("poster");

  // One independent media clock. Scroll never reads/writes currentTime.
  useEffect(() => {
    const element = root.current!;
    const video = element.querySelector<HTMLVideoElement>("video")!;
    const layer = element.querySelector<HTMLElement>(".hero-video-layer")!;
    const stage = element.querySelector<HTMLElement>(".hero-stage")!;
    videoRef.current = video;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    let inView = stage.getBoundingClientRect().bottom > 0;

    const fallback = () => {
      if (disposed) return;
      layer.dataset.ready = "false";
      setPlayback("poster");
    };
    const resume = () => {
      if (disposed || preference.matches || userPaused.current || !inView || document.hidden) return;
      if (!video.getAttribute("src")) video.src = VIDEO_SRC;
      video.muted = true;
      void video.play().catch(fallback);
    };
    const playing = () => {
      if (disposed) return;
      layer.dataset.ready = "true";
      setPlayback("playing");
    };
    const paused = () => {
      if (!disposed && layer.dataset.ready === "true") setPlayback("paused");
    };
    const softenLoop = () => {
      const edge = video.duration > 0 && (video.currentTime > video.duration - 0.8 || video.currentTime < 0.2);
      layer.dataset.loopEdge = String(edge);
    };
    const visibility = () => document.hidden ? video.pause() : resume();
    const preferenceChanged = () => {
      if (preference.matches) {
        video.pause();
        video.removeAttribute("src");
        video.load();
        fallback();
      } else resume();
    };
    video.addEventListener("playing", playing);
    video.addEventListener("pause", paused);
    video.addEventListener("error", fallback);
    video.addEventListener("timeupdate", softenLoop);
    document.addEventListener("visibilitychange", visibility);
    preference.addEventListener("change", preferenceChanged);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) resume();
      else video.pause();
    }, { threshold: 0 });
    observer.observe(stage);
    resume();

    return () => {
      disposed = true;
      observer.disconnect();
      preference.removeEventListener("change", preferenceChanged);
      document.removeEventListener("visibilitychange", visibility);
      video.removeEventListener("playing", playing);
      video.removeEventListener("pause", paused);
      video.removeEventListener("error", fallback);
      video.removeEventListener("timeupdate", softenLoop);
      video.pause();
      video.removeAttribute("src");
      video.load();
      videoRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = root.current!;
    const media = gsap.matchMedia();
    let disposed = false;
    const context = gsap.context(() => {
      media.add({
        reduce: "(prefers-reduced-motion: reduce)",
        desktop: "(min-width: 768px)",
        touch: "(max-width: 1023px)",
        mobile: "(max-width: 767px)",
        roomy: "(min-height: 700px)",
      }, (match) => {
        const { reduce, desktop, touch, mobile, roomy } = match.conditions!;
        const select = gsap.utils.selector(element);
        const story = element.querySelector<HTMLElement>(".hero-story")!;
        const shell = element.querySelector<HTMLElement>(".hero-header-shell")!;
        const setHeader = (pastHero: boolean, inStory = false) => {
          shell.classList.toggle("is-past-hero", pastHero);
          shell.classList.toggle("is-storytelling", !pastHero && inStory);
        };
        ScrollTrigger.create({
          id: "jeffsat-header", trigger: story,
          start: "top top", end: "bottom top",
          onEnter: () => setHeader(false, false),
          onLeave: () => setHeader(true),
          onEnterBack: () => setHeader(false, true),
          onLeaveBack: () => setHeader(false, false),
          onUpdate: self => setHeader(self.progress >= 1, touch && self.progress > 0.03 && self.progress < 1),
          onRefresh: self => setHeader(self.progress >= 1, touch && self.progress > 0.03 && self.progress < 1),
        });

        if (reduce) return () => shell.classList.remove("is-past-hero", "is-storytelling");

        const enter = gsap.timeline({ defaults: { ease: "power3.out" } });
        const atBeginning = window.scrollY < 24 && (!location.hash || ["#inicio", "#conteudo"].includes(location.hash));
        if (!introduced.current && atBeginning) {
          enter
            .from(select(".header"), { opacity: 0, y: -12, duration: 0.7 }, 0)
            .from(select(".hero-eyebrow"), { opacity: 0, y: 10, duration: 0.55 }, 0.18)
            .from(select(".hero-line"), { yPercent: 110, duration: 0.8, stagger: 0.1 }, 0.3)
            .from(select(".hero-description"), { opacity: 0, y: 10, duration: 0.5 }, 0.9)
            .from(select(".hero-actions"), { opacity: 0, y: 8, duration: 0.5 }, 1.06)
            .from(select(".hero-location"), { opacity: 0, duration: 0.5 }, 1.08)
            .from(select(".hero-bottom > div"), { opacity: 0, y: 7, stagger: 0.055, duration: 0.45 }, 1.25)
            .from(select(".hero-scene-controls > *"), { opacity: 0, y: 6, duration: 0.45 }, 1.55);
          introduced.current = true;
        }

        if (!roomy && !mobile) return () => shell.classList.remove("is-past-hero", "is-storytelling");

        const storyTimeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            id: "jeffsat-story", trigger: story, start: "top top", end: "bottom bottom",
            scrub: desktop ? 0.45 : 0.25, invalidateOnRefresh: true,
            onUpdate: self => {
              if (self.progress > 0.01 && enter.isActive()) enter.progress(1).kill();
              if (touch && self.progress < 0.98) setHeader(false, self.progress > 0.03);
            },
            onToggle: self => { story.dataset.active = String(self.isActive); },
          },
        });

        // The existing headline becomes the scroll story. It is untouched at
        // progress 0, then its three existing words take focus in sequence.
        const heroStory = gsap.timeline({ defaults: { ease: "power1.inOut" } });
        heroStory
          .fromTo(select(".hero-photo"), { scale: 1 }, { scale: desktop ? 1.01 : 1.005, duration: 0.4 }, 0)
          .fromTo(select(".hero-description"), { opacity: 1 }, { opacity: 0, duration: 0.2 }, 0.35)
          .fromTo(select(".hero-actions"), { opacity: 1 }, { opacity: 0, duration: 0.2 }, 0.4)
          .fromTo(select(".hero-bottom"), { opacity: 1 }, { opacity: 0, duration: 0.2 }, 0.45)
          .fromTo(select(".hero-location"), { opacity: 1 }, { opacity: 0, duration: 0.15 }, 0.5)
          .fromTo(select(".hero-eyebrow-scroll"), { opacity: 1 }, { opacity: 0, duration: 0.2 }, 0.55)
          .fromTo(select(".hero-prefix-line"), { opacity: 1, y: 0 }, { opacity: 0, y: desktop ? -15 : -10, duration: 0.2 }, 0.6)
          .fromTo(select(".hero-prefix-que"), { opacity: 1 }, { opacity: 0, duration: 0.15 }, 0.65)
          .to(select(".hero-protect-line, .hero-connect-line"), { opacity: 0.22, duration: 0.08 }, 0.15)
          .fromTo(select(".hero-generate"), { opacity: 1, y: desktop ? 40 : 24, scale: 0.98 }, { opacity: 1, y: 0, scale: desktop ? 1.04 : 1.02, transformOrigin: "left center", duration: 0.12, immediateRender: false }, 0.15)
          .to(select(".hero-generate"), { scale: 1, duration: 0.12 }, 0.27)
          .fromTo(select(".hero-protect-line"), { opacity: 0.22, y: desktop ? 40 : 24 }, { opacity: 1, y: 0, duration: 0.1, immediateRender: false }, 0.41)
          .to(select(".hero-generate"), { opacity: 0.22, y: desktop ? -35 : -22, duration: 0.1 }, 0.41)
          .fromTo(select(".hero-connect-line"), { opacity: 0.22, y: desktop ? 40 : 24 }, { opacity: 1, y: 0, duration: 0.1, immediateRender: false }, 0.67)
          .to(select(".hero-protect-line"), { opacity: 0.22, y: desktop ? -35 : -22, duration: 0.1 }, 0.67)
          .to(select(".hero-connect-line"), { opacity: 1, y: 0, scale: 1, duration: 0.1 }, 0.77)
          .to(select(".hero-scroll-shade"), { opacity: 0.1, duration: 0.12 }, 0.15)
          .to(select(".hero-scroll-shade"), { opacity: 0, duration: 0.12 }, 0.82)
          .to(select(".hero-description, .hero-actions, .hero-bottom, .hero-location, .hero-eyebrow-scroll"), { opacity: 1, y: 0, duration: 0.12 }, 0.82)
          .to(select(".hero-headline"), { opacity: 1, y: 0, duration: 0.12 }, 0.82)
          .to(select(".hero-prefix-line, .hero-prefix-que"), { opacity: 1, y: 0, duration: 0.12 }, 0.82);

        storyTimeline.add(heroStory, 0);

        // Purpose is a normal-flow editorial section with its own entrance.
        const purposeEl = document.querySelector<HTMLElement>(".purpose-standalone");
        if (purposeEl) {
          const purposeEyebrow = purposeEl.querySelector<HTMLElement>(".purpose-eyebrow");
          const purposeRule = purposeEl.querySelector<HTMLElement>(".purpose-rule");
          const purposeLines = purposeEl.querySelectorAll<HTMLElement>(".purpose-line");
          const purposeChars = purposeEl.querySelectorAll<HTMLElement>(".purpose-char");
          const purposeTitle = purposeEl.querySelector<HTMLElement>("#purpose-title");
          const purposeCursor = purposeEl.querySelector<HTMLElement>(".purpose-cursor");
          const purposeBody = purposeEl.querySelector<HTMLElement>(".purpose-copy > .muted");
          const manifesto = purposeEl.querySelector<HTMLElement>(".manifesto");

          if (mobile) {
            const updateCursor = (progress: number) => {
              if (!purposeCursor || !purposeTitle || !purposeChars.length) return;
              const revealProgress = gsap.utils.clamp(0, 1, (progress - 0.4) / 0.42);
              const index = Math.min(purposeChars.length - 1, Math.max(0, Math.round(revealProgress * purposeChars.length) - 1));
              const target = purposeChars[index];
              const titleRect = purposeTitle.getBoundingClientRect();
              const charRect = target.getBoundingClientRect();
              gsap.set(purposeCursor, {
                x: charRect.right - titleRect.left + 3,
                y: charRect.top - titleRect.top + charRect.height * 0.12,
                height: charRect.height * 0.76,
              });
            };

            gsap.set(purposeEl, { yPercent: 24 });
            gsap.set([purposeEyebrow, purposeRule, purposeBody, manifesto], { opacity: 0 });
            gsap.set([purposeEyebrow, purposeBody, manifesto], { y: 10 });
            gsap.set(purposeRule, { scaleX: 0 });
            gsap.set(purposeChars, { opacity: 0.08 });
            gsap.set(purposeCursor, { opacity: 0 });

            gsap.timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                id: "jeffsat-purpose-mobile-handoff",
                trigger: purposeEl,
                start: "top bottom",
                end: "+=145svh",
                scrub: 0.25,
                invalidateOnRefresh: true,
                onUpdate: self => updateCursor(self.progress),
                onRefresh: self => updateCursor(self.progress),
              },
            })
              .to(purposeEl, { yPercent: 0, duration: 0.3 }, 0)
              .to(purposeEyebrow, { opacity: 1, y: 0, duration: 0.1 }, 0.3)
              .to(purposeRule, { opacity: 1, scaleX: 1, duration: 0.1 }, 0.36)
              .to(purposeCursor, { opacity: 1, duration: 0.04 }, 0.4)
              .to(purposeChars, { opacity: 1, duration: 0.42, stagger: { each: 0.006, from: "start" } }, 0.4)
              .to(purposeCursor, { opacity: 0, duration: 0.1 }, 0.82)
              .to([purposeBody, manifesto], { opacity: 1, y: 0, duration: 0.08, stagger: 0.03 }, 0.92);

          } else {
          const purposeTimeline = gsap.timeline({
            paused: true,
            defaults: { ease: "power2.out" },
            scrollTrigger: {
              id: "jeffsat-purpose-entrance",
              trigger: purposeEl,
              start: "top 78%",
              toggleActions: "play reverse play reverse",
            },
          });

          gsap.set([purposeEyebrow, purposeRule, purposeLines, purposeBody, manifesto], { opacity: 0 });
          gsap.set([purposeEyebrow, purposeBody, manifesto], { y: 16 });
          gsap.set(purposeLines, { yPercent: 105 });
          gsap.set(purposeRule, { scaleX: 0 });

          purposeTimeline
            .to(purposeEyebrow, { opacity: 1, y: 0, duration: 0.22 }, 0)
            .to(purposeRule, { opacity: 1, scaleX: 1, duration: 0.28 }, 0.12)
            .to(purposeLines, { opacity: 1, yPercent: 0, duration: 0.3, stagger: 0.045 }, 0.28)
            .to(purposeBody, { opacity: 1, y: 0, duration: 0.24 }, 0.53)
            .to(manifesto, { opacity: 1, y: 0, duration: 0.24 }, 0.7);
          }
        }

        if (mobile) {
          gsap.utils.toArray<HTMLElement>(".solution-card").forEach((card) => {
            const image = card.querySelector(".solution-image img");
            const label = card.querySelector(".solution-label");
            const body = card.querySelectorAll("h3, p, .button");
            gsap.timeline({
              scrollTrigger: { trigger: card, start: "top 82%", toggleActions: "play reverse play reverse" },
              defaults: { ease: "power2.out" },
            })
              .fromTo(image, { scale: 1.015 }, { scale: 1, duration: 0.42 }, 0)
              .fromTo(label, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.24 }, 0.04)
              .fromTo(body, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.3, stagger: 0.035 }, 0.14);
          });

          gsap.utils.toArray<HTMLElement>(".audience-card").forEach((card) => {
            gsap.timeline({
              scrollTrigger: { trigger: card, start: "top 82%", toggleActions: "play reverse play reverse" },
              defaults: { ease: "power2.out" },
            })
              .fromTo(card.querySelector(".audience-image img"), { opacity: 0.86, scale: 1.018 }, { opacity: 1, scale: 1, duration: 0.36 }, 0)
              .fromTo(card.querySelectorAll("h3, .audience-content > p, li, .button"), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.28, stagger: 0.03 }, 0.08);
          });

          gsap.utils.toArray<HTMLElement>(".projects-grid article").forEach((project) => {
            gsap.timeline({
              scrollTrigger: { trigger: project, start: "top 86%", toggleActions: "play reverse play reverse" },
              defaults: { ease: "power2.out" },
            })
              .fromTo(project.querySelector(".project-image"), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.28 }, 0)
              .fromTo(project.querySelectorAll("h3, p"), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.24, stagger: 0.035 }, 0.1);
          });
        }

        // Faded controls stay in the accessibility tree and tab order. Focusing
        // one deliberately restores its scene instead of trapping keyboard users.
        const revealFocusedControl = (event: FocusEvent) => {
          const target = event.target as HTMLElement;
          if (target.closest(".hero-actions, .hero-scene-controls") && (storyTimeline.scrollTrigger?.progress ?? 0) > 0.05) {
            storyTimeline.progress(1).kill();
            window.scrollTo({ top: storyTimeline.scrollTrigger!.start, behavior: "instant" });
            storyTimeline.progress(0);
            ScrollTrigger.update();
          }
        };
        element.addEventListener("focusin", revealFocusedControl);
        return () => {
          element.removeEventListener("focusin", revealFocusedControl);
          shell.classList.remove("is-past-hero", "is-storytelling");
          delete story.dataset.active;
        };
      });
    }, element);

    const refresh = () => { if (!disposed) ScrollTrigger.refresh(); };
    void document.fonts.ready.then(refresh);
    window.addEventListener("pageshow", refresh);
    return () => {
      disposed = true;
      window.removeEventListener("pageshow", refresh);
      media.revert();
      context.revert();
    };
  }, []);

  function toggleVideo() {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (video.paused) {
      userPaused.current = false;
      if (!video.getAttribute("src")) video.src = VIDEO_SRC;
      void video.play().catch(() => setPlayback("poster"));
    } else {
      userPaused.current = true;
      video.pause();
    }
  }

  return <div className="hero-experience" ref={root}>
    <div className="hero-header-shell">{header}</div>
    <div id="inicio" className="hero-story">
      <div className="hero-stage">
        {children}
        <div className="container hero-signature-position" aria-hidden="true"><span className="hero-signature" /></div>
        <div className="container hero-scene-controls">
          <button type="button" className="hero-video-control" onClick={toggleVideo} aria-label={playback === "playing" ? "Pausar vídeo de fundo" : "Reproduzir vídeo de fundo"} title={playback === "playing" ? "Pausar vídeo" : "Reproduzir vídeo"}>{playback === "playing" ? <Pause size={15} /> : <Play size={15} />}</button>
          <a href="#sobre" className="hero-scroll-indicator" aria-label="Conhecer nosso propósito"><span>DESLIZE</span><ArrowDown size={18} /></a>
        </div>
      </div>
    </div>
  </div>;
}
