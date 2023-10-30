import {FC} from 'react';
import S from './taro.module.scss';
import Image from 'next/image';
import Taro1 from '/public/assets/images/taroLeft.png';
import Taro2 from '/public/assets/images/taroRight.png';
import { FormModal } from '@/components/widgets';
import {Title } from '@/components/shared';


interface TaroPageProps {
    
}



export const TaroPage:FC<TaroPageProps> = ({...TaroPageProps}) =>{
    
    return ( 
        <section className={S.container}>
            <Title children='Сквозь карты к самопознанию'/>
            <div className={S.content}>
                <div className={S.withImage__top}>
                    <div className={S.withImage_text}>
                        <div className={S.withImage_description}>
                            <p>Добро пожаловать на страницу, посвященную Таро, одному из самых загадочных и увлекательных методов предсказания и самопознания. Мы предоставляем вам уникальный доступ к этой древней искусственной системе, помогая вам раскрывать тайны вашей жизни через карты Таро.</p>
                        </div>
                    </div>
                    <div className={S.withImage_image}>
                        <Image fill src={Taro1} alt=''/>
                    </div>
                </div>
                <div className={S.withImage__bottom}>
                    <div className={S.withImage_image}>
                        <Image fill src={Taro2} alt=''/>
                    </div>
                    <div className={S.withImage_text}>
                        <div className={S.withImage_title}>
                            <p>Что такое таро?</p>
                        </div>
                        <div className={S.withImage_description}>
                            <p>Таро - это колода карт, состоящая из 78 карточек, каждая из которых обладает своей уникальной символикой. Эти карты используются для глубокого анализа, предсказания будущего и самопознания. Они могут раскрывать скрытые аспекты вашей жизни и помогать вам принимать более осознанные решения.</p>
                        </div>
                    </div>

                </div>

                <div className={S.services_container}>
                    <div className={S.services_header}>
                        <p>Наши услуги по Таро</p>
                    </div>
                    <ul className={S.services_list}>
                        <li><span style={{color:'#E5C59E'}}>Любовь и отношения:</span> Раскройте динамику ваших отношений и поймите, какие шаги следует предпринять, чтобы улучшить вашу личную жизнь.</li>
                        <li><span style={{color:'#E5C59E'}}>Карьера и финансы:</span> Узнайте, какие возможности и вызовы ждут вас в сфере карьеры и финансов.</li>
                        <li><span style={{color:'#E5C59E'}}>Личное развитие:</span> Получите глубокое понимание своей личности и усилий, необходимых для личного роста.</li>
                    </ul>
                </div>
                <div className={S.purposes_container}>
                    <div className={S.purposes_header}>
                        <p>Почему выбирать Таро?</p>
                    </div>
                    <div className={S.purposes_description}>
                        <p><span style={{color:'#E5C59E'}}>Таро</span> - это не только способ предсказания будущего, но и инструмент самопознания. Важно отметить, что наши алгоритмы анализа Таро разработаны с использованием передовых технологий и глубоких знаний в этой области. Причины выбрать нас включают:</p>
                    </div>
                    <div className={S.purposes_list}>
                        <li><span style={{color:'#E5C59E'}}>Точность:</span> Наши алгоритмы обеспечивают точные и надежные результаты.</li>
                        <li><span style={{color:'#E5C59E'}}>Конфиденциальность:</span> Ваша конфиденциальность важна для нас, и мы гарантируем полную безопасность ваших данных.</li>
                        <li><span style={{color:'#E5C59E'}}>Индивидуальный подход:</span> Мы адаптируем наши услуги к вашим уникальным потребностям.</li>
                        <li><span style={{color:'#E5C59E'}}>Результаты:</span> Мы стремимся предоставлять вам ценные инсайты и помогать вам принимать важные решения.</li>
                    </div>
                    <div className={S.afterall_container}>
                        <div className={S.afterall_header}>
                            <p>Начните свой путь с Таро</p>
                        </div>
                        <div className={S.afterall_description}>
                            <p>
                                Если вы готовы исследовать мир Таро и понять, какие тайны и возможности он может раскрыть в вашей жизни, кликните по кнопке ниже, чтобы начать свое путешествие к самопознанию через карты Таро
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FormModal href='/taro/processing'/>
        </section>
    )
}

export default TaroPage

