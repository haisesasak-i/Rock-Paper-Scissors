# Rock-Paper-Scissors


A simple console-based Rock Paper Scissors game built with JavaScript as part of **The Odin Project** Foundations curriculum.

## Features

* Play **5 rounds** against the computer.
* Computer chooses its move randomly.
* User selects a move through a prompt.
* Round-by-round score tracking.
* Final game result displayed in the console.
* Code organized into small helper functions for readability and maintainability.

## How to Play

1. Open `index.html` in your browser.
2. When prompted, choose your weapon:

   * `1` - Rock
   * `2` - Paper
   * `3` - Scissors
3. Play all five rounds.
4. Check the browser console to view:

   * Both players' choices
   * Round results
   * Updated scores
   * Final winner

## Project Structure

* `getComputerChoice()` – Generates a random computer choice.
* `getHumanChoice()` – Gets the player's choice through a prompt.
* `playRound()` – Determines the winner of a single round.
* `playGame()` – Controls the five-round game loop and scorekeeping.
* Helper functions are used to print choices, scores, and the final game result.

## Technologies Used

* HTML5
* JavaScript (ES6)

## Future Improvements

* Add a graphical user interface (GUI).
* Display the score directly on the webpage instead of only in the console.
* Style the game using CSS.

## What I Learned

Through this project, I practiced:

* Writing reusable functions.
* Using loops and conditional statements.
* Returning values from functions.
* Organizing code with helper functions.
* Managing game state and score tracking.
* Refactoring code for better structure and readability.
