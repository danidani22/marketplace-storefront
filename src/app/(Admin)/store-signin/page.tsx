'use client'

import { useContext, useState } from 'react'
import Link from 'next/link'
import { MedusaContext } from '@/app/provider'

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false)
  const medusaContext = useContext(MedusaContext)

  // const adminLogin = useAdminLogin()
  // const router = useRouter()
  console.log(medusaContext)

  const handleSignin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    medusaContext?.medusa.admin.auth
      .createSession({ email, password })
      .then((response) => {
        console.log('Session creation response: ', response)
      })
  }

  return (
    <main className="container mx-auto h-full flex justify-center items-center">
      <form
        method="POST"
        onSubmit={handleSignin}
        className="p-8 flex flex-col gap-8 w-96 text-kenya"
      >
        <h3 className="text-3xl font-medium">Welcome Back!</h3>

        <div className="flex flex-col">
          <label htmlFor="email" className="ml-2 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="input"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="ml-2 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="input"
            required
          />
        </div>

        <button type="submit" className="button w-min" aria-disabled={loading}>
          Login
        </button>

        <Link href="/">Home</Link>
      </form>
    </main>
  )
}
