import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row } from 'antd'
import React from 'react'

type Props = {}

const ProductSingle = (props: Props) => {
  return (
    <Row>
      <Col span={6}>
        {' '}
        <div className="product-single">
          <img
            className="product-image"
            alt="product-image"
            src="https://cdn.shopify.com/s/files/1/1280/1207/products/7_6371c321-c6fc-45c9-96ac-84cb0ecc4a18_large.jpg?v=1640259867"
          />
          <div className="product-content">
            <h3 className="product-content__title">Demo Product Title</h3>
            <span className="product-content__price">$21.00</span>
            <div className="product-content__ratting">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default ProductSingle
