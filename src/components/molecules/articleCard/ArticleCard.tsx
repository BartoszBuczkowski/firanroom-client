import Avatar from '@/atoms/Avatar/Avatar'
import { FC } from 'react'
import formatDate from '@/utils/formatDate'
import Text from '@/atoms/Text/Text'

interface ArticleCardProps {
   image: string
   title: string
   description: string
   commentsNumber: number
   createdAt: string
   liked: boolean
   author: string
   authorAvatar: string
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
}) => {
   return (
      <div className="max-w-3xl border border-gray-50 rounded-md p-2">
         <div className="flex items-center justify-between mb-2">
            <Avatar image={authorAvatar} name={author} withText />
            <p className="text-2xs text-gray-700">Dodano: {formatDate(createdAt)}</p>
         </div>
         <img src={image} alt={title} className="w-full rounded-md max-h-52 object-cover" />
         <div className="flex flex-col space-y-2 my-2 mx-4">
            <Text variant="h1">{title}</Text>
            <Text variant="p">{description}</Text>
         </div>
         <div className="flex mx-4 justify-between text-xs">
            <span>Komentarzy: {commentsNumber}</span>
            <span>{liked && 'lubisz to'}</span>
         </div>
      </div>
   )
}

export default ArticleCard
