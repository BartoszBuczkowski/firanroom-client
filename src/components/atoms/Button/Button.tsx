import { FC } from 'react';

const Button: FC<{ text?: string }> = ({ text }) => {
   return <button>a{text}</button>;
};

export default Button;
