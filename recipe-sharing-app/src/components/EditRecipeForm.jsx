import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from "react-router-dom";

const EditRecipeForm = ({ recipe }) => {
  const navigate = useNavigate();
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipe, title, description });
    navigate('/')
    setTimeout(() => {
      alert(`Recipe Edited and Updated sucessfullly`)
    }, 100)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;