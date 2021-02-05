import { Meta, Story } from '@storybook/react/types-6-0'
import _ArticleCard from './ArticleCard'
import faker from 'faker'

export default {
   title: 'Molecules/ArticleCard',
   component: _ArticleCard,
   decorators: [(Story) => <Story />],
} as Meta

const article = {
   image: faker.image.fashion(),
   title: faker.random.words(),
   description: faker.lorem.paragraph(),
   author: faker.name.firstName(),
   authorAvatar: faker.image.abstract(),
   createdAt: new Date().toJSON(),
   commentsNumber: faker.random.number(100),
   liked: faker.random.arrayElement([true, false]),
}

const { image, title, description, author, authorAvatar, createdAt, commentsNumber, liked } = article

export const ArticleCard: Story = () => (
   <_ArticleCard
      image={image}
      title={title}
      description={description}
      author={author}
      authorAvatar={authorAvatar}
      createdAt={createdAt}
      commentsNumber={commentsNumber}
      liked={liked}
   />
)
