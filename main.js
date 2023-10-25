
/*  =======================
          Food Objects
    ======================= */
const food = [
    {
        name: "coffee",
        lethal: 150, /* mL/kg */
    },
    {
        name: "water",
        lethal: 3000, /* mL/kg */
    },
    {
        name: "apples",
        lethal: 50, /* mg/kg */
    }
]
function getSelectedFood() {
    const foodElem = document.querySelector("#food-select")
    return foodElem.options[foodElem.selectedIndex].text
}

function getLethalDose(foodText) {
    let lethalReturn = 0;
    food.forEach((foodObj) => {
        if(foodObj.name === foodText.toLowerCase()) lethalReturn = foodObj.lethal
    })
    return lethalReturn
}

function getWeight(){
    const weightElem = document.querySelector("#weight")
    return weightElem.value
}

function calculate () {
    const weight = getWeight();
    const food = getSelectedFood();
    const lethal = getLethalDose(food);

    console.log(weight);
    console.log(food);
    console.log(lethal);
}

const calcBtn = document.querySelector("#calc-btn")
calcBtn.addEventListener("click",()=>calculate())



function calculateLethalDose(){

}