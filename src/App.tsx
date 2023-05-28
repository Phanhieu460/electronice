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
import CheckOut from 'pages/other/CheckOut'
import ViewCart from 'pages/other/ViewCart'
import PrivateRoute from 'util/PrivateRoute'
import ProductDetail from 'pages/Products/Product-Detail/Product-detail'
import ProductList from './pages/Product/ProductList'
import Shipping from 'pages/other/Shipping'
import Payment from 'pages/other/Payment'

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
        <Route element={<PrivateRoute />}>
          <Route path="checkout" element={<CheckOut />} />
          <Route path="profile" element={<MyProfile />} />
        </Route>
        <Route path="shipping" element={<Shipping />} />
        <Route path="payment" element={<Payment />} />
        <Route path="product" element={<ProductList />} />
        <Route path="product-detail/:productId" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
