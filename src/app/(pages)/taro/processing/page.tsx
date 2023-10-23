"use client"
import { FC, useEffect,} from 'react';
import S from './processing.module.scss';
import { Button, Cross, Title } from '@/components/shared';
import { useRouter } from 'next/navigation';
import { TaroCards } from '@/components/widgets';
import { useUserFunctionStore } from '@/store';


interface TaroProcessingProps {
    
}



export const TaroProcessing:FC<TaroProcessingProps> = ({...TaroProcessingProps}) =>{
    
    const router = useRouter()
    const taroReq = useUserFunctionStore(state=>state.taroReq);
    
    const getPaymentInfo = async () =>{
        const response = await fetch('/api/taro/payment');
        return response.json()
    }
    
    const buttonClickHandler = () =>{
        const interval = setInterval(()=>{
            const payment:Promise<{status:boolean}> = getPaymentInfo();
            payment.then(response =>{
                console.log(response.status)
                if(response.status === true){
                    router.push('/taro/waiting');
                    clearInterval(interval)
                }
            });
            
        },2000)

    }
    useEffect(()=>{
        if(taroReq === '' || taroReq === undefined){
            router.push('/taro');
        }
    })
    return ( 
        <section className={S.container}>
            <div className={S.cross_container}>
                <Cross href='/taro'/>
            </div>
            <div className={S.wrapper}>
                <Title children='Раcклад'/>
                <TaroCards />
                <div className={S.cards_buttonContainer}>
                    <Button clickHandler={buttonClickHandler}>Оплатить и узнать результат</Button>
                </div>
            </div>
        </section>
    )
}

export default TaroProcessing

