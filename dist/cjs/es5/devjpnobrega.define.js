"use strict";
// devJpnobrega: Custom Elements Define Library, ES Module/es5 Target
Object.defineProperty(exports, "__esModule", { value: true });
var devjpnobrega_core_js_1 = require("./devjpnobrega.core.js");
var devjpnobrega_components_js_1 = require("./devjpnobrega.components.js");
function defineCustomElements(win, opts) {
    return devjpnobrega_core_js_1.defineCustomElement(win, devjpnobrega_components_js_1.COMPONENTS, opts);
}
exports.defineCustomElements = defineCustomElements;
