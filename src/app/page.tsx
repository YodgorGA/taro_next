import {FC} from 'react';
import S from './main.module.scss';
import Image from 'next/image';
import SandClock from '/public/assets/images/sandClocks.png'
import { Header } from '@/components/widgets';
import { Footer } from '@/components/shared';
import Darkball from '/public/assets/images/dbl.png';
import Lightball from '/public/assets/images/lbl.png';
import TaroCardIcon from '/public/assets/icons/taro.png';
import DreamcatcherIcon from '/public/assets/icons/dreamcatcher.png';
import NubmerologyIcon from '/public/assets/icons/numerology.png';

interface MainPageProps {
    
}

const MainPage:FC<MainPageProps> = ({...MainPageProps}) =>{
    
    return ( 
        <main className={S.main_container}>
            <div className={S.backgroundImage_container}>
                <div className={S.backgroundImage_darkSphere}>
                    
                    <Image priority fill sizes={'(min-width:640px) fit-content,(max-width:640px) 25vh'} src={Darkball} alt={''}/>
                </div>
                <div className={S.backgroundImage_lightSphere}>
                    <Image priority fill sizes={'(min-width:640px) fit-content,(max-width:640px) 25vh'} src={Lightball} alt={''}/>
                </div>
            </div>
            <Header/>
            <div className={S.pageContent}>
                <div className={S.welcomeText}>
                    <p>Добро пожаловать на Портал магии</p>
                </div>
                <div className={S.image_container}>
                    <Image priority src={SandClock} alt="Портал магии" className={S.sandclockImage}/>
                </div>
                <div className={S.aboutText}>
                    <div className={S.aboutText_heroText}>
                        <p>Давайте вместе исследовать тайны и магию мира Таро, нумерологии и снов. Портал магии - ваш источник для понимания и самопознания через эти увлекательные искусства.</p>
                    </div>
                </div>
                <div className={S.offers}>
                    <div className={S.offers_header}>
                        <p>Что мы предлагаем?</p>
                    </div>
                    <div className={S.offers_list}>
                        <li className={S.offers_listItem}><div className={S.listItemImg_container}><Image fill sizes='' src={TaroCardIcon} alt={"https://www.flaticon.com/ru/free-icons/"}/></div><p><span style={{color:'#E5C59E'}}>Таро:</span> Разгадайте символику карт Таро, предсказывайте будущее и познайте себя с помощью мудрости старинных карт</p></li>
                        <li className={S.offers_listItem}><div className={S.listItemImg_container}><Image fill sizes='' src={NubmerologyIcon } alt={"https://www.flaticon.com/ru/free-icons/"}/></div><p><span style={{color:'#E5C59E'}}>Нумерология:</span> Понимайте, как числа влияют на вашу жизнь и открывают вам путь к самопознанию</p></li>
                        <li className={S.offers_listItem}><div className={S.listItemImg_container}><Image fill sizes='' src={DreamcatcherIcon} alt={"https://www.flaticon.com/ru/free-icons/"}/></div><p><span style={{color:'#E5C59E'}}>Сонник:</span> Интерпретируйте ваши сновидения, раскрывайте их смысл и получайте ценные инсайты.</p></li>
                    </div>
                </div>
                <div className={S.purposes}>
                    <div className={S.purposes_header}>
                        <p>Почему выбрать Портал магии?</p>
                    </div>
                    <div className={S.purposes_list}>
                        <li><span style={{color:'#E5C59E'}}>Глубокие знания:</span> Мы являемся экспертами в области Таро, нумерологии и снов, и предлагаем качественные услуги и анализ</li>
                        <li><span style={{color:'#E5C59E'}}>Точность:</span> Наши алгоритмы обеспечивают точные и надежные результаты в интерпретации Таро, чисел и снов</li>
                        <li><span style={{color:'#E5C59E'}}>Конфиденциальность:</span> Ваша конфиденциальность у нас на первом месте, и мы гарантируем полную безопасность ваших данных</li>
                        <li><span style={{color:'#E5C59E'}}>Индивидуальный подход:</span> Мы адаптируем наши услуги к вашим уникальным потребностям</li>
                    </div>
                    <div className={S.afterall}>
                        <div className={S.afterall_description}>
                            <p>
                                Если вы готовы начать путь самопознания с использованием современных технологий, свяжитесь с нами прямо сейчас. Наши алгоритмы готовы помочь вам исследовать мир Таро, нумерологии и снов, и разгадывать тайны вашей жизни.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className={S.buttons_container}>
                    <div className={S.button__shop}><Link href={'/magic-shop'}>Купить амулет</Link></div>
                </div> */}
                <Footer/>
            </div>

        </main>
    )
}

export default MainPage

