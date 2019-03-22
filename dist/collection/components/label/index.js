export class LabelComponent {
    render() {
        return (h("p", null,
            "Label vale: ",
            this.value));
    }
    static get is() { return "label-component"; }
    static get properties() { return {
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get style() { return "/**style-placeholder:label-component:**/"; }
}