//Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount){  //Declare the function to calculate the invoice total with the parameters of subtotal, taxRate, and discount)
    total = (subtotal + (subtotal*taxRate))- discount  //Calculate the total invoice using the parameters
    return total}  //Return the resulting total value to where it is called

//Call the function calculateInvoice, plug in the values for the parameters, and log the total to the console.
console.log(`Final Invoice Amount: $${calculateInvoice(100, 0.08,5).toFixed(2)}`)
console.log(`Final Invoice Amount: $${calculateInvoice(500, 0.1, 20).toFixed(2)}`)


//Task 2: Function Expression
function calculateHourlyWage(salary, hoursPerWeek){  //Declare the function to calculate the hourly wage with the parameters of salary and hours per week
    hourlyWage = salary / (hoursPerWeek * 52)  //Calculate the hourly wage using the parameters pluged into the formula
    return hourlyWage}  //Return the resulting hourly wage value to where it is called

//Call the function calculateHourlyWage, plug in the values into the parameters, and log the wage to the console
console.log(`Hourly Wage: $${calculateHourlyWage(52000,40).toFixed(2)}`)
console.log(`Hourly Wage: $${calculateHourlyWage(75000,35).toFixed(2)}`)