import React from 'react'

const View = () => {
  return (
    <>
      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 gap-5 items-center h-screen'>

          <div>
            <img width={'350px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNu30BamO_jUYLHxyZRykyk7LwDdZ86DlKZg&s" alt="" />
            <div className='flex justify-between mt-5'>
              <button className='bg-blue-600 text-white p-2 border rounded-2xl'>Add to Wishlist</button>
              <button className='bg-green-600 text-white p-2 border rounded-2xl'>Add to cart</button>
            </div>

          </div>          <div>
            <h3 className='font-bold'>PID: id</h3>
            <h3 className='font-bold text-5xl'>title
            </h3>
            <h3 className='font-bold text-red-500'>$34</h3>
            <h3 className='font-bold'>Brand: brand</h3>
            <h3 className='font-bold'>Category: cateogry</h3>
            <p><span className='font-bold'>Descroption</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis explicabo dolorem delectus dolore adipisci ipsa, unde in rerum minus facilis non architecto autem voluptates a deleniti nobis tempora ipsum officia!</p>

          </div>


        </div>

      </div>

    </>

  )
}

export default View