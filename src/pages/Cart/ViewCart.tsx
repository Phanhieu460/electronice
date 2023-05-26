import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row } from 'antd'
import { useAppDispatch, useAppSelector } from 'app/hook'
import { addToCart, decreaseQuantity, deleteAllFromCart, deleteFromCart } from 'features/cart/cartSlice'
import { getDiscountPrice } from 'helpers/products'
import { Link, useNavigate } from 'react-router-dom'

const ViewCart = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const cartData = useAppSelector(state => state.cartData)
  let cartTotalPrice = 0

  const handleClickCheckout = () => {
    navigate('/checkout')
  }
  return (
    <div className="container-cart">
      {cartData && cartData.length ? (
        <>
          <Row>
            <Col span={12}>
              <h4>Product</h4>
            </Col>
            <Col span={4}>
              <h4>Quantity</h4>
            </Col>
            <Col span={4}>
              <h4>Price</h4>
            </Col>
            <Col span={4}>
              <h4>Total</h4>
            </Col>
          </Row>
          {cartData.map((item: any) => {
            const discountedPrice = getDiscountPrice(item.price, item.discount)
            discountedPrice > 0
              ? (cartTotalPrice += discountedPrice * item.quantity)
              : (cartTotalPrice += item.price * item.quantity)
            return (
              <Row>
                <Col span={12}>
                  <div className="view-cart">
                    <div className="view-cart__image">
                      <img src={item.images[0]} />
                    </div>
                    <h3 className="view-cart__name">{item.name}</h3>
                  </div>
                </Col>
                <Col span={4}>
                  <div className="view-cart__quantity">
                    <div className="view-cart__quantity--content">
                      <button onClick={() => dispatch(decreaseQuantity(item))}>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(addToCart(item))}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <div className="view-cart__quantity--trash">
                      <button onClick={() => dispatch(deleteFromCart(item))}>
                        <FontAwesomeIcon icon={faTrash} style={{ color: '#c4c5c5' }} />
                      </button>
                    </div>
                  </div>
                </Col>
                <Col span={4}>
                  <h4> ${item.discount ? ((item.discount * item.price) / 100).toFixed(2) : item.price.toFixed(2)}</h4>
                </Col>
                <Col span={4}>
                  <h4>
                    $
                    {item.discount
                      ? (item.quantity * ((item.discount * item.price) / 100)).toFixed(2)
                      : (item.quantity * item.price).toFixed(2)}
                  </h4>
                </Col>
              </Row>
            )
          })}
          <div className="view__event">
            <button className="view__event--one">
              <Link to="/product">CONTINUE SHOPPING</Link>
            </button>
            <div className="view__event---modifier">
              <button className="view__event---modifier2" onClick={() => dispatch(deleteAllFromCart(cartData))}>
                CLEAR CART
              </button>
            </div>
          </div>
          <div className="view-cart__total">
            <div className="view-cart__total--content">
              <h4>Total</h4>
              <span>${cartTotalPrice} USD</span>
            </div>
            <p className="shipping">Taxes and shipping calculated at checkout</p>
            <button onClick={handleClickCheckout} className="view-cart__total--checkout">
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is currently empty.</p>
      )}
    </div>
  )
}
export default ViewCart
