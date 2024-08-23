import { create } from 'zustand';

const generateUniqueId = () => `${Date.now()}-${Math.random()}`;

const useRecipeStore = create((set) => ({
  
  recipes: [
    {
      id: generateUniqueId(),
      title: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. It's simple yet delicious."
    },
    {
      id: generateUniqueId(),
      title: "Chicken Alfredo",
      description: "Creamy and comforting pasta dish made with tender chicken breast, heavy cream, Parmesan cheese, and fettuccine noodles."
    },
    {
      id: generateUniqueId(),
      title: "Beef Tacos",
      description: "Mexican-style tacos filled with seasoned ground beef, fresh lettuce, diced tomatoes, shredded cheese, and sour cream."
    },
    {
      id: generateUniqueId(),
      title: "Margherita Pizza",
      description: "A simple yet flavorful pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil."
    },
    {
      id: generateUniqueId(),
      title: "Chicken Biryani",
      description: "A fragrant and flavorful Indian rice dish made with spiced chicken, basmati rice, and aromatic spices like saffron and cardamom."
    },
  ],
  filteredRecipes: [], 
  searchTerm: '',
  favorites: [],
  recommendations: [],

  // Action add a new recipe 
  addRecipe: (newRecipe) => set((state) => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    };
  }),

  // Action to search for a new recipe
  setSearchTerm: (term) => set((state) => ({
    searchTerm: term,
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    ),
  })),

  // Action to filter recipe
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

    // Action to add favourite recipe
    addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),

    // Action to remove favourite recipe
    removeFavorite: (recipeId) => set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    })),

    generateRecommendations: () => set(state => {
      // Mock implementation based on favorites
      const recommended = state.recipes.filter(recipe =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  // Action to update a recipe 
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ).filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),

  // Action to delete a recipe 
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
    filteredRecipes: state.recipes.filter((recipe) => recipe.id !== id).filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
  setRecipes: (recipes) => set({ recipes })
}));

export { useRecipeStore };
