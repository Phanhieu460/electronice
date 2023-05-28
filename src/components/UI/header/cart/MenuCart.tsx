import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd'
import { useAppDispatch } from 'app/hook'
import { addToCart, decreaseQuantity, deleteFromCart } from 'features/cart/cartSlice'
import { getDiscountPrice } from 'helpers/products'
import { Link, useNavigate } from 'react-router-dom'

const MenuCart = (props: any) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  let cartTotalPrice = 0

  const redirectCheckout = () => {
    navigate('/checkout')
    props.setOpen(false)
  }
  const redirectViewcart = () => {
    navigate('/cart')
    props.setOpen(false)
  }
  return (
    <>
      {props.cartData && props.cartData.length > 0 ? (
        <div className="shopping-cart">
          <div className="shopping-cart__left">
            {props.cartData.map((single: any, key: number) => {
              const discountedPrice = getDiscountPrice(single.price, single.discount)
              discountedPrice > 0
                ? (cartTotalPrice += discountedPrice * single.quantity)
                : (cartTotalPrice += single.price * single.quantity)
              return (
                <li key={key} className="cart-item">
                  <div className="cart-item__img">
                    <Link to={`/product-detail/${single._id}`}>
                      <img alt="Product Image" src={single?.images[0]} />
                    </Link>
                  </div>
                  <div className="cart-item__name">
                    <h4>
                      <Link to={'/product/' + single._id}> {single.name} </Link>
                    </h4>

                    {single.selectedProductColor && single.selectedProductSize ? (
                      <div>
                        <span>Color: {single.selectedProductColor}</span>
                        <strong style={{ padding: '0 5px', fontSize: 18 }}>-</strong>
                        <span>Size: {single.selectedProductSize.toUpperCase()}</span>
                      </div>
                    ) : (
                      ''
                    )}
                    <div className="cart-item__name--price">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="cart-item__name--price--quantity">
                          <button onClick={() => dispatch(decreaseQuantity(single))}>
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <span>{single.quantity}</span>
                          <button onClick={() => dispatch(addToCart(single))}>
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                        <span className="cart-item__name--price--content">
                          ${discountedPrice > 0 ? discountedPrice.toFixed(2) : single.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="cart-item__trash">
                    <button className="button-trash" onClick={() => dispatch(deleteFromCart(single))}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </li>
              )
            })}
          </div>
          <div className="shopping-cart__right">
            <div className="shopping-cart__right--total">
              Total:
              <span className="shopping-cart__right--total--price">${cartTotalPrice.toFixed(2)}</span>
            </div>

            <div>
              <Button onClick={redirectCheckout} className="shopping-cart__right--checkout">
                CHECKOUT
              </Button>
              <Button className="shopping-cart__right--viewcart" onClick={redirectViewcart}>
                VIEW CART
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">Your cart is empty now.</p>
      )}
    </>
  )
}

export default MenuCart
