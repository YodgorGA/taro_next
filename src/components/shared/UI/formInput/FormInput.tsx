"use client"
import {FC,useState} from 'react';
import S from './formInput.module.scss';
import { getPlaceholder } from '@/components/widgets';


interface FormInputProps {
    id?:number,
    onChange:(id:number,value:string)=>void,
    pathname?:string
}

export const FormInput:FC<FormInputProps> = ({id,onChange,pathname}) => {
    const [ state, setState ] = useState<string>('')

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setState(e.currentTarget.value)
        id && onChange(id,e.currentTarget.value)
    }
  return (
    <input onChange={changeHandler} id={`${id}`} className={S.input} placeholder={pathname && getPlaceholder(pathname)} type={'text'} value={state}/>
  )
}
