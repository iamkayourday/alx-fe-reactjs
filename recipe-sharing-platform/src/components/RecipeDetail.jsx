import React, { useEffect, useState } from 'react';
import recipeData from '../data.json'; 
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null); 

  useEffect(() => {
    const recipeDetails = recipeData.find((recipe) => recipe.id === +(id));
    setRecipe(recipeDetails);
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl text-gray-500">Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center md:flex-row md:space-x-8">

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={recipe.image || "https://via.placeholder.com/150"}
            alt={recipe.title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Recipe  */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
          <p className="text-lg text-gray-600 mb-4">{recipe.summary}</p>

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Ingredients Needed</h2>
            <ul className="list-disc text-left list-inside text-gray-600 text-lg leading-relaxed">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Instructions</h2>
            <ol className="list-decimal text-left list-inside space-y-4 text-gray-600 text-lg leading-relaxed">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>

          {/* Steps */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Steps to Cook</h2>
            <ol className="list-decimal text-left list-inside space-y-4 text-gray-600 text-lg leading-relaxed">
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
