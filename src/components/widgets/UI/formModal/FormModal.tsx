"use client"
import {FC, useEffect, useState} from 'react';
import S from './formModal.module.scss';
import {usePathname, useRouter} from 'next/navigation';
import { useUserFunctionStore } from '@/store';


interface FormModalProps {
    href:string,
    currentReq: 'dreamcatcherReq'|'numerologyReq'|'taroReq',
    currentPathName:'/taro'|'/numerology'|'/dreamcatcher'
}

export const FormModal:FC<FormModalProps> = ({currentPathName,currentReq,href,...FormModalProps}) =>{
    const [isHidden,setIsHidden] = useState<boolean>(true);
    const [errors,setErrors] = useState<string[]>([]);
        
    const setDreamCatcherReq = useUserFunctionStore(state=>state.setDreamcatcherReq);
    const setTaroReq = useUserFunctionStore((state)=>state.setTaroReq);
    const setNumerologyReq = useUserFunctionStore(state=>state.setNumerologyReq);
    const dreamcatcherReq= useUserFunctionStore(state=>state.dreamcatcherReq);
    const numerologyReq = useUserFunctionStore(state=>state.numerologyReq);
    const taroReq = useUserFunctionStore(state=>state.taroReq);

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
    const inputChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
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
                                    Задайте свой вопрос и получите на него расклад ответом
                                </p>
                            </div>
                            <div className={S.modal_form}>
                                <label>Введите ваши данные</label>
                                <input className={S.modal_input} placeholder={'Ваше имя'} type={'text'}/>
                                <input onChange={inputChangeHandler} className={S.modal_input} placeholder={'Ваш вопрос'} type={'text'}/>
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

