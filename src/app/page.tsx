import {FC} from 'react';
import S from './main.module.scss';
import Image from 'next/image';
import SandClock from '/public/assets/images/sandClocks.png'
import TelegramIcon from '/public/assets/icons/telegram 1.png'
import EmaiIcon from '/public/assets/icons/email 1.png'
import Logo from '/public/assets/icons/magic_portal.png'
import { Header } from '@/components/widgets';
import { StoreUpdater } from '@/components/shared';

interface MainPageProps {
    
}

export const MainPage:FC<MainPageProps> = ({...MainPageProps}) =>{
    
    return ( 
        <main className={S.main_container}>
            <StoreUpdater/>
            <div className={S.backgroundImage_container}>
              {/*DARK SPHERE*/}
              {/*LIGHT SPHERE*/}
            </div>
            <Header/>
            <div className={S.pageContent}>
                <div className={S.hero_container}>
                    <div className={S.logo_container}>
                        <Image alt="Портал магии" src={Logo} fill/>
                    </div>
                    <div className={S.contactUs_container}>
                        <Image src={TelegramIcon} alt="Contact us on Telegram" className="contactUs_image" />
                        <Image src={EmaiIcon} alt="Contact us on mail" className="contactUs_image" />
                    </div>
                    <div className={S.description_container}>
                        <p>Краткое и заманивающее описание услуг</p>
                    </div>
                </div>
                <div className={S.image_container}>
                    <div className={S.divider}></div>
                    <Image src={SandClock} alt="Портал магии" className={S.sandclockImage}/>
                    <div className={S.brandname_container}>
                        <p>Портал магии</p>
                    </div>
                </div>
                <div className={S.buttons_container}>
                    <div className={S.button__shop}>Купить амулет</div>
                </div>

            </div>

        </main>
    )
}

export default MainPage

