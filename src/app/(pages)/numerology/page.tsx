import {FC} from 'react';
import S from './numerology.module.scss';
import { Title } from '@/components/shared';
import Image from 'next/image';
import { FormModal } from '@/components/widgets';
import numerology1 from '/public/assets/images/numerologyLeft.png';
import numerology2 from '/public/assets/images/numerologyRight.png';

interface NumerologyProps {
    
}

export const Numerology:FC<NumerologyProps> = ({...NumerologyProps}) =>{
    
    return ( 
        <section className={S.container}>
            <Title children='Нумерология'/>
            <div className={S.content}>
                <div className={S.content_top}>
                    <div className={S.image_top}>
                        <Image fill src={numerology1} alt=''/>
                    </div>
                    <div className={S.content_text}>
                        <p>
                            Сонник - это справочник символов и интерпретаций, связанных со снами. Ваши сновидения могут содержать ключи к пониманию вашего подсознания и скрытых желаний. С помощью сонника, вы можете разгадать символику ваших снов и получать ценные инсайты.
                        </p>
                    </div>
                </div>
                <div className={S.content_bottom}>
                    <div className={S.image_bottom}>
                        <Image fill src={numerology2} alt=''/>
                    </div>
                    <div className={S.content_text}>
                        <p>
                        Добро пожаловать на страницу, посвященную соннику, инструменту, который поможет вам понять символику и значения ваших снов. Мы предоставляем вам возможность исследовать тайны своего подсознания через анализ снов.
                        </p>
                    </div>
                </div>
            </div>
            <FormModal href='/numerology/processing'/>
        </section>
    )
}

export default Numerology

