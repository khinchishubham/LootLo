import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from "./pages/Login";
import Order from "./pages/Order";
import Placeorder from "./pages/Placeorder";
import Product from './pages/Product'
import Footer from './components/Footer'



function App() {


  return (
    <>
      <div className=' px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/order' element={<Order />} />
          <Route path='/placeorder' element={<Placeorder />} />
          <Route path='/product/:productId' element={<Product/>} />
          

        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App
