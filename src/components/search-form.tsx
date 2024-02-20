'use client'
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export function SearchForm(){

    const router = useRouter()
    
    const searchParams = useSearchParams
    const query = searchParams().get('query')

    function handleSearch(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData)
        const query = data.query

        if(!query){
            return null
        }

        router.push(`/search?query=${query}`)
    }

    return(
        <form onSubmit={handleSearch}
        className="flex justify-start items-center gap-3 bg-zinc-900 w-[320px] py-3 px-5 rounded-[88px]">
        <Search width={20} height={20} className="text-zinc-500"/>
        <input name="query" defaultValue={query ?? ''} required type="text" placeholder="Buscar produtos" className="bg-transparent outline-none text-sm text-zinc-500 placeholder:text-zinc-500"/>
    </form>
    )
}