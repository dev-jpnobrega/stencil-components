import { h } from '../devjpnobrega.core.js';

function Avatar({
  context,
  x,
  y,
  width,
  height,
  color,
}) { 
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
}

function Text({
  context,
  x,
  y,
  width,
  height,
  color,
  text,
}) { 
  context.font = width + " " + height;
  context.fillStyle = color;
  context.fillText(text, x, y);
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }
}

const calculateY = (y, height) => (y === 0 ? height : y -10);
const calculateX = (x, variant) => (x - variant);
const calculateWidth = (w, variant) => (w + variant);

function Tubes({
  context,
  x,
  y,
  width,
  height,
  color,
}) {

  context.fillStyle = color;
  context.fillRect(x, y, width, height);

  context.fillRect(calculateX(x, 6), calculateY(y, height),  calculateWidth(width, 13), 10);
  roundRect(context, calculateX(x, 6), calculateY(y, height), calculateWidth(width, 13), 10, 5, {
    tl: 50,
    br: 50
  }, true);

  context.strokeRect(x, y, width, height);
}

var TypeComponent = Object.freeze({
  TUBES: Tubes,
  AVATAR: Avatar,
  TEXT: Text,
});

class ComponentCanvas {
    constructor({ context, width, height, color, x, y, Type = TypeComponent.TUBES }) {
        this.text = '';
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.gravity = 0;
        this.gravitySpeed = 0;
        this.Type = Type;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.context = context;
        this.color = color;
    }
    update(color = this.color) {
        new this.Type({
            context: this.context,
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            color: color,
            font: this.width + " " + this.height,
            text: this.text,
        });
    }
    updatePositionX(x) {
        this.x += x;
    }
    updateGravity(value) {
        this.gravity = value;
    }
    hitBottom() {
        let rockbottom = this.context.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
    newPos() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    crashWith(objectOther) {
        let myleft = this.x;
        let myright = this.x + (this.width);
        let mytop = this.y;
        let mybottom = this.y + (this.height);
        let otherleft = objectOther.x;
        let otherright = objectOther.x + (objectOther.width);
        let othertop = objectOther.y;
        let otherbottom = objectOther.y + (objectOther.height);
        let crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

class GravityGameComponent {
    constructor() {
        this.width = 500;
        this.height = 500;
        this.piece = undefined;
        this.frameNo = 0;
        this.obstacles = [];
    }
    updateAreaHandler(event) {
        console.timeStamp(`${event}`);
        this.update();
    }
    componentDidLoad() {
        this.onStartGame();
    }
    componentWillLoad() {
    }
    onStartGame() {
        this.canvas = this.el.shadowRoot.querySelector('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');
        this.createArea.emit({ context: this.context });
        this.interval = setInterval(() => this.updateArea.emit({ score: this.frameNo }), 20);
    }
    createInitalCanvasElements() {
        let x, height, gap, minHeight, maxHeight, minGap, maxGap;
        x = this.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        this.obstacles.push(new ComponentCanvas({
            context: this.context,
            width: 50,
            height,
            color: 'green',
            x,
            y: 0,
        }));
        this.obstacles.push(new ComponentCanvas({
            context: this.context,
            width: 50,
            height: (x - height - gap),
            color: 'green',
            x,
            y: (height + gap)
        }));
    }
    checkCrashWith() {
        for (let i = 0; i < this.obstacles.length; i += 1) {
            if (this.piece.crashWith(this.obstacles[i])) {
                this.obstacles[i].update('red');
                clearInterval(this.interval);
                return true;
            }
        }
        return false;
    }
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    update() {
        if (!this.piece) {
            return;
        }
        if (this.checkCrashWith()) {
            return this.updateArea.emit({ crash: true, score: this.frameNo });
        }
        this.clear();
        this.frameNo += 1;
        if (this.frameNo === 1 || this.everyInterval(150)) {
            this.createInitalCanvasElements();
        }
        for (let i = 0; i < this.obstacles.length; i += 1) {
            this.obstacles[i].updatePositionX(-1);
            this.obstacles[i].update();
        }
        this.piece.newPos();
        this.piece.update();
    }
    everyInterval(n) {
        if ((this.frameNo / n) % 1 == 0) {
            return true;
        }
        return false;
    }
    render() {
        return (h("div", { class: 'base-area-game', id: 'gameArea' },
            h("canvas", { id: 'gravityCanvas' })));
    }
    static get is() { return "gravity-area"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "height": {
            "type": Number,
            "attr": "height"
        },
        "piece": {
            "type": "Any",
            "attr": "piece"
        },
        "width": {
            "type": Number,
            "attr": "width"
        }
    }; }
    static get events() { return [{
            "name": "updateArea",
            "method": "updateArea",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "createArea",
            "method": "createArea",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "updateArea",
            "method": "updateAreaHandler"
        }]; }
    static get style() { return "canvas.sc-gravity-area{border:1px solid #d3d3d3;background-color:transparent}.gravity-score.sc-gravity-area{font-family:Arial,Helvetica,sans-serif;font-size:20px;padding:5px;width:auto;border:1px solid #639;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}"; }
}

class GravityGameComponent$1 {
    constructor() {
        this.description = '';
        this.title = '';
        this.score = '';
        this.isStartGame = false;
    }
    componentDidLoad() {
    }
    updateAreaHandler(event) {
        this.score = event.detail.score;
        this.updateScore(this.score);
    }
    createAreaHandler(event) {
        const { context } = event.detail;
        this.createPiece(context);
    }
    updateScore(score) {
        this.htmlScore.innerText = `SCORE: ${score}`;
    }
    createPiece(context) {
        this.piece = new ComponentCanvas({
            context: context,
            width: 30,
            height: 30,
            color: 'red',
            x: 10,
            y: 120,
            Type: TypeComponent.AVATAR
        });
        this.piece.updateGravity(0.05);
    }
    onMouseDown() {
        this.piece.updateGravity(-0.2);
    }
    onMouseUp() {
        this.piece.updateGravity(0.05);
    }
    renderGravityArea() {
        return (this.isStartGame ? (h("div", { class: 'base-area-game' },
            h("div", { ref: el => this.htmlScore = el }),
            h("gravity-area", { width: 480, height: 270, piece: this.piece }))) : (h("div", null, "We are going")));
    }
    render() {
        return (h("div", { class: 'gravity-base' },
            this.renderGravityArea(),
            h("p", null,
                h("button", { type: 'button', onClick: () => this.isStartGame = true }, "START GAME"),
                h("button", { type: 'button', onMouseDown: () => this.onMouseDown(), onMouseUp: () => this.onMouseUp() }, "ACT"))));
    }
    static get is() { return "gravity-game-component"; }
    static get properties() { return {
        "description": {
            "type": String,
            "attr": "description"
        },
        "isStartGame": {
            "state": true
        },
        "score": {
            "state": true
        },
        "title": {
            "type": String,
            "attr": "title"
        }
    }; }
    static get listeners() { return [{
            "name": "updateArea",
            "method": "updateAreaHandler"
        }, {
            "name": "createArea",
            "method": "createAreaHandler"
        }]; }
    static get style() { return "canvas{border:1px solid #d3d3d3;background-color:transparent}.gravity-score{font-family:Arial,Helvetica,sans-serif;font-size:20px;padding:5px;width:auto;border:1px solid #639;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}"; }
}

export { GravityGameComponent as GravityArea, GravityGameComponent$1 as GravityGameComponent };
