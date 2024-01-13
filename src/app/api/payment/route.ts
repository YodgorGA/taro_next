import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

interface IPaymentResponse{
  data:{
    status:string
  }
}

export async function POST(request:Request){

    const { paymentId } = await request.json()
    
    // console.log(paymentId,['payment route'])
    const shopId = process.env.YOO_KASSA_SHOP_ID;
    const secretKey = process.env.YOO_KASSA_SHOP_SECRET_KEY;
    const idempotenceKey = randomUUID();

    try {
      const getPaymentStatus = async ():Promise<IPaymentResponse>=>{
        const response = await fetch(`https://api.yookassa.ru/v3/payments/${paymentId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Basic ${btoa(`${shopId}:${secretKey}`)}`,
            'Idempotence-Key': idempotenceKey,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        // console.log(data.status,['getPaymentStatus']);
        return data.status
      }
      const paymentStatus = await getPaymentStatus();
      
      paymentStatus
        // Верните данные, включая confirmation_url
        return NextResponse.json({ 
          status:paymentStatus
        });
      } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'An error occurred during payment processing' });
      }
}