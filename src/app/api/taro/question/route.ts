import { NextResponse } from "next/server";
import OpenAI from "openai";
const openai = new OpenAI();


const getChatResp = async (body:string) => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: `${body}` }],
        model: "gpt-3.5-turbo",
      });
    
      return completion.choices[0].message.content;
}

export async function POST(request:Request,){
    const body:string = await request.json()
    const chatResp = await getChatResp(body);
    return NextResponse.json({chatResp});
}