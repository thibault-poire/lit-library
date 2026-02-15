import { css } from "lit";

export const button_style = css`
  :host {
    --button-background-primary: var(--background-primary);
    --button-text-on-primary: var(--text-on-primary);
    --button-border-color-primary: var(--border-color-primary);
    --button-hover-background-primary: var(--background-secondary);
    --button-hover-text-on-primary: var(--text-on-secondary);

    --button-font-family: var(--font-family-primary);
    --button-font-weight: var(--font-weight-bold);
    --button-font-size: var(--font-size-medium);
    
    --button-padding-block: var(--spacing-small);
    --button-padding-inline: var(--spacing-small);
    
    --button-border-radius: var(--border-radius-small);
    --button-border-width-small:var(--border-width-small);
  }

  button {
    display: flex;
    padding-block: var(--button-padding-block);
    padding-inline: var(--button-padding-inline);
    color: var(--button-text-on-primary);
    background-color: var(--button-background-primary); 
    border: var(--button-border-width-small) solid var(--button-border-color-primary);
    border-radius: var(--button-border-radius);
    font-family: var(--button-font-family);
    font-size: var(--button-font-size);
    font-weight: var(--button-font-weight);
    cursor: pointer;
  }

  button:hover, 
  button:active {
    color: var(--button-hover-text-on-primary);
    background-color: var(--button-hover-background-primary); 
  }
`;