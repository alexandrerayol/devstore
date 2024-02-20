'use client'
import { useCart } from "@/contexts/cart-context";
import { ShoppingBag } from "lucide-react";


export function CartWidget(){
    
    const {items} = useCart()

    return(
        <div className="flex items-center justify-center gap-2">
        <ShoppingBag width={16} height={16}/>
        <span>Cart ({items.length})</span>
        </div>
    )
}