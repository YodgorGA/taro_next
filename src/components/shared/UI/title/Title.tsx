import {FC} from 'react';
import S from './title.module.scss';

interface TitleProps {
    children:React.ReactNode
}

export const Title:FC<TitleProps> = ({children,...TitleProps}) =>{
    
    return ( 
        <label className={S.title}>
            {children}
        </label>
    )
}

export default Title

