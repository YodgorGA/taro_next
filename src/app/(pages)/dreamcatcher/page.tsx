import {FC} from 'react';
import S from './dreamcatcher.module.scss';
import { Title } from '@/components/shared';
import Image from 'next/image';
import numerologyLeft from '/public/assets/images/numerologyLeft.png';
import numerologyRight from '/public/assets/images/numerologyRight.png';
import { FormModal } from '@/components/widgets';

interface DreamcatcherProps {
    
}

export const Dreamcatcher:FC<DreamcatcherProps> = ({...DreamcatcherProps}) =>{
    
    return ( 
        <section className={S.numerology_container}>
            <Title children='Сонник'/>
            <div className={S.content}>
                <div className={S.content_left}>
                    <div className={S.image_right}>
                        <Image fill src={numerologyLeft} alt=''/>
                    </div>
                    <div className={S.content_text}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque quos harum quaerat esse sed officia nulla possimus veritatis maxime doloremque id suscipit hic, culpa quis? Voluptas ullam debitis totam.
                        </p>
                    </div>
                </div>
                <div className={S.content_right}>
                    <div className={S.image_right}>
                        <Image fill src={numerologyRight} alt=''/>
                    </div>
                    <div className={S.content_text}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio omnis veritatis vero! Ratione libero sint veniam beatae quas magnam autem culpa mollitia reprehenderit cumque quaerat ea repellendus vitae, explicabo nesciunt.
                        </p>
                    </div>
                </div>
            </div>
            <FormModal href='/dreamcatcher/processing'/>
        </section>
    )
}

export default Dreamcatcher

