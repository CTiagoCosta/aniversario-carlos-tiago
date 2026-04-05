export default function Amigos() {
  return (
    <section id="amigos" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0533] via-[#2d1b69] to-[#0a0a14]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="text-pink-400 text-sm font-semibold uppercase tracking-widest">Para quem faz parte</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2 text-white mb-8">
          ❤️ Amigos &amp; Pessoas Especiais
        </h2>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 mb-10">
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-6">
            Nesses 39 anos de caminhada, a vida me presenteou com pessoas incríveis — algumas desde os tempos de Belém, outras que encontrei ao longo do caminho em Campo Grande, e muitas que a vida foi colocando no meu percurso de formas que nunca esperava.
          </p>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-6">
            Cada um de vocês deixou uma marca. Nas risadas, nas conversas, nos momentos difíceis e nos mais felizes. Amizade verdadeira não precisa de distância nem de tempo — ela simplesmente existe.
          </p>
          <p className="text-white/90 text-xl md:text-2xl font-semibold leading-relaxed">
            Obrigado por fazer parte da minha história. 💜
          </p>
        </div>

        <a
          href="#presentes"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-purple-900/40 text-lg"
        >
          🎁 Ver lista de presentes
        </a>

        {/* Footer note */}
        <p className="text-white/30 text-sm mt-16">
          Feito com muito carinho para celebrar 39 anos de vida 💜
        </p>
      </div>
    </section>
  )
}
