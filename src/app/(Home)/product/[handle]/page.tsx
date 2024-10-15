import NotFound from '@components/NotFound'

export default async function Product({
  params,
}: {
  params: { handle: string }
}) {
  const { handle } = params

  const productRawData = await fetch(
    process.env.NEXT_BACKEND_URL + '/store/products?handle=' + handle
  )
  const productData = await productRawData.json()
  const product = productData.products[0]
  const price = product?.variants[0]?.prices[0]?.amount / 100

  // Need to add Error handling component
  if (!product) return <NotFound />

  const imageUrl = product.images[0].url.replace(
    'http://localhost:9000',
    process.env.NEXT_BACKEND_URL as string
  )

  return (
    <main className="container mx-auto py-12">
      <picture>
        <img
          src={imageUrl}
          alt={product.title}
          width={360}
          height={240}
          className="aspect-video w-full object-cover object-center rounded-md"
        />
      </picture>

      <h1 className="pt-12 text-3xl font-medium">{product.title}</h1>
      <p className="text-xl">{product.store.name}</p>

      <div className="pt-12 flex gap-8">
        <div>
          <p className="mb-2 text-lg font-semibold">About the product</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut magna,
            scelerisque vitae augue et, cursus placerat lorem. In nisi lacus,
            eleifend tincidunt quam et, consequat semper.
          </p>
          <p className="mt-12 mb-2 text-lg font-semibold">About the shop</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut magna,
            scelerisque vitae augue et, cursus placerat lorem. In nisi lacus,
            eleifend tincidunt quam et, consequat semper. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ut magna, scelerisque vitae augue
            et, cursus placerat lorem. In nisi lacus, eleifend tincidunt quam
            et, consequat semper.
          </p>
        </div>
        <div className="shrink-0 w-1/3 flex justify-end items-start">
          <button className="button">Buy for ${price}</button>
        </div>
      </div>
    </main>
  )
}
