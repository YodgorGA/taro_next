import {FC} from 'react';
import S from './cross.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import CrossImage from '/public/assets/icons/Cross.png'

interface CrossProps {
    href:string
}

export const Cross:FC<CrossProps> = ({href,...CrossProps}) =>{
    
    return ( 
        <div className={S.cross_container}>
            <div className={S.cross}>
                <Link href={href}>
                    <Image width={48} height={48} src={CrossImage} alt='Close'/>
                </Link>
            </div>
        </div>
    )
}

export default Cross

