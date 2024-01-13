"use client"
import { FC, useEffect, useState,} from 'react';
import S from './processing.module.scss';
import { Button, Title } from '@/components/shared';
import { useRouter } from 'next/navigation';
import { TaroCards } from '@/components/widgets';
import { TaroStore, PaymentData } from '@/store';
import { ICardInfo } from '@/components/shared';
import { useCreatePayment } from '@/components/shared/api/createPayment';



interface TaroProcessingProps {
    
}



const TaroProcessing:FC<TaroProcessingProps> = ({...TaroProcessingProps}) =>{
    const [randomCardItems,setrandomCardItems] = useState<ICardInfo[]>([])
    
    const router = useRouter()
    const taroReq = TaroStore(state=>state.taroReq);
    const taroCardItems = TaroStore(state=>state.taroCardItems);
    const taroCardNames = TaroStore(state=>state.taroCardNames);
    const setTaroCardNames = TaroStore((state)=>state.setTaroCardNames);
    const userEmail = PaymentData(state=>state.email)
    const paymentId = PaymentData(state=>state.paymentId)
    const setPaymentId = PaymentData(state=>state.setPaymentId);
    const createPayment = useCreatePayment;
    
    const buttonClickHandler = () =>{
        
        if(userEmail !== null){
            const payment:Promise<{redirectLink:string,id:string}> = createPayment({redirectLink:'taro',email:userEmail,description:'Тест'});
            payment.then(response=>{
                setPaymentId(response.id)
                console.log(paymentId,['buttonClickHandler']);    
                router.push(response.redirectLink)
            }).catch(error=>console.error(error))
        }
    }

    useEffect(()=>{
        setTaroCardNames();
    },[])

    useEffect(()=>{
        setrandomCardItems(taroCardItems)  
    },[taroCardNames])

    useEffect(()=>{
        if(taroReq[1] !== undefined && taroReq[1].length < 1){
            router.push('/taro');
        }
    })
    return ( 
        <section className={S.container}>
            <div className={S.wrapper}>
                <Title>Раcклад</Title>
                <TaroCards cardItems={randomCardItems}/>
                <div className={S.cards_buttonContainer}>
                    <Button clickHandler={buttonClickHandler}>Оплатить и узнать результат</Button>
                </div>
            </div>
        </section>
    )
}

export default TaroProcessing

