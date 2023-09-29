import {FC} from 'react';
import S from './button.module.scss';

interface ButtonProps {
    children:React.ReactNode;
}

export const Button:FC<ButtonProps> = ({children,...ButtonProps}) =>{
    
    return ( 
        <div className={S.button}>
            {children}
        </div>
    )
}

export default Button

