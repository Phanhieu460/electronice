import { Card, Rate } from 'antd'
import './card.scss'
const { Meta } = Card

function CardProduct() {
  return (
    <div className="card-product">
      <Card
        className="product-action"
        // hoverable
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        <div className="body-card">
          <h4>Title card</h4>
          <h4>$ Price</h4>
          <Rate />
        </div>
      </Card>
      <div className="product-action-hover">
        <ul>
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
      </div>
    </div>
  )
}

export default CardProduct
