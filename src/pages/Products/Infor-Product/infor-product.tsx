import { faEnvelope, faHeart, faPlaneDeparture, faRoad, faSync } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Form, Input, Modal, Radio, Table } from 'antd'
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
import { useAppDispatch, useAppSelector } from 'app/hook'
import { getProductCartQuantity } from 'helpers/products'
import { addToCart } from 'features/cart/cartSlice'

function InforProduct(props: any) {
  const dispatch = useAppDispatch()

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isModalOpen1, setIsModalOpen1] = useState<boolean>(false)
  const [isModalOpen2, setIsModalOpen2] = useState<boolean>(false)
  const cartData = useAppSelector(state => state.cartData)

  const [selectedProductColor, setSelectedProductColor] = useState(
    props.product.variation ? props.product.variation[0].color : ''
  )

  const [selectedProductSize, setSelectedProductSize] = useState(
    props.product.variation ? props.product.variation[0].size[0].name : ''
  )
  const [productStock] = useState(
    props.product?.variation?.length > 0 ? props.product?.variation[0]?.size[0]?.stock : props.product.stock
  )
  const [quantityCount, setQuantityCount] = useState(1)

  const productCartQty = getProductCartQuantity(cartData, props.product, selectedProductColor, selectedProductSize)

  const columns = [
    {
      key: 'international',
      title: 'INTERNATIONAL',
      dataIndex: 'international'
    },
    {
      key: 'xs',
      title: 'XS',
      dataIndex: 'xs'
    },
    {
      key: 's',
      title: 'S',
      dataIndex: 's'
    },
    {
      key: 'm',
      title: 'M',
      dataIndex: 'm'
    },
    {
      key: 'l',
      title: 'L',
      dataIndex: 'l'
    },
    {
      key: 'xl',
      title: 'XL',
      dataIndex: 'xl'
    },
    {
      key: 'xxl',
      title: 'XXL',
      dataIndex: 'xxl'
    }
  ]
  const data = [
    {
      id: 1,
      international: 'EUROPE',
      xs: '32',
      s: '34',
      m: '36',
      l: '38',
      xl: '40',
      xxl: '42'
    },
    {
      id: 2,
      international: 'US',
      xs: '0',
      s: '2',
      m: '4',
      l: '6',
      xl: '8',
      xxl: '10'
    },
    {
      id: 3,
      international: 'CHEST FIT (INCHES)',
      xs: '28"',
      s: '30"',
      m: '32"',
      l: '34"',
      xl: '36"',
      xxl: '38"'
    },
    {
      id: 4,
      international: 'CHEST FIT (CM)',
      xs: '716',
      s: '76',
      m: '81',
      l: '86',
      xl: '91.5',
      xxl: '96.5'
    },
    {
      id: 5,
      international: 'WAIST FIR (INCHES)',
      xs: '21"',
      s: '23"',
      m: '25"',
      l: '27"',
      xl: '29"',
      xxl: '31"'
    },
    {
      id: 6,
      international: 'WAIST FIR (CM)',
      xs: '53.5',
      s: '58.5',
      m: '63.5',
      l: '68.5',
      xl: '74',
      xxl: '79'
    },
    {
      id: 7,
      international: 'HIPS FIR (INCHES)',
      xs: '33"',
      s: '34"',
      m: '36"',
      l: '38"',
      xl: '40"',
      xxl: '42"'
    },
    {
      id: 8,
      international: 'HIPS FIR (CM)',
      xs: '81.5',
      s: '	86.5',
      m: '91.5',
      l: '96.5',
      xl: '101',
      xxl: '106.5'
    },
    {
      id: 9,
      international: 'SKORT LENGTHS (SM)',
      xs: '36.5',
      s: '38',
      m: '39.5',
      l: '41',
      xl: '42.5',
      xxl: '44'
    }
  ]

  return (
    <>
      <div className="variable-product" style={{ paddingLeft: '20px' }}>
        <h2>{props.product.name}</h2>

        <div style={{ margin: '20px 0' }}>
          <span>
            {props.product.discount == 0 ? (
              <span style={{ color: 'red', fontSize: '24px' }}>${props.product.price} </span>
            ) : (
              <>
                <span style={{ textDecorationLine: 'line-through', paddingRight: '10px' }}>${props.product.price}</span>
                <span style={{ color: 'red', fontSize: '24px' }}>
                  ${props.product.price - (props.product.price * props.product.discount) / 100}
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
            {props.product.shortDescription?.split('.').length > 1
              ? props.product.shortDescription?.split('.').map((item: any, index: number) => {
                  return (
                    <li style={{ listStyle: 'inside' }} key={index}>
                      {item}
                    </li>
                  )
                })
              : props.product.shortDescription?.split('.').map((item: any, index: number) => {
                  return (
                    <div style={{ listStyle: 'inside' }} key={index}>
                      {item}
                    </div>
                  )
                })}
          </ul>
        </div>
        <table style={{ width: '100%' }}>
          <tbody>
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
          </tbody>
        </table>
        <div className="product-modal__content--color" style={{ display: 'flex', alignItems: 'center' }}>
          <span className="product-modal__content--color--title">Color :</span>
          <div className="product-modal__content--color--content">
            {props.product?.variation?.map((single: any, key: number) => {
              return (
                <label className={`product-modal__content--color--content--single ${single.color}`} key={key}>
                  <Radio
                    value={single.color}
                    name="product-color"
                    checked={single.color === selectedProductColor ? true : false}
                    onChange={() => setSelectedProductColor(single.color)}
                  />
                  <div
                    className="color-checkmark"
                    style={{
                      background: `${single?.color}`,
                      width: '10px',
                      height: '10px',
                      border: ' 1px solid black'
                    }}
                  ></div>
                </label>
              )
            })}
          </div>
        </div>
        <div className="product-modal__content--size" style={{ display: 'flex', alignItems: 'center' }}>
          <span className="product-modal__content--size--title">Size :</span>
          <div className="product-modal__content--size--content">
            {props.product.variation &&
              props.product?.variation?.map((single: any) => {
                return single.color === selectedProductColor
                  ? single?.size?.map((singleSize: any, key: number) => {
                      return (
                        <label className={`product-modal__content--size--content--single`} key={key}>
                          <Radio
                            value={singleSize.name}
                            checked={singleSize.name === selectedProductSize ? true : false}
                            onChange={() => {
                              setSelectedProductSize(singleSize.name)
                            }}
                          />
                          <span className="size-name">{singleSize.name.toUpperCase()}</span>
                        </label>
                      )
                    })
                  : ''
              })}
          </div>
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
          <Modal title="Size Guide" footer={null} open={isModalOpen} onCancel={() => setIsModalOpen(false)}>
            <div className="table">
              <Table dataSource={data} columns={columns} pagination={false} />
            </div>
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
            <button onClick={() => setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)}>-</button>
            <div style={{ padding: '0 10px' }}>{quantityCount}</div>
            <button
              onClick={() =>
                setQuantityCount(quantityCount < productStock - productCartQty ? quantityCount + 1 : quantityCount)
              }
            >
              +
            </button>
          </div>
          <button className="add-to-cart" onClick={() => dispatch(addToCart(props.product))}>
            {' '}
            ADD TO CART
          </button>
          <FontAwesomeIcon icon={faHeart} style={{ fontSize: '24px', color: 'red' }} />
          <FontAwesomeIcon icon={faSync} style={{ fontSize: '24px' }} />
        </div>
        <button className="btn-buy-it">Buy it now</button>
        {/* //share */}

        <div className="material">
          <span>Material:</span>
          {props.product.category}
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
