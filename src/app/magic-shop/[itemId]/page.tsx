"use client"
import {FC} from 'react';
import S from './buyItem.module.scss';
import Image from 'next/image';
import magicShopBackground from '/public/assets/images/magicShopBuyBackground.png';
import { Cross, Item as ShopItem } from '@/components/shared';
import { ShopForm } from '@/components/widgets';
import { usePathname } from 'next/navigation';


interface MagicShopBuyProps {

}


const MagicShopBuy:FC<MagicShopBuyProps> = ({...MagicShopBuyProps}) =>{
    const pathname = usePathname()

    const returnMagicShopGoodName = ()=>{
        return pathname.split('/')[2];
    }
    return ( 
        <section className={S.container}>
            <div className={S.wrapper}>
                <Cross href='/magic-shop'/>
                <div className={S.shopItem}>
                    <div className={S.shopItem_image}>
                        <Image alt={ShopItem.alt} fill sizes={'(min-width: 1152px) 33.333vw, (min-width: 640px) 50vw, 100vw'} src={ShopItem.img}/>
                    </div>
                    <div className={S.shopItem_title}>
                        <p>{returnMagicShopGoodName()}</p>
                    </div>
                    <div className={S.shopItem_price}>
                        <p>{ShopItem.price}</p>
                    </div>
                </div>
                <ShopForm/>
            </div>
            <div className={S.background}>
                <div className={S.background_container}>
                    <img style={{position:'absolute',top:0,left:0,right:0,bottom:0,width:'100%',height:'100%'}} src={magicShopBackground.src} alt=''/> 
                </div>
            </div>

        </section>

        
    )
}

export default MagicShopBuy

