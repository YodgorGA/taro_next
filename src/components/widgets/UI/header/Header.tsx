"use client"
import {FC} from 'react';
import S from './header.module.scss';
import { useDefinition } from '@/store';
import { Burger, Navbar } from '@/components/shared';

interface HeaderProps {
    
}

export const Header:FC<HeaderProps> = ({...HeaderProps}) =>{
    const isMobile = useDefinition((state)=>state.isMobile);

    return ( 
        <header className={S.header_container}>
            {
                !isMobile && <Navbar/> || <Burger/>
            } 
        </header>
    )
}

export default Header

