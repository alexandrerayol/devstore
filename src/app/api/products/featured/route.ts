import data from '../data.json'

export async function GET(){

    const featuredProducts = data.products.filter( (product) => {
        if(product.featured){
            return product
        }
    })

    return(
        Response.json(featuredProducts)
    )
}