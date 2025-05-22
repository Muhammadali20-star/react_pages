import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton from '../skeleton/Skeleton'
import HomeHeader from './HomeHeader'
import HomeHero from './HomeHero'
import HomeFooter from './HomeFooter'

const Home = () => {
  const [info, setInfo] = useState(null)
  const [onLoading, setonLoading] = useState(false)
    

    useEffect(()=> {
        setonLoading(true)
        axios
      .get("https://dummyjson.com/products")
      .then(res => {
        setInfo(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=> setonLoading(false))
    }, [])

  return (
    <div>
      <HomeHeader/>
      <HomeHero/>
        <h2 className='text-center text-4xl mb-8'>products</h2>
        {onLoading && <Skeleton count={30}/>}
        <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2  gap-4 mb-15'>
        {
            info?.products?.map((product)=> (
                <div key={product.id} className='flex flex-col gap-1 bg-gray-600 text-white shadow-md'>
                   <img loading='lazy' className='bg-gray-200' src={product.thumbnail} alt={product.title} />
                   <h3 className='p-2'><span className='font-bold'>title:</span> {product.title}</h3>
                   <h3 className='p-2'><span className='font-bold'>price:</span> {product.price}</h3>
                   <h3 className='p-2'><span className='font-bold'>category:</span> {product.category}</h3>
                   <h3 className='p-2'><span className='font-bold'>brand:</span> {product.brand}</h3>
                   <h3 className='p-2'><span className='font-bold'>createdAt:</span> {product.meta.createdAt}</h3>
                   <h3 className='p-2'><span className='font-bold'>updatedAt:</span> {product.meta.updatedAt}</h3>
                   <h3 className='p-2'><span className='font-bold'>barcode:</span> {product.meta.barcode}</h3>
                   <img loading='lazy' className='w-30 h-30 mx-auto mb-4' src={product.meta.qrCode} alt="" />
                </div>
            ))
        }
    </div>
    <HomeFooter/>
    </div>
  )
}

export default React.memo(Home)