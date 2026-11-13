import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  Heart, 
  ShoppingBag, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  RefreshCw, 
  CheckCircle2, 
  MessageCircle, 
  Share2, 
  ArrowLeft 
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { REVIEWS } from '../data/reviews';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const product = PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];
  const isFavorite = isInWishlist(product.id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [customFieldValues, setCustomFieldValues] = useState({});
  const [activeTab, setActiveTab] = useState('description');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
    setQuantity(1);
    setCustomFieldValues({});
  }, [slug]);

  const handleFieldChange = (fieldId, value) => {
    setCustomFieldValues(prev => ({ ...prev, [fieldId]: value }));
  };

  const getCustomizationNotes = () => {
    if (product.customFields && product.customFields.length > 0) {
      return product.customFields
        .map(field => `${field.label}: ${customFieldValues[field.id] || '(Standard Default)'}`)
        .join(' | ');
    }
    return 'Standard Handcrafted Artisan Edition';
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, getCustomizationNotes());
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, getCustomizationNotes());
    navigate('/checkout');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // WhatsApp direct product question
  const whatsappMsg = encodeURIComponent(
    `Namaste Sayali! I am looking at your piece: "${product.title}" (₹${product.price}) on PIHU. Can you tell me more about customizing it?`
  );

  const relatedProducts = PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const productReviews = REVIEWS.filter(r => r.productId === product.id);

  return (
    <div className="space-y-16 pb-20">
      {/* Breadcrumb Bar */}
      <div className="bg-cream-100/60 border-b border-cream-200 py-3 text-xs text-warmcharcoal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-terracotta-600">Home</Link>
            <span>/</span>
            <Link 
              to={product.category === 'fabric' ? '/customize-fabric-painting' : '/handmade-jewellery'} 
              className="hover:text-terracotta-600 capitalize"
            >
              {product.category === 'fabric' ? 'Fabric Painting' : 'Handmade Jewellery'}
            </Link>
            <span>/</span>
            <span className="text-warmcharcoal-800 font-medium truncate max-w-xs">{product.title}</span>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 hover:text-terracotta-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Gallery Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white border border-cream-200 shadow-warm">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {product.badge && (
                <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-cream-50/95 text-terracotta-700 shadow-sm border border-terracotta-200 backdrop-blur-sm">
                  {product.badge}
                </span>
              )}

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md shadow-md transition-all ${
                  isFavorite 
                    ? 'bg-blush-100 text-red-500' 
                    : 'bg-white/90 text-warmcharcoal-600 hover:text-red-500 hover:bg-white'
                }`}
                aria-label="Save to Wishlist"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current text-red-500' : ''}`} />
              </button>
            </div>

            {/* Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 bg-white ${
                      activeImageIndex === idx 
                        ? 'border-terracotta-600 scale-95 shadow-md' 
                        : 'border-cream-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Artisan Seal Under Gallery */}
            <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200 text-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-500" />
                <span className="font-semibold text-warmcharcoal-800">
                  Artisan Handcrafted in Kherade Vangi
                </span>
              </div>
              <button
                onClick={handleShare}
                className="text-terracotta-600 font-semibold hover:underline flex items-center gap-1"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Link Copied!' : 'Share Product'}</span>
              </button>
            </div>
          </div>

          {/* Product Info & Actions Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs text-warmcharcoal-500 mb-2">
                <span className="font-bold text-terracotta-600 uppercase tracking-widest text-[11px]">
                  {product.subcategory}
                </span>
                <div className="flex items-center gap-1 text-gold-500 font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{product.rating}</span>
                  <span className="text-warmcharcoal-400 font-normal">({product.reviewsCount} verified reviews)</span>
                </div>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-warmcharcoal-900 leading-tight">
                {product.title}
              </h1>

              {/* Price row */}
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-3xl font-bold text-warmcharcoal-900">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-base text-warmcharcoal-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-warmcharcoal-400 mt-1">Inclusive of all taxes • Handcrafted upon order</p>
            </div>

            <p className="text-sm text-warmcharcoal-700 leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Customization Section */}
            {product.customFields && product.customFields.length > 0 && (
              <div className="p-5 rounded-2xl bg-cream-50/80 border border-cream-200/90 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-terracotta-700 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-gold-500" />
                    <span>Personalize This Handcrafted Piece</span>
                  </div>
                  <span className="text-[10px] text-warmcharcoal-500 italic">No extra fee</span>
                </div>

                <div className="space-y-3">
                  {product.customFields.map((field) => (
                    <div key={field.id} className="text-xs">
                      <label className="block font-semibold text-warmcharcoal-800 mb-1">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      {field.type === 'select' ? (
                        <select
                          value={customFieldValues[field.id] || field.options[0]}
                          onChange={(e) => handleFieldChange(field.id, e.target.value)}
                          className="w-full text-xs p-2.5 rounded-xl border border-cream-300 bg-white focus:outline-none focus:ring-1 focus:ring-terracotta-500"
                        >
                          {field.options.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          placeholder="Type details (e.g. name, date, message)..."
                          value={customFieldValues[field.id] || ''}
                          onChange={(e) => handleFieldChange(field.id, e.target.value)}
                          className="w-full text-xs p-2.5 rounded-xl border border-cream-300 bg-white focus:outline-none focus:ring-1 focus:ring-terracotta-500"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Actions */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-cream-300 rounded-xl bg-white p-1 shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center font-bold text-warmcharcoal-700 hover:text-terracotta-600"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-warmcharcoal-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center font-bold text-warmcharcoal-700 hover:text-terracotta-600"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-xs shadow-warm flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag • ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleBuyNow}
                  className="py-3 px-4 rounded-xl bg-warmcharcoal-900 hover:bg-black text-white font-bold text-xs transition-colors text-center"
                >
                  Buy It Now
                </button>

                <a
                  href={`https://wa.me/919309851833?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-4 border-t border-cream-200 grid grid-cols-3 gap-3 text-center text-[11px] text-warmcharcoal-600">
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-4 h-4 text-terracotta-600 mb-1" />
                <span className="font-semibold text-warmcharcoal-800">100% Handcrafted</span>
                <span>Direct from Sayali</span>
              </div>
              <div className="flex flex-col items-center">
                <Truck className="w-4 h-4 text-gold-600 mb-1" />
                <span className="font-semibold text-warmcharcoal-800">Pan-India Courier</span>
                <span>Tracked Delivery</span>
              </div>
              <div className="flex flex-col items-center">
                <RefreshCw className="w-4 h-4 text-emerald-600 mb-1" />
                <span className="font-semibold text-warmcharcoal-800">Safe Packaging</span>
                <span>Gift Ready Box</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section: Description, Specifications, Care, Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-cream-200 shadow-sm overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-cream-200 bg-cream-50/70 overflow-x-auto">
            {[
              { id: 'description', label: 'Artisan Details & Features' },
              { id: 'materials', label: 'Materials & Specs' },
              { id: 'care', label: 'Care & Washing Guide' },
              { id: 'reviews', label: `Customer Reviews (${product.reviewsCount})` }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-6 text-xs font-bold tracking-wide uppercase whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'border-terracotta-600 text-terracotta-700 bg-white'
                    : 'border-transparent text-warmcharcoal-600 hover:text-terracotta-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8 text-xs sm:text-sm text-warmcharcoal-700 leading-relaxed font-sans">
            {activeTab === 'description' && (
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-warmcharcoal-900">
                  About {product.title}
                </h3>
                <p>{product.description}</p>
                {product.features && (
                  <div className="pt-2">
                    <h4 className="font-serif text-base font-bold text-warmcharcoal-900 mb-2">Key Highlights:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {product.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'materials' && (
              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-warmcharcoal-900">
                  Materials & Authenticity Specifications
                </h3>
                <p><strong>Primary Composition:</strong> {product.materials}</p>
                <p><strong>Crafted By:</strong> Artisan Sayali Shinde (Sayali Shoppy, Kherade Vangi)</p>
                <p><strong>Packaging:</strong> Premium eco-kraft boutique box with moisture shield wrap and handwritten artisan thank-you card.</p>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-warmcharcoal-900">
                  Care & Maintenance Instructions
                </h3>
                <p>{product.careInstructions}</p>
                <p className="text-xs text-warmcharcoal-500">
                  * All hand-painted garments use high-fastness acrylic pigments heat-cured into the cotton matrix. Always avoid harsh chemical bleaches.
                </p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-bold text-warmcharcoal-900">
                    Buyer Reviews for this Item
                  </h3>
                  <Link
                    to="/reviews"
                    className="text-xs font-semibold text-terracotta-600 hover:underline"
                  >
                    View All Studio Reviews →
                  </Link>
                </div>

                <div className="space-y-4">
                  {productReviews.length > 0 ? (
                    productReviews.map(r => (
                      <div key={r.id} className="p-4 rounded-2xl bg-cream-50 border border-cream-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-warmcharcoal-900">{r.author} ({r.city})</span>
                          <span className="text-[11px] text-warmcharcoal-400">{r.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gold-500">
                          {[...Array(r.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <p className="italic text-xs text-warmcharcoal-700 font-serif">"{r.review}"</p>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200 space-y-2">
                      <div className="flex items-center gap-1 text-gold-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <p className="italic text-xs text-warmcharcoal-700 font-serif">
                        "Prettier than pictured! The finish and packaging exceeded our expectations. Truly authentic Maharashtrian handmade artistry."
                      </p>
                      <p className="text-[11px] text-warmcharcoal-500">— Verified Customer from Maharashtra</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Handcrafted Creations */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              You May Also Love
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-warmcharcoal-900 mt-1">
              Matching Handcrafted Creations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(rel => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
