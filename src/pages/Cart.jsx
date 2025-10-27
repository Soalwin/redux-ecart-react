import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
      <div style={{ paddingTop: '100px' }} className='px-5'>
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
                  <tr>
                    <td>1</td>
                    <td>Product Name</td>
                    <td><img width={'70px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9aA1rpQXU1iUxnecNDXHPix9H1qDAqfXvQ&s" alt="" /></td>
                    <div className='flex'>
                      <button>-</button>
                      <input type="text" className='border rounded p-1 m-2' />
                      <button>+</button>
                    </div>
                    <td>$250</td>
                    <td><button><i class="fa-solid fa-trash text-red-800" ></i></button></td>
                  </tr>
                </tbody>
              </table>
              <div className='float-right mt-5 ms-2'>
                <button className='bg-red-500 rounded p-2 text-white'>empty cart</button>
                <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2'>shop More</Link>
              </div>
            </div>


            <div className='col-span-1'>
              <div className='border rounded shadow p-5'>
                <h2 className='text-2xl font-bold my-4'>Total Amount: <span className='text-red-600'>$230</span></h2>
                <button className='bg-green-600 rounded p-2 text-white w-full mt-4'>empty cart</button>

              </div>
            </div>


          </div>
        </>

      </div>
    </>
  )
}

export default Cart