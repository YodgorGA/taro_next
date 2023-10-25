"use client"
import { useDefinition } from '@/store';
import { useEffect } from 'react';

export const StoreUpdater = ({...StoreUpdaterProps}) =>{
    const setCurrentDefinition = useDefinition((store)=>store.setCurrentDefinition);
    const setIsMobile = useDefinition((store)=>store.setIsMobile);
    const currentDefinition = useDefinition((store)=>store.current);
    const isMobile = useDefinition((store)=>store.isMobile);
    useEffect(()=>{
        setCurrentDefinition();
        setIsMobile()
        console.log(`currentDefinition:${currentDefinition}\nisMobile:${isMobile}`);
    })
    return (<div></div>)
}

export default StoreUpdater

