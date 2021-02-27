import { FC } from 'react'
import clsx from 'clsx'

export interface AvatarProps {
   image: string
   name: string
   online?: boolean
   withText?: boolean
}

const Avatar: FC<AvatarProps> = ({ image, name, withText, online }) => {
   const imageClassNames =
      'w-12 h-12 rounded-full object-cover ring-1 ring-gray-50 ring-offset-2 bg-gray-50 overflow-hidden border-none'
   return (
      <div className="flex items-center relative">
         {image ? <img src={image} className={imageClassNames} /> : <div className={imageClassNames} />}
         <span
            className={clsx('absolute w-3 h-3 left-0 bottom-0 rounded-full ring-2 ring-white', {
               'bg-gray-50': !online,
               'bg-green': online,
            })}
         />
         {withText && <p className="ml-2 text-gray-800 font-medium">{name}</p>}
      </div>
   )
}

export default Avatar
