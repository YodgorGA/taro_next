'use client'
import {FC, useEffect, useState} from 'react';
import S from './waiting.module.scss';
import { CardTimer, ITaroReq, Title } from '@/components/shared';
import { PaymentData, TaroStore } from '@/store';
import { useRouter } from 'next/navigation';
import { error } from 'console';
import { get } from 'http';


interface WaitingProps {
    
}

const Waiting:FC<WaitingProps> = ({...WaitingProps}) =>{
    const router = useRouter();
    const [ isPaymentOk, setIsPaymentOk ] = useState<boolean>(false)
    
    const taroReq = TaroStore(state=>state.taroReq);
    const taroCardNames = TaroStore((state)=>state.taroCardNames);
    const setTaroAnswer = TaroStore((state)=>state.setTaroAnswer);
    const paymentId = PaymentData(store=>store.paymentId);

    const postQuestion = async (taroReq:ITaroReq,taroCardNames:ITaroReq) =>{
        const response = await fetch('/api/taro',{
            method:'POST',
            body: JSON.stringify({taroReq,taroCardNames}),
            headers:{
                "Content-Type":'applications/json',
            }
        });
        const data:{chatResp:string} = await response.json();
        
        setTaroAnswer(data.chatResp);
    }

    const getPaymentStatus = async () =>{
        let statusText:string;
        try{
            const response = await fetch('/api/payment',{
                method:'POST',
                body: JSON.stringify({paymentId}),
                headers:{
                    "Content-Type":'applications/json',
                }
            });
    
            const data = await response.json();
            
            statusText = data.status
            console.log(statusText,['getPaymentStatus'])
            return statusText
        }
        catch(error){
            console.error(error)
        }
    }



    useEffect(()=>{
        const paymentObserver = setInterval(()=>{
            console.log(paymentId)
            if(paymentId !== null){
                if(!isPaymentOk){
                    const paymentStatus = getPaymentStatus().then(result => {
                        console.log(result,['paymentObserver/paymentStatus'])
                        result === 'succeeded' && setIsPaymentOk(true)
                    });
                    
                }else{
                    console.log(getPaymentStatus())
                }
            }else{
                console.log('paymentId === null')
            }  
            
        },5000,)

        return ()=>{
            clearInterval(paymentObserver)
        }
    },[])

    useEffect(()=>{
        
        if(isPaymentOk && Object.keys(taroCardNames).length !== 0 && Object.keys(taroReq).length !== 0){
            postQuestion(taroReq,taroCardNames)
        }else{
            console.log(`Request isn't sent cause have errors or taroCardNames or taroReq or both are empty `);
        }            
    },[taroReq,isPaymentOk,getPaymentStatus])

    return ( 
        <section className={S.container}>
            <div className={S.wrapper}>
                {
                    isPaymentOk && <Title>Ожидайте</Title> || <Title>Ожидаем вашу оплату</Title>
                }
                
                <div className={S.timer_container}>
                    
                    {
                        isPaymentOk && 
                        <>
                        <div className={S.timer_remaining__text}>
                            <p>Время ожидания составит:</p>
                        </div>
                        <CardTimer propTime={5}/></>
                    }
                   
                </div>
            </div>
        </section>
    )
}

export default Waiting

