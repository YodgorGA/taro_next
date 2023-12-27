import {FC} from 'react';
import S from './numerology.module.scss';
import { Title } from '@/components/shared';
import Image from 'next/image';
import { FormModal } from '@/components/widgets';
import numerology1 from '/public/assets/images/numerologyLeft.png';
import numerology2 from '/public/assets/images/numerologyRight.png';

interface NumerologyProps {
    
}

const Numerology:FC<NumerologyProps> = ({...NumerologyProps}) =>{
    
    return ( 
        <section className={S.container}>
            <Title>Открытие смысла чисел в вашей жизни</Title>
            <div className={S.content}>
                <div className={S.withImage__top}>
                    <div className={S.withImage_text}>
                        <div className={S.withImage_description}>
                            <p>Добро пожаловать на страницу, посвященную нумерологии, увлекательной науке, которая помогает раскрывать глубинные значения чисел в вашей жизни. Мы предоставляем вам возможность понять, как числа могут влиять на вашу судьбу и самопознание.</p>
                        </div>
                    </div>
                    <div className={S.withImage_image}>
                        <Image fill sizes='' src={numerology1} alt=''/>
                    </div>
                </div>
                <div className={S.withImage__bottom}>
                    <div className={S.withImage_image}>
                        <Image fill sizes='' src={numerology2} alt=''/>
                    </div>
                    <div className={S.withImage_text}>
                        <div className={S.withImage_title}>
                            <p>Что такое нумерология?</p>
                        </div>
                        <div className={S.withImage_description}>
                            <p>Нумерология - это система, основанная на анализе чисел и их значений. Каждое число считается иметь свой собственный энергетический отпечаток, и нумерология помогает нам понимать, как эти числа влияют на нашу жизнь. Она может раскрывать ваш характер, таланты и даже предсказывать события в будущем.</p>
                        </div>
                    </div>

                </div>

                <div className={S.services_container}>
                    <div className={S.services_header}>
                        <p>Наши услуги по нумерологии</p>
                    </div>
                    <div className={S.services_description}>
                    Наши алгоритмы анализа чисел могут предоставить вам глубокие инсайты в различных аспектах вашей жизни, включая:
                    </div>
                    <ul className={S.services_list}>
                        <li><span style={{color:'#E5C59E'}}>Личный код:</span> Узнайте ваш личный числовой код и какие качества и таланты он открывает</li>
                        <li><span style={{color:'#E5C59E'}}>Числовая совместимость:</span> Понимайте, какие числа совместимы с вами в любви, дружбе и бизнесе</li>
                        <li><span style={{color:'#E5C59E'}}>Предсказание событий:</span> Наши алгоритмы могут предсказывать ключевые события в вашей жизни на основе ваших числовых данных</li>
                    </ul>
                </div>
                <div className={S.purposes_container}>
                    <div className={S.purposes_header}>
                        <p>Почему выбирать нумерологию?</p>
                    </div>
                    <div className={S.purposes_description}>
                        <p><span style={{color:'#E5C59E'}}>Нумерология</span> - это инструмент самопознания, который может помочь вам проникнуть глубже в себя и свою судьбу. Причины выбрать нас включают:</p>
                    </div>
                    <div className={S.purposes_list}>
                        <li><span style={{color:'#E5C59E'}}>Точность:</span> Наши алгоритмы обеспечивают точные и надежные результаты.</li>
                        <li><span style={{color:'#E5C59E'}}>Конфиденциальность:</span> Ваша конфиденциальность важна для нас, и мы гарантируем полную безопасность ваших данных</li>
                        <li><span style={{color:'#E5C59E'}}>Индивидуальный подход:</span> Мы адаптируем наши услуги к вашим уникальным потребностям</li>
                        <li><span style={{color:'#E5C59E'}}>Результаты:</span> Мы стремимся предоставлять вам ценные инсайты и помогать вам принимать важные решения</li>
                    </div>
                    <div className={S.afterall_container}>
                        <div className={S.afterall_header}>
                            <p>Начните свой путь с нумерологией</p>
                        </div>
                        <div className={S.afterall_description}>
                            <p>
                            Если вы готовы исследовать мир нумерологии и раскрывать глубокий смысл чисел в своей жизни, кликните по кнопке ниже, чтобы начать свое путешествие к самопознанию через нумерологию
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FormModal href='/numerology/processing'/>
        </section>
    )
}

export default Numerology

