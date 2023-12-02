'use client'
import {FC, useEffect, useState} from 'react';
import S from './waiting.module.scss';
import { CardTimer, Cross, ITaroReq, Title } from '@/components/shared';
import { TaroStore } from '@/store';
import { useRouter } from 'next/navigation';


interface WaitingProps {
    
}

const Waiting:FC<WaitingProps> = ({...WaitingProps}) =>{
    const router = useRouter();
    
    const taroReq = TaroStore(state=>state.taroReq);
    const taroCardNames = TaroStore((state)=>state.taroCardNames);
    const taroCardItems = TaroStore((state)=>state.taroCardItems);
    const setTaroCardNames = TaroStore((state)=>state.setTaroCardNames);
    const setTaroAnswer = TaroStore((state)=>state.setTaroAnswer);

    const postQuestion = async (taroReq:ITaroReq,taroCardNames:ITaroReq) =>{
        if(taroReq[5] !== '' && taroCardNames[5] !== ''){
            const response = await fetch('/api/taro/question',{
                method:'POST',
                body: JSON.stringify({taroReq,taroCardNames}),
                headers:{
                    "Content-Type":'applications/json',
                }
            });
            const data:{chatResp:string} = await response.json();

            setTaroAnswer(data.chatResp);
        }
    }
    useEffect(()=>{
        if(taroReq[5] !== '' || taroReq === undefined){
            router.push('/taro');
        }
        if(taroCardItems.length > 0){
            setTaroCardNames();
            postQuestion(taroReq,taroCardNames)
        } 
    },[taroReq])
    return ( 
        <section className={S.container}>
            <div className={S.wrapper}>
                <Title>Ожидайте</Title>
                <div className={S.timer_container}>
                    <div className={S.timer_remaining__text}>
                        <p>Время ожидания составит:</p>
                    </div>
                   <CardTimer propTime={60}/>
                </div>
            </div>
        </section>
    )
}

export default Waiting

