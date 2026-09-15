import SectionHead from './SectionHead';
import { alliances, countriesAndBiomes } from '../data/alliancesData';

export default function Alliances() {
  return (
    <section id="alianzas" className="bg-surface py-16 sm:py-24">
      <div className="wrap">
        <SectionHead
          kicker="Redes, países y alianzas globales"
          title="Articulación transcontinental de la red"
          description="Pastoraméricas agrupa comunidades pastoriles y centros de investigación de 6 países sudamericanos, articulándose con agencias de Naciones Unidas y redes mundiales."
        />

        {/* 1. PAÍSES Y BIOMAS QUE LA CONFORMAN */}
        <div className="mb-14">
          <h3 className="font-display font-semibold text-xl sm:text-2xl text-ink mb-3">
            Países y biomas representados
          </h3>
          <p className="text-muted text-sm sm:text-base mb-6 max-w-[70ch]">
            La red une a crianceros, campesinos y ganaderos tradicionales a lo largo de los principales biomas pastoriles de América del Sur:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {countriesAndBiomes.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-line p-5 rounded-xs hover:border-primary/50 transition-colors shadow-xs"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-semibold text-lg text-ink">
                    {item.country}
                  </span>
                  <span className="text-[0.7rem] font-medium px-2 py-0.5 rounded-xs bg-surface text-primary border border-line">
                    {item.tag}
                  </span>
                </div>
                <div className="text-xs font-semibold text-secondary mb-2">
                  {item.biome}
                </div>
                <p className="text-muted text-[0.88rem] leading-relaxed m-0">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. ORGANIZACIONES Y REDES INTERNACIONALES */}
        <div>
          <h3 className="font-display font-semibold text-xl sm:text-2xl text-ink mb-3">
            Organizaciones y centros de investigación
          </h3>
          <p className="text-muted text-sm sm:text-base mb-6 max-w-[70ch]">
            Plataformas matrices y centros técnico-científicos que respaldan la labor de la red:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-xs overflow-hidden">
            {alliances.map((item, i) => (
              <div key={i} className="bg-bg p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="font-display font-semibold text-[1.05rem] text-ink">
                      {item.name}
                    </span>
                    <span className="text-[0.68rem] font-semibold px-2 py-0.5 rounded-xs bg-white text-primary border border-line shrink-0">
                      {item.level}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-secondary mb-3 leading-snug">
                    {item.role}
                  </div>
                  <p className="text-[0.87rem] text-muted leading-relaxed m-0">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
