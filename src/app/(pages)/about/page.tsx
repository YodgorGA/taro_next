import {FC} from 'react';
import S from './about.module.scss';

interface AboutPageProps {
    
}

export const AboutPage:FC<AboutPageProps> = ({...AboutPageProps}) =>{
    
    return ( 
        <section className={S.about_container}>
            
        </section>
    )
}

export default AboutPage

