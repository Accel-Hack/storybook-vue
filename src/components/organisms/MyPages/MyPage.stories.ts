import MyPage from './MyPage.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

type Story = StoryObj<typeof MyPage>

const meta: Meta<typeof MyPage> = {
  title: 'organisms/MyPage',
  component: MyPage,
  render: () => ({
    components: { MyPage },
    template: '<MyPage />'
  }),
  parameters: {
    backgrounds: {
      default: 'twitter',
      values: [
        {
          name: 'twitter',
          value: '#00aced'
        },
        {
          name: 'facebook',
          value: '#3b5998'
        }
      ]
    }
  }
}

export const ForPc: Story = {}

export const ForMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  }
}

export default meta
