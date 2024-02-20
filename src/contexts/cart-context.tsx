'use client'
import { ReactNode, createContext, useContext, useState } from "react";

interface cartItems {
    productId: string;
    quantity: number;
}

interface CartContextType {
    items: cartItems[];
    addToCart: (productId: string) => void;
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {

    const [cartItems, setCartItems] = useState<cartItems[]>([])

    function addToCart(productId: string) {
        setCartItems(state => {
            const productInCart = state.some(item => { return item.productId === productId })

            if (productInCart) {
                return state.map(item => {
                    if (item.productId === productId) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {

                        return item
                    }
                })
            } else {
                return [...state, { productId: productId, quantity: 1 }]
            }
        })

    }


    return (
        <CartContext.Provider value={{ items: cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => {
    return useContext(CartContext)
}
