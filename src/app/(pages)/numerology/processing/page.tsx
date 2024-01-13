"use client"
import { FC, useEffect } from 'react';
import S from './processing.module.scss';
import { Button, Cross, Title, useCreatePayment } from '@/components/shared';
import { useRouter } from 'next/navigation'
import { NumerologyStore, PaymentData } from '@/store';

interface TaroProcessingProps {
    
}

const TaroProcessing:FC<TaroProcessingProps> = ({...TaroProcessingProps}) =>{
    const router = useRouter()
    const createPayment = useCreatePayment;

    const numerologyReq = NumerologyStore(state=>state.numerologyReq);
    const paymentId = PaymentData(state=>state.paymentId)
    const userEmail = PaymentData(state=>state.email)
    const setPaymentId = PaymentData(state=>state.setPaymentId);

    const buttonClickHandler = () =>{
        
        if(userEmail !== null){
            const payment:Promise<{redirectLink:string,id:string}> = 
            createPayment({redirectLink:'numerology',email:userEmail,description:'Тест'});
            payment.then(response=>{
                setPaymentId(response.id)
                console.log(paymentId,['buttonClickHandler']);    
                router.push(response.redirectLink)
            }).catch(error=>console.error(error))
        }
    }


    useEffect(()=>{
        if(numerologyReq.length <1){
            router.push('/numerology');
        }
    })
    return ( 
        <section className={S.container}>
            <div className={S.wrapper}>
                <Title>Оплата</Title>
                <div className={S.question}>
                    <p>
                    Добро пожаловать в увлекательное приключение с нумерологом, где цифры раскроют вам тайны вашей жизни и помогут расшифровать путь к успеху и счастью.
                    <br/>Желаете узнать что покажут нам числа <span style={{fontFamily:'Antarctic',color:"#E5C59E"}}>{numerologyReq}</span> ?
                    </p>
                </div>
                <div className={S.buttonContainer}>
                    <Button clickHandler={buttonClickHandler}>Оплатить и узнать результат</Button>
                </div>
            </div>
        </section>
    )
}

export default TaroProcessing

function createPayment(arg0: { email: string; description: string; }): Promise<{ redirectLink: string; id: string; }> {
    throw new Error('Function not implemented.');
}

