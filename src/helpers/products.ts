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
export const getColor = (products: Array<Product>) => {
  let productColor: any = []

  products &&
    products?.map((product: any) => {
      return (
        product.variation &&
        product?.variation.map((item: any) => {
          return productColor.push(item.color)
        })
      )
    })

  const itemProductColor = getItemArray(productColor)
  return itemProductColor
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

export const getSortedProducts = (products: Array<Product>, sortType: string, sortValue: string) => {
  if (products && sortType && sortValue) {
    if (sortType === 'category') {
      return products.filter(product => product.category.filter(single => single === sortValue)[0])
    }
    if (sortType === 'tag') {
      return products.filter(product => product.tag.filter(single => single === sortValue)[0])
    }
    if (sortType === 'color') {
      return products.filter(
        product => product.variation && product.variation.filter(single => single.color === sortValue)[0]
      )
    }
    if (sortType === 'filterSort') {
      let sortProducts = [...products]
      if (sortValue === 'default') {
        return sortProducts
      }
      if (sortValue === 'priceHighToLow') {
        return sortProducts.sort((a, b) => {
          return b.price - a.price
        })
      }
      if (sortValue === 'priceLowToHigh') {
        return sortProducts.sort((a, b) => {
          return a.price - b.price
        })
      }
    }
  }
  return products
}

export const getDiscountPrice = (price: number, discount: number) => {
  return discount && discount > 0 ? price - price * (discount / 100) : 0
}
