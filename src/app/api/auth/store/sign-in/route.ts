import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const formData = await request.json()

  try {
    const rawData = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + '/admin/auth',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }
    )
    if (!rawData.ok) throw new Error('Failed to sign in')

    const responseCookies = rawData.headers.get('set-cookie')
    console.log(cookies().getAll())
    // cookies().set('auth', responseCookies as string, { httpOnly: true })
    // cookies().set('role', 'store-owner', { httpOnly: true })

    return Response.json({ success: true })
  } catch (error) {
    console.log(error)
    return Response.json({ success: false, error: error.message })
  }
}

export async function GET(request: Request) {
  const userRole = cookies().get('role')
  //console.log(request.headers)

  // const rawData = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/admin/auth')
  // if (!rawData.ok) return Response.json({ success: false })
  // const data = await rawData.json()

  return Response.json({ userData: 'data' })
}
