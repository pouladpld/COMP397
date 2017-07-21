var stage;
function init() {
    stage = new createjs.Stage(document.getElementById('canvas'));
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    start();
}
function handleTick(e) {
    stage.update();
}
function start() {
    drawButterflies();
}
let butterfly2: createjs.Bitmap;

function drawButterflies() {
    var imgPath = 'images/butterfly.png';
    let butterfly1 = new createjs.Bitmap(imgPath);
    butterfly2 = new createjs.Bitmap(imgPath);
    let butterfly3 = new createjs.Bitmap(imgPath);
    butterfly2.x = 200;
    butterfly3.x = 400;
    stage.addChild(butterfly1, butterfly2, butterfly3);
    stage.update();
    setTimeout(moveButterfly, 1000);
}
function moveButterfly() {
    butterfly2.y += 200;
}

console.log("Hi");

window.onload = init;
console.log(`Hello`)