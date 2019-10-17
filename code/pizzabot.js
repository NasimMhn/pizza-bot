const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
const pizzaPrice = 80



//Iteration2 - GREETING THE CUSTOMER 
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian},${hawaiian} and ${pepperoni}`)


//Iteration 5 - checking that the pizza is on the menu    //Iteration6 - part1
//when checkorderName goes into the function trick the function to exit and go to validate var valid which checks if the pizzaName is on the menu.  
const checkOrderName = (orderName) =>{
    if (orderName==vegetarian || orderName==hawaiian || orderName == pepperoni) {
        return false
    } else {
        alert('choose the right one')
        return true
    }
}
// valid makes the user put in a valid menu chocie to exit the while loop we return false in the checkOrderName.
    let valid = true
    while (valid) {
    //Iteration3 - Ask the customer 
    var orderName = prompt(`Enter the name of the pizza you want to order today!`) 
    
    valid = checkOrderName(orderName)
}


//Iteration3 - Ask the customer 
let orderQuantity = prompt(`How many of ${orderName} would you like?`)


//Iteration4 - Finalize the order   //Itration6 - part2
const totalCost = (orderQuantity) => { 
    return orderQuantity * pizzaPrice
} 

let totalPrice = totalCost(orderQuantity)



//Iteration5 - show cooking times    //Iteration6 - part3 
const cookingTime = (orderQuantity) => {
    
    if (orderQuantity <= 2 ) { 
        return 10
    } else if (orderQuantity >= 6){
       return 20
    } else {
        return 15
   
    } 
}

let orderTime = cookingTime(orderQuantity)


//Final message
alert(`Great, I'll get started on your ${orderName}  right away, it will cost  ${totalPrice} kr and pizzas will take ${orderTime} minutes`) 




