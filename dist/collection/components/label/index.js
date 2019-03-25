export class LabelComponent {
    render() {
        return (h("div", { class: 'base' },
            h("p", null,
                h("span", { class: 'title' }, this.title),
                h("br", null),
                h("span", { class: 'description' }, this.description))));
    }
    static get is() { return "label-component"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "description": {
            "type": String,
            "attr": "description"
        },
        "title": {
            "type": String,
            "attr": "title"
        }
    }; }
    static get style() { return "/**style-placeholder:label-component:**/"; }
}
