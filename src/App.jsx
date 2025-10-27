
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import View from './pages/View'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import { Route, Routes } from 'react-router-dom'


function App() {
 

  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/view' element={<View/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
