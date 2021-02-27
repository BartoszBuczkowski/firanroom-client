import { FC, ReactNode } from 'react'
import css from './HorizontalContentWrapper.module.scss'

interface HorizontalContentWrapper {
   children: ReactNode[]
}

const HorizontalContentWrapper: FC = ({ children }) => {
   return (
      <div className={css.wrapper}>
         <button className="absolute">left</button>
         <button className="absolute">right</button>
         <div className={css['wrapper-content']}>{children}</div>
      </div>
   )
}

export default HorizontalContentWrapper
