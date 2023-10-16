export const CardLinks = [
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
    '/taroCards/blured/heirophant.png',
    '/taroCards/blured/hanged_man.png',
    '/taroCards/blured/devil.png',
    '/taroCards/blured/empress.png',
    '/taroCards/blured/emperor.png',
    '/taroCards/blured/death.png',
    '/taroCards/blured/justice.png',
    '/taroCards/blured/jugment.png',
]

const getRandomNumber = () =>{
    return Math.floor(Math.random() * (78 - 1) + 1);
}

export const getNRandomNumbers = (n:number) =>{
    const rndNArr:number[] = []
    for( let i = 0; i < n; i ++){
        rndNArr.push(getRandomNumber());
    }

    return rndNArr
}




