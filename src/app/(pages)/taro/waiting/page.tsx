import {FC} from 'react';
import S from './waiting.module.scss';
import { CardTimer, Title } from '@/components/shared';
import Dots from '/public/assets/images/doubleDots.png';
import Image from 'next/image';

interface WaitingProps {
    
}

export const Waiting:FC<WaitingProps> = ({...WaitingProps}) =>{
    
    return ( 
        <section className={S.container}>
            <div className={S.wrapper}>
                <Title children={'Ожидайте'}/>
                <div className={S.timer_container}>
                    <div className={S.timer_remaining__text}>
                        <p>Время ожидания составит: {'Get time from server минут'}</p>
                    </div>
                   <CardTimer/>
                </div>
            </div>
        </section>
    )
}

export default Waiting

