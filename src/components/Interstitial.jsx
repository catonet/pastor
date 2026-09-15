import PhotoBlock from './PhotoBlock';

export default function Interstitial() {
  return (
    <div className="relative min-h-[420px] flex items-center p-0!">
      <PhotoBlock
        src="https://commons.wikimedia.org/wiki/Special:FilePath/Altiplano_Peru.JPG"
        alt="Altiplano andino"
        duotone="olive"
        className="absolute inset-0 w-full h-full"
      />
      <div className="wrap content relative z-2 py-20">
        <blockquote className="m-0 max-w-[20ch] font-display italic text-[clamp(1.6rem,3.4vw,2.6rem)] text-white leading-[1.35]">
          No hay futuro sostenible para los ecosistemas de América Latina sin las comunidades
          pastoriles que los habitan y protegen.
          <footer className="mt-[22px] font-body not-italic text-[0.9rem] text-white/75">
            Declaración por la Dignidad, los Pastizales y la Movilidad Pastoril
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
