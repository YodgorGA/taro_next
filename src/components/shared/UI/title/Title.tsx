import {FC} from 'react';
import S from './title.module.scss';
import Image from 'next/image';
import Arrow from '/public/assets/icons/Arrow.svg';
import Link from 'next/link';

interface TitleProps {
    children:React.ReactNode
}

export const Title:FC<TitleProps> = ({children,...TitleProps}) =>{
    
    return ( 
        <label className={S.title}>
            <div className={S.title_backArrow}>
                <Link href='/'><Image width={40} height={30} src={Arrow} alt=''/></Link>
            </div>
            {children}
        </label>
    )
}

export default Title

