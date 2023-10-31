"use client"
import {FC, useState} from 'react';
import S from './magic-shop.module.scss';
import Image from 'next/image';
import magicShopBackground from '/public/assets/images/magicShopBackground.png';
import { ICardItem, Title } from '@/components/shared';
import { Items } from '@/components/shared';
import { ShopItem } from '@/components/features';

interface MagicShopProps {
    
}

const MagicShop:FC<MagicShopProps> = ({...MagicShopProps}) =>{
    const [isModalOpen,setIsModalOpen] = useState<boolean>(false);

    const toggleModal = () =>{
        isModalOpen === true? setIsModalOpen(false):setIsModalOpen(true);
    }
    return ( 
        <section className={S.container}>
            <div className={S.wrapper}>
                <div className={S.shop_container}>
                <Title>Лавка магии</Title>
                    <div className={S.shop_items}>
                        {Items.map((item:ICardItem)=>{
                            return(
                                <div key={Math.random()} className={S.shop_item}>
                                    <ShopItem
                                        alt={item.alt}
                                        link={String(Math.random())}
                                        img={item.img}
                                        price={item.price}
                                        title={item.title}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={S.background}>
                <div className={S.background_container}>
                    <Image priority fill src={magicShopBackground} alt=''/> 
                </div>
            </div>
        </section>
    )
}

export default MagicShop

