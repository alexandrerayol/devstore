import { api } from "@/data/api";
import { product } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";


async function getFeaturedProducts() : Promise<product[]>{
  try{
    const response = await api('/products/featured', {
      next: {
        revalidate: 60 * 60, // 1h
      }
    })
    const data = await response.json()
    return data
  }catch{
    return [];
  }
}

export default async function Home() {

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const products = await getFeaturedProducts()

    const [highLightedProduct, ...otherProducts] = products


    return (
      <div className="grid max-h-[760px] grid-cols-9 grid-rows-6 gap-6">
        
        <Link href={`/product/${highLightedProduct.slug}`} className="relative group col-span-6 row-span-6 rounded-lg bg-zinc-900 flex justify-center items-start overflow-hidden">
          <Image src={highLightedProduct.image} className="max-w-[860px] group-hover:scale-110 transition-transform duration-500" alt={highLightedProduct.title} width={860} height={860} quality={100}/>
  
          <div className="absolute bottom-12 max-w-[320px] h-12 rounded-full bg-black/60 border-2 border-solid border-zinc-500 flex justify-between items-center gap-2 pl-5 pr-[2px] py-[2px]">
            <span className="truncate">{highLightedProduct.title}</span>
            <span className="h-full bg-violet-500 rounded-full flex justify-center items-center px-4 font-semibold">{highLightedProduct.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}</span>
          </div>
        </Link>

        {
          otherProducts.map( (product) => (
            <Link href={`/product/${product.slug}`} key={product.id} className="relative group col-span-3 row-span-3 rounded-lg bg-zinc-900 flex justify-center items-center overflow-hidden">
            <Image src={product.image} className="max-w-[420px] group-hover:scale-110 transition-transform duration-500" alt={product.title} width={860} height={860} quality={100}/>
    
            <div className="absolute bottom-12 max-w-[320px] h-12 rounded-full bg-black/60 border-2 border-solid border-zinc-500 flex justify-between items-center gap-2 pl-5 pr-[2px] py-[2px]">
              <span className="truncate">{product.title}</span>
              <span className="h-full bg-violet-500 rounded-full flex justify-center items-center px-4 font-semibold">{product.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
              })}</span>
            </div>
          </Link>
          ) )
        }

      </div>
    );
}
