import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ICardItem{
    img:string|StaticImport,
    alt:string,
    title:string,
    price:string,
}

export interface ICardInfo{
    [key:string]:{
        quantor:string|null,
        type:string,
        link:string
    },
}

export interface ITimerCardInfo{
    value:number,
    link:string,
}
