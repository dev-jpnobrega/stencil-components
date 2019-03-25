const h = window.labelcomponent.h;

class LabelComponent {
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
    static get style() { return ".title {\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.description {\n  font-size: 12px;\n}\n\n.base {\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: transparent;\n  padding-left: 0.5%;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;  \n  border-radius: 10px;  \n  border: 1px solid darkorange;\n  -webkit-box-shadow: 2px;\n  box-shadow: 2px;\n  text-align: left;\n  vertical-align: middle;\n  margin-bottom: 2%;\n}"; }
}

export { LabelComponent };
