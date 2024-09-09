import React, { useState, useEffect } from 'react';
import recipeData from '../data.json';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Load data from the mock JSON file
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-start mb-6 cursor-pointer md:justify-center lg:justify-center lg:font-semibold">
        <h3 className='font-bold cursor-pointer text-sm py-2 px-2 bg-slate-400'>RECIPE APP</h3>
      </div>
      <p className='font-semibold text-gray-700'>Unlock the joy of cooking with step-by-step recipes tailored to your taste. Explore, create, and share your favorite dishes today!</p>
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-700" >Our Recipes</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <div className="flex justify-center items-center w-full h-40 ">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-52  rounded-md h-52 object-cover "
            />
            </div>
            <div className="p-4 mg">
              <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <Link  
                to={`/recipe/${recipe.id}`} className="mt-4 inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 active:border- transition duration-300">View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;