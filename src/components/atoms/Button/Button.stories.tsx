import { Meta, Story } from '@storybook/react/types-6-0'
import _Button, { ButtonProps } from './Button'

export default {
   title: 'Atoms/Button',
   component: _Button,
   decorators: [
      (Story) => (
         <div className="p-4">
            <Story />
         </div>
      ),
   ],
   argTypes: {
      children: {
         type: 'string',
         defaultValue: 'button',
      },
      variant: {
         defaultValue: 'primary',
      },
      fullWidth: {
         type: 'boolean',
      },
   },
} as Meta

export const Button: Story<ButtonProps> = ({ children, variant, fullWidth }) => (
   <_Button variant={variant} fullWidth={fullWidth}>
      {children}
   </_Button>
)
