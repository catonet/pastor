import { useState, useEffect } from 'react';
import logoImg from '../assets/pastoramericas.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setScrollPct(pct);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-line">
      {/* Top announcement */}
      <div className="bg-primary text-white text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span>
          Seminario Internacional en Puno: <strong>16 al 18 de septiembre de 2026</strong>
        </span>
        <a
          href="#evento"
          className="underline font-semibold text-white/90 hover:text-white transition-colors ml-1"
        >
          Ver programa
        </a>
      </div>

      <div className="wrap flex items-center justify-between h-[74px] px-4 sm:px-7">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 no-underline">
          <img
            src={logoImg}
            alt="Pastoraméricas Logo"
            className="h-10 sm:h-11 w-auto object-contain flex-none"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold text-[1.15rem] sm:text-[1.28rem] text-ink leading-tight">
              Pastoraméricas
            </span>
            <span className="font-body text-[0.55rem] sm:text-[0.6rem] font-bold text-secondary tracking-wider block uppercase">
              Red Latinoamericana de Ganaderos Extensivos
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <a
            href="#evento"
            className="nav-link no-underline text-[0.9rem] font-medium text-text hover:text-primary transition-colors"
          >
            Seminario Puno
          </a>
          <a
            href="#manifiesto"
            className="nav-link no-underline text-[0.9rem] font-medium text-text hover:text-primary transition-colors"
          >
            Manifiesto
          </a>
          <a
            href="#territorios"
            className="nav-link no-underline text-[0.9rem] font-medium text-text hover:text-primary transition-colors"
          >
            Territorios
          </a>
          <a
            href="#liderazgo"
            className="nav-link no-underline text-[0.9rem] font-medium text-text hover:text-primary transition-colors"
          >
            Liderazgo
          </a>
          <a
            href="#alianzas"
            className="nav-link no-underline text-[0.9rem] font-medium text-text hover:text-primary transition-colors"
          >
            Alianzas
          </a>
          <a
            href="#medios"
            className="nav-link no-underline text-[0.9rem] font-medium text-text hover:text-primary transition-colors"
          >
            Medios
          </a>
          <a
            href="#contacto"
            className="nav-link no-underline text-[0.9rem] font-medium text-text hover:text-primary transition-colors"
          >
            Contacto
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-3 border-l border-line pl-4">
            <a
              href="https://www.facebook.com/pastoramericas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Pastoraméricas"
              className="text-muted hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCPhUgV2PVYqOKn9o9LhFjgg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Pastoraméricas"
              className="text-muted hover:text-[#FF0000] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </nav>

        {/* Mobile menu trigger */}
        <button
          className="lg:hidden p-2 rounded-sm border border-line text-ink hover:bg-surface focus:outline-none"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-[110px] bg-black/40 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}
      <div
        className={`fixed top-[110px] right-0 bottom-0 w-[80%] max-w-[320px] bg-[#FDFBF7] shadow-xl z-50 flex flex-col justify-between p-6 transition-transform duration-250 ease-in-out lg:hidden border-l border-line ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col divide-y divide-line/70">
          <a
            href="#evento"
            onClick={closeMenu}
            className="py-3 text-[1rem] font-semibold text-text hover:text-primary"
          >
            Seminario Puno
          </a>
          <a
            href="#manifiesto"
            onClick={closeMenu}
            className="py-3 text-[1rem] font-medium text-text hover:text-primary"
          >
            Manifiesto
          </a>
          <a
            href="#territorios"
            onClick={closeMenu}
            className="py-3 text-[1rem] font-medium text-text hover:text-primary"
          >
            Territorios
          </a>
          <a
            href="#ciencia"
            onClick={closeMenu}
            className="py-3 text-[1rem] font-medium text-text hover:text-primary"
          >
            Ciencia
          </a>
          <a
            href="#liderazgo"
            onClick={closeMenu}
            className="py-3 text-[1rem] font-medium text-text hover:text-primary"
          >
            Liderazgo
          </a>
          <a
            href="#alianzas"
            onClick={closeMenu}
            className="py-3 text-[1rem] font-medium text-text hover:text-primary"
          >
            Alianzas
          </a>
          <a
            href="#medios"
            onClick={closeMenu}
            className="py-3 text-[1rem] font-medium text-text hover:text-primary"
          >
            Medios
          </a>
          <a
            href="#contacto"
            onClick={closeMenu}
            className="py-3 text-[1rem] font-medium text-text hover:text-primary"
          >
            Contacto
          </a>
        </nav>

        <div className="pt-4 border-t border-line flex items-center justify-center gap-6 text-muted">
          <a
            href="https://www.facebook.com/pastoramericas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </a>
          <a
            href="https://www.youtube.com/channel/UCPhUgV2PVYqOKn9o9LhFjgg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium hover:text-[#FF0000]"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube
          </a>
        </div>
      </div>

      <div className="scroll-bar" style={{ width: `${scrollPct}%` }} />
    </header>
  );
}
