# PIHU – Customize Fabric & Handmade Jewellery

A premium, modern, responsive Indian handmade boutique e-commerce website built purely with **HTML5, Tailwind CSS, and Vanilla JavaScript**.

---

## 🌸 Business Concept

**PIHU** is an online boutique by artisan **Sayali Shinde** (Sayali Shoppy, Kherade Vangi, Maharashtra), celebrating traditional Indian craftsmanship, customized fabric painting (baby shower banners, devotional kurtas, personalized portraits, custom embroidery), and authentic handmade jewellery (Maharashtrian Naths, lotus ruby chokers, beaded necklace suites, bugadi ear drop pins).

---

## 🎨 Design Palette & Aesthetic

- **Cream**: `#FDFAF6`, `#F8F3EB`, `#F2E8DC` (Soft organic cotton & raw silk base)
- **Terracotta**: `#B8583E`, `#9E442D`, `#803420` (Earthen pottery & traditional warmth)
- **Antique Gold**: `#C59F1C`, `#F0DE9E`, `#B8921C` (Indian temple gold & brass luster)
- **Blush Pink**: `#FDF6F6`, `#F7D7D6`, `#EEB5B3` (Delicate bridal & baby shower accents)
- **Typography**: 
  - *Headings*: **Cormorant Garamond** & **Cinzel**
  - *Body Text*: **Plus Jakarta Sans**

---

## 📂 Complete Project Structure (Pure HTML/CSS/JS)

```
c:\Sayali customize gifting/
├── index.html               # 1. Home Page
├── about.html               # 2. About Us (Artisan Story & Heritage)
├── fabric-painting.html     # 3. Customize Fabric Painting (Interactive filter & shop)
├── jewellery.html           # 4. Handmade Jewellery (Peshwai Naths & Chokers)
├── custom-order.html        # 5. Custom Order Form (4-step Bespoke Wizard)
├── product-details.html     # 6. Product Details (Gallery, Customizer, Specs, Tabs)
├── cart.html                # 7. Shopping Cart (Milestone shipping, Promo code, Notes)
├── checkout.html            # 8. Checkout (Shipping, UPI QR / Card / COD, Celebration)
├── login.html               # 9. Login & Registration (Account, Live Orders Tracker)
├── contact.html             # 10. Contact Us (Inquiry form, Kherade Vangi studio, FAQs)
├── reviews.html             # 11. Customer Reviews (Photo gallery, Star breakdown, Modal)
├── admin.html               # 12. Admin Dashboard (Live Sales KPI, Orders, Inquiries, Inventory)
├── css/
│   └── style.css            # Custom luxury boutique CSS styles & animations
├── js/
│   ├── data.js              # Complete products catalog (with all 30 photos), reviews, initial orders
│   ├── store.js             # Global state manager for Cart, Wishlist, User & Orders (LocalStorage)
│   └── main.js              # Header, Footer, Slide-over Cart Drawer, Search Modal, Toasts, WhatsApp
└── images/                  # All 30 authentic artisan photos (pihu-01.jpg - pihu-30.jpg)
```

---

## 🚀 How to Run the Website

### Option 1: Direct Double Click (No Setup Needed!)
Simply navigate to `c:\Sayali customize gifting\` in Windows Explorer and double-click `index.html`. It opens directly in Google Chrome, Microsoft Edge, Firefox, or Brave!

### Option 2: Live Local Server
If you prefer running a local server:
```bash
# Using Python:
python -m http.server 8000
# Then open: http://localhost:8000

# Or using Node:
npx serve .
```

---

## 🌟 Key Features Implemented

1. **Bespoke Indian Boutique Logo & Favicon**:
   - Custom SVG emblem with artisan lotus petal crest, golden jewellery bead, and classical Roman typography.
2. **Slide-over Custom Bag Drawer & Dedicated Bag Page**:
   - Clean, bespoke artisan bag with custom personalization notes.
   - Dynamic quantity adjustments, line items removal, and direct order request checkout.
   - Quote-on-request boutique model tailored to bespoke dimensions and artwork.
3. **4-Step Custom Order Wizard**:
   - Step 1: Craft Type selection (Fabric Painting vs Handmade Jewellery vs Combo Hamper).
   - Step 2: Base item picker with thumbnail references.
   - Step 3: Personalization details (names to paint, occasion, date, color theme, size).
   - Step 4: Interactive reference photo preview & direct WhatsApp integration (`+91 9309851833`).
4. **Interactive Checkout & Confetti Celebration**:
   - Shipping address form with Indian pin codes and states.
   - Multi-channel payment simulation: UPI QR Code scan, Credit/Debit card, Net Banking, and Cash on Delivery.
   - Confetti animation and order confirmation receipt.
5. **Instant Live Product Search Modal**:
   - Real-time search across product titles, descriptions, and categories.
6. **Quick View & Live Customization Modals**:
   - Preview photos, customize text fields, and add to bag without leaving the catalog.
7. **Customer Review Submission**:
   - Verified buyer stars, customer photo gallery, and interactive review submission modal.
8. **Admin Studio Dashboard**:
   - Live revenue KPI cards, orders tracking manager, customer custom inquiries with reference image preview and WhatsApp reply, plus catalog inventory manager with "Add New Product" modal.
9. **Floating WhatsApp Pill**:
   - Instant direct chat with artisan Sayali on WhatsApp (`+91 9309851833`).
