import SectionHead from './SectionHead';
import { mediaCards } from '../data/mediaData';

export default function Media() {
  return (
    <section id="medios" className="py-[100px] max-[600px]:py-[68px]">
      <div className="wrap">
        <SectionHead
          kicker="Medios y publicaciones"
          title="La voz de la red en el debate público"
          description="Artículos de opinión, coberturas internacionales y recursos técnicos disponibles para prensa y sociedad civil."
        />
      </div>
      <div className="grid grid-cols-[1.3fr_1fr_1fr] max-[980px]:grid-cols-1 gap-0.5 bg-line">
        {mediaCards.map((card, i) => (
          <div
            key={i}
            className="bg-bg p-[30px_28px] flex flex-col justify-between min-h-[220px]"
          >
            <div className="text-[0.78rem] font-semibold text-primary">
              {card.outlet}
            </div>
            <h3 className="font-display font-semibold text-[1.15rem] text-ink my-3.5">
              {card.title}
            </h3>
            <a
              href={card.href}
              className="text-[0.85rem] font-semibold text-ink no-underline hover:text-primary transition-colors"
            >
              {card.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
