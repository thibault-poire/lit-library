import { html, LitElement } from "lit";
import { customElement as custom_element, property } from "lit/decorators.js";
import { button_style } from "./button.style";

@custom_element('lib-button')
export class Button extends LitElement {
  @property()
  disabled?: boolean;

  @property()
  label: string;

  @property()
  variant: 'primary' | 'secondary' = "primary";

  static styles = [
    button_style,
  ];

  render() {
    return html`<button class=${this.variant} ?disabled=${this.disabled}>${this.label}</button>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lib-button": Button;
  }
}