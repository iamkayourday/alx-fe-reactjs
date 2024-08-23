import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Generate uniqued Ids
    const generateUniqueId = () => `${Date.now()}-${Math.random()}`;
    addRecipe({ id: generateUniqueId(), title, description });
    setTitle('');
    setDescription('');
    setTimeout(() => {
       alert(`New Recipe Added sucessfullly`)
    }, 100)
  };
// // condition for when title and details is empty

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
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
