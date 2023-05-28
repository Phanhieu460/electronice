import { faCartPlus, faEye, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd'
import { addToCart } from 'features/cart/cartSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { openNotification } from 'util/notifications'
import ProductModal from './ProductModal'

const ProductSingle = (props: any) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const dispatch = useDispatch()
  const [product, setProduct] = useState(props.product)
  const [selectedProductColor, setSelectedProductColor] = useState(
    props.product.variation ? props.product.variation[0].color : ''
  )

  const [selectedProductSize, setSelectedProductSize] = useState(
    props.product.variation ? props.product.variation[0].size[0].name : ''
  )
  const [quantityCount, setQuantityCount] = useState(1)

  return (
    <>
      {props.view === 'grid' ? (
        <div className="product-single-grid">
          <div className="product-single-grid__image">
            <NavLink to={`/product-detail/${props.product._id}`}>
              <img className="product-single-grid__image--img" alt="product-image" src={props.product.images[0]} />

              {props.product.news && <span className="product-single-grid__image--news">New</span>}
              {props.product.discount > 0 && (
                <span
                  className={`product-single-grid__image--${props.product.news === false ? 'discount2' : 'discount'}`}
                >
                  -{props.product.discount}%
                </span>
              )}
            </NavLink>
          </div>

          <div className="product-single-grid__content">
            <NavLink to={`/product-detail/${props.product._id}`}>
              <div style={{ height: 50 }}>
                <h3 className="product-single-grid__content--title">{props.product.name}</h3>
              </div>
            </NavLink>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span
                className="product-single-grid__content--price"
                style={{ paddingRight: 10, textDecoration: `${props.product.discount ? 'line-through' : 'none'}` }}
              >
                ${props.product.price}
              </span>
              {props.product.discount ? (
                <span className="product-single-grid__content--priceSale">
                  ${props.product.price - (props.product.price * props.product.discount) / 100}
                </span>
              ) : (
                ''
              )}
            </div>

            <div className="product-single-grid__content--ratting">
              <div>
                <FontAwesomeIcon icon={faStar} style={{ color: '#fff700' }} />
                <FontAwesomeIcon icon={faStar} style={{ color: '#fff700' }} />
                <FontAwesomeIcon icon={faStar} style={{ color: '#fff700' }} />
                <FontAwesomeIcon icon={faStar} style={{ color: '#fff700' }} />
                <FontAwesomeIcon icon={faStar} style={{ color: '#fff700' }} />
              </div>
              <Button
                style={{ marginLeft: 14 }}
                onClick={() => {
                  dispatch(
                    addToCart({
                      ...product,
                      quantity: quantityCount,
                      selectedProductColor: selectedProductColor
                        ? selectedProductColor
                        : product.selectedProductColor
                        ? product.selectedProductColor
                        : null,
                      selectedProductSize: selectedProductSize
                        ? selectedProductSize
                        : product.selectedProductSize
                        ? product.selectedProductSize
                        : null
                    })
                  )

                  openNotification(
                    {
                      message: 'Success',
                      description: 'Added to cart successfully!'
                    },
                    'success'
                  )
                }}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="product-single-list">
          <div className="product-single-list__image">
            <img className="product-single-list__image--img" alt="product-image" src={props.product.images[0]} />

            {props.product.news && <span className="product-single-list__image--news">New</span>}
            {props.product.discount > 0 && (
              <span className="product-single-list__image--discount">-{props.product.discount}%</span>
            )}
            <div onClick={() => setIsModalOpen(!isModalOpen)} className="product-single-list__image--modal">
              <FontAwesomeIcon icon={faEye} />
            </div>
          </div>

          <div className="product-single-list__content">
            <NavLink to={`/product-detail/${props.product._id}`}>
              <h3 className="product-single-list__content--title">{props.product.name}</h3>
            </NavLink>
            <p className="product-single-list__content--description">{props.product.shortDescription}</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span
                className="product-single-list__content--price"
                style={{ paddingRight: 10, textDecoration: `${props.product.discount ? 'line-through' : 'none'}` }}
              >
                ${props.product.price}
              </span>
              {props.product.discount ? (
                <span className="product-single-list__content--priceSale">
                  ${props.product.price - (props.product.price * props.product.discount) / 100}
                </span>
              ) : (
                ''
              )}
            </div>

            <div className="product-single-list__content--ratting">
              <FontAwesomeIcon icon={faStar} style={{ color: '#fff700' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#fff700' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#fff700' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#fff700' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#fff700' }} />
            </div>
            <Button
              className="product-single-list__content--addToCart"
              onClick={() => dispatch(addToCart(props.product))}
            >
              <FontAwesomeIcon icon={faCartPlus} style={{ paddingRight: 5 }} />
              Add To Cart
            </Button>
          </div>
        </div>
      )}
      <ProductModal product={props.product} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}

export default ProductSingle
