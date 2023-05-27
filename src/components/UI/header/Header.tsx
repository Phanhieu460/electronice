import { faBars, faCartPlus, faCircleUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Drawer, DrawerProps, Dropdown, Menu, Space } from 'antd'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'

type Props = {}

const Header = (props: Props) => {
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false)
  const [showCart, setShowCart] = useState<boolean>(false)
  const handleClickCart = () => setShowCart(!showCart)
  const handleClickMenuBar = () => setShowMenuMobile(!showMenuMobile)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right')
  const token = Cookies.get('authToken')
  const productStore = useSelector((state: any) => state.product.productStore)

  const handleLogout = () => {
    Cookies.remove('authToken')
    navigate('/')
  }
  const redirectCheckout = () => {
    navigate('/checkout')
    setOpen(false)
  }
  const redirectViewcart = () => {
    navigate('/cart')
    setOpen(false)
  }
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
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
        <div className="header__cart--drawer">
          <Space>
            <span className="header__cart__icon">
              <FontAwesomeIcon className="header__cart--icon" icon={faCartPlus} onClick={showDrawer} />
              <span className="header__cart__icon--quantity">{productStore.length}</span>
            </span>
          </Space>

          <Drawer
            rootClassName="drewa"
            title="Shopping cart"
            placement={placement}
            width={400}
            onClose={onClose}
            open={open}
          >
            <p>Your cart is empty now.</p>
            <div className="shopping__cart">
              <div className="shopping__cart__total">
                Total:
                <span>${'TONGTIEN'}</span>
              </div>
            </div>
            <Button onClick={redirectCheckout} className="shopping__cart__checkout">
              CHECKOUT
            </Button>
            <Button className="shopping__cart__viewcart" onClick={redirectViewcart}>
              VIEW CART
            </Button>
          </Drawer>
        </div>
        {/* {showCart && (
          <div className="shope__cart">
            <div className="shope__cart__icon">
              <h1> Shopping Cart</h1>
              <FontAwesomeIcon icon={faXmark} className="shope__cart__icon--close" onClick={() => setShowCart(false)} />
            </div>
            <p>Your cart is empty now.</p>
            <div className="shopping__cart">
              <div className="shopping__cart__total">
                Total:
                <span>${'TONGTIEN'}</span>
              </div>
              <button onClick={redirectCheckout} className="shopping__cart__checkout">
                CHECKOUT
              </button>
              <button className="shopping__cart__viewcart" onClick={redirectViewcart}>
                VIEW CART
              </button>
            </div>
          </div>
        )} */}
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
