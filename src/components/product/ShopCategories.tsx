import { Radio, Space } from 'antd'
import { getCategories, getSortedProducts } from 'helpers/products'

type Props = {}
const ShopCategories = (props: any) => {
  const uniqueCategories = getCategories(props.productList)
  const handleSearchByCategories = (category: string) => {
    props.setProducts(getSortedProducts(props.productList, 'category', category))
  }
  return (
    <div className="product-sidebar">
      <h4 className="product-sidebar__title">Categories</h4>
      {uniqueCategories ? (
        <>
          <Radio.Group>
            <Radio
              className="category-item"
              onChange={() => props.setProducts(getSortedProducts(props.productList, 'category', ''))}
            >
              All{' '}
            </Radio>
            {uniqueCategories.map((category: any, index: number) => {
              return (
                <Radio
                  className="category-item"
                  value={category}
                  onChange={() => handleSearchByCategories(category)}
                  key={index}
                >
                  {category}
                </Radio>
              )
            })}
          </Radio.Group>
        </>
      ) : (
        'No catogories found'
      )}
    </div>
  )
}

export default ShopCategories
