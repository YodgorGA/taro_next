import {FC} from 'react';
import S from './taro.module.scss';
import Image from 'next/image';
import TaroLeft from '/public/assets/images/taroLeft.png';
import TaroRight from '/public/assets/images/taroRight.png';
import { FormModal } from '@/components/widgets';
import {Title } from '@/components/shared';


interface TaroPageProps {
    
}



export const TaroPage:FC<TaroPageProps> = ({...TaroPageProps}) =>{
    
    return ( 
        <section className={S.taro_container}>
            <Title children='Таро'/>
            <div className={S.content}>
                <div className={S.content_left}>
                    <div className={S.image_right}>
                        <Image fill src={TaroLeft} alt=''/>
                    </div>
                    <div className={S.content_text}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque quos harum quaerat esse sed officia nulla possimus veritatis maxime doloremque id suscipit hic, culpa quis? Voluptas ullam debitis totam.
                        </p>
                    </div>
                </div>
                <div className={S.content_right}>
                    <div className={S.image_right}>
                        <Image fill src={TaroRight} alt=''/>
                    </div>
                    <div className={S.content_text}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio omnis veritatis vero! Ratione libero sint veniam beatae quas magnam autem culpa mollitia reprehenderit cumque quaerat ea repellendus vitae, explicabo nesciunt.
                        </p>
                    </div>
                </div>
            </div>
            <FormModal href='/taro/processing'/>
        </section>
    )
}

export default TaroPage

