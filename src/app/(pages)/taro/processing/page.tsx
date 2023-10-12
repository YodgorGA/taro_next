"use client"
import {FC} from 'react';
import S from './processing.module.scss';
import { Button, Cross, Title } from '@/components/shared';
import { useRouter } from 'next/navigation'

interface TaroProcessingProps {
    
}



export const TaroProcessing:FC<TaroProcessingProps> = ({...TaroProcessingProps}) =>{
    const router = useRouter()
    const buttonClickHandler = () =>{
        router.push('/taro/waiting');
    }
    return ( 
        <section className={S.container}>
            <div className={S.cross_container}>
                <Cross href='/taro'/>
            </div>
            <div className={S.wrapper}>
                <Title children='Раcклад'/>
                <div className={S.cards_container}>
                    <div className={S.cards_cardItemContainer}>
                        <div key={Math.random()} className={S.cards_cardItem}></div>
                    </div>
                    <div className={S.cards_cardItemContainer}>
                        <div key={Math.random()} className={S.cards_cardItem}></div>
                    </div>
                    <div className={S.cards_cardItemContainer}>
                        <div key={Math.random()} className={S.cards_cardItem}></div>
                    </div>
                </div>
                <div className={S.cards_buttonContainer}>
                    <Button clickHandler={buttonClickHandler}>Оплатить и узнать результат</Button>
                </div>
            </div>
        </section>
    )
}

export default TaroProcessing

