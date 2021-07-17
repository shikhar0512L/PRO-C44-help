const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var crash, gameOver, shoot; //Sounds
var boat, castleImg, mountainImg, towerImg; //Images
var WaterGif;

function setup() {
    engine = Engine.create();
    world = engine.world;
    // castleImg = loadImage("Images/Castle.png");
    // mountainImg = loadImage("Images/Mountain.png");
    // towerImg = loadImage("Images/Tower.png");
    // SOUNDS
    // crash = new Audio('Audio/crash.wav');
    // gameOver = new Audio('Audio/game over.wav');
    // shoot = new Audio('Audio/shoot.mp3');
    createCanvas(800, 400);
    createSprite(400, 200, 50, 50);
}

function draw() {
    boat = new Boat(123, 344, 14, 67);

    // background(255, 255, 255);
    drawSprites();
}