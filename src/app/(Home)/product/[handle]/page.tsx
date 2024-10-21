import BuyButton from '@components/BuyButton'
import NotFound from '@components/NotFound'

interface Params {
  params: {
    handle: string
  }
}

export default async function Product({ params }: Params) {
  const { handle } = params

  const productRawData = await fetch(
    process.env.NEXT_MEDUSA_URL + '/store/products?handle=' + handle
  )
  const productData = await productRawData.json()
  const product = productData.products[0]
  const price = product?.variants[0]?.prices[0]?.amount / 100

  // Need to add Error handling component
  if (!product) return <NotFound item="handle" />

  const imageUrl = product.images[0].url.replace(
    'http://localhost:9000',
    process.env.NEXT_MEDUSA_URL as string
  )

  return (
    <main className="container mx-auto py-24">
      <div className="flex gap-8">
        <picture className="flex-1">
          <img
            src={imageUrl}
            alt={product.title}
            width={360}
            height={240}
            className="aspect-square object-cover object-center w-full rounded-md"
          />
        </picture>

        <div className="flex-1">
          <h1 className="text-3xl font-medium">{product.title}</h1>
          <a href={'/stall/' + product.store.name}>
            <p className="text-xl">{product.store.name}</p>
          </a>
          <p className="pt-12 mb-2 text-lg font-semibold">About the product</p>
          <p className="text-lg">
            {product.description}
          </p>
          <BuyButton price={price} productId={product.id} />
        </div>
      </div>

    </main>
  )
}
