import React from 'react';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams(); 
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === id)
  );

  if (!recipe.description) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={id} />
    </div>
  );
};

export default RecipeDetails;
