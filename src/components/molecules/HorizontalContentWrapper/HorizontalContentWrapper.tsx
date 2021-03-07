import clsx from 'clsx'
import { FC, ReactNode, useRef } from 'react'
import css from './HorizontalContentWrapper.module.scss'

export interface HorizontalContentWrapperProps {
   children: ReactNode[]
}

const HorizontalContentWrapper: FC<HorizontalContentWrapperProps> = ({ children }) => {
   const node = useRef<HTMLDivElement>(null)

   function handleScroll(direction: 'left' | 'right') {
      if (!node.current) return
      const wrapper = node.current

      if (direction === 'left') return wrapper.scrollBy({ left: -200, behavior: 'smooth' })
      if (direction === 'right') return wrapper.scrollBy({ left: +200, behavior: 'smooth' })
   }

   return (
      <div className={css.wrapper}>
         <div
            onClick={() => handleScroll('left')}
            className={clsx(
               'transform -translate-y-1/2 top-1/2 w-11 bg-gradient-to-r from-white to-transparent',
               css['wrapper-button'],
            )}
         >
            ⟵
         </div>
         <div
            onClick={() => handleScroll('right')}
            className={clsx(
               'transform -translate-y-1/2 top-1/2 right-0 w-11 bg-gradient-to-l from-white to-transparent',
               css['wrapper-button'],
            )}
         >
            ⟶
         </div>

         <div ref={node} className={css['wrapper-content']}>
            {children}
         </div>
      </div>
   )
}

export default HorizontalContentWrapper
