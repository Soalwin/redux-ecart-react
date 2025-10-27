import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Home = () => {
  return (
   <>
   <Header insideHome={true}/>
      <div style={{ paddingTop: '100px' }} className="container px-4 mx-auto">
        <div className="max-w-sm bg-white rounded-xl overflow-hidden shadow-lg mx-auto hover:shadow-2xl transition-shadow duration-300">
  
          <img
            className="w-full h-48 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9aA1rpQXU1iUxnecNDXHPix9H1qDAqfXvQ&s"
            alt=""
          />
  
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold mb-3">Title</h3>
  
            <Link
              to={'./id/view'}
              className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg inline-block transition duration-200"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
   </>
  )
}

export default Home
