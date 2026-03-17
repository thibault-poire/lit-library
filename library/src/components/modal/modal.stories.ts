import type { StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import "./modal";
import "../button/button";

import "./modal.css";

export default {
  title: "Modal",
  component: "lib-modal",
};

export const Default: StoryObj = {
  args: {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod orci a sodales tincidunt. Etiam mattis, lacus et lacinia mollis, ipsum mauris tristique justo, a pretium diam felis eget sapien.",
    is_open: false,
    title: "Title"
  },

  argTypes: {
    click: {
      action: 'clicked'
    },

    update: {
      action: 'updated'
    }
  },

  render: ({ content, is_open, title, click, update }, { updateArgs }) => html`
    <lib-modal .is_open=${is_open} .title=${title} @close=${() => {
      updateArgs({ is_open: false });
      update()
    }}>
      <p slot="content">${content}</p>
      <lib-button slot="footer" label="Button" @click=${click}></lib-button>
      <lib-button slot="footer" label="Close" variant="secondary" @click=${() => updateArgs({ is_open: false })}></lib-button>
    </lib-modal>
  `
};