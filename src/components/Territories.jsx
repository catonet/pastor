import PhotoBlock from './PhotoBlock';
import SectionHead from './SectionHead';

const territories = [
  {
    duotone: 'terra',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/018_Alpacas_Puno_Peru_3285_%2815141723422%29.jpg',
    alt: 'Alpacas en el altiplano de Puno',
    region: 'Andes · Perú y Bolivia',
    title: 'Crianceros y alpaqueras altoandinas',
    description:
      'Crianza de camélidos sudamericanos a más de 4.000 msnm, conservación de bofedales y tejido tradicional de fibra de alpaca.',
  },
  {
    duotone: 'olive',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Argentinian_gauchos.jpg',
    alt: 'Gauchos en las pampas argentinas',
    region: 'Cono Sur',
    title: 'Gauchos y productores de pastizal',
    description:
      'Ganadería tradicional de pampas y estepas patagónicas, con manejo del pastoreo como herramienta de regeneración del suelo.',
  },
  {
    duotone: 'amber',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chaco_Paraguay%2Ccattle_ranch%2C_Presidente_Hayes_Province.JPG',
    alt: 'Ganado en el Gran Chaco paraguayo',
    region: 'Gran Chaco Americano',
    title: 'Llaneros y comunidades del Chaco',
    description:
      'Ganadería extensiva en sabanas semiáridas, gestión de biomasa como prevención de incendios y adaptación a sequías extremas.',
  },
];

export default function Territories() {
  return (
    <section className="py-[100px] max-[600px]:py-[68px]" id="territorios">
      <div className="wrap">
        <SectionHead
          kicker="Territorios y comunidades"
          title="Tres biomas, un mismo horizonte"
          description="De los bofedales altoandinos a las estepas patagónicas y las sabanas del Chaco americano: comunidades distintas, unidas por el pastoreo extensivo como forma de vida y de cuidado del territorio."
        />
      </div>

      <div className="grid grid-cols-3 max-[980px]:grid-cols-1 gap-0.5 bg-line">
        {territories.map((t, i) => (
          <div key={i} className="relative min-h-[380px] flex flex-col justify-end">
            <PhotoBlock
              src={t.src}
              alt={t.alt}
              duotone={t.duotone}
              className="absolute inset-0 w-full h-full"
            />
            <div className="content relative z-2 p-[34px_30px]">
              <span className="text-[0.8rem] font-semibold text-white opacity-85 mb-2.5 block">
                {t.region}
              </span>
              <h3 className="text-white text-[1.4rem] mb-2.5">{t.title}</h3>
              <p className="text-white/82 text-[0.93rem] m-0 max-w-[34ch]">{t.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
