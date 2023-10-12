"use client"
import {FC} from 'react';
import S from './shopItem.module.scss';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';


export interface ShopItemProps {
    img:string|StaticImport,
    buttonClickHandler:()=>void,
    alt:string,
    title:string,
    price:string,
}

export const ShopItem:FC<ShopItemProps> = ({alt,price,title,buttonClickHandler,img,...ShopItemProps}) =>{
    
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
        <button onClick={buttonClickHandler} className={S.item_button}>
            Купить
        </button>
    </div>
    )
}

export default ShopItem

