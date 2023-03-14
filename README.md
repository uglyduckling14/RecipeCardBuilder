# Assignment 4: Recipe Card Builder

## Introduction:
I will create an application that allows the user to create a recipe card.
## Requirements:
The user should be able to:
* Add an ingredient
* Remove an ingredient
* Add an instruction
* Remove an instruction
* Export the recipe to the recipe card(writeRecipeToFile.js)
* Allow user to perform all these operations in an accessible way
* Reset all fields
## Pseudocode:

### RecipeCardBuilder.html:
<html>
    <head>Recipe Card Builder</head>
    <body>
        <h1 id = "Recipe">Recipe</h1>
        <form id = "ingredientBuilder" action = "cardBuilder.js">
            <input type = "text" id = "name">
            <input type = "text" id = "ingredients">
            <input type = "submit" id = "Add-Ingredients" value = "Add">
            <input type = "submit" id = "Remove-Ingredients" value = "Remove">
        </form>
        <form id = "instructionBuilder" action = "cardBuilder.js">
            <input type = "text" id = "instructions">
            <input type = "submit" id = "Add-Instructions" value = "Add">
            <input type = "submit" id = "Remove-Instructions" value = "Remove">
        </form>
        <input type = "submit" id = "Export-Card" value = "Export">
        <input type = "submit" id = "Clear" value = "Clear">
    </body>
</html>
### cardBuilder.js:
const name = document.getElementById("name");
const ingredient = document.getElementById("ingredients");
const addIng = addButton;
const removeIng = removeButton;
const export = Export-Card;
export.addEvenListener("click",writeRecipeToFile);
addIng.addEventListener("click",addIngredient(ingredient));
removeIng.addEventListener("click",removeIngredient(ingredient));
const ingredientList;
function add(info){
    const ingredient = document.createElement("div");
    ingredient.id = info;
    document.body.appendChild(ingredient);
    add to ingredientList/instructionList;
}
function remove(info){
    const ingredient = document.getElementById(info);
    ingredient.remove();
    remove from ingredientList/instructionsList;
}
### style.css
.body{
    black border
    white inside
    red bubbles with white words inside for ingredients
    side panel with Instructions as a list starting with 1., 2., 3. etc.
    pink add and remove buttons
    brown export button

}
### writeRecipeToFile.js: