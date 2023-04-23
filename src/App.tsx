import React from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product/Product'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Header from './components/UI/header/Header'
import Footer from './components/UI/footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="login" element={<Home />} />
        <Route path="register" element={<Home />} />
        <Route path="cart" element={<Home />} />
        <Route path="checkout" element={<Home />} /> */}
        <Route path="product" element={<Product />}>
          {/* <Route path=":productid" element={<Home />} /> */}
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
