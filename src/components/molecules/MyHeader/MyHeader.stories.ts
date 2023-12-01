import MyHeader from './MyHeader.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

type Story = StoryObj<typeof MyHeader>

// 前略
const meta: Meta<typeof MyHeader> = {
  title: 'molecules/MyHeader',
  component: MyHeader,
  render: (args) => ({
    components: { MyHeader },
    setup() {
      return { args }
    },
    template: "<MyHeader v-bind='args' />",
  }),
  // tags: ["autodocs"],
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onSignUp: { action: 'onSignUp' },
  },
}

// 以下略

export const Login: Story = {
  args: {
    isLoggedIn: true,
  },
}

export const Logout: Story = {
  args: {
    isLoggedIn: false,
  },
}

export default meta
