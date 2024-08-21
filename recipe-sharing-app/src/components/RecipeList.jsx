import RecipeDetails from './RecipeDetails';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);


  return (
    <div>
      <SearchBar />
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>More details on {recipe.title}</Link>        </div>
      ))}
    </div>
  );
};

export default RecipeList;
