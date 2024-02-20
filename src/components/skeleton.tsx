import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

//informamos aqui que o componente irá receber className e todas as outras props que uma div comum pode receber

//O objetivo é ter uma classe tailwind base, e quando o componente for invocado pode ser personalizado de acordo com a demanda.

//O twMerge do Tailwind-merge serve para mesclar classes, no nosso caso uma classe base definida no momento da declaração do componente e uma classe normal no momento de invocação do componente.

export function Skeleton({className, ...props}: ComponentProps<'div'>){
    return(
        <div className={twMerge("bg-zinc-700/50 animate-pulse rounded-md", className)} {...props}/>
    )
}


export function ComponenteTeste({className, ...props}: ComponentProps<'h1'>){
    return(
        <h1></h1>
    )
}

