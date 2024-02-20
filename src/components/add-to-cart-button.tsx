'use client'
import { useCart } from "@/contexts/cart-context"

interface AddToCartProps{
    productId: string;
}
export function AddToCartButton({productId}: AddToCartProps){
    const {addToCart} = useCart()
    return(
        <button className="bg-emerald-500 w-full h-[48px] rounded-full font-semibold hover:brightness-75 transition" onClick={() => addToCart(productId)}>Adicionar ao carrinho</button>
    )
}