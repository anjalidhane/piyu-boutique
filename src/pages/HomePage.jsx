import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Palette, 
  Gem, 
  ShieldCheck, 
  Heart, 
  Truck, 
  CheckCircle2, 
  Star, 
  Eye, 
  Clock, 
  PhoneCall, 
  Gift 
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import { PRODUCTS } from '../data/products';
import { REVIEWS } from '../data/reviews';

export default function HomePage() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const featuredFabric = PRODUCTS.filter(p => p.category === 'fabric').slice(0, 4);
  const featuredJewellery = PRODUCTS.filter(p => p.category === 'jewellery').slice(0, 4);
  const bestsellers = PRODUCTS.filter(p => p.featured).slice(0, 6);

  return (
    <div className="space-y-20 pb-16">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-50 pt-8 pb-16 md:py-20 border-b border-cream-200">
        {/* Soft Decorative Ambient Circles */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blush-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-gold-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-terracotta-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-50 border border-terracotta-300 text-terracotta-700 text-xs font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-spin" />
                <span>Handcrafted Indian Boutique by Artisan Sayali</span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-warmcharcoal-900 tracking-tight leading-[1.12]">
                Custom Fabric Art & <br />
                <span className="text-terracotta-600 italic font-normal">Handmade Jewellery</span> <br />
                Crafted with Soul.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-warmcharcoal-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Welcome to <strong>PIHU</strong> — where intimate family milestones, devotional art, and Peshwai elegance come to life on pure handlooms and handcrafted ornaments in Maharashtra.
              </p>

              {/* Call to actions */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <Link
                  to="/customize-fabric-painting"
                  className="px-6 py-3.5 bg-terracotta-600 hover:bg-terracotta-700 text-white rounded-full font-semibold text-sm shadow-warm hover:shadow-warm-hover transition-all flex items-center gap-2 group"
                >
                  <Palette className="w-4 h-4" />
                  <span>Customize Fabric Painting</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/handmade-jewellery"
                  className="px-6 py-3.5 bg-cream-100 hover:bg-cream-200 text-terracotta-800 rounded-full font-semibold text-sm border border-cream-300 shadow-sm transition-colors flex items-center gap-2"
                >
                  <Gem className="w-4 h-4 text-gold-600" />
                  <span>Shop Jewellery</span>
                </Link>

                <Link
                  to="/custom-order"
                  className="px-5 py-3.5 bg-gold-50 hover:bg-gold-100 text-gold-900 rounded-full font-semibold text-sm border border-gold-300 shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-gold-600" />
                  <span>Custom Order Form</span>
                </Link>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 border-t border-cream-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-warmcharcoal-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Personalized Family Names</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Wash-Fast Fabric Pigments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>4.9★ Customer Love</span>
                </div>
              </div>
            </div>

            {/* Right Visual Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                {/* Main Featured Photo (Yashoda Krishna Dohale Jevan) */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-cream-100 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/images/pihu-19.jpg"
                    alt="Hand-painted Yashoda Krishna Dohale Jevan Banner by PIHU"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warmcharcoal-900/70 via-transparent to-transparent flex items-end p-5">
                    <div className="text-white">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300">
                        Signature Masterpiece
                      </span>
                      <p className="font-serif text-lg font-bold">
                        Yashoda Krishna Baby Shower Banner
                      </p>
                      <p className="text-xs text-cream-200">
                        Hand-painted on 100% pure cotton with lace borders
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Secondary Photo (Royal Lotus Ruby Choker) */}
                <div className="absolute -bottom-8 -left-6 sm:-left-10 w-44 sm:w-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/images/pihu-06.jpg"
                    alt="Lotus Ruby Choker Handmade Jewellery"
                    className="w-full h-36 sm:h-44 object-cover"
                  />
                  <div className="p-2.5 bg-white text-center">
                    <p className="font-serif text-xs font-bold text-warmcharcoal-900 truncate">
                      Lotus Ruby Choker Set
                    </p>
                    <p className="text-[10px] text-terracotta-600 font-semibold">₹1,899 • Antique Gold</p>
                  </div>
                </div>

                {/* Floating Artisan Seal Badge */}
                <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-gold-200 text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center font-serif font-bold text-sm">
                    4.9★
                  </div>
                  <span className="text-[10px] font-bold text-warmcharcoal-800 mt-1 uppercase tracking-wider">
                    350+ Custom Orders
                  </span>
                  <span className="text-[9px] text-warmcharcoal-500">Delivered Across India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DUAL CATEGORY SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-terracotta-600">
            Curated Artisanal Collections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warmcharcoal-900 mt-2">
            Explore What We Create
          </h2>
          <p className="text-sm text-warmcharcoal-600 mt-3">
            Every piece is made slowly, mindfully, and individually by hand in our studio in Kherade Vangi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Customize Fabric Painting */}
          <div className="group relative rounded-3xl overflow-hidden shadow-warm border border-cream-200 bg-white flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-cream-100">
              <img
                src="/images/pihu-01.jpg"
                alt="Customize Fabric Painting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warmcharcoal-900/80 via-warmcharcoal-900/30 to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-300">
                    Hand-Painted Elegance
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-1">
                    Customize Fabric Painting
                  </h3>
                  <p className="text-xs text-cream-200 mt-1 line-clamp-2">
                    Baby naming ceremony banners, Vitthal devotional kurtas, personalized portrait cloths, and embroidered shirts.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-xs font-semibold text-warmcharcoal-500">12 Unique Custom Styles</span>
                <p className="text-xs text-terracotta-700 font-bold">Personalized with Names & Dates</p>
              </div>
              <Link
                to="/customize-fabric-painting"
                className="px-5 py-2.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <span>Browse Fabric</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Handmade Jewellery */}
          <div className="group relative rounded-3xl overflow-hidden shadow-warm border border-cream-200 bg-white flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-cream-100">
              <img
                src="/images/pihu-10.jpg"
                alt="Handmade Jewellery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warmcharcoal-900/80 via-warmcharcoal-900/30 to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-300">
                    Traditional Peshwai Craft
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-1">
                    Handmade Jewellery
                  </h3>
                  <p className="text-xs text-cream-200 mt-1 line-clamp-2">
                    Basra-style pearl floral naths, lotus ruby choker sets, solid gold-beaded necklaces, and linear ear drop pins.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-xs font-semibold text-warmcharcoal-500">8 Bespoke Ornaments</span>
                <p className="text-xs text-gold-700 font-bold">Anti-Tarnish 18K Polish & Pure Pearls</p>
              </div>
              <Link
                to="/handmade-jewellery"
                className="px-5 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-warmcharcoal-950 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <span>Browse Jewellery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BESTSELLER PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-terracotta-600">
              Customer Favorites
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warmcharcoal-900 mt-1">
              Bestseller Handcrafted Creations
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/customize-fabric-painting"
              className="text-xs font-semibold text-terracotta-700 hover:text-terracotta-800 underline"
            >
              View Fabric Painting
            </Link>
            <span className="text-cream-300">•</span>
            <Link
              to="/handmade-jewellery"
              className="text-xs font-semibold text-terracotta-700 hover:text-terracotta-800 underline"
            >
              View Jewellery
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      </section>

      {/* HOW CUSTOM ORDERING WORKS */}
      <section className="bg-gradient-to-r from-cream-100 via-blush-50 to-cream-100 py-16 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-terracotta-600">
              Simple 4-Step Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warmcharcoal-900 mt-1">
              How Custom Ordering Works
            </h2>
            <p className="text-xs sm:text-sm text-warmcharcoal-600 mt-2">
              Transforming your cherished memories and special requests into physical handcrafted keepsakes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-cream-200 flex flex-col justify-between relative group hover:shadow-warm transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-terracotta-50 text-terracotta-600 font-serif font-bold text-lg flex items-center justify-center mb-4">
                01
              </div>
              <h3 className="font-serif text-lg font-bold text-warmcharcoal-900 mb-2">
                Choose Your Craft
              </h3>
              <p className="text-xs text-warmcharcoal-600 leading-relaxed">
                Select your base product — whether a ceremonial Paalna banner, hand-painted cotton kurta, hoop art, or a traditional floral nath.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-cream-200 flex flex-col justify-between relative group hover:shadow-warm transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-gold-50 text-gold-600 font-serif font-bold text-lg flex items-center justify-center mb-4">
                02
              </div>
              <h3 className="font-serif text-lg font-bold text-warmcharcoal-900 mb-2">
                Share Idea or Photo
              </h3>
              <p className="text-xs text-warmcharcoal-600 leading-relaxed">
                Fill our Custom Order Form with names, occasion dates, preferred colors, or upload a portrait photo you want painted.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-cream-200 flex flex-col justify-between relative group hover:shadow-warm transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blush-100 text-blush-500 font-serif font-bold text-lg flex items-center justify-center mb-4">
                03
              </div>
              <h3 className="font-serif text-lg font-bold text-warmcharcoal-900 mb-2">
                Handcrafted with Love
              </h3>
              <p className="text-xs text-warmcharcoal-600 leading-relaxed">
                Artisan Sayali individually sketches, paints, or beads your piece with fine attention to detail, sharing work-in-progress proofs on WhatsApp.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-cream-200 flex flex-col justify-between relative group hover:shadow-warm transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 font-serif font-bold text-lg flex items-center justify-center mb-4">
                04
              </div>
              <h3 className="font-serif text-lg font-bold text-warmcharcoal-900 mb-2">
                Delivered to Doorstep
              </h3>
              <p className="text-xs text-warmcharcoal-600 leading-relaxed">
                Safely boxed in our signature boutique packaging with tracking, ready to elevate your celebrations or surprise a loved one.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/custom-order"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-terracotta-600 hover:bg-terracotta-700 text-white rounded-full font-bold text-sm shadow-warm transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Your Custom Order Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ARTISAN SPOTLIGHT: SAYALI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-cream-200 shadow-warm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image Side */}
            <div className="lg:col-span-5 h-80 lg:h-full relative overflow-hidden bg-cream-100">
              <img
                src="/images/pihu-29.jpg"
                alt="Artisan Sayali at PIHU Studio"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warmcharcoal-900/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300">The Artisan</span>
                  <h4 className="font-serif text-xl font-bold">Sayali Shinde</h4>
                  <p className="text-xs text-cream-200">Founder & Craft Artist • Kherade Vangi</p>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-100 text-terracotta-700 text-xs font-semibold">
                <Heart className="w-3.5 h-3.5 text-blush-500 fill-current" />
                <span>The Story of PIHU</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warmcharcoal-900 leading-tight">
                "Every brushstroke carries a prayer, every bead reflects a tradition."
              </h2>

              <p className="text-sm text-warmcharcoal-600 leading-relaxed font-sans">
                Started from a quiet passion in Kherade Vangi, Maharashtra, <strong>PIHU</strong> was born to revive meaningful slow gifting. In an age of mass-produced plastic and digital prints, we believe milestones like baby showers, weddings, and naming ceremonies deserve the tenderness of human touch.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3 rounded-xl bg-cream-50 border border-cream-200">
                  <span className="font-serif text-2xl font-bold text-terracotta-600">300+</span>
                  <p className="text-xs text-warmcharcoal-600">Custom Banners</p>
                </div>
                <div className="p-3 rounded-xl bg-cream-50 border border-cream-200">
                  <span className="font-serif text-2xl font-bold text-gold-600">500+</span>
                  <p className="text-xs text-warmcharcoal-600">Naths & Sets</p>
                </div>
                <div className="p-3 rounded-xl bg-cream-50 border border-cream-200">
                  <span className="font-serif text-2xl font-bold text-emerald-600">100%</span>
                  <p className="text-xs text-warmcharcoal-600">Handcrafted</p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/about"
                  className="px-6 py-2.5 rounded-full bg-warmcharcoal-900 hover:bg-terracotta-600 text-white text-xs font-semibold transition-colors flex items-center gap-2"
                >
                  <span>Read Full Story & Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="tel:9309851833"
                  className="text-xs font-semibold text-terracotta-700 hover:underline flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Sayali: 9309851833</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-terracotta-600">
              Verified Buyer Love
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warmcharcoal-900 mt-1">
              Words From Happy Families
            </h2>
          </div>
          <Link
            to="/reviews"
            className="text-xs font-bold text-terracotta-600 hover:text-terracotta-800 flex items-center gap-1"
          >
            <span>See All 350+ Reviews & Photos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl border border-cream-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-warmcharcoal-400">{item.date}</span>
                </div>

                <p className="text-xs text-warmcharcoal-700 leading-relaxed italic mb-4 font-serif">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-cream-100 flex items-center gap-3">
                <img
                  src={item.customerPhoto || item.avatar}
                  alt={item.author}
                  className="w-11 h-11 rounded-full object-cover border border-cream-300"
                />
                <div>
                  <h4 className="text-xs font-bold text-warmcharcoal-900">{item.author}</h4>
                  <p className="text-[10px] text-warmcharcoal-500">{item.city}</p>
                  <p className="text-[10px] text-emerald-700 font-semibold">✓ Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM / STUDIO PHOTO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-widest uppercase text-terracotta-600">
            @pihu_customize_gifting
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-warmcharcoal-900 mt-1">
            Follow Our Studio Journey
          </h2>
          <p className="text-xs text-warmcharcoal-600 mt-1">
            Real snippets of our fabric painting, hand embroidery, and jewellery making sessions in Maharashtra.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { img: '/images/pihu-08.jpg', title: 'Ganesha Hoop' },
            { img: '/images/pihu-16.jpg', title: 'Ear Drop Pins' },
            { img: '/images/pihu-07.jpg', title: 'Evil Eye Hanky' },
            { img: '/images/pihu-21.jpg', title: 'Warkari Topi' },
            { img: '/images/pihu-27.jpg', title: 'Khillari Bull' },
            { img: '/images/pihu-14.jpg', title: 'Aari Blouse' },
          ].map((item, idx) => (
            <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden group border border-cream-200">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-warmcharcoal-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                <span className="text-white text-[11px] font-semibold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK VIEW MODAL */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}
