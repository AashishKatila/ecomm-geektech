import { createContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
          setCart(storedCart); 
        }
      }, []);
    
      useEffect(() => {
        if (cart.length > 0) {
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      }, [cart]);

  const addToCart = (product) => {
    console.log("proudct = ",product)
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      console.log("Existing Item found")
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      console.log("New item added")
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    const existingItem = cart.find((item) => item.id === id);

    if(existingItem){
        setCart(
            cart.map((item) =>
                item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    );
}
  };

  const decreaseQuantity = (id) => {
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem.quantity === 1) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart,increaseQuantity, removeFromCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
