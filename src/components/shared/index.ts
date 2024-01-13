import { useCreatePayment } from './api/createPayment';
import { FormInput } from './UI/formInput/FormInput';
import Button from "./UI/button/Button"
import StoreUpdater from "./UI/storeupdater/Storeupdater"
import Navbar from "./UI/navbar/Navbar"
import Burger from "./UI/burger/Burger"
import Title from "./UI/title/Title"
import CardTimer from "./UI/cardTimer/CardTimer"
import type {ICardItem,ICardInfo,ITimerCardInfo,ITaroReq} from "./lib/types";
import { Items,Item } from "./lib/mock"
import Cross from "./UI/cross/Cross"
import { getTimerDigits,getTimerDigitLink } from "./lib/cardTimerHelper"
import { getCardsNames } from "./lib/getStoreData"
import DigitTimer from "./UI/digitTimer/DigitTimer"
import DreamcatcherTimer from "./UI/dreamcatcherTimer/dreamcatcherTimer"
import Footer from "./UI/footer/Footer"






export {
    Button,
    StoreUpdater,getTimerDigits,getTimerDigitLink,getCardsNames,
    Burger,
    Navbar,
    Title,Footer,
    CardTimer,DigitTimer,DreamcatcherTimer,
    ICardItem,ICardInfo,ITimerCardInfo,ITaroReq,
    Items,
    Item,
    Cross,
    FormInput,
    useCreatePayment
}