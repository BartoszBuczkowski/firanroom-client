import { Meta, Story } from '@storybook/react/types-6-0'
import getArticle from '@/factories/getArticle'
import _ArticleCard from '../ArticleCard'
import makeArray from '@/utils/makeArray'
import { Article } from 'src/ts/article'

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
const articles: Article[] = makeArray(8, getArticle)

const { image, title, description, author, authorAvatar, createdAt, commentsNumber, liked, tags } = article

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
      tags={tags}
   />
)

export const ArticlesGrid: Story = () => (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {articles.map((article, index) => {
         const { image, title, description, author, authorAvatar, createdAt, commentsNumber, liked, tags } = article
         console.log(tags)
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
               tags={tags}
            />
         )
      })}
   </div>
)
