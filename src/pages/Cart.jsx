import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice'

const Cart = () => {
  const navigate =  useNavigate()
  const userCart = useSelector(state=>state.cartReducer)
  const[cartTotal,setCartTotal] = useState(0)
  const dispatch = useDispatch()

  const handleDecrement = (product)=>{
    if(product?.quantity>1){
      dispatch(decrementQuantity(product?.id))
    }else{
      dispatch(removeCartItem(product?.id))
    }
  }

  const checkout = ()=>{
    dispatch(emptyCart())
    alert('thank you for purchasing')
    navigate('/')
  }


  useEffect(()=>{
    if(userCart?.length > 0){
      setCartTotal(userCart?.map(item=>item.totalPrice).reduce((a,b)=>a+b))
    }
  },[userCart])


  return (
    <>
    <Header/>

      <div style={{ paddingTop: '100px' }} className='px-5'>
       { userCart?.length>0 ?
        <>
          <h1 className='text-5xl font-bold text-blue-600'> cart summary </h1>
          <div className='grid grid-cols-3 gap-4 mt-5'>
            <div className='col-span-2 border rounded p-5 shadow'>
              <table className='table-auto w-full'>
                <thead>
                  <tr>
                    <td className='font-semibold'>       #       </td>
                    <td className='font-semibold'>       Name     </td>
                    <td className='font-semibold'>       Image      </td>
                    <td className='font-semibold'>       Quantity       </td>
                    <td className='font-semibold'>       Price      </td>
                    <td className='font-semibold'>      .......       </td>
                  </tr>
                </thead>
                <tbody>
                  {userCart?.map((product,index)=>(

                  
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{product?.title}</td>
                    <td><img width={'70px'} src={product?.thumbnail} alt="" /></td>
                    <div className='flex'>
                      <button onClick={()=>handleDecrement(product)}>-</button>
                      <input value={product?.quantity} type="text" className='border rounded p-1 m-2' />
                      <button className='font-bold btn border-2 ' onClick={()=>dispatch(incrementQuantity(product?.id))}>+</button>
                    </div>
                    <td>${product?.totalPrice}</td>
                    <td><button onClick={()=>dispatch(removeCartItem(product?.id))}><i class="fa-solid fa-trash text-red-800" ></i></button></td>
                  </tr>
                ))}
                </tbody>
              </table>
              <div className='float-right mt-5 ms-2'>
                <button onClick={()=>dispatch(emptyCart())} className='bg-red-500 rounded p-2 text-white'>empty cart</button>
                <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2'>shop More</Link>
              </div>
            </div>


            <div className='col-span-1'>
              <div className='border rounded shadow p-5'>
                <h2 className='text-2xl font-bold my-4'>Total Amount: <span className='text-red-600'>${cartTotal}</span></h2>
                <button onClick={()=>checkout()} className='bg-green-600 rounded p-2 text-white w-full mt-4'>checkout</button>

              </div>
            </div>


          </div>
        </>
        :
        <div className='text-3xl text-red-600'>
          <h1>cart empty</h1>
        </div>
        }

      </div>
    </>
  )
}

export default Cart