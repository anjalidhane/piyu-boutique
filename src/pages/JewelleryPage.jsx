import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Gem, 
  Sparkles, 
  Search, 
  ShieldCheck, 
  Star, 
  HeartHandshake 
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import { PRODUCTS } from '../data/products';

export default function JewelleryPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const jewelleryProducts = useMemo(() => {
    return PRODUCTS.filter(p => p.category === 'jewellery');
  }, []);

  const subcategories = ['All', 'Naths & Nose Pins', 'Necklaces & Sets', 'Earrings & Bugadi'];

  const filteredProducts = useMemo(() => {
    let result = jewelleryProducts.filter(p => {
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
  }, [jewelleryProducts, selectedSubcategory, sortBy, searchQuery]);

  return (
    <div className="space-y-12 pb-16">
      {/* Category Hero Banner */}
      <section className="bg-gradient-to-r from-cream-100 via-gold-50 to-cream-100 py-12 md:py-16 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-50 text-gold-800 text-xs font-semibold border border-gold-300 mb-3">
            <Gem className="w-3.5 h-3.5 text-gold-600" />
            <span>Basra Lustre Pearls • 18K Anti-Tarnish Micro Polish • Handcrafted</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-warmcharcoal-900 leading-tight">
            Handmade Jewellery
          </h1>
          <p className="text-sm sm:text-base text-warmcharcoal-600 mt-3 leading-relaxed">
            Timeless Maharashtrian Naths, royal lotus ruby chokers, beaded bridal necklaces, and linear ear drop pins. Crafted with authentic Indian craftsmanship to pair flawlessly with your Paithani sarees and festive occasions.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              to="/custom-order"
              className="px-6 py-2.5 rounded-full bg-warmcharcoal-900 hover:bg-terracotta-600 text-white text-xs font-bold shadow-sm transition-all flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Looking for Custom Bridal Jewellery? Ask Us</span>
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
                    ? 'bg-gold-500 text-warmcharcoal-950 font-bold shadow-sm'
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
                placeholder="Search jewellery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-cream-300 bg-cream-50 focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs p-2 rounded-xl border border-cream-300 bg-cream-50 focus:outline-none focus:ring-1 focus:ring-gold-500 text-warmcharcoal-700"
            >
              <option value="featured">Featured Ornaments</option>
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
          Showing <strong>{filteredProducts.length}</strong> handcrafted jewellery pieces
        </div>

        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-3xl border border-cream-200 p-8 space-y-4">
            <Gem className="w-12 h-12 text-gold-500 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-warmcharcoal-800">
              No matching jewellery found
            </h3>
            <p className="text-xs text-warmcharcoal-500 max-w-sm mx-auto">
              Try adjusting your subcategory or search query, or message artisan Sayali for a bespoke bridal set.
            </p>
            <button
              onClick={() => { setSelectedSubcategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 bg-gold-500 text-warmcharcoal-900 rounded-xl text-xs font-semibold"
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

      {/* JEWELLERY CARE GUIDE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-gold-800">
            <ShieldCheck className="w-5 h-5 text-gold-600" />
            <h3 className="font-serif text-xl font-bold text-warmcharcoal-900">
              Handmade Jewellery Care & Longevity Tips
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs text-warmcharcoal-600">
            <div className="p-3.5 rounded-xl bg-cream-50 border border-cream-200 space-y-1">
              <strong className="text-warmcharcoal-900 block font-serif text-sm">Last On, First Off</strong>
              <p>Always put on your perfume, hairspray, and lotions BEFORE wearing your jewellery. Chemicals in perfumes degrade the pearl luster.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-cream-50 border border-cream-200 space-y-1">
              <strong className="text-warmcharcoal-900 block font-serif text-sm">Airtight Storage</strong>
              <p>Store each piece in its original zip pouch or velvet box. Avoid leaving exposed to open humid air or bathrooms.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-cream-50 border border-cream-200 space-y-1">
              <strong className="text-warmcharcoal-900 block font-serif text-sm">Dry Flannel Wipe</strong>
              <p>After wearing, gently wipe away sweat or skin oils with a soft dry flannel or cotton cloth. Never use harsh abrasive chemicals.</p>
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
