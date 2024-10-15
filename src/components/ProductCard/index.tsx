// import Image from 'next/image'
import { Product } from '@interfaces/interfaces'
import Link from 'next/link'

export default function ProductCard({ data }: { data: Product }) {
  const thumbnail = data.thumbnail.replace(
    'http://localhost:9000',
    process.env.NEXT_BACKEND_URL as string
  )

  return (
    <div className="flex flex-col gap-4 group pb-6">
      <Link href={data.handle}>
        <picture>
          <img
            src={thumbnail}
            alt={data.title}
            width={360}
            height={240}
            className="aspect-poster w-full object-cover rounded-md"
          />
        </picture>
        <p className="pt-6 text-2xl font-semibold group-hover:underline">
          {data.title}
        </p>
        {data.store && (
          <p className="group-hover:underline">{data.store.name}</p>
        )}
      </Link>
    </div>
  )
}
