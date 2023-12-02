import { create } from "zustand";
import { ICardInfo, ITaroReq } from "@/components/shared";
import { devtools } from 'zustand/middleware'

interface ITaroStore {
    taroReq:ITaroReq,
    taroCardItems:ICardInfo[],
    taroAnswer:string,
    taroCardNames:ITaroReq,
    setTaroReq:(reqObj:ITaroReq)=>void,
    setTaroCardItems:(cardItems:ICardInfo[])=>void,
    setTaroAnswer:(answer:string)=>void,
    setTaroCardNames:()=>void,
}

export const TaroStore = create<ITaroStore>()(
    devtools(
        (set)=>({
            taroReq:{},
            taroCardItems:[],
            taroAnswer:'',
            taroCardNames:{},
            setTaroReq: (reqObj:ITaroReq) =>{
                set({taroReq: reqObj})
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
                        taroCardNames: {
                            1:newCardNamesArr[0],
                            2:newCardNamesArr[1],
                            3:newCardNamesArr[2],
                            4:newCardNamesArr[3],
                            5:newCardNamesArr[4],
                        }
                    })
                }     
            }
        }),
        {name: 'TaroStore'}
    )
)