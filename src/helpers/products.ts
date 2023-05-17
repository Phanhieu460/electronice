import { Product } from 'models/product'

export const getItemArray = (array: any) => {
  let result = array.filter(function (v: any, i: any, self: any) {
    return i === self.indexOf(v)
  })
  return result
}

export const getCategories = (products: Array<Product>) => {
  let productCategories: any = []

  products &&
    products.map((product: any) => {
      return (
        product.category &&
        product?.category.map((item: any) => {
          return productCategories.push(item)
        })
      )
    })

  const itemProductCategories = getItemArray(productCategories)
  return itemProductCategories
}

export const getTags = (products: Array<Product>) => {
  let productTags: any = []

  products &&
    products?.map((product: any) => {
      return (
        product.tag &&
        product?.tag.map((item: any) => {
          return productTags.push(item)
        })
      )
    })

  const itemProductTags = getItemArray(productTags)
  return itemProductTags
}

export const getProductsIndividualSizes = (products: Array<Product>) => {
  let productSizes: any = []
  products &&
    products.map(product => {
      return (
        product.variation &&
        product.variation.map(single => {
          return single.size.map(single => {
            return productSizes.push(single.name)
          })
        })
      )
    })
  const individualProductSizes = getItemArray(productSizes)
  return individualProductSizes
}
