"use client"
import {FC} from 'react';
import S from './cardTimer.module.scss';
import Dots from '/public/assets/images/doubleDots.png';
import Image from 'next/image';

interface CardTimerProps {
    
}

export const CardTimer:FC<CardTimerProps> = ({...CardTimerProps}) =>{
    
    return ( 
        <div className={S.timerCards}>
            <div className={`${S.timerCards_itemContainer}`}>
                <div className={`${S.timerCards_item} ${S.dropped}`}></div>
            </div>
            <div className={S.timerCards_itemContainer}>
                <div className={`${S.timerCards_item}`}></div>
            </div>
            <Image width={10} height={40} alt='' src={Dots}/>
            <div className={S.timerCards_itemContainer}>
                <div className={`${S.timerCards_item}`}></div>
            </div>
            <div className={S.timerCards_itemContainer}>
                <div className={`${S.timerCards_item}`}></div>
            </div>
            
            
 
            
            
        </div>
    )
}

export default CardTimer

