//submitting the form to add a recipe
const doAddRecipe = async (e) => {
  e.preventDefault();
  const name = document.getElementById("recipe").value;
  const ingridentElements = document.getElementsByClassName("ingrident");
  const ingredients = Array.from(ingridentElements).map(
    (element) => element.value
  );

  const res = await addRecipe({ name, ingredients });

  generateRecipeList();

  document.getElementById("myModal").style.display = "none";
  const parent = document.getElementById("ingridentLabel");
  //reset the ingridents fields when they close the modal
  parent.innerHTML = `<span>Ingrident(s):  (add more:   </span>
      <input onclick="addIngrident(event)" id="addingrident" type="button" value="+"/>
      <span>)</span><br>
      <input class="ingrident" type="text" placeholder="Ingrident" /> <br>`;
};

const makeGroceryList = async (e) => {
  e.preventDefault();

  //pulling the rows from the table where the box is checked
  const checkedRows = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  )
    .map((checkbox) => checkbox.closest("tr"))
    .map((row) => row.querySelector(".recipe-name").textContent);

  const names = checkedRows;
  //calling the function that makes the POST request
  const res = await getGroceryList({ names });
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
