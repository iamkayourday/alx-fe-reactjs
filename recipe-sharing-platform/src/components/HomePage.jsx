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
    <div>
      <div>
        <h3>RECIPE APP</h3>
      </div>
      <p>Unlock the joy of cooking with step-by-step recipes tailored to your taste. Explore, create, and share your favorite dishes today!</p>
      <h1>Our Recipes</h1>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <div>
              <img
                src={recipe.image}
                alt={recipe.title}
              />
            </div>
            <div>
              <h2>{recipe.title}</h2>
              <p>{recipe.summary}</p>
              <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
