import { getSortedProducts, getTags } from 'helpers/products'

const ShopTag = (props: any) => {
  const uniqueTags = getTags(props.productList)
  const handleSearchByTag = (tag: string) => {
    props.setProducts(getSortedProducts(props.productList, 'tag', tag))
  }
  return (
    <div className="product-sidebar">
      <h4 className="product-sidebar__title">Tags</h4>

      {uniqueTags ? (
        <>
          {uniqueTags.map((tag: any, index: number) => {
            return (
              <button className="tag-item" key={index} onClick={() => handleSearchByTag(tag)}>
                <span className="category-name">{tag}</span>
              </button>
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
