import {create} from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  searchTerm: '',
  filteredRecipes: [],
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
  
  // Action to search
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to filter search
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  // Action to add favourite Recipe
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  // Action to remove Favourite Recipe
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
// Action is Optional, Will check this later
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
  setRecipes: (recipes) => set({ recipes })
}));
// console.log(useRecipeStore.getState().recipes);

export { useRecipeStore };