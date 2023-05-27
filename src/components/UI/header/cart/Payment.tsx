import { faAngleRight, faCartPlus, faChevronLeft, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Input, Radio, Select } from 'antd'
import Search from 'antd/es/input/Search'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('Show order summary ')
  const [showTotal, setShowTotal] = useState<boolean>(false)
  const [showusers, setShowUsers] = useState(false)
  const [isTextOne, setIsTextOne] = useState(true)
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
          <a onClick={redirectCart}>Cart</a>
          <FontAwesomeIcon icon={faAngleRight} className="ship__main__right--icon" />
          <span>Information</span>
          <FontAwesomeIcon icon={faAngleRight} className="ship__main__right--icon" />
          <a onClick={redirectShipping}>Shipping</a>
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
          <div className="ship__main__address--methodtotal">
            <span>Method</span>
            <span>International Shipping . </span>
            <span>tiền ship</span>
          </div>
        </div>
        <div className="payment__payment">
          <h3>Payment</h3>
          <div className="payment__payment-text">All transactions are secure and encrypted.</div>
          <div className="payment__payment--cod">Cash on Delivery (COD)</div>
        </div>
        <div>
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
        </div>
        <div className="payment__directional">
          <Button onClick={redirectShipping} className="check__directional--continue" type="primary">
            Complete order
          </Button>
          <a className="check__directional--cart" onClick={redirectCart} href="">
            <FontAwesomeIcon icon={faChevronLeft} />
            Return to cart
          </a>
        </div>
      </div>

      <div className="payment__main__right">
        <div className="payment__right--distance">
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
    </div>
  )
}
export default Payment
