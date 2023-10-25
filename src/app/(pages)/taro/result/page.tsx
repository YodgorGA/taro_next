'use client'
import {FC, useEffect, useState} from 'react';
import S from './result.module.scss';
import { Cross, ICardInfo, Title } from '@/components/shared';
import { OpenTaroCards } from '@/components/widgets';

import { useRouter } from 'next/navigation';
import { TaroStore } from '@/store';

interface ResultProps {
    
}


export const Result:FC<ResultProps> = ({...ResultProps}) =>{
    const router = useRouter();
    
    const taroReq = TaroStore(state=>state.taroReq);
    const taroCardItems = TaroStore((state)=>state.taroCardItems)

    const [answer,setAnswer] = useState<string>('');
    const [isLoading,setIsLoading] = useState<boolean>(true);
    const [cardNamesState,setCardNamesState] = useState<string[]>([]);

    const getCardsNames = () =>{
        const cardNames = taroCardItems.map((item:ICardInfo)=>{
            const cardName = Object.keys(item)[0];
            return `${item[cardName].quantor} ${item[cardName].type}`;
        })
        return cardNames
    }
    
    const postQuestion = async () =>{
        const respose = await fetch('/api/taro/question',{
            method:'POST',
            body: JSON.stringify({taroReq,cardNamesState}),
            headers:{
                "Content-Type":'applications/json',
            }
        });
        const data:{chatResp:string} = await respose.json();
        setAnswer(data.chatResp)
        setIsLoading(false)
        console.log(data.chatResp);
    }
    useEffect(()=>{
        if(taroReq === '' || taroReq === undefined){
            router.push('/taro');
        }
        if(isLoading === true){
            setCardNamesState(getCardsNames())
            if(cardNamesState.length >0){
                postQuestion()
            }else{
                throw(new Error(`cardNamesState is empty`))
            }
            
        }
        
    },[])
    
    
    
    

    
    return ( 
        <section className={S.container}>
            <Cross href='/taro'/>
            <div className={S.wrapper}>
                <Title children='Результат'/>
                <div className={S.result_container}>
                    <OpenTaroCards/>
                    <p>{answer}</p>
                </div>
            </div>
        </section>
    )
}

export default Result

