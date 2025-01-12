// This file will contain the primary logic for the currency conversion program.
// To run the program use the `node` command followed by the name of this file.
// ie. `node currency-converter.js`.

// This file has been split up into several sections, each of which focuses on a
// portion of the program. Completing each of these sections in order should result
// in a functional, testable program. However, please free to approach the problem
// differently. There are many paths and approaches that result in a perfectly
// valid finished product.

// --------------------------------------------------
// Step 1: Capture user input
// --------------------------------------------------
// In this step we will capture the command line  information supplied by the user.

// We will store each piece of information in a dedicated variable for later use.
// node currency.js 50 cad(from) usd(to)
// Get the arguments
const arguments = process.argv.slice(2) 
//Extract value(s) from arguments array
const amount = parseInt(arguments[0]) // Convert arg to Int
const fromCurr = arguments[1]
const toCurr = arguments[2]

console.log(`Amount: ${amount}, From: ${fromCurr}, To: ${toCurr}`)
// --------------------------------------------------
// Step 2: Validate user input
// --------------------------------------------------
// Next we will ensure that the user has provided all of the require information.

// If any of the required information is missing, display a meaningful message
// and exit the program.
if(!amount){
    return console.error(`Please provide an amount to convert. Recevied ${amount}`)
} 
if(!fromCurr){
    return console.error(`Please provide a currency to convert from.`)
} 
if(!toCurr){
    return console.error(`Please provide a currency to convert to.`)
} 


// --------------------------------------------------
// Step 3: Define currency conversion rates
// --------------------------------------------------
// Here we will define which currency conversions are supported, as well as the
// rates between each currency. We will capture this information as an object
// and store it in dedicated varaible for later use.

// We will use the official currency abbreviation for each currency (eg. USD, CAD, etc.).

// The conversion rates do not have to be accurate, athough this resource contains
// up-to-date rate information: https://www.xe.com/

const rates = {
    // From
    'USD': {
        // To
        'CAD': 1.25
    },
    'CAD': {
        'USD': 0.8
    },
}


// --------------------------------------------------
// Step 4: Ensure that a conversion rate exists
// --------------------------------------------------
// Since it is possible for the user to supply invalid or unsupported currencies,
// we must check for the presence of a rate before attempting to convert.

// If the user supplies an invalid initial or target currency, display a meaningful
// warning message and exit the program.

if(!(fromCurr in rates) || !(toCurr in rates)){
    return console.error(`Please provide a valid currency. Accepted currencies: ${Object.keys(rates)}`)
}
const toCurrRate = rates[fromCurr][toCurr]
console.log(`Current rates for ${fromCurr} TO ${toCurr}: ${toCurrRate}`)


// --------------------------------------------------
// Step 5: Perform conversion
// --------------------------------------------------
// At this point we've confirmed that the user has supplied all of the necessary
// information, and that a rate exists for each of the currencies.

// Now we will compute the rate, apply it to the amount, and capture the result.

console.log(`Your converted amount is ${amount*toCurrRate} ${toCurr}`)

// --------------------------------------------------
// Step 6: Display results
// --------------------------------------------------
// Finally we will display the result as part of a meaningful message.

// This message should also include the original amount and currency information
// supplied by the user.
