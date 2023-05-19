import { Checkbox } from 'antd'
import { getCategories } from 'helpers/products'
import React from 'react'

type Props = {}
const ShopCategories = (props: any) => {
  const uniqueCategories = getCategories(props.productList)
  return (
    <div className="product-sidebar">
      <h4 className="product-sidebar__title">Categories</h4>

      {uniqueCategories ? (
        <>
          {uniqueCategories.map((category: any, index: number) => {
            return (
              <div className="category-item" key={index}>
                <Checkbox>
                  <span className="category-name">{category}</span>
                </Checkbox>
              </div>
            )
          })}
        </>
      ) : (
        'No catogories found'
      )}
    </div>
  )
}

export default ShopCategories
