import { Meta, Story } from '@storybook/react/types-6-0'
import _Text, { TextProps } from '../Text'

export default {
   title: 'Atoms/Text',
   component: _Text,
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
         defaultValue: 'Text value',
      },
      variant: {
         defaultValue: 'h1',
      },
      className: {
         label: 'Addjust tailwind custom class-name string',
      },
   },
} as Meta

export const Text: Story<TextProps> = ({ children, variant }) => <_Text variant={variant}>{children}</_Text>
