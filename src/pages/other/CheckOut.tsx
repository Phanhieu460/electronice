import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Col, Form, Input, InputNumber, Row } from 'antd'
import { useAppDispatch, useAppSelector } from 'app/hook'
import { getDiscountPrice } from 'helpers/products'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CheckOut = () => {
  const [text, setText] = useState('Show order summary ')
  const [isTextOne, setIsTextOne] = useState(true)
  const [showTotal, setShowTotal] = useState<boolean>(false)
  const navigate = useNavigate()
  const cartData = useAppSelector(state => state.cartData)
  const dispatch = useAppDispatch()

  const redirectCart = () => {
    navigate('/cart')
  }
  const redirectShipping = () => {
    navigate('/shipping')
  }

  const handleLogout = () => {
    Cookies.remove('authToken')
    navigate('/')
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
  const handleCheckout = () => {
    navigate('/shipping')
  }
  let cartTotalPrice = 0
  return (
    <div className="checkout">
      <div className="checkout-information">
        <Row>
          <Col span={18}>
            <Form onFinish={handleCheckout}>
              <h3>Contact Information</h3>
              <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Enter an email' }]}>
                <Input />
              </Form.Item>
              <h3>Shipping Address</h3>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: 'Enter a first name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Enter a last name' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Enter an address' }]}>
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, message: 'Enter a phone number to use this delivery method' }]}
              >
                <InputNumber />
              </Form.Item>

              <div className="list-button">
                <Button className="checkout-information--cart">
                  <Link to="/cart">
                    {' '}
                    <FontAwesomeIcon icon={faChevronLeft} />
                    Return to cart
                  </Link>
                </Button>
                <Button className="checkout-information--continue">
                  <Link to="/shipping">Continue Shipping</Link>
                </Button>
              </div>
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
