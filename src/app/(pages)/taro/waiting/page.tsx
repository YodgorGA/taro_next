
import {FC,} from 'react';
import S from './waiting.module.scss';
import { CardTimer, Cross, Title } from '@/components/shared';



interface WaitingProps {
    
}

export const Waiting:FC<WaitingProps> = ({...WaitingProps}) =>{
    

    return ( 
        <section className={S.container}>
            <Cross href='/taro'/>
            <div className={S.wrapper}>
                <Title children={'Ожидайте'}/>
                <div className={S.timer_container}>
                    <div className={S.timer_remaining__text}>
                        <p>Время ожидания составит:</p>
                    </div>
                   <CardTimer propTime={10}/>
                </div>
            </div>
        </section>
    )
}

export default Waiting

