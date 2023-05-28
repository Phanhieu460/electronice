import { faAngleRight, faCartPlus, faChevronLeft, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Input, Radio, Select } from 'antd'
import Search from 'antd/es/input/Search'
import { useAppDispatch, useAppSelector } from 'app/hook'
import { deleteAllFromCart } from 'features/cart/cartSlice'
import { ORDER_CREATE_SUCCESS } from 'features/types'
import { getDiscountPrice } from 'helpers/products'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import { openNotification } from 'util/notifications'

const Payment = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('Show order summary ')
  const [showTotal, setShowTotal] = useState<boolean>(false)
  const [showusers, setShowUsers] = useState(false)
  const [isTextOne, setIsTextOne] = useState(true)
  const cartData = useAppSelector(state => state.cartData)
  const { info, message, status } = useAppSelector(state => state.orderData)
  let cartTotalPrice = 0
  let totalPrice = 0

  const dispatch = useAppDispatch()
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
  const handleShowusers = () => {
    setShowUsers(true)
  }
  const handleoffuser = () => {
    setShowUsers(false)
  }

  const handleClickOrder = () => {
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      data: {
        orderItems: cartData,
        shippingAddress: info,
        paymentMethod: 'paymentOnDelivery',
        // itemsPrice: itemsPrice,
        shippingPrice: 10,
        taxPrice: 10,
        totalPrice: totalPrice
      }
    })
    dispatch(deleteAllFromCart(cartData))

    openNotification(
      {
        message: 'Success',
        description: 'Order Successfully!'
      },
      'success'
    )
    navigate('/')
  }

  return (
    <div className="payment">
      <div className="payment__main">
        <h2>Droon - Drone Shop Shopify Theme</h2>
        <div className="payment__header--click" onClick={handleClick}>
          <div>
            <FontAwesomeIcon className="check__header--icon" icon={faCartPlus} />
            {text}
            <FontAwesomeIcon className={`chevron-icon ${isTextOne ? '' : 'rotate'}`} icon={faChevronUp} />
          </div>
          <div>giá tiền</div>
        </div>
        {showTotal && (
          <div className="payment__main__right2">
            <div className="payment__right--distance2">
              {cartData &&
                cartData?.map((single: any) => {
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
        )}
        <div className="ship__main__navigation ">
          <NavLink to="/cart">Cart</NavLink>
          <FontAwesomeIcon icon={faAngleRight} className="ship__main__right--icon" />
          <NavLink to="/checkout">Information</NavLink>
          <FontAwesomeIcon icon={faAngleRight} className="ship__main__right--icon" />
          <NavLink to="/shipping">Shipping</NavLink>
          <FontAwesomeIcon icon={faAngleRight} className="ship__main__right--icon" />
          <NavLink to="/payment">Payment</NavLink>
        </div>
        <div className="ship__main__address">
          <div className="ship__main__address--conact">
            <span>Contact</span>
            <span>{info.email}</span>
            <a href="">change</a>
          </div>
          <div className="ship__main__address--shipto">
            <span>Ship to</span>
            <span>{info.address}</span>
            <a href="">change</a>
          </div>
          <div className="ship__main__address--methodtotal">
            <span>Method</span>
            <span>International Shipping . </span>
            <span>$10</span>
          </div>
        </div>
        <div className="payment__payment">
          <h3>Payment</h3>
          <div className="payment__payment-text">All transactions are secure and encrypted.</div>
          <div className="payment__payment--cod">Cash on Delivery (COD)</div>
        </div>
        {/* <div>
          <h3>Billing address</h3>
          <div>Select the address that matches your card or payment method.</div>
          <div className="payment__show">
            <Radio.Group name="billing-address">
              <div className="payment__show--same">
                <Radio onClick={handleoffuser} id="same-address" value="same">
                  Same as shipping address
                </Radio>
              </div>
              <div className="payment__show--use">
                <Radio onClick={handleShowusers} id="different-address" value="different">
                  Use a different billing address
                </Radio>
              </div>
            </Radio.Group>
          </div>
          <div>
            {' '}
            {showusers && (
              <div className="payment__show--address">
                <Select
                  className="check__shipping--size"
                  defaultValue="Saved addresses"
                  options={[
                    { value: '', label: 'United States' },
                    { value: 'use', label: 'Use a new address' }
                  ]}
                />
                <Select
                  className="check__shipping--size"
                  defaultValue="Country/Region"
                  options={[{ value: '', label: 'United States' }]}
                />
                <div className="check__shipping--name">
                  <Input className="check__shipping--first" placeholder="First name (optional)" />
                  <Input placeholder="Last name" />
                </div>
                <Search className="check__shipping--size" placeholder="Address" />
                <Input className="check__shipping--size" placeholder="Apartment, suite, etc, (optional)" />
                <div className="check__address">
                  <Input className="" placeholder="City" />
                  <Select
                    className=" check__address--state"
                    defaultValue="Country/Region"
                    options={[{ value: '', label: 'United States' }]}
                  />
                  <Input className="" placeholder="ZIP code" />
                </div>
              </div>
            )}
          </div>
        </div> */}
        <div className="payment__directional">
          <a className="check__directional--cart" onClick={redirectShipping} href="">
            <FontAwesomeIcon icon={faChevronLeft} />
            Return to shipping
          </a>
          <Button onClick={handleClickOrder} className="check__directional--continue" type="primary">
            Complete order
          </Button>
        </div>
      </div>
      <div className="payment__main__right">
        <div className="payment__right--distance">
          {cartData &&
            cartData?.map((single: any) => {
              const discountedPrice = getDiscountPrice(single.price, single.discount)
              discountedPrice > 0
                ? (cartTotalPrice += discountedPrice * single.quantity)
                : (cartTotalPrice += single.price * single.quantity)

              return (
                <div key={single._id} className="payment__main__right__information">
                  <div className="payment__main__right__information--item">
                    <div className="payment__main__right__information--item--img">
                      <img alt="Product Image" src={single?.images[0]} />
                    </div>
                    <div className="payment__main__right__information--item--name">{single.name}</div>
                  </div>
                  <div> ${discountedPrice > 0 ? discountedPrice.toFixed(2) : single.price.toFixed(2)}</div>
                </div>
              )
            })}
          <div className="payment__main__right--price">
            <div className="payment__main__right--price--item">
              Subtotal:
              <h4>${cartTotalPrice.toFixed(2)}</h4>
            </div>
            <div className="payment__main__right--price--item">
              Shipping:
              <h4>$10</h4>
            </div>
          </div>
          <div className="payment__main__right--total">
            Total:
            <h3>${(cartTotalPrice + 10).toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Payment
