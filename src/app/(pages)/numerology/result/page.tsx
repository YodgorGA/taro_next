import {FC} from 'react';
import S from './result.module.scss';
import { Title } from '@/components/shared';

interface ResultProps {
    
}

export const Result:FC<ResultProps> = ({...ResultProps}) =>{
    
    return ( 
        <section className={S.container}>
            <div className={S.wrapper}>
                <Title children='Результат'/>
                <div className={S.result_container}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque accusamus perferendis nisi at, distinctio hic! Alias ad doloremque quasi illum cum rem dolorem quod, magni odio facere maxime quaerat sit.</p>
                </div>
            </div>
        </section>
    )
}

export default Result

