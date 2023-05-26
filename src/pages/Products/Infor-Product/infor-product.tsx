import { faEnvelope, faHeart, faPlaneDeparture, faRoad, faSync } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Form, Input, Modal } from 'antd'
import { useState } from 'react'
import amazon from '../../../assets/images/amazon-pay.png'
import apple from '../../../assets/images/apple-pay.png'
import bitcoin from '../../../assets/images/bitcoin.png'
import facebook from '../../../assets/images/facebook.png'
import google from '../../../assets/images/google-pay.png'
import pinterest from '../../../assets/images/pinterest.png'
import twitter from '../../../assets/images/twitter.png'
import visa from '../../../assets/images/visa.png'
import './infor-product.scss'

function InforProduct(props: any) {
  const [count, setCount] = useState(0)

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isModalOpen1, setIsModalOpen1] = useState<boolean>(false)
  const [isModalOpen2, setIsModalOpen2] = useState<boolean>(false)

  return (
    <>
      <div className="variable-product" style={{ paddingLeft: '20px' }}>
        <h2>{props.product.name}</h2>

        <div>
          <span>
            {props.product.discount == 0 ? (
              <span style={{ color: 'red', fontSize: '24px' }}>${props.product.price} </span>
            ) : (
              <>
                <span style={{ textDecorationLine: 'line-through', paddingRight: '10px' }}>${props.product.price}</span>
                <span style={{ color: 'red', fontSize: '24px' }}>
                  ${props.product.discount * props.product.price * 0.1}
                </span>
              </>
            )}
          </span>
        </div>
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
          {props.product.tag}
        </div>
        <div>
          <span>Availability: </span>
          <ul>
            {props.product.shortDescription?.split('.').map((item: any) => {
              return <li style={{ listStyle: 'inside' }}>{item}</li>
            })}
          </ul>
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
          {props.product.category}
        </div>
        <div className="product_additional_information">
          <button
            className="button"
            type="button"
            data-toggle="modal"
            data-target="#size_guide"
            onClick={() => setIsModalOpen(true)}
          >
            <FontAwesomeIcon icon={faRoad} /> Size Guide
          </button>
          <Modal title="Basic Modal" footer={null} open={isModalOpen} onCancel={() => setIsModalOpen(false)}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
          <button
            className="button"
            type="button"
            data-toggle="modal"
            data-target="#shipping_policy"
            onClick={() => setIsModalOpen1(true)}
          >
            <FontAwesomeIcon icon={faPlaneDeparture} /> Shipping
          </button>
          <Modal open={isModalOpen1} footer={null} onCancel={() => setIsModalOpen1(false)}>
            <h2>Shipping</h2>
            <div>
              <span>Complimentary ground shipping within 1 to 7 business days</span>
              <br />
              <span>In-store collection available within 1 to 7 business days</span>
              <br />
              <span>Next-day and Express delivery options also available</span>
              <br />
              <span>
                Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items
              </span>
              <br />
              <span>See the delivery FAQs for details on shipping methods, costs and delivery times</span>
              <br />
            </div>
            <h2>Returns And Exchanges</h2>
            <div>
              <span>Easy and complimentary, within 14 days</span>
              <br />
              <span>See conditions and procedure in our return FAQs</span>
            </div>
          </Modal>
          <button
            className="button"
            type="button"
            data-toggle="modal"
            data-target="#ask_about_product"
            onClick={() => setIsModalOpen2(true)}
          >
            <FontAwesomeIcon icon={faEnvelope} /> Ask About This product
          </button>
          <Modal title="Have a question ?" footer={null} open={isModalOpen2} onCancel={() => setIsModalOpen2(false)}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                <Input />
              </Form.Item>

              <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please input your phone!' }]}>
                <Input />
              </Form.Item>
              <Form.Item
                label="Reference URL"
                name="reference"
                rules={[{ required: true, message: 'Please input your reference!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Write Message"
                name="message"
                rules={[{ required: true, message: 'Please input your message!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  style={{ color: 'white', background: 'black', width: '90px', float: 'right' }}
                  htmlType="submit"
                >
                  Send
                </Button>
              </Form.Item>
            </Form>
          </Modal>
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
          <button className="add-to-cart"> ADD TO CART</button>
          <FontAwesomeIcon icon={faHeart} style={{ fontSize: '24px', color: 'red' }} />
          <FontAwesomeIcon icon={faSync} style={{ fontSize: '24px' }} />
        </div>
        <button className="btn-buy-it">Buy it now</button>
        {/* //share */}
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
              <a href="/collections/all/m">m</a>
            </li>
          </ul>
        </div>
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
      </div>
    </>
  )
}

export default InforProduct
