import Button from "./UI/button/Button"
import StoreUpdater from "./UI/storeupdater/Storeupdater"
import Navbar from "./UI/navbar/Navbar"
import Burger from "./UI/burger/Burger"
import Title from "./UI/title/Title"
import CardTimer from "./UI/cardTimer/CardTimer"
import type {ICardItem,ICardInfo,ITimerCardInfo} from "./lib/types";
import { Items,Item } from "./lib/mock"
import Cross from "./UI/cross/Cross"
import { getTimerDigits,getTimerDigitLink } from "./lib/cardTimerHelper"
import { getCardsNames } from "./lib/getStoreData"



export {
    Button,
    StoreUpdater,getTimerDigits,getTimerDigitLink,getCardsNames,
    Burger,
    Navbar,
    Title,
    CardTimer,
    ICardItem,ICardInfo,ITimerCardInfo,
    Items,
    Item,
    Cross
}