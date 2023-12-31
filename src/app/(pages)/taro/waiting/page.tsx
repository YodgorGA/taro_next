'use client'
import {FC, useEffect, useState} from 'react';
import S from './waiting.module.scss';
import { CardTimer, ITaroReq, Title } from '@/components/shared';
import { TaroStore } from '@/store';
import { useRouter } from 'next/navigation';


interface WaitingProps {
    
}

const Waiting:FC<WaitingProps> = ({...WaitingProps}) =>{
    const router = useRouter();
    
    const taroReq = TaroStore(state=>state.taroReq);
    const taroCardNames = TaroStore((state)=>state.taroCardNames);
    const setTaroAnswer = TaroStore((state)=>state.setTaroAnswer);

    const postQuestion = async (taroReq:ITaroReq,taroCardNames:ITaroReq) =>{
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

    useEffect(()=>{
        if(Object.keys(taroCardNames).length !== 0 && Object.keys(taroReq).length !== 0){
            postQuestion(taroReq,taroCardNames).then(result=>{
                console.log(result);
            })       
        }else{
            console.log(`Request isn't sent cause have errors or taroCardNames or taroReq or both are empty `);
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

