import { Checkbox } from 'antd'
import { getTags } from 'helpers/products'
import React from 'react'

type Props = {}
const ShopTag = (props: any) => {
  const uniqueTags = getTags(props.productList)
  return (
    <div className="product-sidebar">
      <h4 className="product-sidebar__title">Tags</h4>

      {uniqueTags ? (
        <>
          {uniqueTags.map((tag: any, index: number) => {
            return (
              <div className="tag-item">
                <Checkbox>
                  <span className="category-name">{tag}</span>
                </Checkbox>
              </div>
            )
          })}
        </>
      ) : (
        'No tag found'
      )}
    </div>
  )
}

export default ShopTag
