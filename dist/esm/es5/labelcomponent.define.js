
// labelcomponent: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './labelcomponent.core.js';
import { COMPONENTS } from './labelcomponent.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
