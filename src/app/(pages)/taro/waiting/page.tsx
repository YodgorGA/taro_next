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
    const taroCardItems = TaroStore((state)=>state.taroCardItems);
    const setTaroCardNames = TaroStore((state)=>state.setTaroCardNames);
    const setTaroAnswer = TaroStore((state)=>state.setTaroAnswer);

    const postQuestion = async (taroReq:ITaroReq,taroCardNames:ITaroReq) =>{
        let haveError = false;
        for(let key in taroReq){ 
            if(taroReq[key].length < 1 || taroCardNames === undefined){
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
            
        }
    }

    useEffect(()=>{
        let haveErrors = false;

        if(taroCardItems.length > 0){
            Object.values(taroCardItems).forEach(({cardName})=>{
                cardName !== undefined && cardName.quantor !== '' && cardName.type !== '' && cardName.link !== '' && setTaroCardNames();
            })

            Object.values(taroCardNames).forEach((cardName)=>{
                if(cardName !== undefined){
                    haveErrors = true
                }
            })
            if(!haveErrors && taroCardNames !== undefined){
                console.log(taroCardNames)
                postQuestion(taroReq,taroCardNames).then(result=>{
                    console.log(result);
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
                   <CardTimer propTime={60}/>
                </div>
            </div>
        </section>
    )
}

export default Waiting

