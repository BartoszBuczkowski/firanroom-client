import { FC } from 'react'

const HorizontalContentWrapper: FC = ({ children }) => {
   return (
      <div className="relative">
         <button className="absolute">left</button>
         <button className="absolute">right</button>
         {children}
      </div>
   )
}

export default HorizontalContentWrapper
