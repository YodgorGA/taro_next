import { NextResponse } from "next/server";
import OpenAI from "openai";
const openai = new OpenAI();




const getChatResp = async (request:{taroReq:string,taroCardNames:string}) => {
    
    const completion = await openai.chat.completions.create({
        messages: [
            { 
                role: "system", content: `Выступи в качестве таролога, говори загадочно и расплывчато.` 
            },
            {
                role:'user',
                content:`Сделай анализ расклада таро. Мои карты ${request.taroCardNames} и мой вопрос ${request.taroReq}`
            }],
        model: "gpt-3.5-turbo",

    });
    
    return completion.choices[0].message.content;
}

export async function POST(request:Request){
    const response = await request.json()
    const chatResp = await getChatResp(response);
    console.log(response);
    return NextResponse.json({chatResp});
}