import { useState } from 'react'
import ModalPix from './ModalPix'

const gifts = [
  {
    id: 1,
    emoji: '🎮',
    name: 'Assinatura Nintendo Switch Online',
    description: 'Um ano de jogos online, cloud saves e acesso ao catálogo de clássicos.',
    value: 50,
    tag: 'Entretenimento',
  },
  {
    id: 2,
    emoji: '🖥️',
    name: 'Monitor novo',
    description: 'Contribuição para um monitor top para o setup do desenvolvedor.',
    value: 150,
    tag: 'Setup Dev',
  },
  {
    id: 3,
    emoji: '🍽️',
    name: 'Buffet novo',
    description: 'Ajuda para renovar o buffet da sala de jantar.',
    value: 120,
    tag: 'Casa',
  },
  {
    id: 4,
    emoji: '🪑',
    name: 'Mesa nova',
    description: 'Contribuição para uma mesa nova para a casa.',
    value: 100,
    tag: 'Casa',
  },
  {
    id: 5,
    emoji: '🛋️',
    name: 'Sofá cama',
    description: 'Ajuda para o sofá cama, perfeito para receber visitas.',
    value: 150,
    tag: 'Casa',
  },
  {
    id: 8,
    emoji: '🤖',
    name: 'Assinatura Claude',
    description: 'Assinatura do assistente de IA favorito do dev, o Claude Pro.',
    value: 50,
    tag: 'Setup Dev',
  },
  {
    id: 9,
    emoji: '📦',
    name: 'Curso de Node.js',
    description: 'Contribuição para um curso top de Node.js e ecossistema backend.',
    value: 50,
    tag: 'Setup Dev',
  },
  {
    id: 6,
    emoji: '🏗️',
    name: 'Obra do escritório',
    description: 'Contribuição para a reforma do escritório em casa.',
    value: null,
    tag: 'Obra',
  },
  {
    id: 7,
    emoji: '💝',
    name: 'Contribuição livre',
    description: 'Qualquer valor é muito bem-vindo e muito apreciado!',
    value: null,
    tag: 'Livre',
  },
]

const tagColors = {
  'Entretenimento': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Setup Dev': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Casa': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'Obra': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Livre': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
}

export default function Presentes() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="presentes" className="py-24 px-6 bg-[#0a0a14]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-pink-400 text-sm font-semibold uppercase tracking-widest">Quer me presentear?</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white">
            🎁 Lista de Presentes
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Sua presença já é o maior presente! Mas se quiser contribuir, aqui vão algumas sugestões.
            Qualquer valor é recebido com muito carinho. 💜
          </p>
        </div>

        {/* Gift grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gifts.map((gift) => (
            <div
              key={gift.id}
              className="group bg-gradient-to-br from-[#1a1040]/80 to-[#0f0f20]/80 border border-purple-800/30 hover:border-purple-500/50 rounded-3xl p-6 transition-all hover:shadow-lg hover:shadow-purple-900/20 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{gift.emoji}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full border ${tagColors[gift.tag]}`}>
                  {gift.tag}
                </span>
              </div>

              <h3 className="text-white font-bold text-base mb-2 leading-snug">{gift.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1">{gift.description}</p>

              <div className="mt-5 flex items-center justify-between">
                {gift.value ? (
                  <span className="text-purple-300 font-black text-xl">R$ {gift.value}</span>
                ) : (
                  <span className="text-pink-300 font-semibold text-sm">Valor livre 💝</span>
                )}
                <button
                  onClick={() => setSelected(gift)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all shadow-md shadow-purple-900/30 group-hover:shadow-purple-700/30"
                >
                  PIX 💜
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-10">
          Ao clicar em "PIX" você verá a chave para transferência, simples assim!
        </p>
      </div>

      {selected && (
        <ModalPix present={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
