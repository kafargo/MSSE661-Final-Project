//submitting the form to add a recipe
class Recipe {
  recipeService;

  constructor(recipeService) {
    this.recipeService = recipeService;
  }

  addRecipe = async (newRecipe) => {
    try {
      const { name, ingredients } = newRecipe;
      await this.recipeService.addRecipe({ name, ingredients });
    } catch (err) {
      console.log(err);
      alert("Unable to add recipe. Please try again later.");
    }
  };

  _addRecipeEventHandler = () => {
    const name = document.getElementById("recipe").value;
    const ingridentElements = document.getElementsByClassName("ingrident");
    const ingredients = Array.from(ingridentElements).map(
      (element) => element.value
    );

    //validation
    if (!name) {
      alert("Please enter a Recipe.");
      return;
    }

    const recipe = { name, ingredients };

    this.addRecipe(recipe);
    this._closeModal();

    //calling the recipe list again to get the most updated list after adding a new one.
    generateRecipeList();
  };

  _closeModal = () => {
    document.getElementById("myModal").style.display = "none";
    const parent = document.getElementById("ingridentLabel");
    //reset the ingridents fields when they close the modal
    parent.innerHTML = `<span>Ingrident(s):  (add more:   </span>
        <input onclick="addIngrident(event)" id="addingrident" type="button" value="+"/>
        <span>)</span><br>
        <input class="ingrident" type="text" placeholder="Ingrident" /> <br>`;
  };

  //the old functions go here:

  makeGroceryList = async (e) => {
    e.preventDefault();

    const recipeService = new RecipeService();

    //pulling the rows from the table where the box is checked
    const checkedRows = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    )
      .map((checkbox) => checkbox.closest("tr"))
      .map((row) => row.querySelector(".recipe-name").textContent);

    const names = checkedRows;

    //throw an alert and exit if nothing is selected
    if (names.length === 0) {
      alert("Select a few Recipes First!");
      return;
    }

    //calling the function that makes the POST request
    const res = await recipeService.getGroceryList({ names });
    console.log(res);

    //combines all the ingredients into one array
    const allIngredients = res.reduce((acc, recipe) => {
      return acc.concat(recipe.ingredients);
    }, []);

    console.log("All ingredients:", allIngredients);

    //creates the list of ingredients in the grocery list div
    const groceryListDiv = document.getElementById("grocery-list");
    const groceryList = document.createElement("ul");
    groceryList.className = "grocery-list";

    allIngredients.forEach((ingredient) => {
      const listItem = document.createElement("li");
      listItem.textContent = ingredient;
      groceryList.appendChild(listItem);
    });

    groceryListDiv.innerHTML = "";
    groceryListDiv.appendChild(groceryList);
  };
}
