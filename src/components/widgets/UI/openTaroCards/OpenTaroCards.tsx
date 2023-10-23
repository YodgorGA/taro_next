'use client'
import {FC, useState} from 'react';
import S from './openTaroCards.module.scss';
import { useUserFunctionStore } from '@/store';
import { ICardInfo } from '@/components/shared';
import Image from 'next/image';

interface OpenTaroCardsProps {
    
}

export const OpenTaroCards:FC<OpenTaroCardsProps> = ({...OpenTaroCardsProps}) =>{
    const storedTaroCards = useUserFunctionStore(state=>state.taroCardItems);

    return ( 
        <div className={S.cards_container}>
        {
            storedTaroCards.map((item:ICardInfo)=>{
                const cardItemName = Object.keys(item)[0];
                console.log(cardItemName);
                return (
                <div key={Math.random()} className={S.cards_cardItemContainer}>
                    <div  className={S.cards_cardItem}>
                        <Image src={`/taroCards/default/${cardItemName}.png`} fill alt=''/>
                    </div>
                </div>)
            })
            
        }
        </div>
    )
}

export default OpenTaroCards

