/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface LabelComponent {
    'description': string;
    'title': string;
  }
  interface LabelComponentAttributes extends StencilHTMLAttributes {
    'description'?: string;
    'title'?: string;
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


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
