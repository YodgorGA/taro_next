"use client"
import {FC, useEffect, useState} from 'react';
import S from './waiting.module.scss';
import { Cross,  DreamcatcherTimer, Title } from '@/components/shared';
import { useRouter } from 'next/navigation'
import { DreamcatcherStore, PaymentData } from '@/store';

interface WaitingProps {
    
}

const Waiting:FC<WaitingProps> = ({...WaitingProps}) =>{
    const router = useRouter();
    const [ isPaymentOk, setIsPaymentOk ] = useState<boolean>(false)
    

    const dreamcatcherReq = DreamcatcherStore(state=>state.dreamcatcherReq);
    const dreamcatcherAnswer = DreamcatcherStore((state)=>state.setDreamcatcherAnswer);
    const paymentId = PaymentData(store=>store.paymentId);


    const postQuestion = async (dreamcatcherReq:string)=>{
        if(dreamcatcherReq.length > 0){
            const response = await fetch('/api/dreamcatcher',{
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
        
        if(isPaymentOk ){
            postQuestion(dreamcatcherReq)
        }else{
            console.log(`Request isn't sent cause have errors or dreamcatcherReq are empty `);
        }            
    },[dreamcatcherReq,isPaymentOk,getPaymentStatus])
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
                        <DreamcatcherTimer timerTime={5}/></>
                    }
                </div>
            </div>
        </section>
    )
}

export default Waiting

