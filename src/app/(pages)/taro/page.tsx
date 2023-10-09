import {FC} from 'react';
import S from './taro.module.scss';
import Image from 'next/image';
import TaroLeft from '/public/assets/images/taroLeft.png';
import TaroRight from '/public/assets/images/taroRight.png';

interface TaroPageProps {
    
}

export const TaroPage:FC<TaroPageProps> = ({...TaroPageProps}) =>{
    
    return ( 
        <section className={S.taro_container}>
            <div className={S.title}>
                <p>
                    Таро
                </p>
            </div>
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
            <div className={S.button_container}>
                <button className={S.button}>Задать вопрос</button>
            </div>
            <div className={`${S.modal_container} `}>
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
                            <div className={S.modal_button}>Узнать ответ</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TaroPage

