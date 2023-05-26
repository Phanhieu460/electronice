import { DeleteOutlined, MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, DatePicker, DatePickerProps, Table } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

let data = [
  {
    key: '1',
    image: 'path/to/image1',
    product: 'Product 1',
    price: 200,
    count: 1
  },
  {
    key: '2',
    image: 'path/to/image2',
    product: 'Product 2',
    price: 50,
    count: 2
  }
]

const ViewCart = () => {
  const navigate = useNavigate()
  const [listProduct, setListProduct] = useState(data)
  const redirectCheckout = () => {
    navigate('/checkout')
  }

  const handleDeclineAndIncrease = (id: string, action: string) => {
    const product = listProduct.map(item => {
      if (item.key === id) {
        if (action === 'up') {
          return {
            ...item,
            count: item.count + 1
          }
        }
        {
          return {
            ...item,
            count: item.count !== 0 ? item.count - 1 : item.count
          }
        }
      }
      return item
    })
    setListProduct(product)
  }
  const handleClearCart = () => {
    setListProduct([])
  }
  const handleRemove = (id: string) => {
    const newListProduct = listProduct.filter(item => item.key !== id)
    setListProduct(newListProduct)
  }
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {}
  const [showProduct, setShowProduct] = useState<boolean>(true)
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: () => <img src="path/to/image" alt="product" />,
      className: 'ant-table-cell ant-table-cell-with-append center'
    },
    {
      title: 'Product',
      dataIndex: 'product',
      className: 'center',
      key: 'product'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      className: 'center',
      key: 'price'
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
      className: 'center',
      render: (count: any, row: any) => {
        return (
          <div className="view__count">
            <Button icon={<MinusCircleOutlined />} onClick={() => handleDeclineAndIncrease(row.key, 'down')} />
            <div className="view__count--count">{count}</div>
            <Button icon={<PlusCircleOutlined />} onClick={() => handleDeclineAndIncrease(row.key, 'up')} />
          </div>
        )
      }
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      className: 'center',
      render: (_: any, row: any) => `${row.price * row.count}`
    },
    {
      title: 'Remove',
      dataIndex: 'remove',
      key: 'remove',
      className: 'center',
      render: (_: any, row: any) => (
        <>
          <Button className="product__hover" icon={<DeleteOutlined />} onClick={() => handleRemove(row.key)} />
        </>
      )
    }
  ]

  return (
    <div className="vier__cart__main">
      {showProduct && (
        <>
          <Table
            columns={columns}
            dataSource={listProduct}
            pagination={false}
            className="view__table ant-table-bordered"
          />
          <div className="main_more">
            <div className="main_more--left">
              <div className="main_more--img">
                <img src="data:image/png;base64,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" />
                <span>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </span>
              </div>
            </div>

            <div className="main_more__right">
              <p>tên sản phẩm</p>
              <div>
                <div className="main_more__right--extra ">
                  <div>tiền</div>
                  <div className="main_more--icon">
                    <span>{10}</span>
                    <div className="main_more--dowup">
                      {/* <div> <FontAwesomeIcon icon={faCaretUp} onClick={() => handleDeclineAndIncrease(row.key, 'down')} /> </div>
                      <div> <FontAwesomeIcon icon={faCaretDown} onClick={() => handleDeclineAndIncrease(row.key, 'up')} /> </div> */}
                    </div>
                  </div>
                </div>
                <div className="main_more--total">
                  <span>Total:</span>
                  <span>gia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="view__event">
            <button onClick={redirectCheckout} className="view__event--one">
              CONTINUE SHOPPING
            </button>
            <div className="view__event---modifier">
              <button className="view__event---modifier1">UPDATE CART</button>
              <button className="view__event---modifier2" onClick={handleClearCart}>
                CLEAR CART
              </button>
            </div>
          </div>
          <div className="view__total">
            <div className="view__total__note">
              <div className="view__total__note--date">
                <h3>Delivery Date</h3>
                <div className="view__total__date">
                  <div className="view__total--delivery">
                    <label htmlFor="">Pick a delivery date:</label>

                    <DatePicker onChange={onChange} />
                  </div>
                  <p>We do not deliver during the week-end.</p>
                </div>
              </div>
              <div className="view__total__note--special">
                <h3>Special instructions for seller</h3>
                <TextArea style={{ width: '100%' }} rows={4} placeholder="maxLength is 6" />
              </div>
            </div>
            <div>
              <div className="view__total__sum">
                <div>
                  <h3>Cart Totals</h3>
                  <div className="view__total--subtotal">
                    <div className="grid-item">Subtotal</div>
                    <div className="grid-item">gia phu</div>
                    <div className="grid-item">Total</div>
                    <div className="grid-item">Tong tien</div>
                  </div>
                  <button onClick={redirectCheckout} className="view__total__sum--check">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* {!showProduct && <p>banj khoong cos sanr phaam naof</p>} */}
    </div>
  )
}
export default ViewCart
