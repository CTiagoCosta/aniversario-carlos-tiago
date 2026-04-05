import { useState, useMemo } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { buildPixPayload } from '../utils/pixPayload'

const PIX_KEY = '95192387272'
const PIX_KEY_FORMATTED = '951.923.872-72'
const MERCHANT_NAME = 'Carlos Tiago S Costa'
const MERCHANT_CITY = 'Campo Grande'

export default function ModalPix({ present, onClose }) {
  const [copied, setCopied] = useState(false)

  const pixPayload = useMemo(
    () => buildPixPayload(PIX_KEY, MERCHANT_NAME, MERCHANT_CITY, present.value ?? null),
    [present.value]
  )

  function handleCopy() {
    navigator.clipboard.writeText(pixPayload).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#120a2e] border border-purple-600/50 rounded-3xl p-8 max-w-md w-full shadow-2xl shadow-purple-900/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Presentear com</p>
            <h3 className="text-xl font-bold text-white">{present.emoji} {present.name}</h3>
            {present.value ? (
              <p className="text-purple-300 font-bold text-lg mt-1">R$ {present.value}</p>
            ) : (
              <p className="text-pink-300 font-medium text-sm mt-1">Valor à sua escolha ❤️</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white/80 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center bg-white rounded-2xl p-5 mb-5">
          <QRCodeSVG
            value={pixPayload}
            size={200}
            bgColor="#ffffff"
            fgColor="#1a0533"
            level="M"
          />
          <p className="text-[#1a0533]/50 text-xs mt-3 font-medium">
            {present.value ? `R$ ${present.value} via PIX` : 'PIX valor livre'}
          </p>
        </div>

        {/* PIX key info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 mb-4 flex items-center justify-between">
          <div>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Chave PIX (CPF)</p>
            <p className="text-white font-mono font-bold tracking-widest">{PIX_KEY_FORMATTED}</p>
          </div>
          <span className="text-white/30 text-xs">Carlos Tiago S Costa</span>
        </div>

        {/* Copy copia-e-cola button */}
        <button
          onClick={handleCopy}
          className={`w-full flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-2xl transition-all mb-3 ${
            copied
              ? 'bg-green-600/30 border border-green-500/50 text-green-300'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-900/30'
          }`}
        >
          {copied ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copiado!
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copiar código PIX (copia e cola)
            </>
          )}
        </button>

        <p className="text-center text-white/30 text-xs mb-4">
          Escaneie o QR Code ou copie o código no seu app bancário
        </p>

        <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-4 text-center">
          <p className="text-white/60 text-xs leading-relaxed">
            💜 Esta lista é só uma forma de facilitar. Se você já comprou um presente, quer trazer outra coisa ou simplesmente aparecer, é <span className="text-purple-300 font-semibold">muito bem-vindo</span> do mesmo jeito. O que importa é sua presença! 🎉
          </p>
        </div>
      </div>
    </div>
  )
}
