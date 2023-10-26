'use client'
import {FC, useEffect, useState} from 'react';
import S from './digitTimer.module.scss';
import { useRouter } from 'next/navigation';

interface DigitTimerProps {
    timerTime:number,
}

export const DigitTimer:FC<DigitTimerProps> = ({timerTime,...DigitTimerProps}) =>{
    const router = useRouter();
    const [timerDigit,setTimerDigit] = useState<number>(timerTime)

    useEffect(()=>{
        if(timerDigit > 0){
            setTimeout(()=>{
                setTimerDigit(timerDigit - 1);
            },1000)
        }
        else{
            router.push('/numerology/result');
        }
    },[timerDigit])
    return ( 
        <div className={S.timer_numbers}>
            <p>{timerDigit}</p>
        </div>
    )
}

export default DigitTimer

