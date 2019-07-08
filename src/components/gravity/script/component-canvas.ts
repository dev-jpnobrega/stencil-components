import TypeComponent from './types';

interface IComponentCanvas {
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  color: string,
  Type?: TypeComponent
}

class ComponentCanvas {
  private Type: TypeComponent;
  private context: CanvasRenderingContext2D;
  private color: String;
  private text: String = '';

  private x: number = 0;
  private y: number = 0;
  private width: number = 0;
  private height: number = 0;

  private speedX: number = 0;
  private speedY: number = 0;
  private gravity: number = 0;
  private gravitySpeed: number = 0;

  constructor({
    context, width, height, color, x, y, Type = TypeComponent.TUBES
  } : IComponentCanvas) {
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
    })
  }

  updatePositionX(x: number) {
    this.x += x
  }

  updateGravity(value: number) {
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