"use client"
import {FC,useEffect,useState} from 'react';
import S from './formModal.module.scss';
import {usePathname, useRouter} from 'next/navigation';
import { DreamcatcherStore, TaroStore, NumerologyStore, PaymentData } from '@/store';
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
    const [userEmail,setUserEmail] = useState<string>('')
    const setEmail = PaymentData(state=>state.setEmail);
    
        
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

        const getIsEmailValid = (value:string) =>{
            let isValid = false
            const emailRegex = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
            isValid = emailRegex.test(value);
            return isValid
        }
        if(pathname.includes('/taro')){
            if(taroReq && taroQuestions && getIsEmailValid(userEmail) === true){
                console.log('taroQuestions:');
                console.log(taroQuestions);
                setEmail(userEmail);
                setTaroReq(taroQuestions)
                taroReq[5] !== '' && router.push(href)
            }


            
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

    const emailInputChangeHanlder = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setUserEmail(e.currentTarget.value)
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
                                    <input onChange={emailInputChangeHanlder} className={S.modal_input} placeholder={'Введите вашу почту'} type={'text'} value={userEmail}/>
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

