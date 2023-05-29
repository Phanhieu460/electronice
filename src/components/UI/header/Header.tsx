import { faBars, faCartPlus, faCircleUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Drawer, DrawerProps, Dropdown, Menu, Space } from 'antd'
import { useAppSelector } from 'app/hook'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import MenuCart from './cart/MenuCart'
import { parseJwt } from 'util/decodeJWT'
import api from 'api/apiClient'
import { User } from 'models/user'

type Props = {}

const Header = (props: Props) => {
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false)
  const [showCart, setShowCart] = useState<boolean>(false)
  const handleClickCart = () => setShowCart(!showCart)
  const handleClickMenuBar = () => setShowMenuMobile(!showMenuMobile)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right')
  const cartData = useAppSelector(state => state.cartData)
  const token = Cookies.get('authToken')
  const [profile, setProfile] = useState<any>()

  useEffect(() => {
    if (token) {
      api
        .get(`api/users/profile/${parseJwt(token).id}`)
        .then((res: any) => {
          setProfile(res)
        })
        .catch(err => console.log(err))
    }
  }, [])

  const handleLogout = () => {
    Cookies.remove('authToken')
    Cookies.remove('refreshToken')
    navigate('/')
  }

  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
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
              <span className="header__cart__icon--quantity">{cartData && cartData.length ? cartData.length : 0}</span>
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
            {/* {cartData && cartData.length ? (
              <>
                
                
              </>
            ) : (
              <p>Your cart is empty now.</p>
            )} */}
            <MenuCart cartData={cartData} setOpen={setOpen} />
          </Drawer>
        </div>
        <Dropdown
          dropdownRender={menu => {
            return (
              <>
                {token ? (
                  <Menu>
                    <Menu.Item key="profile">
                      <Link to="/profile">My Profile</Link>
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
          {profile ? <img className="avatar" src={profile?.image} /> : <FontAwesomeIcon icon={faCircleUser} />}
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
