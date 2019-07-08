import TypeComponent from './types';
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
export default ComponentCanvas;
