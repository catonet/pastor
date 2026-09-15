import SectionHead from './SectionHead';
import PhotoBlock from './PhotoBlock';

export default function Ciencia() {
  return (
    <section id="ciencia" className="bg-surface py-[100px] max-[600px]:py-[68px]">
      <div className="wrap">
        <SectionHead
          kicker="Ciencia y evidencia"
          title="Tres pilares técnicos de la causa"
          description="El respaldo científico de AGROSAVIA, INIA Perú y FAO LEAP sostiene lo que las comunidades pastoriles saben desde hace generaciones."
        />
        <div className="grid grid-cols-[1.6fr_1fr] max-[980px]:grid-cols-1 gap-14 items-stretch">
          <div className="flex flex-col gap-[38px]">
            {/* Pilar 1 */}
            <div className="grid grid-cols-[52px_1fr] gap-[22px] pb-8 border-b border-line">
              <svg className="w-[44px] h-[44px]" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path
                  d="M24 44c8 0 13-5.5 13-12.5 0-7-6-11-8-17-1 4-3 6-5 6-3 0-4-4-3-8-6 4-10 11-10 19C11 38.5 16 44 24 44Z"
                  stroke="#8B4513"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h3 className="font-display font-semibold text-[1.16rem] text-ink mb-2.5">
                  Prevención de incendios
                </h3>
                <p className="text-muted text-[0.95rem] m-0">
                  El pastoreo controlado reduce la carga de biomasa combustible y disminuye el riesgo de mega-incendios forestales en pastizales naturales.
                </p>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="grid grid-cols-[52px_1fr] gap-[22px] pb-8 border-b border-line">
              <svg className="w-[44px] h-[44px]" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M6 14h36M6 24h36M6 34h36" stroke="#556B2F" strokeWidth="2" />
                <path d="M14 14v20M24 14v20M34 14v20" stroke="#556B2F" strokeWidth="2" opacity="0.4" />
              </svg>
              <div>
                <h3 className="font-display font-semibold text-[1.16rem] text-ink mb-2.5">
                  Captura de carbono y suelo
                </h3>
                <p className="text-muted text-[0.95rem] m-0">
                  Sistemas de pastoreo bien gestionados regeneran materia orgánica, mejoran la estructura del suelo y capturan carbono a largo plazo.
                </p>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="grid grid-cols-[52px_1fr] gap-[22px]">
              <svg className="w-[44px] h-[44px]" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="5" stroke="#D97706" strokeWidth="2" />
                <circle cx="32" cy="16" r="5" stroke="#D97706" strokeWidth="2" />
                <path d="M6 40c0-7 5-11 10-11s10 4 10 11M22 40c0-7 5-11 10-11s10 4 10 11" stroke="#D97706" strokeWidth="2" />
              </svg>
              <div>
                <h3 className="font-display font-semibold text-[1.16rem] text-ink mb-2.5">
                  Socioeconomía y arraigo
                </h3>
                <p className="text-muted text-[0.95rem] m-0">
                  Saberes ancestrales, cadenas textiles de montaña y economías familiares que sostienen el tejido social rural.
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[360px]">
            <PhotoBlock
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Alpaca_%28Vicugna_pacos%29%2C_Laguna_de_Salinas%2C_Arequipa%2C_Per%C3%BA%2C_2015-08-02%2C_DD_43.jpg"
              alt="Alpaca en un bofedal altoandino"
              duotone="olive"
              className="absolute inset-0 w-full h-full"
            >
              <div className="caption content absolute left-0 right-0 bottom-0 p-[22px]">
                <p className="text-white text-[0.88rem] m-0 max-w-[28ch]">
                  Los bofedales absorben y liberan agua lentamente, sosteniendo el pastoreo incluso en temporada seca.
                </p>
              </div>
            </PhotoBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
