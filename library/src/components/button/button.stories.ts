import type { StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import "./button";

export default {
  title: "Button",
  component: "lib-button",
};

export const Default: StoryObj = {
  args: {
    disabled: false,
    label: "Label"
  },

  argTypes: {
    click: {
      action: 'clicked'
    }
  },

  render: ({ disabled, label, click }) => html`<lib-button .disabled=${disabled} .label=${label} @click=${click}></lib-button>`
};