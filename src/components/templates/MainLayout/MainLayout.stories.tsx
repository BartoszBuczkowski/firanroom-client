import { Meta, Story } from '@storybook/react/types-6-0'
import _MainLayout from './MainLayout'

export default {
   title: 'Templates/MainLayout',
   component: _MainLayout,
   decorators: [(Story) => <Story />],
} as Meta

export const MainLayout: Story = () => <_MainLayout>text</_MainLayout>
