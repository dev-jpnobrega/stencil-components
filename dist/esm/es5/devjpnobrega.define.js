
// devJpnobrega: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './devjpnobrega.core.js';
import { COMPONENTS } from './devjpnobrega.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
