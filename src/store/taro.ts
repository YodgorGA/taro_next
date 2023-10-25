import { create } from "zustand";
import { ICardInfo } from "@/components/shared";
import { devtools } from 'zustand/middleware'

interface ITaroStore {
    taroReq:string,
    taroCardItems:ICardInfo[],
    taroAnswer:string,
    setTaroReq:(reqText:string)=>void,
    setTaroCardItems:(cardItems:ICardInfo[])=>void,
    setTaroAnswer:(answer:string)=>void,
}

export const TaroStore = create<ITaroStore>()(
    devtools(
        (set)=>({
            taroReq:'',
            taroCardItems:[],
            taroAnswer:'',
            setTaroReq: (reqText:string) =>{
                set({taroReq: reqText})
            },
            setTaroCardItems:(cardItems:ICardInfo[])=>{
                set({taroCardItems: cardItems})
            },
            setTaroAnswer:(answer:string)=>{
                set({taroAnswer: answer})
            },
        }),
        {name: 'TaroStore'}
    )
)