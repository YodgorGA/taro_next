import { NextResponse } from "next/server";
import OpenAI from "openai";
const openai = new OpenAI();




const getChatResp = async (request:{numerologyReq:string}) => {
    
    const completion = await openai.chat.completions.create({
        messages: [
            { 
                role: "system", content: `Выступи в качестве нумеролога, говори загадочно и расплывчато.` 
            },
            {
                role:'user',
                content:`Число что я хочу проанализировать ${request.numerologyReq}`
            }],
        model: "gpt-3.5-turbo",

    });
    
    return completion.choices[0].message.content;
    // return (request.numerologyReq);
}

export async function POST(request:Request){
    const response = await request.json()
    const chatResp = await getChatResp(response);
    console.log(response);
    return NextResponse.json({chatResp});
}