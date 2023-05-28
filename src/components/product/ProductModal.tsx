import { faCartPlus, faCircle, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, Radio } from 'antd'
import { useAppDispatch, useAppSelector } from 'app/hook'
import { addToCart } from 'features/cart/cartSlice'
import { getProductCartQuantity } from 'helpers/products'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { openNotification } from 'util/notifications'

const ProductModal = (props: any) => {
  const dispatch = useAppDispatch()
  const cartData = useAppSelector(state => state.cartData)
  const [product, setProduct] = useState(props.product)
  const [selectedProductColor, setSelectedProductColor] = useState(
    props.product.variation ? props.product.variation[0].color : ''
  )

  const [selectedProductSize, setSelectedProductSize] = useState(
    props.product.variation ? props.product.variation[0].size[0].name : ''
  )
  const [productStock, setProductStock] = useState(
    props.product.variation ? props.product.variation[0].size[0].stock : props.product?.stock
  )
  const [quantityCount, setQuantityCount] = useState(1)

  const productCartQty = getProductCartQuantity(cartData, props.product, selectedProductColor, selectedProductSize)

  return (
    <Modal open={props.isModalOpen} footer={null} width={1000} onCancel={() => props.setIsModalOpen(false)}>
      <div className="product-modal">
        <div className="product-modal__image">
          <img className="product-modal__image--img" alt="product-image" src={props.product.images[0]} />

          {props.product.news && <span className="product-modal__image--news">New</span>}
          {props.product.discount > 0 && (
            <span className="product-modal__image--discount">-{props.product.discount}%</span>
          )}
        </div>

        <div className="product-modal__content">
          <NavLink to={`/product-detail/${props.product._id}`}>
            <h3 className="product-modal__content--title">{props.product.name}</h3>
          </NavLink>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span
              className="product-modal__content--price"
              style={{ paddingRight: 10, textDecoration: `${props.product.discount ? 'line-through' : 'none'}` }}
            >
              $ {props.product.price}
            </span>
            {props.product.discount ? (
              <span className="product-modal__content--priceSale">
                $ {props.product.price - (props.product.price * props.product.discount) / 100}
              </span>
            ) : (
              ''
            )}
          </div>
          {props.product.shortDescription.split('. ').length > 1
            ? props.product.shortDescription.split('. ').map((item: any, index: number) => {
                return (
                  <div key={index}>
                    {item !== '' && (
                      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faCircle} style={{ fontSize: 6, marginRight: 5 }} />
                        <li className="product-modal__content--description" key={index}>
                          {item}
                        </li>
                      </div>
                    )}
                  </div>
                )
              })
            : props.product.shortDescription.split('. ').map((item: any, index: number) => {
                return (
                  <div key={index}>
                    {item !== '' && (
                      <p
                        style={{ fontSize: 18, fontWeight: 300 }}
                        className="product-modal__content--description"
                        key={index}
                      >
                        {item}
                      </p>
                    )}
                  </div>
                )
              })}
          <div className="product-modal__content--color">
            <span className="product-modal__content--color--title">Color</span>
            <div className="product-modal__content--color--content">
              {props.product.variation.map((single: any, key: number) => {
                return (
                  <label className={`product-modal__content--color--content--single ${single.color}`} key={key}>
                    <Radio
                      value={single.color}
                      name="product-color"
                      checked={single.color === selectedProductColor ? true : false}
                      onChange={() => {
                        setSelectedProductColor(single.color)
                        setSelectedProductSize(single.size[0].name)
                        setProductStock(single.size[0].stock)
                        setQuantityCount(1)
                      }}
                    />
                    <div className="color-checkmark" style={{ background: `${single.color}` }}></div>
                  </label>
                )
              })}
            </div>
          </div>
          <div className="product-modal__content--size">
            <span className="product-modal__content--size--title">Size</span>
            <div className="product-modal__content--size--content">
              {props.product.variation &&
                props.product.variation.map((single: any) => {
                  return single.color === selectedProductColor
                    ? single.size.map((singleSize: any, key: number) => {
                        return (
                          <label className={`product-modal__content--size--content--single`} key={key}>
                            <Radio
                              value={singleSize.name}
                              checked={singleSize.name === selectedProductSize ? true : false}
                              onChange={() => {
                                setSelectedProductSize(singleSize.name)
                                setProductStock(singleSize.stock)
                                setQuantityCount(1)
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

          <div className="view-cart__quantity">
            <div className="view-cart__quantity--content">
              <button onClick={() => setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <input className="cart-plus-minus-box" type="text" value={quantityCount} readOnly />
              <button
                onClick={() =>
                  setQuantityCount(quantityCount < productStock - productCartQty ? quantityCount + 1 : quantityCount)
                }
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          <Button
            className="product-modal__content--addToCart"
            onClick={() => {
              dispatch(
                addToCart({
                  ...product,
                  quantity: quantityCount,
                  selectedProductColor: selectedProductColor
                    ? selectedProductColor
                    : product.selectedProductColor
                    ? product.selectedProductColor
                    : null,
                  selectedProductSize: selectedProductSize
                    ? selectedProductSize
                    : product.selectedProductSize
                    ? product.selectedProductSize
                    : null
                })
              )
              props.setIsModalOpen(false)
              openNotification(
                {
                  message: 'Success',
                  description: 'Added to cart successfully!'
                },
                'success'
              )
            }}
          >
            <FontAwesomeIcon icon={faCartPlus} style={{ marginRight: 5 }} />
            Add To Cart
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default ProductModal
