import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Trash2, 
  ArrowRight, 
  ArrowLeft, 
  Truck, 
  Gift, 
  Tag, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    discountAmount,
    shippingFee,
    giftWrapFee,
    giftWrap,
    setGiftWrap,
    total,
    freeShippingThreshold,
    appliedCoupon,
    applyCoupon,
    removeCoupon
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [couponMsg, setCouponMsg] = useState(null);
  const [orderNotes, setOrderNotes] = useState('');
  const navigate = useNavigate();

  const handleApplyCoupon = (code) => {
    const res = applyCoupon(code || couponCode);
    setCouponMsg(res);
    if (res.success) setCouponCode('');
  };

  const amountNeeded = Math.max(0, freeShippingThreshold - (subtotal - discountAmount));
  const shippingProgress = Math.min(100, Math.round(((subtotal - discountAmount) / freeShippingThreshold) * 100));

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-cream-100 text-warmcharcoal-400 flex items-center justify-center mx-auto">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-warmcharcoal-900">
          Your Shopping Cart is Empty
        </h1>
        <p className="text-sm text-warmcharcoal-600 max-w-md mx-auto leading-relaxed">
          Looks like you haven't selected any handcrafted fabric paintings or jewellery pieces yet. Let's find something bespoke for your celebrations!
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/customize-fabric-painting"
            className="px-6 py-3 bg-terracotta-600 hover:bg-terracotta-700 text-white rounded-full text-xs font-bold transition-all shadow-warm"
          >
            Explore Fabric Painting
          </Link>
          <Link
            to="/handmade-jewellery"
            className="px-6 py-3 bg-cream-100 hover:bg-cream-200 text-terracotta-800 rounded-full text-xs font-bold transition-all border border-cream-300"
          >
            Explore Handmade Jewellery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-cream-200 pb-5 gap-2">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-terracotta-600">
            Review Your Bag
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-warmcharcoal-900 mt-1">
            Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
          </h1>
        </div>

        <button
          onClick={clearCart}
          className="text-xs text-warmcharcoal-400 hover:text-red-600 underline text-left sm:text-right"
        >
          Clear entire cart
        </button>
      </div>

      {/* Free Shipping Milestone Alert */}
      <div className="p-4 bg-white rounded-2xl border border-cream-200 shadow-sm text-xs">
        <div className="flex items-center justify-between font-medium text-warmcharcoal-800 mb-2">
          <span className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-terracotta-600" />
            {amountNeeded === 0 ? (
              <strong className="text-emerald-700">Congratulations! You unlocked FREE Courier Delivery across India!</strong>
            ) : (
              <span>Add <strong className="text-terracotta-700 font-bold">₹{amountNeeded}</strong> more to your cart for FREE Shipping!</span>
            )}
          </span>
          <span className="text-[11px] text-warmcharcoal-400">Free at ₹{freeShippingThreshold}</span>
        </div>
        <div className="w-full bg-cream-100 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full transition-all duration-500 rounded-full ${
              shippingProgress >= 100 ? 'bg-emerald-500' : 'bg-terracotta-500'
            }`}
            style={{ width: `${shippingProgress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Cart Items Table / Cards */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-3xl border border-cream-200 shadow-sm overflow-hidden divide-y divide-cream-100">
            {cart.map((item) => (
              <div key={item.cartItemId} className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex gap-4 items-start min-w-0">
                  <img
                    src={item.product.images ? item.product.images[0] : '/images/pihu-01.jpg'}
                    alt={item.product.title}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-cream-200 flex-shrink-0 bg-cream-50"
                  />
                  <div className="min-w-0 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-terracotta-600 tracking-wider">
                      {item.product.subcategory || item.product.category}
                    </span>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-warmcharcoal-900 leading-snug line-clamp-2">
                      <Link to={`/product/${item.product.slug}`} className="hover:text-terracotta-600">
                        {item.product.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-warmcharcoal-500">
                      Unit Price: ₹{item.product.price.toLocaleString('en-IN')}
                    </p>

                    {item.customizationNotes && (
                      <p className="text-[11px] text-terracotta-800 bg-terracotta-50/90 px-2.5 py-1 rounded-lg border border-terracotta-200/60 inline-block font-medium">
                        ✨ {item.customizationNotes}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-cream-100">
                  {/* Quantity controls */}
                  <div className="flex items-center border border-cream-300 rounded-xl bg-cream-50 p-1">
                    <button
                      onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center font-bold text-warmcharcoal-700 hover:text-terracotta-600 text-xs"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-xs font-bold text-warmcharcoal-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center font-bold text-warmcharcoal-700 hover:text-terracotta-600 text-xs"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right min-w-[80px]">
                    <span className="text-sm sm:text-base font-bold text-warmcharcoal-900">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.cartItemId)}
                    className="p-2 text-warmcharcoal-400 hover:text-red-500 rounded-lg transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Notes for Artisan */}
          <div className="bg-white p-5 rounded-2xl border border-cream-200 shadow-sm space-y-2">
            <label className="block text-xs font-bold text-warmcharcoal-800">
              Special Artisan Notes or Instructions for Sayali:
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Please use golden cord for the nath, or make the blue sky darker in the baby banner..."
              value={orderNotes}
              onChange={(e) => setOrderNotes(e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-cream-300 bg-cream-50 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-warmcharcoal-500">
            <Link
              to="/customize-fabric-painting"
              className="flex items-center gap-1.5 hover:text-terracotta-600 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Continue Shopping Collections</span>
            </Link>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-4 space-y-5">
          <div className="bg-white p-6 rounded-3xl border border-cream-200 shadow-warm space-y-5">
            <h2 className="font-serif text-xl font-bold text-warmcharcoal-900 pb-3 border-b border-cream-200">
              Order Summary
            </h2>

            {/* Promo Code Box */}
            <div className="space-y-2">
              {appliedCoupon ? (
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs">
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-4 h-4 text-emerald-600" />
                    <span>Coupon <strong>{appliedCoupon.code}</strong> Applied!</span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-red-500 hover:underline font-bold text-[11px]"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 text-xs px-3 py-2.5 rounded-xl border border-cream-300 uppercase font-medium bg-cream-50 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
                    />
                    <button
                      onClick={() => handleApplyCoupon()}
                      className="px-4 py-2.5 bg-warmcharcoal-900 hover:bg-terracotta-600 text-white rounded-xl text-xs font-semibold transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-warmcharcoal-500">
                    <span>Try:</span>
                    <button onClick={() => handleApplyCoupon('PIHUFIRST10')} className="underline font-bold hover:text-terracotta-600">
                      PIHUFIRST10 (10% off)
                    </button>
                  </div>
                </div>
              )}
              {couponMsg && (
                <p className={`text-[11px] ${couponMsg.success ? 'text-emerald-700' : 'text-red-600'}`}>
                  {couponMsg.message}
                </p>
              )}
            </div>

            {/* Gift Wrap */}
            <label className="flex items-center justify-between p-3 bg-cream-50 rounded-xl border border-cream-200 cursor-pointer text-xs">
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-terracotta-600" />
                <div>
                  <span className="font-semibold text-warmcharcoal-900">Add Boutique Gift Wrap (+₹99)</span>
                  <p className="text-[10px] text-warmcharcoal-500">Handmade paper, jute tie & card</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={giftWrap}
                onChange={(e) => setGiftWrap(e.target.checked)}
                className="w-4 h-4 text-terracotta-600 rounded border-cream-300 focus:ring-terracotta-500"
              />
            </label>

            {/* Breakdown */}
            <div className="space-y-2 text-xs text-warmcharcoal-700 border-t border-cream-200 pt-3">
              <div className="flex justify-between">
                <span>Subtotal ({cart.length} items):</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Discount ({appliedCoupon?.code}):</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              {giftWrapFee > 0 && (
                <div className="flex justify-between">
                  <span>Gift Wrapping:</span>
                  <span>+₹{giftWrapFee}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping (Standard Courier):</span>
                <span>
                  {shippingFee === 0 ? (
                    <span className="text-emerald-700 font-semibold uppercase">Free</span>
                  ) : (
                    `₹${shippingFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-warmcharcoal-900 pt-3 border-t border-cream-200">
                <span>Total Amount:</span>
                <span className="text-xl text-terracotta-700">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full py-4 bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-xs rounded-xl shadow-warm flex items-center justify-center gap-2 transition-all uppercase tracking-wider"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="pt-2 text-center text-[11px] text-warmcharcoal-500 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Safe & Secure Indian Payment Gateways</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
