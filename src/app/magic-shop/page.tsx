import {FC} from 'react';
import S from './magic-shop.module.scss';
import Image from 'next/image';
import magicShopBackground from '/public/assets/images/magicShopBackground.png';
import Placeholder from '/public/assets/images/placeholder.png';
import { Title } from '@/components/shared';

interface MagicShopProps {
    
}

export const MagicShop:FC<MagicShopProps> = ({...MagicShopProps}) =>{
    
    return ( 
        <section className={S.container}>
            <div className={S.wrapper}>

                <div className={S.shop_container}>
                <Title children='Лавка магии'/>
                    <div className={S.shop_items}>
                        <div className={S.shop_item}>
                            <div className={S.item}>
                                <div className={S.item_photo}>
                                    <Image src={Placeholder} alt=''/>
                                </div>
                                <div className={S.item_title}>
                                    <p>Название</p>
                                </div>
                                <div className={S.item_price}>
                                    <p>Цена</p>
                                </div>
                                <div className={S.item_button}>
                                    Купить
                                </div>
                            </div>
                        </div>
                        <div className={S.shop_item}>
                            <div className={S.item}>
                                <div className={S.item_photo}>
                                    <Image src={Placeholder} alt=''/>
                                </div>
                                <div className={S.item_title}>
                                    <p>Название</p>
                                </div>
                                <div className={S.item_price}>
                                    <p>Цена</p>
                                </div>
                                <div className={S.item_button}>
                                    Купить
                                </div>
                            </div>
                        </div>
                        <div className={S.shop_item}>
                            <div className={S.item}>
                                <div className={S.item_photo}>
                                    <Image src={Placeholder} alt=''/>
                                </div>
                                <div className={S.item_title}>
                                    <p>Название</p>
                                </div>
                                <div className={S.item_price}>
                                    <p>Цена</p>
                                </div>
                                <div className={S.item_button}>
                                    Купить
                                </div>
                            </div>
                        </div>
                        <div className={S.shop_item}>
                            <div className={S.item}>
                                <div className={S.item_photo}>
                                    <Image src={Placeholder} alt=''/>
                                </div>
                                <div className={S.item_title}>
                                    <p>Название</p>
                                </div>
                                <div className={S.item_price}>
                                    <p>Цена</p>
                                </div>
                                <div className={S.item_button}>
                                    Купить
                                </div>
                            </div>
                        </div>
                        <div className={S.shop_item}>
                            <div className={S.item}>
                                <div className={S.item_photo}>
                                    <Image src={Placeholder} alt=''/>
                                </div>
                                <div className={S.item_title}>
                                    <p>Название</p>
                                </div>
                                <div className={S.item_price}>
                                    <p>Цена</p>
                                </div>
                                <div className={S.item_button}>
                                    Купить
                                </div>
                            </div>
                        </div>
                        <div className={S.shop_item}>
                            <div className={S.item}>
                                <div className={S.item_photo}>
                                    <Image src={Placeholder} alt=''/>
                                </div>
                                <div className={S.item_title}>
                                    <p>Название</p>
                                </div>
                                <div className={S.item_price}>
                                    <p>Цена</p>
                                </div>
                                <div className={S.item_button}>
                                    Купить
                                </div>
                            </div>
                        </div>
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

