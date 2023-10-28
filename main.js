
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
        lethal: 300, /* mL/kg */
    },
    {
        name: "apples",
        lethal: 50, /* mg/kg */
    }
]
const calcBtn = document.querySelector("#calc-btn")

let lethalDoseResult = 0;

/*  =======================
          Functions
    ======================= */
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
    if (typeof weightElem.value === "string") return weightElem.placeholder;
    return weightElem.value
}

function calculate () {
    const weight = getWeight();
    const food = getSelectedFood();
    const lethal = getLethalDose(food);

    lethalDoseResult = lethal*weight;
}

function calcCssTransform(){
    calcBtn.innerHTML = "<span id=\"btn-loader\"></span>"
    setTimeout(()=>{
        calcBtn.innerHTML = "Result"
    }, 2000);
}



calcBtn.onclick = ()=>{calculate(); calcCssTransform()};
