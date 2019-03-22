"use strict";
// labelcomponent: Custom Elements Define Library, ES Module/es5 Target
Object.defineProperty(exports, "__esModule", { value: true });
var labelcomponent_core_js_1 = require("./labelcomponent.core.js");
var labelcomponent_components_js_1 = require("./labelcomponent.components.js");
function defineCustomElements(win, opts) {
    return labelcomponent_core_js_1.defineCustomElement(win, labelcomponent_components_js_1.COMPONENTS, opts);
}
exports.defineCustomElements = defineCustomElements;
