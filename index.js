// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = "someone"

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
    return customerName
}

function setBestCustomer(){
    return bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer(name){
    return leastFavoriteCustomer = name
}
