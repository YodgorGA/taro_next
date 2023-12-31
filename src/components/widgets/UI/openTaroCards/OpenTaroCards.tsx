'use client'
import {FC, useState} from 'react';
import S from './openTaroCards.module.scss';
import { ICardInfo } from '@/components/shared';
import Image from 'next/image';
import { TaroStore } from '@/store';

interface OpenTaroCardsProps {
    
}

export const OpenTaroCards:FC<OpenTaroCardsProps> = ({...OpenTaroCardsProps}) =>{
    const storedTaroCards = TaroStore(state=>state.taroCardItems);

    return ( 
        <div className={S.cards_container}>
        {
            storedTaroCards.map((item:ICardInfo)=>{
                const cardItemName = Object.keys(item)[0];
                return (
                <div key={Math.random()} className={S.cards_cardItemContainer}>
                    <div  className={S.cards_cardItem}>
                        <Image src={`/taroCards/default/${cardItemName}.png`} sizes='' fill alt=''/>
                    </div>
                </div>)
            })
            
        }
        </div>
    )
}

export default OpenTaroCards

