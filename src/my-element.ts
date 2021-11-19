import { html, css, attr, FASTElement, customElement, observable } from '@microsoft/fast-element';

const template = html<MyElement>`
  <h1>Hello, ${(x) => x.name}!</h1>
  <button @click=${(x) => x._onClick()} part="button">
    Click Count: ${(x) => x.count}
  </button>
  <slot></slot>
`;

const styles = css`
  :host {
    display: block;
    border: solid 1px gray;
    padding: 16px;
    max-width: 800px;
  }
`;

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement({
  name: 'my-element',
  template,
  styles,
})
export class MyElement extends FASTElement {
  /**
   * The name to say "Hello" to.
   */
  @attr name: string = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @observable count: number = 0;

  _onClick() {
    this.count++;
  }
}
