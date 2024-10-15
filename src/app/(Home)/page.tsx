import HeroBanner from '@modules/HeroBanner'
import ProductsBox from '@modules/ProductsBox'
import { categories } from '@data/static'
import { featuredProductsData, trendingToysData } from '@data/dynamic'

export default async function Home() {
  const featuredCategories = categories
  const featuredProducts = await featuredProductsData()
  const trendingToys = await trendingToysData()

  return (
    <main className="container mx-auto">
      <HeroBanner />
      <ProductsBox data={featuredCategories} />
      <ProductsBox data={featuredProducts} />
      <ProductsBox data={trendingToys} />
    </main>
  )
}
