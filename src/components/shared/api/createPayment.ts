export const useCreatePayment = async (body:{email:string,description?:string,redirectLink:string}) =>{
    const response = await fetch('/api/create-payment',{
        method:'POST',
        body:JSON.stringify(body)
    })

    const responseData = await response.json();

    console.log(responseData,['createPayment']);
    return responseData
}