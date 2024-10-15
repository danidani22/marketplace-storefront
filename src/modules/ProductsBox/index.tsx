import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { ProductsData } from '@interfaces/interfaces'

export default function ProductsBox({ data }: { data: ProductsData | null }) {
  if (!data) return null

  return (
    <section className="py-12 flex flex-col">
      <h3 className="text-3xl font-medium">{data.title}</h3>
      <div className="flex justify-between items-start mt-6 mb-16">
        <p className="w-3/5">{data.description}</p>
        <Link href={data.link} className="button--outlined">
          Explore All
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {data.products.map((product) => (
          <ProductCard
            key={product.id}
            data={{ ...product, handle: data.handle + product.handle }}
          />
        ))}
      </div>
    </section>
  )
}
