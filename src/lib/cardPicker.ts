const bluredDir = '/public/taroCards/blured';
const normalDir = '/public/taroCards/default';

const links = [
    '/taroCards/blured/2cups.png',
    '/taroCards/blured/2pentacles.png',
    '/taroCards/blured/2swords.png',
    '/taroCards/blured/2wands.png',
    '/taroCards/blured/3cups.png',
    '/taroCards/blured/3pentacles.png',
    '/taroCards/blured/3swords.png',
    '/taroCards/blured/3wands.png',
    '/taroCards/blured/4cups.png',
    '/taroCards/blured/4pentacles.png',
    '/taroCards/blured/4swords.png',
    '/taroCards/blured/4wands.png',
    '/taroCards/blured/5cups.png',
    '/taroCards/blured/5pentacles.png',
    '/taroCards/blured/5swords.png',
    '/taroCards/blured/5wands.png',
    '/taroCards/blured/6cups.png',
    '/taroCards/blured/6pentacles.png',
    '/taroCards/blured/6swords.png',
    '/taroCards/blured/6wands.png',
    '/taroCards/blured/7cups.png',
    '/taroCards/blured/7pentacles.png',
    '/taroCards/blured/7swords.png',
    '/taroCards/blured/7wands.png',
    '/taroCards/blured/8cups.png',
    '/taroCards/blured/8pentacles.png',
    '/taroCards/blured/8swords.png',
    '/taroCards/blured/8wands.png',
    '/taroCards/blured/9cups.png',
    '/taroCards/blured/9pentacles.png',
    '/taroCards/blured/9swords.png',
    '/taroCards/blured/9wands.png',
    '/taroCards/blured/10cups.png',
    '/taroCards/blured/10pentacles.png',
    '/taroCards/blured/10swords.png',
    '/taroCards/blured/10wands.png',
    '/taroCards/blured/ace_of_cups.png',
    '/taroCards/blured/ace_of_pentacles.png',
    '/taroCards/blured/ace_of_swords.png',
    '/taroCards/blured/ace_of_wands.png',
    '/taroCards/blured/king_of_cups.png',
    '/taroCards/blured/king_of_pentacles.png',
    '/taroCards/blured/king_of_swords.png',
    '/taroCards/blured/king_of_wands.png',
    '/taroCards/blured/knight_of_cups.png',
    '/taroCards/blured/knight_of_pentacles.png',
    '/taroCards/blured/knight_of_swords.png',
    '/taroCards/blured/knight_of_wands.png',
    '/taroCards/blured/queen_of_cups.png',
    '/taroCards/blured/queen_of_pentacles.png',
    '/taroCards/blured/queen_of_swords.png',
    '/taroCards/blured/queen_of_wands.png',
    '/taroCards/blured/page_of_cups.png',
    '/taroCards/blured/page_of_pentacles.png',
    '/taroCards/blured/page_of_swords.png',
    '/taroCards/blured/page_of_wands.png',
    '/taroCards/blured/lovers.png',
    '/taroCards/blured/chariot.png',
    '/taroCards/blured/star.png',
    '/taroCards/blured/sun.png',
    '/taroCards/blured/moon.png',
    '/taroCards/blured/strength.png',
    '/taroCards/blured/temperance.png',
    '/taroCards/blured/tower.png',
    '/taroCards/blured/wheel_of_fortune.png',
    '/taroCards/blured/world.png',
    '/taroCards/blured/magician.png',
    '/taroCards/blured/hermit.png',
    '/taroCards/blured/fool.png',
    '/taroCards/blured/high_priestess.png',
    '/taroCards/blured/hierophant.png',
    '/taroCards/blured/hanged_man.png',
    '/taroCards/blured/devil.png',
    '/taroCards/blured/empress.png',
    '/taroCards/blured/emperor.png',
    '/taroCards/blured/death.png',
    '/taroCards/blured/justice.png',
    '/taroCards/blured/judgment.png',
]


const cardMeta = {
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

    numbers:{
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
    // const cardInfo = {
    //     [name]:{

    //     },
    
    //     set setCardInfo(){
    //         for(let meta in cardMeta){
    //             for( let metaItem in meta){
    //                 this[name] = {
    //                     name:`${cardMeta.numbers[2]} ${cardMeta.types}`,
    //                     url: 
    //                 }
    //             }

    //         }

    //     }
    
    // }
}


const getCardNameByLink = (link:string) =>{
    return link.match(/([^/]*?)(?:\..*)?$/)![1]
}
export const getRandomLinks = () =>{
    const randomNumber = () => Number(Math.floor(Math.random() * (78 - 1) + 1));
    const randomLinks:string[] = []
    const linksSet = new Set<string>()
    
    do { linksSet.add(links[randomNumber()])} while (linksSet.size < 5);

    linksSet.forEach((item:string)=>{
        randomLinks.push(item)
        
        getCardNameByLink(item);
    })


    return randomLinks
}