import Image from 'next/image'
import Link from 'next/link'

export default function HeroBanner() {
  return (
    <header className="py-12 flex gap-12 flex-col xl:flex-row">
      <Image
        src="/img/banner-placeholder.jpg"
        width={552}
        height={552}
        alt="New Collection of Toys!"
        className="flex-1 w-full md:w-2/3 lg:1/2 rounded-lg"
      />

      <div className="flex-1 flex flex-col justify-center items-start gap-4">
        <h1 className="text-2xl font-semibold">Trending Products</h1>
        <h2 className="text-5xl font-bold">
          Check out our new hand-made stuff
        </h2>
        <p className="text-lg font-medium mt-6 mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut magna,
          scelerisque vitae augue et, cursus placerat lorem. In nisi lacus,
          eleifend tincidunt quam et, consequat semper.
        </p>

        <Link href="/browse" className="button">
          Shop Now
        </Link>
      </div>
    </header>
  )
}
