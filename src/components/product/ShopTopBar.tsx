import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Select } from 'antd'
import { getSortedProducts } from 'helpers/products'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

type Props = {}

const ShopTopBar = (props: any) => {
  const navigate = useNavigate()

  const handleSelect = (value: string) => {
    props.setProducts(getSortedProducts(props.products, 'filterSort', value))
  }
  return (
    <div className="product-topbar">
      <div className="product-topbar__filter">
        <p style={{ paddingRight: 5 }}>Sort by :</p>
        <Select
          defaultValue="default"
          style={{ width: 200 }}
          options={[
            { value: 'default', label: 'Default' },
            { value: 'priceLowToHigh', label: 'Price, Low To High' },
            { value: 'priceHighToLow', label: 'Price, High To Low' }
          ]}
          onChange={handleSelect}
        />
      </div>
      <p className="product-topbar__showing">
        Showing 1 - {props.totalProduct} of {props.totalProduct} result
      </p>
      <div className="product-topbar__view">
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
