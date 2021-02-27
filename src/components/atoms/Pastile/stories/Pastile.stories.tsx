import { Meta, Story } from '@storybook/react/types-6-0'
import _Pastile, { PastileProps } from '../Pastile'

export default {
   title: 'Atoms/Pastile',
   component: _Pastile,
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
         defaultValue: 'Pastile',
      },
      color: {
         defaultValue: 'primary',
      },
   },
} as Meta

export const Pastile: Story<PastileProps> = ({ children, color }) => <_Pastile color={color}>{children}</_Pastile>
