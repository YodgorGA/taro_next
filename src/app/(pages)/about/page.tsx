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
        <section className={S.about_container}>
            <div className={S.text}>
                <div className={S.title}>
                    <Title>История</Title>
                </div>
                <div className={S.description}>
                    <p>Текст легенды</p>
                </div>
            </div>
            <div className={S.images}>
                <div className={S.image_container}>
                    <div className={S.image_candle}>
                        <Image fill  src={CandleImage} alt='candles'/>
                    </div>
                    <div className={S.image_cards}>
                        <Image fill src={CardsImage} alt='cards'/>
                    </div>
                </div>
                <div className={S.star}>
                        <Image fill src={Star} alt=''/>
                </div>
            </div>
        </section>
    )
}

export default AboutPage

