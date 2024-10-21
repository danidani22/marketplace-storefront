import { NextRequest } from 'next/server'
import { categories, sorts } from '@data/static'
import getQuery from '@lib/getQuery'

export async function GET(request: NextRequest) {
  // Getting our Next client query parameters
  const params = request.nextUrl.searchParams
  const category = getQuery(params.get('category'), categories)
  const sortby = getQuery(params.get('sortby'), sorts)
  const limit = params.get('limit')
  // Building a query string for the backend API
  const query =
    '?' +
    (category ? 'tags[]=' + category : '') +
    (sortby ? '&order=' + sortby : '') +
    (limit ? '&limit=' + limit : '')

  // Setting up the backend API URL
  let backendAPIUrl = process.env.NEXT_MEDUSA_URL + '/store/products' + query
  // Temporary solution
  if (params.get('sortby') === 'featured') {
    // A little hack while the backend API not fixed for the featured products
    backendAPIUrl = process.env.NEXT_MEDUSA_URL + '/store/featured-products'

    const response = await fetch(backendAPIUrl)
    const data = await response.json()

    return Response.json(data)
  }

  const response = await fetch(backendAPIUrl)
  const data = await response.json()

  return Response.json(data.products)
}
