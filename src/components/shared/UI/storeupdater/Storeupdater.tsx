"use client"
import { useDefinition } from '@/store';
import { YandexMetricaProvider } from 'next-yandex-metrica';
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
    return (
    <div>
        <noscript>
            <div>
                <img src="https://mc.yandex.ru/watch/95657739" style={{position:"absolute", left:"-9999px"}} alt="" />
            </div>
        </noscript>
    </div>
    )
}

export default StoreUpdater

