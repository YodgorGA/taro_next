import {FC} from 'react';
import S from './dreamcatcher.module.scss';
import { Title } from '@/components/shared';
import Image from 'next/image';
import { FormModal } from '@/components/widgets';
import dreamcatcherLeft from '/public/assets/images/dreamcatcher.webp';
import dreamCatcherRight from '/public/assets/images/dreamcatcher2.jpg';

interface DreamcatcherProps {
    
}

export const Dreamcatcher:FC<DreamcatcherProps> = ({...DreamcatcherProps}) =>{
    
    return ( 
        <section className={S.container}>
            <Title children='Сонник'/>
            <div className={S.content}>
                <div className={S.content_top}>
                    <div className={S.image_top}>
                        <Image fill src={dreamcatcherLeft} alt=''/>
                    </div>
                    <div className={S.content_text}>
                        <p>
                            Сонник - это справочник символов и интерпретаций, связанных со снами. Ваши сновидения могут содержать ключи к пониманию вашего подсознания и скрытых желаний. С помощью сонника, вы можете разгадать символику ваших снов и получать ценные инсайты.
                        </p>
                    </div>
                </div>
                <div className={S.content_bottom}>
                    <div className={S.image_bottom}>
                        <Image fill src={dreamCatcherRight} alt=''/>
                    </div>
                    <div className={S.content_text}>
                        <p>
                        Добро пожаловать на страницу, посвященную соннику, инструменту, который поможет вам понять символику и значения ваших снов. Мы предоставляем вам возможность исследовать тайны своего подсознания через анализ снов.
                        </p>
                    </div>
                </div>
            </div>
            <FormModal href='/dreamcatcher/processing'/>
        </section>
    )
}

export default Dreamcatcher

