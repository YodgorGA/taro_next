import {FC} from 'react';
import S from './result.module.scss';
import { Cross, Title } from '@/components/shared';

interface ResultProps {
    
}

export const Result:FC<ResultProps> = ({...ResultProps}) =>{
    
    return ( 
        <section className={S.container}>
            <Cross href='/taro'/>
            <div className={S.wrapper}>
                <Title children='Результат'/>
                <div className={S.result_container}>
                <div className={S.cards_container}>
                    <div className={S.cards_cardItemContainer}>
                        <div key={Math.random()} className={S.cards_cardItem}></div>
                    </div>
                    <div className={S.cards_cardItemContainer}>
                        <div key={Math.random()} className={S.cards_cardItem}></div>
                    </div>
                    <div className={S.cards_cardItemContainer}>
                        <div key={Math.random()} className={S.cards_cardItem}></div>
                    </div>
                    <div className={S.cards_cardItemContainer}>
                        <div key={Math.random()} className={S.cards_cardItem}></div>
                    </div>
                    <div className={S.cards_cardItemContainer}>
                        <div key={Math.random()} className={S.cards_cardItem}></div>
                    </div>
                </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque accusamus perferendis nisi at, distinctio hic! Alias ad doloremque quasi illum cum rem dolorem quod, magni odio facere maxime quaerat sit.</p>
                </div>
            </div>
        </section>
    )
}

export default Result

