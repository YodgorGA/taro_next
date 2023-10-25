import { TaroStore } from "@/store";
import { ICardInfo } from "..";

export const getCardsNames = () =>{
    const cardNames = TaroStore((state)=>state.taroCardItems).map((item:ICardInfo)=>{
        const cardName = Object.keys(item)[0];
        return `${item[cardName].quantor} ${item[cardName].type}`;
    })

    return (cardNames)
}