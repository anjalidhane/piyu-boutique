import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Sparkles, 
  Filter, 
  ArrowRight, 
  Search, 
  ShieldCheck, 
  SlidersHorizontal 
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import { PRODUCTS } from '../data/products';

export default function FabricPaintingPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const fabricProducts = useMemo(() => {
    return PRODUCTS.filter(p => p.category === 'fabric');
  }, []);

  const subcategories = ['All', 'Ceremonial Banners', 'Apparel & Kurtas', 'Embroidery Hoop Art', 'Custom Portraits', 'Gifts & Accessories'];

  const filteredProducts = useMemo(() => {
    let result = fabricProducts.filter(p => {
      const matchesSubcategory = selectedSubcategory === 'All' || p.subcategory === selectedSubcategory;
      const matchesSearch = searchQuery.trim() === '' || 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSubcategory && matchesSearch;
    });

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [fabricProducts, selectedSubcategory, sortBy, searchQuery]);

  return (
    <div className="space-y-12 pb-16">
      {/* Category Hero Banner */}
      <section className="bg-gradient-to-r from-cream-100 via-blush-50 to-cream-100 py-12 md:py-16 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-terracotta-50 text-terracotta-700 text-xs font-semibold border border-terracotta-200 mb-3">
            <Palette className="w-3.5 h-3.5" />
            <span>Pure Cotton • Wash-Fast Non-Toxic Inks • Hand-Painted</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-warmcharcoal-900 leading-tight">
            Customize Fabric Painting
          </h1>
          <p className="text-sm sm:text-base text-warmcharcoal-600 mt-3 leading-relaxed">
            From ceremonial baby shower banners and naming ceremony hoops to devotional Vitthal kurtas and personalized portraits. Every piece is hand-painted individually with your names and story.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              to="/custom-order"
              className="px-6 py-2.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-bold shadow-warm transition-all flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
              <span>Have a Custom Idea? Submit Order Form</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Filter and Control Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-4 border border-cream-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Subcategory Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {subcategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedSubcategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedSubcategory === cat
                    ? 'bg-terracotta-600 text-white font-semibold shadow-sm'
                    : 'bg-cream-100 text-warmcharcoal-700 hover:bg-cream-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <div className="relative flex-1 md:w-48">
              <Search className="w-4 h-4 text-warmcharcoal-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search fabric..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-cream-300 bg-cream-50 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs p-2 rounded-xl border border-cream-300 bg-cream-50 focus:outline-none focus:ring-1 focus:ring-terracotta-500 text-warmcharcoal-700"
            >
              <option value="featured">Featured Creations</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Customer Rating</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-xs text-warmcharcoal-500">
          Showing <strong>{filteredProducts.length}</strong> handcrafted fabric products
        </div>

        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-3xl border border-cream-200 p-8 space-y-4">
            <Palette className="w-12 h-12 text-terracotta-400 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-warmcharcoal-800">
              No matching products found
            </h3>
            <p className="text-xs text-warmcharcoal-500 max-w-sm mx-auto">
              Try adjusting your subcategory or search query, or submit a custom request for any design!
            </p>
            <button
              onClick={() => { setSelectedSubcategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 bg-terracotta-600 text-white rounded-xl text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        )}
      </section>

      {/* FABRIC CARE & CRAFTSMANSHIP ACCORDION SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-terracotta-700">
            <ShieldCheck className="w-5 h-5 text-terracotta-600" />
            <h3 className="font-serif text-xl font-bold text-warmcharcoal-900">
              Fabric Painting Washing & Care Guide
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs text-warmcharcoal-600">
            <div className="p-3.5 rounded-xl bg-cream-50 border border-cream-200 space-y-1">
              <strong className="text-warmcharcoal-900 block font-serif text-sm">Gentle Wash Only</strong>
              <p>Hand wash in cold water using mild liquid detergent. Never scrub directly on the painted motif or wring harshly.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-cream-50 border border-cream-200 space-y-1">
              <strong className="text-warmcharcoal-900 block font-serif text-sm">Iron on Reverse</strong>
              <p>Always iron the garment inside-out on medium heat or place a thin cotton handkerchief over the artwork while pressing.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-cream-50 border border-cream-200 space-y-1">
              <strong className="text-warmcharcoal-900 block font-serif text-sm">Lifelong Durability</strong>
              <p>Heat-cured acrylic polymer binders bond permanently into cotton yarn, ensuring the colors remain radiant year after year.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}
