import { FC, ReactNode } from 'react'
import css from './HorizontalContentWrapper.module.scss'

export interface HorizontalContentWrapperProps {
   children: ReactNode[]
}

const HorizontalContentWrapper: FC<HorizontalContentWrapperProps> = ({ children }) => {
   return (
      <div className={css.wrapper}>
         <button className="absolute">left</button>
         <button className="absolute">right</button>

         {children}
      </div>
   )
}

export default HorizontalContentWrapper
