import { Meta, Story } from '@storybook/react/types-6-0'
import _Avatar, { AvatarProps } from '../Avatar'
import faker from 'faker'

export default {
   title: 'Atoms/Avatar',
   component: _Avatar,
   decorators: [
      (Story) => (
         <div className="p-4">
            <Story />
         </div>
      ),
   ],
   argTypes: {
      image: {
         type: 'string',
         defaultValue: faker.image.nature(),
      },
      name: {
         defaultValue: faker.random.word(),
      },
      withText: {
         type: 'boolean',
         defaultValue: true,
      },
   },
} as Meta

export const Avatar: Story<AvatarProps> = ({ image, name, withText }) => (
   <_Avatar image={image} name={name} withText={withText} />
)
