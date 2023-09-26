
class Food {//create the class with the constructor
    constructor(name, carbs, fat, protein) {
        this.name = name;
        this.carbs = carbs;
        this.fat = fat;
        this.protein = protein;
    }
}

const Foods = [];// Empty array to store food objects
const submit_Btn = document.getElementById("form_area");
const calculate_highestBtn = document.getElementById("calculate_highest");
const info_area = document.getElementById("info_area");

submit_Btn.addEventListener("submit", function (event) {//add addEventListener for the submit button
    event.preventDefault();

    const food_name = document.getElementById("food_name").value;//get the food value
    const carbs = document.getElementById("carbs").value;//get the carb value
    const fat = document.getElementById("fat").value;//get the fat value
    const protein = document.getElementById("protein").value;//get the protein value

    
    const food = new Food(food_name, carbs, fat, protein);// Create a Food object
    Foods.push(food);// Push the object into the foods array

    form_area.reset();// Reset form

    console.log(Foods)
    console.log(typeof Foods[0])
    console.log(Foods.length)
});

calculate_highestBtn.addEventListener("click", function (event) {//add addEventListener for the calculate button
    event.preventDefault();
    if(Foods.length > 0){//to check if the array is still empty

        let highest_Carb = Foods[0];//create varible to store the object highest_Carb
        let highest_Fat = Foods[0];//create varible to store the object highest_Fat
        let highest_Protein = Foods[0];//create varible to store the object highest_Protein

        for (const food of Foods) {// Calculate the objects with highest values
            if (food.carbs > highest_Carb.carbs) {
                highest_Carb = food;
            }
            if (food.fat > highest_Fat.fat) {
                highest_Fat = food;
            }
            if (food.protein > highest_Protein.protein) {
                highest_Protein = food;
            }
        }

        info_area.innerHTML = `Among (${Foods.map(food => food.name).join(", ")}) <br>`
                            + `${highest_Carb.name} has the highest Carb <br>`
                            + `${highest_Fat.name} has the highest Fat <br>`
                            + `${highest_Protein.name} has the highest Protein <br>`;//List the food with highest values
    }else{
        window.alert("No food item stored yet.")
    }
});