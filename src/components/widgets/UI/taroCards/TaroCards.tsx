"use client"
import {FC,useEffect,useState} from 'react';
import S from './taroCards.module.scss';
import Image from 'next/image';
import { ICardInfo } from '@/lib/types';
import { getRandomCardItems } from '@/lib/cardPicker';

interface TaroCardsProps {
    
}
const randomCardsArr = getRandomCardItems();

export const TaroCards:FC<TaroCardsProps> = ({...TaroCardsProps}) =>{
    const [randomCardItems,setrandomCardItems] = useState<ICardInfo[]>([])

    useEffect(()=>{
        setrandomCardItems(randomCardsArr);
    },[])
    return ( 
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
    )
}

export default TaroCards

