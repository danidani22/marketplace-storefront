'use client'

import { useRouter } from 'next/navigation'

export default function BuyButton({
  price,
  productId,
}: {
  price: number
  productId: string
}) {
  const router = useRouter()

  const handlePurchase = async () => {
    const response = await fetch('/api/checkout-session', {
      method: 'POST',
      body: JSON.stringify({ productId: productId }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    if (data.success) router.push(data.url)
  }

  return (
    <button className="button mt-12" onClick={handlePurchase}>
      Buy for ${price}
    </button>
  )
}
