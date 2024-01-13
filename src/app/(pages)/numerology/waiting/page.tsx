"use client"
import {FC, useEffect, useState} from 'react';
import S from './waiting.module.scss';
import { Cross, DigitTimer, Title } from '@/components/shared';
import { useRouter } from 'next/navigation'
import { NumerologyStore, PaymentData } from '@/store';

interface WaitingProps {
    
}

const Waiting:FC<WaitingProps> = ({...WaitingProps}) =>{
    const router = useRouter();
    
    const numerologyReq = NumerologyStore(state=>state.numerologyReq);
    const numerologyAnswer = NumerologyStore((state)=>state.setNumerologyAnswer);
    const [ isPaymentOk, setIsPaymentOk ] = useState<boolean>(false)
    const paymentId = PaymentData(store=>store.paymentId);

    const postQuestion = async (numerologyReq:string)=>{
        if(numerologyReq !== ''){
            const response = await fetch('/api/numerology',{
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
        if(numerologyReq.length < 1){
            router.push('/numerology');
        }
        if(isPaymentOk ){
            postQuestion(numerologyReq)
        }else{
            console.log(`Request isn't sent cause have errors or numbrologyReq or both are empty `);
        }   
        
    },[numerologyReq,isPaymentOk,getPaymentStatus])

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
                        <DigitTimer timerTime={5}/></>
                    }
                </div>
            </div>
        </section>
    )
}

export default Waiting

