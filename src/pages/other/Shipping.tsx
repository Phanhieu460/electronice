import { faAngleRight, faCartPlus, faChevronLeft, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd'
import { useAppSelector } from 'app/hook'
import { getDiscountPrice } from 'helpers/products'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Shipping = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('Show order summary ')
  const [showTotal, setShowTotal] = useState<boolean>(false)
  const [isTextOne, setIsTextOne] = useState(true)
  const cartData = useAppSelector(state => state.cartData)
  let cartTotalPrice = 0

  const redirectCheckout = () => {
    navigate('/checkout')
  }
  const redirectPayment = () => {
    navigate('/payment')
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
  return (
    <div className="ship">
      <div className="ship__main">
        <h2>Droon - Drone Shop Shopify Theme</h2>
        <div className="check__header--click" onClick={handleClick}>
          <div>
            <FontAwesomeIcon className="check__header--icon" icon={faCartPlus} />
            {text}
            <FontAwesomeIcon className={`chevron-icon ${isTextOne ? '' : 'rotate'}`} icon={faChevronUp} />
          </div>
          <div>giá tiền</div>
        </div>
        {showTotal && (
          <div className="shipping__main__right2">
            <div className="shipping__right--distance">
              <div className="check__main__information">
                <div className="check__main__information--img">
                  <img
                    src="https://cdn.shopify.com/s/files/1/1280/1207/products/5_e48a4865-c05c-4568-ba1b-37e6828ddfea_64x64.jpg?v=1640259829"
                    alt=""
                  />
                </div>
                <div>
                  <div>2. New badge product</div>
                  <span>m / gold</span>
                </div>
                <div>total</div>
              </div>
              <div className="check__main__subtotal">
                <div>Subtotal</div>
                <div>total</div>
              </div>
              <div className="check__main__calculate">
                <span>shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="check__main__total">
                <span>Total</span>
                <span>USD{'total'}</span>
              </div>
            </div>
          </div>
        )}
        <div className="ship__main__navigation ">
          <a onClick={() => navigate('/cart')}>Cart</a>
          <FontAwesomeIcon icon={faAngleRight} className="ship__main__right--icon" />
          <span>Information</span>
          <FontAwesomeIcon icon={faAngleRight} className="ship__main__right--icon" />
          <a onClick={redirectPayment}>Shipping</a>
          <FontAwesomeIcon icon={faAngleRight} className="ship__main__right--icon" />
          <span>Payment</span>
        </div>
        <div className="ship__main__address">
          <div className="ship__main__address--conact">
            <span>Contact</span>
            <span>email đăng ký</span>
            <a href="">change</a>
          </div>
          <div className="ship__main__address--shipto">
            <span>Ship to</span>
            <span>địa chỉ nhận hàng</span>
            <a href="">change</a>
          </div>
        </div>
        <div className="ship__main__method">
          <h2>Shipping method</h2>
          <div className="ship__main__method--totalship">
            <span>International Shipping</span>
            <span>$10</span>
          </div>
        </div>
        <div className="check__directional">
          <a className="check__directional--cart" onClick={redirectCheckout} href="">
            <FontAwesomeIcon icon={faChevronLeft} />
            Return to information
          </a>
          <Button onClick={redirectPayment} className="check__directional--continue" type="primary">
            Continue to payment
          </Button>
        </div>
      </div>
      <div className="check__main__right">
        <div className="check__right--distance">
          {cartData &&
            cartData?.map((single: any) => {
              const discountedPrice = getDiscountPrice(single.price, single.discount)
              discountedPrice > 0
                ? (cartTotalPrice += discountedPrice * single.quantity)
                : (cartTotalPrice += single.price * single.quantity)

              return (
                <div key={single._id} className="check__main__information">
                  {/* <div className="check__main__information--img">
                    <img alt="Product Image" src={single?.images[0]} />
                  </div> */}
                  <div>{single.name}</div>
                  <div> ${discountedPrice > 0 ? discountedPrice.toFixed(2) : single.price.toFixed(2)}</div>
                </div>
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
    </div>
  )
}
export default Shipping
