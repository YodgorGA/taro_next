import { create } from "zustand";
import { devtools } from 'zustand/middleware'


interface INumerologyStore {
    numerologyReq:string,
    numerologyAnswer:string,
    setNumerologyReq:(reqText:string)=>void,
    setNumerologyAnswer:(answer:string)=>void,
}

export const NumerologyStore = create<INumerologyStore>()(
    devtools(
        (set)=>({
            numerologyReq:'',
            numerologyAnswer:'',
            setNumerologyReq:(reqText:string)=>{
                set({numerologyReq: reqText})
            },
            setNumerologyAnswer:(answer:string)=>{
                set({numerologyAnswer: answer})
            },
        }),
        {name: 'NumerologyStore'}
    )
)