import { Meta, Story } from '@storybook/react/types-6-0'
import _Header from '../Header'

export default {
   title: 'Organisms/Header',
   component: _Header,
   decorators: [(Story) => <Story />],
} as Meta

export const Header: Story = () => <_Header />
