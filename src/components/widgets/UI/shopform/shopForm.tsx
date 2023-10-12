"use client"
import {FC} from 'react';
import S from './shopform.module.scss';

interface ShopFormProps {
    
}

export const ShopForm:FC<ShopFormProps> = ({...ShopFormProps}) =>{
    
    return ( 
        <>
            <div className={S.form}>
                <label className={S.form_label}>Введите ваше Имя Фамилию</label>
                <input className={S.form_input}/>
                <label className={S.form_label}>Введите ваш эл. адрес</label>
                <input className={S.form_input}/>
                <label className={S.form_label}>Telegram</label>
                <input className={S.form_input}/>
            </div>
            <div className={S.button}>
                Отправить
            </div>
        </>
    )
}

export default ShopForm

