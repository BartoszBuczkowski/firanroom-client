import { FC } from 'react'

export interface AvatarProps {
   image: string
   name: string
   withText?: boolean
}

const Avatar: FC<AvatarProps> = ({ image, name, withText }) => {
   return (
      <div className="flex items-center">
         <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
         {withText && <p className="ml-2 text-gray-800 font-medium">{name}</p>}
      </div>
   )
}

export default Avatar
