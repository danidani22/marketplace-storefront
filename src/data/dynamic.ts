import { Product, ProductsData } from '@interfaces/interfaces'

export async function featuredProductsData(): Promise<ProductsData> {
  const requestUrl = process.env.NEXT_BACKEND_URL + '/api/products'
  const query = '?sortby=featured'
  const response = await fetch(requestUrl + query)
  const data = await response.json()

  return {
    title: 'Featured Products',
    link: '/browse?sortby=featured',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut magna, scelerisque vitae augue et, cursus placerat lorem. In nisi lacus, eleifend tincidunt quam et, consequat semper.',
    handle: '/product/',
    products: data,
  }
}

export async function trendingToysData(): Promise<ProductsData> {
  const requestUrl = process.env.NEXT_BACKEND_URL + '/api/products'
  const query = '?category=toys'
  const response = await fetch(requestUrl + query)
  const data = await response.json()

  return {
    title: 'Trending Toys',
    link: '/browse?sortby=popular&category=toys',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut magna, scelerisque vitae augue et, cursus placerat lorem. In nisi lacus, eleifend tincidunt quam et, consequat semper.',
    handle: '/product/',
    products: data,
  }
}

export async function filterAndSort(query: string): Promise<Product[]> {
  const response = await fetch('/api/products?' + query)
  const data = await response.json()

  return data
}
