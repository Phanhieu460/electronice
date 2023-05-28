import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Product from './pages/Product/ProductList'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Header from './components/UI/header/Header'
import Footer from './components/UI/footer/Footer'
import Login from './pages/Login/Login'
import BreadCrumbs from './components/UI/BreadCrumb/BreadCrumbs'
import MyProfile from './components/My-Profile/Profile'
import Register from './components/UI/form/Register'
import CheckOut from 'pages/Cart/CheckOut'
import ViewCart from 'pages/Cart/ViewCart'
import PrivateRoute from 'util/PrivateRoute'

function App() {
  const location = useLocation()

  return (
    <>
      <Header />
      {location.pathname !== '/' && (
        <BreadCrumbs title={location.pathname.split('/').filter(i => i)[0]} href={location.pathname} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<ViewCart />} />
        <Route path="product" element={<Product />} />
        <Route path="product-detail/:productid" element={<Home />} />

        <Route element={<PrivateRoute />}>
          <Route path="checkout" element={<CheckOut />} />
          <Route path="profile" element={<MyProfile />} />
        </Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
