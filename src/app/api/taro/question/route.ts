import { NextResponse } from "next/server";


// const chatReq = async (message:string) =>{
//     const resp = await fetch('https://api.openai.com/v1/chat/completions',{
//         method:'POST',
//         body:{}
//     })
// }

export async function POST(request:Request,){
    const body = await request.json()

    return NextResponse.json({body});
}