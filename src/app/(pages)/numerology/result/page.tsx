"use client"
import {FC, useEffect} from 'react';
import S from './result.module.scss';
import { Cross, Title } from '@/components/shared';
import { NumerologyStore } from '@/store';
import { useRouter } from 'next/navigation';

interface ResultProps {
    
}

const Result:FC<ResultProps> = ({...ResultProps}) =>{
    const router = useRouter();
    const answer = NumerologyStore((state)=>state.numerologyAnswer);
    const numerologyReq = NumerologyStore((state)=>state.numerologyReq);

    useEffect(()=>{
        if(numerologyReq.length < 1){
            router.push('/numerology');
        }
        
    })
    return ( 
        <section className={S.container}>
            <Cross href='/numerology'/>
            <div className={S.wrapper}>
                <Title>Результат</Title>
                <div className={S.result_container}>
                    <pre>{answer}</pre>
                </div>
            </div>
        </section>
    )
}

export default Result

