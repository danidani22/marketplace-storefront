import { ProductsData, QueryRecord } from '@interfaces/interfaces'

export const categoriesData: ProductsData = {
  title: 'Featured Categories',
  link: '/browse',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut magna, scelerisque vitae augue et, cursus placerat lorem. In nisi lacus, eleifend tincidunt quam et, consequat semper.',
  handle: '/browse?category=',
  products: [
    {
      id: 'category_toys',
      title: 'Toys',
      handle: 'toys',
      thumbnail: '/img/categories/toys.webp',
    },
    {
      id: 'category_pottery',
      title: 'Pottery',
      handle: 'pottery',
      thumbnail: '/img/categories/pottery.jpg',
    },
    {
      id: 'category_art',
      title: 'Art',
      handle: 'art',
      thumbnail: '/img/categories/art.jpg',
    },
    {
      id: 'category_homewares',
      title: 'Homewares',
      handle: 'homewares',
      thumbnail: '/img/categories/homewares.jpg',
    },
    {
      id: 'category_clothing',
      title: 'Clothing',
      handle: 'clothing',
      thumbnail: '/img/categories/clothing.jpg',
    },
    {
      id: 'category_decor',
      title: 'Decor',
      handle: 'decor',
      thumbnail: '/img/categories/decor.png',
    },
  ],
}

export const categories: QueryRecord[] = [
  { query: '', name: 'All' },
  { query: 'ptag_01JA7J7QA7Z8E55CH4QPAWGM04', name: 'Accessories' },
  { query: 'ptag_01JA4FS5MQRZX9K8W2AVY6S76J', name: 'Art'},
  { query: 'ptag_01JA7H0K5SZZH9YXCPG5X293HF', name: 'Decor' },
  { query: 'ptag_01JA7GJ22RVAF9RKEATTTVJZ5K', name: 'Clothing' },
  { query: 'ptag_01JA7FA6XDWF6B2F15H3SPT35C', name: 'Pottery' },
  { query: 'ptag_01JA7GJ22R3NHQ270QVD03Z6YV', name: 'Toys' },
  { query: 'ptag_01JA7F0W47WR3EXXQJKKF6D39Q', name: 'Ceramic' },
  { query: 'ptag_01JA7F0W47CCKAPTP2F8Y686ZW', name: 'Homewares' },
  { query: 'ptag_01JA7FA6XDV6J3DYWZ32XVS63X', name: 'Vases' },
  { query: 'ptag_01JA7FJPWGHKG9D8AJBQD55T86', name: 'Travel' },
  { query: 'ptag_01JA7FTVQNF7P8YM24ZTZ64RX5', name: 'Plant' },
  { query: 'ptag_01JA7GS78R04419MXKES2E6SJV', name: 'Sewing' },
  { query: 'ptag_01JA7H0K5S81SSKVDN3YFATSY3', name: 'Cross Stitch' },
  { query: 'ptag_01JA7J7QA71AK0SV3TPA2KHZW4', name: 'Upcycled' },
  { query: 'ptag_01JA7J7QA76WZ8941W16W8H7DG', name: 'Denim' },
]

export const sorts: QueryRecord[] = [
  { query: '-created_at', name: 'Newest' },
  { query: 'variants.prices.amount', name: 'Price: Low to High' },
  { query: '-variants.prices.amount', name: 'Price: High to Low' },
]
