import { Input } from 'antd'
import React from 'react'

const { Search } = Input

const ShopSearch = () => {
  const onSearch = (value: string) => console.log(value)
  return (
    <div className="product-sidebar">
      <h4 className="product-sidebar__title">Search</h4>
      <Search placeholder="Search our store" onSearch={onSearch} enterButton />
    </div>
  )
}

export default ShopSearch
