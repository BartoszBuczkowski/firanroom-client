import { FC, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'

export interface ButtonProps {
   children: ReactNode
   variant: 'primary' | 'secondary' | 'secondary-alt'
}

const Button: FC<ButtonProps> = ({ children, variant }) => {
   return (
      <button
         className={clsx(styles['button'], {
            [styles['primary']]: variant === 'primary',
            [styles['secondary']]: variant === 'secondary',
            [styles['secondary-alt']]: variant === 'secondary-alt',
         })}
      >
         {children}
      </button>
   )
}

export default Button
