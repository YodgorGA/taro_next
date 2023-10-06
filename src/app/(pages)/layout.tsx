import {FC} from 'react';
import S from './layout.module.scss';
import Image from 'next/image'
import Darkball from '/public/assets/images/dbl.png';
import Lightball from '/public/assets/images/lbl.png';

interface LayoutProps {
    children:React.ReactNode,
}

export const Layout:FC<LayoutProps> = ({children,...LayoutProps}) =>{
    
    return ( 
        <>
            <div className={S.layout_container}>
                <div className={S.layout_background}>
                    <div className={S.darkBall_container}>
                        <Image fill src={Darkball} alt=''/>
                    </div>
                    <div className={S.lightBall_container}>
                        <Image fill src={Lightball} alt=''/>
                    </div>
                </div>
                {children}
            </div>
        </>
    )
}

export default Layout

