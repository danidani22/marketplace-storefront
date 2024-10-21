import { QueryRecord } from '@interfaces/interfaces'

export default function getQuery(name: string | null, queries: QueryRecord[]) {
  const query = queries.find(
    (category) => category.name.toLowerCase() === name?.toLowerCase()
  )
  return query ? query.query : ''
}
