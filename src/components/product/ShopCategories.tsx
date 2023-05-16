import { Checkbox } from 'antd'
import React from 'react'

type Props = {}
const ShopCategories = (props: any) => {
  const categories = ['Drone 1', 'drone 2']
  return (
    <div className="product-sidebar">
      <h4 className="product-sidebar__title">Categories</h4>

      {categories ? (
        <>
          {categories.map((category: any, index: number) => {
            return (
              <div>
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
