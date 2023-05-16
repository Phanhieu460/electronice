import { Col, Row } from 'antd'
import ProductSingle from 'components/product/ProductSingle'
import ShopCategories from 'components/product/ShopCategories'
import ShopTopBar from 'components/product/ShopTopBar'
import React from 'react'

const Product = () => {
  return (
    <div className="product">
      <div className="product-left">
        <ShopCategories />
      </div>
      <div className="product-right">
        {' '}
        <ShopTopBar />
        <ProductSingle />
      </div>
    </div>
  )
}

export default Product
