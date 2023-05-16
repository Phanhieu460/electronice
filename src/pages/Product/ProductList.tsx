import { Col, Row } from 'antd'
import { useAppDispatch, useAppSelector } from 'app/hook'
import ProductSingle from 'components/product/ProductSingle'
import ShopCategories from 'components/product/ShopCategories'
import ShopTopBar from 'components/product/ShopTopBar'
import { productActions } from 'features/product/productSlice'
import { Product } from 'models'

import React, { useEffect } from 'react'

const ProductList = () => {
  const dispatch = useAppDispatch()
  const { productList } = useAppSelector(state => state.product)

  useEffect(() => {
    dispatch(productActions.fetchProductList())
  }, [])

  return (
    <div className="product">
      <div className="product-left">
        <ShopCategories categories={productList} />
      </div>
      <div className="product-right">
        {' '}
        <ShopTopBar totalProduct={productList.length} />
        <div className="product-item">
          {productList &&
            productList?.map((product: Product) => {
              return <ProductSingle product={product} />
            })}
        </div>
      </div>
    </div>
  )
}

export default ProductList
