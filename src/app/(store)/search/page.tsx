import { api } from "@/data/api"
import { product } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface searchProps {
    searchParams: {
        query: string;
    };
}

async function searchProducts(query: string): Promise<product[]>{
    const response = await api(`/products/search?query=${query}`)
    const products = await response.json()

    return products
}

export default async function Search({searchParams}:searchProps){
    const query = searchParams.query

    if(!query){
        redirect('/')
    }

    const products = await searchProducts(query)

    products.map(product => {
        if(product.ErrorMessage){
            return(
                <>
                    <h1 className="text-zinc-400">Resultados para <span className="text-zinc-50">"{query}"</span></h1>
                    <span>Nenhum produto encontrado!</span>
                </>
            )
        }
    })


    return(
        <div className="flex flex-wrap gap-4">
        {
            products.map(product => (
                <Link href={`/product/${product.slug}`} className="flex items-center justify-center relative max-w-[384px] max-h-[384px] rounded-md bg-zinc-900 overflow-hidden" key={product.id}>
                    <Image className="hover:scale-110 transition-transform duration-500"
                     src={product.image} alt={product.title} width={384} height={384} quality={100}/>
                    <div className="absolute bottom-[64px] left-[90px] rounded-full bg-black/60 w-[240px] h-[48px] border border-zinc-500 flex items-center justify-between py-4 pr-[3px] pl-4 gap-1">
                        <span className="text-sm text-zinc-50 truncate">{product.title}</span>
                        <span className="bg-violet-500 min-w-[84px] h-[40px] rounded-full font-semibold flex items-center justify-center">{product.price.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                            maximumFractionDigits: 0,
                        })}</span>
                    </div>
                </Link>
            ))
        }
        </div>
    )
}