import {FC} from 'react';
import S from './waiting.module.scss';

interface WaitingProps {
    
}

export const Waiting:FC<WaitingProps> = ({...WaitingProps}) =>{
    
    return ( 
        <section className={S.container}>
            <div className={S.wrapper}>
                <div className={S.title}></div>
            </div>
        </section>
    )
}

export default Waiting

