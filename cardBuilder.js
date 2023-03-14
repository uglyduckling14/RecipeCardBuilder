function addNameRunner(){
    const nameRecipe = document.getElementById("name").value;
    add(nameRecipe,[]);
}
function delIngRunner(){
    const removeIng = document.getElementById("ingredients").value;
    del(removeIng,ingredientList);
}
function addIngRunner(){
    const addIng =document.getElementById("Add-Ingredients");
    add(addIng,ingredientList);
}
const recipeDict={name:"",ingredients:ingredientList,instructions:instructionList};
const nameButton = document.getElementById("Submit-Name").value;
// const ingredient = document.getElementById("ingredients");
// const exporting = document.getElementById("Export-Card");
//exporting.addEventListener("click",writeRecipeToFile);
//nameButton.addEventListener("click",console.log("x"));
// addIng.addEventListener("submit", add(ingredient.value));
// removeIng.addEventListener("submit",remove("x"));
const ingredientList=[];
const instructionList = [];
function add(info,list){
    console.log("x");
    const newDiv = document.createElement("div");
    const newText = document.createTextNode(info);
    newDiv.classList.add("flex-container");
    newDiv.appendChild(newText);
    document.body.appendChild(newDiv);
    list.push(info);
}
function del(info,list){
    // const ingredient = document.getElementById(info);
    const copyList = [];
    for(let i =0; i<list.length;i++){
        if(i!=list.indexOf(info)){
            copyList.push(list[i]);
        }
    }
    list=copyList;
}