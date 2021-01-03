import { FC, ReactNode } from 'react'

interface TextProps {
   variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'
   children: ReactNode
   className: string
}

const Text: FC<TextProps> = ({ variant, children, className }) => {
   const defaultStyles = 'text-gray-900 dark:text-gray-50'

   function switchText(variant: TextProps['variant']) {
      const isCustomClassName = !!className ? className : defaultStyles
      switch (variant) {
         case 'h1':
            return <h1 className={isCustomClassName}>{children}</h1>
         case 'h2':
            return <h2 className={isCustomClassName}>{children}</h2>
         case 'h3':
            return <h3 className={isCustomClassName}>{children}</h3>
         case 'h4':
            return <h4 className={isCustomClassName}>{children}</h4>
         case 'h5':
            return <h5 className={isCustomClassName}>{children}</h5>
         case 'p':
            return <p className={isCustomClassName}>{children}</p>
      }
   }
   return <>{switchText(variant)}</>
}

export default Text
