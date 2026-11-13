import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  ShoppingBag, 
  Heart, 
  User, 
  Menu, 
  X, 
  Search, 
  Sparkles, 
  Phone, 
  ShieldCheck, 
  Palette, 
  Gem,
  LogOut,
  LayoutDashboard,
  ClipboardList
} from 'lucide-react';
import Logo from './Logo';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { PRODUCTS } from '../data/products';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const { totalItemsCount, openCart } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setUserDropdownOpen(false);
  }, [location.pathname]);

  const searchResults = searchQuery.trim() === '' ? [] : PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Fabric Painting', path: '/customize-fabric-painting', icon: Palette },
    { name: 'Handmade Jewellery', path: '/handmade-jewellery', icon: Gem },
    { name: 'Custom Order', path: '/custom-order', highlight: true },
    { name: 'About Us', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-terracotta-700 via-terracotta-600 to-terracotta-700 text-cream-50 text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-between border-b border-terracotta-800/40 relative z-50">
        <div className="hidden md:flex items-center gap-4 text-[11px] text-cream-100/90">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-gold-300" /> WhatsApp Studio: +91 9309851833
          </span>
          <span className="text-terracotta-300">•</span>
          <span>Kherade Vangi, Maharashtra</span>
        </div>

        <div className="mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-gold-300 animate-pulse" />
          <span>Handcrafted Indian Boutique • Use code <strong className="text-gold-200 underline tracking-wider">PIHUFIRST10</strong> for 10% OFF</span>
        </div>

        <div className="hidden lg:flex items-center gap-3 text-[11px] text-cream-100/90">
          <Link to="/admin" className="hover:text-gold-200 transition-colors flex items-center gap-1">
            <LayoutDashboard className="w-3 h-3 text-gold-300" /> Admin Portal
          </Link>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cream-50/95 backdrop-blur-md shadow-warm py-2.5 border-b border-cream-200' 
          : 'bg-cream-50 py-3.5 border-b border-cream-200/70'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -ml-2 text-warmcharcoal-800 hover:text-terracotta-600 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo */}
            <div className="flex-shrink-0">
              <Logo size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `text-sm font-medium transition-all duration-200 relative py-1 ${
                    isActive 
                      ? 'text-terracotta-600 font-semibold' 
                      : 'text-warmcharcoal-700 hover:text-terracotta-600'
                  } ${
                    item.highlight 
                      ? 'px-3 py-1 bg-terracotta-50 text-terracotta-700 rounded-full border border-terracotta-200/80 font-semibold hover:bg-terracotta-100' 
                      : ''
                  }`}
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && !item.highlight && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-terracotta-500 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-warmcharcoal-700 hover:text-terracotta-600 hover:bg-cream-100 rounded-full transition-colors"
                aria-label="Search products"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                to="/handmade-jewellery"
                className="p-2 text-warmcharcoal-700 hover:text-terracotta-600 hover:bg-cream-100 rounded-full transition-colors relative hidden sm:flex items-center"
                title="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute 1 top-1 right-1 w-4 h-4 bg-blush-400 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                onClick={openCart}
                className="p-2 text-warmcharcoal-800 hover:text-terracotta-600 hover:bg-cream-100 rounded-full transition-colors relative flex items-center"
                aria-label="View shopping cart"
              >
                <ShoppingBag className="w-5 h-5 text-terracotta-600" />
                {totalItemsCount > 0 && (
                  <span className="absolute 1 top-0.5 right-0.5 min-w-[18px] h-[18px] px-1 bg-terracotta-600 text-cream-50 text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm animate-pulse">
                    {totalItemsCount}
                  </span>
                )}
              </button>

              {/* User Account / Profile Dropdown */}
              <div className="relative">
                {user ? (
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2 p-1.5 pl-2 text-xs font-medium text-warmcharcoal-800 hover:bg-cream-100 rounded-full border border-cream-300 transition-colors"
                  >
                    <span className="hidden sm:inline-block max-w-[90px] truncate">{user.name.split(' ')[0]}</span>
                    <div className="w-7 h-7 rounded-full bg-terracotta-100 text-terracotta-700 font-bold flex items-center justify-center overflow-hidden border border-terracotta-300">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        user.name.charAt(0)
                      )}
                    </div>
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-terracotta-700 bg-cream-100 hover:bg-cream-200 rounded-full border border-cream-300 transition-colors"
                  >
                    <User className="w-3.5 h-3.5 text-terracotta-600" />
                    <span>Login</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {userDropdownOpen && user && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-cream-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-2 border-b border-cream-100">
                      <p className="text-xs text-warmcharcoal-600">Signed in as</p>
                      <p className="text-sm font-semibold text-warmcharcoal-900 truncate">{user.name}</p>
                      <span className="inline-block mt-0.5 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cream-100 text-terracotta-700">
                        {user.role === 'admin' ? 'Artisan / Admin' : 'Customer'}
                      </span>
                    </div>

                    <div className="py-1 text-xs">
                      <Link
                        to="/checkout"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-warmcharcoal-700 hover:bg-cream-50 hover:text-terracotta-600"
                      >
                        <ShoppingBag className="w-4 h-4 text-terracotta-500" />
                        My Checkout & Orders
                      </Link>

                      {user.role === 'admin' && (
                        <Link
                          to="/admin"
                          onClick={() => setUserDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-4 py-2 text-terracotta-700 bg-terracotta-50/70 font-semibold hover:bg-terracotta-100"
                        >
                          <LayoutDashboard className="w-4 h-4 text-terracotta-600" />
                          Admin Dashboard
                        </Link>
                      )}

                      <Link
                        to="/custom-order"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 text-warmcharcoal-700 hover:bg-cream-50 hover:text-terracotta-600"
                      >
                        <Sparkles className="w-4 h-4 text-gold-500" />
                        Submit Custom Order
                      </Link>
                    </div>

                    <div className="border-t border-cream-100 pt-1">
                      <button
                        onClick={() => {
                          logout();
                          setUserDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-red-600 hover:bg-red-50 text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Search Overlay Bar */}
        {searchOpen && (
          <div className="border-t border-cream-200 bg-white/95 backdrop-blur-md px-4 py-3 animate-in fade-in duration-150">
            <div className="max-w-3xl mx-auto relative">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-warmcharcoal-400 absolute left-3.5" />
                <input
                  type="text"
                  placeholder="Search hand-painted banners, kurtas, naths, lotus chokers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-11 pr-10 py-2.5 text-sm rounded-full border border-cream-300 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-terracotta-400 bg-cream-50/60"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 text-warmcharcoal-400 hover:text-warmcharcoal-600 text-xs"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Instant Search Results Dropdown */}
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-cream-200 overflow-hidden z-50">
                  <div className="p-2 divide-y divide-cream-100">
                    {searchResults.map((item) => (
                      <Link
                        key={item.id}
                        to={`/product/${item.slug}`}
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center gap-3 p-2.5 hover:bg-cream-50 rounded-xl transition-colors group"
                      >
                        <img 
                          src={item.images[0]} 
                          alt={item.title} 
                          className="w-12 h-12 rounded-lg object-cover border border-cream-200 flex-shrink-0" 
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-warmcharcoal-900 group-hover:text-terracotta-600 truncate">
                            {item.title}
                          </p>
                          <p className="text-[11px] text-warmcharcoal-500 capitalize">
                            {item.subcategory} • ₹{item.price}
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-terracotta-600">
                          View →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-warmcharcoal-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Container */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-cream-50 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between border-r border-cream-200">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-cream-200">
                <Logo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-warmcharcoal-600 hover:text-terracotta-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="mt-6 space-y-1.5">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-terracotta-100 text-terracotta-800 font-semibold' 
                        : 'text-warmcharcoal-700 hover:bg-cream-100 hover:text-terracotta-600'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.highlight && (
                      <span className="text-[10px] font-bold bg-terracotta-500 text-white px-2 py-0.5 rounded-full">
                        Custom
                      </span>
                    )}
                  </NavLink>
                ))}

                <NavLink
                  to="/cart"
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-warmcharcoal-700 hover:bg-cream-100"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-terracotta-600" /> Shopping Cart
                  </span>
                  <span className="text-xs bg-terracotta-600 text-white px-2 py-0.5 rounded-full font-bold">
                    {totalItemsCount}
                  </span>
                </NavLink>

                {isAdmin && (
                  <NavLink
                    to="/admin"
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-terracotta-700 bg-terracotta-50 hover:bg-terracotta-100"
                  >
                    <span className="flex items-center gap-2">
                      <LayoutDashboard className="w-4 h-4" /> Admin Dashboard
                    </span>
                  </NavLink>
                )}
              </nav>
            </div>

            {/* Mobile Footer Info */}
            <div className="pt-6 border-t border-cream-200 text-xs text-warmcharcoal-600 space-y-2">
              <p className="font-semibold text-warmcharcoal-800">PIHU Boutique Studio</p>
              <p>Sayali Shoppy, Kherade Vangi, Maharashtra</p>
              <p className="text-terracotta-600 font-medium">+91 9309851833</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
