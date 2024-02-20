//fetch + url base
import { env } from "./env" //Variaveis de ambiente validadas pelo zod

//path = rota
//init?: RequestInit = Todos as props padrões do fetch.

export async function api(path:string, init?: RequestInit){

        const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
        const apiPrefix = '/api'
        const url = new URL(apiPrefix.concat(path), baseUrl)

        return fetch(url, init)
}