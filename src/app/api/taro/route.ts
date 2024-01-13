import { NextResponse } from "next/server";
import OpenAI from "openai";
const openai = new OpenAI();


const getChatResp = async (request:{taroReq:{1:string,2:string,3:string,4:string,5:string},taroCardNames:{1:string,2:string,3:string,4:string,5:string}}) => {
    const {taroReq,taroCardNames} = request;
    const query = `Сделай анализ расклада таро. Первая карта ${taroCardNames[1]} и мой вопрос ${taroReq[1]}, вторая карта ${taroCardNames[2]} и мой вопрос ${taroReq[2]}, третья карта ${taroCardNames[3]} и мой вопрос ${taroReq[3]}, четвертая карта ${taroCardNames[4]} и мой вопрос ${taroReq[4]},  пятая карта ${taroCardNames[5]} и мой вопрос ${taroReq[5]},`
    const completion = await openai.chat.completions.create({
        messages: [
            { 
                role: "system", 
                content: `Выступи в качестве таролога. Веди повествование по типу: В вашей жизи будут такие-то обстоятельства влияющие на судьбу решения вопроса, карты подсказывают что при них вам необходимо *тут совет* и тогда это поможет в решении вопроса. Карты должны говорить как о хорошем, так и о плохом` 
            },
            {
                role:'user',
                content:query
            }],
        model: "gpt-3.5-turbo",

    });
    
    return completion.choices[0].message.content;
}

export async function POST(request:Request){
    const response = await request.json()
    const chatResp = await getChatResp(response);
    return NextResponse.json({chatResp});
}