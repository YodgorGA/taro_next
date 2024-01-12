"use client"
import {FC,useEffect,useState} from 'react';
import S from './formModal.module.scss';
import {usePathname, useRouter} from 'next/navigation';
import { DreamcatcherStore, TaroStore, NumerologyStore } from '@/store';
import { getDescription,getPlaceholder } from '@/components/widgets';
import { FormInput, ITaroReq } from '@/components/shared';


interface FormModalProps {
    href:string,
}


export const FormModal:FC<FormModalProps> = ({href,...FormModalProps}) =>{
    const [isHidden,setIsHidden] = useState<boolean>(true);
    const [taroQuestions,setTaroQuestions] = useState<{[key:string]:string}>();
    const [isQuestChanged,setIsQuestChanged] = useState<boolean>(false);
    const [questInputValue,setQuestInputValue] = useState<string>('');
    
        
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
            console.log('taroQuestions:');
            console.log(taroQuestions)
            taroQuestions && setTaroReq(taroQuestions)
            taroReq && taroReq[5] !== '' && router.push(href)
        }
        if(pathname.includes('/numerology')){
            numerologyReq !== '' && numerologyReq !== undefined && router.push(href)
        }
        if(pathname.includes('/dreamcatcher')){
            dreamcatcherReq !== '' && dreamcatcherReq !== undefined && router.push(href)
        }
    }
    const inputChangeHandler = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{

        pathname.includes('/numerology') && setNumerologyReq(e.currentTarget.value);
        pathname.includes('/dreamcatcher') && setDreamCatcherReq(e.currentTarget.value);

        setQuestInputValue(e.currentTarget.value)
    }

    const taroInputChangeHandler = (id:number,value:string) =>{
        setTaroQuestions({
            ...taroQuestions,
            [id]:value
        })
    }

    const hideModal = () =>{
        setIsHidden(true)
    }

    useEffect(()=>{
        setQuestInputValue('');
        setIsQuestChanged(false);
    },[isQuestChanged])
    return ( 
        <>
            <div className={S.button_container}>
                <button onClick={modalToggler} className={S.button}>Задать вопрос</button>
            </div>
            {
                isHidden === false && 
                <div className={S.modal_container}>
                    <div className={S.modal_wrapper}>
                        <div className={S.modal_blur} onClick={hideModal}/>
                        <div className={S.modal_fiedls}>
                            <div className={S.modal_question}>
                                <p>
                                    {getDescription(pathname)}
                                </p>
                            </div>
                            <div className={S.modal_form}>
                                <label>Введите ваши данные</label>
                                <input className={S.modal_input} placeholder={'Ваше имя'} type={'text'}/>
                                <div className={S.modal_inputGroup}>
                                    {
                                        
                                    }
                                    {
                                        pathname.includes('dreamcatcher') 
                                        && <textarea onChange={inputChangeHandler} className={S.modal_input} placeholder={getPlaceholder(pathname)}/>
                                    }
                                    {   
                                        pathname.includes('taro') && <>
                                            <FormInput onChange={taroInputChangeHandler} id={1} pathname={pathname}/>
                                            <FormInput onChange={taroInputChangeHandler} id={2} pathname={pathname}/>
                                            <FormInput onChange={taroInputChangeHandler} id={3} pathname={pathname}/>
                                            <FormInput onChange={taroInputChangeHandler} id={4} pathname={pathname}/>
                                            <FormInput onChange={taroInputChangeHandler} id={5} pathname={pathname}/>
                                        </>
                                    }

                                    {
                                    pathname.includes('numerology') 
                                    && <input onChange={inputChangeHandler} className={S.modal_input} placeholder={getPlaceholder(pathname)} type={'text'} value={questInputValue}/>}
                                </div>

                                
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

