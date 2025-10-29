import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const Home = () => {

  const dispatch = useDispatch()
  const { allproducts, loading, errorMsg } = useSelector(state => state.productReducer)
  console.log(allproducts, loading, errorMsg);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <>
      <Header insideHome={true} />  
      <div style={{ paddingTop: '100px' }} className="container px-4 mx-auto">
        {
          loading ?
          <div className='flex justify-center items-center my-5 '>
            <img src="https://i.pinimg.com/originals/fb/f4/b4/fbf4b4b5b982c142d6b25d8bf45daa40.gif" alt="" />
            loading....
          </div>
          :
            <>
              <div className='grid grid-cols-4 gap-4'>
               { allproducts?.length>0 ?
                 allproducts?.map(product=>(
                    <div className="max-w-sm bg-white rounded-xl overflow-hidden shadow-lg mx-auto hover:shadow-2xl transition-shadow duration-300">
  
                  <img
                    className="w-full h-48 object-cover"
                    src={product?.thumbnail}
                    alt=""
                  />
  
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold mb-3">{product?.title}</h3>
  
                    <Link
                      to={`./${product?.id}/view`}
                      className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg inline-block transition duration-200"
                    >
                      View More
                    </Link>
                  </div>
                </div>
                 ))
               
                :
                <div className='flex justify-center items-center font-bold text-red-600 my-5 text-lg'>
                  Product not found!!!
                </div>
                }
              </div>
            </>

        }
      </div>
    </>
  )
}

export default Home
