import data from '../data.json'

export async function GET(request:Request,{params}: {params: {slug: string}}){
    //delay de 1s
    await new Promise(resolve => {
        setTimeout(resolve, 1000)
    })

    const product = data.products.find((product) => {
        if(product.slug === params.slug){
            return product
        }
    })

    if(!product){
        return(
            Response.json({ErrorMessage: 'product not found'}, {status: 400})
        )
    }

    return(
        Response.json(product)
    )
}