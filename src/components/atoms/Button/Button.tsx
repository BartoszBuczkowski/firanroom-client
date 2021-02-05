import { FC, ReactNode } from 'react'
import clsx from 'clsx'
import css from './Button.module.scss'

export interface ButtonProps {
   children: ReactNode
   variant: 'primary' | 'secondary' | 'secondary-alt'
   fullWidth?: boolean
}

const Button: FC<ButtonProps> = ({ children, variant, fullWidth }) => {
   return (
      <button
         className={clsx(css.button, {
            [css['button--primary']]: variant === 'primary',
            [css['button--secondary']]: variant === 'secondary',
            [css['button--secondary-alt']]: variant === 'secondary-alt',
            'w-full': fullWidth,
         })}
      >
         {children}
      </button>
   )
}

export default Button
