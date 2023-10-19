"use client"
import {FC, useEffect, useState} from 'react';
import S from './cardTimer.module.scss';
import Image from 'next/image';
import { getTimerDigits,getTimerDigitLink } from '../..';
import { useRouter } from 'next/navigation';

interface CardTimerProps {
    
}

export const CardTimer:FC<CardTimerProps> = ({...CardTimerProps}) =>{
    const router = useRouter()
    const [time,setTime] = useState<number>(59);
    
    const [leftDigit,setLeftDigit] = useState<number>(getTimerDigits(time)[0]);
    const [rightDigit,setRightDigit] = useState<number>(0);
    const [isTimerStarted,setIsTimerStarted] = useState<boolean>(false);
    let currentTime = new Date();
    const deadline = currentTime.setTime(currentTime.getTime() + 1000 * 60);
    const getTime = () =>{
        const time = Date(deadline) - Date.now();
        setTime(Math.floor((time / 1000) % 60));
    }
    getTime()
    useEffect(()=>{
        console.log(deadline);
    },[])
    return ( 
        <div className={S.timerCards}>
            <div className={`${S.timerCards_itemContainer}`}>
                <div className={`${S.timerCards_item__behind}`}>
                    <Image width={120} height={200} src={getTimerDigitLink(leftDigit-1)} alt={`${leftDigit -1}`}/>
                </div>
                <div className={`${S.timerCards_item} ${isTimerStarted === true && rightDigit < 1 && S.dropped}`}>
                    <Image width={120} height={200} src={getTimerDigitLink(leftDigit)} alt={`${leftDigit}`}/>
                </div>
            </div>
            <div className={S.timerCards_itemContainer}>
                <div className={`${S.timerCards_item__behind}`}>
                    <Image width={120} height={200} src={getTimerDigitLink(rightDigit-1)} alt={`${rightDigit -1}`}/>
                </div>
                <div className={`${S.timerCards_item} ${isTimerStarted === true &&  rightDigit !== 0 && S.dropped}`}>
                <Image width={120} height={200} src={getTimerDigitLink(rightDigit)} alt={`${rightDigit}`}/>
                </div>
            </div>
        </div>
    )
}

export default CardTimer

