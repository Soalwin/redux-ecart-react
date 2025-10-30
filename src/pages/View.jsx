import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Header from '../components/Header' 
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';


const View = () => {

  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  


  const[product, setProduct] = useState({})
  const {id} = useParams()
  console.log(id);
  


  const handleWishlist = (id)=>{
    const existingProduct = userWishlist?.find(item=>item?.id == id)
    if(existingProduct){
      alert('already exist')
    }else{
      dispatch(addToWishlist(product))
      alert('item added to wishlist...')
    }
  }

   const handleCart = ()=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item?.id == id)
    if(existingProduct){
      alert('product quantity incremented')
    }else{
      alert('product added to your cart')
    }
  }


  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      console.log(allProducts);
      
      const product = allProducts.find(item=>item.id == id)
      setProduct(product)
      console.log(product);
      
    }

    
},[])
  
  
  return (
    <>
    <Header/>
      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 gap-5 items-center h-screen'>

          <div>
            <img width={'350px'} src={product?.thumbnail} alt="" />
            <div className='flex justify-between mt-5'>
              <button onClick={()=>handleWishlist(product?.id)} className='bg-blue-600 text-white p-5 border rounded-2xl'>Add to Wishlist</button>
              <button onClick={handleCart} className='bg-green-600 text-white p-2 border rounded-2xl'>Add to cart</button>
            </div>

          </div>          <div>
            <h3 className='font-bold'>PID: {product?.id} </h3>
            <h3 className='font-bold text-5xl'>{product?.title}
            </h3>
            <h3 className='font-bold text-red-500'>{product?.price}</h3>
            <h3 className='font-bold'>Brand: {product?.brand}</h3>
            <h3 className='font-bold'>Category: {product?.category}</h3>
            <p><span className='font-bold'>Descroption</span>{product?.description}</p>
            <h3>Client Reviews</h3>
            {
              product?.reviews?.length>0 ?
              product?.reviews?.map((item)=>(
                <div>
                  <h5>
                    <span>{item?.reviewerName}</span>: <span>{item?.comment}</span>
                  </h5>
                  <p>Rating: {item?.rating} <i className='fa-solid fa-star text-yellow-400'></i></p>
                </div>
              ))
              :
              <div className='font-bold text-red-600'>No reviews yet</div>
            }
          </div>


        </div>

      </div>

    </>

  )
}

export default View