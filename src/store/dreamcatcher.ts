import { create } from "zustand";
import { devtools } from 'zustand/middleware'

interface IDreamcatcherStore {
    dreamcatcherReq:string,
    dreamcatcherAnswer:string,
    setDreamcatcherReq:(reqText:string)=>void,
    setDreamcatcherAnswer:(answer:string)=>void,
}

export const DreamcatcherStore = create<IDreamcatcherStore>()(
    devtools(
        (set)=>({
            dreamcatcherReq:'',
            dreamcatcherAnswer:'',
            setDreamcatcherReq:(reqText:string)=>{
                set({dreamcatcherReq: reqText})
            },
            setDreamcatcherAnswer:(answer:string)=>{
                set({dreamcatcherAnswer: answer})
            },
        }),
        {name: 'DreamcatcherStore'}
    )
)