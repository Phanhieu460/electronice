import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

type Props = {}

const ProductSingle = (props: any) => {
  return (
    <div className="product-single">
      <div className="product-image">
        <NavLink to={`/product-detail/${props.product._id}`}>
          <img className="product-image__img" alt="product-image" src={props.product.images[0]} />

          {props.product.news && <span className="product-image__news">New</span>}
          {props.product.discount > 0 && <span className="product-image__discount">-{props.product.discount}%</span>}
        </NavLink>
      </div>

      <div className="product-content">
        <NavLink to={`/product-detail/${props.product._id}`}>
          <h3 className="product-content__title">{props.product.name}</h3>
        </NavLink>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            className="product-content__price"
            style={{ paddingRight: 10, textDecoration: `${props.product.discount ? 'line-through' : 'none'}` }}
          >
            $ {props.product.price}
          </span>
          {props.product.discount ? (
            <span className="product-content__price--sale">
              $ {props.product.price - (props.product.price * props.product.discount) / 100}
            </span>
          ) : (
            ''
          )}
        </div>

        <div className="product-content__ratting">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
    </div>
  )
}

export default ProductSingle
