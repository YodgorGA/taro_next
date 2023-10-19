
export const getTimerDigits = (currentTime:number)=>{
    let strNumsArr:string[] = []; 
    if(currentTime < 10){
        strNumsArr = `0${currentTime}`.split('');
    }   
    strNumsArr = String(currentTime).split('');
    const intNumArr:number[] = [];
    strNumsArr.forEach((number)=>{
        intNumArr.push(Number(number));
    })
    return intNumArr
}

export const getTimerDigitLink = (digit:number)=>{
    // console.log(digit);
    return (
        `/timerCards/${digit}.png`
    )
}