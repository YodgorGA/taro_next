import {FC} from 'react';
import S from './result.module.scss';
import { Cross, Title } from '@/components/shared';
import { TaroCards } from '@/components/widgets';

interface ResultProps {
    
}

const getData = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json();
}

export const Result:FC<ResultProps> = async ({...ResultProps}) =>{
    const posts:[{
        userId:number,
        id:number,
        title:string,
        body:string,
    }] = await getData();
    return ( 
        <section className={S.container}>
            <Cross href='/taro'/>
            <div className={S.wrapper}>
                <Title children='Результат'/>
                <div className={S.result_container}>
                    <TaroCards/>
                    <p></p>
                    {
                        posts.map((post)=>{
                            return (
                                <div> 
                                    <p>{post.id}</p>
                                    <p>{post.title}</p>
                                    <p>{post.body}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Result

