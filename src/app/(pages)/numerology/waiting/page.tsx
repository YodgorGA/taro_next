"use client"
import {FC, useEffect, useState} from 'react';
import S from './waiting.module.scss';
import { Cross, DigitTimer, Title } from '@/components/shared';
import { useRouter } from 'next/navigation'
import { NumerologyStore } from '@/store';

interface WaitingProps {
    
}

const Waiting:FC<WaitingProps> = ({...WaitingProps}) =>{
    const router = useRouter();
    
    const numerologyReq = NumerologyStore(state=>state.numerologyReq);
    const numerologyAnswer = NumerologyStore((state)=>state.setNumerologyAnswer);

    const postQuestion = async (numerologyReq:string)=>{
        if(numerologyReq !== ''){
            const response = await fetch('/api/numerology/question',{
                method:'POST',
                body: JSON.stringify({numerologyReq}),
                headers:{
                    "Content-Type":'applications/json',
                }
            });
            const data:{chatResp:string} = await response.json();

            numerologyAnswer(data.chatResp);
        }
    }
    useEffect(()=>{
        if(numerologyReq.length < 1){
            router.push('/numerology');
        }
        postQuestion(numerologyReq)
    })

    return ( 
        <section className={S.container}>
            <Cross href='/numerology'/>
            <div className={S.wrapper}>
                <Title>Ожидайте</Title>
                <div className={S.timer_container}>
                    <div className={S.timer_remaining__text}>
                        <p>Время ожидания составит:</p>
                    </div>
                    <DigitTimer timerTime={59}/>
                </div>
            </div>
        </section>
    )
}

export default Waiting

