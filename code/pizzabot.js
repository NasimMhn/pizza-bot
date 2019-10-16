const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80
console.log(vegetarian,hawaiian, pepperoni )


// checks order total
const orderTotal = (orderQuantity, pizzaPrice) => { 
    return (orderQuantity * pizzaPrice)
} 

// checks cooking times
const cookingTime = (orderQuantity) => {
    let orderTime
    
    if (orderQuantity <= 2 ) 
       { orderTime = 10;
    } else if (orderQuantity >= 6){
        orderTime = 20;
    } else {
    orderTime = 15;
    } 
    return orderTime;
}

//  when checkorderName goes into the function trick the function to exit and go to validate var valid which checks if the pizzaName is on the menu.  

const checkOrderName = (orderName) =>{
    if (orderName==vegetarian || orderName==hawaiian || orderName == pepperoni) {
        return false
    } else {
        alert('choose the right one')
        return true
    }
}

// GREETING THE CUSTOMER

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian},${hawaiian} and ${pepperoni}`)


// valid makes the user put in a valid menu chocie to exit the while loop we return false in the checkOrderName
let valid = true
while (valid) {
    var orderName = prompt(`Enter the name of the pizza you want to order today! our options are Vegetarian,Hawaiian, or Pepperoni`) 
    valid = checkOrderName(orderName)
}

//
var orderQuantity = Number(prompt(`How many of ${orderName} would you like?`))


// Iteration 5 Checking that the Pizza is on the menu
let orderTime = cookingTime(orderQuantity)

//Iteration 4 - Finalize the order

let totalPrice = orderTotal(orderQuantity, pizzaPrice)
alert(`Great, I'll get started on your ${orderName}  right away, it will cost  ${totalPrice} kr and pizzas will take ${orderTime} minutes`) 




