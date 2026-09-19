// Browser runner: node <browser-automation>/browser.mjs http://localhost:3000
//   --script ./scripts/qa-hero-motion.mjs
// Screenshots are written to /tmp/opencode; no external messages are sent.
const base = 'http://localhost:3000';
const assert = (value, message) => { if (!value) throw new Error(message); };
const settle = page => page.waitForTimeout(650); // GSAP scrub catch-up is <= 450ms.

export default async function run(page) {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.addInitScript(() => {
    let cls = 0;
    new PerformanceObserver(list => {
      for (const entry of list.getEntries()) if (!entry.hadRecentInput) cls += entry.value;
      document.documentElement.dataset.testCls = String(cls);
    }).observe({ type: 'layout-shift', buffered: true });
  });
  const viewports = [];
  for (const [width, height] of [[1440, 900], [375, 812], [390, 844], [430, 932], [768, 1024], [1024, 800], [1920, 1080], [390, 667]]) {
    await page.setViewportSize({ width, height });
    await page.goto(base);
    await page.waitForSelector('[data-motion]');
    await page.waitForSelector('.hero-video-layer[data-ready="true"]');
    await page.waitForFunction(() => [...document.querySelectorAll('.hero-line')].every(e => Math.abs(new DOMMatrix(getComputedStyle(e).transform).m42) < .1) && +getComputedStyle(document.querySelector('.hero-scroll-indicator')).opacity > .99);
    const before = await page.evaluate(() => {
      const video = document.querySelector('video');
      const hero = document.querySelector('.hero');
      const stage = document.querySelector('.hero-stage');
      const actions = document.querySelector('.hero-actions').getBoundingClientRect();
      const bottom = document.querySelector('.hero-bottom').getBoundingClientRect();
      return {
        viewport: [innerWidth, innerHeight], scrollWidth: document.documentElement.scrollWidth,
        mode: document.querySelector('[data-motion]').dataset.motion,
        duration: video.duration, playing: !video.paused, muted: video.muted, inline: video.playsInline,
        mediaTime: video.currentTime, stageHeight: stage.offsetHeight, storyHeight: document.querySelector('.hero-story').offsetHeight,
        h1: document.querySelectorAll('h1').length, ctaFits: actions.bottom < hero.getBoundingClientRect().bottom,
        categoriesFit: bottom.bottom <= hero.getBoundingClientRect().bottom + 1,
        initialCLS: +(document.documentElement.dataset.testCls || 0),
      };
    });
    assert(before.scrollWidth === width, `Overflow at ${width}`);
    assert(before.h1 === 1 && before.ctaFits && before.categoriesFit, `Invalid hero layout: ${JSON.stringify(before)}`);
    assert(before.playing && before.muted && before.inline && before.duration === 10, 'Video not playing decoratively');
    assert(before.initialCLS < .05, `Initial CLS too high: ${JSON.stringify(before)}`);
    if ([375, 390, 430, 1440].includes(width) && height > 700) await page.screenshot({ path: `/tmp/opencode/motion-${width}-intro.png` });
    if (before.mode === 'story') {
      const range = before.storyHeight - before.stageHeight;
      for (const progress of [0.15, 0.4, 0.6, 0.82, 1]) {
        await page.evaluate(y => window.scrollTo(0, y), range * progress);
        await settle(page);
        const state = await page.evaluate(() => ({
          stickyTop: document.querySelector('.hero-stage').getBoundingClientRect().top,
          headline: +getComputedStyle(document.querySelector('.hero-headline')).opacity,
          manifesto: +getComputedStyle(document.querySelector('.hero-transition')).opacity,
          cta: +getComputedStyle(document.querySelector('.hero-actions-scroll')).opacity,
          panelY: new DOMMatrix(getComputedStyle(document.querySelector('.purpose-panel')).transform).m42,
          width: document.documentElement.scrollWidth,
        }));
        assert(Math.abs(state.stickyTop) < 2 && state.width === width, `Sticky/overflow failure ${width}: ${JSON.stringify(state)}`);
        if (progress === 0.82) assert(state.headline < .02 && state.manifesto > .8 && state.cta < .01, `Story sequence failure: ${JSON.stringify(state)}`);
        if (progress === 1) assert(Math.abs(state.panelY) < 1, 'Purpose panel did not settle');
        if ([375, 1440].includes(width)) await page.screenshot({ path: `/tmp/opencode/motion-${width}-${progress}.png` });
      }
      // A keyboard user can return to the faded CTA without a focus trap.
      await page.locator('.hero-actions a').first().focus();
      await settle(page);
      assert(await page.evaluate(() => scrollY < 5 && +getComputedStyle(document.querySelector('.hero-actions-scroll')).opacity > .99), 'Keyboard CTA recovery failed');
    }
    await page.locator('.hero-scroll-indicator').click();
    await settle(page);
    const purpose = await page.evaluate(() => ({
      panel: document.querySelector('.purpose-panel').getBoundingClientRect().top,
      heading: document.querySelector('#purpose-title').getBoundingClientRect().top,
      headerBottom: document.querySelector('.hero-header-shell').getBoundingClientRect().bottom,
      lightHeader: document.querySelector('.hero-header-shell').classList.contains('is-past-hero'),
      normalSections: [...document.querySelectorAll('#solucoes, #para-voce, #projetos, #orcamento')].every(e => getComputedStyle(e).transform === 'none'),
    }));
    assert(purpose.heading >= purpose.headerBottom && purpose.normalSections, `Anchor or other section disturbed: ${JSON.stringify(purpose)}`);
    if ([375, 1440].includes(width)) await page.screenshot({ path: `/tmp/opencode/motion-${width}-purpose.png` });
    viewports.push({ ...before, purpose });
  }

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(base);
  await page.waitForSelector('.hero-video-layer[data-ready="true"]');
  await page.waitForFunction(() => +getComputedStyle(document.querySelector('.hero-video-control')).opacity > .99);
  await page.getByRole('button', { name: 'Pausar vídeo de fundo' }).click();
  assert(await page.locator('video').evaluate(v => v.paused), 'Pause control failed');
  await page.getByRole('button', { name: 'Reproduzir vídeo de fundo' }).click();
  await page.waitForFunction(() => !document.querySelector('video').paused);
  // Observe one full native loop; do not seek the video in this test.
  const loop = await page.evaluate(() => new Promise(resolve => {
    const v = document.querySelector('video');
    let last = v.currentTime;
    const inspect = () => {
      if (v.currentTime < last) {
        v.removeEventListener('timeupdate', inspect);
        resolve({ before: last, after: v.currentTime, nativeLoop: v.loop });
      }
      last = v.currentTime;
    };
    v.addEventListener('timeupdate', inspect);
  }));
  assert(loop.nativeLoop && loop.before > 9, 'Native loop failed');

  // Resize with an active timeline, then refresh mid-story and at a direct anchor.
  await page.evaluate(() => window.scrollTo(0, 350));
  await page.setViewportSize({ width: 390, height: 844 });
  await settle(page);
  assert(await page.evaluate(() => document.documentElement.scrollWidth === innerWidth), 'Resize overflow');
  await page.evaluate(() => window.scrollTo(0, 170));
  await page.reload();
  await page.waitForSelector('[data-motion="story"]');
  await settle(page);
  const refreshed = await page.evaluate(() => ({ scrollY, headline: +getComputedStyle(document.querySelector('.hero-headline')).opacity, manifesto: +getComputedStyle(document.querySelector('.hero-transition')).opacity }));
  assert(refreshed.scrollY > 0 && refreshed.headline < 1, 'Mid-page refresh reset the timeline');
  await page.goto(`${base}/#sobre`);
  await page.waitForSelector('[data-motion]');
  await settle(page);
  assert(await page.evaluate(() => Math.abs(new DOMMatrix(getComputedStyle(document.querySelector('.purpose-panel')).transform).m42) < 1), 'Direct anchor panel remained transformed');

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(base);
  await page.waitForSelector('[data-motion="reduced"]');
  const reduced = await page.evaluate(() => ({
    sticky: getComputedStyle(document.querySelector('.hero-stage')).position,
    source: document.querySelector('video').getAttribute('src'),
    lineTransform: getComputedStyle(document.querySelector('.hero-line')).transform,
    ctaOpacity: getComputedStyle(document.querySelector('.hero-actions-scroll')).opacity,
    width: document.documentElement.scrollWidth,
  }));
  assert(reduced.sticky !== 'sticky' && !reduced.source && reduced.lineTransform === 'none' && reduced.ctaOpacity === '1', `Reduced motion failed: ${JSON.stringify(reduced)}`);
  await page.screenshot({ path: '/tmp/opencode/motion-reduced.png' });
  // Live preference change exercises matchMedia cleanup, not just a fresh mount.
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.waitForSelector('[data-motion="story"]');
  await page.waitForSelector('.hero-video-layer[data-ready="true"]');

  const failurePage = await page.context().newPage();
  await failurePage.addInitScript(() => {
    HTMLMediaElement.prototype.play = () => Promise.reject(new DOMException('Test: autoplay blocked', 'NotAllowedError'));
    document.addEventListener('DOMContentLoaded', () => { const video = document.querySelector('video'); if (video) video.autoplay = false; });
  });
  await failurePage.goto(base);
  await failurePage.waitForSelector('[data-motion]');
  await failurePage.waitForTimeout(2200);
  const fallback = await failurePage.evaluate(() => ({ poster: document.querySelector('.hero-photo > img').complete && document.querySelector('.hero-photo > img').naturalWidth > 0, ready: document.querySelector('.hero-video-layer').dataset.ready, cta: +getComputedStyle(document.querySelector('.hero-actions')).opacity }));
  assert(fallback.poster && fallback.ready === 'false' && fallback.cta > .99, `Autoplay fallback failed: ${JSON.stringify(fallback)}`);
  await failurePage.screenshot({ path: '/tmp/opencode/motion-autoplay-fallback.png' });
  await failurePage.close();
  assert(errors.length === 0, `Uncaught errors: ${errors.join('; ')}`);
  return { viewports, loop, refreshed, reduced, fallback, pageErrors: errors };
}
