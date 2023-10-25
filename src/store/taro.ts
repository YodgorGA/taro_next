import { create } from "zustand";
import { ICardInfo } from "@/components/shared";
import { devtools } from 'zustand/middleware'

interface ITaroStore {
    taroReq:string,
    taroCardItems:ICardInfo[],
    taroAnswer:string,
    taroCardNames:string,
    setTaroReq:(reqText:string)=>void,
    setTaroCardItems:(cardItems:ICardInfo[])=>void,
    setTaroAnswer:(answer:string)=>void,
    setTaroCardNames:()=>void,
}

export const TaroStore = create<ITaroStore>()(
    devtools(
        (set)=>({
            taroReq:'',
            taroCardItems:[],
            taroAnswer:'',
            taroCardNames:'',
            setTaroReq: (reqText:string) =>{
                set({taroReq: reqText})
            },
            setTaroCardItems:(cardItems:ICardInfo[])=>{
                set({taroCardItems: cardItems})
            },
            setTaroAnswer:(answer:string)=>{
                set({taroAnswer: answer})
            },
            setTaroCardNames:()=>{
                if(TaroStore.getState().taroCardItems.length > 0){
                    
                    const newCardNamesArr:string[] = [];
    
                    TaroStore.getState().taroCardItems.forEach((item:ICardInfo)=>{
                        const cardName = Object.keys(item)[0];
                        newCardNamesArr.push(`${item[cardName].quantor !== null? item[cardName].quantor:''} ${item[cardName].type}`) 
                    })
                    set({
                        taroCardNames: newCardNamesArr.join(',')
                    })
                }     
            }
        }),
        {name: 'TaroStore'}
    )
)