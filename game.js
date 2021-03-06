import { SNAKE_SPEED } from './snake.js';
import {snakeHit, draw as drawSnake,update as updateSnake} from './snake.js';
import {draw as drawFood, update as updateFood} from './food.js';
import { snakeOutOfBounds } from './snake.js';
import {getSnakeLength} from './snake.js';
let lastRenderTime = 0;
let gameStatus = false;
let playerScore = 0;
const gameBoard = document.getElementById('game-board');
// let counter = 0;
// let prev = 0;
function main(currentTime){
    // counter++;
    if(gameStatus)
        {   updatePlayerScore();
            if(confirm(`Your Score : ${playerScore} ! Press OK to restart.`))
                window.location = '/Snake-Game-Js/';
            return;
        }
    
    window.requestAnimationFrame(main);
    let secondSinceLastLender = (currentTime-lastRenderTime)/1000;
    
    if(secondSinceLastLender<(1/SNAKE_SPEED))
        return;
    // console.log(`repainted after ${counter-prev} callbacks`);
    // prev = counter;
    lastRenderTime = currentTime;
    // console.log(`Render speed = ${SNAKE_SPEED}`); 
    update();
    draw(gameBoard);
     
}

let update = function(){
    updateSnake();
    updateFood();
    gameOver();
}
let draw = function(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

let gameOver = function(){
    gameStatus = snakeHit()||snakeOutOfBounds();
};

let updatePlayerScore = function(){
    playerScore = 10*getSnakeLength();
}
window.requestAnimationFrame(main);

 