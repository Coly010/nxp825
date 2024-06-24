import type { Meta, StoryObj } from '@storybook/react';
import { Lib1 } from './lib1';

const meta: Meta<typeof Lib1> = {
  component: Lib1,
  title: 'Lib1',
};
export default meta;
type Story = StoryObj<typeof Lib1>;

export const Primary = {
  args: {},
};
