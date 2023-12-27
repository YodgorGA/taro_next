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
        console.log('Waiting\ntaroReq before if')
        console.log(taroReq)
        console.log('Waiting\ntaroCardNames before if')
        console.log(taroCardNames)
        let haveError = false;
        for(let key in taroReq){
            if(taroReq[key].length < 1 || taroCardNames[key].length < 1){
                haveError = true
            }
        }
        if(!haveError){
            const response = await fetch('/api/taro/question',{
                method:'POST',
                body: JSON.stringify({taroReq,taroCardNames}),
                headers:{
                    "Content-Type":'applications/json',
                }
            });
            const data:{chatResp:string} = await response.json();

            setTaroAnswer(data.chatResp);
            console.log('Waiting\ntaroReq after if')
            console.log(taroReq)
            console.log('Waiting\ntaroCardNames after if')
            console.log(taroCardNames);
            
        }
    }
    useEffect(()=>{
        console.log('Waiting/useEffect/taroCardItems')
        console.log(taroCardItems);
        console.log('Waiting/useEffect/taroReq')
        console.log(taroReq);
        
        if(taroCardItems.length > 0){
            setTaroCardNames();
            console.log('Waiting/useEffect/if/taroCardNames after setTaroCardNames')
            console.log(taroCardNames)
            if(taroCardNames[1] !== undefined){
                postQuestion(taroReq,taroCardNames).then(result=>{
                })       
            }            
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
                   <CardTimer propTime={5}/>
                </div>
            </div>
        </section>
    )
}

export default Waiting

