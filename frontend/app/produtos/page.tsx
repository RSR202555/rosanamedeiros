import ProdutoCard from '@/components/ProdutoCard'

export default function ProdutosPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold">Produtos</h1>
      <p className="text-white/70 max-w-2xl">Produtos que complementam sua jornada de emagrecimento, com orientação profissional.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ProdutoCard title="Secaps Black" description="Termogênico avançado." image="/produtos/secaps-black.jpg" />
        <ProdutoCard title="Secaps Max" description="Queima de gordura otimizada." image="/produtos/secaps-max.jpg" />
        <ProdutoCard title="Seca Já" description="Ação rápida." image="/produtos/secaja.jpg" />
        <ProdutoCard title="Monjaro" description="Controle de apetite." image="/produtos/monjaro.jpg" />
      </div>
    </div>
  )
}
