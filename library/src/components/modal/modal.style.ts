import { css } from "lit";

export const modal_style = css`

    dialog[open] {
      display: flex;
      flex-direction: column;
      gap: var(--lib-spacing-medium);
      max-width: var(--modal-max-width);
      padding-block: var(--modal-padding-block);
      padding-inline: var(--modal-padding-inline);
      background-color: var(--modal-background-primary);
      color: var(--modal-text-on-primary);
      border: var(--modal-border-width) solid var(--modal-border-color-primary);
    }

    p, ::slotted(p) {
      margin: 0;
    }

    p {
      font-family: var(--modal-title-font-family);
      font-weight: var(--modal-title-font-weight);
      font-size: var(--modal-title-font-size);
    }

    ::slotted(*) {
      font-family: var(--modal-content-font-family);
      font-weight: var(--modal-content-font-weight);
      font-size: var(--modal-content-font-size);
    }

    slot[name="footer"] {
      display: flex;
      justify-content: flex-end;
      gap: var(--lib-spacing-small);
    }
`;