import { NextRequest } from 'next/server'
import { Stripe } from 'stripe'

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET as string)

  const { productId } = await request.json()
  const response = await fetch(
    process.env.NEXT_MEDUSA_URL + '/store/products?id=' + productId
  )
  const data = await response.json()
  const price = data.products[0].variants[0].prices[0].amount

  const priceId = await stripe.prices.create({
    currency: 'nzd',
    unit_amount: price,
    product_data: {
      name: data.products[0].title,
    },
  })

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId.id,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3000/browse`,
    cancel_url: `http://localhost:3000/`,
  })

  return Response.json({ success: true, url: session.url })
}
