
const enemyStart = -100;
const enemyEnd = 65;
const enemySpeed = 100;
const fieldEnd = 500;

const playerX = 200;
const playerY = 320;
const playerWidth = 400;
const playerHeight = 500;
const Step = 95;
const canvasWidth = 600;
const canvasHeight = 600;

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
    
    /*if (this.player.x < this.x + this.player.width && this.player.x + this.player.width &&
        this.player.y < this.y + this.player.height && this.player.height && this.player.height + this.player.y > this.y) {
        this.player.x = playerX;
        this.player.y = playerY;        
    }    */
    /*if (this.x < this.player.x + this.player.width ||
        this.x + this.width > this.player.x ||
        this.y < this.player.y + this.player.height ||
        this.y + this.height > this.player.y) {
        this.player.x = playerX;
        this.player.y = playerY; 
    }*/    
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
    if (this.x > playerWidth || this.x < 0 ||
        this.y > playerHeight || this.y < 0) {
        this.x = playerX;
        this.y = playerY;
    }   
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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

const player = new Player(playerX, playerY, playerWidth, playerHeight);
const allEnemies = [];
function initEnemies() {    
        allEnemies.push(new Enemy(enemyStart, enemyEnd, canvasWidth, canvasHeight, player, enemySpeed));   
        allEnemies.push(new Enemy(enemyStart, enemyEnd + 85, canvasWidth, canvasHeight, player, enemySpeed-20));  
        allEnemies.push(new Enemy(enemyStart, enemyEnd + 170, canvasWidth, canvasHeight, player, enemySpeed+20));  
}
initEnemies()

/*function collision(first, second){
    return !(first.x > second.x + second.width ||
             first.x + first.width < second.x ||
             first.y > second.y + second.height ||
             first.y + first.height < second.y);
} */
/*if (collision(Enemy,player)) {
    console.log(player.x)      
}*/
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
