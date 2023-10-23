"use client"
import {FC,useEffect,useState} from 'react';
import S from './taroCards.module.scss';
import Image from 'next/image';
import { ICardInfo } from '@/components/shared';
import { getRandomCardItems } from '@/components/widgets';
import { useUserFunctionStore } from '@/store';

interface TaroCardsProps {
}


export const TaroCards:FC<TaroCardsProps> = ({...TaroCardsProps}) =>{
    const randomCardsArr = getRandomCardItems();
    const [randomCardItems,setrandomCardItems] = useState<ICardInfo[]>([])
    const setTaroCardItems = useUserFunctionStore(state=>state.setTaroCardItems);

    useEffect(()=>{
        setrandomCardItems(randomCardsArr);
        setTaroCardItems(randomCardsArr);
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

