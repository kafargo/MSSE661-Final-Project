const RECIPES_API = `${BASE_API_URL}/recipes`; // http://localhost:3000/api/recipes

class RecipeService {
  getRecipes = () => _get(RECIPES_API);

  addRecipe = (formData) => _post(RECIPES_API, formData);

  getGroceryList = (formData) =>
    _post(`${RECIPES_API}/allingredients`, formData);
}
