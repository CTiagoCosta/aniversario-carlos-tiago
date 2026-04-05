export default function LocalFesta() {
  return (
    <section id="local" className="py-24 px-6 bg-[#0d0d1a]">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Onde vai ser?</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">
            📍 Local da Festa
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Info card */}
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-700/30 rounded-3xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-600/30 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                🏠
              </div>
              <div>
                <p className="text-white/50 text-sm uppercase tracking-wider mb-1">Endereço</p>
                <p className="text-white text-2xl font-bold">Rua União, 130</p>
                <p className="text-purple-300 font-medium mt-1">Campo Grande, MS</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-pink-600/30 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                📅
              </div>
              <div>
                <p className="text-white/50 text-sm uppercase tracking-wider mb-1">Data</p>
                <p className="text-white text-2xl font-bold">11 de Abril, 2026</p>
                <p className="text-pink-300 font-medium mt-1">Sábado</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600/30 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                🕐
              </div>
              <div>
                <p className="text-white/50 text-sm uppercase tracking-wider mb-1">Horário</p>
                <p className="text-white text-2xl font-bold">A partir das 12h</p>
                <p className="text-blue-300 font-medium mt-1">Quanto mais cedo, melhor! 🎉</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Rua+União+120+Campo+Grande+MS"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg shadow-purple-900/30 w-full"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Abrir no Google Maps
            </a>
          </div>

          {/* Map embed */}
          <div className="rounded-3xl overflow-hidden border border-purple-700/30 h-80 md:h-full min-h-[320px]">
            <iframe
              title="Local da festa"
              src="https://maps.google.com/maps?q=Rua+União,120,Campo+Grande,MS&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
