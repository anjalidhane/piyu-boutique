# PIYU – Customize Fabric, Handmade Jewellery, Aari Work & Mehendi Art

A luxury, modern, responsive Indian handmade boutique static website built purely with **HTML5, Tailwind CSS, and Vanilla JavaScript**.

🌐 **Live Website**: [https://anjalidhane.github.io/piyu-boutique/](https://anjalidhane.github.io/piyu-boutique/)  
📦 **GitHub Repository**: [https://github.com/anjalidhane/piyu-boutique](https://github.com/anjalidhane/piyu-boutique)

---

## 🌸 Artisan & Brand Concept

**PIYU** is an authentic handmade boutique by artisan **Sayali Shinde** (Sayali Shoppy, Kherade Vangi, Maharashtra, WhatsApp `+91 9309851833`), celebrating 4 distinct traditional Indian craft disciplines with zero mixing:

1. 🎨 **Customize Fabric Painting**: Authentic hand-painted baby shower Dohale Jevan ceremonial backdrops, devotional Vitthal & Swami Samarth kurtas, baby welcome hoops, and personalized canvas art.
2. ✨ **Handmade Jewellery**: Maharashtrian Peshwai Naths, Austrian kundan & pearl floral nose pins, lotus ruby chokers, beaded necklace suites, and bugadi ear drop pins.
3. 🪡 **Aari & Maggam Work**: Regal bridal blouse necklines, elbow-length zardosi sleeves, kasab needlework, and Paithani-matched cutwork borders handcrafted on wooden Khatla frames.
4. 🌿 **Bridal & Festive Mehendi**: 100% natural Rajasthani Sojat organic henna (chemical-free, dark mahogany stain), customized bridal portrait figures (Doli, Bride & Groom, Radha-Krishna), auspicious baby shower Dohale Jevan themes, and festive Sangeet packages.

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

## 📂 Static Project Structure (Pure HTML/CSS/JS)

```
c:\Sayali customize gifting/
├── index.html               # 1. Home Page (4 distinct category showcases)
├── fabric-painting.html     # 2. Customize Fabric Painting (Interactive filters & shop)
├── jewellery.html           # 3. Handmade Jewellery (Peshwai Naths & Chokers)
├── aari-work.html           # 4. Aari & Maggam Work (Bridal blouses & Khatla needlework)
├── mehendi.html             # 5. Bridal & Festive Mehendi (Organic Henna & Booking)
├── custom-order.html        # 6. Custom Order Wizard (4 craft options & dynamic base items)
├── product-details.html     # 7. Product Details (Gallery, Customizer, Specs, Tabs)
├── cart.html                # 8. Shopping Bag (Custom notes & order review)
├── checkout.html            # 9. Checkout (Shipping, payment simulation & celebration)
├── about.html               # 10. About Us (Artisan Story & Heritage in Kherade Vangi)
├── contact.html             # 11. Contact Us (Direct WhatsApp, studio location, FAQs)
├── reviews.html             # 12. Customer Reviews (Photo mosaic, Star breakdown, Modal)
├── login.html               # 13. Customer Account & Order Status Tracker
├── css/
│   └── style.css            # Custom luxury boutique CSS styles & animations
├── js/
│   ├── data.js              # Complete products catalog (Fabric, Jewellery, Aari, Mehendi), reviews
│   ├── store.js             # Global state manager for Cart, Wishlist, User & Orders (LocalStorage)
│   └── main.js              # Header, Footer, Slide-over Bag Drawer, Search Modal, Toasts, WhatsApp
└── images/                  # Authentic artisan photos and high-resolution craft showcases
```

---

## 🚀 How to Run the Website

### Direct Double Click (No Setup Needed!)
Simply navigate to `c:\Sayali customize gifting\` in Windows Explorer and double-click `index.html`. It opens directly in Google Chrome, Microsoft Edge, Firefox, or Brave!

### Live Local Server
```bash
# Using Python:
python -m http.server 8000
# Then open: http://localhost:8000

# Or using Node:
npx serve .
```

---

## 🌟 Key Features

1. **Pure Static Client Architecture**:
   - Zero backend or build requirement needed for browsing. Runs anywhere static HTML/CSS/JS is hosted.
   - Admin console completely decoupled and removed for a streamlined client-facing shopping experience.
2. **Four Distinct Craft Disciplines (No Mixing)**:
   - Dedicated pages: `fabric-painting.html`, `jewellery.html`, `aari-work.html`, `mehendi.html`.
   - Distinct showcase sections on the homepage with separate category filters, tags, and product listings.
3. **4-Step Custom Order Wizard**:
   - Select between Fabric Painting, Handmade Jewellery, Aari Work, or Mehendi Art.
   - Dynamically loads specific base items and customization inputs.
   - Direct connection to artisan Sayali via WhatsApp (`+91 9309851833`).
4. **Interactive Shopping Bag & Checkout**:
   - Add custom notes, dimensions, and color preferences.
   - Seamless checkout simulation with instant confirmation.
5. **Floating WhatsApp Artisan Pill**:
   - Quick one-click consultation for custom orders and date bookings.
