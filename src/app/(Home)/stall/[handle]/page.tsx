import ProductsBox from '@modules/ProductsBox'
import NotFound from '@components/NotFound'

interface Params {
  params: {
    handle: string
  }
}

export default async function Store({ params }: Params) {
  const { handle } = params

  const storeRawData = await fetch(
    process.env.NEXT_MEDUSA_URL + '/store/name?store_name=' + handle
  )
  const storeData = await storeRawData.json()

  // Need to add Error handling component
  if (storeData.error) return <NotFound item="Store" />

  const productsRawData = await fetch(
    process.env.NEXT_MEDUSA_URL +
      '/store/products-from?store_id=' +
      storeData.id
  )
  const productsData = await productsRawData.json()

  const data = {
    ...productsData,
    title: storeData.name,
    handle: '/product/',
  }

  return (
    <div className="container mx-auto">
      <ProductsBox data={data} />
    </div>
  )
}
