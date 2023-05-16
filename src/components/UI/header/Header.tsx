import React, { useState } from 'react'
import logo from '../../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faCircleUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { MenuProps, Dropdown, Button } from 'antd'

type Props = {}

const Header = (props: Props) => {
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false)

  const handleClickMenuBar = () => setShowMenuMobile(!showMenuMobile)

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <NavLink rel="noopener noreferrer" to="login">
          Login
        </NavLink>
      )
    },
    {
      key: '2',
      label: (
        <NavLink rel="noopener noreferrer" to="create-account">
          Create Account
        </NavLink>
      )
    },
    {
      key: '3',
      label: (
        <NavLink rel="noopener noreferrer" to="my-profile">
          My Profile
        </NavLink>
      )
    },
    {
      key: '4',
      label: (
        <NavLink rel="noopener noreferrer" to={''}>
          Logout
        </NavLink>
      )
    }
  ]
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <div className="header__menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="header__cart">
        <NavLink to="/cart">
          <span className="header__cart__icon">
            <FontAwesomeIcon icon={faCartPlus} />
            <span className="header__cart__icon--quantity">1</span>
          </span>
        </NavLink>
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <FontAwesomeIcon icon={faCircleUser} />
        </Dropdown>
      </div>
      <FontAwesomeIcon icon={faBars} className="header__menubar" onClick={handleClickMenuBar} />
      {showMenuMobile && (
        <div className="header__mobile">
          <FontAwesomeIcon icon={faXmark} className="header__mobile--close" onClick={() => setShowMenuMobile(false)} />
          <div className="header__mobile--menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
