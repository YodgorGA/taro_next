"use client"
import { useDefinition } from '@/store';
import Script from 'next/script';
import { useEffect } from 'react';

export const StoreUpdater = ({...StoreUpdaterProps}) =>{
    const setCurrentDefinition = useDefinition((store)=>store.setCurrentDefinition);
    const setIsMobile = useDefinition((store)=>store.setIsMobile);
    const currentDefinition = useDefinition((store)=>store.current);
    const isMobile = useDefinition((store)=>store.isMobile);
    <Script id="metrika-counter" strategy="afterInteractive">
    {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(95657739, "init", {
            defer: true,
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
      });`
    }
  </Script>
    useEffect(()=>{
        setCurrentDefinition();
        setIsMobile()
        // console.log(`currentDefinition:${currentDefinition}\nisMobile:${isMobile}`);
    })
    return (<div></div>)
}

export default StoreUpdater

