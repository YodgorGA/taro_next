import {FC} from 'react';
import S from './about.module.scss';
import CandleImage from '/public/assets/images/about_candles.png';
import CardsImage from '/public/assets/images/about_cards.png';
import Star from '/public/assets/icons/Star 1.svg'
import Image from 'next/image';
import { Title } from '@/components/shared';

interface AboutPageProps {
    
}

const AboutPage:FC<AboutPageProps> = ({...AboutPageProps}) =>{
    
    return ( 
<section className={S.container}>
            <Title>О нас</Title>
            <div className={S.content}>
                <div className={S.hero}>
                    <div className={S.text}>
                        <div className={S.text_content}>
                            Мы - команда профессиональных разработчиков и аналитиков, увлеченных миром Таро, нумерологии и сонников. Мы объединили свои усилия, чтобы создать уникальные алгоритмы и инструменты, которые помогут вам исследовать и понимать тайны вашей жизни
                        </div>
                    </div>
                    <div className={S.images}>
                        <div className={S.image_container}>
                            <div className={S.image_candle}>
                                <Image fill sizes='' src={CandleImage} alt='candles'/>
                            </div>
                            <div className={S.image_cards}>
                                <Image fill sizes='' src={CardsImage} alt='cards'/>
                            </div>
                        </div>
                        <div className={S.star}>
                                <Image fill sizes='' src={Star} alt=''/>
                        </div>
                    </div>
                </div>
                <div className={S.services_container}>
                    <div className={S.services_header}>
                        <p>Наши алгоритмы</p>
                    </div>
                    <div className={S.services_description}>
                        <p>Мы разработали мощные алгоритмы, основанные на глубоких исследованиях в области Таро, нумерологии и сонников. Наши алгоритмы позволяют вам:</p>
                    </div>
                    <ul className={S.services_list}>
                        <li><span style={{color:'#E5C59E'}}>Таро-анализ:</span> Наши алгоритмы анализируют ваши вопросы и предсказывают результаты с использованием символики Таро</li>
                        <li><span style={{color:'#E5C59E'}}>Числовой анализ:</span> Мы предоставляем инсайты, основанные на числах в вашей жизни, помогая вам понимать их влияние</li>
                        <li><span style={{color:'#E5C59E'}}>Сонный анализ:</span> Наши алгоритмы помогут вам интерпретировать значения ваших снов и их связь с вашим подсознанием</li>
                    </ul>
                </div>
                <div className={S.purposes_container}>
                    <div className={S.purposes_header}>
                        <p>Почему выбирать нас?</p>
                    </div>
                    <div className={S.purposes_list}>
                        <li><span style={{color:'#E5C59E'}}>Технологии будущего:</span> Мы используем передовые технологии и алгоритмы для достижения точных результатов</li>
                        <li><span style={{color:'#E5C59E'}}>Конфиденциальность:</span> Ваша конфиденциальность важна для нас, и мы гарантируем полную безопасность ваших данных</li>
                        <li><span style={{color:'#E5C59E'}}>Индивидуальный подход:</span> Мы адаптируем наши услуги к вашим уникальным потребностям</li>
                        <li><span style={{color:'#E5C59E'}}>Результаты:</span> Мы стремимся предоставлять вам ценные инсайты и помогать вам принимать важные решения</li>
                    </div>
                    <div className={S.afterall_container}>
                        <div className={S.afterall_description}>
                            <p>
                            Если вы готовы начать путь самопознания с использованием современных технологий, свяжитесь с нами прямо сейчас. Наши алгоритмы готовы помочь вам исследовать мир Таро, нумерологии и снов, и разгадывать тайны вашей жизни.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage

