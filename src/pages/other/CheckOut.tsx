import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Col, Form, Input, Row, Select } from 'antd'
import { useAppDispatch, useAppSelector } from 'app/hook'
import { createInfomation } from 'features/order/orderSlice'
import { getDiscountPrice } from 'helpers/products'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const { Option } = Select

interface User {
  _id: string
  email: string
  password: string
  firstName: string
  lastName: string
  phone: string
  address: string
  image: string
}

const CheckOut = () => {
  const [text, setText] = useState('Show order summary ')
  const [isTextOne, setIsTextOne] = useState(true)
  const [showTotal, setShowTotal] = useState<boolean>(false)
  const navigate = useNavigate()
  const cartData = useAppSelector(state => state.cartData)
  const dispatch = useAppDispatch()
  const [information, setInfomation] = useState<any>()

  const redirectCart = () => {
    navigate('/cart')
  }
  const redirectShipping = () => {
    navigate('/shipping')
  }

  const handleClick = () => {
    setShowTotal(!showTotal)
    setIsTextOne(!isTextOne)
    if (isTextOne) {
      setText('Hide order summary')
    } else {
      setText('Show order summary')
      setShowTotal(false)
    }
  }

  const handleCheckout = (values: any) => {
    dispatch(createInfomation(values))
    navigate('/shipping')
  }
  let cartTotalPrice = 0

  return (
    <div className="checkout">
      <div className="checkout-information">
        <Row>
          <Col xs={24} sm={24} md={20} lg={18} xl={22}>
            <Form
              onFinish={handleCheckout}
              autoComplete="off"
              initialValues={{ remember: true }}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
            >
              <h3>Contact Information</h3>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!'
                  },

                  { required: true, message: 'Enter an email' }
                ]}
              >
                <Input />
              </Form.Item>
              <h3>Shipping Address</h3>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: 'Enter a first name', whitespace: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: 'Enter a last name', whitespace: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: 'Enter an address', whitespace: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, message: 'Enter a phone number to use this delivery method' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <div className="list-button">
                  <Button className="checkout-information--cart">
                    <Link to="/cart">
                      {' '}
                      <FontAwesomeIcon icon={faChevronLeft} />
                      Return to cart
                    </Link>
                  </Button>
                  <Button type="primary" htmlType="submit" className="checkout-information--continue">
                    Continue Shipping
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
      <div className="checkout-product">
        {cartData &&
          cartData?.map((single: any, index: number) => {
            const discountedPrice = getDiscountPrice(single.price, single.discount)
            discountedPrice > 0
              ? (cartTotalPrice += discountedPrice * single.quantity)
              : (cartTotalPrice += single.price * single.quantity)

            return (
              <li key={single._id} className="checkout-product__item">
                <div className="checkout-product__item--name">
                  <div className="checkout-product__item--name--img">
                    <Link to={`/product-detail/${single._id}`}>
                      <img alt="Product Image" src={single?.images[0]} />
                    </Link>
                  </div>
                  <h4>
                    <Link to={'/product/' + single._id}> {single.name} </Link>
                  </h4>
                </div>
                <span className="checkout-product__item--price">
                  ${discountedPrice > 0 ? discountedPrice.toFixed(2) : single.price.toFixed(2)}
                </span>
              </li>
            )
          })}
        <div className="checkout-product__price">
          <div className="checkout-product__price--item">
            Subtotal:
            <h4>${cartTotalPrice.toFixed(2)}</h4>
          </div>
          <div className="checkout-product__price--item">
            Shipping:
            <h4>$10</h4>
          </div>
        </div>
        <div className="checkout-product__total">
          Total:
          <h3>${(cartTotalPrice + 10).toFixed(2)}</h3>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
