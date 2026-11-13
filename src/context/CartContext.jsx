import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('pihu_cart');
      return saved ? JSON.parse(saved) : [
        {
          cartItemId: 'item-demo-1',
          product: {
            id: 'fabric-01',
            title: 'Hand-Painted Yashoda Krishna Dohale Jevan Banner',
            price: 1899,
            images: ['/images/pihu-19.jpg'],
            category: 'fabric'
          },
          quantity: 1,
          customizationNotes: 'Mother Name: तृप्ती चे डोहाळे जेवण (Royal Gold Lace)'
        },
        {
          cartItemId: 'item-demo-2',
          product: {
            id: 'jewel-01',
            title: 'Traditional Maharashtrian Kundan & Pearl Floral Nath',
            price: 799,
            images: ['/images/pihu-10.jpg'],
            category: 'jewellery'
          },
          quantity: 1,
          customizationNotes: 'Style: Clip-on (No Piercing), Ruby Red'
        }
      ];
    } catch (e) {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [giftWrap, setGiftWrap] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('pihu_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const addToCart = (product, quantity = 1, customizationNotes = '') => {
    const existingIndex = cart.findIndex(
      item => item.product.id === product.id && item.customizationNotes === customizationNotes
    );

    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += quantity;
      setCart(updated);
    } else {
      const newItem = {
        cartItemId: `${product.id}-${Date.now()}`,
        product,
        quantity,
        customizationNotes
      };
      setCart([...cart, newItem]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId) => {
    setCart(cart.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(cart.map(item => 
      item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
    setGiftWrap(false);
  };

  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'PIHUFIRST10') {
      setAppliedCoupon({ code: cleanCode, type: 'percent', value: 10, label: '10% New Artisan Discount' });
      return { success: true, message: '🎉 Coupon PIHUFIRST10 applied! 10% off.' };
    }
    if (cleanCode === 'HANDMADE15') {
      setAppliedCoupon({ code: cleanCode, type: 'percent', value: 15, label: '15% Handcrafted Special' });
      return { success: true, message: '✨ Coupon HANDMADE15 applied! 15% off.' };
    }
    if (cleanCode === 'FESTIVE200') {
      setAppliedCoupon({ code: cleanCode, type: 'flat', value: 200, label: '₹200 Festive Gift' });
      return { success: true, message: '🪔 Coupon FESTIVE200 applied! ₹200 off.' };
    }
    return { success: false, message: 'Invalid promo code. Try PIHUFIRST10 or HANDMADE15.' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  
  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === 'percent') {
      discountAmount = Math.round((subtotal * appliedCoupon.value) / 100);
    } else if (appliedCoupon.type === 'flat') {
      discountAmount = Math.min(subtotal, appliedCoupon.value);
    }
  }

  const freeShippingThreshold = 1499;
  const shippingFee = (subtotal - discountAmount) >= freeShippingThreshold || cart.length === 0 ? 0 : 99;
  const giftWrapFee = giftWrap && cart.length > 0 ? 99 : 0;
  const total = Math.max(0, subtotal - discountAmount + shippingFee + giftWrapFee);
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      appliedCoupon,
      applyCoupon,
      removeCoupon,
      giftWrap,
      setGiftWrap,
      subtotal,
      discountAmount,
      shippingFee,
      giftWrapFee,
      total,
      totalItemsCount,
      freeShippingThreshold
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
