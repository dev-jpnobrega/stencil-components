/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface LabelComponent {
    'value': string;
  }
  interface LabelComponentAttributes extends StencilHTMLAttributes {
    'value'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'LabelComponent': Components.LabelComponent;
  }

  interface StencilIntrinsicElements {
    'label-component': Components.LabelComponentAttributes;
  }


  interface HTMLLabelComponentElement extends Components.LabelComponent, HTMLStencilElement {}
  var HTMLLabelComponentElement: {
    prototype: HTMLLabelComponentElement;
    new (): HTMLLabelComponentElement;
  };

  interface HTMLElementTagNameMap {
    'label-component': HTMLLabelComponentElement
  }

  interface ElementTagNameMap {
    'label-component': HTMLLabelComponentElement;
  }


}
