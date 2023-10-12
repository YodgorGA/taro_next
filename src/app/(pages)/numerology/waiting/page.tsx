"use client"
import {FC} from 'react';
import S from './waiting.module.scss';
import { Cross, Title } from '@/components/shared';
import { useRouter } from 'next/navigation'

interface WaitingProps {
    
}

export const Waiting:FC<WaitingProps> = ({...WaitingProps}) =>{
    const router = useRouter();
    setTimeout(()=>{
        router.push('/numerology/result');
    },3000)
    return ( 
        <section className={S.container}>
            <Cross href='/numerology'/>
            <div className={S.wrapper}>
                <Title children={'Ожидайте'}/>
                <div className={S.timer_container}>
                    <div className={S.timer_remaining__text}>
                        <p>Время ожидания составит:</p>
                    </div>
                   <div className={S.timer_numbers}>
                        <p>10:00</p>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Waiting

