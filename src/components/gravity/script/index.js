import ComponentTypes from './types';
import ComponentCanvas from './component-canvas';


let myGamePiece;
let myObstacles = [];
let myScore;

export function startGame() {
    myGamePiece = new ComponentCanvas({
        context: myGameArea, 
        width: 30, 
        height: 30, 
        color: "red", 
        x: 10, 
        y: 120, 
        Type: ComponentTypes.AVATAR
    });

    myGamePiece.gravity = 0.05;
    myScore = new ComponentCanvas({ 
        context: myGameArea, 
        width: "30px", 
        height: "Consolas", 
        color: "black", 
        x: 280, 
        y: 40, 
        Type: ComponentTypes.TEXT
    });
    myGameArea.start();
}

const myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");

        console.warn('docu', document);
        const el = document.body.getElementsByTagName('gravity-game-component')  //.querySelector('div') //getElementById('gameArea');
        console.warn('el', el[0].querySelectorAll('div#gameArea'));

        el[0].querySelectorAll('div#gameArea')[0].appendChild(this.canvas);
        //document.body.appendChild(this.canvas, document.getElementById('gameArea'));
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (let i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            return;
        } 
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new ComponentCanvas({context: myGameArea, width: 50, height, color: "green", x, y: 0}));
        myObstacles.push(new ComponentCanvas({context: myGameArea, width: 50, height: (x - height - gap), color: "green", x, y: (height + gap)}));
    }
    for (let i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }

    myScore.score = myGameArea.frameNo
    myScore.text = `SCORE: ${myScore.score}`;
    myScore.update();
    myGamePiece.newPos();
    myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

export function accelerate(n) {
    myGamePiece.gravity = n;
}