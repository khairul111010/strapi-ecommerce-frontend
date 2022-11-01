import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [qty, setQty] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const addItems = (product, quantity) => {
    const exists = cartItems.find((item) => item.slug === product.slug);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exists, quantity: exists.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        incQty,
        decQty,
        showCart,
        setShowCart,
        cartItems,
        addItems,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
