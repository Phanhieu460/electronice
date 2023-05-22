import {
  faAngleLeft,
  faAngleRight,
  faCartPlus,
  faChevronLeft,
  faChevronUp,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Checkbox, Collapse, Input, Select } from 'antd'
import Search from 'antd/es/input/Search'
import Cookies from 'js-cookie'
import { useState } from 'react'

import { Form, useNavigate } from 'react-router-dom'

const CheckOut = () => {
  const [text, setText] = useState('Show order summary ')
  const [isTextOne, setIsTextOne] = useState(true)
  const [showTotal, setShowTotal] = useState<boolean>(false)
  const navigate = useNavigate()

  const redirectCart = () => {
    navigate('/cart')
  }
  const token = Cookies.get('authToken')

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
  return (
    <div className="check">
      <div className="check__all">
        <div className="check__main">
          <h2 className="check__header">Droon - Drone Shop Shopify Theme</h2>
          <div className="check__header--cart">
            {/* <div className="check__header--click"> */}
            <div className="check__header--click" onClick={handleClick}>
              <div>
                <FontAwesomeIcon className="check__header--icon" icon={faCartPlus} />
                {text}
                <FontAwesomeIcon className={`chevron-icon ${isTextOne ? '' : 'rotate'}`} icon={faChevronUp} />
              </div>
              <div>giá tiền</div>
            </div>
            {showTotal && (
              <div className="check__main__right">
                <div className="check__right--distance">
                  <div className="check__main__information">
                    <div>anh</div>
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

            {/* </div> */}
          </div>

          <div className="check__main__navigation ">
            <a onClick={redirectCart}>Cart</a>
            <FontAwesomeIcon icon={faAngleRight} className="check__main__right--icon" />
            <span>Information</span>
            <FontAwesomeIcon icon={faAngleRight} className="check__main__right--icon" />
            <span>Shipping</span>
            <FontAwesomeIcon icon={faAngleRight} className="check__main__right--icon" />
            <span>Payment</span>
          </div>
          <h2>Contact</h2>
          <div className="check__contact ">
            <div className="check__contact__email ">
              <div>ten dang nhap email</div>
              <a onClick={handleLogout}>Logout</a>
            </div>
            <div>
              <Checkbox className="">Email me with news and offers</Checkbox>
            </div>
          </div>
          <div className="check__information ">
            <h2>Shipping address</h2>
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
            <div className="check__directional">
              <a className="check__directional--cart" onClick={redirectCart} href="">
                <FontAwesomeIcon icon={faChevronLeft} />
                Return to cart
              </a>
              <Button className="check__directional--continue" type="primary">
                Continue to shipping
              </Button>
            </div>
          </div>
        </div>
        <div className="check__main__right2">
          <div className="check__right--distance">
            <div className="check__main__information">
              <div>anh</div>
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
        {/* //// */}
      </div>

      <footer></footer>
    </div>
  )
}

export default CheckOut
