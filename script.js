// const weight = document.getElementById("weight");
// const calories = document.getElementById("calories");
// const protein = document.getElementById("protein");
// const carbs = document.getElementById("carbs");
// const fats = document.getElementById("fats");
// const fibre = document.getElementById("fibre");

// const 


function macrosAlgorithm() {
    // getting input and storing into a variable
    const userWeight = parseFloat(document.getElementById("weight").value);
    const macrosPer100gProtein = parseFloat(document.getElementById("protein").value);
    const macrosPer100gFat = parseFloat(document.getElementById("fats").value);
    const macrosPer100gCarbs = parseFloat(document.getElementById("carbs").value);
    const macrosPer100gFibre = parseFloat(document.getElementById("fibre").value);

    // formula to process input
    const calculatedProtein = (userWeight / 100) * macrosPer100gProtein;
    const calculatedFat = (userWeight / 100) * macrosPer100gFat;
    const calculatedCarbs = (userWeight / 100) * macrosPer100gCarbs;
    const calculatedFibre = (userWeight / 100) * macrosPer100gFibre;


    // output
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = 
    `<p>Macros for ${userWeight}g of the food item</p> 
    <p>Protein: ${calculatedProtein}</p> 
    <p>Carbs: ${calculatedCarbs}g</p> 
    <p>Fats: ${calculatedFat}g</p>
    <p>Fibre: ${calculatedFibre}g`;
}