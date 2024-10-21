'use client'

import { useEffect, useState } from 'react'
import { categories, sorts } from '@data/static'
import DropDown from '@components/DropDown'
import ProductsBox from '@modules/ProductsBox'
import { Product, ProductsData } from '@interfaces/interfaces'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function Browse() {
  const [categoryIndex, setCategoryIndex] = useState<number>(0)
  const [sortIndex, setSortIndex] = useState<number>(0)
  const [products, setProducts] = useState<Product[]>([])
  const searchParams = useSearchParams()
  const router = useRouter()

  const productsData: ProductsData = {
    handle: '/product/',
    products: products,
  }

  const handleFilter = async () => {
    const categoryQuery =
      'category=' + categories[categoryIndex].name.toLowerCase()
    const sortQuery = 'sortby=' + sorts[sortIndex].name
    const url = '/api/products?' + categoryQuery + '&' + sortQuery

    const productsRaw = await fetch(url)
    const data = await productsRaw.json()
    setProducts(data)
    router.push('/browse?' + categoryQuery + '&' + sortQuery)
  }

  useEffect(() => {
    // browser url query
    const query = searchParams.toString()

    console.log(query)

    const returnProducts = async () => {
      const productsRaw = await fetch('/api/products?' + query)
      const data = await productsRaw.json()
      setProducts(data)
    }
    returnProducts()
  }, [])

  return (
    <main className="container mx-auto">
      <nav className="flex items-center gap-4 py-12">
        <span>Category:</span>
        <DropDown
          current={categories[categoryIndex].name}
          options={categories}
          setCurrent={setCategoryIndex}
        />
        <span className="ml-8">Sort by:</span>
        <DropDown
          current={sorts[sortIndex].name}
          options={sorts}
          setCurrent={setSortIndex}
        />

        <button onClick={handleFilter} className="button bg-frappe ml-auto">
          Browse
        </button>
      </nav>
      <ProductsBox data={productsData} />
    </main>
  )
}
