export interface Article {
   image: string
   title: string
   description: string
   author: string
   authorAvatar: string
   createdAt: string
   commentsNumber: number
   liked: boolean
   tags: { id: number; name: string; link: string }[]
}
