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
import { useNavigate } from 'react-router-dom'

const ProductList = () => {
  const dispatch = useAppDispatch()
  const { productList, count } = useAppSelector(state => state.product)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [products, setProducts] = useState<Array<Product>>()
  const [view, setView] = useState<string>('grid')
  const navigate = useNavigate()

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_LIST, pageNumber: pageNumber })
    if (pageNumber === 1) navigate(`/product`)
  }, [pageNumber])

  useEffect(() => {
    if (productList) setProducts(productList)
  }, [productList])

  const handleChangePagination: PaginationProps['onChange'] = page => {
    setPageNumber(page)
    navigate(`/product?pageNumber=${page}`)
  }
  console.log(products)
  return (
    <div className="product">
      <div className="product-left">
        <ShopSearch />
        <ShopCategories productList={productList} />
        <ShopTag productList={productList} />
      </div>
      <div className="product-right">
        {' '}
        <ShopTopBar
          totalProduct={productList.length}
          products={products}
          view={view}
          setView={setView}
          setProducts={setProducts}
        />
        <div className="product-item">
          {products &&
            products?.map((product: Product) => {
              return <ProductSingle product={product} key={product._id} view={view} />
            })}
        </div>
        <Pagination defaultCurrent={1} total={count} pageSize={12} onChange={handleChangePagination} />;
      </div>
    </div>
  )
}

export default ProductList
