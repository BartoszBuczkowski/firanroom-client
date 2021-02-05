import clsx from 'clsx'
import { FC, ReactNode } from 'react'

export interface TextProps {
   variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'
   children: ReactNode
   className?: string
}

const Text: FC<TextProps> = ({ variant, children, className }) => {
   function switchText(variant: TextProps['variant']) {
      switch (variant) {
         case 'h1':
            return (
               <h1 className={clsx({ ['text-gray-800 text-4xl font-medium']: !className, className: !!className })}>
                  {children}
               </h1>
            )
         case 'h2':
            return (
               <h2 className={clsx({ ['text-gray-800 text-3xl font-medium']: !className, className: !!className })}>
                  {children}
               </h2>
            )
         case 'h3':
            return (
               <h3 className={clsx({ ['text-gray-800 text-2xl font-medium']: !className, className: !!className })}>
                  {children}
               </h3>
            )
         case 'h4':
            return (
               <h4 className={clsx({ ['text-gray-800 text-xl font-medium']: !className, className: !!className })}>
                  {children}
               </h4>
            )
         case 'h5':
            return (
               <h5 className={clsx({ ['text-gray-800 text-lg font-medium']: !className, className: !!className })}>
                  {children}
               </h5>
            )
         case 'p':
            return <p className={clsx({ ['text-gray-800']: !className, className: !!className })}>{children}</p>
      }
   }
   return <>{switchText(variant)}</>
}

export default Text
