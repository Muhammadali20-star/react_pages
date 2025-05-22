import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton from '../skeleton/Skeleton'
import PostsHeader from './PostsHeader'
import PostsFooter from './PostsFooter'
import PostsHero from './PostsHero'

const Posts = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)


  useEffect(()=> {
    setLoading(true)
    axios
  .get("https://dummyjson.com/posts")
  .then(res => {
    setData(res.data)
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(()=> setLoading(false))
}, [])


  return (
    <div id='home'>
      <PostsHeader/>
      <PostsHero/>
       <h2 className='text-center text-4xl mb-8'>Posts</h2>
        {loading && <Skeleton count={30}/>}
        <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2  gap-4'>
        {
            data?.posts?.map((post)=> (
                <div key={post.id} className='bg-gray-200 p-6 rounded-[10px]' style={{boxShadow: '0 4px 10px rgba(10, 1, 1, 0.5)'}}>
                   <h3><span className='font-bold'>title:</span> {post.title}</h3>
                   <h3><span className='font-bold'>body:</span> {post.body}</h3>
                   {post?.tags?.map((index, id)=>(
                     <h3 key={id}><span className='font-bold'>tags:</span> {index}</h3>
                   ))}
                   <h3><span className='font-bold'>likes:</span> {post.reactions.likes}</h3>
                   <h3><span className='font-bold'>dislikes:</span> {post.reactions.dislikes}</h3>
                   <h3><span className='font-bold'>views:</span> {post.views}</h3>
                   <h3><span className='font-bold'>userId:</span> {post.userId}</h3>
                </div>
            ))
        }
    </div>
    <PostsFooter/>
    </div>
  )
}

export default Posts