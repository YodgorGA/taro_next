"use client"
import {FC, useEffect} from 'react';
import S from './waiting.module.scss';
import { Cross,  DreamcatcherTimer, Title } from '@/components/shared';
import { useRouter } from 'next/navigation'
import { DreamcatcherStore } from '@/store';

interface WaitingProps {
    
}

const Waiting:FC<WaitingProps> = ({...WaitingProps}) =>{
    const router = useRouter();


    const dreamcatcherReq = DreamcatcherStore(state=>state.dreamcatcherReq);
    const dreamcatcherAnswer = DreamcatcherStore((state)=>state.setDreamcatcherAnswer);

    const postQuestion = async (dreamcatcherReq:string)=>{
        if(dreamcatcherReq.length > 0){
            const response = await fetch('/api/dreamcatcher/question',{
                method:'POST',
                body: JSON.stringify({dreamcatcherReq}),
                headers:{
                    "Content-Type":'applications/json',
                }
            });
            const data:{chatResp:string} = await response.json();

            dreamcatcherAnswer(data.chatResp);
        }
    }

    useEffect(()=>{
        if(dreamcatcherReq.length < 1){
            router.push('/dreamcatcher');
        }
        postQuestion(dreamcatcherReq)
    })
    return ( 
        <section className={S.container}>
            <Cross href='/dreamcatcher'/>
            <div className={S.wrapper}>
                <Title>Ожидайте</Title>
                <div className={S.timer_container}>
                    <div className={S.timer_remaining__text}>
                        <p>Время ожидания составит:</p>
                    </div>
                    <DreamcatcherTimer timerTime={5}/>
                </div>
            </div>
        </section>
    )
}

export default Waiting

