import { html, LitElement } from "lit";
import { customElement as custom_element, property, query } from "lit/decorators.js";
import { modal_style } from "./modal.style";

@custom_element('lib-modal')
export class Modal extends LitElement {
  @property()
  is_open: boolean;

  @property()
  title: string;

  @query("dialog")
  dialog: HTMLDialogElement;

  updated(changed_properties: Map<string, any>) {
    if (changed_properties.has("is_open")) {
      return this.is_open ? this.dialog.showModal() : this.dialog.close();
    }
  }

  handle_close(event: Event) {
    event.preventDefault();
    this.is_open = false;
    this.dispatchEvent(new CustomEvent("close"));
  }

  static styles = [
    modal_style,
  ];

  render() {
    const has_content_slot = !!this.querySelector(":scope > [slot='content']");
    const has_footer_slot = !!this.querySelector(':scope > [slot="footer"]');

    return html`
      <dialog @close=${this.handle_close}>
        <header>
          <p>${this.title}</p>
        </header>

        ${has_content_slot ? html`
          <div>
            <slot name="content"></slot>
          </div>` : null
      }

        ${has_footer_slot ? html`<footer><slot name="footer"></slot></footer>` : null}
      </dialog>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lib-modal": Modal;
  }
}