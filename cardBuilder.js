function writeRecipeToFile(recipe) {
    // taking from
    function download(text, filename){
      var blob = new Blob([text], {type: "text/html"});
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    }
    const output = `
      <html>
        <head>
          <style>
            :root {
              font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
            }
            h1 {
              background-color: rgb(15,35,57);
              color: white;
              padding: 16px;
              border-top-left-radius: 8px;
              border-top-right-radius: 8px;
            }
            .b-main {
              width: 600px;
              border-radius: 8px;
              box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
            }
            .b-content {
              padding: 16px;
              display: flex;
              gap: 16px;
            }
            .b-ingredients {
              flex: 1
            }
            .b-instructions {
              flex: 1'
            }
          </style>
        </head>
        <body>
          <main class="b-main">
            <h1>${recipe.title}</h1>
            <div class="b-content">
              <div class="b-ingredients">
                <strong>Ingredients</strong>
                <hr>
                ${
                  recipe.ingredients.map(i => (
                    `
                      <div>${i}</div>
                    `
                  )).join('')
                }
              </div>
              <div class="instructions">
                <strong>Instructions</strong>
                <hr>
                ${
                  recipe.instructions.map((i, index) => (
                    `
                      <div>${index+1}: ${i}</div>
                    `
                  )).join('')
                }
              </div>
            </div>
          </main>
        </body>
      </html>
    `;
    download(output, `recipe-card.html`);
}
function addNameRunner(){
    nameRecipe = document.getElementById("Name-Recipe");
    newName = document.createElement("h2");
    newName.setAttribute("id","Recipe-Name");
    newName.value = nameRecipe.value;
    document.getElementById("Submit-Name").style.visibility="hidden";
    recipeDict.title=nameRecipe.value;
    nameRecipe.replaceWith(newName);
    console.log(newName);
    newName.style.color="darkbrown";
    newName.style.backgroundColor="hotpink";
    newName.style.borderRadius="25px";
    newName.innerHTML=nameRecipe.value;
}
function delIngRunner(){
    const removeIng = document.getElementById("ingredients");
    console.log(removeIng.value);
    del(removeIng,ingredientList);
}
function addIngRunner(){
    const addIng =document.getElementById("ingredients");
    const newDiv=add(document.getElementById("ingredients"),addIng,ingredientList);
    newDiv.style.border="3px solid darkred ";
    newDiv.style.width="fit-content";
    newDiv.style.fontSize="20px";
    newDiv.style.display="flex";
    newDiv.style.color="black";
    newDiv.style.flexDirection="column";
    addIng.value="";

}
function addInsRunner(){
    const addIns =document.getElementById("instructions");
    const newDiv=add(document.getElementById("instructionBuilder"),addIns,instructionList);
    newDiv.style.border="3px solid rgb(6, 119, 139) ";
    newDiv.style.width="fit-content";
    newDiv.style.fontSize="20px";
    newDiv.style.color="black";
    newDiv.style.display="flex";
    newDiv.style.flexDirection="column";
    addIns.value="";
}
function delInsRunner(){
    const removeIns = document.getElementById("instructions");
    del(removeIns,instructionList);
}
function exportCardRunner(){
    writeRecipeToFile(recipeDict);
}
function clearRunner(){
    console.log(nameRecipe);
    document.getElementById("Submit-Name").style.visibility="visible";
    const oldName = document.getElementById("Recipe-Name");
    nameRecipe.value="";
    oldName.replaceWith(nameRecipe);
    const remover = document.getElementsByTagName("p");
    let i = remover.length;
    while(i!=-1){
      const element = remover[i];
      element.remove();
      i--;
    }
    // ingredientList.splice(0,ingredientList.length);
    // instructionList.splice(0,instructionList.length);
    document.getElementById("Name-Recipe").value="";
    recipeDict.title="";
    recipeDict={title:"",ingredients:ingredientList,instructions:instructionList}
}
const ingredientList=[];
const instructionList = [];
let nameRecipe="";
let newName="";
const recipeDict={title:nameRecipe,ingredients:ingredientList,instructions:instructionList};
const nameButton = document.getElementById("Submit-Name").value;
// const exporting = document.getElementById("Export-Card");
//exporting.addEventListener("click",writeRecipeToFile);
function add(parent1,info,list){
    const newDiv = document.createElement("p");
    const newText = document.createTextNode(info.value);
    newDiv.setAttribute("id",info.value+"1");
    newDiv.classList.add("flex-container");
    newDiv.appendChild(newText);
    parent1.appendChild(newDiv);
    list.push(info.value);
    console.log(newDiv.parentElement);
    return newDiv;
}
function del(info,list){
    const ingredient = document.getElementById(info.value+"1");
    console.log(ingredient);
    const copyList = [];
    for(let i =0; i<list.length;i++){
        if(i!=list.indexOf(info.value)){
            copyList.push(list[i]);
        }
    }
    ingredient.remove();
    list=copyList;
}