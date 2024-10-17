//Goal: capture the user inputted order, and organize/count it so it reads, "3x Vannilla, "
//Create and connect html and js files.
//Create a prompt for user input
//Return the user input as a VARIABLE/ARRAY 

//

let inputOrder = prompt('Please enter your ice cream order.\nBe sure to use commas so we get your order right!', 'vanilla,vanilla,vanilla,strawberry,coffee,coffee'); //Prompt the user input and capture it in a variable
console.log("Ice cream order: ", inputOrder); //Log the order

console.log(typeof inputOrder); //Use typeof operator to reveal what data and data type the user input is


let orderArray1 = inputOrder.split(",");   //Use split string method to use the comma divisions and convert to an array 
console.log(orderArray1);     //Log the array.   (6) ['vanilla', 'vanilla', 'vanilla', 'strawberry', 'coffee', 'coffee']

console.log(typeof orderArray1); //Testing to be sure I got an array/object.

let orderArray2 = orderArray1.map(flavor => flavor.trim());   //Use map and trim methods to remove white space
console.log(orderArray2);   //Testing output 


let flavorCount = {};                                             //Create an empty object for starting a loop and for storing the count of flavors

orderArray2.forEach(flavor => {                                          // Loop through the array and count the occurrences of each flavor
    if (flavorCount[flavor]) {                                          // Check if the flavor already exists in the object
        flavorCount[flavor]++;                                          // If it exists, add 1 to the count
    } else {
        flavorCount[flavor] = 1;                                        // If it doesn't exist, set count to 1
    }
});

console.log("Flavor count: ", flavorCount);   
