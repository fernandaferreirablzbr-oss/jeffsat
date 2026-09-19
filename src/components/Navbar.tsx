import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full pt-4 md:pt-6 px-4 flex justify-center relative z-30">
      {/* Desktop Floating Capsule */}
      <div className="w-full max-w-[460px] h-[40px] px-3 glass-nav rounded-lg flex items-center justify-between shadow-sm">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-[#CFFD42] flex items-center justify-center p-[2px] shadow-[0_0_8px_rgba(207,253,66,0.6)]">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
          </div>
          <span className="text-white text-xs font-semibold tracking-wide">
            Sonar
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden sm:flex items-center gap-3.5 text-[11px] text-white/80 font-medium">
          <a href="#how-it-works" className="hover:text-white transition-colors cursor-pointer">
            Como Funciona
          </a>
          <a href="#security" className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer text-[#CFFD42] font-semibold">
            Segurança & CFTV
          </a>
          <a href="#about" className="hover:text-white transition-colors cursor-pointer">
            Sobre Nós
          </a>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <a
            href="#quote-builder"
            className="bg-[#CFFD42] hover:bg-[#D5FF45] text-black font-semibold text-[11px] px-3.5 py-1 rounded-[6px] transition-all hover:scale-[1.02] shadow-sm whitespace-nowrap active:scale-[0.98]"
          >
            Fazer Orçamento
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden text-white/90 p-1 hover:text-white focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-16 left-4 right-4 glass-nav bg-black/80 rounded-xl p-4 flex flex-col gap-3 shadow-xl z-50 text-white text-xs">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 border-b border-white/10"
          >
            Como Funciona
          </a>
          <a
            href="#security"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 border-b border-white/10 text-[#CFFD42] font-semibold"
          >
            Segurança & CFTV
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 border-b border-white/10"
          >
            Sobre Nós
          </a>
          <a
            href="#quote-builder"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 font-bold text-[#CFFD42]"
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </nav>
  );
};
