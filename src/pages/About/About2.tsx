import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd'
import { NavLink } from 'react-router-dom'

const About2 = (props: any) => {
  return (
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
          <div style={{ height: '50px' }}>
            <h3 className="product-single-grid__content--title">{props.product.name}</h3>
          </div>
        </NavLink>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            className="product-single-grid__content--price"
            style={{
              paddingRight: 10,
              textDecoration: `${props.product.discount ? 'line-through' : 'none'}`
            }}
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
          <Button style={{ marginLeft: 14 }}>Buy Now</Button>
        </div>
      </div>
    </div>
  )
}
export default About2
