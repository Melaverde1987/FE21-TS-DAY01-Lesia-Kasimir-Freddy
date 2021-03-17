// create an array that alows only numbers
var ourArrayA = [];
// fill the array with numbers from 1 to 10 with a loop that uses the push() function
for (var k = 1; k < 11; k++) {
    ourArrayA.push(k);
}
// multiplying 1 to 10 with 1 to 10
for (var i = 0; i < ourArrayA.length; i++) {
    // create a variable that takes every loop the value of the index
    var a = ourArrayA[i];
    // a is chosen and before it loops to another value we step in the array again
    // a should be multiplied with every value out of the array
    for (var j = 0; j < ourArrayA.length; j++) {
        var b = ourArrayA[j];
        var result = a * b;
        // print the result to the console in a table 
        console.table(a + " X " + b + " = " + result);
    }
    // make a line break after every table
    console.table('\n');
}
