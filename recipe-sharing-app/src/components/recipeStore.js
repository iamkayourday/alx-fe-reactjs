import {create} from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  // Action delete
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id != id)
  })),
  // Action update
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  setRecipes: (recipes) => set({ recipes })
}));
console.log(useRecipeStore.getState().recipes);

export { useRecipeStore };