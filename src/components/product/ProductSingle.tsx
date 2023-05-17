import { faCartPlus, faCircle, faEye, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, Radio } from 'antd'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ProductModal from './ProductModal'

const ProductSingle = (props: any) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <>
      {props.view === 'grid' ? (
        <div className="product-single-grid">
          <div className="product-single-grid__image">
            <NavLink to={`/product-detail/${props.product._id}`}>
              <img className="product-single-grid__image--img" alt="product-image" src={props.product.images[0]} />

              {props.product.news && <span className="product-single-grid__image--news">New</span>}
              {props.product.discount > 0 && (
                <span className="product-single-grid__image--discount">-{props.product.discount}%</span>
              )}
            </NavLink>
          </div>

          <div className="product-single-grid__content">
            <NavLink to={`/product-detail/${props.product._id}`}>
              <h3 className="product-single-grid__content--title">{props.product.name}</h3>
            </NavLink>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span
                className="product-single-grid__content--price"
                style={{ paddingRight: 10, textDecoration: `${props.product.discount ? 'line-through' : 'none'}` }}
              >
                $ {props.product.price}
              </span>
              {props.product.discount ? (
                <span className="product-single-grid__content--priceSale">
                  $ {props.product.price - (props.product.price * props.product.discount) / 100}
                </span>
              ) : (
                ''
              )}
            </div>

            <div className="product-single-grid__content--ratting">
              <FontAwesomeIcon icon={faStar} style={{ color: '#fff700' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#fff700' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#fff700' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#fff700' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#fff700' }} />
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
                $ {props.product.price}
              </span>
              {props.product.discount ? (
                <span className="product-single-list__content--priceSale">
                  $ {props.product.price - (props.product.price * props.product.discount) / 100}
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
            <Button className="product-single-list__content--addToCart">
              <FontAwesomeIcon icon={faCartPlus} />
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
