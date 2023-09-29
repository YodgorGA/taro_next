import {FC} from 'react';
import S from './main.module.scss';

interface MainPageProps {
    
}

export const MainPage:FC<MainPageProps> = ({...MainPageProps}) =>{
    
    return ( 
        <main className={S.main_container}>
            <div className={S.backgroundImage_container}>

            </div>
            {/*HEADER*/}
            <div className={S.pageContent}>
                <div className={S.hero_container}>
                    {/*LOGO*/}
                    <div className={S.contactUs_container}>
                        {/*ICON TG*/}
                        {/*ICON MAIL*/}
                    </div>
                    <div className={S.description_container}>
                        <p>Краткое и заманивающее описание услуг</p>
                    </div>
                </div>
                <div className={S.mainImage_container}>
                    {/*DIVIDER*/}
                    <img src="#" alt="Портал магии" className={S.sandclockImage}/>
                    <div className={S.brandname_container}>
                        <p>ПОртал магии</p>
                    </div>
                </div>
                <div className={S.buttons_container}>
                    {
                        /*BUTTON BIG*/
                        /*BUTTON SMALL*/
                    }
                </div>

            </div>

        </main>
    )
}

export default MainPage

