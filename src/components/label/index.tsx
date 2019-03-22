import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'label-component',
  styleUrl: 'style.css'
})
export class LabelComponent {
  @Prop() value: string;
  
  render() {
    return (
      <p>Label vale: {this.value}</p>
    ) 
  }
}