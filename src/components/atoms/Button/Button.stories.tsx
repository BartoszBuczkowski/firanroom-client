import { Meta, Story } from '@storybook/react/types-6-0'
import { ReactNode } from 'react'
import Button, { ButtonProps } from './Button'

export default {
   title: 'Atoms/Button',
   component: Button,
   argTypes: {
      children: {
         type: 'string',
         defaultValue: 'button',
      },
   },
} as Meta

export const Primary: Story<ButtonProps> = ({ children, variant }) => <Button variant={variant}>{children}</Button>
