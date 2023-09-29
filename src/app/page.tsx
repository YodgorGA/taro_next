import {FC} from 'react';
import S from './main.module.scss';
import { Button } from '@/shared';
import Image from 'next/image';
import SandClock from '@/assets/images/sandClocks.png'
import TelegramIcon from '@/assets/icons/telegram 1.png'
import EmaiIcon from '@/assets/icons/email 1.png'

interface MainPageProps {
    
}

export const MainPage:FC<MainPageProps> = ({...MainPageProps}) =>{
    
    return ( 
        <main className={S.main_container}>
            <div className={S.backgroundImage_container}>
              {/*DARK SPHERE*/}
              {/*LIGHT SPHERE*/}
            </div>
            {/*HEADER z-index:6*/}
            <div className={S.pageContent}>
                <div className={S.hero_container}>
                    {/*LOGO*/}
                    <div className={S.contactUs_container}>
                        <Image src={TelegramIcon} alt="Contact us on Telegram" className="contactUs_image" />
                        <Image src={EmaiIcon} alt="Contact us on mail" className="contactUs_image" />
                    </div>
                    <div className={S.description_container}>
                        <p>Краткое и заманивающее описание услуг</p>
                    </div>
                </div>
                <div className={S.mainImage_container}>
                    <div className="divider"></div>
                    <Image src={SandClock} alt="Портал магии" className={S.sandclockImage}/>
                    <div className={S.brandname_container}>
                        <p>Портал магии</p>
                    </div>
                </div>
                <div className={S.buttons_container}>
                    <Button>Регистрация</Button>
                    <Button>Купить амулет</Button>
                </div>

            </div>

        </main>
    )
}

export default MainPage

