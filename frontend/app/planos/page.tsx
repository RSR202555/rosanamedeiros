export default function PlanosPage() {
  return (
    <section className="plans-section" id="planos">
      <div className="plans-title-container bg-white px-6 md:px-10 py-5 md:py-6 rounded-2xl border-l-[5px] border-[#667eea] shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-fit block mr-auto mb-6 md:mb-10">
        <h2 className="text-[#1A1A2E] font-extrabold text-[28px] md:text-[36px] m-0">Planos de Consultoria</h2>
      </div>

      <div className="plans-grid">
        {/* Plano Mensal */}
        <div className="plan-card mensal">
          <div className="plan-header">
            <h3 className="plan-name">Plano Mensal</h3>
            <p className="plan-description">Ideal para quem quer começar e testar o acompanhamento profissional</p>
          </div>
          <div className="plan-price">
            <div className="plan-price-value"><span className="plan-price-currency">R$</span>297</div>
            <span className="plan-price-period">por mês</span>
          </div>
          <ul className="plan-features">
            <li>Planejamento de treino personalizado</li>
            <li>Estratégias de alimentação customizadas</li>
            <li>Acompanhamento semanal via WhatsApp</li>
            <li>Ajustes periódicos no treino</li>
            <li>Suporte e orientação profissional</li>
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
          <a href="/contato" className="plan-button">Começar Agora</a>
        </div>

        {/* Plano Trimestral */}
        <div className="plan-card trimestral popular">
          <div className="plan-badge">💎 Mais Escolhido</div>
          <div className="plan-header">
            <h3 className="plan-name">Plano Trimestral</h3>
            <p className="plan-description">Compromisso com resultados reais e transformação duradoura</p>
          </div>
          <div className="plan-price">
            <div className="plan-price-value"><span className="plan-price-currency">R$</span>247</div>
            <span className="plan-price-period">por mês</span>
            <div className="plan-savings">💰 Economize R$ 150 no trimestre</div>
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
          <a href="/contato" className="plan-button">Garantir Desconto</a>
        </div>
      </div>

      <div className="plans-footer text-center mt-10 md:mt-14 px-6">
        <p className="text-[#2D3436] text-[16px] m-0">
          💬 Tem dúvidas sobre qual plano escolher? <a className="text-[#667eea] font-semibold border-b-2 border-[#667eea]" href="/contato">Fale comigo</a> e vamos encontrar a melhor opção para você!
        </p>
      </div>
    </section>
  )
}
