import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigator = useNavigate()
  return (
    <div className='text-center'>
        <h1 className='text-8xl'>404</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <button className='hover:underline' onClick={()=> navigator('/')}>Go Home</button>
        <img className='block mx-auto' src="https://uzmovi.tv/images/notfound.gif" alt="" />
    </div>
  )
}

export default NotFound