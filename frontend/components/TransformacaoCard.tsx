 "use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function TransformacaoCard({ before, after }: { before: string; after: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 transition-all duration-300">
      <div className="grid grid-cols-2 gap-0">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image src={before} alt="Antes" fill className="object-cover" />
          <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.7) 100%)' }} />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image src={after} alt="Depois" fill className="object-cover" />
          <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.7) 100%)' }} />
        </div>
      </div>
      <div className="px-5 py-5 text-center text-[#2D3436] text-[14px] font-medium">Antes <span className="text-[#4ECDC4]">•</span> Depois</div>
    </motion.div>
  )
}
