import TransformacaoCard from '@/components/TransformacaoCard'

export default function TransformacoesPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold">Transformações</h1>
      <p className="text-white/70 max-w-2xl">Resultados reais do Método Transforme-se. Adicione novas transformações facilmente.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1,2,3,4,5,6,7,8,9].map((i) => (
          <TransformacaoCard key={i} before="/placeholder/photo.svg" after="/placeholder/photo.svg" />
        ))}
      </div>
    </div>
  )
}
