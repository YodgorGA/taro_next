
"use client"
import {FC, useState} from 'react';
import S from './burger.module.scss';
import Image from 'next/image';
import BurgerImage from '/public/assets/icons/Burger.svg'
import Link from 'next/link';

interface BurgerProps {
    
}

export const Burger:FC<BurgerProps> = ({...BurgerProps}) =>{
    const [isModalOpen,setIsModalOpen] = useState<boolean>(false);
    const burgerClickHandler = () =>{
        console.log('click')
        isModalOpen === true? setIsModalOpen(false):setIsModalOpen(true)
    }
    return (
        <>
            <div onClick={burgerClickHandler} className={S.burger_container}>
                <Image width={48} height={25} alt='Burger button' src={BurgerImage}/>
            </div>
            {
                isModalOpen && 
                <div className={S.modal_container}>
                    <ul className={S.modal_navlist}>
                        <li key={Math.random()}><Link href={'/taro'}>Таро</Link></li>
                        <li key={Math.random()}><Link href={'/about'}>История</Link></li>
                        <li key={Math.random()}><Link href={'/numerology'}>Нумерология</Link></li>
                        <li key={Math.random()}><Link href={'/dreamcatcher'}>Сонник</Link></li>
                        <li key={Math.random()}><Link href={'/magic-shop'}>Лавка магии</Link></li>
                    </ul>
                </div>
            }

        </>

    )
}

export default Burger

