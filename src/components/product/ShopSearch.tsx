import { Input } from 'antd'
import { useAppDispatch, useAppSelector } from 'app/hook'
import { PRODUCT_SEARCH } from 'features/types'
import React, { useEffect } from 'react'

const { Search } = Input

const ShopSearch = (props: any) => {
  const dispatch = useAppDispatch()
  const { productSearch } = useAppSelector(state => state.product)
  const onSearch = (value: string) => {
    dispatch({ type: PRODUCT_SEARCH, search: value })
  }

  useEffect(() => {
    if (productSearch) props.setProducts(productSearch)
  }, [productSearch, dispatch])

  return (
    <div className="product-sidebar">
      <h4 className="product-sidebar__title">Search</h4>
      <Search placeholder="Search product by name" onSearch={onSearch} enterButton />
    </div>
  )
}

export default ShopSearch
