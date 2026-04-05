import { useState, useEffect } from 'react'

const PARTY_DATE = new Date('2026-04-11T12:00:00')

function getCountdown() {
  const now = new Date()
  const diff = PARTY_DATE - now
  if (diff <= 0) return null
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds }
}

function CountdownBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 min-w-[70px] text-center">
        <span className="text-3xl md:text-4xl font-black tabular-nums">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="text-xs text-white/60 mt-2 uppercase tracking-widest">{label}</span>
    </div>
  )
}

export default function Hero() {
  const [countdown, setCountdown] = useState(getCountdown())

  useEffect(() => {
    const timer = setInterval(() => setCountdown(getCountdown()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0533] via-[#2d1b69] to-[#0a0a14]" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-purple-300 font-medium mb-8 tracking-widest uppercase">
          ✦ 11 de Abril de 2026 · Campo Grande, MS ✦
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-2 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Carlos Tiago
          </span>
        </h1>

        <div className="text-[6rem] md:text-[10rem] font-black leading-none bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          39
        </div>

        <p className="text-lg md:text-xl text-white/70 mt-2 mb-12 font-medium">
          anos de história, amor e conquistas
        </p>

        {/* Countdown */}
        {countdown && (
          <div className="flex gap-4 justify-center mb-12">
            <CountdownBox value={countdown.days} label="Dias" />
            <CountdownBox value={countdown.hours} label="Horas" />
            <CountdownBox value={countdown.minutes} label="Min" />
            <CountdownBox value={countdown.seconds} label="Seg" />
          </div>
        )}

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#local"
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg shadow-purple-900/40 hover:shadow-purple-700/40"
          >
            📍 Ver Local da Festa
          </a>
          <a
            href="#presentes"
            className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition-all"
          >
            🎁 Ver Presentes
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
