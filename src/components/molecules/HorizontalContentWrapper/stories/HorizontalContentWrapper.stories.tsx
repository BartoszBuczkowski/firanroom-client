import faker from 'faker'
import Pastile from '@/atoms/Pastile/Pastile'
import makeArray from '@/utils/makeArray'
import { Meta, Story } from '@storybook/react/types-6-0'
import _HorizontalContentWrapper, { HorizontalContentWrapperProps } from '../HorizontalContentWrapper'

export default {
   title: 'Atoms/HorizontalContentWrapper',
   component: _HorizontalContentWrapper,
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
         defaultValue: 'HorizontalContentWrapper',
      },
      color: {
         defaultValue: 'primary',
      },
   },
} as Meta

export const HorizontalContentWrapper: Story<HorizontalContentWrapperProps> = () => {
   const items = makeArray(50, () => faker.random.word())
   return (
      <_HorizontalContentWrapper>
         {items.map((item, index) => (
            <div key={index} className="w-min">
               <Pastile color="primary">{item}</Pastile>
            </div>
         ))}
      </_HorizontalContentWrapper>
   )
}
