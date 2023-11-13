import {FC} from 'react';
import S from './layout.module.scss';
import Image from 'next/image'
import Darkball from '/public/assets/images/dbl.png';
import Lightball from '/public/assets/images/lbl.png';
import { Header } from '@/components/widgets';
import { Footer } from '@/components/shared';

interface LayoutProps {
    children:React.ReactNode,
}

export const Layout:FC<LayoutProps> = ({children,...LayoutProps}) =>{
    
    return ( 
        <>  
            <div className={S.layout_container}>
                <Header/>
                <div className={S.layout_background}>
                    <div className={S.background_container}>
                        <div className={S.darkBall}>
                            <div className={S.darkBall_container}>
                                <Image fill src={Darkball} alt=''/>
                            </div>
                        </div>
                        <div className={S.lightBall}>
                            <div className={S.lightBall_container}>
                                <Image fill src={Lightball} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
                {children}
                <Footer/>
            </div>
        </>
    )
}

export default Layout

