import { Card, Rate } from 'antd'
import './card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSearch, faShoppingCart, faSync } from '@fortawesome/free-solid-svg-icons'
const { Meta } = Card

function CardProduct(props: any) {
  return (
    <div className="card-product">
      <Card className="product-action" hoverable cover={<img alt="example" src={props.item?.src} />}>
        <Meta title={props.item?.name} />
        <div className="body-card">
          <h4 style={{ color: 'red' }}>$ {props.item?.price}</h4>
          <Rate />
        </div>
      </Card>
      <div className="product-action-hover">
        <ul>
          <li style={{ padding: '5px' }}>
            <FontAwesomeIcon icon={faSearch} />
          </li>
          <li style={{ padding: '5px' }}>
            <FontAwesomeIcon icon={faHeart} />
          </li>
          <li style={{ padding: '5px' }}>
            <FontAwesomeIcon icon={faSync} />
          </li>
          <li style={{ padding: '5px' }}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CardProduct
