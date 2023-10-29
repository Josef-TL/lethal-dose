
/*  =======================
          Food Objects
    ======================= */
const food = [
    {
        name: "coffee",
        lethal: 192, /* mL/kg */
        measure: "L",
        ratio: 0.004,/* how many mL to a cup?*/
        container: "mugs of coffee"
    },
    {
        name: "cola",
        lethal: 192, /* mL/kg */
        measure: "L",
        ratio: 0.5,/* how many mL to a bottle?*/
        container: "bottles of cola"
    },
    {
        name: "water",
        lethal: 90000,
        measure: "L",/* mL/kg */
        ratio: 0.004,
        container: "cups of water"
    },
    {
        name: "apple",
        lethal: 200, /* mg/kg */
        measure: "g",
        ratio: 1/100000,
        container: "apples"
    },
    {
        name: "banana",
        lethal: 33333333, /* mg/kg */
        measure: "g",
        ratio: 0.00001,
        container: "bananas"
    }

]
const calcBtn = document.querySelector("#calc-btn")
const middleWrapper = document.querySelector(".middle-wrapper")


let lethalDoseResult = 0;

/*  =======================
          Functions
    ======================= */
function getSelectedFood() {
    let selectedFood = {}
    const foodElem = document.querySelector("#food-select")
    const foodText = foodElem.options[foodElem.selectedIndex].value

    food.forEach((foodObj) => {
        if(foodObj.name === foodText.toLowerCase()) selectedFood = foodObj
    })

    return selectedFood
}

function getWeight(){
    const weightElem = document.querySelector("#weight")
    if (weightElem.value === "") return weightElem.placeholder;
    return weightElem.value
}

function calcCssTransform(){

    calcBtn.innerHTML = "<span id=\"btn-loader\"></span>"
    calcBtn.disabled = true

    setTimeout(()=>{
        calcBtn.innerHTML = "Try again!"
        calcBtn.disabled = false
        middleWrapper.classList.replace("middle-wrapper","middle-wrapper-active")
        insertCalcResults();
    }, 2000);
}

function insertCalcResults(){
    const choiceSpan = document.querySelectorAll(".food-choice")
    const lethalSpan = document.querySelectorAll("#food-lethal")
    const containerSpan = document.querySelectorAll("#food-container")

    const weight = getWeight();
    const food = getSelectedFood();
    const foodDose = weight*food.lethal


    choiceSpan.forEach((elem)=>elem.innerText = food.name)
    lethalSpan.forEach((elem)=> elem.innerText = Math.round(((foodDose/1000)*100)/100) + " " + food.measure)
    containerSpan.forEach((elem)=>elem.innerText = Math.ceil(food.ratio*foodDose) + " " + food.container)

}





calcBtn.onclick = ()=>{ calcCssTransform()};
