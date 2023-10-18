"use client"
import { FC, useEffect, useState } from 'react';
import S from './processing.module.scss';
import { Button, Cross, Title } from '@/components/shared';
import { useRouter } from 'next/navigation';
import { getRandomCardItems } from '@/lib/cardPicker';
import Image from 'next/image';
import { ICardInfo } from '@/lib/types';

interface TaroProcessingProps {
    
}

const randomCardsArr = getRandomCardItems();
// console.log(randomCardsArr);

export const TaroProcessing:FC<TaroProcessingProps> = ({...TaroProcessingProps}) =>{
    const router = useRouter()
    const [randomCardItems,setrandomCardItems] = useState<ICardInfo[]>([])
    const buttonClickHandler = () =>{
        router.push('/taro/waiting');
    }
    useEffect(()=>{
        setrandomCardItems(randomCardsArr)
    },[])
    return ( 
        <section className={S.container}>
            <div className={S.cross_container}>
                <Cross href='/taro'/>
            </div>
            <div className={S.wrapper}>
                <Title children='Раcклад'/>
                <div className={S.cards_container}>
                {
                    randomCardItems.map((item)=>{
                        const cardItemName = Object.keys(item)[0];
                        return (
                        <div key={Math.random()} className={S.cards_cardItemContainer}>
                            <div  className={S.cards_cardItem}>
                                <Image src={item[cardItemName].link} fill alt=''/>
                            </div>
                        </div>)
                    })
                }
                </div>
                <div className={S.cards_buttonContainer}>
                    <Button clickHandler={buttonClickHandler}>Оплатить и узнать результат</Button>
                </div>
            </div>
        </section>
    )
}

export default TaroProcessing

