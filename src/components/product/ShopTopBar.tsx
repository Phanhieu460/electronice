import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Select } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

type Props = {}

const ShopTopBar = (props: any) => {
  const navigate = useNavigate()
  return (
    <div className="product-topbar">
      <div className="product-topbar__filter">
        <p style={{ paddingRight: 5 }}>Sort by :</p>
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
      <p className="product-topbar__showing">
        Showing 1 - {props.totalProduct} of {props.totalProduct} result
      </p>
      <div>
        <button
          onClick={() => {
            props.setView('grid')
          }}
        >
          <NavLink to="/product" className="active">
            <i className="fas fa-th-large"></i>
          </NavLink>
        </button>
        <button
          onClick={() => {
            props.setView('list')
          }}
        >
          <NavLink to="/product?view=list" className="">
            <FontAwesomeIcon icon={faBars} />
          </NavLink>
        </button>
      </div>
    </div>
  )
}

export default ShopTopBar
