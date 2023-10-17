"use client"
import { FC, useEffect, useState } from 'react';
import S from './processing.module.scss';
import { Button, Cross, Title } from '@/components/shared';
import { useRouter } from 'next/navigation';
import { getRandomLinks } from '@/lib/cardPicker';
import Image from 'next/image';

interface TaroProcessingProps {
    
}


export const TaroProcessing:FC<TaroProcessingProps> = ({...TaroProcessingProps}) =>{
    const router = useRouter()
    const [randomCardLinks,setRandomCardLinks] = useState<string[]>([])
    const buttonClickHandler = () =>{
        router.push('/taro/waiting');
    }
    useEffect(()=>{
        setRandomCardLinks(getRandomLinks())
    },[])
    return ( 
        <section className={S.container}>
            <div className={S.cross_container}>
                <Cross href='/taro'/>
            </div>
            <div className={S.wrapper}>
                <Title children='Раcклад'/>
                <div className={S.cards_container}>
                {
                    randomCardLinks.map((link)=>{
                        return (
                        <div key={Math.random()} className={S.cards_cardItemContainer}>
                            <div  className={S.cards_cardItem}>
                                <Image src={link} fill alt=''/>
                            </div>
                        </div>)
                    })
                }
                </div>
                <div className={S.cards_buttonContainer}>
                    <Button clickHandler={buttonClickHandler}>Оплатить и узнать результат</Button>
                </div>
            </div>
        </section>
    )
}

export default TaroProcessing

