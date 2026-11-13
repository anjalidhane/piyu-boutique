/**
 * PIYU – Global State & Store Manager (Vanilla JS + LocalStorage)
 */

window.PIYU_STORE = (function() {
  const CART_KEY = 'piyu_cart_v1';
  const WISHLIST_KEY = 'piyu_wishlist_v1';
  const USER_KEY = 'piyu_user_v1';
  const ORDERS_KEY = 'piyu_orders_v1';
  const REQUESTS_KEY = 'piyu_requests_v1';
  const COUPON_KEY = 'piyu_coupon_v1';
  const GIFTWRAP_KEY = 'piyu_giftwrap_v1';

  // Helper safe storage
  function getStorage(key, fallback) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch(e) {
      return fallback;
    }
  }

  function setStorage(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch(e) {}
  }

  // Initial setup if empty
  if (!localStorage.getItem(ORDERS_KEY) && window.PIYU_DATA) {
    setStorage(ORDERS_KEY, window.PIYU_DATA.orders);
  }
  if (!localStorage.getItem(REQUESTS_KEY) && window.PIYU_DATA) {
    setStorage(REQUESTS_KEY, window.PIYU_DATA.customRequests);
  }
  if (!localStorage.getItem(CART_KEY)) {
    // Initial demo items
    setStorage(CART_KEY, [
      {
        cartItemId: "demo-item-1",
        productId: "fabric-01",
        quantity: 1,
        customizationNotes: "Mother Name: तृप्ती चे डोहाळे जेवण (Royal Gold Lace)"
      },
      {
        cartItemId: "demo-item-2",
        productId: "jewel-01",
        quantity: 1,
        customizationNotes: "Style: Clip-on (No Piercing), Ruby Red"
      }
    ]);
  }
  if (!localStorage.getItem(WISHLIST_KEY)) {
    setStorage(WISHLIST_KEY, ["jewel-02", "fabric-04"]);
  }
  if (!localStorage.getItem(USER_KEY)) {
    setStorage(USER_KEY, {
      id: "usr-01",
      name: "Snehal Kulkarni",
      email: "snehal@example.com",
      phone: "+91 94231 67890",
      city: "Kolhapur",
      state: "Maharashtra",
      pincode: "416003",
      role: "customer"
    });
  }

  return {
    // PRODUCTS HELPER
    getProductById: function(id) {
      if (!window.PIYU_DATA) return null;
      return window.PIYU_DATA.products.find(p => p.id === id) || null;
    },

    // CART OPERATIONS
    getCart: function() {
      return getStorage(CART_KEY, []);
    },

    getCartDetailed: function() {
      const rawCart = this.getCart();
      return rawCart.map(item => {
        const product = this.getProductById(item.productId) || {
          id: item.productId,
          title: "Artisan Handcrafted Item",
          price: 999,
          images: ["images/piyu-01.jpg"]
        };
        return {
          ...item,
          product
        };
      });
    },

    addToCart: function(productId, quantity = 1, customizationNotes = '') {
      const cart = this.getCart();
      const existingIdx = cart.findIndex(
        i => i.productId === productId && i.customizationNotes === customizationNotes
      );

      if (existingIdx > -1) {
        cart[existingIdx].quantity += quantity;
      } else {
        cart.push({
          cartItemId: `${productId}-${Date.now()}`,
          productId: productId,
          quantity: quantity,
          customizationNotes: customizationNotes || 'Standard Artisan Edition'
        });
      }
      setStorage(CART_KEY, cart);
      window.dispatchEvent(new CustomEvent('cart-updated'));
    },

    removeFromCart: function(cartItemId) {
      const cart = this.getCart().filter(i => i.cartItemId !== cartItemId);
      setStorage(CART_KEY, cart);
      window.dispatchEvent(new CustomEvent('cart-updated'));
    },

    updateQuantity: function(cartItemId, newQty) {
      if (newQty <= 0) {
        this.removeFromCart(cartItemId);
        return;
      }
      const cart = this.getCart().map(i => i.cartItemId === cartItemId ? { ...i, quantity: newQty } : i);
      setStorage(CART_KEY, cart);
      window.dispatchEvent(new CustomEvent('cart-updated'));
    },

    clearCart: function() {
      setStorage(CART_KEY, []);
      setStorage(COUPON_KEY, null);
      setStorage(GIFTWRAP_KEY, false);
      window.dispatchEvent(new CustomEvent('cart-updated'));
    },

    // COUPON & GIFT WRAP
    getCoupon: function() {
      return getStorage(COUPON_KEY, null);
    },

    applyCoupon: function(code) {
      const clean = (code || '').trim().toUpperCase();
      let coupon = null;
      if (clean === 'PIYUFIRST10') {
        coupon = { code: clean, type: 'percent', value: 10, label: '10% First Order Discount' };
      } else if (clean === 'HANDMADE15') {
        coupon = { code: clean, type: 'percent', value: 15, label: '15% Handcrafted Special' };
      } else if (clean === 'FESTIVE200') {
        coupon = { code: clean, type: 'flat', value: 200, label: '₹200 Festive Special' };
      }

      if (coupon) {
        setStorage(COUPON_KEY, coupon);
        window.dispatchEvent(new CustomEvent('cart-updated'));
        return { success: true, message: `Coupon ${coupon.code} applied successfully!` };
      }
      return { success: false, message: 'Invalid coupon code. Try PIYUFIRST10 or HANDMADE15.' };
    },

    removeCoupon: function() {
      setStorage(COUPON_KEY, null);
      window.dispatchEvent(new CustomEvent('cart-updated'));
    },

    getGiftWrap: function() {
      return getStorage(GIFTWRAP_KEY, false);
    },

    setGiftWrap: function(bool) {
      setStorage(GIFTWRAP_KEY, !!bool);
      window.dispatchEvent(new CustomEvent('cart-updated'));
    },

    // TOTALS CALCULATION
    getCartTotals: function() {
      const detailed = this.getCartDetailed();
      const subtotal = detailed.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
      const coupon = this.getCoupon();

      let discountAmount = 0;
      if (coupon) {
        if (coupon.type === 'percent') {
          discountAmount = Math.round((subtotal * coupon.value) / 100);
        } else if (coupon.type === 'flat') {
          discountAmount = Math.min(subtotal, coupon.value);
        }
      }

      const freeShippingThreshold = 1499;
      const shippingFee = (subtotal - discountAmount) >= freeShippingThreshold || detailed.length === 0 ? 0 : 99;
      const giftWrapFee = this.getGiftWrap() && detailed.length > 0 ? 99 : 0;
      const total = Math.max(0, subtotal - discountAmount + shippingFee + giftWrapFee);
      const itemsCount = detailed.reduce((sum, item) => sum + item.quantity, 0);

      return {
        subtotal,
        discountAmount,
        shippingFee,
        giftWrapFee,
        total,
        itemsCount,
        freeShippingThreshold,
        coupon
      };
    },

    // WISHLIST
    getWishlist: function() {
      return getStorage(WISHLIST_KEY, []);
    },

    isInWishlist: function(productId) {
      return this.getWishlist().includes(productId);
    },

    toggleWishlist: function(productId) {
      let list = this.getWishlist();
      let added = false;
      if (list.includes(productId)) {
        list = list.filter(id => id !== productId);
      } else {
        list.push(productId);
        added = true;
      }
      setStorage(WISHLIST_KEY, list);
      window.dispatchEvent(new CustomEvent('wishlist-updated', { detail: { productId, added } }));
      return added;
    },

    // USER & AUTH
    getUser: function() {
      return getStorage(USER_KEY, null);
    },

    login: function(email, password) {
      const user = {
        id: `usr-${Date.now()}`,
        name: email.split('@')[0] || "Valued Customer",
        email: email,
        phone: "+91 94231 67890",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411001",
        role: "customer"
      };
      setStorage(USER_KEY, user);
      window.dispatchEvent(new CustomEvent('user-updated'));
      return { success: true, user };
    },

    register: function(data) {
      const user = {
        id: `usr-${Date.now()}`,
        name: data.name,
        email: data.email,
        phone: data.phone || "+91 98000 00000",
        city: data.city || "Mumbai",
        state: data.state || "Maharashtra",
        pincode: data.pincode || "400001",
        role: "customer"
      };
      setStorage(USER_KEY, user);
      window.dispatchEvent(new CustomEvent('user-updated'));
      return { success: true, user };
    },

    logout: function() {
      localStorage.removeItem(USER_KEY);
      window.dispatchEvent(new CustomEvent('user-updated'));
    },

    // ORDERS
    getOrders: function() {
      return getStorage(ORDERS_KEY, []);
    },

    placeOrder: function(orderData) {
      const orders = this.getOrders();
      const newOrder = {
        id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
        date: new Date().toISOString().split('T')[0],
        status: "Crafting in Progress",
        trackingNumber: `INDPOST-MH-${Math.floor(100000 + Math.random() * 900000)}`,
        estimatedDelivery: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        ...orderData
      };
      orders.unshift(newOrder);
      setStorage(ORDERS_KEY, orders);
      this.clearCart();
      return newOrder;
    },

    updateOrderStatus: function(orderId, newStatus) {
      const orders = this.getOrders().map(o => o.id === orderId ? { ...o, status: newStatus } : o);
      setStorage(ORDERS_KEY, orders);
      window.dispatchEvent(new CustomEvent('orders-updated'));
    },

    // CUSTOM REQUESTS
    getCustomRequests: function() {
      return getStorage(REQUESTS_KEY, []);
    },

    addCustomRequest: function(reqData) {
      const reqs = this.getCustomRequests();
      const newReq = {
        id: `REQ-${Math.floor(100 + Math.random() * 900)}`,
        date: new Date().toISOString().split('T')[0],
        status: "Under Artisan Review",
        quotedPrice: "Pending Review",
        ...reqData
      };
      reqs.unshift(newReq);
      setStorage(REQUESTS_KEY, reqs);
      return newReq;
    },

    updateRequestStatus: function(reqId, status, quotedPrice) {
      const reqs = this.getCustomRequests().map(r => 
        r.id === reqId ? { ...r, status, ...(quotedPrice ? { quotedPrice } : {}) } : r
      );
      setStorage(REQUESTS_KEY, reqs);
    }
  };
})();

// Backward-compatibility alias
window.PIHU_STORE = window.PIYU_STORE;
