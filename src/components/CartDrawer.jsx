import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  Sparkles, 
  Gift, 
  ArrowRight, 
  CheckCircle2, 
  Tag, 
  Truck 
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
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

  const [couponInput, setCouponInput] = useState('');
  const [couponMsg, setCouponMsg] = useState(null);
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleApplyCoupon = (codeToApply) => {
    const res = applyCoupon(codeToApply || couponInput);
    setCouponMsg(res);
    if (res.success) {
      setCouponInput('');
    }
  };

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - (subtotal - discountAmount));
  const shippingProgress = Math.min(100, Math.round(((subtotal - discountAmount) / freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-warmcharcoal-900/60 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col justify-between border-l border-cream-200 z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-cream-200 bg-cream-50/70">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-terracotta-600" />
              <h2 className="font-serif text-lg font-bold text-warmcharcoal-900">
                Your Shopping Bag
              </h2>
              <span className="text-xs bg-terracotta-100 text-terracotta-800 font-bold px-2 py-0.5 rounded-full">
                {cart.length} {cart.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-full text-warmcharcoal-500 hover:text-warmcharcoal-800 hover:bg-cream-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="mt-3 bg-white p-2.5 rounded-xl border border-cream-200/80 shadow-sm text-xs">
            <div className="flex items-center justify-between font-medium text-warmcharcoal-700 mb-1.5">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-terracotta-600" />
                {amountNeededForFreeShipping === 0 ? (
                  <span className="text-emerald-700 font-semibold">🎉 You unlocked FREE Shipping!</span>
                ) : (
                  <span>Add <strong className="text-terracotta-700 font-bold">₹{amountNeededForFreeShipping}</strong> more for Free Shipping</span>
                )}
              </span>
              <span className="text-[10px] text-warmcharcoal-400">Target ₹{freeShippingThreshold}</span>
            </div>
            <div className="w-full bg-cream-100 rounded-full h-1.5 overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 rounded-full ${
                  shippingProgress >= 100 ? 'bg-emerald-500' : 'bg-terracotta-500'
                }`}
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-cream-100 flex items-center justify-center text-warmcharcoal-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-warmcharcoal-800">
                Your bag is empty
              </h3>
              <p className="text-xs text-warmcharcoal-500 max-w-xs mx-auto">
                Explore our hand-painted fabric products and traditional handmade jewellery to find something extraordinary.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    closeCart();
                    navigate('/customize-fabric-painting');
                  }}
                  className="px-5 py-2.5 bg-terracotta-600 text-white rounded-xl text-xs font-semibold hover:bg-terracotta-700 transition-colors"
                >
                  Explore Fabric Painting
                </button>
                <button
                  onClick={() => {
                    closeCart();
                    navigate('/handmade-jewellery');
                  }}
                  className="px-5 py-2.5 bg-cream-100 text-terracotta-700 rounded-xl text-xs font-semibold hover:bg-cream-200 transition-colors"
                >
                  Explore Handmade Jewellery
                </button>
              </div>
            </div>
          ) : (
            cart.map((item) => (
              <div 
                key={item.cartItemId} 
                className="flex gap-3.5 p-3 rounded-2xl bg-cream-50/50 border border-cream-200/90 relative group"
              >
                {/* Thumbnail */}
                <img
                  src={item.product.images ? item.product.images[0] : '/images/pihu-01.jpg'}
                  alt={item.product.title}
                  className="w-20 h-20 rounded-xl object-cover border border-cream-200 flex-shrink-0 bg-white"
                />

                {/* Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="text-xs font-semibold text-warmcharcoal-900 font-serif leading-snug line-clamp-1">
                        {item.product.title}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-warmcharcoal-400 hover:text-red-500 p-1 -mr-1 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {item.customizationNotes && (
                      <p className="mt-1 text-[10px] text-terracotta-700 bg-terracotta-50/80 px-2 py-0.5 rounded-md border border-terracotta-200/60 line-clamp-2">
                        ✨ {item.customizationNotes}
                      </p>
                    )}
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs font-bold text-warmcharcoal-900">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>

                    {/* Quantity controls */}
                    <div className="flex items-center border border-cream-300 rounded-lg bg-white">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-xs font-bold text-warmcharcoal-600 hover:text-terracotta-600"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-warmcharcoal-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-xs font-bold text-warmcharcoal-600 hover:text-terracotta-600"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Summary Actions */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-cream-200 bg-cream-50/90 space-y-3.5">
            {/* Promo Code Box */}
            <div>
              {appliedCoupon ? (
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-2 rounded-xl text-xs">
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Applied: <strong>{appliedCoupon.code}</strong> (-₹{discountAmount})</span>
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
                      placeholder="Promo Code (e.g. PIHUFIRST10)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="flex-1 text-xs px-3 py-2 rounded-xl border border-cream-300 uppercase font-medium focus:outline-none focus:ring-1 focus:ring-terracotta-500 bg-white"
                    />
                    <button
                      onClick={() => handleApplyCoupon()}
                      className="px-3.5 py-2 bg-warmcharcoal-800 text-white rounded-xl text-xs font-semibold hover:bg-terracotta-600 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-warmcharcoal-500">
                    <span>Try:</span>
                    <button 
                      onClick={() => handleApplyCoupon('PIHUFIRST10')}
                      className="underline hover:text-terracotta-600 font-semibold"
                    >
                      PIHUFIRST10
                    </button>
                    <span>•</span>
                    <button 
                      onClick={() => handleApplyCoupon('HANDMADE15')}
                      className="underline hover:text-terracotta-600 font-semibold"
                    >
                      HANDMADE15
                    </button>
                  </div>
                </div>
              )}
              {couponMsg && (
                <p className={`text-[11px] mt-1 ${couponMsg.success ? 'text-emerald-700' : 'text-red-600'}`}>
                  {couponMsg.message}
                </p>
              )}
            </div>

            {/* Gift Wrap Toggle */}
            <label className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-cream-200 cursor-pointer text-xs">
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-terracotta-600" />
                <div>
                  <span className="font-semibold text-warmcharcoal-800">Add Boutique Gift Wrap (+₹99)</span>
                  <p className="text-[10px] text-warmcharcoal-500">Handmade paper, jute tie & custom card</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={giftWrap}
                onChange={(e) => setGiftWrap(e.target.checked)}
                className="w-4 h-4 text-terracotta-600 rounded border-cream-300 focus:ring-terracotta-500"
              />
            </label>

            {/* Cost Breakdown */}
            <div className="space-y-1.5 text-xs text-warmcharcoal-700 border-t border-cream-200 pt-3">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Discount:</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              {giftWrapFee > 0 && (
                <div className="flex justify-between text-warmcharcoal-700">
                  <span>Gift Wrapping:</span>
                  <span>+₹{giftWrapFee}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping Fee:</span>
                <span>
                  {shippingFee === 0 ? (
                    <span className="text-emerald-700 font-semibold uppercase">Free</span>
                  ) : (
                    `₹${shippingFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-warmcharcoal-900 pt-2 border-t border-cream-300">
                <span>Estimated Total:</span>
                <span className="text-base text-terracotta-700">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Checkout & View Cart Links */}
            <div className="space-y-2 pt-1">
              <button
                onClick={() => {
                  closeCart();
                  navigate('/checkout');
                }}
                className="w-full py-3.5 bg-terracotta-600 hover:bg-terracotta-700 text-white rounded-xl text-xs font-bold tracking-wide shadow-warm flex items-center justify-center gap-2 transition-all"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  closeCart();
                  navigate('/cart');
                }}
                className="w-full py-2 text-center text-xs text-warmcharcoal-600 hover:text-terracotta-700 font-medium hover:underline"
              >
                View Full Detailed Cart & Notes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
