import React, { useState } from 'react'
import logo from '../../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartPlus, faCircleUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Dropdown, Menu } from 'antd'
import Cookies from 'js-cookie'
import { useAppSelector } from 'app/hook'

type Props = {}

const Header = (props: Props) => {
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false)

  const handleClickMenuBar = () => setShowMenuMobile(!showMenuMobile)
  const navigate = useNavigate()
  const cartData = useAppSelector(state => state.cartData)
  const token = Cookies.get('authToken')

  const handleLogout = () => {
    Cookies.remove('authToken')
    Cookies.remove('refreshToken')
    navigate('/')
  }

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
            <span className="header__cart__icon--quantity">{cartData && cartData.length ? cartData.length : 0}</span>
          </span>
        </NavLink>
        <Dropdown
          dropdownRender={menu => {
            return (
              <>
                {token ? (
                  <Menu>
                    <Menu.Item key="profile">
                      <Link to="/my-profile">My Profile</Link>
                    </Menu.Item>
                    <Menu.Item key="logout" onClick={handleLogout}>
                      Logout
                    </Menu.Item>
                  </Menu>
                ) : (
                  <Menu>
                    <Menu.Item key="signIn">
                      <Link to="/login">Sign In</Link>
                    </Menu.Item>
                    <Menu.Item key="signUp">
                      <Link to="/register">Sign Up</Link>
                    </Menu.Item>
                  </Menu>
                )}
              </>
            )
          }}
          placement="bottomRight"
          arrow
        >
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
