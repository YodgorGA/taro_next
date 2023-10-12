"use client"
import {FC} from 'react';
import S from './shopItem.module.scss';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Link from 'next/link';


export interface ShopItemProps {
    img:string|StaticImport,
    link:string
    alt:string,
    title:string,
    price:string,
}

export const ShopItem:FC<ShopItemProps> = ({alt,price,title,link,img,...ShopItemProps}) =>{
    
    return ( 
        <div className={S.item}>
        <div className={S.item_photo}>
            <Image fill src={img} alt={alt}/>
        </div>
        <div className={S.item_title}>
            <p>{title}</p>
        </div>
        <div className={S.item_price}>
            <p>{price}</p>
        </div>
        <button className={S.item_button}>
            <Link href={`/magic-shop/${link}`}>Купить</Link>
        </button>
    </div>
    )
}

export default ShopItem

