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
                                <img style={{position:'absolute',top:0,left:0,right:0,bottom:0,width:'100%',height:'100%'}} src={Darkball.src} alt=''/>
                            </div>
                        </div>
                        <div className={S.lightBall}>
                            <div className={S.lightBall_container}>
                                <img style={{position:'absolute',top:0,left:0,right:0,bottom:0,width:'100%',height:'100%'}} src={Lightball.src} alt=''/>
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

