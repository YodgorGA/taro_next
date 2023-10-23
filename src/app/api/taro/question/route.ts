import { NextResponse } from "next/server";


const chatReq = async (body:{
    model:string,
    messages:[
        {
            role:string,
            content:string
        }
    ]
}) =>{
    const resp = await fetch('https://api.openai.com/v1/chat/completions',{
        method:'POST',
        headers:{
            "Content-Type":"aplication/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
        },
        body:JSON.stringify(body)
    })

    return resp
}

export async function POST(request:Request,){
    const body = await request.json()
    const chatResp = await chatReq({
        model:'gpt-3.5-turbo',
        messages:[{
            role:`user`,
            content: body
        }]
    })
    return NextResponse.json({chatResp});
}