import type { Preview } from '@storybook/web-components-vite'
import { useArgs } from 'storybook/internal/preview-api';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },

  decorators: [
    (story, context) => {
      const [_, updateArgs] = useArgs();
      return story({ ...context, updateArgs });
    },
  ],
};

export default preview;