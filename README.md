# Rock-Paper-Scissors

A browser-based Rock Paper Scissors game built with HTML, CSS, and JavaScript as part of **The Odin Project** Foundations curriculum. Originally built as a console-based game, then rebuilt from scratch with a full graphical interface.

## Features

* Play against the computer — first to **5 points** wins.
* Fully clickable GUI — choose Rock, Paper, or Scissors with a single click (no prompts).
* Live scoreboard showing player score, computer score, and current round.
* Real-time display of both players' choices each round.
* Round and final game results shown directly on the page, styled by outcome (win / lose / draw).
* Game locks once a winner is decided, with a message prompting a refresh to play again.
* Built using event delegation — a single listener on the button container handles all move selections.

## How to Play

1. Open `index.html` in your browser.
2. Click **Rock**, **Paper**, or **Scissors** to make your move.
3. The computer's choice and the round result appear instantly.
4. Keep playing until either player reaches 5 points.
5. Refresh the page to start a new game.

## Project Structure

**Game logic**
* `getComputerChoice()` – Generates a random computer move.
* `getChoiceThroughNumber()` – Maps a number (1–3) to a move name.
* `playRound()` – Determines the winner of a single round.
* `playGame()` – Orchestrates a round: gets the computer's move, evaluates the result, updates the UI, and checks for game end.
* `endGameOrNot()` – Checks if either score has reached 5.
* `printGameResult()` – Announces the overall winner once the game ends.

**UI / DOM**
* Event delegation on `.buttonsContainer` handles all move-button clicks.
* `printChoices()` – Displays each player's move for the round.
* `printRoundScores()` / `updateScoreAndRound()` – Updates score and round counters on the page.
* `displayResult()` / `toggleClasses()` – Displays result messages and applies win/lose/draw styling.

**Legacy**
* `getHumanChoice()` – The original prompt-based input method from the console version, kept in the code as a reference in case anyone wants to build a console version.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

## Assets

* Rock, paper, and scissors icons in `/images` are AI-generated.

## Future Improvements

* Add a "Play Again" button instead of requiring a page refresh.
* Add simple animations/transitions for move reveals and score updates.
* Make the layout responsive for smaller screens.
* Allow the winning score target (currently 5) to be configurable.

## What I Learned

Through this project, I practiced:

* DOM manipulation and updating the UI in response to game state.
* Event delegation to handle clicks across multiple child elements efficiently.
* Writing reusable, single-responsibility functions.
* Managing game state and score tracking across rounds.
* Refactoring a console-based script into a fully interactive GUI application.
* Basic CSS styling for layout, color-coded feedback, and visual hierarchy.