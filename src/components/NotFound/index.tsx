export default function NotFound({ item }: { item: string }) {
  return (
    <div className="container mx-auto min-h-56 flex justify-center items-center">
      <h1 className="text-2xl font-medium">{item} Not Found</h1>
    </div>
  )
}
