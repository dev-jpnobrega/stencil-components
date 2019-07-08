import ComponentCanvas from './script/component-canvas';
export class GravityGameComponent {
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
    static get style() { return "/**style-placeholder:gravity-area:**/"; }
}
