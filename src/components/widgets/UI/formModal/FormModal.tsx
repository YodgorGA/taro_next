"use client"
import {FC, useEffect, useState} from 'react';
import S from './formModal.module.scss';
import {usePathname, useRouter} from 'next/navigation';
import { DreamcatcherStore, TaroStore, NumerologyStore } from '@/store';
import { getDescription,getPlaceholder } from '@/components/widgets';

interface FormModalProps {
    href:string,
}


export const FormModal:FC<FormModalProps> = ({href,...FormModalProps}) =>{
    const [isHidden,setIsHidden] = useState<boolean>(true);
        
    const setDreamCatcherReq = DreamcatcherStore(state=>state.setDreamcatcherReq);
    const dreamcatcherReq= DreamcatcherStore(state=>state.dreamcatcherReq);

    const setTaroReq = TaroStore((state)=>state.setTaroReq);
    const taroReq = TaroStore(state=>state.taroReq);

    const setNumerologyReq = NumerologyStore(state=>state.setNumerologyReq);
    const numerologyReq = NumerologyStore(state=>state.numerologyReq);

    const router = useRouter();
    const pathname = usePathname()
    const modalToggler = () =>{
        isHidden === true? setIsHidden(false) : setIsHidden(true);
    }
    const buttonClickHandler = () =>{
        if(pathname.includes('/taro')){
            taroReq !== '' && taroReq !== undefined && router.push(href)
        }
        if(pathname.includes('/numerology')){
            numerologyReq !== '' && numerologyReq !== undefined && router.push(href)
        }
        if(pathname.includes('/dreamcatcher')){
            dreamcatcherReq !== '' && dreamcatcherReq !== undefined && router.push(href)
        }
    }
    const inputChangeHandler = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        pathname.includes('/taro') && setTaroReq(e.currentTarget.value);
        pathname.includes('/numerology') && setNumerologyReq(e.currentTarget.value);
        pathname.includes('/dreamcatcher') && setDreamCatcherReq(e.currentTarget.value);
    }


    return ( 
        <>
            <div className={S.button_container}>
                <button onClick={modalToggler} className={S.button}>Задать вопрос</button>
            </div>
            {
                isHidden === false && 
                <div className={S.modal_container}>
                    <div className={S.modal_wrapper}>
                        <div className={S.modal_blur}/>
                        <div className={S.modal_fiedls}>
                            <div className={S.modal_question}>
                                <p>
                                    {getDescription(pathname)}
                                </p>
                            </div>
                            <div className={S.modal_form}>
                                <label>Введите ваши данные</label>
                                <input className={S.modal_input} placeholder={'Ваше имя'} type={'text'}/>
                                {pathname.includes('dreamcatcher') ? 
                                    <textarea onChange={inputChangeHandler} className={S.modal_input} placeholder={getPlaceholder(pathname)}/>
                                    :
                                    <input onChange={inputChangeHandler} className={S.modal_input} placeholder={getPlaceholder(pathname)} type={'text'}/>
                                }
                                
                            </div>
                            <div className={S.modal_buttonContainer}>
                                <button onClick={buttonClickHandler} className={S.modal_button}>Узнать ответ</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
        </>
        
    )
}

export default FormModal

