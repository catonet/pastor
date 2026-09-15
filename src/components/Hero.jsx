import PhotoBlock from './PhotoBlock';

export default function Hero() {
  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] flex items-end p-0!">
      <PhotoBlock
        src="https://commons.wikimedia.org/wiki/Special:FilePath/106_Alpacas_Lake_Titicaca_Peru_3254_%2815182262402%29.jpg"
        alt="Alpacas junto al lago Titicaca, Puno"
        duotone="terra"
        loading="eager"
        className="absolute inset-0 w-full h-full"
      />

      <div className="wrap content hero-inner relative z-2 py-12 sm:py-16 pt-16 sm:pt-20 w-full">
        {/* Eyebrow & clean tag */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs sm:text-[0.86rem] font-semibold text-white/90 uppercase tracking-wide">
              Movimiento Pastoril Mundial · América Latina
            </span>
          </div>

          <a
            href="#evento"
            className="inline-flex items-center gap-1.5 bg-accent text-ink font-semibold text-xs px-2.5 py-0.5 rounded-xs hover:bg-[#c46b05] transition-colors"
          >
            Seminario en Puno · 16 al 18 de septiembre
          </a>
        </div>

        {/* Title */}
        <h1 className="text-white text-[2.2rem] sm:text-[clamp(2.6rem,5.5vw,4.8rem)] leading-[1.04] tracking-[-0.02em] max-w-[17ch] font-display font-bold">
          El pastoralismo extensivo cuida el planeta, alimenta comunidades y resguarda la vida.
        </h1>

        {/* Lede */}
        <p className="mt-5 sm:mt-6 max-w-[52ch] text-[1rem] sm:text-[1.12rem] text-white/90 leading-[1.65]">
          Pastoraméricas une a los crianceros altoandinos, ganaderos tradicionales del Cono Sur y
          pastores del Gran Chaco para defender la movilidad animal, la soberanía territorial y la
          ganadería de pastizal frente a la crisis climática global.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 mt-8 sm:mt-9">
          <a href="#evento" className="btn btn-primary justify-center text-center">
            Seminario en Puno · 16-18 set.
          </a>
          <a href="#manifiesto" className="btn btn-outline justify-center text-center">
            Conoce nuestro manifiesto
          </a>
        </div>

        {/* Hero meta stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 mt-10 sm:mt-14 border-t border-white/25 pt-5">
          <div className="text-white">
            <div className="font-display font-bold text-2xl sm:text-[1.6rem] text-white">54%</div>
            <div className="text-xs sm:text-[0.78rem] text-white/75 mt-0.5">
              de la superficie terrestre mundial son pastizales — FAO
            </div>
          </div>
          <div className="text-white">
            <div className="font-display font-bold text-2xl sm:text-[1.6rem] text-white">4M+</div>
            <div className="text-xs sm:text-[0.78rem] text-white/75 mt-0.5">
              hectáreas agropecuarias en la región Puno
            </div>
          </div>
          <div className="text-white">
            <div className="font-display font-bold text-2xl sm:text-[1.6rem] text-white">2026</div>
            <div className="text-xs sm:text-[0.78rem] text-white/75 mt-0.5">
              Año Internacional de los Pastizales y los Pastores
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
