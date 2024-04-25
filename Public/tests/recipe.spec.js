const recipeService = new RecipeService();
const recipe = new Recipe(recipeService);

describe("Recipe App", () => {
  it("should add a Recipe", async () => {
    const newRecipe = {
      name: "Test Recipe",
      ingrident: ["sugar", "salt", "flour", "chicken", "seasoning", "potatoes"],
    };
    const addRecipeServiceSpy = spyOn(recipeService, "addRecipe");

    await recipe.addRecipe(newRecipe);

    expect(addRecipeServiceSpy).toHaveBeenCalled();
  });
});
