import { NextResponse } from "next/server";
import OpenAI from "openai";
const openai = new OpenAI();




const getChatResp = async (body:{cusomerInput:string,cardNames:string[]}) => {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: `Выступи в качестве таролога, говори загадочно и расплывчато. Сделай анализ расклада таро на базе 5 карт колоды оскара уэйта.Карты ${body.cardNames}` },{
            role:'user',
            content:`${body.cusomerInput}`
        }],
        model: "gpt-3.5-turbo",
      });
    
      return completion.choices[0].message.content;
}

export async function POST(request:Request){
    const body:{cusomerInput:string,cardNames:string[]} = await request.json()
    const chatResp = await getChatResp(body);
    return NextResponse.json({chatResp});
}