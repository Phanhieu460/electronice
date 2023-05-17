import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Product from './pages/Product/Product'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Header from './components/UI/header/Header'
import Footer from './components/UI/footer/Footer'
import Login from './pages/Login/Login'
import BreadCrumbs from './components/UI/BreadCrumb/BreadCrumbs'
import MyProfile from './components/My-Profile/Profile'
import Register from './components/UI/form/Register'

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
        {/* <Route path="login" element={<Home />} />
        <} />
        <Route path="cart" element={<Home />} />
        <Route path="checkout" element={<Home />} /> */}
        <Route path="product" element={<Product />}>
          {/* <Route path=":productid" element={<Home />} /> */}
        </Route>
        <Route path="my-profile/:id" element={<MyProfile />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
