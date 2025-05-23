import React from 'react'

const PostsHero = () => {
  return (
    <div className="container mx-auto  h-[450px] bg-gray-800">
      <div className="flex flex-col justify-center items-center pt-24 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">Latest Blog Posts</h1>
        <p className="text-lg md:text-xl max-w-xl drop-shadow-md">
          Dive into the latest stories, news, and insights from our creative community.
        </p>
      </div>
    </div>
  )
}

export default React.memo(PostsHero)