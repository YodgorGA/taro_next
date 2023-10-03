import {FC} from 'react';
import S from './navbar.module.scss';

interface NavbarProps {
    
}

export const Navbar:FC<NavbarProps> = ({...NavbarProps}) =>{
    
    return ( 
        <nav className={S.nav_container}>
            <ul className={S.nav_items}>
                <li>Таро</li>
                <li>История</li>
                <li>Нумерология</li>
                <li>Лавка магии</li>
            </ul>
        </nav>
    )
}

export default Navbar

