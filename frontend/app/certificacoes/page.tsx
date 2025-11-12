 import { Award, Dumbbell, HeartPulse, Salad, Activity, Medal, Brain, Download, Eye, FileText } from 'lucide-react'

 type Certificacao = { title: string; org?: string; year?: string }

 const certificacoes: Certificacao[] = [
  { title: 'Biomecanica' },
  {
    title: 'Hipertrofia e Emagrecimento Avançado',
  },
  {
    title: 'Run Experience: Fundamentos e Práticas para Treinadores de Corrida de Rua',
    org: 'Run Experience',
  },
  {
    title: 'Curso de Capacitação: Prática da Educação Física no Desenvolvimento da Pessoa com TEA',
    org: 'Capacitação',
  },
  {
    title: 'Curso: Saúde e Qualidade de Vida no Ambiente de Trabalho',
  },
]

const especialidades = [
  // Prioridade solicitada
  { icon: Dumbbell, label: 'Treinamento Para Homens e Mulheres' },
  { icon: Dumbbell, label: 'Foco em Emagrecimento , Hipertrofia e Definição' },
  // Demais em ordem sensata
  { icon: Activity, label: 'Especialista em Aulas Coletivas RITRM (Step,Funcional e Ritbox)' },
  { icon: Brain, label: 'RITRM' },
  { icon: HeartPulse, label: 'Treino Para Gestantes' },
  { icon: Medal, label: 'Ventosaterapia (Alívio de dores)' },
  // Enviar para o final, conforme pedido
  { icon: HeartPulse, label: 'Massoterapia (recuperação muscular)' },
  { icon: Activity, label: 'Liberação Miofascial Manual (Área Desportiva)' },
]

const accentColors = ['#FF6B6B', '#4ECDC4', '#A29BFE', '#FD79A8', '#FDCB6E', '#6C5CE7']

export default function CertificacoesPage() {
  return (
    <div className="space-y-12">

      {/* CREF destaque */}
      <div className="relative overflow-hidden rounded-2xl p-6 md:p-8 shadow-[0_16px_50px_rgba(0,0,0,0.18)] bg-gradient-to-r from-[#667eea] to-[#00D7FF] text-white mt-20 md:mt-28">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
        <div className="flex items-center gap-3 md:gap-4">
          <Award className="shrink-0" color="#FFFFFF" />
          <div>
            <p className="text-white/80 text-sm md:text-base m-0">Registro Profissional</p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight m-0">CREF 008652-G/PB</h2>
          </div>
        </div>
      </div>


      <section className="space-y-6">
        <div className="bg-white px-6 md:px-10 py-5 md:py-6 rounded-2xl border-l-[5px] border-[#FF6B6B] shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-fit block mr-auto mb-4">
          <h2 className="text-black font-extrabold text-[24px] md:text-[30px] m-0">Especialidades</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {especialidades.map((e, i) => {
            const color = accentColors[i % accentColors.length]
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-7 md:p-6 flex items-center gap-3 shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-300 border-l-4"
                style={{ borderColor: color }}
              >
                <e.icon className="shrink-0" color={color} />
                <span className="text-[#2D3436] font-semibold text-[17px] text-center">{e.label}</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="space-y-6">
        <div className="bg-white px-6 md:px-10 py-5 md:py-6 rounded-2xl border-l-[5px] border-[#FF6B6B] shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-fit block mr-auto mb-4">
          <h2 className="text-black font-extrabold text-[24px] md:text-[30px] m-0">Certificações</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {certificacoes.map((c, i) => {
            const color = accentColors[i % accentColors.length]
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-7 flex items-start gap-4 shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-300 border-l-4"
                style={{ borderColor: color }}
              >
                <Award color={color} />
                <div>
                  <h3 className="text-[#1A1A2E] font-bold text-[20px]">{c.title}</h3>
                  {c.org && <p className="text-[#636E72] text-[15px]">{c.org}</p>}
                  {c.year && <p className="text-[#636E72] text-[14px] font-medium">{c.year}</p>}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
