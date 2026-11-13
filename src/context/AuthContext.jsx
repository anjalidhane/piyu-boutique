import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const INITIAL_ORDERS = [
  {
    id: "ORD-9482",
    date: "2026-11-10",
    customerName: "Pooja Deshmukh",
    customerEmail: "pooja.d@example.com",
    customerPhone: "+91 98220 12345",
    shippingAddress: "Flat 402, Shivneri Heights, FC Road, Pune, Maharashtra 411005",
    items: [
      {
        id: "fabric-01",
        title: "Hand-Painted Yashoda Krishna Dohale Jevan Banner",
        price: 1899,
        quantity: 1,
        customizationNotes: "Mother Name: तृप्ती चे डोहाळे जेवण (Royal Gold Lace)"
      }
    ],
    subtotal: 1899,
    discount: 189,
    shippingFee: 0,
    total: 1710,
    paymentMethod: "UPI (Google Pay)",
    status: "Crafting in Progress",
    estimatedDelivery: "2026-11-16",
    trackingNumber: "INDPOST-MH-829104"
  },
  {
    id: "ORD-9420",
    date: "2026-11-06",
    customerName: "Snehal Kulkarni",
    customerEmail: "snehal.k@example.com",
    customerPhone: "+91 94231 67890",
    shippingAddress: "Bungalow 12, Tarabai Park, Kolhapur, Maharashtra 416003",
    items: [
      {
        id: "jewel-01",
        title: "Traditional Maharashtrian Kundan & Pearl Floral Nath",
        price: 799,
        quantity: 2,
        customizationNotes: "Clip-on style, Ruby Red Stone"
      }
    ],
    subtotal: 1598,
    discount: 0,
    shippingFee: 0,
    total: 1598,
    paymentMethod: "Cash on Delivery",
    status: "Delivered",
    estimatedDelivery: "2026-11-09",
    trackingNumber: "BLUEDART-8892147"
  },
  {
    id: "ORD-9380",
    date: "2026-11-02",
    customerName: "Aditya Patil",
    customerEmail: "aditya.p@example.com",
    customerPhone: "+91 97654 32109",
    shippingAddress: "Plot 88, Near Powai Naka, Satara, Maharashtra 415001",
    items: [
      {
        id: "fabric-02",
        title: "Custom Baby Cradle Welcome Hoop with Pearl Tassels",
        price: 1299,
        quantity: 1,
        customizationNotes: "Baby Name: 'Vrunda' (Pink & White Tassels)"
      }
    ],
    subtotal: 1299,
    discount: 130,
    shippingFee: 99,
    total: 1268,
    paymentMethod: "Credit Card (HDFC)",
    status: "Delivered",
    estimatedDelivery: "2026-11-05",
    trackingNumber: "DELHIVERY-339105"
  }
];

const INITIAL_CUSTOM_REQUESTS = [
  {
    id: "REQ-101",
    date: "2026-11-12",
    clientName: "Meenakshi Kadam",
    phone: "+91 98901 22334",
    email: "meenakshi@example.com",
    category: "Customize Fabric Painting",
    itemType: "Wedding Welcome Paithani Fabric Wall Art",
    details: "Need a 4-feet Paithani border wall hanging with bride and groom names 'Swapnil & Meenakshi' and wedding date 15 Dec 2026.",
    referenceImage: "/images/pihu-01.jpg",
    budget: "₹2,500 - ₹3,500",
    status: "Under Artisan Review",
    quotedPrice: "₹3,200"
  },
  {
    id: "REQ-102",
    date: "2026-11-11",
    clientName: "Tanvi Sharma",
    phone: "+91 91234 56789",
    email: "tanvi.s@example.com",
    category: "Handmade Jewellery",
    itemType: "Bridal Saaj with matching customized nath & hair clips",
    details: "Matching jewellery set in antique matte gold finish with emerald green accents for green Paithani saree.",
    referenceImage: "/images/pihu-13.jpg",
    budget: "₹4,000 - ₹5,000",
    status: "Quote Sent",
    quotedPrice: "₹4,500"
  }
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('pihu_user');
      return saved ? JSON.parse(saved) : {
        id: "usr-01",
        name: "Sayali Shinde",
        email: "sayali@pihuhandmade.com",
        phone: "+91 9309851833",
        city: "Kherade Vangi",
        state: "Maharashtra",
        pincode: "415305",
        role: "admin", // Admin role to easily explore Admin Dashboard
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
      };
    } catch (e) {
      return null;
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('pihu_orders');
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch (e) {
      return INITIAL_ORDERS;
    }
  });

  const [customRequests, setCustomRequests] = useState(() => {
    try {
      const saved = localStorage.getItem('pihu_custom_requests');
      return saved ? JSON.parse(saved) : INITIAL_CUSTOM_REQUESTS;
    } catch (e) {
      return INITIAL_CUSTOM_REQUESTS;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('pihu_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('pihu_user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('pihu_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('pihu_custom_requests', JSON.stringify(customRequests));
  }, [customRequests]);

  const login = (email, password) => {
    // Check if logging in as admin or standard user
    const isAdmin = email.toLowerCase().includes('admin') || email.toLowerCase().includes('sayali');
    const newUser = {
      id: `usr-${Date.now()}`,
      name: isAdmin ? "Sayali Shinde (Artisan / Admin)" : (email.split('@')[0] || "Valued Customer"),
      email,
      phone: "+91 9309851833",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411001",
      role: isAdmin ? "admin" : "customer",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
    };
    setUser(newUser);
    return { success: true, user: newUser };
  };

  const register = ({ name, email, phone, city, state, pincode }) => {
    const newUser = {
      id: `usr-${Date.now()}`,
      name,
      email,
      phone: phone || "+91 98000 00000",
      city: city || "Mumbai",
      state: state || "Maharashtra",
      pincode: pincode || "400001",
      role: email.toLowerCase().includes('admin') ? "admin" : "customer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
    };
    setUser(newUser);
    return { success: true, user: newUser };
  };

  const logout = () => {
    setUser(null);
  };

  const placeOrder = (orderData) => {
    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split('T')[0],
      status: "Crafting in Progress",
      trackingNumber: `INDPOST-MH-${Math.floor(100000 + Math.random() * 900000)}`,
      estimatedDelivery: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      ...orderData
    };
    setOrders([newOrder, ...orders]);
    return newOrder;
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  const addCustomRequest = (requestData) => {
    const newReq = {
      id: `REQ-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toISOString().split('T')[0],
      status: "Under Artisan Review",
      quotedPrice: "Pending Review",
      ...requestData
    };
    setCustomRequests([newReq, ...customRequests]);
    return newReq;
  };

  const updateRequestStatus = (reqId, newStatus, quotedPrice) => {
    setCustomRequests(customRequests.map(r => 
      r.id === reqId 
        ? { ...r, status: newStatus, ...(quotedPrice ? { quotedPrice } : {}) } 
        : r
    ));
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      orders,
      placeOrder,
      updateOrderStatus,
      customRequests,
      addCustomRequest,
      updateRequestStatus,
      isAdmin: user?.role === 'admin'
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
