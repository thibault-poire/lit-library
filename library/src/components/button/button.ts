import { html, LitElement } from "lit";
import { customElement as custom_element, property } from "lit/decorators.js";
import { button_style } from "./button.style";
import { global_style } from "../../global.style";

@custom_element('lib-button')
export class Button extends LitElement {
  @property()
  disabled?: boolean;

  @property()
  label: string;

  static styles = [
    global_style,
    button_style,
  ];

  render() {
    return html`<button ?disabled=${this.disabled}>${this.label}</button>`
  }
}