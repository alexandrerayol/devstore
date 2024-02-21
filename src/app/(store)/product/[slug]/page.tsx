import { AddToCartButton } from "@/components/add-to-cart-button";
import { db } from "@/data/firebase";
import { product } from "@/data/types/product";
import { doc, getDoc } from "firebase/firestore";

import { Metadata } from "next"
import Image from "next/image";

export async function generateMetadata({ params }: {params: {slug: string}}): Promise<Metadata> {
    const product = await getProduct(params.slug)

    return (
        {
            title: product?.title
        }
    )
}

 export async function generateStaticParams() {

    try{
        const docRef = doc(db, "products", "hOpUYbinIgboS0Zeypvr");
        const data = await getDoc(docRef)
        const products:product[] = data.data()?.products

        return products.map(product => {
            return {slug: product.slug}
        })

    }catch{
        return [
            {slug: "moletom-never-stop-learning"},
            {slug: "moletom-ai-side"},
            {slug: "camiseta-dowhile-2022"},
        ]
    }
} 

async function getProduct(slug: string){
    try{
        const docRef = doc(db, "products", "hOpUYbinIgboS0Zeypvr");
        const docSnap = await getDoc(docRef);
      
        const data:product[] = docSnap.data()?.products
        return data.find(product => product.slug === slug)
    }
    catch{
        return null
    }

}

export default async function Product({ params }: {params: {slug:string}}) {

    const product = await getProduct(params.slug)

    if(!product){
        return(
            <h1>product not found</h1>
        )
    }

    return (
         <div className="relative max-h-[860px] grid grid-cols-3">
            <div className="col-span-2 overflow-hidden">
                <Image className=""
                 src={product.image} alt={product.title} width={1000} height={1000} quality={100}/>
            </div>

            <div className="col-span-1 flex flex-col justify-center max-w-[420px]">
                <span className="text-[32px] font-bold mb-2">{product.title}</span>
                <span className="text-zinc-400 text-base">{product.description}</span>

                <div className="my-8 flex items-center gap-2">
                    <span className="bg-violet-500 flex items-center justify-center w-[82px] h-[39px] rounded-full font-semibold">
                        {product.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}
                    </span>
                    <span className="text-sm text-zinc-400">
                        em até 3x s/juros de {(product.price / 3).toLocaleString('pt-br', {style: 'currency', currency: 'BRL', maximumFractionDigits: 2})}
                    </span>
                </div>

                <span className="font-semibold mb-4">Tamanhos</span>

                <div className="flex gap-2 mb-8">
                    <button className="rounded-full w-[54px] h-[37px] bg-zinc-800 border border-zinc-700 text-sm font-semibold hover:brightness-75 transition" type="button">P</button>
                    <button className="rounded-full w-[54px] h-[37px] bg-zinc-800 border border-zinc-700 text-sm font-semibold hover:brightness-75 transition" type="button">M</button>
                    <button className="rounded-full w-[54px] h-[37px] bg-zinc-800 border border-zinc-700 text-sm font-semibold hover:brightness-75 transition" type="button">G</button>
                    <button className="rounded-full w-[54px] h-[37px] bg-zinc-800 border border-zinc-700 text-sm font-semibold hover:brightness-75 transition" type="button">GG</button>
                </div>

                <AddToCartButton productId={product.id}/>
            </div>
        </div> 
    )
}