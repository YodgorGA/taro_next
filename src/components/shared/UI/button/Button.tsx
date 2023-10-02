import {FC} from 'react';
import S from './button.module.scss';

interface ButtonProps {
    children:React.ReactNode;
    page:string;
}

export const Button:FC<ButtonProps> = ({page,children,...ButtonProps}) =>{
    
    return ( 
        <div className={`${S.button}__${page}`}>
            {children}
        </div>
    )
}

export default Button

