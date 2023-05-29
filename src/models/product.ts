interface SizeItem {
  name: string
  stock: number
}

interface VariationItem {
  color: string
  image: string
  size: Array<SizeItem>
}

export type Product = {
  _id: string
  name: string
  sku: string
  price: number
  discount: number
  news: boolean
  tag: Array<string>
  category: Array<string>
  variation: Array<VariationItem>
  images: Array<string>
  shortDescription: string
  fullDescription: string
  quantity?: number
}
