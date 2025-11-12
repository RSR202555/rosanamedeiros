 import Image from 'next/image'
import Link from 'next/link'

export default function SobrePage() {
  return (
    <section className="about-section mt-12 md:mt-20">
      <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-start px-5 md:px-10">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-[#EAEAEA] p-4 md:p-6">
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden">
            <Image src="/rosana.jpg.jpg" alt="Rosana Medeiros" fill className="object-cover" priority />
          </div>
        </div>

        <div className="about-text-card relative z-10 transition-all duration-300 animate-fadeInUp mt-6 md:mt-0 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-[#EAEAEA] ml-0 md:ml-8 p-6 md:p-12" style={{ animationDelay: '0.4s' }}>
          <p className="about-intro text-[#2D3436] text-[18px] leading-[1.8] mb-8 font-bold">
            Olá! Sou Rosana Medeiros, sua futura Personal Trainer, e estou aqui para <strong>transformar seus objetivos em realidade</strong>. Se você busca um acompanhamento profissional, personalizado e que realmente traga resultados, veio ao lugar certo!
          </p>

          <p className="text-[#636E72] text-[16px] leading-[1.8] mb-6 font-bold">
            Com experiência e paixão pelo movimento, ofereço programas de treinamento que se adaptam perfeitamente ao seu estilo de vida e necessidades.
          </p>

          <h3 className="about-subtitle text-[#1A1A2E] font-bold text-[22px] mt-10 mb-5 relative pl-5">Treinamento Presencial</h3>
          <p className="text-[#636E72] text-[16px] leading-[1.8] mb-6 font-bold">
            Para quem prefere a energia e a orientação direta no ambiente da academia. Juntos, vamos construir um treino eficaz, corrigir posturas e maximizar cada repetição, garantindo que você atinja seu potencial máximo com segurança.
          </p>

          <h3 className="about-subtitle text-[#1A1A2E] font-bold text-[22px] mt-8 mb-5 relative pl-5">Treinamento Online</h3>
          <p className="text-[#636E72] text-[16px] leading-[1.8] mb-6 font-bold">
            A flexibilidade que você precisa sem abrir mão da qualidade! Não importa onde você esteja, posso te guiar com treinos elaborados sob medida, acompanhamento constante e suporte para que você se mantenha motivado(a) e focado(a) em suas metas.
          </p>

          <p className="text-[#636E72] text-[16px] leading-[1.8] mb-6 font-bold">
            Seja para <strong>emagrecer, ganhar massa muscular, melhorar a saúde</strong> ou simplesmente ter mais disposição, estou pronta para te ajudar a superar desafios e celebrar cada conquista.
          </p>

          <p className="text-[#636E72] text-[16px] leading-[1.8] mb-6 font-bold">
            Vamos começar essa transformação juntos? Mande um direct ou clique no link da bio para conversarmos sobre como posso te ajudar a alcançar sua melhor versão!
          </p>

          <div className="about-specialist bg-[linear-gradient(135deg,#F8F9FA_0%,#FFFFFF_100%)] border-l-4 border-[#00e6fe] p-6 rounded-xl mt-8">
            <h3 className="text-[#1A1A2E] font-bold text-[20px] mb-3">Sou especialista em:</h3>
            <p className="text-[#2D3436] m-0 font-bold">Em ajudar mulheres e homens a alcançar seus objetivos de forma saudável.</p>
          </div>

          <div className="about-cta mt-10 pt-8 border-t-2 border-[#F0F0F0] flex gap-4 flex-wrap">
            <a href="https://wa.me/558386200546" target="_blank" rel="noopener noreferrer" className="about-cta-button inline-flex items-center gap-2 text-white font-semibold text-[16px] px-9 py-4 rounded-full transition-all duration-300" style={{ background: 'linear-gradient(135deg, #00e6fe 0%, #0bb7e0 100%)', boxShadow: '0 8px 24px rgba(0,230,254,0.35)' }}>
              Falar com Rosana
            </a>
            <Link href="/#planos" className="about-cta-button-secondary inline-flex items-center gap-2 text-[#00e6fe] font-semibold text-[16px] px-9 py-4 rounded-full border-2 border-[#00e6fe] shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:text-white hover:bg-[#00e6fe]">
              Ver Planos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
