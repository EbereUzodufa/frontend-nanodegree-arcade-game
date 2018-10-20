# Description

Arcade game is a web application designed based on Object Oriented JavaScript tutorial in Udacity Frontend web Nanodegree program. The game has a player trying to avoid enemies.

## How to Play

* Cross the player to the top of the board to earn a score.
* Aviod collusion with vehicle/enemies.
* Control movement of player with the **Arrow keys**.

[Click here to Play](https://ebereuzodufa.github.io/frontend-nanodegree-arcade-game/). **Good Luck**.

## Visual Description

[![video](https://img.youtube.com/vi/SxeHV1kt7iU/0.jpg)](https://www.youtube.com/watch?v=SxeHV1kt7iU)

## This Repo

This repository has files that allows [this program](https://ebereuzodufa.github.io/frontend-nanodegree-arcade-game/index.html) to run. The project has it's **stylesheet**, **images** and **javascript** files placed in the **css**, **images** and **js** folders respectively. THe readme and index(html fill) are not placed in any folder.

### Like to Download/Clone this Repo

To download this repository,
* click **Clone or Download**.
* choose most suitable option and there, you have it.

### How to use downloaded/cloned Repo

* **index.html** is the one and basic html file. This file is used to display the canvas and count scores.
* **style.css** is the one and basic css file and is found in the **css folder**. This file is style the HTML.
* **app.js** is one of the javascript files and is found in the **js folder**. This file has classes and/or functions that
  * has the Enemy and Player properties.
  * has the enhances the enemy speed.
  * controls Enemy and Player movement.
  * resets game when there is a collision and
  * resets game and add point if Player reaches the top.
* **engine.js** is one of the javascript files and is found in the **js folder**. It
  * provides the game loop functionality (update entities and render),
  * draws the initial game board on the screen, and then calls the update and
  * render methods on your player and enemy objects (defined in your app.js).
* **resources.js** is one of the javascript files and is found in the **js folder**. 
  * It simply an image loading utility. It eases the process of loading image files so that they can be used within your game.
  * It also includes a simple "caching" layer so it will reuse cached images if you attempt to load the same image multiple times.
