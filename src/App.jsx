import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/productDetail/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
