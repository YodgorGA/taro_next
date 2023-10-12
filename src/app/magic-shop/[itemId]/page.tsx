import {FC} from 'react';
import S from './buyItem.module.scss';

interface MagicShopBuyProps {
    
}

export const MagicShopBuy:FC<MagicShopBuyProps> = ({...MagicShopBuyProps}) =>{
    
    return ( 
        <div className={S.buy}>
            <div className={S.buy_container}>
                <div className={S.buy_wrapper}>

                </div>
            </div> 
        </div>

        
    )
}

export default MagicShopBuy

