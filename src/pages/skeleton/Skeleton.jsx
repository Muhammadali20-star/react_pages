import React from 'react'

const Skeleton = ({count}) => {
  return (
    <div className='container mx-auto grid grid-cols-4 gap-2'>
       {
        Array(count).fill("").map((__, index) => (
            <div key={index}>
                <div className='w-full h-[350px] bg-gray-400'></div>
                <div className='w-10/12 h-7 bg-gray-400 my-3'></div>
                <div className='w-1/2 h-7 bg-gray-400'></div>
            </div>
        ))
       }
    </div>
  )
}

export default React.memo(Skeleton)