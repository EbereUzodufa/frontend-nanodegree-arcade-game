// Enemies our player must avoid
const screenWidth = 550; //The screen width where the enemy runs

const playerInitialPosX = 200;
const playerInitialPosY = 380;
const outOfBoundX = 400;
const outOfBoundY = 380;
const playerSpeed = 50;
let minSpeed = 100;
let maxSpeed = 500;

var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.movementSpeed =  minSpeed + Math.floor(Math.random()*maxSpeed);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.movementSpeed * dt;

    //enemy moves off screen? Reset Enemy position!!
    if (this.x > screenWidth) {
        this.x = -100;
        this.movementSpeed = minSpeed + Math.floor(Math.random()*maxSpeed);
        //console.log(this.movementSpeed);
    }

    //There is collision between player & Enemy?
    if ((player.x < (this.x + 60)) && 
        ((player.x + 37) > this.x) &&
        (player.y < (this.y + 25)) &&
        ((player.y + 30) > this.y)
        ) {
        //Reset Play positon!
        player.x = playerInitialPosX;
        player.y = playerInitialPosY;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player{
    constructor(x, y, movementSpeed){
        this.x = x;
        this.y = y;
        this.movementSpeed = playerSpeed;
        this.sprite = 'images/char-boy.png';
    };

    update(){
        //She is out of bound, yo, go back. Let's prevent this from happening...
       
        if (this.x > outOfBoundX) {
            this.x = outOfBoundX;
        } 

        if (this.y > outOfBoundY) {
            this.y = outOfBoundY;
        }

        if (this.x < 0) {
            this.x = 0;
        }

        //SHE reached the top. She won her enemies.
        if (this.y < 0) {
            this.x = playerInitialPosX;
            this.y = playerInitialPosY;
        }
    };

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    handleInput(keyPress){
        switch (keyPress){
            case 'left':
                this.x -= this.movementSpeed + 50;
                break;
            case 'up':
                this.y -= this.movementSpeed + 30;
                break;
            case 'right':
                this.x += this.movementSpeed + 50;
                break;
            case 'down':
                this.y += this.movementSpeed + 30;
                break;
        }
    };
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
let enemyPosition = [60,100,160,220];
let enemy;

// Place the player object in a variable called player
const player = new Player(playerInitialPosX, playerInitialPosY);

enemyPosition.forEach(function(yPosition) {
    enemy = new Enemy(0, yPosition);
    //console.log(enemy);
    allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
