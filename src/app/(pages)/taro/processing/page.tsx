"use client"
import { FC, useEffect,} from 'react';
import S from './processing.module.scss';
import { Button, Cross, Title } from '@/components/shared';
import { useRouter } from 'next/navigation';
import { TaroCards } from '@/components/widgets';
import { TaroStore } from '@/store';


interface TaroProcessingProps {
    
}



const TaroProcessing:FC<TaroProcessingProps> = ({...TaroProcessingProps}) =>{
    
    const router = useRouter()
    const taroReq = TaroStore(state=>state.taroReq);
    
    const getPaymentInfo = async () =>{
        const response = await fetch('/api/taro/payment');
        return response.json()
    }
    
    const buttonClickHandler = () =>{
        const interval = setInterval(()=>{
            const payment:Promise<{status:boolean}> = getPaymentInfo();
            payment.then(response =>{
                if(response.status === true){
                    router.push('/taro/waiting');
                    console.log("should go to waiting")
                    clearInterval(interval)
                    console.log("clearInterval(interval)")
                }
            });
            
        },2000)

    }
    useEffect(()=>{
        if(taroReq[1].length < 1){
            router.push('/taro');
        }
    })
    return ( 
        <section className={S.container}>
            <div className={S.wrapper}>
                <Title>Раcклад</Title>
                <TaroCards />
                <div className={S.cards_buttonContainer}>
                    <Button clickHandler={buttonClickHandler}>Оплатить и узнать результат</Button>
                </div>
            </div>
        </section>
    )
}

export default TaroProcessing

