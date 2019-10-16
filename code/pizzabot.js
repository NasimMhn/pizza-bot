const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80
console.log(vegetarian,hawaiian, pepperoni )

//Put your Javscript code here:



//TEST FOR TOTAL COST
// let totalCost = (orderQuantity, pizzaPrice) => { 
//     alert(`Great! I will get started on your ${orderName} right away, it will cost ${orderTotal} SEK`)
// } 
// totalCost = (orderQuantity * pizzaPrice)


//GREETING THE CUSTOMER
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian},${hawaiian} and ${pepperoni}`)
var orderName = prompt("Enter the name of the pizza you want to order today vegetarian,hawaiian,pepperoni") 

//ADD A CONDITIONAL TESTING IF THE ORDER IS TRUE
let checkName = (orderName) =>{
    if (orderName==vegetarian || orderName==hawaiian || orderName == vegetarian){
        return true
        }else {
            alert('choose the right one')
            return false 
        }
        }
var orderQuantity = prompt(`How many of ${orderName} do you want?`) 
// var orderTotal = totalCost(orderQuantity, pizzaPrice)





