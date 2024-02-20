import { z } from 'zod'

//O que esperamos que tenha dentro das nossas variaveis de ambiente
const envSchema = z.object({
    NEXT_PUBLIC_API_BASE_URL: z.string().url()
})

//o zod irá validar se o arquivo process.env corresponde ao tipo/formato esperado.

const parsedEnv = envSchema.safeParse(process.env)

//Tratamento de erro caso as variaveis de ambiente não estejam corretas
if(!parsedEnv.success){
    console.error('Variaveis de ambiente inválidas.')
    throw new Error('Variaveis de ambiente inválidas.')
}

export const env = parsedEnv.data