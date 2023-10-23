'use client'
import {FC, useEffect} from 'react';
import S from './waiting.module.scss';
import { CardTimer, Cross, Title } from '@/components/shared';
import { useUserFunctionStore } from '@/store';


interface WaitingProps {
    
}

export const Waiting:FC<WaitingProps> = ({...WaitingProps}) =>{
    const taroReq = useUserFunctionStore(state=>state.taroReq);
    const postQuestion = async () =>{
        const respose = await fetch('/api/taro/question',{
            method:'POST',
            body: JSON.stringify({message:taroReq}),
            headers:{
                "Content-Type":'applications/json',
            }
        });
        const data = await respose.json();
        console.log(data);
    }
    useEffect(()=>{
        postQuestion();
    },[])
    return ( 
        <section className={S.container}>
            <Cross href='/taro'/>
            <div className={S.wrapper}>
                <Title children={'Ожидайте'}/>
                <div className={S.timer_container}>
                    <div className={S.timer_remaining__text}>
                        <p>Время ожидания составит:</p>
                    </div>
                   <CardTimer propTime={15}/>
                </div>
            </div>
        </section>
    )
}

export default Waiting

