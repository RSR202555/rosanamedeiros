import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Variant = 'secaps-black' | 'secaps-max' | 'seca-ja' | 'monjaro'

export default function ProdutoCard({
  title,
  description,
  image,
  variant,
  style,
}: {
  title: string
  description: string
  image: string
  variant?: Variant
  style?: React.CSSProperties
}) {
  const variantColor: Record<Variant, string> = {
    'secaps-black': '#FF6B6B',
    'secaps-max': '#25D366',
    'seca-ja': '#FFA500',
    'monjaro': '#A29BFE',
  }

  const topBorder = variant ? variantColor[variant] : undefined

  return (
    <Card
      style={{ borderTopColor: topBorder, ...style }}
      className={`product-card ${variant ?? ''} group relative overflow-hidden bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] border-t-4 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] before:content-[''] before:absolute before:top-0 before:right-0 before:w-20 before:h-20 before:bg-[linear-gradient(135deg,#25D366_0%,#128C7E_100%)] before:opacity-10 before:rounded-tr-2xl before:rounded-bl-[100%] animate-fadeInUp`}
    >
      <CardHeader className="p-0 mb-4">
        <CardTitle className="product-title text-[#1A1A2E] font-extrabold text-[24px] md:text-[28px] leading-tight text-center mt-0 mb-6 relative pb-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="product-image-container relative w-full mb-6 rounded-2xl border-2 border-[#F0F0F0] overflow-hidden bg-[linear-gradient(135deg,#F8F9FA_0%,#FFFFFF_100%)] min-h-[280px] flex items-center justify-center after:content-[''] after:absolute after:-top-1/2 after:-right-1/2 after:w-[200%] after:h-[200%] after:bg-[radial-gradient(circle,rgba(37,211,102,0.05)_0%,transparent_70%)]">
          <Image src={image} alt={title} fill className="object-contain transition-transform duration-400 ease-out group-hover:scale-105" unoptimized sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
        </div>
        <p className="product-description text-[#636E72] text-[15px] leading-[1.7] mb-7 text-center">{description}</p>
        <a
          href="https://wa.me/558386200546"
          target="_blank"
          className="whatsapp-button w-full max-w-[280px] mx-auto inline-flex items-center gap-2 text-white font-semibold text-[16px] px-8 py-4 rounded-full justify-center transition-all duration-300 hover:-translate-y-[3px]"
          style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', boxShadow: '0 8px 24px rgba(37, 211, 102, 0.35)' }}
        >
          <MessageCircle size={18} /> Comprar pelo WhatsApp
        </a>
      </CardContent>
    </Card>
  )
}
