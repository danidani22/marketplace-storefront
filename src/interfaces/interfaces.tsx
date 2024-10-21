export interface Product {
  id: string
  title: string
  handle: string
  thumbnail: string
  store?: {
    name: string
  }
}

export interface ProductsData {
  title?: string
  link?: string
  description?: string
  handle?: string
  products: Product[]
}

export interface QueryRecord {
  query: string
  name: string
}
