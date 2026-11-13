import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Sparkles, 
  Palette, 
  Gem, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Clock, 
  Phone 
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-cream-100 to-cream-50 py-16 border-b border-cream-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
            About PIHU
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-warmcharcoal-900 mt-2">
            The Soul of Handcrafted Traditions
          </h1>
          <p className="text-sm sm:text-base text-warmcharcoal-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            Every thread, stroke of paint, and strung pearl at PIHU tells a story of Maharashtrian cultural heritage and personal celebrations.
          </p>
        </div>
      </section>

      {/* Artisan Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-warm border-4 border-white bg-cream-100">
              <img
                src="/images/pihu-29.jpg"
                alt="Artisan Sayali painting in her studio"
                className="w-full h-96 sm:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warmcharcoal-900/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-serif text-xl font-bold">Sayali Shinde</p>
                  <p className="text-xs text-gold-300">Master Artisan & Creative Director</p>
                  <p className="text-[11px] text-cream-200 mt-1">Kherade Vangi, Sangli, Maharashtra</p>
                </div>
              </div>
            </div>
            {/* Stamp badge */}
            <div className="absolute -bottom-5 -right-5 bg-terracotta-600 text-cream-50 p-4 rounded-2xl shadow-lg text-center hidden sm:block">
              <span className="font-serif font-bold text-lg">Est. 2021</span>
              <p className="text-[10px] uppercase tracking-wider text-terracotta-200">Kherade Vangi</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-100 text-terracotta-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Meet The Maker</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warmcharcoal-900 leading-tight">
              From a Sacred Passion in Rural Maharashtra to Heartfelt Homes Across India
            </h2>

            <div className="text-sm text-warmcharcoal-700 space-y-4 leading-relaxed font-sans">
              <p>
                Hello! I am <strong>Sayali</strong>, the founder and hands behind <strong>PIHU – Customize Fabric & Handmade Jewellery</strong> (also known as <em>Sayali Shoppy</em> in Kherade Vangi).
              </p>
              <p>
                Growing up immersed in Maharashtra's artistic traditions — from the rhythmic chanting of Pandharpur Wari to the exquisite regal motifs of Peshwai jewellery and Paithani textiles — I was captivated by the sheer emotion and reverence embedded in handmade things.
              </p>
              <p>
                What started as hand-painting custom baby shower (Dohale Jevan) banners and devotional kurtas for relatives quickly blossomed into a dedicated boutique. Today, every piece in our collection is hand-lettered, painted, or strung by me in our studio. We don't use mass digital presses. Each brushstroke is mixed fresh, ensuring your family's names and blessings remain vibrant for generations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200">
                <Palette className="w-5 h-5 text-terracotta-600 mb-2" />
                <h4 className="font-serif text-base font-bold text-warmcharcoal-900">Customize Fabric Art</h4>
                <p className="text-xs text-warmcharcoal-600 mt-1">
                  100% natural cotton canvas, high-grade water-fast artist pigments, and delicate lace embroidery.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200">
                <Gem className="w-5 h-5 text-gold-600 mb-2" />
                <h4 className="font-serif text-base font-bold text-warmcharcoal-900">Handmade Jewellery</h4>
                <p className="text-xs text-warmcharcoal-600 mt-1">
                  Lustrous Basra imitation pearls, hand-cut Austrian kundan, and 18K anti-tarnish micro plating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR 4 CRAFTSMANSHIP PILLARS */}
      <section className="bg-gradient-to-r from-cream-100 via-blush-50 to-cream-100 py-16 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
              Our Core Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warmcharcoal-900 mt-1">
              Why Handcrafted Matters
            </h2>
            <p className="text-xs sm:text-sm text-warmcharcoal-600 mt-2">
              In a world flooded with disposable items, PIHU is dedicated to slow heirloom artistry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-cream-200 shadow-sm">
              <span className="text-terracotta-600 font-serif font-bold text-2xl">01</span>
              <h3 className="font-serif text-lg font-bold text-warmcharcoal-900 mt-2">Zero Mass Production</h3>
              <p className="text-xs text-warmcharcoal-600 mt-2 leading-relaxed">
                No factory assembly lines. Every banner and jewellery set is individually conceived and tailored to your custom specifications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-cream-200 shadow-sm">
              <span className="text-gold-600 font-serif font-bold text-2xl">02</span>
              <h3 className="font-serif text-lg font-bold text-warmcharcoal-900 mt-2">Wash-Fast Durability</h3>
              <p className="text-xs text-warmcharcoal-600 mt-2 leading-relaxed">
                We formulate artist-grade fabric pigments heat-set to bond deep within cotton fibers. They do not fade or crack during gentle washing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-cream-200 shadow-sm">
              <span className="text-terracotta-600 font-serif font-bold text-2xl">03</span>
              <h3 className="font-serif text-lg font-bold text-warmcharcoal-900 mt-2">Authentic Cultural Roots</h3>
              <p className="text-xs text-warmcharcoal-600 mt-2 leading-relaxed">
                Inspired by Maharashtra's festive celebrations — Dohale Jevan, Barse (Naming Ceremony), Wari, Diwali, and traditional wedding rituals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-cream-200 shadow-sm">
              <span className="text-emerald-600 font-serif font-bold text-2xl">04</span>
              <h3 className="font-serif text-lg font-bold text-warmcharcoal-900 mt-2">Direct Artisan Care</h3>
              <p className="text-xs text-warmcharcoal-600 mt-2 leading-relaxed">
                When you order from PIHU, you speak directly with artisan Sayali on WhatsApp. No robotic middlemen or automated call centers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO LOCATION & CALL TO ACTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-warmcharcoal-900 text-cream-50 relative overflow-hidden border-2 border-gold-500/30">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-300">
              Visit or Contact The Studio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Have an Idea for a Custom Family Creation?
            </h2>
            <p className="text-xs sm:text-sm text-cream-200 leading-relaxed">
              Whether you want your baby's naming banner customized, a hand-painted portrait kurta, or matching bridal naths for your wedding squad, we are excited to handcraft it for you.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/custom-order"
                className="px-6 py-3 bg-terracotta-600 hover:bg-terracotta-500 text-white rounded-full text-xs font-bold transition-all shadow-warm"
              >
                Open Custom Order Form
              </Link>
              <a
                href="https://wa.me/919309851833"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold transition-all shadow-sm flex items-center gap-2"
              >
                <span>WhatsApp: +91 9309851833</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
