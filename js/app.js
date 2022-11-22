const enemyStart = -100;
const enemyEnd = 65;
const enemySpeed = 100;
const fieldEnd = 500;

const playerX = 200;
const playerY = 320;
const fieldPlayerWidth = 400;
const fieldPlayerHeight = 500;
const playerWidth = 80;
const playerHeight = 50;
const Step = 95;
const canvasWidth = 600;
const canvasHeight = 600;

let score = 0;
let collisionsCount = 0;

/*const collisions = new Image();
collisions.src = 'images/Gem Orange.png';
ctx.drawImage(collisions, 50, 50);*/

let Enemy = function(x, y, width, height, player, speed) {    
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.player = player;
    this.speed = speed;       
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {    
    this.x += this.speed * dt;
    if (this.x > fieldEnd) {
        this.x = enemyStart;
    }   
    //collisions
    if (player.x < this.x + playerWidth && player.x + playerWidth > this.x &&
        player.y < this.y + playerHeight && playerHeight + player.y > this.y) {
        collisionsCount++;
        player.x = playerX;
        player.y = playerY;
  };     
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

const Player = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;    
    this.height = height;
    this.sprite = 'images/char-boy.png';     
};

Player.prototype.update = function() {
    if (this.x > fieldPlayerWidth || this.x < 0 ||
        this.y > fieldPlayerHeight || this.y < 0) {
        this.x = playerX;
        this.y = playerY;
        score++;
    }   
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    //score
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'blue';
    ctx.font = '15px Verdana';
    ctx.strokeText('Score: ' + score, 110, 35);       
    ctx.font = '15px Verdana';
    ctx.strokeText('Collisions: ' + collisionsCount, 210, 35);    
};

Player.prototype.handleInput = function(keyPress) {
    if (keyPress === 'up'){
        this.y -= Step;        
    }
    if (keyPress === 'down'){
        this.y += Step;        
    }
    if (keyPress === 'left'){
        this.x -= Step;        
    }
    if (keyPress === 'right'){
        this.x += Step;        
    }
};

const player = new Player(playerX, playerY, fieldPlayerWidth, fieldPlayerHeight);
const allEnemies = [];
function initEnemies() {    
        allEnemies.push(new Enemy(enemyStart, enemyEnd, canvasWidth, canvasHeight, player, enemySpeed*2));   
        allEnemies.push(new Enemy(enemyStart, enemyEnd + 85, canvasWidth, canvasHeight, player, enemySpeed*1.7));  
        allEnemies.push(new Enemy(enemyStart, enemyEnd + 170, canvasWidth, canvasHeight, player, enemySpeed*1.5));  
}
initEnemies();

//https://www.youtube.com/watch?v=GXvNEwu9cgM&t=6s&ab_channel=Frankslaboratory

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
