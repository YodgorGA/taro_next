"use client"
import {FC, useEffect, useState} from 'react';
import S from './cardTimer.module.scss';
import Image from 'next/image';
import { getTimerDigits,getTimerDigitLink } from '../..';
import { useRouter } from 'next/navigation';
import BlankCard from '/public/timerCards/blank.png';

interface CardTimerProps {
    propTime:number
}

export const CardTimer:FC<CardTimerProps> = ({propTime,...CardTimerProps}) =>{
    const router = useRouter()
    const [time,setTime] = useState<number>(propTime);

    const [leftDigit,setLeftDigit] = useState<number>(getTimerDigits(time)[0]);
    const [rightDigit,setRightDigit] = useState<number>(getTimerDigits(time)[1]);
    const [isTimerStarted,setIsTimerStarted] = useState<boolean>(false);

    useEffect(()=>{
        if( time >= 1){

            setTimeout(()=>{
                if(time < 10){
                    setLeftDigit(0),
                    setRightDigit(getTimerDigits(time)[0]);
                }
                else{
                    setLeftDigit(getTimerDigits(time)[0]);
                    setRightDigit(getTimerDigits(time)[1]);
                }
                
                setTime(time - 1);
                setIsTimerStarted(true)
            },1000)
        }
    },[time])
    return ( 
        <div className={S.timerCards}>
            <div className={`${S.timerCards_itemContainer}`}>
                <div className={`${S.timerCards_item__behind}`}>
                    <Image width={120} height={200} objectFit='cover' src={BlankCard} alt={`blank`}/>
                </div>
                <div className={`${S.timerCards_item} ${isTimerStarted === true && rightDigit < 1 && S.dropped}`}>
                    <Image width={120} height={200} src={getTimerDigitLink(leftDigit)} alt={`${leftDigit}`}/>
                </div>
            </div>
            <div className={S.timerCards_itemContainer}>
                <div className={`${S.timerCards_item__behind}`}>
                    <Image width={120} height={200} src={BlankCard} alt={`blank`}/>
                </div>
                <div className={`${S.timerCards_item} ${isTimerStarted === true &&  rightDigit !== 0 && S.dropped}`}>
                <Image width={120} height={200} src={getTimerDigitLink(rightDigit)} alt={`${rightDigit}`}/>
                </div>
            </div>
        </div>
    )
}

export default CardTimer

