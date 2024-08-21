import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({recipeId }) => {
const navigate = useNavigate();
const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

const handleDelete = () => {
  deleteRecipe(recipeId)
  navigate('/');
};
  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  )
}

export default DeleteRecipeButton