import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  Instagram,
  Facebook
} from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-warmcharcoal-900 text-cream-100/90 pt-16 pb-12 border-t-4 border-terracotta-500 relative overflow-hidden">
      {/* Background Decorative Motif */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Trust Badges Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 mb-12 border-b border-warmcharcoal-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center p-4 rounded-xl bg-warmcharcoal-800/40 border border-warmcharcoal-800">
            <Sparkles className="w-6 h-6 text-gold-400 mb-2" />
            <h4 className="text-sm font-semibold text-cream-50 font-serif">100% Handcrafted</h4>
            <p className="text-xs text-cream-300/70 mt-1">Made with patient artisan precision by Sayali</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-warmcharcoal-800/40 border border-warmcharcoal-800">
            <ShieldCheck className="w-6 h-6 text-terracotta-400 mb-2" />
            <h4 className="text-sm font-semibold text-cream-50 font-serif">Wash-Fast Colors</h4>
            <p className="text-xs text-cream-300/70 mt-1">Non-toxic, durable pigments that never fade</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-warmcharcoal-800/40 border border-warmcharcoal-800">
            <Heart className="w-6 h-6 text-blush-400 mb-2" />
            <h4 className="text-sm font-semibold text-cream-50 font-serif">Custom Personalization</h4>
            <p className="text-xs text-cream-300/70 mt-1">Names, dates, and motifs tailored to your story</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-warmcharcoal-800/40 border border-warmcharcoal-800">
            <Truck className="w-6 h-6 text-gold-400 mb-2" />
            <h4 className="text-sm font-semibold text-cream-50 font-serif">Pan-India Delivery</h4>
            <p className="text-xs text-cream-300/70 mt-1">Safely boxed with tracking and gift packaging</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" light={true} />
            <p className="text-sm text-cream-300/80 leading-relaxed pr-6">
              PIHU is an authentic handmade boutique by artisan Sayali Shinde, specializing in personalized fabric painting, ceremonial family banners, hand-embroidered apparel, and traditional Maharashtrian jewellery. Every creation preserves India’s rich slow-craft heritage.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a 
                href="https://wa.me/919309851833" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-full text-xs font-semibold shadow-sm transition-colors"
              >
                <span>WhatsApp Artisan Sayali</span>
              </a>
              <a 
                href="tel:9309851833" 
                className="p-2 rounded-full bg-warmcharcoal-800 text-gold-400 hover:text-gold-300 transition-colors"
                title="Call Studio"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links: Shop */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-gold-300 uppercase font-sans">
              Shop Collections
            </h3>
            <ul className="space-y-2 text-xs text-cream-300/80">
              <li>
                <Link to="/customize-fabric-painting" className="hover:text-gold-300 transition-colors">
                  Dohale Jevan Banners
                </Link>
              </li>
              <li>
                <Link to="/customize-fabric-painting" className="hover:text-gold-300 transition-colors">
                  Hand-Painted Kurtas & Tees
                </Link>
              </li>
              <li>
                <Link to="/customize-fabric-painting" className="hover:text-gold-300 transition-colors">
                  Baby Welcome Hoops
                </Link>
              </li>
              <li>
                <Link to="/handmade-jewellery" className="hover:text-gold-300 transition-colors">
                  Maharashtrian Naths
                </Link>
              </li>
              <li>
                <Link to="/handmade-jewellery" className="hover:text-gold-300 transition-colors">
                  Lotus Ruby Chokers
                </Link>
              </li>
              <li>
                <Link to="/handmade-jewellery" className="hover:text-gold-300 transition-colors">
                  Beaded Ear Pins & Bugadi
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links: Custom & About */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-gold-300 uppercase font-sans">
              Custom Craft
            </h3>
            <ul className="space-y-2 text-xs text-cream-300/80">
              <li>
                <Link to="/custom-order" className="hover:text-gold-300 transition-colors font-medium text-cream-100">
                  Custom Order Form ✨
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors">
                  Artisan Story & Meet Sayali
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-gold-300 transition-colors">
                  Customer Reviews & Photos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-300 transition-colors">
                  Studio Location & FAQs
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-gold-300 transition-colors text-terracotta-400">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio & Newsletter */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-gold-300 uppercase font-sans">
              Artisan Studio
            </h3>
            <div className="space-y-2.5 text-xs text-cream-300/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-terracotta-400 flex-shrink-0 mt-0.5" />
                <span>Sayali Shoppy, Kherade Vangi, Kadegaon, Sangli, Maharashtra 415305</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-terracotta-400 flex-shrink-0" />
                <span>+91 9309851833</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-terracotta-400 flex-shrink-0" />
                <span>contact@pihuhandmade.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-xs font-medium text-cream-200 mb-2">Get 10% off your first custom order:</p>
              {subscribed ? (
                <div className="p-2.5 bg-terracotta-900/60 border border-terracotta-500 rounded-xl text-xs text-gold-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Use code <strong>PIHUFIRST10</strong> at checkout!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full px-3 py-2 text-xs rounded-l-lg bg-warmcharcoal-800 border border-warmcharcoal-700 text-cream-100 placeholder-warmcharcoal-400 focus:outline-none focus:ring-1 focus:ring-gold-400"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-terracotta-600 hover:bg-terracotta-500 text-cream-50 rounded-r-lg text-xs font-semibold flex items-center justify-center transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-warmcharcoal-800 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-400/60 gap-4">
          <p>© {new Date().getFullYear()} PIHU – Customize Fabric & Handmade Jewellery. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Handmade with Love in Maharashtra, India</span>
            <span>•</span>
            <Link to="/about" className="hover:text-gold-300">Privacy & Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
