 import Link from 'next/link'
import { Instagram, MessageCircle } from 'lucide-react'

export default function ContatoPage() {
  return (
    <div className="space-y-10" id="contato">

      <p className="text-black/70 mt-24 md:mt-32">Fale diretamente pelo WhatsApp ou pelo Instagram.</p>

      {/* Cartões de contato */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.1)] border-l-4 border-[#25D366] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.14)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full grid place-items-center" style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}>
              <MessageCircle className="text-white" size={20} />
            </div>
            <h2 className="text-[#1A1A2E] font-bold text-[20px] m-0">WhatsApp</h2>
          </div>
          <p className="text-[#636E72] mb-5">Converse comigo agora mesmo pelo WhatsApp.</p>
          <a
            href="https://wa.me/558386200546"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-transform duration-300 hover:-translate-y-[2px]"
            style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', boxShadow: '0 8px 22px rgba(37,211,102,0.35)' }}
          >
            <MessageCircle size={18} /> Falar no WhatsApp
          </a>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.1)] border-l-4 border-[#E1306C] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.14)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full grid place-items-center bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]">
              <Instagram className="text-white" size={20} />
            </div>
            <h2 className="text-[#1A1A2E] font-bold text-[20px] m-0">Instagram</h2>
          </div>
          <p className="text-[#636E72] mb-5">Me siga e envie uma mensagem pelo Instagram.</p>
          <Link
            href="https://instagram.com/rosanamdr21personal"
            target="_blank"
            className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-transform duration-300 hover:-translate-y-[2px]"
            style={{ background: 'linear-gradient(135deg, #F56040 0%, #DD2A7B 50%, #8134AF 100%)', boxShadow: '0 8px 22px rgba(221,42,123,0.35)' }}
          >
            <Instagram size={18} /> Ir para o perfil
          </Link>
        </div>
      </div>

      {/* Formulário mantém abaixo */}
      <div>
        <form className="grid gap-4 max-w-lg">
          <input className="glass rounded-lg px-4 py-3 bg-white/70 text-black placeholder:text-black/50 outline-none" placeholder="Seu nome" required />
          <input className="glass rounded-lg px-4 py-3 bg-white/70 text-black placeholder:text-black/50 outline-none" type="email" placeholder="Seu e-mail" required />
          <textarea className="glass rounded-lg px-4 py-3 bg-white/70 text-black placeholder:text-black/50 outline-none min-h-32" placeholder="Sua mensagem" required />
          <button type="submit" className="rounded-lg px-5 py-3 bg-black text-white font-semibold hover-animate hover:bg-black/90">Enviar</button>
        </form>
      </div>
    </div>
  )
}
