import { css } from "lit";

export const global_style = css`
  :host {
    --primary: #ffffff;
    --secondary: #000000;

    --font-family-primary: "Silkscreen", sans-serif;
    --font-size-medium: 16px;
    --font-weight-bold: 700;
    --font-weight-normal: 400;

    --spacing-small: 8px;
    --spacing-medium: 16px;
    --spacing-large: 24px;

    --border-width-small: 2px;
    --border-radius-small: 0;

    --background-primary: var(--primary);
    --background-secondary: var(--secondary);
    --text-on-primary: var(--secondary);
    --text-on-secondary: var(--primary);
    --border-color-primary: var(--secondary);
  }
`;