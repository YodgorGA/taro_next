import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

export async function POST(request:Request){

    const shopId = process.env.YOO_KASSA_SHOP_ID;
    const secretKey = process.env.YOO_KASSA_SHOP_SECRET_KEY;
    const idempotenceKey = randomUUID();

    const requestData = {
        amount: {
          value: '2.00',
          currency: 'RUB',
        },
        payment_method_data: {
          type: 'bank_card',
        },
        confirmation: {
          type: 'redirect',
          return_url: `${process.env.YOO_KASSA_REDIRECT_URL}/taro/waiting`,
        },
        description: 'Заказ №72',
        receipt: {
            items: [
              {
                description: 'Товар 1',
                quantity: '1',
                amount: {
                  value: '2.00',
                  currency: 'RUB',
                },
                vat_code: '1',
              },
            ],
            customer: {
                email: 'customer@example.com',
                phone: '79111234567',
            },
        },

    };


    try {
        const response = await fetch('https://api.yookassa.ru/v3/payments', {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${btoa(`${shopId}:${secretKey}`)}`,
            'Idempotence-Key': idempotenceKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
    
        const data = await response.json();
    
        // Верните данные, включая confirmation_url
        return NextResponse.json({ redirectLink: data.confirmation.confirmation_url });
      } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred during payment processing' });
      }
}