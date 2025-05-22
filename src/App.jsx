import React from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import { Routes, Route,  } from 'react-router-dom'
import Recipe from './pages/recipe/Recipe'
import Users from './pages/Users/Users'
import Posts from './pages/posts/Posts'
import NotFound from './pages/not-found/NotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipe' element={<Recipe/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App