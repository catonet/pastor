const stats = [
  { num: '48.6%', label: 'del Valor Bruto de Producción agrícola de Puno proviene de forrajes' },
  { num: '+300M', label: 'USD/año generados por pequeños rumiantes en sistemas pastoriles' },
  { num: '3', label: 'grandes biomas representados: Andes, Cono Sur y Gran Chaco' },
  { num: '40h', label: 'certificación académica INIA / UNA Puno en el seminario de septiembre' },
];

export default function Stats() {
  return (
    <div className="bg-ink text-white py-10 sm:py-14 border-y border-white/10">
      <div className="wrap grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`px-2 sm:px-6 ${
              i % 2 === 1 ? 'border-l border-white/15' : 'max-md:border-l-0'
            } md:border-l md:border-white/16 md:first:border-l-0 md:first:pl-0`}
          >
            <div className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-secondary-light">
              {s.num}
            </div>
            <div className="mt-2 text-xs sm:text-[0.85rem] text-white/75 leading-snug">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
