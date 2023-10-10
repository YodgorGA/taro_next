import {FC} from 'react';
import S from './result.module.scss';

interface ResultProps {
    
}

export const Result:FC<ResultProps> = ({...ResultProps}) =>{
    
    return ( 
        <section className={S.container}>
            <div className={S.wrapper}>
                <div className={S.title}></div>
            </div>
        </section>
    )
}

export default Result

