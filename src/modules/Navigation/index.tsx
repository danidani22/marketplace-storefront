'use client'

import Link from 'next/link'
import Image from 'next/image'
import Search from './Search'

export default function Navigation() {
  return (
    <header className="bg-kenya/60 backdrop-blur-md sticky top-0">
      <div className="container mx-auto h-24 flex items-center justify-stretch">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Crafted Collective Logo"
            className="flex-1"
            width={167}
            height={42}
          />
        </Link>
        <div className="w-8/12 ml-auto">
          <Search />
        </div>
      </div>
    </header>
  )
}
