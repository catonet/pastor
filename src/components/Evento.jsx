import { useState, useMemo } from 'react';
import PhotoBlock from './PhotoBlock';
import { ejes } from '../data/agendaData';

export default function Evento() {
  const [activeEjeId, setActiveEjeId] = useState('eje1');

  // Countdown logic
  const countdown = useMemo(() => {
    const target = new Date('2026-09-16T09:00:00-05:00');
    const end = new Date('2026-09-18T23:00:00-05:00');
    const now = new Date();

    if (now >= target && now <= end) {
      return { label: 'Estado del seminario', value: 'En curso' };
    } else if (now > end) {
      return { label: 'Estado del seminario', value: 'Finalizado' };
    } else {
      const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
      const value = diff === 0 ? 'Hoy' : diff === 1 ? 'Mañana' : `${diff} días`;
      return { label: 'Días para el inicio', value };
    }
  }, []);

  const activeEje = ejes.find((e) => e.id === activeEjeId) || ejes[0];

  return (
    <section className="relative min-h-auto p-0" id="evento">
      {/* Top Banner */}
      <div className="relative min-h-[460px] flex items-end">
        <PhotoBlock
          src="https://commons.wikimedia.org/wiki/Special:FilePath/Vista_de_los_Andes%2C_Limatambo%2C_Cuzco%2C_Per%C3%BA%2C_2015-07-30%2C_DD_75.JPG"
          alt="Paisaje andino de pastizales y montañas"
          duotone="ink"
          className="absolute inset-0 w-full h-full"
        />
        <div className="wrap content relative z-2 py-14 sm:py-16 pt-16 sm:pt-20 w-full">
          <div className="inline-flex items-center gap-2.5 bg-[#D97706]/95 text-[#1C1917] font-bold text-[0.78rem] px-3.5 py-[7px] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917]" />
            <span>Seminario-Taller · INIA EEA Illpa &amp; UNA Puno</span>
          </div>

          <h2 className="text-white font-display text-[2rem] sm:text-4xl md:text-5xl max-w-[22ch] leading-[1.06] font-semibold">
            Innovación y Sostenibilidad de Pastos y Pastizales Altoandinos
          </h2>

          <p className="text-white/90 max-w-[58ch] text-[1rem] sm:text-[1.08rem] mt-5 sm:mt-6 leading-relaxed">
            ¿Cómo fortalecer la alimentación y productividad del ganado en los Andes? Profesionales,
            técnicos, productores y estudiantes se reúnen para compartir conocimientos, experiencias
            y soluciones para el desarrollo de pastos y pastizales altoandinos, con una jornada
            práctica de campo incluida.
          </p>

          <div className="flex items-end gap-0 mt-8 sm:mt-9">
            <span className="font-display text-4xl sm:text-5xl md:text-6xl text-white pr-5 mr-5 border-r border-white/35 leading-none">
              16
            </span>
            <span className="font-display text-4xl sm:text-5xl md:text-6xl text-white pr-5 mr-5 border-r border-white/35 leading-none">
              17
            </span>
            <span className="font-display text-4xl sm:text-5xl md:text-6xl text-white pr-5 mr-5 border-r border-white/35 leading-none">
              18
            </span>
            <span className="text-white/80 text-[0.82rem] sm:text-[0.85rem] pb-1 leading-snug">
              de septiembre, 2026
              <br />
              Virtual y presencial · Puno
            </span>
          </div>

          <div className="flex flex-wrap gap-3.5 mt-8">
            <a
              className="btn btn-primary"
              href="https://forms.gle/hs1b4iiFMJu4sUDh6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inscríbete gratis
            </a>
            <a
              className="btn btn-outline"
              href="https://tinyurl.com/3ppdvw7s"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver programa completo
            </a>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-surface py-14 sm:py-20">
        <div className="wrap">
          {/* Intro + Facts */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 mb-14">
            <div className="lead-copy">
              <p className="text-text text-[1.02rem] sm:text-[1.05rem] leading-relaxed mb-4">
                La región Puno posee una superficie agropecuaria de más de 4 millones de hectáreas,
                donde la ganadería constituye el pilar de la economía rural y la base de la seguridad
                alimentaria de miles de familias altoandinas. Los cultivos forrajeros —alfalfa, avena
                y cebada— representan el 48.6% del Valor Bruto de Producción agrícola regional.
              </p>
              <p className="text-text text-[1.02rem] sm:text-[1.05rem] leading-relaxed m-0">
                El seminario se organiza en el marco del Año Internacional de los Pastizales y los
                Pastores, declarado por la Asamblea General de las Naciones Unidas para 2026, y reúne
                al CTRIA Puno, el INIA (Estación Experimental Agraria Illpa), la Universidad Nacional
                del Altiplano, AGRORURAL y AGP S.A.C.
              </p>
            </div>

            {/* Facts card */}
            <div className="bg-white border border-line p-6 sm:p-7 self-start shadow-xs">
              <h4 className="text-[0.85rem] font-bold text-primary mb-4">
                {countdown.label}
              </h4>
              <dl className="m-0 space-y-0">
                <div className="flex justify-between items-center py-2.5 text-[0.9rem]">
                  <dt className="text-muted">Cuenta regresiva</dt>
                  <dd className="m-0 text-right font-semibold text-ink">{countdown.value}</dd>
                </div>
                <div className="flex justify-between items-center py-2.5 border-t border-line text-[0.9rem]">
                  <dt className="text-muted">Modalidad</dt>
                  <dd className="m-0 text-right font-semibold text-ink">Virtual (16–17) + presencial (18)</dd>
                </div>
                <div className="flex justify-between items-start py-2.5 border-t border-line text-[0.9rem]">
                  <dt className="text-muted">Lugar presencial</dt>
                  <dd className="m-0 text-right font-semibold text-ink max-w-[60%]">Cía. Ganadera del Sur, Yocará, Juliaca</dd>
                </div>
                <div className="flex justify-between items-start py-2.5 border-t border-line text-[0.9rem]">
                  <dt className="text-muted">Dirigido a</dt>
                  <dd className="m-0 text-right font-semibold text-ink max-w-[60%]">Profesionales, técnicos, productores, estudiantes</dd>
                </div>
                <div className="flex justify-between items-center py-2.5 border-t border-line text-[0.9rem]">
                  <dt className="text-muted">Certificación</dt>
                  <dd className="m-0 text-right font-semibold text-ink">40 horas académicas, INIA / UNA Puno</dd>
                </div>
                <div className="flex justify-between items-center py-2.5 border-t border-line text-[0.9rem]">
                  <dt className="text-muted">Costo</dt>
                  <dd className="m-0 text-right font-semibold text-ink">Gratuito</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Ejes Navigation Tabs */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-line border border-line"
            role="tablist"
            aria-label="Ejes temáticos del seminario"
          >
            {ejes.map((eje) => {
              const isSelected = activeEjeId === eje.id;
              return (
                <button
                  key={eje.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveEjeId(eje.id)}
                  className={`p-5 sm:p-6 text-left cursor-pointer transition-colors duration-150 ${
                    isSelected
                      ? 'bg-ink text-white'
                      : 'bg-white text-ink hover:bg-[#FAF8F5]'
                  }`}
                >
                  <span
                    className={`font-display text-[0.95rem] block mb-1.5 ${
                      isSelected ? 'text-secondary-light' : 'text-primary'
                    }`}
                  >
                    {eje.roman}
                  </span>
                  <span
                    className={`text-[0.72rem] font-bold tracking-wider uppercase block mb-2 ${
                      isSelected ? 'text-accent' : 'text-secondary'
                    }`}
                  >
                    {eje.day}
                  </span>
                  <span
                    className={`font-display text-[1.05rem] font-semibold block leading-snug ${
                      isSelected ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {eje.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Eje Panel */}
          <div className="bg-white border border-line border-t-0 p-6 sm:p-10">
            <p className="text-muted text-[0.95rem] max-w-[70ch] mb-7 leading-relaxed">
              {activeEje.context}
            </p>

            <ul className="agenda-list divide-y divide-line">
              {activeEje.items.map((item, i) => (
                <li key={i} className="py-4 first:pt-0 grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-2 sm:gap-5 items-baseline">
                  <span className="text-[0.85rem] font-semibold text-primary tabular-nums">
                    {item.time}
                  </span>
                  <div>
                    <strong className="block font-display font-semibold text-[1rem] text-ink mb-1">
                      {item.title}
                    </strong>
                    <span className="text-[0.88rem] text-muted leading-relaxed block">
                      {item.speaker}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Footer */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 mt-14 pt-10 border-t border-line">
            <div>
              <h4 className="font-display font-semibold text-[1.05rem] text-ink mb-3.5">
                Certificación de 40 horas académicas
              </h4>
              <p className="text-muted text-[0.93rem] leading-relaxed mb-2.5">
                Emitida digitalmente y de forma gratuita por el INIA y el Vicerrectorado Académico
                de la UNA Puno: 16 horas presenciales/virtuales más 24 horas de trabajo aplicativo.
              </p>
              <p className="text-muted text-[0.93rem] leading-relaxed m-0">
                Requiere 100% de asistencia en las jornadas virtuales y el día de campo, junto con la
                presentación de un caso de éxito o plan de manejo forrajero.
              </p>
            </div>

            <div>
              <h4 className="font-display font-semibold text-[1.05rem] text-ink mb-3.5">
                Organizadores y colaboradores
              </h4>
              <ul className="org-list divide-y divide-line">
                <li className="py-2.5 first:pt-0 flex justify-between items-center text-[0.9rem]">
                  <span>CTRIA Puno / INIA – EEA Illpa</span>
                  <span className="text-muted text-[0.8rem] text-right">Dirección técnica</span>
                </li>
                <li className="py-2.5 flex justify-between items-center text-[0.9rem]">
                  <span>Universidad Nacional del Altiplano de Puno</span>
                  <span className="text-muted text-[0.8rem] text-right">Soporte académico</span>
                </li>
                <li className="py-2.5 flex justify-between items-center text-[0.9rem]">
                  <span>AGRORURAL</span>
                  <span className="text-muted text-[0.8rem] text-right">Día de campo</span>
                </li>
                <li className="py-2.5 flex justify-between items-center text-[0.9rem]">
                  <span>AGP S.A.C.</span>
                  <span className="text-muted text-[0.8rem] text-right">Tecnología de semillas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
