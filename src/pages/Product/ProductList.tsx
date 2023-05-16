import { Col, Pagination, PaginationProps, Row } from 'antd'
import { useAppDispatch, useAppSelector } from 'app/hook'
import ProductSingle from 'components/product/ProductSingle'
import ShopCategories from 'components/product/ShopCategories'
import ShopSearch from 'components/product/ShopSearch'
import ShopTag from 'components/product/ShopTag'
import ShopTopBar from 'components/product/ShopTopBar'
import { GET_PRODUCT_LIST } from 'features/types'
import { getCategories } from 'helpers/products'
import { Product } from 'models'

import React, { useEffect, useState } from 'react'

const ProductList = () => {
  const dispatch = useAppDispatch()
  const { productList, count } = useAppSelector(state => state.product)
  const [pageNumber, setPageNumber] = useState<number>(1)

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_LIST, pageNumber: pageNumber })
  }, [pageNumber])
  const handleChangePagination: PaginationProps['onChange'] = page => {
    setPageNumber(page)
  }

  return (
    <div className="product">
      <div className="product-left">
        <ShopSearch />
        <ShopCategories productList={productList} />
        <ShopTag productList={productList} />
      </div>
      <div className="product-right">
        {' '}
        <ShopTopBar totalProduct={productList.length} />
        <div className="product-item">
          {productList &&
            productList?.map((product: Product) => {
              return <ProductSingle product={product} key={product._id} />
            })}
        </div>
        <Pagination defaultCurrent={1} total={count} pageSize={12} onChange={handleChangePagination} />;
      </div>
    </div>
  )
}

export default ProductList
