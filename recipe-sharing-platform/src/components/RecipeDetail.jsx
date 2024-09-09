import React, { useEffect, useState } from 'react';
import recipeData from '../data.json'; 
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null); 

  useEffect(() => {
    const foundRecipe = recipeData.find((r) => r.id === +(id));
    setRecipe(foundRecipe);
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
    
        <div className="w-full md:w-1/2">
          <img
            src={recipe.image || "https://via.placeholder.com/150"}
            alt="recipe"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
          <ol className="list-decimal space-y-4 text-gray-600 text-lg leading-relaxed text-left">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
