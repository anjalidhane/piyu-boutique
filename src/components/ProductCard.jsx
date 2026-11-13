import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, Star, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ product, onQuickView }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const navigate = useNavigate();

  const isFavorite = isInWishlist(product.id);
  const hasMultipleImages = product.images && product.images.length > 1;
  const currentImage = (isHovered && hasMultipleImages) ? product.images[1] : product.images[0];

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.customizable) {
      // If it requires custom fields, open quick view or product details so user can personalize
      if (onQuickView) {
        onQuickView(product);
      } else {
        navigate(`/product/${product.slug}`);
      }
    } else {
      addToCart(product, 1, 'Standard Handcrafted Artisan Edition');
    }
  };

  const handleQuickViewClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    }
  };

  return (
    <div 
      className="group relative bg-white rounded-2xl overflow-hidden border border-cream-200/90 shadow-sm hover:shadow-warm transition-all duration-300 flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Box */}
      <div className="relative aspect-square w-full overflow-hidden bg-cream-100">
        <Link to={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={currentImage}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start z-10 pointer-events-none">
          {product.badge && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-cream-50/95 text-terracotta-700 shadow-sm backdrop-blur-sm border border-terracotta-200">
              <Sparkles className="w-2.5 h-2.5 text-gold-500" />
              {product.badge}
            </span>
          )}
          {product.customizable && (
            <span className="text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-terracotta-600/90 text-white shadow-sm backdrop-blur-sm">
              Customizable
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-sm shadow-sm transition-all duration-200 z-10 ${
            isFavorite 
              ? 'bg-blush-50 text-red-500 hover:bg-blush-100' 
              : 'bg-cream-50/90 text-warmcharcoal-600 hover:text-red-500 hover:bg-white'
          }`}
          aria-label="Save to Wishlist"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current text-red-500' : ''}`} />
        </button>

        {/* Quick View Floating Overlay on Hover */}
        <div className="absolute inset-x-0 bottom-3 px-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={handleQuickViewClick}
            className="flex-1 py-2 px-3 bg-white/95 backdrop-blur-md text-warmcharcoal-800 text-xs font-semibold rounded-xl shadow-md hover:bg-terracotta-600 hover:text-white transition-colors flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Subcategory & Rating */}
          <div className="flex items-center justify-between text-xs text-warmcharcoal-600 mb-1">
            <span className="font-medium text-terracotta-600 tracking-wide text-[11px] uppercase">
              {product.subcategory}
            </span>
            <div className="flex items-center gap-1 text-gold-500 font-semibold text-[11px]">
              <Star className="w-3 h-3 fill-current" />
              <span>{product.rating}</span>
              <span className="text-warmcharcoal-600 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-serif font-semibold text-warmcharcoal-900 text-base leading-snug line-clamp-2 hover:text-terracotta-600 transition-colors">
            <Link to={`/product/${product.slug}`}>
              {product.title}
            </Link>
          </h3>
        </div>

        {/* Price and Cart Button */}
        <div className="mt-3 pt-3 border-t border-cream-100 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-warmcharcoal-900">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-warmcharcoal-600 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-terracotta-50 hover:bg-terracotta-600 text-terracotta-700 hover:text-white text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 shadow-sm"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {product.customizable ? 'Customize' : 'Add'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
