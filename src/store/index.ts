import { ICardInfo } from "@/components/shared";
import { breakpoints} from "@/styles/breakpoints";
import { create } from "zustand";
import { devtools } from 'zustand/middleware'

export interface useDefinition{
    current: number | null,
    isMobile: boolean,
    setCurrentDefinition: () => void,
    setIsMobile:() => void,
}

export const useDefinition = create<useDefinition>((set)=>({
    current: null,
    isMobile: false,
    setCurrentDefinition: () =>{
        set({current:window.innerWidth})
    },
    setIsMobile: ()=>{
        set({isMobile:window.innerWidth <= breakpoints.mobile,})
    }
}))

interface useUserFunctionsStore{
    taroReq:string,
    numerologyReq:string,
    dreamcatcherReq:string,
    taroCardItems:ICardInfo[],
    setTaroReq:(reqText:string)=>void
    setNumerologyReq:(reqText:string)=>void
    setDreamcatcherReq:(reqText:string)=>void
    setTaroCardItems:(cardItems:ICardInfo[])=>void
}


export const useUserFunctionStore = create<useUserFunctionsStore>()(
    devtools(
        (set) =>({
            dreamcatcherReq:'',
            numerologyReq:'',
            taroReq:'',
            taroCardItems:[],
            setTaroCardItems:(cardItems:ICardInfo[])=>{
                set({taroCardItems:cardItems})
            },
            setTaroReq: (reqText:string) =>{
                set({taroReq: reqText})
            },
            setNumerologyReq: (reqText:string) =>{
                set({numerologyReq:reqText})
            },
            setDreamcatcherReq: (reqText:string) =>{
                set({dreamcatcherReq:reqText})
            },
        }),
        {name:'userFuncStore'}
    )
)