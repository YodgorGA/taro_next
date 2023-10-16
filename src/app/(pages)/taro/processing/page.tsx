"use client"
import {FC } from 'react';
import S from './processing.module.scss';
import { Button, Cross, Title } from '@/components/shared';
import { useRouter } from 'next/navigation';
import { CardLinks, getNRandomNumbers } from '@/lib/cardPicker';
import Image from 'next/image';

interface TaroProcessingProps {
    
}

const cardNumbers = getNRandomNumbers(5);



export const TaroProcessing:FC<TaroProcessingProps> = ({...TaroProcessingProps}) =>{
    const router = useRouter()
    const buttonClickHandler = () =>{
        router.push('/taro/waiting');
    }
    console.log(CardLinks[cardNumbers[1]])
    return ( 
        <section className={S.container}>
            <div className={S.cross_container}>
                <Cross href='/taro'/>
            </div>
            <div className={S.wrapper}>
                <Title children='Раcклад'/>
                <div className={S.cards_container}>
                    {
                        cardNumbers!.map((number)=>{
                            return (
                                <div key={Math.random()} className={S.cards_cardItemContainer}>
                                    <div  className={S.cards_cardItem}>
                                        <Image alt='' fill src={cardNumbers &&  CardLinks[cardNumbers[number]]}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <div className={S.cards_cardItemContainer}>
                        <div key={Math.random()} className={S.cards_cardItem}>
                            <Image alt='' src={CardLinks[cardNumbers && cardNumbers[1]]}/>
                        </div>
                    </div>
                    <div className={S.cards_cardItemContainer}>
                        <div key={Math.random()} className={S.cards_cardItem}>
                            <Image alt='' src={CardLinks[cardNumbers && cardNumbers[2]]}/>
                        </div>
                    </div>
                    <div className={S.cards_cardItemContainer}>
                        <div key={Math.random()} className={S.cards_cardItem}>
                            <Image alt='' src={CardLinks[cardNumbers && cardNumbers[3]]}/>
                        </div>
                    </div>
                    <div className={S.cards_cardItemContainer}>
                        <div key={Math.random()} className={S.cards_cardItem}>
                            <Image alt='' src={CardLinks[cardNumbers && cardNumbers[4]]}/>
                        </div>
                    </div> */}
                </div>
                <div className={S.cards_buttonContainer}>
                    <Button clickHandler={buttonClickHandler}>Оплатить и узнать результат</Button>
                </div>
            </div>
        </section>
    )
}

export default TaroProcessing

