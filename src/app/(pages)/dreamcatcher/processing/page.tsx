"use client"
import {FC, useEffect} from 'react';
import S from './processing.module.scss';
import { Button, Cross, Title, useCreatePayment } from '@/components/shared';
import { useRouter } from 'next/navigation'
import { DreamcatcherStore, PaymentData } from '@/store';

interface TaroProcessingProps {
    
}

const TaroProcessing:FC<TaroProcessingProps> = ({...TaroProcessingProps}) =>{
    const router = useRouter()

    const dreamcatcherReq = DreamcatcherStore(state=>state.dreamcatcherReq);

    const userEmail = PaymentData(state=>state.email)
    const setPaymentId = PaymentData(state=>state.setPaymentId);
    const paymentId = PaymentData(state=>state.paymentId)
    const createPayment = useCreatePayment;
    
    const buttonClickHandler = () =>{
        // if(userEmail !== null){
        //     const payment:Promise<{redirectLink:string,id:string}> =
        //     createPayment({redirectLink:'dreamcatcher',email:userEmail,description:'Тест'});
        //     payment.then(response=>{
        //         setPaymentId(response.id)
        //         console.log(paymentId,['buttonClickHandler']);    
        //         router.push(response.redirectLink)
        //     }).catch(error=>console.error(error))
        // }
        router.push('/dreamcatcher/waiting')
    }


    useEffect(()=>{
        if(dreamcatcherReq.length <1){
            router.push('/dreamcatcher');
        }
    })
    return ( 
        <section className={S.container}>
            <div className={S.wrapper}>
                <Title>Оплата</Title>
                <div className={S.question}>
                    <p>
                    Добро пожаловать в захватывающий мир толкования сновидений, где каждая ночь становится загадочным путешествием в глубины вашей подсознательной вселенной. <br/><br/> Желаете продолжить путешествие?
                    </p>
                </div>
                <div className={S.buttonContainer}>
                    <Button clickHandler={buttonClickHandler}>Узнать результат</Button>
                </div>
            </div>
        </section>
    )
}

export default TaroProcessing

