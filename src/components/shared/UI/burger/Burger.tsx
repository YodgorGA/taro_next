
"use client"
import {FC} from 'react';
import S from './burger.module.scss';
import Image from 'next/image';
import BurgerImage from '/public/assets/icons/Burger.svg'

interface BurgerProps {
    
}

export const Burger:FC<BurgerProps> = ({...BurgerProps}) =>{
    
    return ( 
        <div className={S.burger_container}>
            <Image width={48} height={25} alt='Burger button' src={BurgerImage}/>
        </div>
    )
}

export default Burger

