import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Wishlist = () => {
    const userWishlist = useSelector(state=>state.wishlistReducer)
    const dispatch = useDispatch()
    const userCart = useSelector(state=>state.cartReducer)

     const handleCart = (product)=>{
        dispatch(addToCart(product))
        const existingProduct = userCart?.find(item=>item?.id == product?.id)
        if(existingProduct){
          alert('product quantity incremented')
        }else{
          alert('product added to your cart')
        }
      }
    


  return (
     

    <>
    <Header/>
      <div style={{paddingTop:'100px'}} className='px-5'><h1 className='text-4xl font-bold justify-center'>Wishlist</h1>

      <div className=' grid grid-cols-4 gap-5'>
        { userWishlist?.length >0?
        userWishlist.map((item)=>
        <>
        
         <div key={item?.id} className="container px-4 mx-auto ">
        <div className="max-w-sm bg-white rounded-xl overflow-hidden shadow-lg mx-auto hover:shadow-2xl transition-shadow duration-300">
          
          <img
            className="w-full h-48 object-cover"
            src={item?.thumbnail}
            alt=""
          />
          
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold mb-3">{item?.title}</h3>
            <div className='flex justify-evenly mt-3'>
              <button onClick={()=>dispatch(removeItem(item?.id))} className='text-xl'>
                <i class="fa-solid fa-heart text-rose-700"></i>
              </button>
  
              <button onClick={()=>handleCart(item?.id)}>
                <i class="fa-solid fa-cart-shopping text-green-800"></i>
              </button>
            </div>
  
          </div>
        </div>
         </div>
        
        </>
        )
        :
        <div className='text-3xl text-red-600'>
          <h1>wishlist empty</h1>
        </div>
        }
      </div>
      </div>
    </>
  )
}

export default Wishlist