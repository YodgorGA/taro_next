import {FC} from 'react';
import S from './buyItem.module.scss';
import { Metadata } from 'next';
import Image from 'next/image';
import magicShopBackground from '/public/assets/images/magicShopBuyBackground.png';
import { Cross, Item as ShopItem } from '@/components/shared';
import { ShopForm } from '@/components/widgets';


interface MagicShopBuyProps {
    params:{
        itemId:string,
    }
}


export const generateMetadata = async ({
    params:{itemId}
}:MagicShopBuyProps):Promise<Metadata>=>{
    return {
        title:itemId,
    }
}

export const MagicShopBuy:FC<MagicShopBuyProps> = ({params,...MagicShopBuyProps}) =>{
    return ( 
        <section className={S.container}>
            <div className={S.wrapper}>
                <Cross href='/magic-shop'/>
                <div className={S.shopItem}>

                    <div className={S.shopItem_image}>
                        <Image alt={ShopItem.alt} fill src={ShopItem.img}/>
                    </div>
                    <div className={S.shopItem_title}>
                        <p>{ShopItem.title}</p>
                    </div>
                    <div className={S.shopItem_price}>
                        <p>{ShopItem.price}</p>
                    </div>
                </div>
                <ShopForm/>
            </div>
            <div className={S.background}>
                <div className={S.background_container}>
                    <Image priority fill src={magicShopBackground} alt=''/> 
                </div>
            </div>

        </section>

        
    )
}

export default MagicShopBuy

