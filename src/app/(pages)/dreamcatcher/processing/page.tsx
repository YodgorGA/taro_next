"use client"
import {FC, useEffect} from 'react';
import S from './processing.module.scss';
import { Button, Cross, Title } from '@/components/shared';
import { useRouter } from 'next/navigation'
import { DreamcatcherStore } from '@/store';

interface TaroProcessingProps {
    
}

const TaroProcessing:FC<TaroProcessingProps> = ({...TaroProcessingProps}) =>{
    const router = useRouter()

    const dreamcatcherReq = DreamcatcherStore(state=>state.dreamcatcherReq);

    const createPayment = async (body:{}) =>{
        const response = await fetch('/api/dreamcatcher/payment',{
            method:'POST',
            body:JSON.stringify(body)
        })

        return (response.json())
    }

    const buttonClickHandler = () =>{

        const payment:Promise<{redirectLink:string}> = createPayment({});

        payment.then(response=>router.push(response.redirectLink))
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
                    <Button clickHandler={buttonClickHandler}>Оплатить и узнать результат</Button>
                </div>
            </div>
        </section>
    )
}

export default TaroProcessing

