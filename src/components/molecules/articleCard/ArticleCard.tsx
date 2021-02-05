import { FC } from 'react'

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
      <div>
         <div className="flex">
            <div className="flex">
               <img src={authorAvatar} alt={author} />
               <p>{author}</p>
            </div>
            <div>{createdAt}</div>
         </div>
         <img src={image} alt={title} />
         <h1>{title}</h1>
         <h3>{description}</h3>
         <span>{commentsNumber}</span>
         <span>{liked}</span>
      </div>
   )
}

export default ArticleCard
