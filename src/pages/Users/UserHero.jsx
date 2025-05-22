import React from 'react'

const UserHero = () => {
  return (
    <div className="relative container mx-auto w-full bg-gray-600 h-[300px] md:h-[400px]">
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Our Awesome Users</h1>
        <p className="text-lg mt-2 drop-shadow-md">Meet the amazing people using our platform.</p>
      </div>
    </div>
  )
}

export default React.memo(UserHero)