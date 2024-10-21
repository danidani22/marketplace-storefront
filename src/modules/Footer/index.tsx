import Link from 'next/link'
import Image from 'next/image'

const data: LinkList[] = [
  {
    title: 'Useful Links',
    items: [
      { label: 'Why buy from Crafted Collective', link: '/' },
      { label: 'Terms of Service', link: '/' },
      { label: 'Privacy Policy', link: '/' },
      { label: 'FAQ', link: '/' },
    ],
  },
  {
    title: 'Shop',
    items: [
      { label: 'Browse all', link: '/browse' },
      { label: 'Toys', link: '/browse?category=toys' },
      { label: 'Pottery', link: '/browse?category=pottery' },
      { label: 'Art', link: '/browse?category=art' },
      { label: 'Homewares', link: '/browse?category=homeware' },
      { label: 'Clothing', link: '/browse?category=clothing' },
      { label: 'Decor', link: '/browse?category=decor' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About Us', link: '/' },
      { label: 'Contact Us', link: '/' },
      { label: "People's Stories", link: '/' },
    ],
  },
]

export default async function Footer() {
  return (
    <footer className="bg-kenya text-cream">
      <div className="container mx-auto flex justify-between py-24 ">
        {data.map((column, index) => {
          const { title, items } = column
          return (
            <div key={index}>
              <h2 className="font-semibold text-base mb-4">{title}</h2>
              <ul>
                {items.map((item, index) => {
                  const { label, link } = item
                  return (
                    <li
                      key={index}
                      className="text-sm mb-2 hover:underline font-light"
                    >
                      <a href={link}>{label}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}

        <Link href="/">
          <Image
            src="/logo.png"
            alt="Crafted Collective Logo"
            className="flex-1"
            width={167}
            height={42}
          />
        </Link>
      </div>
      <div className="container mx-auto">
        <div className="bg-frappe h-px"></div>
        <p className="text-xs py-6 font-thin">
          Copyright (c) 2024 Crafted Collective NZ. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

interface LinkList {
  title: string
  items: LinkItem[]
}

interface LinkItem {
  label: string
  link: string
}
