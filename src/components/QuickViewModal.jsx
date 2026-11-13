import React, { useState } from 'react';
import { X, Star, Sparkles, ShoppingBag, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function QuickViewModal({ product, onClose }) {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [customFieldValues, setCustomFieldValues] = useState({});
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const handleFieldChange = (fieldId, value) => {
    setCustomFieldValues(prev => ({ ...prev, [fieldId]: value }));
  };

  const handleAddToCart = () => {
    // Compile customization summary string
    let notes = '';
    if (product.customFields && product.customFields.length > 0) {
      notes = product.customFields
        .map(field => `${field.label}: ${customFieldValues[field.id] || '(Standard Default)'}`)
        .join(' | ');
    } else {
      notes = 'Standard Handcrafted Artisan Edition';
    }

    addToCart(product, quantity, notes);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-warmcharcoal-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-cream-200 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-cream-100 hover:bg-cream-200 text-warmcharcoal-700 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery Column */}
          <div className="p-6 bg-cream-50/60 flex flex-col justify-between border-b md:border-b-0 md:border-r border-cream-200">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-cream-200 shadow-sm relative">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-cream-50 text-terracotta-700 shadow-sm border border-terracotta-200">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail selector */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImageIndex === idx ? 'border-terracotta-600 scale-95 shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Customization Column */}
          <div className="p-6 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-warmcharcoal-500 mb-1">
                <span className="font-semibold text-terracotta-600 uppercase tracking-wider text-[11px]">
                  {product.subcategory}
                </span>
                <div className="flex items-center gap-1 text-gold-500 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{product.rating}</span>
                  <span className="text-warmcharcoal-400 font-normal">({product.reviewsCount})</span>
                </div>
              </div>

              <h2 className="font-serif text-2xl font-bold text-warmcharcoal-900 leading-tight">
                {product.title}
              </h2>

              <div className="mt-2 flex items-baseline gap-3">
                <span className="text-2xl font-bold text-warmcharcoal-900">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-warmcharcoal-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  In Stock & Ready to Craft
                </span>
              </div>

              <p className="mt-3 text-xs text-warmcharcoal-600 leading-relaxed">
                {product.shortDesc || product.description.slice(0, 160) + '...'}
              </p>

              {/* Customization Options Input */}
              {product.customFields && product.customFields.length > 0 && (
                <div className="mt-5 p-3.5 bg-cream-50 rounded-2xl border border-cream-200/80 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-terracotta-700">
                    <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                    <span>Personalization Details:</span>
                  </div>

                  {product.customFields.map((field) => (
                    <div key={field.id} className="text-xs">
                      <label className="block font-medium text-warmcharcoal-700 mb-1">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      {field.type === 'select' ? (
                        <select
                          value={customFieldValues[field.id] || field.options[0]}
                          onChange={(e) => handleFieldChange(field.id, e.target.value)}
                          className="w-full text-xs p-2 rounded-xl border border-cream-300 bg-white focus:outline-none focus:ring-1 focus:ring-terracotta-500"
                        >
                          {field.options.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          placeholder="Type details here..."
                          value={customFieldValues[field.id] || ''}
                          onChange={(e) => handleFieldChange(field.id, e.target.value)}
                          className="w-full text-xs p-2 rounded-xl border border-cream-300 bg-white focus:outline-none focus:ring-1 focus:ring-terracotta-500"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-cream-200 space-y-3">
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-cream-300 rounded-xl bg-cream-50 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 flex items-center justify-center font-bold text-warmcharcoal-600 hover:text-terracotta-600"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-warmcharcoal-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 flex items-center justify-center font-bold text-warmcharcoal-600 hover:text-terracotta-600"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-4 bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold text-xs rounded-xl shadow-warm flex items-center justify-center gap-2 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag • ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
                </button>
              </div>

              {/* View Full Product Link */}
              <div className="flex items-center justify-between text-xs text-warmcharcoal-500 pt-1">
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="hover:text-terracotta-600 flex items-center gap-1"
                >
                  <Heart className={`w-3.5 h-3.5 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  <span>{isInWishlist(product.id) ? 'Saved in Wishlist' : 'Save to Wishlist'}</span>
                </button>

                <Link
                  to={`/product/${product.slug}`}
                  onClick={onClose}
                  className="text-terracotta-700 hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Full Specifications & Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
