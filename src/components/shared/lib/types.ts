import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ICardItem{
    img:string|StaticImport,
    alt:string,
    title:string,
    price:string,
}