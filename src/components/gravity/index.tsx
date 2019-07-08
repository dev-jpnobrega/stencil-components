import { Component, Prop, Listen, State } from '@stencil/core'

import ComponentType from './script/types';
import ComponentCanvas from './script/component-canvas.js';

@Component({
  tag: 'gravity-game-component',
  styleUrl: 'style.css',
  shadow: false,
})
export class GravityGameComponent {
  @Prop() description: string  = '';
  @Prop() title: string = '';
  
  @State() score: string = '';
  @State() isStartGame: boolean = false;

  piece: ComponentCanvas;
  htmlScore: HTMLDivElement;
  
  componentDidLoad() {

  }

  @Listen('updateArea')
  updateAreaHandler(event: CustomEvent) {
    this.score = event.detail.score;

    this.updateScore(this.score);
    
  }

  @Listen('createArea')
  createAreaHandler(event: CustomEvent) {
    const { context } = event.detail;
    this.createPiece(context);
  }

  updateScore(score) {
    this.htmlScore.innerText = `SCORE: ${ score }`;
    // this.htmlScore.style.fontSize = `${ this.score }px`;
  }

  createPiece(context) {
    this.piece = new ComponentCanvas({
      context: context,
      width: 30,
      height: 30,
      color: 'red',
      x: 10,
      y: 120,
      Type: ComponentType.AVATAR
    })

    this.piece.updateGravity(0.05);
  }

  onMouseDown() {
    this.piece.updateGravity(-0.2);
  }

  onMouseUp() {
    this.piece.updateGravity(0.05);
  }

  renderGravityArea() {
    return (
      this.isStartGame ? (
        <div class='base-area-game'>
          <div ref={el => this.htmlScore = el as HTMLDivElement} />
          <gravity-area width={480} height={270} piece={this.piece}></gravity-area>          
        </div>
      ) : (
        <div>We are going</div>
      )
    )
  }

  render() {
    return (
      <div class='gravity-base'>
        {this.renderGravityArea()}       
        <p>
          <button type='button' onClick={() => this.isStartGame = true}>
            START GAME
          </button>

          <button type='button' 
            onMouseDown={ () => this.onMouseDown() } 
            onMouseUp={ () => this.onMouseUp() }
          >
            ACT
          </button>
        </p>
      </div>      
    ) 
  }
}