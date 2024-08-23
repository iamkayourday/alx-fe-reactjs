import React from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from "react-router-dom";


const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/')
    setTimeout(() => {
      alert('Recipe deleted successfully');
    }, 100);
  };
  
  return (
    <button onClick={handleDelete}>
        Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;