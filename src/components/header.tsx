import Link from "next/link";
import Image from "next/image";
import { CartWidget } from "./cart-widget";
import { SearchForm } from "./search-form";
import { Suspense } from "react";

export function Header(){
    return(
        <header className="flex justify-between">
            <div className="flex items-center justify-center gap-5">

                <Link href={'/'} className="text-2xl font-extrabold">devstore</Link>
                
                <Suspense>
                    <SearchForm />
                </Suspense>
                
            </div>

            <div className="flex items-center justify-center gap-4 text-sm font-medium">
                <CartWidget />
                
                <div className="w-[1px] h-4 bg-zinc-700" />
                
                <Link href={'/'} className="flex items-center justify-center gap-2 hover:underline">
                    <span>Account</span>
                    <Image src={'https://github.com/alexandrerayol.png'} width={24} height={24} alt="Imagem de perfil"  className="rounded-full w-6 h-6"/>
                </Link>
            </div>
        </header>
    )
}