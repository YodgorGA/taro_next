"use client"
import {FC, useState} from 'react';
import S from './formModal.module.scss';
import Link from 'next/link';

interface FormModalProps {
    href:string
}

export const FormModal:FC<FormModalProps> = ({href,...FormModalProps}) =>{
    const [isHidden,setIsHidden] = useState<boolean>(true);
    const modalToggler = () =>{
        isHidden === true? setIsHidden(false) : setIsHidden(true);
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
                                <input className={S.modal_input} placeholder={'Ваш вопрос'} type={'text'}/>
                            </div>
                            <div className={S.modal_buttonContainer}>
                                <button className={S.modal_button}><Link href={href}>Узнать ответ</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
        </>
        
    )
}

export default FormModal

