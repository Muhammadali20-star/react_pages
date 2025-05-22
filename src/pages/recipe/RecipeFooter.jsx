import React from 'react'

const RecipeFooter = () => {
  return (
    <footer className="container mx-auto bg-yellow-300 text-yellow-900 py-8 mt-20 shadow-inner">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 text-sm">
        <div>
          <h3 className="font-bold mb-2">MyRecipe</h3>
          <p>
            Discover amazing recipes from around the world. Built with React & TailwindCSS.
          </p>
        </div>
        <div className="text-right">
          <p>Contact us: <a href="mailto:recipes@example.com" className="underline">recipes@example.com</a></p>
          <p className="mt-4">© {new Date().getFullYear()} Recipe Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default RecipeFooter