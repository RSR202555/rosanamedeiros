"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 40])
  return (
    <section className="relative w-full px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 4px 8px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.2)' }}>
          MÉTODO <span className="text-primary">R.M</span> TRANSFORMATION
        </h1>
        <span className="inline-block text-lg md:text-xl tracking-widest uppercase text-primary/90 mb-2 transform translate-x-2 md:translate-x-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
          Consultoria Online de
          <br />
          Emagrecimento, Hipertrofia e Definição
        </span>
        <p className="mt-3 md:mt-4 text-white max-w-xl mx-auto leading-normal text-base md:text-lg transform translate-x-2 md:translate-x-4" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.7)' }}>
          Método Transforme-se (R.M. Transformation): um caminho claro e sustentável para queimar gordura, ganhar confiança e transformar sua vida.
        </p>
        <div className="mt-12 flex flex-wrap gap-5 justify-center transform translate-x-2 md:translate-x-4">
          <Link
            href="https://wa.me/558386200546"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transform transition-transform duration-300 ease-out will-change-transform hover:scale-[1.04] focus:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#00D7FF]/30"
            style={{ background: 'linear-gradient(135deg, #00D7FF 0%, #2EC8FF 100%)', boxShadow: '0 10px 26px rgba(0, 215, 255, 0.35)' }}
          >
            ⚡ Avaliação gratuita na adesão!
          </Link>
          <Link
            href="#planos"
            className="inline-flex items-center gap-2 border-2 border-white/70 text-white px-8 py-4 rounded-full transition-colors duration-300 ease-out hover:bg-white hover:text-[#2D3436] focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            COMECE SUA TRANSFORMAÇÃO →
          </Link>
        </div>
      </motion.div>

      

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="pointer-events-none absolute inset-0"
      >
        <motion.div style={{ y }} className="absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full blur-3xl">
          <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 60%)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
