/**
 * PIYU – Customize Fabric & Handmade Jewellery
 * Global Data Repository (Vanilla JS)
 */

window.PIYU_DATA = {
  // PRODUCTS DATASET
  products: [
    // FABRIC PAINTING PRODUCTS
    {
      id: "fabric-01",
      title: "Hand-Painted Yashoda Krishna Dohale Jevan Banner",
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
        "images/piyu-19.jpg",
        "images/piyu-01.jpg",
        "images/piyu-30.jpg"
      ],
      shortDesc: "Authentic hand-painted baby shower fabric backdrop featuring Yashoda Mata & Bal Krishna with custom mom and family names.",
      description: "Celebrate the joyous occasion of Dohale Jevan (Baby Shower) with this heirloom-quality, hand-painted fabric banner handcrafted by artisan Sayali. Painted on premium pure white cotton canvas using non-toxic, wash-fast fabric paints, and bordered with delicate gold and sequin trims. Each banner is personalized with the mom-to-be's name and auspicious blessings.",
      materials: "100% Breathable Cotton Sheeting, Gold Sequin Lace, Acrylic Fabric Pigments",
      careInstructions: "Gentle cold water hand wash or dry clean. Iron inside out at low heat. Do not bleach.",
      customizable: true,
      customFields: [
        { id: "parent_names", label: "Mother's & Family Name (e.g. तृप्ती चे डोहाळे जेवण)", type: "text", required: true },
        { id: "border_color", label: "Lace Border Color", type: "select", options: ["Royal Gold", "Rose Pink", "Antique Bronze"] }
      ]
    },
    {
      id: "fabric-02",
      title: "Custom Baby Cradle Welcome Hoop with Pearl Tassels",
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
        "images/piyu-02.jpg"
      ],
      shortDesc: "Charming hand-illustrated cradle welcome ring with customized family portrait sketch, beadwork, and handcrafted tassels.",
      description: "Welcome your newborn angel with our signature Baby Welcome Hoop! Featuring a hand-drawn illustration of the proud parents and baby, pearl bead border, blue silk roses on top, and lush hanging pearl strands with dual-toned wool tassels. Hang this in the nursery, above the cradle (Paalna), or on your entryway door.",
      materials: "Wooden Embroidery Hoop, Fine Canvas Fabric, Glass Pearls, Wool Tassels",
      careInstructions: "Dust with a dry soft cloth. Keep away from direct water splashes.",
      customizable: true,
      customFields: [
        { id: "baby_name", label: "Baby's Name / Welcome Text", type: "text", required: true },
        { id: "tassel_color", label: "Tassel Theme", type: "select", options: ["Baby Pink & White", "Sky Blue & White", "Terracotta & Gold"] }
      ]
    },
    {
      id: "fabric-03",
      title: "Hand-Painted Vitthal Pure Cotton Kurta",
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
        "images/piyu-17.jpg"
      ],
      shortDesc: "Handcrafted pure cotton white kurta featuring devotional Vitthal Rakhumai silhouette and halo painting.",
      description: "Immerse yourself in traditional Marathi devotion with this bespoke Vitthal kurta. Made from 100% fine handloom cotton, each kurta is hand-painted individually with Lord Vitthal standing on the brick in Pandharpur, adorned with pearl garland and saffron sun halo.",
      materials: "100% South Indian Combed Cotton, Artist Grade Fabric Colors",
      careInstructions: "Gentle machine wash inside out. Do not scrub on painted motif. Iron on reverse.",
      customizable: true,
      customFields: [
        { id: "size", label: "Select Kurta Size", type: "select", options: ["S (38)", "M (40)", "L (42)", "XL (44)", "XXL (46)"] },
        { id: "sleeve", label: "Sleeve Style", type: "select", options: ["Full Sleeve", "3/4th Sleeve", "Short Sleeve"] }
      ]
    },
    {
      id: "fabric-04",
      title: "Custom Hand-Embroidered Love Message Shirt",
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
        "images/piyu-18.jpg"
      ],
      shortDesc: "Crisp white Oxford cotton shirt with discreet custom hand embroidery along the button placket and collar heart.",
      description: "The ultimate romantic anniversary or birthday surprise. We hand-embroider your custom words (like 'I ♥ YOU', initials, or anniversary date) subtly along the button placket in satin embroidery thread, accented with a delicate scarlet heart nestled near the collar button.",
      materials: "Premium Cotton Oxford, Anchor Stranded Cotton Thread",
      careInstructions: "Machine wash cold. Warm iron avoiding direct iron drag across raised thread.",
      customizable: true,
      customFields: [
        { id: "custom_text", label: "Custom Embroidery Words (e.g. I ♥ YOU)", type: "text", required: true },
        { id: "shirt_size", label: "Shirt Size", type: "select", options: ["38 (S)", "40 (M)", "42 (L)", "44 (XL)"] }
      ]
    },
    {
      id: "fabric-05",
      title: "Personalized Hand-Painted Portrait Fabric Art - 'Chakuli'",
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
        "images/piyu-25.jpg"
      ],
      shortDesc: "Turn your favorite photo into an artistic hand-painted fabric canvas portrait with custom calligraphy caption.",
      description: "Send us a picture of your mother, sister, wife, or child, and our master artist Sayali will render a breathtaking hand-painted portrait on pure organic cotton cloth. Includes custom font calligraphy (such as 'Chakuli', 'Aai', 'Tai') with signature flourish.",
      materials: "Fine Muslin Cotton, Waterproof Acrylic Inks, Golden Highlights",
      careInstructions: "Display framed behind glass or dry-clean if unmounted.",
      customizable: true,
      customFields: [
        { id: "nickname", label: "Name / Nickname Calligraphy", type: "text", required: true }
      ]
    },
    {
      id: "fabric-06",
      title: "Hand-Painted Swami Samarth Full Sleeve T-Shirt",
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
        "images/piyu-29.jpg"
      ],
      shortDesc: "Pure white full-sleeve cotton tee hand-painted with Swami Samarth silhouette, glowing sun, and reassuring quote.",
      description: "Carry divine faith and protection with you. Features the iconic 'भिऊ नकोस मी तुझ्या पाठीशी आहे...' shloka with Shri Swami Samarth in peaceful meditation against a sunburst horizon on the back.",
      materials: "100% Bio-Washed Cotton, Wash-Fast Pigments",
      careInstructions: "Machine wash cold with similar colors. Do not scrub motif. Warm iron on reverse.",
      customizable: true,
      customFields: [
        { id: "tee_size", label: "T-Shirt Size", type: "select", options: ["S (36)", "M (38)", "L (40)", "XL (42)", "XXL (44)"] }
      ]
    },
    {
      id: "fabric-07",
      title: "Hand-Painted Khillari Bull Heritage Hoop Art",
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
        "images/piyu-27.jpg"
      ],
      shortDesc: "Striking hand-painted hoop art honoring Maharashtra's majestic Khillari bull with authentic halter ropes.",
      description: "A tribute to rural Maharashtra's farming heritage and Bail Pola tradition. Masterfully sketched and shaded on canvas in a 10-inch wooden hoop, finished with traditional red halter thread detailing.",
      materials: "Duck Canvas Cotton, Natural Beech Wood, Pigment Acrylics",
      careInstructions: "Dust gently with dry microfiber cloth.",
      customizable: false
    },
    {
      id: "fabric-08",
      title: "Bal Ganesha & Mushak Hand-Painted Hoop Art",
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
        "images/piyu-08.jpg"
      ],
      shortDesc: "Adorable hand-painted Bal Ganesha sharing a playful wink with Mooshak on pure white canvas hoop.",
      description: "Bring auspicious sweetness and cheer to your home with cute Bal Ganesha and his dear friend Mooshak. Perfectly painted with warm ochre and saffron tones, enclosed in an 8-inch hoop. A cherished gift for housewarmings and newborn arrivals.",
      materials: "Cotton Canvas, Natural Wood Hoop, Acrylics",
      careInstructions: "Wipe with clean dry cloth. Keep away from humidity.",
      customizable: false
    },
    {
      id: "fabric-09",
      title: "Custom Embroidered Handkerchief Set (Evil Eye & Love)",
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
        "images/piyu-07.jpg",
        "images/piyu-03.jpg"
      ],
      shortDesc: "Set of 2 pure cotton hankies with custom message, hand-embroidered Turkish Evil Eye, and infinity hearts.",
      description: "Handcrafted personalized pocket handkerchiefs crafted with hand-stitched hemstitching, custom hand-embroidered calligraphy ('Mr. Handsome Love u forever' or your chosen words), protected by an embroidered blue Evil Eye charm.",
      materials: "100% Fine Mulmul Cotton, Embroidery Floss",
      careInstructions: "Hand wash gently with mild detergent. Warm iron.",
      customizable: true,
      customFields: [
        { id: "hanky_text_1", label: "Text for Hanky 1", type: "text", required: true },
        { id: "hanky_text_2", label: "Text for Hanky 2", type: "text", required: true }
      ]
    },
    {
      id: "fabric-10",
      title: "Hand-Painted Pichwai Krishna Flute & Lotus Canvas Art",
      category: "fabric",
      subcategory: "Devotional & Canvas Art",
      price: 1899,
      originalPrice: 2499,
      rating: 5.0,
      reviewsCount: 28,
      inStock: true,
      featured: true,
      badge: "Artisan Special",
      images: [
        "images/piyu-26.jpg",
        "images/piyu-23.jpg"
      ],
      shortDesc: "Traditional Pichwai styled hand-painted artwork featuring Lord Krishna's divine flute amidst blooming pink lotuses.",
      description: "Infuse your home shrine or living room with divine harmony. Masterfully hand-painted on organic khadi cloth using vibrant water-resistant textile acrylics, inspired by ancient Nathdwara Pichwai art.",
      materials: "Handloom Khadi Fabric, Artist Acrylic Pigments, Gold Foil Accents",
      careInstructions: "Dust with dry soft cloth or keep framed under glass.",
      customizable: true,
      customFields: [
        { id: "canvas_size", label: "Select Display Size", type: "select", options: ["12x16 inches", "16x20 inches", "20x24 inches"] }
      ]
    },
    {
      id: "fabric-11",
      title: "Hand-Painted Warkari Gandhi Topi (Set of 3)",
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
        "images/piyu-21.jpg"
      ],
      shortDesc: "Pack of 3 pure white khadi Gandhi topis hand-painted with '॥ रामकृष्ण हरी ॥' and bright saffron Chandan Tilak.",
      description: "Express your devotion during Wari, Haripath, and family festivals. Each topi is hand-lettered with sacred Devanagari calligraphy and vibrant orange/black tilak.",
      materials: "Khadi Cotton, Waterproof Textile Paint",
      careInstructions: "Gentle cold water hand rinse.",
      customizable: false
    },
    {
      id: "fabric-12",
      title: "French Knot Embroidered Gown Girl Hoop Art",
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
        "images/piyu-15.jpg"
      ],
      shortDesc: "Delicate needlework hoop with hundreds of hand-stitched pink French knots creating a cascading floral ballroom gown.",
      description: "A testament to patient slow embroidery. A beautiful lady figure with braided hair and hair garland, draped in an ombre pink French knot floral dress that gracefully trails off the canvas.",
      materials: "Fine Cotton Canvas, Anchor Silk Stranded Threads, Beechwood Frame",
      careInstructions: "Dust gently. Avoid direct moisture.",
      customizable: false
    },

    // HANDMADE JEWELLERY PRODUCTS
    {
      id: "jewel-01",
      title: "Traditional Maharashtrian Kundan & Pearl Floral Nath",
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
        "images/piyu-10.jpg"
      ],
      shortDesc: "Royal dual-flower Maharashtrian Nath with lustrous basra pearl petals, kundan mirror center, and ruby red crystal drop.",
      description: "Every Maharashtrian bride's and festival lover's crowning ornament. This handmade clip-on/pierced Nath features two blossoming floral clusters woven with gleaming teardrop pearls, an authentic faceted kundan stone in the center, and a ruby drop at the base. Curved comfortably with smooth non-allergic gold wire.",
      materials: "Brass, Basra Imitation Pearls, Kundan Glass Stone, 18K Gold Polish",
      careInstructions: "Store in airtight pouch away from perfumes, sweat, and moisture. Clean with dry cotton.",
      customizable: true,
      customFields: [
        { id: "wear_type", label: "Wear Style", type: "select", options: ["Clip-on (No Piercing Required)", "Pierced Wire"] },
        { id: "stone_accent", label: "Center Stone Accent", type: "select", options: ["Ruby Red", "Emerald Green", "Clear Crystal"] }
      ]
    },
    {
      id: "jewel-02",
      title: "Royal Lotus Ruby & Antique Gold Choker Set",
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
        "images/piyu-06.jpg",
        "images/piyu-11.jpg"
      ],
      shortDesc: "Exquisite handmade gold choker featuring a ruby-petal lotus pendant, micro gold bead clusters, and matching drop earrings.",
      description: "Indulge in royal Marathi royalty. Handcrafted with fine gold-finish wire strung with clustered faceted gold beads, leading to a glorious carved lotus flower set with deep pink ruby stones. Accompanied by coordinating lotus dangle earrings with slender gold hook pins.",
      materials: "Micro Gold-Plated Brass, Synthetic Rubies, Flexible Jewellery Wire",
      careInstructions: "Wipe with soft cloth after each use. Keep away from water and hairspray.",
      customizable: true,
      customFields: [
        { id: "dori_type", label: "Necklace Fastening", type: "select", options: ["Adjustable Golden Dori (Traditional)", "Gold Chain with Clasp"] }
      ]
    },
    {
      id: "jewel-03",
      title: "Handcrafted Golden Beaded Choker with Floral Accent",
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
        "images/piyu-11.jpg",
        "images/piyu-16.jpg"
      ],
      shortDesc: "Gleaming faceted gold-beaded textured collar necklace with a sparkling cz floral centerpiece and matching linear earrings.",
      description: "Modern elegance meets age-old Indian goldsmith techniques. Layers of geometric faceted brass beads create dazzling light reflection with every movement, centered by a six-petal diamond-cz blossom with ruby heart.",
      materials: "Faceted Brass Beads, High Grade CZ, Gold Polish Wire",
      careInstructions: "Store individually in velvet cushion box.",
      customizable: false
    },
    {
      id: "jewel-04",
      title: "Sayali Signature Pearl & Ruby Floral Bridal Choker",
      category: "jewellery",
      subcategory: "Necklaces & Sets",
      price: 2199,
      originalPrice: 2899,
      rating: 5.0,
      reviewsCount: 52,
      inStock: true,
      featured: true,
      badge: "Sayali Special",
      images: [
        "images/piyu-13.jpg"
      ],
      shortDesc: "Majestic bridal necklace set with lustrous pearl floral florets, ruby centers, and matching floral stud earrings.",
      description: "The pride of our workshop in Kherade Vangi. Ten blossoming pearl rosettes each centered by a fiery red ruby cabochon, tied together with golden zari work and adjustable dori. Comes sealed in Sayali Shoppy authentic boutique packaging.",
      materials: "Basra-Grade Shell Pearls, Synthetic Pigeon Blood Rubies, Golden Zari Dori",
      careInstructions: "Do not expose to moisture. Keep in original packaging.",
      customizable: true,
      customFields: [
        { id: "gift_box", label: "Keepsake Velvet Box", type: "select", options: ["Yes (Free Special Packaging)", "Standard Box"] }
      ]
    },
    {
      id: "jewel-05",
      title: "Handcrafted Gold Beaded Linear Drop Pins / Bugadi",
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
        "images/piyu-16.jpg"
      ],
      shortDesc: "Sleek and contemporary ear drop pins featuring stacked gold-faceted beads with elongated needle stems.",
      description: "Versatile statement ear accessories that can be styled as dangling needle ear pins or upper-ear bugadi accents. Carefully hand-wrapped with geometric golden cubes and beads on sturdy gold-toned wire.",
      materials: "Gold Electroplated Brass, Nickel-Free Wire",
      careInstructions: "Clean with soft flannel cloth. Keep dry.",
      customizable: false
    },
    {
      id: "jewel-06",
      title: "Handcrafted Royal Pearl Teardrop Nath",
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
        "images/piyu-09.jpg",
        "images/piyu-10.jpg"
      ],
      shortDesc: "Classic Peshwai clip-on nose ring with rice pearls, red crystal briolette, and emerald accent stone.",
      description: "Embody the timeless grace of Mastani with this handcrafted Peshwai Nath. Features tiny pearl seed beads woven into a paisley crescent crowned with shimmering stones.",
      materials: "Brass, Rice Pearls, Synthetic Gemstones",
      careInstructions: "Store in airtight pouch. Avoid spray and lotion.",
      customizable: true,
      customFields: [
        { id: "clasp", label: "Clasp Preference", type: "select", options: ["Clip On (Comfort Pressure)", "Pierced Wire with Stopper"] }
      ]
    },
    {
      id: "jewel-07",
      title: "Vintage Kundan & Gold Plated Saaj Mala",
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
        "images/piyu-12.jpg",
        "images/piyu-06.jpg"
      ],
      shortDesc: "Kolhapuri Saaj inspired handcrafted necklace with embossed auspicious leaves, kundan flower, and hanging jhumki accents.",
      description: "Kolhapuri Saaj is an iconic Maharashtrian cultural heritage necklace. This artisan interpretation features handcrafted beads representing ancient good-luck charms, strung with golden thread and centered by a radiant lotus.",
      materials: "Cast Brass, 22K Antique Micron Gold Polish, Cotton Cord",
      careInstructions: "Store separately from other jewellery to prevent scratches.",
      customizable: false
    },
    {
      id: "jewel-08",
      title: "Handmade Floral Pearl Studs with Ruby Accent",
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
        "images/piyu-04.jpg",
        "images/piyu-13.jpg"
      ],
      shortDesc: "Dainty flower stud earrings with natural sheen pearls surrounding a ruby crystal center.",
      description: "Effortlessly elegant stud earrings for daily traditional wear, office ethnic days, and festive gatherings. Gentle on ears with screw-back closures.",
      materials: "High Luster Imitation Pearls, Glass Ruby, Silver Base with Gold Plating",
      careInstructions: "Clean with dry cloth.",
      customizable: false
    },

    // AARI WORK EMBROIDERY PRODUCTS (DEDICATED SECTION)
    {
      id: "aari-01",
      title: "Handcrafted Aari Zardosi Bridal Blouse Neckline (Crimson Silk)",
      category: "aari",
      subcategory: "Bridal Blouse Necklines",
      price: 3499,
      originalPrice: 4500,
      rating: 5.0,
      reviewsCount: 31,
      inStock: true,
      featured: true,
      badge: "Heirloom Bridal",
      images: [
        "images/piyu-14.jpg"
      ],
      shortDesc: "Rich crimson raw silk blouse piece with opulent handmade gold bullion beads, moti, and leaf motifs.",
      description: "Make your bridal or festival saree look regal with this custom hand-embroidered blouse piece. Intricately beaded with antique gold cutdana, pearls, and zari leaves framing the U-neckline.",
      materials: "Pure Raw Silk, Glass Seed Beads, Brass Zari Wire, Glass Pearls",
      careInstructions: "Strictly dry clean only.",
      customizable: true,
      customFields: [
        { id: "silk_color", label: "Silk Base Color", type: "select", options: ["Bridal Crimson Red", "Emerald Green", "Royal Navy", "Mustard Yellow"] },
        { id: "neck_style", label: "Neckline Cut", type: "select", options: ["Deep U-Neck (Front & Back)", "Sweetheart Neckline", "Pot Neck with Dori Tassels"] }
      ]
    },
    {
      id: "aari-02",
      title: "Regal Emerald Green Zardosi & Pearl Bridal Blouse Set",
      category: "aari",
      subcategory: "Full Bridal Blouse Sets",
      price: 4899,
      originalPrice: 6200,
      rating: 5.0,
      reviewsCount: 24,
      inStock: true,
      featured: true,
      badge: "Artisan Masterpiece",
      images: [
        "images/aari-blouse-02.jpg",
        "images/piyu-14.jpg"
      ],
      shortDesc: "Magnificent emerald green raw silk blouse with dense Aari needlework, multi-row pearl borders, and handcrafted jhumka latkans.",
      description: "A showstopping bridal creation handcrafted over 40+ artisan hours on the wooden Khatla frame. Adorned with raised zardosi floral vines, micro pearls, French knot accents, and custom double-drop pearl tassels.",
      materials: "Heavy Bangalore Raw Silk, Gold Kasab Thread, Seed Pearls, Cutdana Beads",
      careInstructions: "Dry clean only. Wrap in muslin cloth when storing.",
      customizable: true,
      customFields: [
        { id: "chest_size", label: "Bust Measurement (Inches)", type: "select", options: ["32", "34", "36", "38", "40", "42", "44 (Custom)"] },
        { id: "latkan_style", label: "Back Dori Tassels", type: "select", options: ["Handmade Pearl Jhumkas (Featured)", "Golden Fabric Bells", "Silk Thread Pom-Poms"] }
      ]
    },
    {
      id: "aari-03",
      title: "Custom Maggam Bridal Blouse Sleeve Border & Cutwork Motif",
      category: "aari",
      subcategory: "Sleeve Borders & Cutwork",
      price: 2799,
      originalPrice: 3600,
      rating: 4.9,
      reviewsCount: 19,
      inStock: true,
      featured: true,
      badge: "Trending Design",
      images: [
        "images/piyu-14.jpg",
        "images/aari-blouse-02.jpg"
      ],
      shortDesc: "Intricate elbow-length sleeve embroidery with scalloped cutwork edge, antique zardosi motifs, and pearl droplets.",
      description: "Designed specifically for Paithani and Kanjivaram silk sarees. Highlights your blouse sleeves with elaborate peacock or temple arch motifs, framed with micro beads and delicate cutwork.",
      materials: "Raw Silk, Antique Gold Zari, Metallic Bullion Wire",
      careInstructions: "Dry clean only.",
      customizable: true,
      customFields: [
        { id: "sleeve_length", label: "Sleeve Length", type: "select", options: ["Elbow Length (11 inches)", "Short Sleeves (6 inches)", "3/4th Sleeves (14 inches)"] }
      ]
    },
    {
      id: "aari-04",
      title: "Bespoke Paithani Border Handcrafted Aari Neckline",
      category: "aari",
      subcategory: "Traditional Blouses",
      price: 3899,
      originalPrice: 4999,
      rating: 5.0,
      reviewsCount: 22,
      inStock: true,
      featured: false,
      badge: "Bespoke",
      images: [
        "images/aari-blouse-02.jpg"
      ],
      shortDesc: "Traditional Marathi bridal neckline harmonized with authentic Paithani saree motifs, gold zari, and crystal stones.",
      description: "Sayali crafts each piece to flawlessly match your wedding saree border. Features traditional Asavali flower climbers, parrot motifs, and gold zari chain stitching that elevate your bridal grandeur.",
      materials: "Pure Silk Fabric, Kasab Zari, Hand-Cut Mirrors, Pearls",
      careInstructions: "Dry clean only.",
      customizable: true,
      customFields: [
        { id: "fabric_send_option", label: "Fabric Supply", type: "select", options: ["PIYU supplies pure raw silk", "I will send my own saree blouse piece to Sayali Studio"] }
      ]
    },

    // MEHENDI ARTISTRY PACKAGES & DESIGNS (DEDICATED SECTION)
    {
      id: "mehendi-01",
      title: "Royal Indian Bridal Mehendi Suite (Full Arms & Feet)",
      category: "mehendi",
      subcategory: "Bridal Packages",
      price: 4999,
      originalPrice: 6500,
      rating: 5.0,
      reviewsCount: 44,
      inStock: true,
      featured: true,
      badge: "Bridal Signature",
      images: [
        "images/mehendi-bridal-01.jpg"
      ],
      shortDesc: "Grand bridal henna suite with custom Doli, Radha-Krishna or Bride-Groom portrait figures, intricate jali, and deep dark natural stain.",
      description: "Transform your wedding day with Sayali's bespoke bridal mehendi artistry. Prepared with 100% natural, triple-filtered organic Sojat henna infused with pure Nilgiri eucalyptus essential oil. Includes personalized bride and groom portraits, wedding dates, customized hashtags, intricate jali, and full arm & feet coverage.",
      materials: "100% Organic Sojat Henna, Pure Nilgiri Eucalyptus Oil, Clove Infusion (No Chemicals/No PPD)",
      careInstructions: "Leave on skin for 6-8 hours. Scrape off gently without water; apply mustard/coconut oil for dark mahogany stain.",
      customizable: true,
      customFields: [
        { id: "event_date", label: "Wedding / Mehendi Ceremony Date", type: "text", required: true },
        { id: "figure_choice", label: "Custom Figures to Include", type: "select", options: ["Bride & Groom with Doli (Featured)", "Radha-Krishna Devotional", "Royal Peacock & Mandala Suite"] }
      ]
    },
    {
      id: "mehendi-02",
      title: "Modern Arabic Floral Fusion Mehendi",
      category: "mehendi",
      subcategory: "Arabic & Contemporary",
      price: 1299,
      originalPrice: 1799,
      rating: 5.0,
      reviewsCount: 38,
      inStock: true,
      featured: true,
      badge: "Trending",
      images: [
        "images/mehendi-arabic-02.jpg"
      ],
      shortDesc: "Chic and modern free-flowing Arabic floral trails with shaded petals, delicate dots, and bold leafy vine borders.",
      description: "Perfect for engagements, festive occasions, and bridesmaid styling. Bold dark contours combined with delicate petal shading that elongates the fingers and flatters traditional as well as contemporary attire.",
      materials: "Triple-Filtered Organic Henna Paste, Tea Tree Oil",
      careInstructions: "Keep dry for first 12 hours for intense dark color.",
      customizable: true,
      customFields: [
        { id: "coverage_style", label: "Coverage Choice", type: "select", options: ["Back of Both Hands & Wrist (Featured)", "Palm of Both Hands", "Elbow-Length Extended Trail"] }
      ]
    },
    {
      id: "mehendi-03",
      title: "Dohale Jevan Baby Shower Themed Mehendi",
      category: "mehendi",
      subcategory: "Ceremonial Themes",
      price: 1899,
      originalPrice: 2499,
      rating: 5.0,
      reviewsCount: 29,
      inStock: true,
      featured: true,
      badge: "Baby Shower Special",
      images: [
        "images/mehendi-baby-shower-03.jpg"
      ],
      shortDesc: "Auspicious baby shower henna featuring a sweet sleeping baby in a cradle (Palna), baby footprints, kalash, and lotus motifs.",
      description: "Specially designed for mom-to-be during Maharashtra's Dohale Jevan ceremony. 100% skin-safe, zero-chemical natural henna guaranteed gentle for pregnant mothers. Symbolizes blessings, love, and joyful anticipation of the newborn.",
      materials: "Gentle Pregnancy-Safe Organic Henna, Natural Sugar & Lemon Glaze",
      careInstructions: "Safe and soothing for mom-to-be.",
      customizable: true,
      customFields: [
        { id: "baby_text", label: "Custom Names / Auspicious Blessings", type: "text", required: true }
      ]
    },
    {
      id: "mehendi-04",
      title: "Engagement & Sangeet Guest Henna Booking (Group Package)",
      category: "mehendi",
      subcategory: "Event Packages",
      price: 3499,
      originalPrice: 4500,
      rating: 4.9,
      reviewsCount: 23,
      inStock: true,
      featured: false,
      badge: "Party Package",
      images: [
        "images/mehendi-bridal-01.jpg",
        "images/mehendi-arabic-02.jpg"
      ],
      shortDesc: "Dedicated henna service for family, friends, and bridesmaids at your pre-wedding celebrations.",
      description: "Book artisan Sayali and team for your family function, Diwali party, Karva Chauth, or Sangeet evening. Covers up to 10-15 guest hands with quick, intricate floral, mandala, and Arabic patterns.",
      materials: "Natural Organic Henna Cones",
      careInstructions: "Convenient on-location studio service in Sangli / Satara / Kolhapur or studio booking.",
      customizable: true,
      customFields: [
        { id: "guest_count", label: "Estimated Number of Guests", type: "select", options: ["Up to 10 Guests", "10 - 20 Guests", "20+ Guests (Custom Quote)"] },
        { id: "location", label: "Event City / Venue", type: "text", required: true }
      ]
    }
  ],

  // REVIEWS DATASET
  reviews: [
    {
      id: "rev-1",
      author: "Pooja Deshmukh",
      city: "Pune, Maharashtra",
      rating: 5,
      date: "2 days ago",
      productTitle: "Custom Hand-Painted Yashoda Krishna Dohale Jevan Banner",
      review: "Sayali did an absolute wonder with our Dohale Jevan banner! The colors of Bal Krishna and Yashoda Mata were so soft and divine. All our guests took photos in front of it. Delivered securely to Pune within 4 days. Highly recommended boutique!",
      avatar: "images/piyu-19.jpg"
    },
    {
      id: "rev-2",
      author: "Snehal Kulkarni",
      city: "Kolhapur, Maharashtra",
      rating: 5,
      date: "1 week ago",
      productTitle: "Traditional Maharashtrian Kundan & Pearl Floral Nath",
      review: "The Nath is exquisite! Lightweight, sits comfortably on the nose without painful pinching, and the pearls have a rich luster. It gave my Nauvari saree the exact royal Peshwai touch I wanted for Diwali.",
      avatar: "images/piyu-10.jpg"
    },
    {
      id: "rev-3",
      author: "Aditya & Sayali Patil",
      city: "Satara, Maharashtra",
      rating: 5,
      date: "2 weeks ago",
      productTitle: "Custom Baby Cradle Welcome Hoop with Pearl Tassels",
      review: "Ordered this for our niece's naming ceremony. Sayali personalized our family sketch and added the prettiest hanging pearls and pink tassels. Truly a heirloom keepsake to cherish forever.",
      avatar: "images/piyu-02.jpg"
    },
    {
      id: "rev-4",
      author: "Radhika Joshi",
      city: "Mumbai, Maharashtra",
      rating: 5,
      date: "3 weeks ago",
      productTitle: "Royal Lotus Ruby & Antique Gold Choker Set",
      review: "Such fine craftsmanship in the gold beading and lotus centerpiece! Packaging was so premium with a handwritten thank-you card. It feels like wearing fine bridal jewellery without paying exorbitant gold prices.",
      avatar: "images/piyu-06.jpg"
    },
    {
      id: "rev-5",
      author: "Prasad Gaikwad",
      city: "Sangli, Maharashtra",
      rating: 5,
      date: "1 month ago",
      productTitle: "Hand-Painted Vitthal Pure Cotton Kurta",
      review: "Wore this for our Pandharpur Wari yatra. The fabric paint didn't fade even after two gentle washes. 100% breathable cotton and the Vitthal silhouette attracted compliments from everyone.",
      avatar: "images/piyu-17.jpg"
    },
    {
      id: "rev-6",
      author: "Ananya Mehra",
      city: "Bengaluru, Karnataka",
      rating: 5,
      date: "1 month ago",
      productTitle: "Custom Hand-Embroidered Love Message Shirt",
      review: "Gifted this customized shirt with 'I Love You' embroidered on the placket and a little heart on the collar to my fiancé for our anniversary. He loved the discreet and thoughtful gesture!",
      avatar: "images/piyu-18.jpg"
    },
    {
      id: "rev-7",
      author: "Kalyani Bhosale",
      city: "Sangli, Maharashtra",
      rating: 5,
      date: "1 month ago",
      productTitle: "Handcrafted Aari Zardosi Bridal Blouse Neckline",
      review: "The Aari work on my bridal blouse piece was breathtaking! Sayali matched the antique gold zardosi exactly to my crimson Paithani saree border. The finish and bead knotting is so durable and regal.",
      avatar: "images/piyu-14.jpg"
    },
    {
      id: "rev-8",
      author: "Dr. Tejaswini Shinde",
      city: "Satara, Maharashtra",
      rating: 5,
      date: "1 month ago",
      productTitle: "Royal Indian Bridal Mehendi Suite (Full Arms & Feet)",
      review: "Booked Sayali for my wedding Mehendi. The 100% natural organic henna left the most gorgeous dark mahogany stain by my wedding morning! The Doli and portrait figures were so neat and detailed. All my relatives were asking for her contact.",
      avatar: "images/mehendi-bridal-01.jpg"
    }
  ],

  // INITIAL ORDERS DATASET (FOR PROFILE)
  orders: [
    {
      id: "ORD-9482",
      date: "2026-11-10",
      customerName: "Pooja Deshmukh",
      customerEmail: "pooja.d@example.com",
      customerPhone: "+91 98220 12345",
      shippingAddress: "Flat 402, Shivneri Heights, FC Road, Pune, Maharashtra 411005",
      items: [
        {
          id: "fabric-01",
          title: "Hand-Painted Yashoda Krishna Dohale Jevan Banner",
          price: 1899,
          quantity: 1,
          customizationNotes: "Mother Name: तृप्ती चे डोहाळे जेवण (Royal Gold Lace)"
        }
      ],
      subtotal: 1899,
      discount: 189,
      shippingFee: 0,
      total: 1710,
      paymentMethod: "UPI (Google Pay)",
      status: "Crafting in Progress",
      trackingNumber: "INDPOST-MH-829104"
    },
    {
      id: "ORD-9420",
      date: "2026-11-06",
      customerName: "Snehal Kulkarni",
      customerEmail: "snehal.k@example.com",
      customerPhone: "+91 94231 67890",
      shippingAddress: "Bungalow 12, Tarabai Park, Kolhapur, Maharashtra 416003",
      items: [
        {
          id: "jewel-01",
          title: "Traditional Maharashtrian Kundan & Pearl Floral Nath",
          price: 799,
          quantity: 2,
          customizationNotes: "Clip-on style, Ruby Red Stone"
        }
      ],
      subtotal: 1598,
      discount: 0,
      shippingFee: 0,
      total: 1598,
      paymentMethod: "Cash on Delivery",
      status: "Delivered",
      trackingNumber: "BLUEDART-8892147"
    }
  ],

  // CUSTOM ORDER INQUIRIES
  customRequests: [
    {
      id: "REQ-101",
      date: "2026-11-12",
      clientName: "Meenakshi Kadam",
      phone: "+91 98901 22334",
      email: "meenakshi@example.com",
      category: "Customize Fabric Painting",
      itemType: "Wedding Welcome Paithani Fabric Wall Art",
      details: "Need a 4-feet Paithani border wall hanging with bride & groom names 'Swapnil & Meenakshi' and wedding date 15 Dec 2026.",
      referenceImage: "images/piyu-01.jpg",
      budget: "₹2,500 - ₹3,500",
      status: "Under Artisan Review",
      quotedPrice: "₹3,200"
    },
    {
      id: "REQ-102",
      date: "2026-11-11",
      clientName: "Tanvi Sharma",
      phone: "+91 91234 56789",
      email: "tanvi.s@example.com",
      category: "Handmade Jewellery",
      itemType: "Bridal Saaj with matching customized nath & hair pins",
      details: "Matching jewellery set in antique matte gold finish with emerald green accents for green Paithani saree.",
      referenceImage: "images/piyu-13.jpg",
      budget: "₹4,000 - ₹5,000",
      status: "Quote Sent",
      quotedPrice: "₹4,500"
    }
  ]
};

// Backward-compatibility alias
window.PIHU_DATA = window.PIYU_DATA;
