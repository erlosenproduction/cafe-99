/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "Cafe 99",
    suffix: "",
    tagline: "Continental, Indian, Chinese, Shakes & Cafe Favorites",
    description: "Cafe 99 For Foodies offering continental, Indian, Chinese cuisines, refreshers, burgers, pizzas, and cozy dining near Fortis Hospital, Sector 62, Noida.",
    keywords: "Cafe 99, Noida Sector 62 cafe, continental food, burgers, pizza, Chinese food, birthday parties Noida, shakes",
    themeColor: "#80b20a",
    domain: "https://www.instagram.com/cafe99noida",
    ogImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmO4p_HjbrXRebXNZ4qLu8SvhnHCuQhOQeDu73XsTfRnbkSE7k1eB8ID8QndIJCLbfz00Uzh3Z-bWxjJX0hOA_8KaFhLkdn3__xCMrrnAD-_XQBfN18Sag0KTCnIGNbrHzxhiCYeaA=w289-h312-n-k-no",
    faviconEmoji: "🍽️",
    whatsappNumber: "918586905301"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#121510",
      bgCard: "#1b2116",
      bgLight: "#262f1e",
      primary: "#80b20a",
      primaryHover: "#9ed615",
      text: "#f0f4eb",
      textMuted: "#a2b097",
      accent: "#323d28"
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Dine In • Take Away • Home Delivery",
    title: "The Ultimate Spot For Every Foodie",
    description: "Enjoy mouthwatering burgers, pan-crust pizzas, continental appetizers, and refreshing chillers in a cozy atmosphere.",
    bgImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmO4p_HjbrXRebXNZ4qLu8SvhnHCuQhOQeDu73XsTfRnbkSE7k1eB8ID8QndIJCLbfz00Uzh3Z-bWxjJX0hOA_8KaFhLkdn3__xCMrrnAD-_XQBfN18Sag0KTCnIGNbrHzxhiCYeaA=w289-h312-n-k-no",
    stats: [
      { value: "100%", label: "Fresh Vegetarian Prep" },
      { value: "11am-11pm", label: "Open Daily" },
      { value: "4.8 ★", label: "Top Customer Rating" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "Comfort Food & Good Vibes in Sector 62",
    paragraphs: [
      "Situated right near Fortis Hospital in Noida's Sector 62, Cafe 99 For Foodies is a comforting retreat amidst the corporate bustle. We bring together a diverse menu of Continental, Indian, and Chinese favorites paired with signature shakes and chillers.",
      "Whether you are catching up with friends, looking for a casual date spot, or hosting birthday parties (starting @ ₹549/pp), Cafe 99 promises delicious food at pocket-friendly prices."
    ],
    image: "https://lh3.googleusercontent.com/grass-cs/ACvplmNoGTaB9du86HDH49_J0DHy3nEMdu641v8eZ_PkXDMX-UAoj3bs0Xru4DhDUXfu_0Mo9rC7XgMPTJs-OX6e18AjH7sEjAtLhvc-4zOiBA4BNi0rNqWqKWAMWy6LTT3bUl1DUhQIwt0gf_CG=w145-h156-n-k-no",
    imageAlt: "Cafe 99 welcoming ambience and seating area",
    experienceValue: "549/-",
    experienceLabel: "Party Packages From /pp"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "Chef's Recommendation",
    title: "Must-Try Specials",
    badge: "Popular",
    description: "Handpicked dishes loved by our regular foodies.",
    items: [
      {
        badge: "Special",
        img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=600",
        alt: "Dal Makhani Burger",
        diet: "veg",
        title: "Dal Makhani Burger",
        price: "₹129",
        desc: "Fusion burger packed with rich, slow-cooked dal makhani flavors and signature sauces."
      },
      {
        badge: "Chef's Pick",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        alt: "Farmhouse Pizza",
        diet: "veg",
        title: "Farmhouse Pizza",
        price: "₹299",
        desc: "Crispy pan-crust pizza loaded with fresh garden veggies, herbs, and melted cheese."
      },
      {
        badge: "Bestseller",
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600",
        alt: "Blue Heaven Chillers",
        diet: "veg",
        title: "Blue Heaven Crush",
        price: "₹149",
        desc: "Refreshing icy crush with vivid blue citrus flavor to beat the tropical heat."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Party & Group Savings",
    title: "Special Cafe Deals",
    items: [
      {
        tag: "PARTY PACKAGE",
        title: "Birthday Bash @ ₹549 / pp",
        desc: "Host memorable birthday parties with custom group menus and full decor assistance.",
        code: "PARTY99",
        highlight: true
      },
      {
        tag: "COMBO SAVINGS",
        title: "Burger & Chiller Combo",
        desc: "Pair any specialty burger with a frosty freezing beverage at exclusive rates.",
        code: "FOODIE99",
        highlight: false
      },
      {
        tag: "CORPORATE LUNCH",
        title: "Special Group Discounts",
        desc: "Order team meals and lunch platters with direct delivery to Sector 62 offices.",
        code: "OFFICE99",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Explore Menu",
    title: "Freshly Prepared Delights",
    pdfUrl: "#",
    pdfFilename: "Cafe99_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "burgers", label: "Burgers", active: false },
      { id: "pizza", label: "PAN Pizza", active: false },
      { id: "appetizers", label: "Appetizers", active: false },
      { id: "beverages", label: "Beverages & Shakes", active: false }
    ],
    items: [
      {
        category: "burgers",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
        title: "Dal Makhani Burger",
        price: "₹129",
        diet: "veg",
        desc: "Delicious fusion burger loaded with rich dal makhani patty and fresh veggies.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-63/cafe-99-664959/dineout",
        zomatoUrl: "https://www.zomato.com/bhubaneswar/cafe-99-street-cafe-bjb-nagar-bhubaneshwar?amp=1"
      },
      {
        category: "burgers",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=600",
        title: "Kadhai Paneer Burger",
        price: "₹139",
        diet: "veg",
        desc: "Spiced paneer patty topped with kadhai masala and creamy mayonnaise.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-63/cafe-99-664959/dineout",
        zomatoUrl: "https://www.zomato.com/bhubaneswar/cafe-99-street-cafe-bjb-nagar-bhubaneshwar?amp=1"
      },
      {
        category: "burgers",
        img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=600",
        title: "Paneer Tikka Burger",
        price: "₹159",
        diet: "veg",
        desc: "Grilled paneer tikka patty infused with Indian spices in a soft toasted bun.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-63/cafe-99-664959/dineout",
        zomatoUrl: "https://www.zomato.com/bhubaneswar/cafe-99-street-cafe-bjb-nagar-bhubaneshwar?amp=1"
      },
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600",
        title: "Margherita Pizza",
        price: "₹219",
        diet: "veg",
        desc: "Classic pan crust pizza topped with rich tomato sauce and mozzarella cheese.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-63/cafe-99-664959/dineout",
        zomatoUrl: "https://www.zomato.com/bhubaneswar/cafe-99-street-cafe-bjb-nagar-bhubaneshwar?amp=1"
      },
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        title: "Farmhouse Pizza",
        price: "₹299",
        diet: "veg",
        desc: "Loaded with crunchy capsicum, onion, tomato, and sweet corn on cheese base.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-63/cafe-99-664959/dineout",
        zomatoUrl: "https://www.zomato.com/bhubaneswar/cafe-99-street-cafe-bjb-nagar-bhubaneshwar?amp=1"
      },
      {
        category: "appetizers",
        img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600",
        title: "Bun Maska",
        price: "₹99",
        diet: "veg",
        desc: "Traditional soft bun toasted with a generous spread of butter.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-63/cafe-99-664959/dineout",
        zomatoUrl: "https://www.zomato.com/bhubaneswar/cafe-99-street-cafe-bjb-nagar-bhubaneshwar?amp=1"
      },
      {
        category: "appetizers",
        img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600",
        title: "French Fries",
        price: "₹119",
        diet: "veg",
        desc: "Golden crispy potato fries seasoned lightly with salt.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-63/cafe-99-664959/dineout",
        zomatoUrl: "https://www.zomato.com/bhubaneswar/cafe-99-street-cafe-bjb-nagar-bhubaneshwar?amp=1"
      },
      {
        category: "appetizers",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2SjUwF8kI2yQOvT60AbQvp_Nqa7C8tRafdBQwQnKCjA&s=10",
        title: "Stuff Garlic Bread",
        price: "₹169",
        diet: "veg",
        desc: "Garlic bread stuffed with molten cheese and savory Italian herbs.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-63/cafe-99-664959/dineout",
        zomatoUrl: "https://www.zomato.com/bhubaneswar/cafe-99-street-cafe-bjb-nagar-bhubaneshwar?amp=1"
      },
      {
        category: "beverages",
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
        title: "Masala Lemonade",
        price: "₹129",
        diet: "veg",
        desc: "Zesty fresh lemonade spiked with Indian chat masala and mint.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-63/cafe-99-664959/dineout",
        zomatoUrl: "https://www.zomato.com/bhubaneswar/cafe-99-street-cafe-bjb-nagar-bhubaneshwar?amp=1"
      },
      {
        category: "beverages",
        img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600",
        title: "Virgin Mojito",
        price: "₹149",
        diet: "veg",
        desc: "Classic mocktail crafted with fresh mint, lime juice, and sparkling soda.",
        swiggyUrl: "https://www.swiggy.com/restaurants/noida/sector-63/cafe-99-664959/dineout",
        zomatoUrl: "https://www.zomato.com/bhubaneswar/cafe-99-street-cafe-bjb-nagar-bhubaneshwar?amp=1"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Testimonials",
    title: "What Our Foodies Say",
    items: [
      {
        stars: 5,
        text: "\"Amazing food, quick service, and a beautiful ambience. Everything I tried was fresh and full of flavor. One of the best dining experiences I've had recently. Highly recommended...😂\"",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "Tripti Anand",
        role: "Local Guide • 216 reviews"
      },
      {
        stars: 5,
        text: "\"I was at this place Cafe99 yesterday only. It's in Noida Sector 62 right across from Fortis Hospital. Situated amidst the corporate buildings filled with awkward silences, the hustle bustle of this place is very easy to notice from far wide. The ambience inside is comforting and cozy. We started off with their special Cafe99 Chicken Sub, Tandoori Non-veg Platter and Black Current Shake with my favourite Butter Chicken and Garlic Naan to follow as mains. The chicken was tender, juicy and perfectly cooked. In fact, all items tasted amazingly good and they were all worth the prices they came up at. I am gonna be coming back for sure. Highly recommended.\"",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
        name: "harita nandwani",
        role: "Local Guide • 17 reviews"
      },
      {
        stars: 5,
        text: "\"Yesterday i been to this amazing place which is located in noida sector -63 you can easily reach here by metro. Beautiful decorated with inside and outside sitting option. We ordered starters, main course along with beverages.we ordered burger, veg platter,pizza along with fresh lime lemonade,ice tea and cold coffee.Food was Delicious , presentation was good.It's prefect for casual date as well as for kitty party and birthday party. pocket friendly prices according to prices quantity and quality is not at compromised. Highly recommended\"",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
        name: "Hungry Himalayan",
        role: "Local Guide • 89 reviews"
      }
    ],
    googleCta: {
      title: "Had a great time at Cafe 99?",
      desc: "Help other foodies discover us by leaving a review on Google Maps!",
      url: "https://maps.google.com/?q=Cafe+99+Noida+Sector+62"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Experience",
    title: "Vibes at Cafe 99",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkVe-cH6qutp04dTKKgstu5D8ooeKZgHb3eF1kHeWS6ZanmQWXRwCMxuHZvhcv-daSze22qDUzQqFEjPhseoVE2SKr5r6dHEJUvElOoDGE7ypLNf1nYhsiqWXoG_PEujMaWQVo=w243-h203-n-k-no-nu", alt: "Cafe 99 Seating and Ambiance" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn9D36Is48ZI06n3EvJV_VBJdhFKaNj7E_iMTexOFoK0kfFNIuOJaPQvcxaHUNPmV81WinwCT8SWQ1JxKPbdCeNQqHSnVNOhp1RsYoHEwiOeeNGh38EIVkKR2fIlrbnOdpgS3Y2=w243-h174-n-k-no-nu", alt: "Interior View of Cafe 99" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmBV-jHuNiN30Duo2PlvUXPonDRgayRFGPwoveeRV_UEwjWwg9oVKvLRySeF96fOaDk1ENJdyegu3QOoG6IBooHb3ilDB5VoU2sOYWm0Bq5TeZVNWE97xpu9abGNz0RlXMbqU84zw=w243-h174-n-k-no-nu", alt: "Cozy Corner at Cafe 99" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkQUr6Sh0jj9rKTHJoCxEK_o9nU0gzlbHtRPf5o4k8WLxmhQdHBDCKn9d1rhILV1810MKDxr8E4AhVq0LieON6FNNHcZCgyrBIZGm9guXzZxMLNh6fNngMa3uQQRgoxYxpAyHGS=w141-h101-n-k-no-nu", alt: "Dining Setup at Cafe 99" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Locations & Hours",
    title: "Visit Us in Noida",
    description: "Located near Fortis Hospital in Sector 62, right amidst the corporate hub. Drop in for quick bites, corporate lunches, or party celebrations.",
    address: "Shop No.1, 1st Floor, RN-12, near Fortis Hospital, Rasoolpur Nawada, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309",
    hours: [
      "Monday - Sunday: 11:00 AM - 11:00 PM",
      "Last Order: 10:45 PM"
    ],
    email: "info@cafe99.in",
    phone: "+91 85869 05301 / 0120-4375776",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.564720984852!2d77.3621453!3d28.6128038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce516e890c29b%3A0xb24e6a0d0144983a!2sFortis%20Hospital%20Noida!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "Continental, Indian, Chinese, Shakes & Cafe Snacks served fresh in Sector 62, Noida.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/cafe99noida?stkn=NHJwcjdzMXYydDl1", iconClass: "ph-instagram-logo" },
      { platform: "swiggy", url: "https://www.swiggy.com/restaurants/noida/sector-63/cafe-99-664959/dineout", iconClass: "ph-shopping-bag" },
      { platform: "zomato", url: "https://www.zomato.com/bhubaneswar/cafe-99-street-cafe-bjb-nagar-bhubaneshwar?amp=1", iconClass: "ph-fork-knife" }
    ],
    copyright: "© 2026 Cafe 99. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "Cafe99_Guest_WiFi",
    password: "foodiescafe99"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
