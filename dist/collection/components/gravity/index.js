import ComponentType from './script/types';
import ComponentCanvas from './script/component-canvas.js';
export class GravityGameComponent {
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
            Type: ComponentType.AVATAR
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
    static get style() { return "/**style-placeholder:gravity-game-component:**/"; }
}
