///ENUMS
var PLANETMODE = 0;
var ROCKETMODE = 1;
///
var WIDTH = 640;
var mode = PLANETMODE;
var focusPoint;
var player;
///Arrays
var planet;
var stars = [];
var keys = [];

///Methods
function setup(){
    createCanvas(WIDTH, WIDTH);
    planet = new Planet(0, 0);
    focusPoint = createVector(WIDTH/2, WIDTH/1.5);
    player = new Player();

    ///init stars
    for(var i = 0; i < 150; i++){
        stars.push([createVector(random(-WIDTH/1.5, WIDTH/1.5), random(-WIDTH/2, WIDTH/2)), random(1, 5), random(TWO_PI)]);
    }
}

function draw(){
    noStroke();
///Clear screen
    fill(0);
    rect(0, 0, WIDTH, WIDTH);

///Updates
    update();

///Drawing
    translate(focusPoint.x, focusPoint.y);
    if(mode == PLANETMODE){
        ///Background
        for(var i = 0; i < stars.length; i++){
            fill(255);
            push();
            rotate(stars[i][2] + planet.rotation + player.rotation);
            ellipse(stars[i][0].x, stars[i][0].y, stars[i][1]);
            pop();
        }

        ///Planet
        for(var i = 0; i < planet.decor.length; i++){
            fill(10, 60, 20);
            push();
            rotate(planet.decor[i][2] - player.rotation);
            rect(0, -(planet.decor[i][1] + planet.width / 2), planet.decor[i][0], planet.decor[i][1]);
            pop();
        }

        fill(planet.color[0], planet.color[1], planet.color[2]);
        ellipse(0, 0, planet.width, planet.width);

        ///Player
        push();
        fill(255);
        translate(-5, -(planet.width / 2 + 25));
        rect(0, 0, 10, 25);
        pop();


    }else if(mode == ROCKETMODE){

    }
}

function keyPressed() {
    if(keys.indexOf(keyCode) == -1){
        keys.push(keyCode);
    }
}

function keyReleased(){
    var ind = keys.indexOf(keyCode);
    if(ind >= 0){
        keys.splice(ind, 1);
    }
}

function update(){
    planet.update();
    ///keys
    if(mode == PLANETMODE){
        if(keys.indexOf(81) >= 0){
            player.rotation -= 0.005;
        }
        if(keys.indexOf(68) >= 0){
            player.rotation += 0.005;
        }
    }    
}
