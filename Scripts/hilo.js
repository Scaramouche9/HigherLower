/*
Assgingment:
1. Prompt the user for a max number
  -prompts the user for a maximum number
  -validates the user input and does not allow invalid entries (negative numbers, 0, or non-numbers)
  -re-prompts the user if an invalid entry is provided
  -if the user provides a decimal number, the application rounds it
  -application selects a random number between 1 and N (where N is the user-provided maximum number)

2. Validate the guess as an in-range number 
  -if the guess is not a number, display a message: "That is not a number!"
  -if the guess is out of range (1 to N), display a message: "That number is not in range, try again."

3. Track the guesses 
  -application correctly initializes an array and uses the push() function to add the guesses
  -application correctly formats the win message to include the comma-delimited guesses as part of the output
  -application uses the length property and does not use an extra variable to count the number of guesses

4. Prevent duplicate guesses
  -application correctly checks the array for a guess first using any means (loop, find(), etc.) before adding a guess to the array
  -application correctly displays a message that a number has already been guessed
*/

// Prompt user to enter a max number
  let valid_input = false;
  let max, input;

// Initialize array to log all user's guesses
let guesses = [];

// Use IIFE to immediately validate user's max number
(function getMax() {
  while (!valid_input) {
    input = window.prompt("Chose a positive number to be the max value:"); // prompt user
    max = Number(input); // ensure entry is a number
    if (!isNaN(max) && max > 0) { // accept entry if it is a number above zero
      valid_input = true;
    }
  }
})(); 

  // Round entry to nearest whole number
  max = Math.round(max);

  // REMOVE LATER
  console.log(max);

  // Change instructions to use user's entry as max number
  let instruct = document.getElementById("instruct");
  instruct.innerHTML = `Guess a number between 1 and ${max}...`;

  // Generate random number between 1 and user-picked max
  let answer = Math.floor(Math.random() * max) + 1;

  // REMOVE LATER
  console.log(answer);

  function record(guess) {
  
    // Add the guess to the end of the array 
    guesses.push(guess);

    // REMOVE LATER
    console.log(guesses);
  }

  // Manipulate the response message based on comparing the guess and the answer
  let message = document.getElementById("message");

  // Compare the random number with the guess
  function compare() {

  // Initialize variable for user's individual guesses
    let guess = Number(document.getElementById("guess").value);
    
  // REMOVE LATER
  console.log(guess);

  if (guess == guesses.values) {
    message.innerHTML = `You already guessed that! Don't worry, we won't count that one.`;
  } else if (guess == answer) {
    record(guess);
    message.innerHTML = `You got it! It took you ${guesses.length} tries and your guesses were ${guesses.toString()}.`;
  } else if (guess < answer && guess > 0) {
    record(guess);
    message.innerHTML = "No, try a higher number."
  } else if (guess > answer && guess < max) {
    record(guess);
    message.innerHTML = "No, try a lower number."
  } else if (guess < 0 || guess > max) {
    message.innerHTML = "That number is not in range, try again."
  } else if (guess = isNaN) {
    message.innerHTML = "That is not a number!"
  }
}

