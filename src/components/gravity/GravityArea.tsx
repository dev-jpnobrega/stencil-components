import { Component, Element, Event, EventEmitter, Listen, Prop } from '@stencil/core'
// import ComponentType from './script/types';
import ComponentCanvas from './script/component-canvas';

@Component({
  tag: 'gravity-area',
  styleUrl: 'style.css',
  shadow: true,
})
export class GravityGameComponent {
  @Prop() width: number = 500;
  @Prop() height: number = 500;
  @Prop() piece: any = undefined;

  @Element() el: HTMLElement;
  
  @Event({ eventName: 'updateArea', composed: true, cancelable: true, bubbles: true }) updateArea: EventEmitter;
  @Event({ eventName: 'createArea', composed: true, cancelable: true, bubbles: true }) createArea: EventEmitter;

  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  frameNo: number = 0;
  interval: number;
  obstacles: Array<ComponentCanvas> = [];

  @Listen('updateArea')
  updateAreaHandler(event: CustomEvent) {
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
    // this.context.shadowBlur = 15;//  shadow Blur
    // this.context.shadowColor = '#009933'; // shadow color

    this.createArea.emit({ context: this.context });

    this.interval = setInterval(() => this.updateArea.emit({ score: this.frameNo }), 20);
  }

  createInitalCanvasElements() {
    let x, height, gap, minHeight, maxHeight, minGap, maxGap;

    x = this.canvas.width;
    minHeight = 20;
    maxHeight = 200;
    height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
    minGap = 50;
    maxGap = 200;
    gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);

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
    if (!this.piece) { return; }

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
    return (
      <div class='base-area-game' id='gameArea'>
        <canvas id='gravityCanvas'></canvas>
      </div>    
    ) 
  }
}