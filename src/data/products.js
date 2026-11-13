export const PRODUCTS = [
  // FABRIC PAINTING PRODUCTS
  {
    id: "fabric-01",
    title: "Hand-Painted Yashoda Krishna Dohale Jevan Banner",
    slug: "yashoda-krishna-dohale-jevan-banner",
    category: "fabric",
    subcategory: "Ceremonial Banners",
    price: 1899,
    originalPrice: 2499,
    rating: 5.0,
    reviewsCount: 38,
    inStock: true,
    featured: true,
    badge: "Bestseller",
    images: [
      "/images/pihu-19.jpg",
      "/images/pihu-01.jpg",
      "/images/pihu-30.jpg"
    ],
    shortDesc: "Authentic hand-painted baby shower fabric backdrop featuring Yashoda Mata & Bal Krishna with custom mother & father names.",
    description: "Celebrate the joyous occasion of Dohale Jevan (Baby Shower) with this heirloom-quality, hand-painted fabric banner handcrafted by artisan Sayali. Painted on premium pure white cotton canvas using non-toxic, wash-fast fabric paints, and bordered with delicate gold and sequin trims. Each banner is personalized with the mom-to-be's name and auspicious blessings.",
    features: [
      "Customizable with Mom-to-be and baby's surname/name",
      "Hand-painted with vibrant, durable acrylic fabric paints",
      "Golden sequin embroidered lace border",
      "Dimensions: 36 x 36 inches with mounting loops included",
      "Washable and preserved as a lifelong memory"
    ],
    materials: "100% Breathable Cotton Sheeting, Gold Sequin Lace, Acrylic Fabric Pigments",
    careInstructions: "Gentle cold water hand wash or dry clean. Iron inside out at low heat. Do not bleach.",
    customizable: true,
    customFields: [
      { id: "parent_names", label: "Mother's & Family Name (e.g. तृप्ती चे डोहाळे जेवण)", type: "text", required: true },
      { id: "border_color", label: "Lace Border Color", type: "select", options: ["Royal Gold", "Rose Pink", "Antique Bronze"], required: true }
    ]
  },
  {
    id: "fabric-02",
    title: "Custom Baby Cradle Welcome Hoop with Pearl Tassels",
    slug: "baby-cradle-welcome-hoop-pearl-tassels",
    category: "fabric",
    subcategory: "Embroidery Hoop Art",
    price: 1299,
    originalPrice: 1699,
    rating: 4.9,
    reviewsCount: 42,
    inStock: true,
    featured: true,
    badge: "Artisan Choice",
    images: [
      "/images/pihu-02.jpg"
    ],
    shortDesc: "Charming hand-illustrated cradle welcome ring with customized family portrait sketch, beadwork, and handcrafted tassels.",
    description: "Welcome your newborn angel with our signature Baby Welcome Hoop! Featuring a hand-drawn illustration of the proud parents and baby, pearl bead border, blue silk roses on top, and lush hanging pearl strands with dual-toned wool tassels. Hang this in the nursery, above the cradle (Paalna), or on your entryway door.",
    features: [
      "Personalized family sketch cartoon",
      "Faux pearl border with hand-strung tassel cascades",
      "Custom baby name / birth date calligraphy available",
      "10-inch diameter durable wooden hoop frame",
      "Ready to hang on satin ribbon loop"
    ],
    materials: "Wooden Embroidery Hoop, Fine Canvas Fabric, Glass Pearls, Wool Tassels",
    careInstructions: "Dust with a dry soft cloth. Keep away from direct water splashes.",
    customizable: true,
    customFields: [
      { id: "baby_name", label: "Baby's Name / Welcome Text", type: "text", required: true },
      { id: "tassel_color", label: "Tassel Color Theme", type: "select", options: ["Baby Pink & White", "Sky Blue & White", "Terracotta & Cream", "Gold & Red"], required: true }
    ]
  },
  {
    id: "fabric-03",
    title: "Hand-Painted Vitthal Pure Cotton Kurta",
    slug: "hand-painted-vitthal-cotton-kurta",
    category: "fabric",
    subcategory: "Apparel & Kurtas",
    price: 1499,
    originalPrice: 1999,
    rating: 4.9,
    reviewsCount: 29,
    inStock: true,
    featured: true,
    badge: "Festive Special",
    images: [
      "/images/pihu-17.jpg"
    ],
    shortDesc: "Handcrafted pure cotton white kurta featuring devotional Vitthal Rakhumai silhouette and halo painting.",
    description: "Immerse yourself in traditional Marathi devotion with this bespoke Vitthal kurta. Made from 100% fine handloom cotton, each kurta is hand-painted individually with Lord Vitthal standing on the brick in Pandharpur, adorned with pearl garland and saffron sun halo.",
    features: [
      "100% breathable pure cotton comfort fit",
      "Permanent fabric colors that withstand machine delicate wash",
      "Full sleeves with classic mandarin collar",
      "Available from size M to XXL",
      "Custom Sanskrit shloka or name calligraphy can be added on back"
    ],
    materials: "100% South Indian Combed Cotton, Artist Grade Fabric Colors",
    careInstructions: "Gentle machine wash inside out. Do not scrub on painted motif. Iron on reverse.",
    customizable: true,
    customFields: [
      { id: "size", label: "Select Kurta Size", type: "select", options: ["S (38)", "M (40)", "L (42)", "XL (44)", "XXL (46)"], required: true },
      { id: "sleeve", label: "Sleeve Style", type: "select", options: ["Full Sleeve", "3/4th Sleeve", "Short Sleeve"], required: true }
    ]
  },
  {
    id: "fabric-04",
    title: "Custom Hand-Embroidered Love Message Shirt",
    slug: "custom-embroidered-love-message-shirt",
    category: "fabric",
    subcategory: "Apparel & Kurtas",
    price: 1799,
    originalPrice: 2299,
    rating: 5.0,
    reviewsCount: 51,
    inStock: true,
    featured: true,
    badge: "Trending Gift",
    images: [
      "/images/pihu-18.jpg"
    ],
    shortDesc: "Crisp white Oxford cotton shirt with discreet custom hand embroidery along the button placket and collar heart.",
    description: "The ultimate romantic anniversary or birthday surprise. We hand-embroider your custom words (like 'I ♥ YOU', initials, or anniversary date) subtly along the button placket in satin embroidery thread, accented with a delicate scarlet heart nestled near the collar button.",
    features: [
      "Premium crisp white Oxford cotton shirt",
      "Meticulous French hand-embroidery along placket",
      "Subtle crimson heart embroidered on collar tip",
      "Custom wording of your choice up to 15 letters",
      "Pre-washed, shrink-resistant fabric"
    ],
    materials: "Premium Cotton Oxford, Anchor Stranded Cotton Thread",
    careInstructions: "Machine wash cold. Warm iron avoiding direct iron drag across raised thread.",
    customizable: true,
    customFields: [
      { id: "custom_text", label: "Custom Embroidery Text (e.g. I ♥ YOU or FOREVER YOURS)", type: "text", required: true },
      { id: "shirt_size", label: "Shirt Size", type: "select", options: ["38 (S)", "40 (M)", "42 (L)", "44 (XL)"], required: true }
    ]
  },
  {
    id: "fabric-05",
    title: "Personalized Hand-Painted Portrait Fabric Art - 'Chakuli'",
    slug: "personalized-portrait-fabric-art",
    category: "fabric",
    subcategory: "Custom Portraits",
    price: 2499,
    originalPrice: 3200,
    rating: 5.0,
    reviewsCount: 34,
    inStock: true,
    featured: false,
    badge: "100% Bespoke",
    images: [
      "/images/pihu-25.jpg"
    ],
    shortDesc: "Turn your favorite photo into an artistic hand-painted fabric canvas portrait with custom calligraphy caption.",
    description: "Send us a picture of your mother, sister, wife, or child, and our master artist Sayali will render a breathtaking hand-painted portrait on pure organic cotton cloth. Includes custom font calligraphy (such as 'Chakuli', 'Aai', 'Tai') with signature flourish.",
    features: [
      "Individually hand-painted by Sayali from your uploaded photograph",
      "True-to-life colors with traditional Indian illustrative aesthetic",
      "Includes personalized nickname / message calligraphy",
      "Framed or suitable for framing/sewing into keepsakes",
      "Detailed proof shared on WhatsApp before final delivery"
    ],
    materials: "Fine Muslin Cotton, Waterproof Acrylic Inks, Golden Highlights",
    careInstructions: "Display framed behind glass or dry-clean if unmounted.",
    customizable: true,
    customFields: [
      { id: "nickname", label: "Name / Nickname Calligraphy", type: "text", required: true },
      { id: "photo_ref", label: "Customer Photo Upload (via Custom Order form or WhatsApp)", type: "text", required: false }
    ]
  },
  {
    id: "fabric-06",
    title: "Hand-Painted Swami Samarth Full Sleeve T-Shirt",
    slug: "swami-samarth-hand-painted-tshirt",
    category: "fabric",
    subcategory: "Apparel & Kurtas",
    price: 1199,
    originalPrice: 1599,
    rating: 4.8,
    reviewsCount: 47,
    inStock: true,
    featured: false,
    badge: "Devotional",
    images: [
      "/images/pihu-29.jpg"
    ],
    shortDesc: "Pure white full-sleeve cotton tee hand-painted with Swami Samarth silhouette, glowing sun, and reassuring quote.",
    description: "Carry divine faith and protection with you. Features the iconic 'भिऊ नकोस मी तुझ्या पाठीशी आहे...' shloka with Shri Swami Samarth in peaceful meditation against a sunburst horizon on the back.",
    features: [
      "Soft 220 GSM bio-washed combed cotton",
      "Full sleeves for sun protection & casual chic look",
      "Permanent fabric paints that retain vibrancy",
      "Available in unisex regular fit",
      "Original artwork hand-done for every single order"
    ],
    materials: "100% Bio-Washed Cotton, Wash-Fast Pigments",
    careInstructions: "Machine wash cold with similar colors. Do not scrub motif. Warm iron on reverse.",
    customizable: true,
    customFields: [
      { id: "tee_size", label: "T-Shirt Size", type: "select", options: ["S (36)", "M (38)", "L (40)", "XL (42)", "XXL (44)"], required: true }
    ]
  },
  {
    id: "fabric-07",
    title: "Hand-Painted Khillari Bull Heritage Hoop Art",
    slug: "khillari-bull-heritage-hoop-art",
    category: "fabric",
    subcategory: "Embroidery Hoop Art",
    price: 1399,
    originalPrice: 1800,
    rating: 4.9,
    reviewsCount: 22,
    inStock: true,
    featured: false,
    badge: "Heritage Craft",
    images: [
      "/images/pihu-27.jpg"
    ],
    shortDesc: "Striking hand-painted hoop art honoring Maharashtra's majestic Khillari bull with authentic halter ropes.",
    description: "A tribute to rural Maharashtra's farming heritage and Bail Pola tradition. Masterfully sketched and shaded on canvas in a 10-inch wooden hoop, finished with traditional red halter thread detailing.",
    features: [
      "Fine anatomical shading of indigenous Khillari breed",
      "Genuine wooden embroidery hoop with brass screw",
      "Hand-knotted red halter harness detail",
      "Ready to mount on rustic wall or study shelf"
    ],
    materials: "Duck Canvas Cotton, Natural Beech Wood, Pigment Acrylics",
    careInstructions: "Dust gently with dry microfiber cloth.",
    customizable: false
  },
  {
    id: "fabric-08",
    title: "Bal Ganesha & Mushak Hand-Painted Hoop Art",
    slug: "bal-ganesha-mushak-hoop-art",
    category: "fabric",
    subcategory: "Embroidery Hoop Art",
    price: 1249,
    originalPrice: 1650,
    rating: 5.0,
    reviewsCount: 31,
    inStock: true,
    featured: true,
    badge: "Bestseller",
    images: [
      "/images/pihu-08.jpg"
    ],
    shortDesc: "Adorable hand-painted Bal Ganesha sharing a playful wink with Mooshak on pure white canvas hoop.",
    description: "Bring auspicious sweetness and cheer to your home with cute Bal Ganesha and his dear friend Mooshak. Perfectly painted with warm ochre and saffron tones, enclosed in an 8-inch hoop. A cherished gift for housewarmings and newborn arrivals.",
    features: [
      "Cute, expressive Indian folk art illustration",
      "Hand-finished in natural wooden hoop",
      "Non-fading artist grade colors",
      "Ideal for puja rooms, kid rooms, or entrance decor"
    ],
    materials: "Cotton Canvas, Natural Wood Hoop, Acrylics",
    careInstructions: "Wipe with clean dry cloth. Keep away from humidity.",
    customizable: false
  },
  {
    id: "fabric-09",
    title: "Custom Embroidered Handkerchief Set (Evil Eye & Love)",
    slug: "custom-embroidered-handkerchief-set",
    category: "fabric",
    subcategory: "Gifts & Accessories",
    price: 699,
    originalPrice: 999,
    rating: 5.0,
    reviewsCount: 63,
    inStock: true,
    featured: false,
    badge: "Pocket Keepsake",
    images: [
      "/images/pihu-07.jpg",
      "/images/pihu-03.jpg"
    ],
    shortDesc: "Set of 2 pure cotton hankies with custom message, hand-embroidered Turkish Evil Eye, and infinity hearts.",
    description: "Handcrafted personalized pocket handkerchiefs crafted with hand-stitched hemstitching, custom hand-embroidered calligraphy ('Mr. Handsome Love u forever' or your chosen words), protected by an embroidered blue Evil Eye charm.",
    features: [
      "Set of 2 handkerchiefs in premium soft mulmul cotton",
      "Hand-embroidered wording up to 25 characters each",
      "Protective hand-stitched Evil Eye and heart motif",
      "Arrives in a beautiful kraft gift box tied with jute string"
    ],
    materials: "100% Fine Mulmul Cotton, Embroidery Floss",
    careInstructions: "Hand wash gently with mild detergent. Warm iron.",
    customizable: true,
    customFields: [
      { id: "hanky_text_1", label: "Text for Hanky 1 (e.g. Mr. Handsome)", type: "text", required: true },
      { id: "hanky_text_2", label: "Text for Hanky 2 (e.g. Love u forever)", type: "text", required: true }
    ]
  },
  {
    id: "fabric-10",
    title: "Handcrafted Aari Zardosi Bridal Blouse Neckline",
    slug: "aari-zardosi-bridal-blouse-neckline",
    category: "fabric",
    subcategory: "Custom Blouses & Couture",
    price: 3499,
    originalPrice: 4500,
    rating: 4.9,
    reviewsCount: 19,
    inStock: true,
    featured: false,
    badge: "Bridal Couture",
    images: [
      "/images/pihu-14.jpg"
    ],
    shortDesc: "Rich crimson raw silk blouse piece with opulent handmade gold bullion beads, moti, and leaf motifs.",
    description: "Make your bridal or festival saree look regal with this custom hand-embroidered blouse piece. Intricately beaded with antique gold cutdana, pearls, and zari leaves framing the U-neckline.",
    features: [
      "1 Meter unstitched raw silk fabric piece",
      "Elaborate hand-beaded neckline with hanging moti drops",
      "Matching sleeve border embroidery included",
      "Custom neckline depth and width tailored to your measurement"
    ],
    materials: "Pure Raw Silk, Glass Seed Beads, Brass Zari Wire, Glass Pearls",
    careInstructions: "Strictly dry clean only.",
    customizable: true,
    customFields: [
      { id: "silk_color", label: "Base Raw Silk Color", type: "select", options: ["Bridal Crimson Red", "Emerald Green", "Royal Navy", "Mustard Yellow", "Magenta Pink"], required: true }
    ]
  },
  {
    id: "fabric-11",
    title: "Hand-Painted Warkari Gandhi Topi (Set of 3)",
    slug: "warkari-gandhi-topi-set",
    category: "fabric",
    subcategory: "Gifts & Accessories",
    price: 899,
    originalPrice: 1200,
    rating: 4.9,
    reviewsCount: 26,
    inStock: true,
    featured: false,
    badge: "Traditional",
    images: [
      "/images/pihu-21.jpg"
    ],
    shortDesc: "Pack of 3 pure white khadi Gandhi topis hand-painted with '॥ रामकृष्ण हरी ॥' and bright saffron Chandan Tilak.",
    description: "Express your devotion during Wari, Haripath, and family festivals. Each topi is hand-lettered with sacred Devanagari calligraphy and vibrant orange/black tilak.",
    features: [
      "Pack of 3 hand-painted caps",
      "Comfortable breathable khadi cotton blend",
      "Standard adult universal fit (Size 21-22)",
      "Colors do not bleed in sweat or rain"
    ],
    materials: "Khadi Cotton, Waterproof Textile Paint",
    careInstructions: "Gentle cold water hand rinse.",
    customizable: false
  },
  {
    id: "fabric-12",
    title: "French Knot Embroidered Gown Girl Hoop Art",
    slug: "french-knot-embroidered-gown-hoop",
    category: "fabric",
    subcategory: "Embroidery Hoop Art",
    price: 1150,
    originalPrice: 1499,
    rating: 5.0,
    reviewsCount: 18,
    inStock: true,
    featured: false,
    badge: "Artisan Choice",
    images: [
      "/images/pihu-15.jpg"
    ],
    shortDesc: "Delicate needlework hoop with hundreds of hand-stitched pink French knots creating a cascading floral ballroom gown.",
    description: "A testament to patient slow embroidery. A beautiful lady figure with braided hair and hair garland, draped in an ombre pink French knot floral dress that gracefully trails off the canvas.",
    features: [
      "Over 400 individually knotted French knot stitches",
      "Gradient pink and rose hues on organic cotton canvas",
      "8-inch round wooden hoop with hanging bracket",
      "Elegant minimalist decor for dressers and vanity desks"
    ],
    materials: "Fine Cotton Canvas, Anchor Silk Stranded Threads, Beechwood Frame",
    careInstructions: "Dust gently. Avoid direct moisture.",
    customizable: false
  },

  // HANDMADE JEWELLERY PRODUCTS
  {
    id: "jewel-01",
    title: "Traditional Maharashtrian Kundan & Pearl Floral Nath",
    slug: "kundan-pearl-floral-nath",
    category: "jewellery",
    subcategory: "Naths & Nose Pins",
    price: 799,
    originalPrice: 1099,
    rating: 5.0,
    reviewsCount: 78,
    inStock: true,
    featured: true,
    badge: "Bestseller",
    images: [
      "/images/pihu-10.jpg"
    ],
    shortDesc: "Royal dual-flower Maharashtrian Nath with lustrous basra pearl petals, kundan mirror center, and ruby red crystal drop.",
    description: "Every Maharashtrian bride's and festival lover's crowning ornament. This handmade clip-on/pierced Nath features two blossoming floral clusters woven with gleaming teardrop pearls, an authentic faceted kundan stone in the center, and a ruby drop at the base. Curved comfortably with smooth non-allergic gold wire.",
    features: [
      "Press-on clip (no nose piercing required) or pierced option",
      "High grade Basra-style imitation glass pearls with deep luster",
      "Faceted Austrian glass kundan crystal center",
      "Lightweight (under 8 grams) for all-day comfort",
      "Anti-tarnish 18K micro gold plating"
    ],
    materials: "Brass, Basra Imitation Pearls, Kundan Glass Stone, 18K Gold Polish",
    careInstructions: "Store in airtight pouch away from perfumes, sweat, and moisture. Clean with dry cotton.",
    customizable: true,
    customFields: [
      { id: "wear_type", label: "Wear Style", type: "select", options: ["Clip-on (No Piercing Required)", "Pierced Wire"], required: true },
      { id: "stone_accent", label: "Center Stone Accent", type: "select", options: ["Ruby Red", "Emerald Green", "Clear Crystal"], required: true }
    ]
  },
  {
    id: "jewel-02",
    title: "Royal Lotus Ruby & Antique Gold Choker Set",
    slug: "lotus-ruby-antique-gold-choker-set",
    category: "jewellery",
    subcategory: "Necklaces & Sets",
    price: 1899,
    originalPrice: 2599,
    rating: 4.9,
    reviewsCount: 64,
    inStock: true,
    featured: true,
    badge: "Trending",
    images: [
      "/images/pihu-06.jpg",
      "/images/pihu-11.jpg"
    ],
    shortDesc: "Exquisite handmade gold choker featuring a ruby-petal lotus pendant, micro gold bead clusters, and matching drop earrings.",
    description: "Indulge in royal Marathi royalty. Handcrafted with fine gold-finish wire strung with clustered faceted gold beads, leading to a glorious carved lotus flower set with deep pink ruby stones. Accompanied by coordinating lotus dangle earrings with slender gold hook pins.",
    features: [
      "Handmade lotus floral pendant with bezel set pink ruby stones",
      "Densely strung golden ghungroo clusters",
      "Includes 1 choker necklace and 1 pair of matching earrings",
      "Adjustable golden dori/cord to fit any neck size comfortably",
      "Tarnish resistant premium artisan finish"
    ],
    materials: "Micro Gold-Plated Brass, Synthetic Rubies, Flexible Jewellery Wire",
    careInstructions: "Wipe with soft cloth after each use. Keep away from water and hairspray.",
    customizable: true,
    customFields: [
      { id: "dori_type", label: "Necklace Back Fastening", type: "select", options: ["Adjustable Golden Dori (Traditional)", "Gold Chain with Lobster Clasp"], required: true }
    ]
  },
  {
    id: "jewel-03",
    title: "Handcrafted Golden Beaded Choker with Floral Accent",
    slug: "golden-beaded-choker-floral-accent",
    category: "jewellery",
    subcategory: "Necklaces & Sets",
    price: 1699,
    originalPrice: 2200,
    rating: 4.9,
    reviewsCount: 45,
    inStock: true,
    featured: true,
    badge: "Handcrafted Luxury",
    images: [
      "/images/pihu-11.jpg",
      "/images/pihu-16.jpg"
    ],
    shortDesc: "Gleaming faceted gold-beaded textured collar necklace with a sparkling cz floral centerpiece and matching linear earrings.",
    description: "Modern elegance meets age-old Indian goldsmith techniques. Layers of geometric faceted brass beads create dazzling light reflection with every movement, centered by a six-petal diamond-cz blossom with ruby heart.",
    features: [
      "Hand-strung faceted gold beads with tactile texture",
      "Sparkling cubic zirconia floral center",
      "Includes sleek minimalist vertical drop earrings",
      "Velvet gift box included for safe storage"
    ],
    materials: "Faceted Brass Beads, High Grade CZ, Gold Polish Wire",
    careInstructions: "Store individually in velvet cushion box.",
    customizable: false
  },
  {
    id: "jewel-04",
    title: "Sayali Signature Pearl & Ruby Floral Bridal Choker",
    slug: "sayali-signature-pearl-ruby-bridal-choker",
    category: "jewellery",
    subcategory: "Necklaces & Sets",
    price: 2199,
    originalPrice: 2899,
    rating: 5.0,
    reviewsCount: 52,
    inStock: true,
    featured: true,
    badge: "Sayali Shoppy Special",
    images: [
      "/images/pihu-13.jpg"
    ],
    shortDesc: "Majestic bridal necklace set with lustrous pearl floral florets, ruby centers, and matching floral stud earrings.",
    description: "The pride of our workshop in Kherade Vangi. Ten blossoming pearl rosettes each centered by a fiery red ruby cabochon, tied together with golden zari work and adjustable dori. Comes sealed in Sayali Shoppy authentic boutique packaging.",
    features: [
      "Authentic Sayali Shoppy handcrafted signature edition",
      "10 intricate pearl floral medallions with ruby cabochons",
      "Includes matching pearl rosette earrings",
      "Adjustable golden zari dori with bead lock",
      "Ideal for weddings, Paithani sarees, and family poojas"
    ],
    materials: "Basra-Grade Shell Pearls, Synthetic Pigeon Blood Rubies, Golden Zari Dori",
    careInstructions: "Do not expose to moisture. Keep in original packaging.",
    customizable: true,
    customFields: [
      { id: "gift_box", label: "Include Velvet Bridal Keepsake Box", type: "select", options: ["Yes (Free Special Packaging)", "Standard Boutique Box"], required: false }
    ]
  },
  {
    id: "jewel-05",
    title: "Handcrafted Gold Beaded Linear Drop Pins / Bugadi",
    slug: "gold-beaded-linear-drop-pins-bugadi",
    category: "jewellery",
    subcategory: "Earrings & Bugadi",
    price: 649,
    originalPrice: 899,
    rating: 4.8,
    reviewsCount: 39,
    inStock: true,
    featured: false,
    badge: "Minimalist Chic",
    images: [
      "/images/pihu-16.jpg"
    ],
    shortDesc: "Sleek and contemporary ear drop pins featuring stacked gold-faceted beads with elongated needle stems.",
    description: "Versatile statement ear accessories that can be styled as dangling needle ear pins or upper-ear bugadi accents. Carefully hand-wrapped with geometric golden cubes and beads on sturdy gold-toned wire.",
    features: [
      "Weightless design (less than 4g each)",
      "Geometric bead clusters with striking needle drop",
      "Secure shepherd hook wire fitting",
      "Suitable for traditional and fusion western outfits"
    ],
    materials: "Gold Electroplated Brass, Nickel-Free Wire",
    careInstructions: "Clean with soft flannel cloth. Keep dry.",
    customizable: false
  },
  {
    id: "jewel-06",
    title: "Handcrafted Royal Pearl Teardrop Nath",
    slug: "royal-pearl-teardrop-nath",
    category: "jewellery",
    subcategory: "Naths & Nose Pins",
    price: 749,
    originalPrice: 999,
    rating: 4.9,
    reviewsCount: 33,
    inStock: true,
    featured: false,
    badge: "Peshwai Classic",
    images: [
      "/images/pihu-09.jpg",
      "/images/pihu-10.jpg"
    ],
    shortDesc: "Classic Peshwai clip-on nose ring with rice pearls, red crystal briolette, and emerald accent stone.",
    description: "Embody the timeless grace of Mastani with this handcrafted Peshwai Nath. Features tiny pearl seed beads woven into a paisley crescent crowned with shimmering stones.",
    features: [
      "Comfort clip suitable for non-pierced noses",
      "Traditional Maharashtrian Brahmani curve",
      "Hypoallergenic wire with smooth comfort ball backing"
    ],
    materials: "Brass, Rice Pearls, Synthetic Gemstones",
    careInstructions: "Store in airtight pouch. Avoid spray and lotion.",
    customizable: true,
    customFields: [
      { id: "clasp", label: "Clasp Preference", type: "select", options: ["Clip On (Comfort Pressure)", "Pierced Wire with Stopper"], required: true }
    ]
  },
  {
    id: "jewel-07",
    title: "Vintage Kundan & Gold Plated Saaj Mala",
    slug: "vintage-kundan-gold-saaj-mala",
    category: "jewellery",
    subcategory: "Necklaces & Sets",
    price: 2299,
    originalPrice: 2999,
    rating: 5.0,
    reviewsCount: 27,
    inStock: true,
    featured: false,
    badge: "Heirloom Edition",
    images: [
      "/images/pihu-12.jpg",
      "/images/pihu-06.jpg"
    ],
    shortDesc: "Kolhapuri Saaj inspired handcrafted necklace with embossed auspicious leaves, kundan flower, and hanging jhumki accents.",
    description: "Kolhapuri Saaj is an iconic Maharashtrian cultural heritage necklace. This artisan interpretation features handcrafted beads representing ancient good-luck charms, strung with golden thread and centered by a radiant lotus.",
    features: [
      "Authentic cultural iconography and leaf beads",
      "22K micron gold antique plating with matte warmth",
      "Adjustable length suitable for collar or mid-chest drape"
    ],
    materials: "Cast Brass, 22K Antique Micron Gold Polish, Cotton Cord",
    careInstructions: "Store separately from other jewellery to prevent scratches.",
    customizable: false
  },
  {
    id: "jewel-08",
    title: "Handmade Floral Pearl Studs with Ruby Accent",
    slug: "floral-pearl-studs-ruby-accent",
    category: "jewellery",
    subcategory: "Earrings & Bugadi",
    price: 599,
    originalPrice: 799,
    rating: 4.9,
    reviewsCount: 36,
    inStock: true,
    featured: false,
    badge: "Daily Festive",
    images: [
      "/images/pihu-04.jpg",
      "/images/pihu-13.jpg"
    ],
    shortDesc: "Dainty flower stud earrings with natural sheen pearls surrounding a ruby crystal center.",
    description: "Effortlessly elegant stud earrings for daily traditional wear, office ethnic days, and festive gatherings. Gentle on ears with screw-back closures.",
    features: [
      "Lightweight and everyday wearable",
      "Screw back / push back with soft silicone stoppers",
      "Matches perfectly with sarees, kurtis, and lehengas"
    ],
    materials: "High Luster Imitation Pearls, Glass Ruby, Silver Base with Gold Plating",
    careInstructions: "Clean with dry cloth.",
    customizable: false
  }
];

export const CATEGORIES = [
  {
    id: "fabric",
    name: "Customize Fabric Painting",
    slug: "customize-fabric-painting",
    description: "Bespoke hand-painted baby banners, devotional kurtas, personalized portrait fabrics, and custom embroidery crafted with love.",
    image: "/images/pihu-19.jpg",
    itemCount: 12
  },
  {
    id: "jewellery",
    name: "Handmade Jewellery",
    slug: "handmade-jewellery",
    description: "Authentic Maharashtrian Naths, royal lotus chokers, beaded bridal jewellery, and bugadi earrings designed for timeless elegance.",
    image: "/images/pihu-06.jpg",
    itemCount: 8
  }
];
