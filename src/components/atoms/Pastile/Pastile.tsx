import clsx from 'clsx'
import { FC } from 'react'

export interface PastileProps {
   color: 'primary' | 'secondary'
   children: string
}

const Pastile: FC<PastileProps> = ({ children, color }) => {
   return (
      <button
         className={clsx(
            'bg-transparent border rounded-xl text-xs px-3 py-0.5 lowercase opacity-75 hover:opacity-100',
            {
               'border-gray-200 text-gray-800': color === 'primary',
            },
         )}
      >
         {children}
      </button>
   )
}

export default Pastile
