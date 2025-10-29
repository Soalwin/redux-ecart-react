import React from 'react'
import Header from '../components/Header'

const Wishlist = () => {
  return (
     

    <>
    <Header/>
      <div style={{paddingTop:'100px'}} className='px-5'><h1 className='text-4xl font-bold justify-center'>Wishlist</h1>
      <>
       <div  className="container px-4 mx-auto">
      <div className="max-w-sm bg-white rounded-xl overflow-hidden shadow-lg mx-auto hover:shadow-2xl transition-shadow duration-300">
        
        <img
          className="w-full h-48 object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9aA1rpQXU1iUxnecNDXHPix9H1qDAqfXvQ&s"
          alt=""
        />
        
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold mb-3">Title</h3>
          <div className='flex justify-evenly mt-3'>
            <button className='text-xl'>
              <i class="fa-solid fa-heart text-rose-700"></i>
            </button>

            <button>
              <i class="fa-solid fa-cart-shopping text-green-800"></i>
            </button>
          </div>

        </div>
      </div>
    </div>
      
      </>
     
      
      </div>
    </>
  )
}

export default Wishlist