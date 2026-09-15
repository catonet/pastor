import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    orgName: '',
    country: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(
      'Gracias — tu solicitud quedó registrada. El equipo de Pastoraméricas se pondrá en contacto pronto.'
    );
    setFormData({
      orgName: '',
      country: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="bg-surface py-16 sm:py-24" id="contacto">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Form Column */}
        <div>
          <span className="block text-xs sm:text-[0.86rem] font-bold text-primary mb-2 uppercase tracking-wide">
            Contacto
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mb-4">
            Únete a la red
          </h2>
          <p className="text-muted text-sm sm:text-base mb-8 max-w-[48ch] leading-relaxed">
            Organizaciones, comunidades e investigadores pueden sumarse a Pastoraméricas. Cuéntanos brevemente sobre tu territorio o institución.
          </p>

          <form className="flex flex-col gap-4 sm:gap-5" id="joinForm" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="orgName" className="text-xs sm:text-[0.85rem] font-semibold text-ink">
                Nombre de la organización o comunidad
              </label>
              <input
                type="text"
                id="orgName"
                name="orgName"
                value={formData.orgName}
                onChange={handleChange}
                required
                className="border border-line bg-bg px-3.5 py-2.5 sm:py-3 font-body text-sm sm:text-[0.95rem] rounded-xs text-text focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="country" className="text-xs sm:text-[0.85rem] font-semibold text-ink">
                País
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="border border-line bg-bg px-3.5 py-2.5 sm:py-3 font-body text-sm sm:text-[0.95rem] rounded-xs text-text focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Selecciona un país</option>
                <option value="Perú">Perú</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Argentina">Argentina</option>
                <option value="Colombia">Colombia</option>
                <option value="Chile">Chile</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs sm:text-[0.85rem] font-semibold text-ink">
                Correo de contacto
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-line bg-bg px-3.5 py-2.5 sm:py-3 font-body text-sm sm:text-[0.95rem] rounded-xs text-text focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs sm:text-[0.85rem] font-semibold text-ink">
                Cuéntanos sobre tu territorio o interés
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="border border-line bg-bg px-3.5 py-2.5 sm:py-3 font-body text-sm sm:text-[0.95rem] rounded-xs text-text resize-y min-h-[110px] focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary self-start text-white! bg-primary hover:bg-primary-dark cursor-pointer text-sm sm:text-base py-3 px-6 shadow-sm transition-colors"
            >
              Enviar solicitud de adhesión
            </button>

            {status && (
              <p className="text-xs sm:text-sm text-secondary font-medium bg-white border border-secondary/30 p-3 rounded-xs m-0">
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Sidebar Column */}
        <div className="flex flex-col justify-start">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-ink mb-4">
            Otros canales
          </h3>

          <ul className="contact-channels divide-y divide-line mb-8">
            <li className="py-3.5 first:pt-0">
              <span className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                Prensa y consultas técnicas
              </span>
              <a
                href="mailto:prensa@pastoramericas.org"
                className="text-text font-medium hover:text-primary transition-colors text-sm sm:text-base"
              >
                prensa@pastoramericas.org
              </a>
            </li>

            <li className="py-3.5">
              <span className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                Secretaría regional
              </span>
              <a
                href="mailto:contacto@pastoramericas.org"
                className="text-text font-medium hover:text-primary transition-colors text-sm sm:text-base"
              >
                contacto@pastoramericas.org
              </a>
            </li>

            <li className="py-3.5">
              <span className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                Seminario INIA Illpa en Puno
              </span>
              <span className="text-sm sm:text-base text-muted">
                16 al 18 de septiembre de 2026 —{' '}
                <a
                  href="https://forms.gle/hs1b4iiFMJu4sUDh6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:underline"
                >
                  inscríbete aquí
                </a>
              </span>
            </li>
          </ul>

          {/* REDES SOCIALES */}
          <div className="mb-8 p-5 bg-white border border-line rounded-sm shadow-xs">
            <h4 className="font-display font-bold text-base sm:text-lg text-ink mb-3">
              Redes sociales oficiales
            </h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.facebook.com/pastoramericas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] font-semibold text-xs sm:text-sm rounded transition-colors"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook /pastoramericas</span>
              </a>

              <a
                href="https://www.youtube.com/channel/UCPhUgV2PVYqOKn9o9LhFjgg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 bg-[#FF0000]/10 hover:bg-[#FF0000]/20 text-[#FF0000] font-semibold text-xs sm:text-sm rounded transition-colors"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span>Pastoraméricas en YouTube</span>
              </a>
            </div>
          </div>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-ink mb-2">
            Alianzas y redes
          </h3>
          <p className="text-muted text-sm sm:text-[0.95rem] leading-relaxed">
            WAMIP · FAO LEAP · Mountain Partnership · AGROSAVIA · INIA Perú · ILC
          </p>
        </div>
      </div>
    </section>
  );
}
