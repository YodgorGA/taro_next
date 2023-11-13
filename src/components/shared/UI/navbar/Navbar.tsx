import {FC} from 'react';
import S from './navbar.module.scss';
import Link from 'next/link';

interface NavbarProps {
    
}

export const Navbar:FC<NavbarProps> = ({...NavbarProps}) =>{
    
    return ( 
        <nav className={S.nav_container}>
            <ul className={S.nav_items}>
            {/* <li key={Math.random()}><Link href={'/magic-shop'}>Лавка магии</Link></li> */}
            <li key={Math.random()}><Link href={'/'}>Главная</Link></li>
            <li key={Math.random()}><Link href={'/taro'}>Таро</Link></li>
            <li key={Math.random()}><Link href={'/numerology'}>Нумерология</Link></li>
            <li key={Math.random()}><Link href={'/dreamcatcher'}>Сонник</Link></li>
            <li key={Math.random()}><Link href={'/about'}>История</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar

