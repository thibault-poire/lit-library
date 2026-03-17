import { css } from "lit";

export const button_style = css`
  :host {
    button {
      display: flex;
      padding-block: var(--button-padding-block);
      padding-inline: var(--button-padding-inline);
      border: var(--button-border-width) solid var(--button-border-color-primary);
      border-radius: var(--button-border-radius);
      font-family: var(--button-font-family);
      font-size: var(--button-font-size);
      font-weight: var(--button-font-weight);
      cursor: pointer;
    }

    :disabled {
      cursor: not-allowed; 
      opacity: var(--button-opacity-disabled); 
    }

    .primary {
      color: var(--button-text-on-primary);
      background-color: var(--button-background-primary); 
    }

    .primary:hover:not(:disabled), 
    .primary:active:not(:disabled) {
      color: var(--button-hover-text-on-primary);
      background-color: var(--button-hover-background-primary); 
    }

    .secondary {
      color: var(--button-text-on-secondary);
      background-color: var(--button-background-secondary); 
    }

    .secondary:hover:not(:disabled),
    .secondary:active:not(:disabled) {
      color: var(--button-hover-text-on-secondary);
      background-color: var(--button-hover-background-secondary); 
    }
  }
`;