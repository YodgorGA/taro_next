'use client'
import {FC, useEffect, useState} from 'react';
import S from './dreamcatcherTimer.module.scss';
import { useRouter } from 'next/navigation';

interface DreamcatcherTimerProps {
    timerTime:number,
}

export const DreamcatcherTimer:FC<DreamcatcherTimerProps> = ({timerTime,...DreamcatcherTimerProps}) =>{
    const router = useRouter();
    const [timerDigit,setTimerDigit] = useState<number>(timerTime)

    useEffect(()=>{
        if(timerDigit > 0){
            setTimeout(()=>{
                setTimerDigit(timerDigit - 1);
            },1000)
        }
        else{
            router.push('/dreamcatcher/result');
        }
    },[timerDigit])
    return ( 
        <div className={S.timer_numbers}>
            <p>{timerDigit}</p>
        </div>
    )
}

export default DreamcatcherTimer

