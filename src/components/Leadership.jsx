import SectionHead from './SectionHead';
import { leaders } from '../data/leadersData';

export default function Leadership() {
  return (
    <section id="liderazgo" className="py-[100px] max-[600px]:py-[68px]">
      <div className="wrap">
        <SectionHead
          kicker="Liderazgos y científicos delegados"
          title="Voces que representan a la red"
          description="Técnicos, investigadoras y líderes comunitarios que llevan la voz de Pastoraméricas a los foros de gobernanza global."
        />
      </div>
      <div className="wrap p-0!">
        <div className="grid grid-cols-3 max-[980px]:grid-cols-1 gap-0 border-t border-line">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className={`p-[34px_30px] border-b border-line ${
                i !== leaders.length - 1 ? 'border-r max-[980px]:border-r-0 border-line' : ''
              }`}
            >
              <div className="text-[0.8rem] font-semibold text-secondary mb-2.5">
                {leader.role}
              </div>
              <h3 className="font-display font-semibold text-[1.15rem] text-ink mb-3">
                {leader.name}
              </h3>
              {leader.paragraphs.map((p, j) => (
                <p
                  key={j}
                  className={`text-muted text-[0.9rem] ${
                    j === leader.paragraphs.length - 1 ? 'm-0' : 'm-0 mb-2.5'
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
