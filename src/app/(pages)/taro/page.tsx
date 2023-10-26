import {FC} from 'react';
import S from './taro.module.scss';
import Image from 'next/image';
import Taro1 from '/public/assets/images/taroLeft.png';
import Taro2 from '/public/assets/images/taroRight.png';
import { FormModal } from '@/components/widgets';
import {Title } from '@/components/shared';


interface TaroPageProps {
    
}



export const TaroPage:FC<TaroPageProps> = ({...TaroPageProps}) =>{
    
    return ( 
        <section className={S.container}>
            <Title children='Таро'/>
            <div className={S.content}>
                <div className={S.content_top}>
                    <div className={S.image_top}>
                        <Image fill src={Taro1} alt=''/>
                    </div>
                    <div className={S.content_text}>
                        <p>
                            Сонник - это справочник символов и интерпретаций, связанных со снами. Ваши сновидения могут содержать ключи к пониманию вашего подсознания и скрытых желаний. С помощью сонника, вы можете разгадать символику ваших снов и получать ценные инсайты.
                        </p>
                    </div>
                </div>
                <div className={S.content_bottom}>
                    <div className={S.image_bottom}>
                        <Image fill src={Taro2} alt=''/>
                    </div>
                    <div className={S.content_text}>
                        <p>
                        Добро пожаловать на страницу, посвященную соннику, инструменту, который поможет вам понять символику и значения ваших снов. Мы предоставляем вам возможность исследовать тайны своего подсознания через анализ снов.
                        </p>
                    </div>
                </div>
            </div>
            <FormModal href='/taro/processing'/>
        </section>
    )
}

export default TaroPage

