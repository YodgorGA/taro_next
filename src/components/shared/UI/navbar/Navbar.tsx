import {FC} from 'react';
import S from './navbar.module.scss';

interface NavbarProps {
    
}

export const Navbar:FC<NavbarProps> = ({...NavbarProps}) =>{
    
    return ( 
        <nav className={S.nav_container}>
            <ul className={S.nav_items}>
                <li>история</li>
                <li>таро</li>
                <li>нумерология</li>
                <li>лавка магии</li>
            </ul>
        </nav>
    )
}

export default Navbar

