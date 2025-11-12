import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/558386200546"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-primary text-black rounded-full p-3 shadow-lg hover:opacity-90 hover-animate"
      aria-label="WhatsApp"
    >
      <MessageCircle />
    </Link>
  )
}
