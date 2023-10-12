'use client'
import {FC} from 'react';
import S from './waiting.module.scss';
import { CardTimer, Cross, Title } from '@/components/shared';
import { useRouter } from 'next/navigation'


interface WaitingProps {
    
}

export const Waiting:FC<WaitingProps> = ({...WaitingProps}) =>{
    const router = useRouter();
    setTimeout(()=>{
        router.push('/taro/result');
    },3000)
    return ( 
        <section className={S.container}>
            <Cross href='/taro'/>
            <div className={S.wrapper}>
                <Title children={'Ожидайте'}/>
                <div className={S.timer_container}>
                    <div className={S.timer_remaining__text}>
                        <p>Время ожидания составит:</p>
                    </div>
                   <CardTimer/>
                </div>
            </div>
        </section>
    )
}

export default Waiting

