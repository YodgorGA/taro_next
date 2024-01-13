import { create } from "zustand";
import { devtools,persist } from 'zustand/middleware'


interface IPaymentData {
    email:string|null,
    setEmail:(email:string)=>void,
    paymentId:string|null,
    setPaymentId:(id:string)=>void,
}

export const PaymentData = create<IPaymentData>()(
    devtools(persist(
        set=>({
            email:null,
            setEmail:(email:string)=>{
                set({email: email})
            },
            paymentId:null,
            setPaymentId:(id:string)=>{
                set({paymentId: id})
            },
        }),
        {name: 'PaymentData'}
    ))
)