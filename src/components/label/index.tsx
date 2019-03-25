import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'label-component',
  styleUrl: 'style.css',
  shadow: true,
})
export class LabelComponent {
  @Prop() description: string;
  @Prop() title: string;
  
  render() {
    return (
      <div class='base'>
        <p>
          <span class='title'>{this.title}</span><br/>
          <span class='description'>{this.description}</span>
        </p>
      </div>      
    ) 
  }
}