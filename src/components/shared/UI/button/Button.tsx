import {FC} from 'react';
import S from './button.module.scss';

interface ButtonProps {
    children:React.ReactNode;
    clickHandler:()=>void;
}

export const Button:FC<ButtonProps> = ({clickHandler,children,...ButtonProps}) =>{
    
    return ( 
        <button onClick={clickHandler} className={S.button}>
            {children}
        </button>
    )
}

export default Button

