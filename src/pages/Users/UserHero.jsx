import React from 'react'

const UserHero = () => {
  return (
    <div className="container mx-auto w-full bg-gray-600 h-[300px] md:h-[400px]">
      <div className="flex flex-col justify-center items-center pt-24 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Our Awesome Users</h1>
        <p className="text-lg mt-2 drop-shadow-md">Meet the amazing people using our platform.</p>
      </div>
    </div>
  )
}

export default React.memo(UserHero)