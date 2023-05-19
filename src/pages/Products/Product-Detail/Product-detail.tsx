import './slick.css'
import './slick-theme.css'
import './product-detail.scss'
import PopularItem from '../Popular-Item/Popular-Item'
import { Col, Carousel, Row, Tabs, TabsProps, Button } from 'antd'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHeart, faPlaneDeparture, faRoad, faSync } from '@fortawesome/free-solid-svg-icons'
import facebook from '../../../assets/images/facebook.png'
import pinterest from '../../../assets/images/pinterest.png'
import twitter from '../../../assets/images/twitter.png'
import amazon from '../../../assets/images/amazon-pay.png'
import apple from '../../../assets/images/apple-pay.png'
import bitcoin from '../../../assets/images/bitcoin.png'
import google from '../../../assets/images/google-pay.png'
import visa from '../../../assets/images/visa.png'

function ProductDetail() {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Description`,
      children: ` There are many variations of passvendors of Lorem Ipsum available, but the majority have suffered alteration in
      some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
      to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
      text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this
      the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
      of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
      therefore always free from repetition, injected humour, or non-characteristic words etc. On the other hand, we
      denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of
      pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to
      ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as
      saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free
      hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best,
      every pleasure is to be welcomed and every pain avoided.`
    },
    {
      key: '2',
      label: `Comments
      `,
      children: ``
    },
    {
      key: '3',
      label: ` Reviews`,
      children: ``
    },
    {
      key: '4',
      label: `Size Chart
      `,
      children: ``
    },
    {
      key: '5',
      label: ` Shipping Policy`,
      children: ``
    }
  ]
  const [count, setCount] = useState(0)

  const ref = useRef<any>()

  return (
    <div className="product-container">
      <Row style={{ margin: '50px auto' }}>
        <Col span={12}>
          <div className="slider-product">
            <Carousel
              autoplay
              pauseOnHover={true}
              pauseOnDotsHover={true}
              dots={true}
              dotPosition="bottom"
              ref={ref}
              effect="scrollx"
            >
              <div>
                <img src="https://cdn.shopify.com/s/files/1/1280/1207/products/5_654c7d8a-cbaa-43c3-b839-c15a2175a530_1024x1024.jpg?v=1640259724" />
              </div>
              <div>
                <img src="https://cdn.shopify.com/s/files/1/1280/1207/products/5_654c7d8a-cbaa-43c3-b839-c15a2175a530_1024x1024.jpg?v=1640259724" />
              </div>
              <div>
                <img src="https://cdn.shopify.com/s/files/1/1280/1207/products/5_654c7d8a-cbaa-43c3-b839-c15a2175a530_1024x1024.jpg?v=1640259724" />
              </div>
              <div>
                <img src="https://cdn.shopify.com/s/files/1/1280/1207/products/5_654c7d8a-cbaa-43c3-b839-c15a2175a530_1024x1024.jpg?v=1640259724" />
              </div>
              <div>
                <img src="https://cdn.shopify.com/s/files/1/1280/1207/products/5_654c7d8a-cbaa-43c3-b839-c15a2175a530_1024x1024.jpg?v=1640259724" />
              </div>
            </Carousel>
          </div>
        </Col>
        <Col span={12}>
          <div className="variable-product">
            <h2>Variable product</h2>
            <h2 style={{ color: 'red' }}>$ 39.00</h2>
            <div>
              <span>SKU: </span>
              9914
            </div>
            <div>
              <span>Vendor: </span>
              Vendor 11
            </div>
            <div>
              <span>Type: </span>
              Type 11
            </div>
            <div>
              <span>Availability: </span>4 left in stock
            </div>
            <div>
              <p style={{ textAlign: 'left' }}>
                As opposed to using 'Content here, content here', making it look like readable English. Many desktop
                publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many..
              </p>
            </div>

            <table style={{ width: '100%' }}>
              <tr>
                <th>Name: </th>
                <td> Product with video</td>
              </tr>
              <tr>
                <th>Vendor: </th>
                <td>Vendor 11</td>
              </tr>
              <tr>
                <th>Type: </th>
                <td>Type 11</td>
              </tr>
              <tr>
                <th>Manufacturing: </th>
                <td>2021 / 12 / 23</td>
              </tr>
            </table>
            <div className="size-product">
              <span>Size:</span>
              <label>
                <input type="radio" name="test" value="small" checked />
                <img src="https://via.placeholder.com/30x30/a6a/fff&text=S" alt="Option 1" />
              </label>
              <label>
                <input type="radio" name="test" value="big" />
                <img src="https://via.placeholder.com/30x30/a6a/fff&text=M" alt="Option 2" />
              </label>
              <label>
                <input type="radio" name="test" value="small" checked />
                <img src="https://via.placeholder.com/30x30/a6a/fff&text=L" alt="Option 3" />
              </label>
              <label>
                <input type="radio" name="test" value="big" />
                <img src="https://via.placeholder.com/30x30/a6a/fff&text=XL" alt="Option 4" />
              </label>
            </div>
            <div className="color-product">
              <span>Color:</span>
              <label>
                <input type="radio" name="test" value="purple" checked />
                <img src="https://via.placeholder.com/30x30/a6a/fff&text=" alt="Option 5" />
              </label>
              <label>
                <input type="radio" name="test" value="light-purple" />
                <img src="https://via.placeholder.com/30x30/b0f/fff&text=" alt="Option 6" />
              </label>
              <label>
                <input type="radio" name="test" value="black" checked />
                <img src="https://via.placeholder.com/30x30/000/fff&text=" alt="Option 7" />
              </label>
              <label>
                <input type="radio" name="test" value="pink" />
                <img src="https://via.placeholder.com/30x30/f2b/fff&text=" alt="Option 8" />
              </label>
              <label>
                <input type="radio" name="test" value="yellow" />
                <img src="https://via.placeholder.com/30x30/ed8/fff&text=" alt="Option 9" />
              </label>
            </div>
            <div className="material">
              <span>Material:</span>
              <span>metal,</span>
              <span>resin,</span>
              <span>leather,</span>
              <span>slag,</span>
              <span>fiber,</span>
            </div>
            <div className="product_additional_information">
              <button className="button" type="button" data-toggle="modal" data-target="#size_guide">
                <FontAwesomeIcon icon={faRoad} /> Size Guide
              </button>
              <button className="button" type="button" data-toggle="modal" data-target="#shipping_policy">
                <FontAwesomeIcon icon={faPlaneDeparture} /> Shipping
              </button>
              <button className="button" type="button" data-toggle="modal" data-target="#ask_about_product">
                <FontAwesomeIcon icon={faEnvelope} /> Ask About This product
              </button>
            </div>
            <div className="details-quality-sticky-pro-button">
              <div className="cart-details">
                <div
                  onClick={() => {
                    setCount(count - 1)
                  }}
                >
                  -
                </div>
                <div style={{ padding: '0 10px' }}>{count}</div>
                <div
                  onClick={() => {
                    setCount(count + 1)
                  }}
                >
                  +
                </div>
              </div>
              <button> ADD TO CART</button>
              <FontAwesomeIcon icon={faHeart} style={{ fontSize: '24px', color: 'red' }} />
              <FontAwesomeIcon icon={faSync} style={{ fontSize: '24px' }} />
            </div>
            <button className="dynamic_btn">Buy it now</button>
          </div>
          <div className="pro-details-meta">
            <span>Categories:</span>
            <ul>
              <li>
                <a href="/collections/best-selling">Best Selling,</a>
              </li>
              <li>
                <a href="/collections/deal-collections">Deal Collections,</a>
              </li>
              <li>
                <a href="/collections/new-products">New Products,</a>
              </li>
              <li>
                <a href="/collections/upsell-products">Upsell Products,</a>
              </li>
            </ul>
          </div>
          <div className="pro-details-meta">
            <span>Tag:</span>
            <ul>
              <li>
                <a href="/collections/all/black">black,</a>
              </li>
              <li>
                <a href="/collections/all/fiber">fiber,</a>
              </li>
              <li>
                <a href="/collections/all/l">l,</a>
              </li>
              <li>
                <a href="/collections/all/leather">leather,</a>
              </li>
              <li>
                <a href="/collections/all/m">m,</a>
              </li>
            </ul>
          </div>
          {/* //share */}
          <div className="share-icons-pro-details-meta">
            <span>Share:</span>
            <span>
              <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">
                <img src={facebook} alt="" />
              </a>
            </span>
            <span>
              <a href="https://www.flaticon.com/free-icons/facebook" title="twitter icons">
                <img src={twitter} alt="" />
              </a>
            </span>
            <span>
              <a href="https://www.flaticon.com/free-icons/facebook" title="pinterest icons">
                <img src={pinterest} alt="" />
              </a>
            </span>
          </div>
          <div className="custom-payment-options">
            <span>Guaranteed safe checkout</span>
            <span>
              <a href="https://www.flaticon.com/free-icons/facebook" title="amazon icons">
                <img src={amazon} alt="" />
              </a>
            </span>
            <span>
              <a href="https://www.flaticon.com/free-icons/facebook" title="apple icons">
                <img src={apple} alt="" />
              </a>
            </span>
            <span>
              <a href="https://www.flaticon.com/free-icons/facebook" title="bitcoin icons">
                <img src={bitcoin} alt="" />
              </a>
            </span>
            <span>
              <a href="https://www.flaticon.com/free-icons/facebook" title="google icons">
                <img src={google} alt="" />
              </a>
            </span>
            <span>
              <a href="https://www.flaticon.com/free-icons/facebook" title="visa icons">
                <img src={visa} alt="" />
              </a>
            </span>
          </div>
          <div className="methods-of-payment"></div>
        </Col>
      </Row>
      <div className="description-review-wrapper">
        <Tabs defaultActiveKey="1" items={items} />
      </div>

      <PopularItem />
    </div>
  )
}

export default ProductDetail
