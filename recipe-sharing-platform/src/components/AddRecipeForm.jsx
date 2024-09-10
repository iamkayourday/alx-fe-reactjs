// Form not working yet 9/10/2024
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import recipeData from '../data.json'; 

const AddRecipeForm = () => {
  // States using useState
  const [recipes, setRecipes] = useState(recipeData);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); 
    }
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validations
    const validate = {};
    if (!title) validate.title = 'Title is required';
    if (!summary) validate.summary = 'Summary is required';
    if (!ingredients || ingredients.split('\n').length < 2) {
      validate.ingredients = 'Please include at least two ingredients';
    }
    if (!instructions) validsate.instructions = 'Instructions are required';
    if (!image) validate.image = 'Image is required';
    if (Object.keys(validate).length > 0) {
      setErrors(validate);
      toast.error('Please fill in all required fields.');
      return;
    }
    // New form data
    const formData = {
      id: Date.now(),
      title,
      summary,
      steps: ingredients.split('\n'),
      instructions: instructions.split('\n'),
      image
    };

    // Reset form
    setRecipes([...recipes, formData]);
    setTitle('');
    setSummary('');
    setIngredients('');
    setSteps('');
    setImage(null);
    setErrors({});
    toast.success('Recipe added successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Title */}
        <div className="w-full flex justify-center">
          <div className="w-2/4">
            <label className="block text-lg text-left font-medium text-gray-700" htmlFor="title">Recipe Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full p-3 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>
        </div>

        {/* Summary */}
        <div className="w-full flex justify-center">
          <div className="w-2/4">
            <label className="block text-lg text-left font-medium text-gray-700" htmlFor="summary">Summary</label>
            <textarea
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              rows="3"
              className="mt-1 block w-full p-3 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
            {errors.summary && <p className="text-red-500 text-sm mt-1">{errors.summary}</p>}
          </div>
        </div>

        {/* Ingredients */}
        <div className="w-full flex justify-center">
          <div className="w-2/4">
            <label className="block text-lg text-left font-medium text-gray-700" htmlFor="ingredients">Ingredients (separate each with a new line)</label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="4"
              className="mt-1 block w-full p-3 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
            {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
          </div>
        </div>

        {/* Instructions */}
        <div className="w-full flex justify-center">
          <div className="w-2/4">
            <label className="block text-lg text-left font-medium text-gray-700" htmlFor="instructions">Instructions (separate each with a new line)</label>
            <textarea
              id="instructions"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              rows="4"
              className="mt-1 block w-full p-3 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
            {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
          </div>
        </div>

        {/* Image Upload */}
        <div className="w-full flex justify-center">
          <div className="w-2/4">
            <label className="block text-lg text-left font-medium text-gray-700" htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleChange}
              className="mt-1 block w-full p-3 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
          </div>
        </div>

       {/* Submit Button */}
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="w-2/4 bg-gray-600 text-white p-3 rounded-md shadow hover:bg-gray-700 focus:ring-4 focus:ring-gray-300">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
