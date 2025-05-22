import React, { useEffect, useState } from 'react'
import Skeleton from '../skeleton/Skeleton'
import axios from 'axios'
import UsersHeader from './UsersHeader'
import UserHero from './UserHero'
import UserFooter from './UserFooter'


const Users = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    axios
      .get("https://dummyjson.com/users")
      .then(res => {
        setData(res.data)
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false))
  }, [])
  
  console.log(data);
  return (
    <div className='mb-20'>
      <UsersHeader/>
      <UserHero/>
      <h2 className='text-center text-4xl mb-8'>Users</h2>
      <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2  gap-6'>
        {
          data?.users?.map((item) => (
            <div key={item.id} className='bg-stone-100 text-[12px] flex flex-col gap-4  rounded-[10px] pb-10 p-1' style={{boxShadow: '0 4px 10px rgba(10, 1, 1, 0.5)'}}>
              <div className='w-[100px] h-[100px] mx-auto mb-6'>
              <img loading='lazy' src={item.image} alt="" />
              </div>
              <h3><span className='font-bold'>firstName:</span> {item.firstName}</h3>
              <h3><span className='font-bold'>lastName:</span> {item.lastName}</h3>
              <h3><span className='font-bold'>age:</span> {item.age}</h3>
              <h3><span className='font-bold'>birthDate:</span> {item.birthDate}</h3>
              <h3><span className='font-bold'>gender:</span> {item.gender}</h3>
              <h3><span className='font-bold'>email:</span> {item.email}</h3>
              <h3><span className='font-bold'>phone:</span> {item.phone}</h3>
              <h3><span className='font-bold'>username:</span> {item.username}</h3>
              <h3><span className='font-bold'>password:</span> {item.password}</h3>
              <h3><span className='font-bold'>country:</span> {item.address.country}</h3>
              <h3><span className='font-bold'>university:</span> {item.university}</h3>
              
            </div>
          ))
        }
      </div>
      {loading && <Skeleton count={30}/>}
      <UserFooter/>
    </div>
  )
}

export default Users