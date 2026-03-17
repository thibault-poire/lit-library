import type { StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import "./button";

import "./button.css";

export default {
  title: "Button",
  component: "lib-button",
};

export const Default: StoryObj = {
  args: {
    disabled: false,
    label: "Label",
    variant: "primary"
  },

  argTypes: {
    variant: {
      control: { type: "select" },
      options: ['primary', 'secondary']
    },

    click: {
      action: 'clicked'
    }
  },

  render: ({ disabled, label, variant, click }) => html`<lib-button .disabled=${disabled} .label=${label} .variant=${variant} @click=${click}></lib-button>`
};