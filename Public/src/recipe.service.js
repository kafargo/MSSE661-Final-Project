const RECIPES_API = `${BASE_API_URL}/recipes`; // http://localhost:3000/api/recipes

const getRecipes = () => _get(RECIPES_API);

const addRecipe = (formData) => _post(RECIPES_API, formData);

const getGroceryList = (formData) =>
  _post(`${RECIPES_API}/allingredients`, formData);
