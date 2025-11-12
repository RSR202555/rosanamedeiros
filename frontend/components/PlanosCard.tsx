import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PlanosCard({ title, description, href, highlight }: { title: string; description: string; href: string; highlight?: boolean }) {
  const topBarColor = title === 'Transforme-se Essencial'
    ? '#FF6B6B'
    : title === 'R.M. Transformation'
    ? '#4ECDC4'
    : title === 'Performance & Bem-estar'
    ? '#95E1D3'
    : '#4ECDC4'
  return (
    <Card className={`bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:-translate-y-2.5 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${highlight ? 'border border-primary/40' : ''}`}>
      <div className="h-1 rounded-t-2xl" style={{ backgroundColor: topBarColor }} />
      <CardHeader className="px-6 md:px-10 pt-6 md:pt-10">
        <CardTitle className="text-[#1A1A2E] font-bold text-xl md:text-2xl mb-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-6 md:px-10 pb-6 md:pb-10">
        <p className="text-[#636E72] text-base leading-[1.6] mb-6">{description}</p>
        <ul className="space-y-2 text-[#2D3436] text-[15px] leading-[1.8] mb-6">
          <li className="flex gap-2"><span style={{ color: topBarColor }}>✓</span><span>Planejamento de treino personalizado</span></li>
          <li className="flex gap-2"><span style={{ color: topBarColor }}>✓</span><span>Estratégias de alimentação</span></li>
          <li className="flex gap-2"><span style={{ color: topBarColor }}>✓</span><span>Ajustes periódicos e acompanhamento</span></li>
        </ul>
        <Link href={href} className="group inline-flex items-center gap-1 font-semibold text-[16px] no-underline transition-all duration-300 hover:underline" style={{ color: topBarColor }}>
          Saiba mais
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </CardContent>
    </Card>
  )
}
