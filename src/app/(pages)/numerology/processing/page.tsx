"use client"
import { FC, useEffect } from 'react';
import S from './processing.module.scss';
import { Button, Cross, Title } from '@/components/shared';
import { useRouter } from 'next/navigation'
import { NumerologyStore } from '@/store';

interface TaroProcessingProps {
    
}

const TaroProcessing:FC<TaroProcessingProps> = ({...TaroProcessingProps}) =>{
    const router = useRouter()
    const numerologyReq = NumerologyStore(state=>state.numerologyReq);

    const createPayment = async (body:{}) =>{
        const response = await fetch('/api/numerology/payment',{
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

