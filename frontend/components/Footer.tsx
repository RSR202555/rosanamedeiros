import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-16">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-black/70 text-sm">© {new Date().getFullYear()} Rosana Medeiros. Todos os direitos reservados.</p>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/sobre" className="text-black/80 hover:text-primary hover-animate">Sobre</Link>
          <Link href="/contato" className="text-black/80 hover:text-primary hover-animate">Contato</Link>
          <Link href="#" className="text-black/80 hover:text-primary hover-animate">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  )
}
