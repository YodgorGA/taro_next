import {FC} from 'react';
import S from './dreamcatcher.module.scss';
import { Title } from '@/components/shared';
import Image from 'next/image';
import { FormModal } from '@/components/widgets';
import dreamcatcherTop from '/public/assets/images/dreamcatcher.webp';
import dreamCatcherBottom from '/public/assets/images/dreamcatcher2.jpg';

interface DreamcatcherProps {
    
}

const Dreamcatcher:FC<DreamcatcherProps> = ({...DreamcatcherProps}) =>{
    
    return ( 
        <section className={S.container}>
            <Title >Расшифруйте символику своих снов</Title>
            <div className={S.content}>
                <div className={S.withImage__top}>
                    <div className={S.withImage_text}>
                        <div className={S.withImage_description}>
                            <p>Добро пожаловать на страницу, посвященную соннику, инструменту, который поможет вам понять символику и значения ваших снов. Мы предоставляем вам возможность исследовать тайны своего подсознания через анализ снов</p>
                        </div>
                    </div>
                    <div className={S.withImage_image}>
                        <img style={{position:'absolute',top:0,left:0,right:0,bottom:0,width:'100%',height:'100%'}} src={dreamcatcherTop.src} alt=''/>
                    </div>
                </div>
                <div className={S.withImage__bottom}>
                    <div className={S.withImage_image}>
                        <img style={{position:'absolute',top:0,left:0,right:0,bottom:0,width:'100%',height:'100%'}} src={dreamCatcherBottom.src} alt=''/>
                    </div>
                    <div className={S.withImage_text}>
                        <div className={S.withImage_title}>
                            <p>Что такое сонник?</p>
                        </div>
                        <div className={S.withImage_description}>
                            <p>Сонник - это справочник символов и интерпретаций, связанных со снами. Ваши сновидения могут содержать ключи к пониманию вашего подсознания и скрытых желаний. С помощью сонника, вы можете разгадать символику ваших снов и получать ценные инсайты</p>
                        </div>
                    </div>

                </div>

                <div className={S.services_container}>
                    <div className={S.services_header}>
                        <p>Наши услуги по соннику</p>
                    </div>
                    <div className={S.services_description}>
                        Наши алгоритмы анализа снов могут предоставить вам глубокие инсайты в различные аспекты ваших снов, включая:
                    </div>
                    <ul className={S.services_list}>
                        <li><span style={{color:'#E5C59E'}}>Интерпретация снов:</span> Мы поможем вам понять, что означают символы, события и эмоции в ваших снах</li>
                        <li><span style={{color:'#E5C59E'}}>Сонные тенденции:</span> Узнайте, какие темы и символы чаще всего появляются в ваших снах и их значения</li>
                        <li><span style={{color:'#E5C59E'}}>Советы для личного роста:</span> Мы предоставляем рекомендации, основанные на анализе ваших снов, чтобы помочь вам лучше понимать себя</li>
                    </ul>
                </div>
                <div className={S.purposes_container}>
                    <div className={S.purposes_header}>
                        <p>Почему выбирать сонник?</p>
                    </div>
                    <div className={S.purposes_description}>
                        <p><span style={{color:'#E5C59E'}}>Сонник</span> - это инструмент самопознания, который позволяет вам погрузиться в мир вашего подсознания. Причины выбрать нас включают:</p>
                    </div>
                    <div className={S.purposes_list}>
                        <li><span style={{color:'#E5C59E'}}>Точность:</span> Наши алгоритмы обеспечивают точные и надежные результаты.</li>
                        <li><span style={{color:'#E5C59E'}}>Конфиденциальность:</span> Ваша конфиденциальность важна для нас, и мы гарантируем полную безопасность ваших данных</li>
                        <li><span style={{color:'#E5C59E'}}>Индивидуальный подход:</span> Мы адаптируем наши услуги к вашим уникальным потребностям</li>
                        <li><span style={{color:'#E5C59E'}}>Результаты:</span> Мы стремимся предоставлять вам ценные инсайты и помогать вам принимать важные решения</li>
                    </div>
                    <div className={S.afterall_container}>
                        <div className={S.afterall_header}>
                            <p>Начните свой путь с сонником</p>
                        </div>
                        <div className={S.afterall_description}>
                            <p>
                            Если вы готовы исследовать мир снов и раскрывать их символику, кликните по кнопке ниже, чтобы начать свое путешествие к самопознанию через анализ снов
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FormModal href='/dreamcatcher/processing'/>
        </section>
    )
}

export default Dreamcatcher

