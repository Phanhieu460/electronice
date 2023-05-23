import { Radio } from 'antd'
import { getColor, getSortedProducts } from 'helpers/products'

type Props = {}
const ShopColor = (props: any) => {
  const uniqueCategories = getColor(props.productList)
  const handleSearchByColor = (color: string) => {
    props.setProducts(getSortedProducts(props.productList, 'color', color))
  }
  return (
    <div className="product-sidebar">
      <h4 className="product-sidebar__title">Color</h4>

      {uniqueCategories ? (
        <Radio.Group>
          {uniqueCategories.map((color: any, index: number) => {
            return (
              <Radio className="category-item" value={color} onChange={() => handleSearchByColor(color)} key={index}>
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Radio>
            )
          })}
        </Radio.Group>
      ) : (
        'No color found'
      )}
    </div>
  )
}

export default ShopColor
