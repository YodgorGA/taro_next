import {FC} from 'react';
import S from './footer.module.scss';

interface FooterProps {
    
}

export const Footer:FC<FooterProps> = ({...FooterProps}) =>{
    
    return ( 
        <footer className={S.container}>
            <div className={S.wrapper}>
                <div className={S.footer_item}>
                    <a href={'https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2Fjkbz%2BqXhMKBIWJUMQXHdLmqh%2FqFFP%2Fd85R11n0aNLbGqhKIFiJQmrmI%2FolqJ3Uduq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=ПОЛИТИКА%20ОБ%20ОБРАБОТКЕ%20ПЕРСОНАЛЬНЫХ%20ДАННЫХ%20от%2015.09.2023.pdf'}>Политика об обработке персональных данных</a>
                </div>
                <div className={S.footer_item}>
                    <a href={'https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FD3McVeqqWLCMHW9pasnWviPdHsZSVh1gx84Dx9zY1p8R9JRPQREofyyqJkEJ95L0q%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=ПУБЛИЧНЫЙ%20ДОГОВОР%20ОФЕРТА%20от%2015.09.2023.pdf'}>Публичный договор оферта</a>
                </div>
                <div className={S.footer_item}>
                    <p>ИП Наумик Виталий Владимирович</p>
                </div>
                <div className={S.footer_item}>
                    <p>ИНН: 022001216707</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

