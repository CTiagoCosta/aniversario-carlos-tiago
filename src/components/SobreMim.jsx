const highlights = [
  { emoji: '🗺️', label: 'Nascido em Belém do Pará' },
  { emoji: '🏠', label: 'Vive em Campo Grande, MS' },
  { emoji: '💻', label: '15+ anos como desenvolvedor' },
  { emoji: '👨‍👩‍👧‍👦', label: 'Pai de 3 filhos adotivos' },
  { emoji: '💜', label: 'Casado e com família completa' },
  { emoji: '💪', label: 'Determinado e mão na massa' },
]

export default function SobreMim() {
  return (
    <section id="sobre" className="py-24 px-6 bg-[#0d0d1a]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Quem sou eu</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">
            👨‍💻 Sobre Mim
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-white/80 text-lg leading-relaxed">
              Nasci em <span className="text-purple-300 font-semibold">Belém do Pará</span>, a cidade das mangueiras e do açaí, mas foi em{' '}
              <span className="text-purple-300 font-semibold">Campo Grande, MS</span> que construí minha vida, pessoal e profissional.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Sou desenvolvedor de sistemas há <span className="text-pink-300 font-semibold">mais de 15 anos</span>. Já tentei mudar de área uma vez, mas a paixão pelo código me trouxe de volta. Hoje me dedico a projetos pessoais com tudo que tenho.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Este ano vivenciei o maior desafio e a maior conquista da minha vida:{' '}
              <span className="text-yellow-300 font-semibold">a adoção dos meus 3 filhos</span>. Fui buscá-los em Paulo Afonso, interior da Bahia, e hoje minha família está completa: eu, meu marido e nossos três filhos.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Tenho saudades de Belém, mas entendo que cada escolha me trouxe até aqui. Sou uma pessoa muito centrada, determinada, e que sempre bota a mão na massa, independente do que seja.
            </p>
            <p className="text-white/75 text-base leading-relaxed italic border-l-4 border-purple-500 pl-4">
              "Sempre busco aquilo que quero e coloco a mão na massa, independente do que seja."
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-gradient-to-r from-purple-900/20 to-transparent border border-purple-700/20 rounded-2xl px-5 py-4 hover:border-purple-500/40 transition-colors"
              >
                <span className="text-2xl">{h.emoji}</span>
                <span className="text-white/80 font-medium">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
