alert("What is your name?")
// -------------------------------------------------------------------------------
// Part 1 - Declaring and calling functions
// -------------------------------------------------------------------------------

// ---- A ------

// 1. Create a new function called catTalk.
// 2. Inside the function, log "Meow" to the console.
// 3. Call the catTalk function.
// 4. Check your console to make sure "Meow" is displayed.

// 
// Part 1, A --- WRITE YOUR CODE HERE
// 
// declaring a function, setting it up
function catTalk(){
	console.log("Meow")
	console.log("Meow Meow Meow")
}
//call on the function, running it
catTalk()

// ---- BONUS ------
// 1. Declare a variable score and give it the value 76
// 2. Write a function passedLevel.
// 3. Inside the function:
  // If score is greater than or equal to 70
    // Log "Level passed" to the console
  // otherwise
    // Log "Try again" to the console.
// 5. Call the passedLevel function.


// 
// Part 1, BONUS - WRITE YOUR CODE HERE
// 



// -------------------------------------------------------------------------------
// Part 2 - Arguments and Parameters
// -------------------------------------------------------------------------------

// ---- A ------

// Uncomment and look at the below function. 
// Predict what will happen when the function is called.
// Check your console to confirm

 function logPrice(title, listPrice, taxRate) {
    var salesTax = listPrice * taxRate;
     var total = listPrice + salesTax;
     console.log(title + ' costs $' + total + '.');
 }

logPrice('Part 2A: Catcher and the Rye', 15, .10);



// ---- B ------
// 1. Create a function named logVillain.
// 2. It should accept two parameters, villain and movie.
// 3. The function should take the parameters and log the result to the console saying "{villain} is the meanest character in {movie}."
// 4. Now call that function, passing in Ursula and The Little Mermaid as the arguments.
// Check the console to make sure the correct sentence is displayed!

// 
// Part 2, B - WRITE YOUR CODE HERE
// 
function logVillain(villain,movie){
	console.log(villain + " is the meanest character in " +movie)
}
logVillain("Cruela","101 Dalmatians")
logVillain("Ursula","The Little Mermaid")



// ---- C ------
// 1. Uncomment the code for part C below.  
// 2. Write a function saveMattDamon.
// 3. Use it to group together any repeated code. 
// 4. Call the function three times - once for each movie.
// Hint: when you call the function you'll need to provide the movie name and cost.

 var movie = "Saving Private Ryan";
 var cost = 100;
// if (cost < 1000) {
//   console.log(movie + " director says LET'S RESCUE MATT DAMON!");
// } else {
//   console.log(movie + " director says FORGET MATT DAMON!");
// }

 var movie = "Interstellar";
 var cost = 2000;
// if (cost < 1000) {
//   console.log(movie + " director says LET'S RESCUE MATT DAMON!");
// } else {
//   console.log(movie + " director says FORGET MATT DAMON!");
// }

 var movie = "The Martian";
var cost = 700;
// if (cost < 1000) {
//   console.log(movie + " director says LET'S RESCUE MATT DAMON!");
// } else {
//   console.log(movie + " director says FORGET MATT DAMON!");
// }

// 
// Part 2, C - WRITE YOUR CODE HERE
function saveMattDamon(movie,cost){
	if (cost < 1000) {
  	console.log(movie + " director says LET'S RESCUE MATT DAMON!");
} else {
   console.log(movie + " director says FORGET MATT DAMON!");
}
}
saveMattDamon("Saving Private Ryan",100)
saveMattDamon("Interstellar",2000)
saveMattDamon("The Martian",700)



// ---- BONUS ------

// Combine these 2 functions into one function that takes 3 toppings as parameters and makes a pizza with them

// function makeAPizza() {
//   var topping1 = 'pepperoni';
//   var topping2 = 'cheese';
//   var topping3 = 'mushrooms'

//   console.log('Part 2 Bonus: Coming right up! A pizza with ' + topping1 + ', ' + topping2 + ' and ' + topping3);
// }
// makeAPizza();

// function makeAVeggiePizza() {
//   var topping1 = 'peppers';
//   var topping2 = 'onions';
//   var topping3 = 'mushrooms'

//   console.log('Part 2 Bonus: Coming right up! A pizza with ' + topping1 + ', ' + topping2 + ' and ' + topping3);
// }
// makeAVeggiePizza();

// 
// Part 2, BONUS - WRITE YOUR CODE HERE
//



// -------------------------------------------------------------------------------
// Part 3 - Bonus Challenges
// -------------------------------------------------------------------------------

// ---- 1 ------

// Write a JavaScript function called `transmogrifier.` 
// This function should accept three arguments, which you can assume will be numbers. 
// Your function should return the "transmogrified" result.
// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2, which will evaluate to 225. 
//Use your function to find the following answers:

  // transmogrifier(5, 4, 3)
  // transmogrifier(13, 12, 5)
  // transmogrifier(42, 13, 7)
