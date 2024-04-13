
(async () => {
  const recipes = await getRecipes();
  console.log(recipes);

  if (recipes.length) {
    //this is where its looking to create the table
    const div = document.getElementById("recipes");
    const loadingDiv = div.childNodes[1];

    const table = document.createElement("table");
    table.setAttribute("id", "recipetable");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    // Create table headers by creating an array of the headers and making the headers by looping through the array
    const headers = ["Check", "Recipe", "Ingredients"];
    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    recipes.forEach((recipe) => {
      const row = document.createElement("tr");

      // Create checkbox cell
      const checkboxCell = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkboxCell.appendChild(checkbox);
      row.appendChild(checkboxCell);

      // Create recipe name cell
      const recipeCell = document.createElement("td");
      recipeCell.textContent = recipe.name;
      row.appendChild(recipeCell);

      // Create ingredients cell
      const ingredientsCell = document.createElement("td");
      ingredientsCell.textContent = recipe.ingredients.join(", ");
      row.appendChild(ingredientsCell);

      tbody.appendChild(row);
    });

    table.appendChild(tbody);

    div.replaceChild(table, loadingDiv);
  }
})();
