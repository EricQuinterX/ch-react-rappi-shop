import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    // Cargar el carrito de la sessionStorage si es que existe
    const [cart, setCart] = useState(() => {
        const storedCart = sessionStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Cada vez que el carrito cambie, actualizar la sessionStorage
    // Esto asegura que el carrito se mantenga actualizado en la sessionStorage
    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cart));
        console.log('Carrito actualizado en sessionStorage:', cart);
    }, [cart]);

    const addToCart = (item) => {   
        setCart(prevCart => {
            const index = prevCart.findIndex(cartItem => cartItem.id === item.id);
            if (index !== -1) {
                // Si el item ya existe, actualizar la cantidad
                const updatedCart = [...prevCart];
                updatedCart[index] = {...updatedCart[index]}; // Clonar el item para evitar mutaciones
                updatedCart[index].quantity += item.quantity;
                return updatedCart;
            }
            return [...prevCart, item];
        });
    };

    const removeFromCart = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    const clearCart = () => setCart([]);

    const getShippingCost = () => {
        return getSubTotalPrice() * 0.15; // 15% del total del carrito
    };

    const getSubTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getTotalPrice = () => {
        return getSubTotalPrice() + getShippingCost();
    }

    const isEmptyCart = () => cart.length === 0;

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, getSubTotalPrice, getShippingCost, isEmptyCart, getTotalPrice}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;