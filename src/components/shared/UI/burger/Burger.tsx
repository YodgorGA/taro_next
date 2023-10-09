
"use client"
import {FC, useState} from 'react';
import S from './burger.module.scss';
import Image from 'next/image';
import BurgerImage from '/public/assets/icons/Burger.svg'

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
                        <li key={Math.random()}>Таро</li>
                        <li key={Math.random()}>История</li>
                        <li key={Math.random()}>Нумерология</li>
                        <li key={Math.random()}>Лавка магии</li>
                    </ul>
                </div>
            }

        </>

    )
}

export default Burger

