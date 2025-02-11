//Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount){  //Declare the function to calculate the invoice total with the parameters of subtotal, taxRate, and discount)
    total = (subtotal + (subtotal*taxRate))- discount  //Calculate the total invoice using the parameters
    return total}  //Return the resulting total value to where it is called

//Call the function calculateInvoice, plug in the values for the parameters, and log the total to the console.
console.log(`Final Invoice Amount: $${calculateInvoice(100, 0.08,5).toFixed(2)}`)
console.log(`Final Invoice Amount: $${calculateInvoice(500, 0.1, 20).toFixed(2)}`)


//Task 2: Function Expression
function calculateHourlyWage(salary, hoursPerWeek){  //Declare the function to calculate the hourly wage with the parameters of salary and hours per week
    hourlyWage = salary / (hoursPerWeek * 52)  //Calculate the hourly wage using the parameters plugged into the formula
    return hourlyWage}  //Return the resulting hourly wage value to where it is called

//Call the function calculateHourlyWage, plug in the values into the parameters, and log the wage to the console
console.log(`Hourly Wage: $${calculateHourlyWage(52000,40).toFixed(2)}`)
console.log(`Hourly Wage: $${calculateHourlyWage(75000,35).toFixed(2)}`)


//Task 3: Arrow Function
const calculateLoyaltyDiscount = (amount, years) => {  //Write an arrow function that calculates loyalty discount with the parameters of amount and years
    let discountedPrice = 0;   //The discountedPrice will start at 0 to assign the calculated value to to return it when called
    if (years >= 5) discountedPrice = (amount -(amount * 0.15)) ;
    else if (years >= 3) discountedPrice = (amount - (amount * 0.10));
    else if (years < 3) discountedPrice = (amount - (amount * 0.05));
    else discountedPrice = amount;  //The function will run through how many years, and based on what range it falls into, it will run the discount formula to find the discounted Price
    return discountedPrice}

//The arrow function will return the discounted price value to the console based on the parameters it plugs in
console.log(`Discounted Price: $${calculateLoyaltyDiscount(100, 6).toFixed(2)}`)
console.log(`Discounted Price: $${calculateLoyaltyDiscount(200, 2).toFixed(2)}`)


//Task 4: Parameters and Arguments
function calculateShippingCost(weight, location, expedited = false){  //Write a function that calculates shipping costs with parameters of weight, location, and expedited = false
    let shippingCost = 0;  //Shipping cost will start with 0
    if (location === "USA") shippingCost = 5 + (weight * 0.5);
    else if (location === "Canada") shippingCost = 10 + (weight * 0.7);
    else;    //The first if else function will identify a location and run the cost based on what is plugged in when called
    if (expedited) shippingCost += 10;
    else;   //The second if else function will identify if it is expedited or not and add $10 if it is or do nothing if it is not
    return shippingCost;}

//Call the function to plug in the parameters and calculate the shipping cost
console.log(`Shipping Cost: $${calculateShippingCost(10, "USA", true).toFixed(2)}`)
console.log(`Shipping Cost: $${calculateShippingCost(5, "Canada", false).toFixed(2)}`)


//Task 5: Returning Values
function calculateLoanInterest(principal, rate, years){
    interest = principal * rate * years
    return interest}

console.log(`Total Interest: $${calculateLoanInterest(1000,0.05,3).toFixed(2)}`)
console.log(`Total Interest: $${calculateLoanInterest(5000,0.07,5).toFixed(2)}`)