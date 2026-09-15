import SectionHead from './SectionHead';

export default function Manifesto() {
  return (
    <section className="bg-surface py-[100px] max-[600px]:py-[68px]" id="manifiesto">
      <div className="wrap">
        <SectionHead
          kicker="Quiénes somos"
          title="Un manifiesto por la dignidad pastoril"
          description="Durante milenios, las comunidades pastoriles y los ganaderos extensivos de América Latina han coevolucionado con los ecosistemas más desafiantes del continente: desde los altiplanos andinos a más de 4.000 metros, hasta las pampas del Cono Sur y las sabanas semiáridas del Gran Chaco."
        />

        <div className="grid grid-cols-2 max-[980px]:grid-cols-1 gap-16 max-[980px]:gap-10 items-start">
          {/* Blockquote */}
          <blockquote className="m-0 pl-[26px] border-l-[3px] border-primary font-display text-[1.35rem] leading-[1.55] text-ink">
            <p className="m-0 mb-[18px]">
              Rechazamos la narrativa reduccionista que equipara la ganadería tradicional de pastizal
              con la industria intensiva en confinamiento. La ganadería pastoral y la transhumancia no
              son problemas ambientales: son soluciones ecológicas ancestrales e indispensables.
            </p>
            <footer className="mt-5 font-body text-[0.85rem] not-italic text-muted">
              Declaración institucional de Pastoraméricas
            </footer>
          </blockquote>

          {/* Commitments */}
          <ul className="commitments">
            <li>
              <h4 className="font-display font-semibold text-[1.02rem] text-ink mb-1.5">
                Defender la movilidad animal
              </h4>
              <p className="m-0 text-muted text-[0.95rem]">
                La tenencia comunitaria y la transhumancia como estrategias bioculturales de
                adaptación a sequías y variaciones climáticas extremas.
              </p>
            </li>
            <li>
              <h4 className="font-display font-semibold text-[1.02rem] text-ink mb-1.5">
                Aportar evidencia científica rigurosa
              </h4>
              <p className="m-0 text-muted text-[0.95rem]">
                Demostrar el rol del pastoreo en la regeneración de suelos, la captura de carbono y la
                prevención de mega-incendios mediante el consumo controlado de biomasa.
              </p>
            </li>
            <li>
              <h4 className="font-display font-semibold text-[1.02rem] text-ink mb-1.5">
                Exigir representación directa
              </h4>
              <p className="m-0 text-muted text-[0.95rem]">
                Participación sin intermediarios en los foros de gobernanza global de las Naciones
                Unidas, con voz propia de las comunidades pastoriles.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
