const doAddRecipe = async (e) => {
  e.preventDefault();
  recipe._addRecipeEventHandler();
};

const makeGroceryList = async (e) => {
  e.preventDefault();
  recipe.makeGroceryList(e);
};
