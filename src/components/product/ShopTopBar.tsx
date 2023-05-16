import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Select } from 'antd'
import React from 'react'

type Props = {}

const ShopTopBar = (props: any) => {
  return (
    <div className="product-topbar">
      <div className="product-topbar__filter">
        <p>Sort by :</p>
        <Select
          defaultValue="featured"
          style={{ width: 200 }}
          options={[
            { value: 'featured', label: 'Featured' },
            { value: 'priceLowToHigh', label: 'Price, Low To High' },
            { value: 'priceHighToLow', label: 'Price, High To Low' },
            { value: 'AZ', label: 'A-Z' },
            { value: 'ZA', label: 'Z-A' }
          ]}
        />
      </div>
      <p className="product-topbar__showing">Showing 1 - 10 of {props.totalProduct} result</p>
      <div>
        <button>
          <i className="fas fa-th-large"></i>
        </button>
        <button>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  )
}

export default ShopTopBar
