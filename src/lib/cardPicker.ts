import { ICardInfo } from '@/lib/types';

const cardNames = [
    '2cups','2pentacles','2swords','2wands',
    '3cups','3pentacles','3swords','3wands',
    '4cups','4pentacles','4swords','4wands',
    '5cups','5pentacles','5swords','5wands',
    '6cups','6pentacles','6swords','6wands',
    '7cups','7pentacles','7swords','7wands',
    '8cups','8pentacles','8swords','8wands',
    '9cups','9pentacles','9swords','9wands',
    '10cups','10pentacles','10swords','10wands',
    'ace_of_cups','ace_of_pentacles','ace_of_swords','ace_of_wands',
    'king_of_cups','king_of_pentacles','king_of_swords','king_of_wands',
    'knight_of_cups','knight_of_pentacles','knight_of_swords','knight_of_wands',
    'queen_of_cups','queen_of_pentacles','queen_of_swords','queen_of_wands',
    'page_of_cups','page_of_pentacles','page_of_swords','page_of_wands',
    'lovers','chariot','star','sun','moon','strength','temperance',
    'tower','wheel_of_fortune','world','magician','hermit','fool',
    'high_priestess','hierophant','hanged_man','devil','empress',
    'emperor','death','justice','judgement'
]


const cardMeta:{
    [key:string]:{
        [key:string]:string
    }
} = {
    solo:{
        death:'смерть',
        justice:'справедливость',
        judgment:'суд',
        emperor:'император',
        empress:'императрица',
        devil:'дьявол',
        hanged_man:'повешенный',
        hierophant:'иерофант',
        high_priestess:'верховная жрица',
        fool:'дурак',
        hermit:'отшельник',
        magician:'волшебник',
        world:'мир',
        wheel_of_fortune:'колесо фортуны',
        tower:'башня',
        temperance:'умеренность',
        strength:'сила',
        lovers:'влюбленные',
        chariot:'колесница',
        star:'звезда',
        sun:'солнце',
        moon:'луна',
    },

    types:{
        cups:'кубков',
        pentacles:'пентаклей',
        swords:'мечей',
        wands:'жезлов',
    },

    ranks:{
        page:'паж',
        knight:'рыцарь',
        queen:'королева',
        king:'король',
        ace:'туз'
    },

    digit:{
        '2':'двойка',
        '3':'тройка',
        '4':'четвёрка',
        '5':'пятёрка',
        '6':'шестёрка',
        '7':'семёрка',
        '8':'восьмёрка',
        '9':'девятка',
        '10':'десятка',
    }
    
}




const createCardInfo = (name:string) =>{
    const cardInfo = {
        [name]:{
            quantor:''||null,
            type:'',
            link:`/taroCards/blured/${name}.png`,
        },
        set setCardInfo(name:any){
            if(name.match(/\d+/)){
                let quantor = name.match(/\d+/)![0]
                let type = name.split(name.match(/\d+/)![0])[1]
                this[name].quantor = cardMeta.digit[quantor];
                this[name].type = cardMeta.types[type];
                // console.log(cardInfo);

            }
            else if(name.match('_of_')){
                let quantor = name.split('_of_')[0];
                let type = name.split('_of_')[1];
                this[name].quantor = cardMeta.ranks[quantor];
                this[name].type = cardMeta.types[type];
                // console.log(cardInfo);
            }
            else{
                let quantor = null;
                let type = name;
                this[name].quantor = quantor;
                this[name].type = cardMeta.solo[type]
                // console.log(cardInfo);
            }
            
        }
    }

    cardInfo.setCardInfo = name;

    return cardInfo
}

// const getCardNameByLink = (link:string) =>{
//     return link.match(/([^/]*?)(?:\..*)?$/)![1]
// }
export const getRandomCardItems = () =>{
    const randomNumber = () => Number(Math.floor(Math.random() * (78 - 1) + 1));
    // const randomcardNames:string[] = []
    const randomCardItems:ICardInfo[] = [];
    const cardNamesSet = new Set<string>()
    
    do { cardNamesSet.add(cardNames[randomNumber()])} while (cardNamesSet.size < 5);

    cardNamesSet.forEach((item:string)=>{
        randomCardItems.push(createCardInfo(item));
        // console.log(randomCardItems);
    })

    return randomCardItems
}