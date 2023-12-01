import MyButton from './MyButton.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

type Story = StoryObj<typeof MyButton>

const meta: Meta<typeof MyButton> = {
  title: 'atoms/MyButton',
  component: MyButton,
  render: args => ({
    components: { MyButton },
    setup() {
      return { args }
    },
    template: "<MyButton v-bind='args'  label='Sample'/>"
  }),
  tags: ['autodocs'],
  args: {
    label: 'ボタン',
    variant: 'primary',
    size: 'medium'
  },
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio'
      },
      options: ['primary', 'secondary']
    },
    size: {
      control: {
        type: 'select'
      },
      options: ['small', 'medium', 'large']
    }
  }
}

export const Default: Story = {
  args: {
    label: 'ボタン',
    variant: 'primary',
    size: 'medium'
  },
  // ストーリーごとに parameters を設定
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}

export default meta
