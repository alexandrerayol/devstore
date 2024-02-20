import type {NextRequest} from 'next/server'
import {z} from 'zod'
import data from '../data.json'

export async function GET(request:NextRequest){
    await new Promise(resolve => setTimeout(resolve, 2000))
    //1° capturar o search params
    const {searchParams} = request.nextUrl
    const query = z.string().parse(searchParams.get('query'))
    
    //2° validar titulos dos produtos com o search params

    const products = data.products.filter((product) => {
        return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    })

    if(products.length === 0){
        return Response.json({ErrorMessage: `${query} not found`})
    }
    
    return Response.json(products)
}