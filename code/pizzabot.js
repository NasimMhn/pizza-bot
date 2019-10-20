// functions
const gotoNext = () => {
    console.log("Next clicked")
    if (document.getElementById("first").style.display === "block") {
        document.getElementById("first").style.display = "none"
        document.getElementById("second").style.display = "block"
        console.log("1")
    }
    else if (document.getElementById("second").style.display === "block") {
        document.getElementById("second").style.display = "none"
        document.getElementById("third").style.display = "block"
        console.log("2")
    }
    else if (document.getElementById("third").style.display === "block") {
        document.getElementById("third").style.display = "none"
        document.getElementById("fourth").style.display = "block"
        document.getElementById("next_btn").style.display = "none"
        console.log("3")
    }
};

const gotoPrevious = () => {
    console.log("Back clicked")
    if (document.getElementById("second").style.display === "block") {
        document.getElementById("second").style.display = "none"
        document.getElementById("first").style.display = "block"
    } 
    else if (document.getElementById("third").style.display === "block") {
        document.getElementById("third").style.display = "none"
        document.getElementById("second").style.display = "block"
    }
    else if (document.getElementById("fourth").style.display === "block") {
        document.getElementById("fourth").style.display = "none"
        document.getElementById("third").style.display = "block"
        document.getElementById("next_btn").style.display = "inline-block"
    }
}

const getOrderName = () => {
    let orderName = document.querySelector('input[name="pizzaChoice"]:checked').value
    document.getElementById("pizzaChoice").innerHTML = orderName
}

const getConfirmation = () => {
    let orderName = document.querySelector('input[name="pizzaChoice"]:checked').value
    let orderQuantity = document.querySelector('input[name="numberOrdered"]:checked').value
    let totalPrice = orderQuantity * pizzaPrice
    let cookingTime = getCookingTime(orderQuantity)
    fourth.innerHTML = `<br><h3>Great, I'll get started on your ${orderName}  
                        right away,  it will cost  ${totalPrice} kr and will 
                        take ${cookingTime} minutes</h3>
                        <img src="assets/time.png">`
}

const getCookingTime = (orderQuantity) => {
    if (orderQuantity <= 2 ) { 
        return 10
    } else if (orderQuantity >= 6){
       return 20
    } else {
        return 15
    } 
}

// constants
const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
const pizzaPrice = 80

let next_btn = document.getElementById("next_btn")
let back_btn = document.getElementById("back_btn")

// Radio inputs
let radio_vegetarian = document.getElementById("vegetarian")
let radio_hawaiian = document.getElementById("hawaiian")
let radio_pepperoni = document.getElementById("pepperoni")

// Number of pizzas' buttons
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")
let btn10 = document.getElementById("btn10")


// Connecting functions to buttons
next_btn.addEventListener("click", gotoNext)
back_btn.addEventListener("click", gotoPrevious)
radio_vegetarian.addEventListener("click", getOrderName) 
radio_hawaiian.addEventListener("click", getOrderName) 
radio_pepperoni.addEventListener("click", getOrderName) 
btn1.addEventListener("click", getConfirmation)
btn2.addEventListener("click", getConfirmation)
btn3.addEventListener("click", getConfirmation)
btn4.addEventListener("click", getConfirmation)
btn5.addEventListener("click", getConfirmation)
btn6.addEventListener("click", getConfirmation)
btn7.addEventListener("click", getConfirmation)
btn8.addEventListener("click", getConfirmation)
btn9.addEventListener("click", getConfirmation)
btn10.addEventListener("click", getConfirmation)


// Starts when loading page by hiding all divs except "first"
document.getElementById("first").style.display = "block"
document.getElementById("second").style.display = "none"
document.getElementById("third").style.display = "none"
document.getElementById("fourth").style.display = "none"

let first = document.getElementById("first")
document.getElementById("first").innerHTML = `<h1>Hey! Happy to serve your pizza</h1>
                                              <h3>On our menu we have:</h3> 
                                              ${vegetarian}<br>
                                              ${hawaiian}<br>
                                              ${pepperoni}`
