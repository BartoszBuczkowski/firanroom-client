import Avatar from '@/atoms/Avatar/Avatar'
import { FC } from 'react'
import formatDate from '@/utils/formatDate'
import Text from '@/atoms/Text/Text'
import HorizontalContentWrapper from '../HorizontalContentWrapper/HorizontalContentWrapper'
import Pastile from '@/atoms/Pastile/Pastile'
import { Article } from 'src/ts/article'

export interface ArticleCardProps {
   image: string
   title: string
   description: string
   commentsNumber: number
   createdAt: string
   liked: boolean
   author: string
   authorAvatar: string
   tags: Article['tags']
}

const ArticleCard: FC<ArticleCardProps> = ({
   image,
   title,
   description,
   commentsNumber,
   createdAt,
   liked,
   authorAvatar,
   author,
   tags,
}) => {
   return (
      <div className="flex flex-col space-y-4 border border-gray-50 rounded-md p-4">
         <div className="flex items-center justify-between mb-2">
            <Avatar image={authorAvatar} name={author} withText online />
            <p className="text-2xs text-gray-700">Dodano: {formatDate(createdAt)}</p>
         </div>
         <img src={image} alt={title} className="w-full rounded-md max-h-60 object-contain bg-gray-20" />
         <div className="flex flex-col space-y-2 my-2 mx-4">
            <Text variant="h1">{title}</Text>
            <Text variant="p">{description}</Text>
         </div>
         <div className="mx-3">
            <HorizontalContentWrapper>
               {tags.map(({ id, name }) => (
                  <div key={id} className="w-min mx-1">
                     <Pastile color="primary">{name}</Pastile>
                  </div>
               ))}
            </HorizontalContentWrapper>
         </div>
         <div className="flex mx-4 justify-between text-xs">
            <span>Komentarzy: {commentsNumber}</span>
            <span>{liked && 'lubisz to'}</span>
         </div>
      </div>
   )
}

export default ArticleCard
