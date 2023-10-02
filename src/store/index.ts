import { breakpoints} from "@/styles/breakpoints";
import { create } from "zustand";

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

