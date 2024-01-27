import {FC} from 'react';
import S from './taroCards.module.scss';
import Image from 'next/image';
import { ICardInfo } from '@/components/shared';

interface TaroCardsProps {
    cardItems:ICardInfo[]
}


export const TaroCards:FC<TaroCardsProps> = ({cardItems,...TaroCardsProps}) =>{

    return ( 
        <div className={S.cards_container}>
        {
            cardItems.map((item)=>{
                const cardItemName = Object.keys(item)[0];
                return (
                <div key={Math.random()} className={S.cards_cardItemContainer}>
                    <div  className={S.cards_cardItem}>
                        <Image src={item[cardItemName].link} fill sizes={'(min-width: 1152px) 33.333vw, (min-width: 640px) 50vw, 100vw'} alt=''/>
                    </div>
                </div>)
            })
            
        }
        </div>
    )
}

export default TaroCards

