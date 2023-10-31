'use client'
import {FC, useEffect} from 'react';
import S from './result.module.scss';
import { Cross, Title } from '@/components/shared';
import { useRouter } from 'next/navigation';
import { DreamcatcherStore } from '@/store';

interface ResultProps {
    
}

const Result:FC<ResultProps> = ({...ResultProps}) =>{
    const router = useRouter();
    const answer = DreamcatcherStore((state)=>state.dreamcatcherAnswer);
    const dreamcatcherReq = DreamcatcherStore((state)=>state.dreamcatcherReq);

    useEffect(()=>{
        if(dreamcatcherReq.length < 1){
            router.push('/dreamcatcher');
        }
        
    })
    return ( 
        <section className={S.container}>
            <Cross href='/dreamcatcher'/>
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

