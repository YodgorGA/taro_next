import { NextResponse } from "next/server";
import OpenAI from "openai";
const openai = new OpenAI();


const getChatResp = async (request:{dreamcatcherReq:string}) => {
    
    const completion = await openai.chat.completions.create({
        messages: [
            { 
                role: "system", content: `Выступи в качестве толкователя снов, говори и расплывчато делай предположения.` 
            },
            {
                role:'user',
                content:`Проанализируй и истолкуй мой сон: ${request.dreamcatcherReq}`
            }],
        model: "gpt-3.5-turbo",

    });
    
    return completion.choices[0].message.content;
    // return (request.dreamcatcherReq);
}

export async function POST(request:Request){
    const response = await request.json()
    const chatResp = await getChatResp(response);
    return NextResponse.json({chatResp});
}