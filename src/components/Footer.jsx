import logoImg from '../assets/pastoramericas.png';

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-12 sm:py-16 pb-8">
      <div className="wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={logoImg}
                alt="Pastoraméricas"
                className="h-9 w-auto object-contain bg-white/10 p-1 rounded"
              />
              <h5 className="text-white font-display text-lg font-bold m-0">
                Pastoraméricas
              </h5>
            </div>
            <p className="text-xs sm:text-[0.88rem] max-w-[32ch] text-white/60 mt-2 m-0 leading-relaxed">
              Red Latinoamericana de Ganaderos Extensivos, articulada con el Movimiento Pastoril Mundial.
            </p>

            {/* Social media icons in Footer */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.facebook.com/pastoramericas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded bg-white/10 text-white hover:bg-primary transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCPhUgV2PVYqOKn9o9LhFjgg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 rounded bg-white/10 text-white hover:bg-[#FF0000] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-body text-xs sm:text-[0.82rem] font-bold mb-3 sm:mb-4 tracking-wider uppercase">
              Navegación
            </h5>
            <ul className="list-none m-0 p-0 space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#evento" className="text-white/70 hover:text-white transition-colors">
                  Seminario Puno (16-18 set)
                </a>
              </li>
              <li>
                <a href="#manifiesto" className="text-white/70 hover:text-white transition-colors">
                  Manifiesto
                </a>
              </li>
              <li>
                <a href="#territorios" className="text-white/70 hover:text-white transition-colors">
                  Territorios
                </a>
              </li>
              <li>
                <a href="#ciencia" className="text-white/70 hover:text-white transition-colors">
                  Ciencia y evidencia
                </a>
              </li>
              <li>
                <a href="#liderazgo" className="text-white/70 hover:text-white transition-colors">
                  Liderazgo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-body text-xs sm:text-[0.82rem] font-bold mb-3 sm:mb-4 tracking-wider uppercase">
              Seminario Puno
            </h5>
            <ul className="list-none m-0 p-0 space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://forms.gle/hs1b4iiFMJu4sUDh6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold hover:text-white transition-colors"
                >
                  Inscripción gratuita →
                </a>
              </li>
              <li>
                <a
                  href="https://tinyurl.com/3ppdvw7s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Programa completo (PDF)
                </a>
              </li>
              <li>
                <a href="#evento" className="text-white/70 hover:text-white transition-colors">
                  Ejes temáticos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-body text-xs sm:text-[0.82rem] font-bold mb-3 sm:mb-4 tracking-wider uppercase">
              Alianzas Globales
            </h5>
            <ul className="list-none m-0 p-0 space-y-2 text-xs sm:text-sm text-white/70">
              <li>WAMIP (Movimiento Mundial)</li>
              <li>FAO LEAP</li>
              <li>Mountain Partnership (ONU)</li>
              <li>AGROSAVIA &amp; INIA Perú</li>
              <li>ILC / IPDRS</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-[0.75rem] text-white/45 gap-3 text-center sm:text-left">
          <span>© 2026 Pastoraméricas — Movimiento Pastoril Mundial, nodo América Latina.</span>
          <span>Fotografías: Wikimedia Commons, bajo licencia Creative Commons / dominio público.</span>
        </div>
      </div>
    </footer>
  );
}
