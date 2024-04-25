// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
const openModal = (e) => {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  const parent = document.getElementById("ingridentLabel");
  //reset the ingridents fields when they close the modal
  parent.innerHTML = `<span>Ingrident(s):  (add more:   </span>
    <input onclick="addIngrident(event)" id="addingrident" type="button" value="+"/>
    <span>)</span><br>
    <input class="ingrident" type="text" placeholder="Ingrident" /> <br>`;
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//add a new input field for ingridents
const addIngrident = (e) => {
  const parent = document.getElementById("ingridentLabel");
  const newIngredientInput = document.createElement("input");
  newIngredientInput.type = "text";
  newIngredientInput.placeholder = "Ingrident";
  newIngredientInput.className = "ingrident";
  parent.appendChild(newIngredientInput);
  parent.appendChild(document.createElement("br"));
};
