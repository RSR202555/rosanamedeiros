import Hero from '@/components/Hero'
import TransformacaoCard from '@/components/TransformacaoCard'
import ProdutoCard from '@/components/ProdutoCard'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section id="inicio"
        className="relative w-screen -ml-[50vw] left-1/2 -mr-[50vw] right-1/2 overflow-hidden min-h-screen h-screen flex items-center justify-center"
        style={{
          backgroundColor: '#00e6fe',
          backgroundImage: "url('/capa-inicial.jpg.png.jpg?v=5')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        
        <Hero />

        {/* Scroll indicator */}
        <div className="mt-6 md:mt-8 flex justify-center">
          <a href="#planos" className="scroll-indicator">
            <span className="dot"></span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5v14M12 19l-6-6M12 19l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      

      <section
        id="planos"
        className="px-4"
      >
        <div className="flex flex-col items-center gap-4 md:gap-5 w-full">
        <div className="plans-title-container bg-white px-6 md:px-10 py-5 md:py-6 rounded-2xl border-l-[5px] border-[#667eea] shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-fit block mx-auto">
          <h2 className="text-[#1A1A2E] font-extrabold text-[28px] md:text-[36px] m-0">Planos de Consultoria</h2>
        </div>
        <div className="plans-grid">
          {/* Plano Mensal */}
          <div className="plan-card mensal">
            <div className="plan-header">
              <h3 className="plan-name">Plano Mensal</h3>
              <p className="plan-description">Ideal para quem quer começar e testar o acompanhamento profissional</p>
            </div>
            
            <ul className="plan-features">
              <li>Planejamento de treino personalizado</li>
              <li>Estratégias de alimentação customizadas</li>
              <li>Acompanhamento semanal via WhatsApp</li>
              <li>Ajustes periódicos no treino</li>
              <li>Suporte e orientação profissional</li>
              <li>Avaliação física completa (início e fim)</li>
              <li>Prioridade no atendimento</li>
            </ul>
            <div className="plan-divider">
              <div className="plan-divider-line" />
              <span className="plan-divider-text">✨ Bônus Exclusivos</span>
              <div className="plan-divider-line" />
            </div>
            <ul className="plan-bonuses">
              <li>Desconto com nutricionista parceiro</li>
              <li>Desconto em ótica conveniada</li>
              <li>Desconto em massagem relaxante</li>
              <li>Desconto em ventosa terapia</li>
            </ul>
            <a href="https://wa.me/558386200546" target="_blank" rel="noopener noreferrer" className="plan-button">Começar Agora</a>
          </div>

          {/* Plano Trimestral */}
          <div className="plan-card trimestral popular">
            <div className="plan-badge">💎 Mais Escolhido</div>
            <div className="plan-header">
              <h3 className="plan-name">Plano Trimestral</h3>
              <p className="plan-description">Compromisso com resultados reais e transformação duradoura</p>
            </div>
            
            <ul className="plan-features">
              <li>Planejamento de treino personalizado</li>
              <li>Estratégias de alimentação customizadas</li>
              <li>Acompanhamento semanal via WhatsApp</li>
              <li>Ajustes periódicos no treino</li>
              <li>Suporte e orientação profissional</li>
              <li>Avaliação física completa (início e fim)</li>
              <li>Prioridade no atendimento</li>
            </ul>
            <div className="plan-divider">
              <div className="plan-divider-line" />
              <span className="plan-divider-text">✨ Bônus Exclusivos</span>
              <div className="plan-divider-line" />
            </div>
            <ul className="plan-bonuses">
              <li>Desconto com nutricionista parceiro</li>
              <li>Desconto em ótica conveniada</li>
              <li>Desconto em massagem relaxante</li>
              <li>Desconto em ventosa terapia</li>
            </ul>
            <a href="https://wa.me/558386200546" target="_blank" rel="noopener noreferrer" className="plan-button">Garantir Desconto</a>
          </div>
        </div>
        </div>
      </section>

      <section id="transformacoes" className="space-y-8">
        <div className="bg-white px-6 md:px-10 py-5 md:py-6 rounded-2xl border-l-[5px] border-[#667eea] shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-fit block mr-auto mb-4">
          <h2 className="text-black font-extrabold text-[28px] md:text-[36px] m-0">Transformações</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            '/transformacoes/transformação1.jpg',
            '/transformacoes/trasnformação2.jpg',
            '/transformacoes/transformação3.jpg',
            '/transformacoes/transformação4.jpg',
            '/transformacoes/transformacao5.jpg',
            '/transformacoes/transformacao6.jpg',
          ].map((src, idx, arr) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 transition-all duration-300">
              <div className="relative h-[420px] md:h-[520px] overflow-hidden bg-white">
                <Image src={src} alt={`Transformação ${idx + 1}`} fill className="object-contain p-2" />
                <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.7) 100%)' }} />
              </div>
              <div className="px-5 py-5 text-center text-[#2D3436] text-[14px] font-medium">{idx >= arr.length - 2 ? 'Em apenas um mês !' : 'Transformação'}</div>
            </div>
          ))}
        </div>
        <div className="text-right">
          <Link href="/transformacoes" className="text-primary hover:underline">Ver mais</Link>
        </div>
      </section>

      <section id="depoimentos" className="space-y-8">
        <div className="bg-white px-6 md:px-10 py-5 md:py-6 rounded-2xl border-l-[5px] border-[#667eea] shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-fit block mr-auto mb-4">
          <h2 className="text-black font-extrabold text-[28px] md:text-[36px] m-0">Depoimentos</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { src: '/videos/depoimento1.mp4.mp4', label: 'Depoimento 1' },
            { src: '/videos/depoimento2.mp4.mp4', label: 'Depoimento 2' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 transition-all duration-300">
              <div className="relative w-full">
                <div className="w-full aspect-video bg-black">
                  <video
                    className="w-full h-full"
                    controls
                    preload="metadata"
                  >
                    <source src={`${item.src}#t=0.1`} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                </div>
              </div>
              <div className="px-5 py-4 text-center text-[#2D3436] text-[14px] font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="produtos" className="space-y-8">
        <div className="products-title-container bg-white px-6 md:px-10 py-5 md:py-6 rounded-2xl border-l-[5px] border-[#25D366] shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-fit block mr-auto mb-12">
          <h2 className="text-[#1A1A2E] font-extrabold text-[28px] md:text-[36px] m-0">Produtos para Emagrecimento</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ProdutoCard
            title="Secaps Black"
            description="Foco e termogênese avançada para acelerar resultados."
            image="/produtos/secaps-black.jpg"
            variant="secaps-black"
            style={{ animationDelay: '0.1s' }}
          />
          <ProdutoCard
            title="Secaps Max"
            description="Blend otimizado para queima de gordura com energia."
            image="/produtos/secaps-max.jpg"
            variant="secaps-max"
            style={{ animationDelay: '0.2s' }}
          />
          <ProdutoCard
            title="Monjaro"
            description="Apoio no controle de apetite com acompanhamento profissional."
            image="/produtos/monjaro.jpg"
            variant="monjaro"
            style={{ animationDelay: '0.4s' }}
          />
          <ProdutoCard
            title="Memo Life"
            description="Suporte à memória e foco para o dia a dia."
            image="/produtos/memolife.jpg"
            style={{ animationDelay: '0.5s' }}
          />
          <ProdutoCard
            title="Derme e Hair Ultra"
            description="Cuidados avançados para pele, unhas e cabelos."
            image="/produtos/dermehair.jpg"
            style={{ animationDelay: '0.6s' }}
          />
          <ProdutoCard
            title="Psyllium"
            description="Fibras para saciedade e saúde intestinal."
            image="/produtos/psyllium.jpg"
            style={{ animationDelay: '0.7s' }}
          />
          <ProdutoCard
            title="COQ 10"
            description="Coenzima Q10 para energia e performance diária."
            image="/produtos/coq10.jpg"
            style={{ animationDelay: '0.8s' }}
          />
          <ProdutoCard
            title="Flexi Gold ARTRI"
            description="Suporte articular para mobilidade e conforto."
            image="/produtos/flexigold ARTRI.jpg"
            style={{ animationDelay: '0.9s' }}
          />
        </div>
      </section>

      <section id="resultados" className="space-y-8">
        <div className="bg-white px-6 md:px-10 py-5 md:py-6 rounded-2xl border-l-[5px] border-[#25D366] shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-fit block mr-auto mb-4">
          <h2 className="text-[#1A1A2E] font-extrabold text-[28px] md:text-[36px] m-0">Resultados</h2>
        </div>
        <p className="text-black/70">Alguns resultados alcançados utilizando os produtos acima.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: '/resultados/secapsblack.jpg', label: 'Secaps Black' },
            { src: '/resultados/secapsmax.jpg', label: 'Secaps Max' },
            { src: '/resultados/secapsmax2.jpg', label: 'Secaps Max' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 transition-all duration-300">
              <div className="relative h-[360px] md:h-[440px] overflow-hidden bg-white">
                <Image src={item.src} alt={`Resultado ${i + 1} - ${item.label}`} fill className="object-contain p-2" />
              </div>
              <div className="px-5 py-4 text-center text-[#2D3436] text-[14px] font-medium"><span className="font-semibold">Produto:</span> {item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="px-4 py-16">
        <div className="bg-white px-6 md:px-10 py-5 md:py-6 rounded-2xl border-l-[5px] border-[#00e6fe] shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-fit block mr-auto mb-6">
          <h2 className="text-[#1A1A2E] font-extrabold text-[28px] md:text-[36px] m-0">Contato</h2>
        </div>
        <div className="max-w-3xl">
          <p className="text-white/90 mb-6 text-base md:text-lg">Fale comigo pelo WhatsApp ou Instagram</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/558386200546"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold transition-all"
              style={{ background: 'linear-gradient(135deg, #25D366 0%, #17a95a 100%)', boxShadow: '0 8px 20px rgba(37,211,102,0.35)' }}
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/rosanamdr21personal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white font-semibold transition-all"
              style={{ background: 'linear-gradient(135deg, #E1306C 0%, #C13584 100%)', boxShadow: '0 8px 20px rgba(225,48,108,0.35)' }}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
