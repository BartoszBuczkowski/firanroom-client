import { FC } from 'react'
import clsx from 'clsx'
import css from './Avatar.module.scss'

export interface AvatarProps {
   image: string
   name: string
   online?: boolean
   withText?: boolean
}

const Avatar: FC<AvatarProps> = ({ image, name, withText, online }) => {
   return (
      <div className="flex items-center relative">
         <img src={image} className={css.image} />
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
