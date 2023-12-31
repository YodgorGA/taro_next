'use client'
import {FC, useEffect, useState} from 'react';
import S from './result.module.scss';
import { Cross, Title } from '@/components/shared';
import { OpenTaroCards } from '@/components/widgets';

import { useRouter } from 'next/navigation';
import { TaroStore } from '@/store';

interface ResultProps {
    
}


const Result:FC<ResultProps> = ({...ResultProps}) =>{
    const router = useRouter();
    const answer = TaroStore((state)=>state.taroAnswer);
    const taroReq = TaroStore((state)=>state.taroReq);

    useEffect(()=>{
        let hasError = false;
        for(let key in taroReq){
            if (taroReq[key] === '' || taroReq === undefined){
                hasError = true
            }
            return
        }
        if(!hasError){
            router.push('/taro');
        }
    },[answer])
    return ( 
        <section className={S.container}>
            <div className={S.wrapper}>
                <Title>Результат</Title>
                <div className={S.result_container}>
                    <OpenTaroCards/>
                    <pre>{answer !== undefined && answer || 'Ответы на эти вопросы требуют больше времени...'}</pre>
                </div>
            </div>
        </section>
    )
}

export default Result

