"use client"
import { FC, useEffect, useState,} from 'react';
import S from './processing.module.scss';
import { Button, Title } from '@/components/shared';
import { useRouter } from 'next/navigation';
import { TaroCards } from '@/components/widgets';
import { TaroStore } from '@/store';
import { ICardInfo } from '@/components/shared';



interface TaroProcessingProps {
    
}



const TaroProcessing:FC<TaroProcessingProps> = ({...TaroProcessingProps}) =>{
    const [randomCardItems,setrandomCardItems] = useState<ICardInfo[]>([])
    
    const router = useRouter()
    const taroReq = TaroStore(state=>state.taroReq);
    const taroCardItems = TaroStore(state=>state.taroCardItems);
    const taroCardNames = TaroStore(state=>state.taroCardNames);
    const setTaroCardNames = TaroStore((state)=>state.setTaroCardNames);



    
    const getPaymentInfo = async () =>{
        const response = await fetch('/api/taro/payment');
        console.log('getPaymentInfo response')
        console.log(response);
        return response.json()
    }

    const createPayment = async (body:{}) =>{
        const response = await fetch('/api/taro/payment',{
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

