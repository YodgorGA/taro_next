export const getDescription = (pathname:string) =>{
    let desc:string = '';
    pathname.includes('taro')? desc = 'Задайте свой вопрос и получите на него расклад ответом'
    :pathname.includes('numerology')? desc = 'Введите дату и мы проведем анализ'
    :desc = 'Опишите кратко ваш сон и мы растолкуем его значение'
    return desc
}

export const getPlaceholder = (pathname:string) =>{
    let plaseholder:string = '';
    pathname.includes('taro')? plaseholder = 'Ваш вопрос'
    :pathname.includes('numerology')? plaseholder = 'Интересующая дата'
    :plaseholder = 'Ваш сон'
    return plaseholder
}