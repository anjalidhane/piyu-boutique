/**
 * PIYU – Main UI Engine & Component Injector (Vanilla JS)
 */

window.PIYU_UI = (function() {
  // DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initFooter();
    initCartDrawer();
    initSearchModal();
    initQuickViewModal();
    initWhatsAppFloat();
    initToastContainer();
    updateCartBadges();
    updateWishlistBadges();

    // Listen to global store events
    window.addEventListener('cart-updated', () => {
      updateCartBadges();
      renderCartDrawerContent();
    });

    window.addEventListener('wishlist-updated', (e) => {
      updateWishlistBadges();
      if (e.detail) {
        showToast(e.detail.added ? 'Added to Wishlist ❤️' : 'Removed from Wishlist', 'info');
      }
    });

    window.addEventListener('user-updated', () => {
      initHeader(); // refresh user avatar/links
    });
  });

  // TOAST NOTIFICATIONS
  function initToastContainer() {
    if (!document.getElementById('toast-container')) {
      const container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }
  }

  function showToast(message, type = 'info') {
    initToastContainer();
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast-pill';
    
    let icon = '✨';
    if (type === 'success') icon = '✓';
    if (type === 'error') icon = '✕';

    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s, transform 0.3s';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px) scale(0.95)';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // HEADER INJECTION & LOGIC
  function initHeader() {
    const headerPlaceholder = document.getElementById('piyu-header');
    if (!headerPlaceholder) return;

    const user = window.PIYU_STORE.getUser();
    let currentPath = window.location.pathname.split('/').pop() || 'index.html';
    if (!currentPath.endsWith('.html')) currentPath = 'index.html';

    const links = [
      { name: 'Home', url: 'index.html' },
      { name: 'Fabric Painting', url: 'fabric-painting.html' },
      { name: 'Handmade Jewellery', url: 'jewellery.html' },
      { name: 'Custom Order', url: 'custom-order.html', highlight: true },
      { name: 'About Us', url: 'about.html' },
      { name: 'Reviews', url: 'reviews.html' },
      { name: 'Contact', url: 'contact.html' },
      { name: 'Admin', url: 'admin.html', adminOnly: true }
    ];

    headerPlaceholder.innerHTML = `
      <!-- Top Announcement Banner -->
      <div class="bg-gradient-to-r from-terracotta-700 via-terracotta-600 to-terracotta-700 text-cream-50 text-xs py-2 px-4 border-b border-terracotta-800/40 relative z-50">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <div class="hidden md:flex items-center gap-4 text-[11px] text-cream-100/90">
            <span>📞 WhatsApp Studio: +91 9309851833</span>
            <span class="text-terracotta-300">•</span>
            <span>Kherade Vangi, Maharashtra</span>
          </div>

          <div class="mx-auto flex items-center gap-2 font-medium">
            <span>✨ Handcrafted Indian Boutique • Custom Names & Personalization on All Orders • Studio: +91 9309851833</span>
          </div>

          <div class="hidden lg:flex items-center gap-3 text-[11px]">
            <a href="admin.html" class="hover:text-gold-200 transition-colors flex items-center gap-1">
              📊 Admin Portal
            </a>
          </div>
        </div>
      </div>

      <!-- Main Sticky Navigation -->
      <header class="sticky top-0 z-40 bg-cream-50/95 backdrop-blur-md shadow-warm py-3 border-b border-cream-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between gap-4">
            <!-- Mobile Menu Toggle -->
            <button id="mobile-menu-btn" class="p-2 -ml-2 text-warmcharcoal-800 lg:hidden hover:text-terracotta-600" aria-label="Toggle Navigation">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>

            <!-- Brand Logo -->
            <a href="index.html" class="flex items-center gap-3 group focus:outline-none flex-shrink-0">
              <div class="w-11 h-11 relative flex items-center justify-center transition-transform group-hover:scale-105">
                <svg viewBox="0 0 100 100" fill="none" class="w-full h-full drop-shadow-sm">
                  <circle cx="50" cy="50" r="47" stroke="#B8583E" stroke-width="1.5" stroke-dasharray="3 3"/>
                  <circle cx="50" cy="50" r="42" fill="#FAF2EE" stroke="#D8B534" stroke-width="1"/>
                  <path d="M50 18 C38 32, 24 38, 24 52 C24 67, 42 78, 50 84 C58 78, 76 67, 76 52 C76 38, 62 32, 50 18 Z" fill="#FBECEB" stroke="#B8583E" stroke-width="1.2"/>
                  <path d="M50 26 C43 36, 32 42, 32 54 C32 63, 44 72, 50 76 C56 72, 68 63, 68 54 C68 42, 57 36, 50 26 Z" fill="#B8583E" opacity="0.9"/>
                  <circle cx="50" cy="48" r="7" fill="#F8F0D6" stroke="#C59F1C" stroke-width="1.5"/>
                  <path d="M50 12 L50 18 M50 84 L50 90 M12 50 L18 50 M82 50 L88 50" stroke="#C59F1C" stroke-width="1.5" stroke-linecap="round"/>
                  <circle cx="50" cy="48" r="2" fill="#B8583E"/>
                </svg>
              </div>
              <div class="flex flex-col text-left">
                <div class="flex items-baseline gap-1.5">
                  <span class="font-display tracking-[0.22em] font-semibold text-2xl uppercase leading-tight text-warmcharcoal-900">PIYU</span>
                  <span class="inline-block w-1.5 h-1.5 rounded-full bg-terracotta-500"></span>
                </div>
                <span class="tracking-[0.18em] uppercase font-medium font-sans text-[9px] text-terracotta-600">
                  CUSTOMIZE FABRIC & HANDMADE JEWELLERY
                </span>
              </div>
            </a>

            <!-- Desktop Nav Links -->
            <nav class="hidden lg:flex items-center space-x-6">
              ${links.map(l => {
                if (l.adminOnly && (!user || user.role !== 'admin')) return '';
                const isActive = currentPath === l.url || (l.url === 'index.html' && (currentPath === '' || currentPath === '/'));
                return `
                  <a href="${l.url}" class="text-xs font-semibold uppercase tracking-wider transition-colors relative py-1 ${
                    isActive ? 'text-terracotta-600 font-bold' : 'text-warmcharcoal-700 hover:text-terracotta-600'
                  } ${l.highlight ? 'px-3 py-1 bg-terracotta-50 text-terracotta-700 rounded-full border border-terracotta-200' : ''}">
                    ${l.name}
                    ${isActive && !l.highlight ? '<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-terracotta-500 rounded-full"></span>' : ''}
                  </a>
                `;
              }).join('')}
            </nav>

            <!-- Actions (Search, Wishlist, Cart, Profile) -->
            <div class="flex items-center space-x-2 sm:space-x-3">
              <button id="open-search-btn" class="p-2 text-warmcharcoal-700 hover:text-terracotta-600 hover:bg-cream-100 rounded-full transition-colors" title="Search">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>

              <a href="jewellery.html" class="p-2 text-warmcharcoal-700 hover:text-terracotta-600 hover:bg-cream-100 rounded-full transition-colors relative hidden sm:flex" title="Wishlist">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                <span id="wishlist-badge" class="absolute top-1 right-1 w-4 h-4 bg-blush-400 text-white text-[10px] font-bold rounded-full flex items-center justify-center hidden">0</span>
              </a>

              <button id="open-cart-btn" class="p-2 text-warmcharcoal-800 hover:text-terracotta-600 hover:bg-cream-100 rounded-full transition-colors relative flex items-center" aria-label="Open Cart">
                <svg class="w-5 h-5 text-terracotta-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                <span id="cart-badge" class="absolute top-0.5 right-0.5 min-w-[18px] h-[18px] px-1 bg-terracotta-600 text-cream-50 text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">0</span>
              </button>

              <!-- User Profile / Login -->
              ${user ? `
                <a href="login.html" class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-terracotta-800 bg-cream-100 hover:bg-cream-200 rounded-full border border-cream-300 transition-colors">
                  <span class="hidden sm:inline-block max-w-[80px] truncate">${user.name.split(' ')[0]}</span>
                  <span class="w-5 h-5 rounded-full bg-terracotta-600 text-white flex items-center justify-center text-[10px] font-bold">
                    ${user.name.charAt(0)}
                  </span>
                </a>
              ` : `
                <a href="login.html" class="px-3 py-1.5 text-xs font-bold text-terracotta-700 bg-cream-100 hover:bg-cream-200 rounded-full border border-cream-300 transition-colors">
                  Login
                </a>
              `}
            </div>
          </div>
        </div>

        <!-- Mobile Drawer Navigation -->
        <div id="mobile-nav-drawer" class="fixed inset-0 z-50 lg:hidden hidden">
          <div id="mobile-nav-overlay" class="fixed inset-0 bg-warmcharcoal-900/60 backdrop-blur-sm"></div>
          <div class="fixed inset-y-0 left-0 max-w-xs w-full bg-cream-50 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between border-r border-cream-200 z-10">
            <div>
              <div class="flex items-center justify-between pb-4 border-b border-cream-200">
                <span class="font-display font-bold text-lg text-warmcharcoal-900">PIYU BOUTIQUE</span>
                <button id="close-mobile-nav" class="p-1 text-warmcharcoal-600 hover:text-terracotta-600">✕</button>
              </div>
              <nav class="mt-6 space-y-2">
                ${links.map(l => `
                  <a href="${l.url}" class="block px-3 py-2.5 rounded-xl text-sm font-medium ${
                    currentPath === l.url ? 'bg-terracotta-100 text-terracotta-800 font-bold' : 'text-warmcharcoal-700 hover:bg-cream-100'
                  }">
                    ${l.name}
                  </a>
                `).join('')}
                <a href="cart.html" class="block px-3 py-2.5 rounded-xl text-sm font-medium text-warmcharcoal-700 hover:bg-cream-100">
                  Shopping Cart
                </a>
              </nav>
            </div>
            <div class="pt-6 border-t border-cream-200 text-xs text-warmcharcoal-600 space-y-1">
              <p class="font-bold text-warmcharcoal-800">PIYU Boutique Studio</p>
              <p>Kherade Vangi, Maharashtra</p>
              <p class="text-terracotta-600 font-semibold">+91 9309851833</p>
            </div>
          </div>
        </div>
      </header>
    `;

    // Hook up mobile nav events
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-mobile-nav');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    const mobileOverlay = document.getElementById('mobile-nav-overlay');

    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => mobileDrawer.classList.remove('hidden'));
    }
    if (closeBtn && mobileDrawer) {
      closeBtn.addEventListener('click', () => mobileDrawer.classList.add('hidden'));
    }
    if (mobileOverlay && mobileDrawer) {
      mobileOverlay.addEventListener('click', () => mobileDrawer.classList.add('hidden'));
    }

    // Hook up Search & Cart buttons
    const openCartBtn = document.getElementById('open-cart-btn');
    if (openCartBtn) {
      openCartBtn.addEventListener('click', openCartDrawer);
    }
    const openSearchBtn = document.getElementById('open-search-btn');
    if (openSearchBtn) {
      openSearchBtn.addEventListener('click', openSearchModal);
    }
  }

  // FOOTER INJECTION
  function initFooter() {
    const footerPlaceholder = document.getElementById('piyu-footer');
    if (!footerPlaceholder) return;

    footerPlaceholder.innerHTML = `
      <footer class="bg-warmcharcoal-900 text-cream-100/90 pt-16 pb-12 border-t-4 border-terracotta-500 relative overflow-hidden">
        <!-- Trust Badges -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 mb-12 border-b border-warmcharcoal-800">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div class="p-4 rounded-xl bg-warmcharcoal-800/40 border border-warmcharcoal-800">
              <span class="text-gold-400 text-xl block mb-1">✨</span>
              <h4 class="text-sm font-semibold text-cream-50 font-serif">100% Handcrafted</h4>
              <p class="text-xs text-cream-300/70 mt-1">Made by artisan Sayali in Kherade Vangi</p>
            </div>
            <div class="p-4 rounded-xl bg-warmcharcoal-800/40 border border-warmcharcoal-800">
              <span class="text-terracotta-400 text-xl block mb-1">🛡️</span>
              <h4 class="text-sm font-semibold text-cream-50 font-serif">Wash-Fast Pigments</h4>
              <p class="text-xs text-cream-300/70 mt-1">Non-toxic durable fabric colors</p>
            </div>
            <div class="p-4 rounded-xl bg-warmcharcoal-800/40 border border-warmcharcoal-800">
              <span class="text-blush-400 text-xl block mb-1">❤️</span>
              <h4 class="text-sm font-semibold text-cream-50 font-serif">Personalized Milestone</h4>
              <p class="text-xs text-cream-300/70 mt-1">Custom names, dates, and quotes</p>
            </div>
            <div class="p-4 rounded-xl bg-warmcharcoal-800/40 border border-warmcharcoal-800">
              <span class="text-gold-400 text-xl block mb-1">📦</span>
              <h4 class="text-sm font-semibold text-cream-50 font-serif">Pan-India Delivery</h4>
              <p class="text-xs text-cream-300/70 mt-1">Carefully packaged with tracking</p>
            </div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <!-- Brand Column -->
            <div class="lg:col-span-2 space-y-4">
              <div class="flex items-center gap-3">
                <span class="font-display tracking-[0.2em] font-semibold text-2xl uppercase text-cream-50">PIYU</span>
                <span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              </div>
              <p class="text-xs tracking-wider uppercase text-gold-300">CUSTOMIZE FABRIC & HANDMADE JEWELLERY</p>
              <p class="text-xs text-cream-300/80 leading-relaxed pr-6">
                PIYU is an authentic handmade boutique by artisan Sayali Shinde, specializing in customized fabric painting, devotional apparel, ceremonial baby shower banners, and traditional Maharashtrian jewellery.
              </p>
              <div class="pt-2">
                <a href="https://wa.me/919309851833" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-full text-xs font-semibold shadow-sm transition-colors">
                  <span>Chat on WhatsApp: +91 9309851833</span>
                </a>
              </div>
            </div>

            <!-- Shop Collections -->
            <div class="space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wider text-gold-300">Collections</h3>
              <ul class="space-y-2 text-xs text-cream-300/80">
                <li><a href="fabric-painting.html" class="hover:text-gold-300">Dohale Jevan Banners</a></li>
                <li><a href="fabric-painting.html" class="hover:text-gold-300">Vitthal Devotional Kurtas</a></li>
                <li><a href="fabric-painting.html" class="hover:text-gold-300">Baby Welcome Hoops</a></li>
                <li><a href="jewellery.html" class="hover:text-gold-300">Maharashtrian Naths</a></li>
                <li><a href="jewellery.html" class="hover:text-gold-300">Lotus Ruby Chokers</a></li>
                <li><a href="jewellery.html" class="hover:text-gold-300">Beaded Bugadi Ear Pins</a></li>
              </ul>
            </div>

            <!-- Custom Craft & Links -->
            <div class="space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wider text-gold-300">Boutique</h3>
              <ul class="space-y-2 text-xs text-cream-300/80">
                <li><a href="custom-order.html" class="hover:text-gold-300 text-cream-100 font-semibold">Custom Order Wizard ✨</a></li>
                <li><a href="about.html" class="hover:text-gold-300">About Artisan Sayali</a></li>
                <li><a href="reviews.html" class="hover:text-gold-300">Customer Reviews & Photos</a></li>
                <li><a href="contact.html" class="hover:text-gold-300">Contact & Studio FAQs</a></li>
                <li><a href="admin.html" class="hover:text-gold-300 text-terracotta-400 font-semibold">Admin Dashboard</a></li>
              </ul>
            </div>

            <!-- Studio Address & Promo -->
            <div class="space-y-3 text-xs text-cream-300/80">
              <h3 class="text-xs font-bold uppercase tracking-wider text-gold-300">Studio Location</h3>
              <p>Sayali Shoppy, Kherade Vangi, Kadegaon, Sangli, Maharashtra 415305</p>
              <p>📞 +91 9309851833</p>
              <p>✉️ contact@piyuhandmade.com</p>
              <div class="pt-2">
                <p class="text-cream-200 font-semibold mb-1">Use First Order Code:</p>
                <div class="p-2 bg-warmcharcoal-800 border border-warmcharcoal-700 rounded-lg text-gold-300 text-center font-bold tracking-widest">
                  PIYUFIRST10
                </div>
              </div>
            </div>
          </div>

          <div class="mt-12 pt-6 border-t border-warmcharcoal-800 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-400/60 gap-4">
            <p>© ${new Date().getFullYear()} PIYU – Customize Fabric & Handmade Jewellery. Handcrafted with Love in Maharashtra.</p>
            <div class="flex items-center gap-4">
              <span>Slow Fashion</span>
              <span>•</span>
              <span>Authentic Indian Heritage</span>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  // CART DRAWER
  function initCartDrawer() {
    if (document.getElementById('cart-drawer-container')) return;

    const drawer = document.createElement('div');
    drawer.id = 'cart-drawer-container';
    drawer.className = 'drawer-backdrop fixed inset-0 z-50 overflow-hidden';
    drawer.innerHTML = `
      <div id="cart-drawer-overlay" class="fixed inset-0 bg-warmcharcoal-900/60 backdrop-blur-sm"></div>
      <div class="drawer-panel fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col justify-between border-l border-cream-200 z-10">
        <!-- Drawer Header -->
        <div class="p-4 sm:p-5 border-b border-cream-200 bg-cream-50/80 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-lg">🛍️</span>
            <h2 class="font-serif text-lg font-bold text-warmcharcoal-900">Your Shopping Bag</h2>
            <span id="cart-drawer-count" class="text-xs bg-terracotta-100 text-terracotta-800 font-bold px-2 py-0.5 rounded-full">0</span>
          </div>
          <button id="close-cart-btn" class="p-1.5 rounded-full text-warmcharcoal-500 hover:bg-cream-200 transition-colors">✕</button>
        </div>

        <!-- Free Shipping Tracker -->
        <div id="cart-shipping-banner" class="px-5 py-2.5 bg-cream-100/70 border-b border-cream-200 text-xs">
          <!-- populated via renderCartDrawerContent -->
        </div>

        <!-- Items List -->
        <div id="cart-drawer-items" class="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          <!-- Populated dynamically -->
        </div>

        <!-- Drawer Footer -->
        <div id="cart-drawer-footer" class="p-4 sm:p-5 border-t border-cream-200 bg-cream-50/90 space-y-3">
          <!-- populated dynamically -->
        </div>
      </div>
    `;

    document.body.appendChild(drawer);

    document.getElementById('close-cart-btn').addEventListener('click', closeCartDrawer);
    document.getElementById('cart-drawer-overlay').addEventListener('click', closeCartDrawer);
  }

  function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer-container');
    if (drawer) {
      renderCartDrawerContent();
      drawer.classList.add('active');
    }
  }

  function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer-container');
    if (drawer) {
      drawer.classList.remove('active');
    }
  }

  function renderCartDrawerContent() {
    const itemsContainer = document.getElementById('cart-drawer-items');
    const footerContainer = document.getElementById('cart-drawer-footer');
    const shippingContainer = document.getElementById('cart-shipping-banner');
    const countBadge = document.getElementById('cart-drawer-count');
    if (!itemsContainer || !footerContainer) return;

    const detailedItems = window.PIYU_STORE.getCartDetailed();
    const totals = window.PIYU_STORE.getCartTotals();

    countBadge.textContent = totals.itemsCount;

    // Free shipping bar
    const amountNeeded = Math.max(0, totals.freeShippingThreshold - (totals.subtotal - totals.discountAmount));
    const progress = Math.min(100, Math.round(((totals.subtotal - totals.discountAmount) / totals.freeShippingThreshold) * 100));

    shippingContainer.innerHTML = `
      <div class="flex items-center justify-between font-medium text-xs text-warmcharcoal-800">
        <span class="flex items-center gap-1.5 font-bold text-terracotta-700">
          <span>✨</span> Handcrafted Upon Order
        </span>
        <span class="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">Pan-India Delivery</span>
      </div>
      <p class="text-[11px] text-warmcharcoal-500 mt-1">Each custom piece is made individually with artisan care.</p>
    `;

    if (detailedItems.length === 0) {
      itemsContainer.innerHTML = `
        <div class="py-12 text-center space-y-3">
          <span class="text-4xl block">🛍️</span>
          <h3 class="font-serif text-lg font-bold text-warmcharcoal-800">Your bag is empty</h3>
          <p class="text-xs text-warmcharcoal-500 max-w-xs mx-auto">Explore hand-painted banners or handmade jewellery to find something extraordinary.</p>
          <div class="pt-2 flex flex-col gap-2">
            <a href="fabric-painting.html" class="px-4 py-2 bg-terracotta-600 text-white rounded-xl text-xs font-bold hover:bg-terracotta-700">Explore Fabric Art</a>
            <a href="jewellery.html" class="px-4 py-2 bg-cream-100 text-terracotta-800 rounded-xl text-xs font-bold hover:bg-cream-200">Explore Jewellery</a>
          </div>
        </div>
      `;
      footerContainer.innerHTML = '';
      return;
    }

    // Render items
    itemsContainer.innerHTML = detailedItems.map(item => `
      <div class="flex gap-3 p-3 rounded-2xl bg-cream-50/60 border border-cream-200/90 relative">
        <img src="${item.product.images[0]}" alt="${item.product.title}" class="w-16 h-16 rounded-xl object-cover border border-cream-200 flex-shrink-0 bg-white" />
        <div class="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between">
              <h4 class="text-xs font-bold text-warmcharcoal-900 font-serif leading-snug line-clamp-1">${item.product.title}</h4>
              <button onclick="window.PIYU_STORE.removeFromCart('${item.cartItemId}')" class="text-warmcharcoal-400 hover:text-red-500 text-xs p-1" title="Remove">✕</button>
            </div>
            ${item.customizationNotes ? `<p class="mt-0.5 text-[10px] text-terracotta-700 bg-terracotta-50 px-1.5 py-0.5 rounded border border-terracotta-200/60 truncate">✨ ${item.customizationNotes}</p>` : ''}
          </div>
          <div class="mt-2 flex items-center justify-between">
            <span class="text-[11px] font-bold text-terracotta-700 bg-terracotta-50 px-2 py-0.5 rounded-md border border-terracotta-200">Quote on Request</span>
            <div class="flex items-center border border-cream-300 rounded-lg bg-white">
              <button onclick="window.PIYU_STORE.updateQuantity('${item.cartItemId}', ${item.quantity - 1})" class="w-6 h-6 flex items-center justify-center text-xs font-bold text-warmcharcoal-700 hover:text-terracotta-600">-</button>
              <span class="w-6 text-center text-xs font-bold">${item.quantity}</span>
              <button onclick="window.PIYU_STORE.updateQuantity('${item.cartItemId}', ${item.quantity + 1})" class="w-6 h-6 flex items-center justify-center text-xs font-bold text-warmcharcoal-700 hover:text-terracotta-600">+</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Render footer summary
    footerContainer.innerHTML = `
      <div class="p-3 bg-cream-100 rounded-2xl border border-cream-200 text-xs text-warmcharcoal-700 space-y-1">
        <div class="flex justify-between font-bold text-warmcharcoal-900">
          <span>Items in Bag:</span>
          <span class="text-terracotta-700">${totals.itemsCount} ${totals.itemsCount === 1 ? 'creation' : 'creations'}</span>
        </div>
        <div class="flex justify-between text-[11px] text-warmcharcoal-600">
          <span>Personalization Proof:</span>
          <span class="text-emerald-700 font-semibold">Included via WhatsApp</span>
        </div>
        <div class="flex justify-between text-[11px] text-warmcharcoal-600">
          <span>Delivery:</span>
          <span>Insured Doorstep Courier</span>
        </div>
      </div>

      <!-- Checkout Actions -->
      <div class="pt-1 space-y-2">
        <a href="checkout.html" class="w-full py-3 bg-terracotta-600 hover:bg-terracotta-700 text-white rounded-xl text-xs font-bold tracking-wide shadow-warm flex items-center justify-center gap-2 transition-all">
          <span>Proceed to Order Request →</span>
        </a>
        <a href="cart.html" class="w-full block py-1.5 text-center text-xs text-warmcharcoal-600 hover:text-terracotta-700 font-medium underline">
          View Full Bag & Artisan Notes
        </a>
      </div>
    `;
  }

  window.applyDrawerCoupon = function() {
    const input = document.getElementById('drawer-coupon-input');
    if (!input) return;
    const res = window.PIYU_STORE.applyCoupon(input.value);
    showToast(res.message, res.success ? 'success' : 'error');
  };

  // SEARCH MODAL
  function initSearchModal() {
    if (document.getElementById('search-modal-container')) return;

    const modal = document.createElement('div');
    modal.id = 'search-modal-container';
    modal.className = 'modal-backdrop fixed inset-0 z-50 flex items-start justify-center p-4 pt-16';
    modal.innerHTML = `
      <div id="search-modal-overlay" class="fixed inset-0 bg-warmcharcoal-900/60 backdrop-blur-sm"></div>
      <div class="modal-content relative bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-cream-200 z-10 space-y-4">
        <div class="flex items-center justify-between pb-3 border-b border-cream-200">
          <div class="flex items-center gap-2 text-warmcharcoal-800">
            <span class="text-lg">🔍</span>
            <h3 class="font-serif text-lg font-bold">Search PIYU Collections</h3>
          </div>
          <button id="close-search-btn" class="p-1 text-warmcharcoal-500 hover:text-warmcharcoal-800">✕</button>
        </div>

        <input type="text" id="live-search-input" placeholder="Type baby banner, vitthal kurta, kundan nath, lotus choker..." class="w-full text-sm p-3.5 rounded-2xl border border-cream-300 bg-cream-50 focus:outline-none focus:ring-2 focus:ring-terracotta-400" autofocus />

        <div id="search-results-box" class="max-h-72 overflow-y-auto divide-y divide-cream-100">
          <p class="text-xs text-warmcharcoal-400 py-4 text-center">Search over 20+ handcrafted fabric and jewellery products...</p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('close-search-btn').addEventListener('click', closeSearchModal);
    document.getElementById('search-modal-overlay').addEventListener('click', closeSearchModal);

    const searchInput = document.getElementById('live-search-input');
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const resultsBox = document.getElementById('search-results-box');
      if (!q) {
        resultsBox.innerHTML = '<p class="text-xs text-warmcharcoal-400 py-4 text-center">Start typing to see handcrafted creations...</p>';
        return;
      }

      const matches = window.PIYU_DATA.products.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.subcategory.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      ).slice(0, 5);

      if (matches.length === 0) {
        resultsBox.innerHTML = '<p class="text-xs text-warmcharcoal-400 py-4 text-center">No products found matching your search.</p>';
        return;
      }

      resultsBox.innerHTML = matches.map(p => `
        <a href="product-details.html?id=${p.id}" class="flex items-center gap-3 p-3 hover:bg-cream-50 rounded-xl transition-colors">
          <img src="${p.images[0]}" alt="${p.title}" class="w-12 h-12 rounded-lg object-cover border border-cream-200" />
          <div class="flex-1 min-w-0">
            <h4 class="text-xs font-bold text-warmcharcoal-900 truncate">${p.title}</h4>
            <p class="text-[11px] text-warmcharcoal-500">${p.subcategory} • <span class="text-terracotta-700 font-semibold">Custom Order</span></p>
          </div>
          <span class="text-xs font-semibold text-terracotta-600">View →</span>
        </a>
      `).join('');
    });
  }

  function openSearchModal() {
    const modal = document.getElementById('search-modal-container');
    if (modal) {
      modal.classList.add('active');
      const input = document.getElementById('live-search-input');
      if (input) {
        input.value = '';
        input.focus();
      }
    }
  }

  function closeSearchModal() {
    const modal = document.getElementById('search-modal-container');
    if (modal) modal.classList.remove('active');
  }

  // QUICK VIEW MODAL
  function initQuickViewModal() {
    if (document.getElementById('quick-view-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'quick-view-modal';
    modal.className = 'modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto';
    modal.innerHTML = `
      <div id="quick-view-overlay" class="fixed inset-0 bg-warmcharcoal-900/60 backdrop-blur-sm"></div>
      <div id="quick-view-content" class="modal-content relative bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-cream-200 z-10 max-h-[90vh] overflow-y-auto">
        <!-- Content injected dynamically -->
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('quick-view-overlay').addEventListener('click', closeQuickViewModal);
  }

  window.openQuickView = function(productId) {
    const product = window.PIYU_STORE.getProductById(productId);
    if (!product) return;

    const container = document.getElementById('quick-view-content');
    const modal = document.getElementById('quick-view-modal');

    container.innerHTML = `
      <button onclick="window.PIYU_UI.closeQuickViewModal()" class="absolute top-4 right-4 p-2 rounded-full bg-cream-100 text-warmcharcoal-700 hover:bg-cream-200">✕</button>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div class="space-y-3">
          <div class="aspect-square rounded-2xl overflow-hidden bg-cream-50 border border-cream-200 shadow-sm">
            <img id="qv-main-img" src="${product.images[0]}" alt="${product.title}" class="w-full h-full object-cover" />
          </div>
          ${product.images.length > 1 ? `
            <div class="flex gap-2 overflow-x-auto pb-1">
              ${product.images.map((img, idx) => `
                <img src="${img}" onclick="document.getElementById('qv-main-img').src='${img}'" class="w-14 h-14 rounded-lg object-cover border border-cream-300 cursor-pointer hover:border-terracotta-500" />
              `).join('')}
            </div>
          ` : ''}
        </div>

        <div class="space-y-4">
          <div>
            <span class="text-[10px] uppercase font-bold tracking-widest text-terracotta-600">${product.subcategory}</span>
            <h2 class="font-serif text-2xl font-bold text-warmcharcoal-900 mt-1">${product.title}</h2>
            <div class="mt-2 flex flex-wrap items-center gap-2">
              <span class="text-xs font-bold text-terracotta-700 bg-terracotta-50 px-3 py-1 rounded-full border border-terracotta-200">✨ Custom Pricing on Request</span>
              <span class="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">Handcrafted to Order</span>
            </div>
          </div>

          <p class="text-xs text-warmcharcoal-600 leading-relaxed">${product.shortDesc || product.description}</p>

          ${product.customFields && product.customFields.length > 0 ? `
            <div class="p-3.5 bg-cream-50 rounded-2xl border border-cream-200/80 space-y-2.5">
              <span class="text-xs font-bold text-terracotta-700 block">✨ Personalization Details:</span>
              ${product.customFields.map(f => `
                <div class="text-xs">
                  <label class="block font-medium text-warmcharcoal-700 mb-1">${f.label}:</label>
                  ${f.type === 'select' ? `
                    <select id="qv-field-${f.id}" class="w-full text-xs p-2 rounded-xl border border-cream-300 bg-white">
                      ${f.options.map(o => `<option value="${o}">${o}</option>`).join('')}
                    </select>
                  ` : `
                    <input type="text" id="qv-field-${f.id}" placeholder="Type here..." class="w-full text-xs p-2 rounded-xl border border-cream-300 bg-white" />
                  `}
                </div>
              `).join('')}
            </div>
          ` : ''}

          <div class="pt-2 space-y-3">
            <button onclick="handleQuickViewAddToCart('${product.id}')" class="w-full py-3 bg-terracotta-600 hover:bg-terracotta-700 text-white rounded-xl text-xs font-bold shadow-warm flex items-center justify-center gap-2">
              <span>Add to Shopping Bag ✨</span>
            </button>
            <a href="product-details.html?id=${product.id}" class="block text-center text-xs text-terracotta-700 font-semibold hover:underline">
              View Full Photo Gallery & Specs →
            </a>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
  };

  function closeQuickViewModal() {
    const modal = document.getElementById('quick-view-modal');
    if (modal) modal.classList.remove('active');
  }

  window.handleQuickViewAddToCart = function(productId) {
    const product = window.PIYU_STORE.getProductById(productId);
    if (!product) return;

    let notes = '';
    if (product.customFields) {
      notes = product.customFields.map(f => {
        const el = document.getElementById(`qv-field-${f.id}`);
        return `${f.label}: ${el ? el.value : 'Default'}`;
      }).join(' | ');
    } else {
      notes = 'Standard Handcrafted Edition';
    }

    window.PIYU_STORE.addToCart(productId, 1, notes);
    closeQuickViewModal();
    showToast(`Added ${product.title} to bag!`, 'success');
  };

  // FLOATING WHATSAPP BUTTON
  function initWhatsAppFloat() {
    if (document.getElementById('whatsapp-float-btn')) return;

    const floatDiv = document.createElement('div');
    floatDiv.id = 'whatsapp-float-btn';
    floatDiv.className = 'fixed bottom-6 right-6 z-40';
    floatDiv.innerHTML = `
      <a href="https://wa.me/919309851833?text=${encodeURIComponent('Namaste Sayali! I am exploring PIYU website and would like to inquire about a custom order.')}" target="_blank" class="group flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all border-2 border-white/80" aria-label="WhatsApp Artisan Sayali">
        <span class="text-lg">💬</span>
        <span class="text-xs font-bold tracking-wide hidden sm:inline">Chat with Artisan Sayali</span>
      </a>
    `;
    document.body.appendChild(floatDiv);
  }

  // UPDATE BADGES
  function updateCartBadges() {
    const totals = window.PIYU_STORE.getCartTotals();
    const badges = document.querySelectorAll('#cart-badge');
    badges.forEach(b => {
      b.textContent = totals.itemsCount;
      if (totals.itemsCount > 0) {
        b.classList.remove('hidden');
      }
    });
  }

  function updateWishlistBadges() {
    const list = window.PIYU_STORE.getWishlist();
    const badge = document.getElementById('wishlist-badge');
    if (badge) {
      badge.textContent = list.length;
      if (list.length > 0) {
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    }
  }

  return {
    showToast,
    openCartDrawer,
    closeCartDrawer,
    openSearchModal,
    closeSearchModal,
    closeQuickViewModal
  };
})();

// Backward-compatibility alias
window.PIHU_UI = window.PIYU_UI;
window.openQuickView = window.openQuickView || function(id) { if (window.PIYU_UI && window.PIYU_UI.openQuickView) window.PIYU_UI.openQuickView(id); };
