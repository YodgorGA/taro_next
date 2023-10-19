"use client"
import { FC, useState,} from 'react';
import S from './processing.module.scss';
import { Button, Cross, Title } from '@/components/shared';
import { useRouter } from 'next/navigation';
import { TaroCards } from '@/components/widgets';

interface TaroProcessingProps {
    
}

const getPaymentInfo = async () =>{
    const response = await fetch('/api/taro/payment');
    return response.json()
}

export const TaroProcessing:FC<TaroProcessingProps> = ({...TaroProcessingProps}) =>{
    
    const router = useRouter()
    const buttonClickHandler = () =>{
        setInterval(()=>{
            const payment:Promise<{status:boolean}> = getPaymentInfo();
            payment.then(response =>{
                console.log(response.status)
                if(response.status === true){
                    router.push('/taro/waiting');
                }
            });
            
        },2000)
    }
    return ( 
        <section className={S.container}>
            <div className={S.cross_container}>
                <Cross href='/taro'/>
            </div>
            <div className={S.wrapper}>
                <Title children='Раcклад'/>
                <TaroCards/>
                
                <div className={S.cards_buttonContainer}>
                    <Button clickHandler={buttonClickHandler}>Оплатить и узнать результат</Button>
                </div>
            </div>
        </section>
    )
}

export default TaroProcessing

