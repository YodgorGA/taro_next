'use client'
import {FC, useEffect, useState} from 'react';
import S from './result.module.scss';
import { Cross, Title } from '@/components/shared';
import { OpenTaroCards } from '@/components/widgets';
import { useUserFunctionStore } from '@/store';
import { useRouter } from 'next/navigation';

interface ResultProps {
    
}


export const Result:FC<ResultProps> = ({...ResultProps}) =>{
    const router = useRouter();
    const taroReq = useUserFunctionStore(state=>state.taroReq);
    const [answer,setAnswer] = useState<string>('');
    const postQuestion = async () =>{
        const respose = await fetch('/api/taro/question',{
            method:'POST',
            body: JSON.stringify({message:taroReq}),
            headers:{
                "Content-Type":'applications/json',
            }
        });
        const data:{body:{message:string}} = await respose.json();
        setAnswer(data.body.message);
        
    }
    useEffect(()=>{
        if(taroReq === '' || taroReq === undefined){
            router.push('/taro');
        }
        postQuestion()
    },[])
    return ( 
        <section className={S.container}>
            <Cross href='/taro'/>
            <div className={S.wrapper}>
                <Title children='Результат'/>
                <div className={S.result_container}>
                    {
                        taroReq === '' || taroReq === undefined && <div></div> || <OpenTaroCards/>
                    }
                    <p>{answer}</p>
                </div>
            </div>
        </section>
    )
}

export default Result

