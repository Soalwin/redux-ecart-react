
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import View from './pages/View'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import { Route, Routes } from 'react-router-dom'
import Pnf from './pages/Pnf'


function App() {
 

  return (
    <>
      {/* <Header/> */}
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/:id/view' element={<View/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
      <Route path='/*' element={<Pnf/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
