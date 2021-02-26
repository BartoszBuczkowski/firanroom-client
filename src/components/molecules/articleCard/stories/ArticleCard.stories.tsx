import { Meta, Story } from '@storybook/react/types-6-0'
import getArticle from '@/factories/getArticle'
import _ArticleCard from '../ArticleCard'
import makeArray from '@/utils/makeArray'

export default {
   title: 'Molecules/ArticleCard',
   component: _ArticleCard,
   decorators: [
      (Story) => (
         <div className="p-8">
            <Story />
         </div>
      ),
   ],
} as Meta

const article = getArticle()
const articles = makeArray(8, getArticle)

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

export const ArticlesGrid: Story = () => (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {articles.map((article, index) => {
         const { image, title, description, author, authorAvatar, createdAt, commentsNumber, liked } = article
         return (
            <_ArticleCard
               key={index}
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
      })}
   </div>
)
