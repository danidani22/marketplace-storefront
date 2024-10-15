'use client'

export default function Search() {
  return (
    <form action="post" className="">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search..."
        className="w-full h-12 px-4 rounded-md"
      />
    </form>
  )
}
