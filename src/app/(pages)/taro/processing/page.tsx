"use client"
import {FC} from 'react';
import S from './processing.module.scss';
import { Button, Title } from '@/components/shared';

interface TaroProcessingProps {
    
}

export const TaroProcessing:FC<TaroProcessingProps> = ({...TaroProcessingProps}) =>{
    
    return ( 
        <section className={S.container}>
            <div className={S.wrapper}>
                <Title children='Раcклад'/>
                <div className={S.cards_container}>
                    <div key={Math.random()} className={S.cards_cardItem}></div>
                    <div key={Math.random()} className={S.cards_cardItem}></div>
                    <div key={Math.random()} className={S.cards_cardItem}></div>
                </div>
                <div className={S.cards_buttonContainer}>
                    <Button clickHandler={()=>{}}>Оплатить и узнать результат</Button>
                </div>
            </div>
        </section>
    )
}

export default TaroProcessing

