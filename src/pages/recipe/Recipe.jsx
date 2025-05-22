import React, { useEffect, useState } from 'react'
// import Layout from '../layout/Layout'
import Skeleton from '../skeleton/Skeleton'
import axios from 'axios'
import RecipeHeader from './RecipeHeader'
import RecipeFooter from './RecipeFooter'
import RecipeHero from './RecipeHero'

const Recipe = () => {
    const [data, setData] = useState(null)
      const [loading, setLoading] = useState(false)


    useEffect(()=> {
        setLoading(true)
        axios
      .get("https://dummyjson.com/recipe")
      .then(res => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=> setLoading(false))
    }, [])
  return (
    <div>
        <RecipeHeader/>
        <RecipeHero />
        <h2 className='text-center text-4xl mb-8'>Recipe</h2>
        {loading && <Skeleton count={30}/>}
        <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2  gap-4 mb-15'>
        {
            data?.recipes?.map((recipe)=> (
                <div key={recipe.id} className='bg-gray-100 flex flex-col gap-1 px-2 rounded-[10px]'>
                   <img loading='lazy' className='bg-gray-200' src={recipe.image} alt={recipe.name} />
                   <h3><span className='font-bold'>name:</span> {recipe.name}</h3>
                   <h3><span className='font-bold'>prepTimeMinutes:</span> {recipe.prepTimeMinutes}</h3>
                   <h3><span className='font-bold'>cookTimeMinutes:</span> {recipe.cookTimeMinutes}</h3>
                   <h3><span className='font-bold'>servings:</span> {recipe.servings}</h3>
                   <h3><span className='font-bold'>difficulty:</span> {recipe.difficulty}</h3>
                   <h3><span className='font-bold'>caloriesPerServing:</span> {recipe.caloriesPerServing}</h3>
                   {recipe?.tags?.map((index, id)=>(
                    <h3 key={id}><span className='font-bold'>tags:</span> {index}</h3>
                   ))}
                </div>
            ))
        }
    </div>
    <RecipeFooter/>
    </div>
  )
}

export default React.memo(Recipe)