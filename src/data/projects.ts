export type Tab = "problem" | "solution" | "impact";

export type ProjectFeature = {
  icon: string;
  title: string;
  description: string;
  tags?: string[];
};

export type ProjectArchitecture = {
  label: string;
  detail: string;
};

export type ShowcaseItem = {
  seed: number;
  title: string;
  body: string;
  device?: "mobile" | "browser";
  chapter?: string;
  animated?: boolean;
  size?: "split" | "wide";
  image?: string;
  video?: string;
};

export type ProjectCover = {
  device: "mobile" | "browser";
  seed: number;
  accent?: string;
};

export type ProjectMeta = {
  role: string;
  year: string;
  client: string;
  platform?: string;
  degree?: string;
  award?: string;
};

export type Project = {
  id: string;
  n: string;
  title: string;
  category: "Web Application" | "Mobile Application" | "SaaS" | "Dashboard" | "UI Experiment";
  problem: string;
  solution: string;
  stack: string[];
  impact: string;
  live?: string;
  github?: string;
  gradient: string;
  cover: ProjectCover;
  coverImage?: string;
  meta?: ProjectMeta;
  features?: ProjectFeature[];
  architecture?: ProjectArchitecture[];
  showcase?: ShowcaseItem[];
  stats?: { value: string; label: string }[];
  capabilities?: string[];
};

export const PROJECTS: Project[] = [
{
    id: "elquran",
    n: "01",
    title: "ElQuran: Quran Reading Platform",
    category: "Web Application",
    problem:
      "Users needed a modern, complete Quran reading experience with multiple recitations, translations, and a clean interface.",
    solution:
      "Built a full React web app with all 114 Surahs, elegant Arabic typography, multiple audio recitations, verse-by-verse translations in multiple languages, advanced search, and a responsive emerald-themed design.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    impact:
      "A complete Quran reading platform with real-time content synchronization serving users worldwide.",
    live: "https://el-quran.vercel.app/",
    github: "https://github.com/saidseghirakram/elQuran",
    gradient: "linear-gradient(135deg,#059669 0%,#10b981 50%,#d1fae5 100%)",
    cover: { device: "browser", seed: 11 },
    coverImage: "/projectsPhoto/quran/home-desktop.png",
    meta: {
      role: "Frontend Developer",
      year: "2023",
      client: "Personal / Community",
      platform: "Web",
    },
    showcase: [
      {
        seed: 201,
        device: "browser",
        title: "The home, wide open",
        body: "Bismillah opens every session in flowing Arabic typography. The reader and the rest of the platform sit behind a clean, searchable home. The interface steps out of the way of the text.",
        image: "/projectsPhoto/quran/home-desktop.png",
      },
      {
        seed: 202,
        device: "browser",
        title: "114 surahs, one list",
        body: "A fast, searchable grid of every surah with revelation type, ayah count and a one-line summary. Jumping between chapters takes a single click.",
        image: "/projectsPhoto/quran/surah-select.png",
      },
      {
        seed: 203,
        device: "browser",
        title: "The reader",
        body: "Verses are numbered, clickable and spaced for comfortable reading. Each surah flows in crisp Arabic typography, with the toolbar and controls tucked quietly around the text.",
        image: "/projectsPhoto/quran/surah-ayat.png",
      },
      {
        seed: 204,
        device: "browser",
        title: "Translations beside the text",
        body: "Verse-by-verse translations sit beside the Arabic in a layout you can toggle in a tap. Multiple languages, no page reload, and the verse stays perfectly aligned.",
        image: "/projectsPhoto/quran/translate-ayat.png",
      },
      {
        seed: 205,
        device: "mobile",
        title: "Beautiful on the road",
        body: "The responsive layout keeps the whole experience intact on a phone. Same surahs, same clean reading, re-flowed for any screen.",
        image: "/projectsPhoto/quran/home-mobile.png",
      },
    ],
  },
,
,
{
    id: "fennec",
    n: "02",
    title: "Fennec Booking: Travel Marketplace",
    category: "Mobile Application",
    problem:
      "The Algerian travel market lacked a unified mobile platform where users could search, book, pay, and manage their entire journey: flights, hotels, transfers, visas, and mobile recharge. All from one phone.",
    solution:
      "Architected and built the entire frontend platform from scratch as Lead Frontend Developer. A cross-platform mobile app (Android & iOS) with feature-based architecture spanning 8+ product lines, 90+ API routes, real-time support, a digital wallet, and multilingual support with RTL. Shipped to the App Store and Google Play.",
    stack: ["React Native", "Zustand", "TanStack Query", "TypeScript", "WebRTC", "i18n"],
    impact:
      "A complete travel ecosystem in users' pockets, serving the Algerian market. One codebase, one team vision, one app for every travel need. Available on both App Store and Google Play.",
    gradient: "linear-gradient(135deg,#5b21b6 0%,#a855f7 35%,#f6f1e9 100%)",
    cover: { device: "mobile", seed: 16, accent: "#7c3aed" },
    coverImage: "/projectsPhoto/fennecbooking/homepage.png",
    meta: {
      role: "Lead Frontend Developer",
      year: "2024 · 2025",
      client: "Travel Fintech Startup",
      platform: "iOS & Android",
    },
    features: [
      {
        icon: "plane",
        title: "Flights",
        description:
          "Search, compare, customize baggage and seats, book, pay, and download digital tickets. All in one flow.",
        tags: ["Search", "Compare", "Seats & Baggage", "E-ticket"],
      },
      {
        icon: "building",
        title: "Hotels",
        description:
          "Search by destination, room selection, interactive map view, booking and payment integration.",
        tags: ["Search", "Room selection", "Map view", "Booking"],
      },
      {
        icon: "package",
        title: "Travel Packages",
        description: "Flight and hotel bundles in a single unified booking flow with smart pricing.",
        tags: ["Flight + hotel", "One flow", "Smart pricing"],
      },
      {
        icon: "car",
        title: "Airport Transfers",
        description: "Search, book, and pay for ground transport to and from airports seamlessly.",
        tags: ["Search", "Book", "Pay"],
      },
      {
        icon: "stamp",
        title: "E-Visa",
        description:
          "Browse visa requirements by country and apply online with guided document submission.",
        tags: ["Requirements", "Apply online", "Documents"],
      },
      {
        icon: "smartphone",
        title: "Mobile Recharge",
        description:
          "Instant mobile recharge for Djezzy, Mobilis and Ooredoo. Top up anywhere, anytime.",
        tags: ["Djezzy", "Mobilis", "Ooredoo"],
      },
      {
        icon: "wallet",
        title: "Fennec Pay",
        description:
          "Digital wallet with PIN security, top-up, transfers and fast payments across the platform.",
        tags: ["PIN security", "Top-up", "Transfers"],
      },
      {
        icon: "bot",
        title: "Fenno AI",
        description:
          "Intelligent travel assistant powered by AI for search, support, and guided recommendations.",
        tags: ["Search help", "Support", "Recommendations"],
      },
      {
        icon: "film",
        title: "Travel Reels",
        description: "Destination inspiration and discovery through short-form video content.",
        tags: ["Destinations", "Short film", "Save"],
      },
    ],
    architecture: [
      {
        label: "Feature-based Architecture",
        detail:
          "Modular code organization across flights, hotels, transfers, e-visa, wallet and support. Each feature is isolated and scalable in a cross-platform codebase.",
      },
      {
        label: "Zustand + TanStack Query",
        detail:
          "Lightweight client state with Zustand, server state orchestrated via TanStack Query for optimal caching and synchronization across mobile sessions.",
      },
      {
        label: "90+ API Routes",
        detail:
          "Comprehensive API layer handling search, booking, payments, user management, push notifications, and real-time events.",
      },
      {
        label: "Cross-platform Mobile-first UX",
        detail:
          "Single React Native codebase for Android and iOS with touch-optimized interactions, onboarding, biometric auth flows, and adaptive layouts.",
      },
      {
        label: "Real-time Live Support",
        detail:
          "In-app chat with AI support, Click-to-Call via WebRTC, push notifications, and instant agent connection.",
      },
      {
        label: "Multilingual + RTL",
        detail:
          "Full English, French and Arabic with complete RTL layout support for Algeria and beyond.",
      },
    ],
    showcase: [
      {
        seed: 101,
        device: "mobile",
        chapter: "Home & Discovery",
        title: "The search surface",
        body: "The home screen opens with a trip-type switcher: Round trip, One-way, Multi-City. A city picker set to Oran (ORN), a date, two Adults, Economy, Refundable, and a Search button. Everything the traveler needs to start is right here.",
        image: "/projectsPhoto/fennecbooking/homepage.png",
      },
      {
        seed: 102,
        device: "mobile",
        title: "The platform at a glance",
        video: "/projectsPhoto/fennecbooking/globale-screens.mp4",
        body: "A single sweep across the app: home, flights, hotels, wallet and profile. The entire ecosystem in one scrolling overview.",
      },
      {
        seed: 103,
        device: "mobile",
        chapter: "Flights",
        title: "Results by price and time",
        body: "Flight results list prices in DZD alongside duration and stops. A 16 900 DZD departure at 11:15 SSH, a 118 880 DZD option at 14:25, sorted and filterable by Price and Timing.",
        image: "/projectsPhoto/fennecbooking/flightsearch.png",
      },
      {
        seed: 104,
        device: "mobile",
        title: "Price across the week",
        body: "A horizontal calendar shows fares for each day: 7 sept, 8 sept, 12 sept, with the carrier name pinned below each date so the cheapest day is obvious at a glance.",
        image: "/projectsPhoto/fennecbooking/flightWeekCalender.png",
      },
      {
        seed: 105,
        device: "mobile",
        title: "The full flight flow",
        video: "/projectsPhoto/fennecbooking/flight.mp4",
        body: "From the search screen through results, fare comparison, seat selection and boarding pass. The entire flight booking flow recorded in real use.",
      },
      {
        seed: 106,
        device: "mobile",
        chapter: "Hotels",
        title: "Search by city",
        body: "Hotel results for Alger list real properties: Sheraton Club Des Pins (45 500 DZD/night), Hyatt Regency Algiers Airport (40 800 DZD/night), AZ Hotels Vague d'Or (37 300 DZD/night), Marriott Bab Ezzouar, each with a rating, refundability status, and per-night price.",
        image: "/projectsPhoto/fennecbooking/hotelSearch.png",
      },
      {
        seed: 107,
        device: "mobile",
        title: "The Sheraton detail",
        body: "Sheraton Club Des Pins, Club des Pins, Staoueli, Alger, 16101. Check-in September 8, check-out September 10, 2 Adults. Facilities, description and a night rate of 91 000 DZD for 2 nights.",
        image: "/projectsPhoto/fennecbooking/hotelDetails.png",
      },
      {
        seed: 108,
        device: "mobile",
        title: "Choose your room",
        body: "Sheraton Club Des Pins: choose your room. Room Only at 91 000, Wi-Fi TV toiletries at 98 500, a 2-Adults Refundable option at 116 200 up to 152 000. Every price, capacity and perk listed side by side.",
        image: "/projectsPhoto/fennecbooking/selectRooms.png",
      },
      {
        seed: 109,
        device: "mobile",
        title: "The complete hotel flow",
        video: "/projectsPhoto/fennecbooking/hotel.mp4",
        body: "From the Sheraton search, through room comparison, date selection and final booking. The real hotel booking flow captured in motion.",
      },
      {
        seed: 110,
        device: "mobile",
        chapter: "E-Visa",
        title: "Applicant information",
        body: "A step-by-step form (step 3 of 7) with fields for First Name, Last Name, Date of Birth, Nationality, Country of Resident, gender, and a Scan your passport option. Saved traveller details are already populated.",
        image: "/projectsPhoto/fennecbooking/evisaPage.png",
      },
      {
        seed: 111,
        device: "mobile",
        title: "The e-visa flow in motion",
        video: "/projectsPhoto/fennecbooking/evisa.mp4",
        body: "Selecting a country, filling the applicant form, uploading documents and submitting. The guided e-visa application captured step by step.",
      },
      {
        seed: 112,
        device: "mobile",
        chapter: "Fenno AI & Support",
        title: "Fenno says hello",
        body: "Fenno greets the user and awaits a travel question. The AI assistant is ready to help with bookings, destinations and anything else the traveler needs.",
        image: "/projectsPhoto/fennecbooking/fennoAiChatbot.png",
      },
      {
        seed: 113,
        device: "mobile",
        title: "Support, two ways",
        body: "How can we help you today? Choose how to get support: chat with Fenno or reach the Support Team directly. Both paths are ready for any question.",
        image: "/projectsPhoto/fennecbooking/supportPage.png",
      },
      {
        seed: 114,
        device: "mobile",
        chapter: "Wallet",
        title: "Fennec Pay in action",
        video: "/projectsPhoto/fennecbooking/wallet.mp4",
        body: "The digital wallet: balance, top-up, send and transaction history. All captured in a real use recording.",
      },
      {
        seed: 115,
        device: "mobile",
        chapter: "E-SIM & Insurance",
        title: "Get an e-SIM",
        video: "/projectsPhoto/fennecbooking/esim.mp4",
        body: "Browsing destination e-SIMs, choosing a plan, activating it. The full e-SIM purchase flow recorded on device.",
      },
      {
        seed: 116,
        device: "mobile",
        title: "Travel insurance",
        video: "/projectsPhoto/fennecbooking/inssurance.mp4",
        body: "Comparing coverage, selecting a policy and confirming purchase. The insurance flow captured from search to confirmation.",
      },
      {
        seed: 117,
        device: "mobile",
        chapter: "Flixy Travel Reels",
        title: "Discover by swiping",
        video: "/projectsPhoto/fennecbooking/flixy.mp4",
        body: "Short vertical destination reels. Swipe up for the next place, tap to save. The Flixy feed brings travel inspiration to life.",
      },
      {
        seed: 118,
        device: "mobile",
        chapter: "Account & Profile",
        title: "Your profile",
        body: "Your profile page: manage account, favorites, language, currency, voucher settings and more. One surface, every setting.",
        image: "/projectsPhoto/fennecbooking/profilePage.png",
      },
      {
        seed: 119,
        device: "mobile",
        title: "My Bookings",
        body: "My Bookings with Pending, Confirmed, and Cancelled tabs. Search by PNR or by date. ALG to CDG on 9 Sep 2026, B&B HOTEL Cergy Pierrelaye, PNR 1587516, 26 Aug 2026. All visible at once.",
        image: "/projectsPhoto/fennecbooking/myBookingPage.png",
      },
      {
        seed: 120,
        device: "mobile",
        title: "Notifications",
        body: "A running feed of booking updates. Items added to trips with reference numbers (196857, 196832, 196670, 196631), hotels linked and itinerary changes pushed in real time.",
        image: "/projectsPhoto/fennecbooking/notificationPage.png",
      },
    ],
    stats: [
      { value: "90+", label: "API Routes" },
      { value: "8+", label: "Product Lines" },
      { value: "3", label: "Languages" },
      { value: "2", label: "Platforms" },
    ],
    live: "https://play.google.com/store",
    capabilities: [
      "Unified booking hub with tickets, vouchers and sharing",
      "Digital ticket generation and download",
      "Interactive map views for hotels and transfers",
      "Smart search across all product lines",
      "Push notifications and booking status updates",
      "Secure payment processing and wallet top-up",
      "Profile management and booking history",
      "Onboarding flows and biometric authentication",
    ],
  },
,
,
{
    id: "psych-ai",
    n: "03",
    title: "Psychology AI Platform",
    category: "SaaS",
    problem:
      "Mental health professionals needed a unified dashboard combining patient diagnostics, AI-powered analysis, and appointment management.",
    solution:
      "Designed and built a modern web platform with integrated LLMs for an AI chat assistant, real-time appointment tracking, pathology search, gender distributions, regional statistics, and visual insights.",
    stack: ["Next.js", "TypeScript", "LLMs", "MongoDB", "Node.js"],
    impact:
      "Empowers doctors to make data-driven decisions through smart analytics and AI integration.",
    github: "https://github.com/",
    gradient: "linear-gradient(135deg,#7c3aed 0%,#a855f7 50%,#e9d8fd 100%)",
    cover: { device: "browser", seed: 13 },
    coverImage: "/projectsPhoto/psychology/1.png",
    meta: {
      role: "Product Engineer",
      year: "2024",
      client: "Health Startup",
      platform: "Web",
      degree: "Final Year Project, Master (Software Engineering)",
    },
    showcase: [
      {
        seed: 401,
        device: "browser",
        title: "One dashboard for clinicians",
        body: "At a glance: today's appointments, pending diagnostics and flagged cases, arranged so the entire day reads left to right without scrolling for answers.",
        image: "/projectsPhoto/psychology/1.png",
      },
      {
        seed: 402,
        device: "browser",
        title: "Ask the AI assistant",
        body: "A clinical copilot that answers natural-language questions about patients, diagnostics and literature, grounded in the data the platform already holds.",
        image: "/projectsPhoto/psychology/2.png",
      },
      {
        seed: 403,
        device: "browser",
        title: "Search the pathology library",
        body: "A searchable repository of pathologies with prevalence, symptoms and linked cases, built for fast retrieval rather than archive dust.",
        image: "/projectsPhoto/psychology/3.png",
      },
      {
        seed: 404,
        device: "browser",
        title: "Appointments & regions",
        body: "Appointment pressure and regional distribution render as live charts, so capacity problems surface before the waiting room does.",
        image: "/projectsPhoto/psychology/4.png",
      },
      {
        seed: 405,
        device: "browser",
        title: "Gender & outcome analytics",
        body: "Gender distributions and treatment outcomes are sliced visually. Trends that took hours of spreadsheets become a single glance.",
        image: "/projectsPhoto/psychology/5.png",
      },
      {
        seed: 406,
        device: "browser",
        title: "Visual insights",
        body: "Every dataset becomes a chart a clinician trusts: incidence, progression and comparisons in consistent, readable tokens.",
        image: "/projectsPhoto/psychology/6.png",
      },
      {
        seed: 407,
        device: "browser",
        title: "Patient-level detail",
        body: "Drilling into a single case keeps the context tight. History, status and actions on one focused surface.",
        image: "/projectsPhoto/psychology/7.png",
      },
      {
        seed: 408,
        device: "browser",
        title: "Reports at a glance",
        body: "Clear summaries rendered for review. The same data a poll of doctors would ask for, already shaped into a decision.",
        image: "/projectsPhoto/psychology/8.png",
      },
    ],
  },
,
,
{
    id: "dashboard-management",
    n: "04",
    title: "Dashboard Management",
    category: "Dashboard",
    problem:
      "A single place to run an online business: track what's selling, who's buying, and where things stand, without jumping between tools.",
    solution:
      "Built a full admin dashboard frontend covering the whole back-office: an overview home, realtime-looking analytics, orders, products, users, reports, third-party integrations, and a settings panel.",
    stack: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
    impact:
      "A clean, complete management UI over dummy data, demonstrating the information architecture, data visualization, and scalable component patterns a real SaaS dashboard needs.",
    live: "https://synth-admin-ui.vercel.app/",
    gradient: "linear-gradient(135deg,#1d4ed8 0%,#0f172a 100%)",
    cover: { device: "browser", seed: 16 },
    coverImage: "/projectsPhoto/admin-dashboard/home.png",
    meta: {
      role: "Frontend Developer",
      year: "2025",
      client: "Personal Project",
      platform: "Web",
    },
    showcase: [
      {
        seed: 701,
        device: "browser",
        title: "Overview at a glance",
        body: "The home screen leads with the numbers that matter: revenue, volume and activity, with the day's highlights and quick actions close at hand.",
        image: "/projectsPhoto/admin-dashboard/home.png",
      },
      {
        seed: 702,
        device: "browser",
        title: "Advanced Analytics",
        body: "Interactive charts and filters turn the raw metrics into trends you can actually read: traffic, sales and conversions over time.",
        image: "/projectsPhoto/admin-dashboard/analytics.png",
      },
      {
        seed: 703,
        device: "browser",
        title: "Orders",
        body: "Every order in one searchable table. Status, payment, customer and amount, with row-level actions for the full fulfillment flow.",
        image: "/projectsPhoto/admin-dashboard/orders.png",
      },
      {
        seed: 704,
        device: "browser",
        title: "Products",
        body: "A manageable catalog with inventory, pricing and visibility toggles. Edit and restock without leaving the list.",
        image: "/projectsPhoto/admin-dashboard/products.png",
      },
      {
        seed: 705,
        device: "browser",
        title: "Users",
        body: "Customer accounts with roles, activity and status, so the team can support, monitor or restrict access in a couple of clicks.",
        image: "/projectsPhoto/admin-dashboard/users.png",
      },
      {
        seed: 706,
        device: "browser",
        title: "Reports",
        body: "Long-horizon reporting: exports, summaries and printable breakdowns for finance and operations reviews.",
        image: "/projectsPhoto/admin-dashboard/reports.png",
      },
      {
        seed: 707,
        device: "browser",
        title: "Integrations",
        body: "Third-party services connected side by side. Each one shows its status, key and sync controls, so the stack stays glued together.",
        image: "/projectsPhoto/admin-dashboard/integration.png",
      },
      {
        seed: 708,
        device: "browser",
        title: "Settings",
        body: "The back-office's control room: workspace, billing, team permissions and preferences, all in a single settings panel.",
        image: "/projectsPhoto/admin-dashboard/settings.png",
      },
    ],
  },
,
,

{
    id: "paintiro",
    n: "05",
    title: "PAINTIRO: Paint Brand Website",
    category: "Web Application",
    problem:
      "An Algerian paint manufacturer with 25 years of experience needed a digital presence that matched the quality of their product: editorial, immersive, and distinctly local.",
    solution:
      "Built a full brand website with 3D product renders, an animated factory process with a real-time production counter, a city-inspired color palette explorer, a before/after durability comparison, a distributor map across 15 wilayas, and a bilingual EN/FR experience.",
    stack: ["Next.js", "TypeScript", "Framer Motion", "Three.js", "GSAP", "Tailwind CSS"],
    impact:
      "A flagship digital storefront for PAINTIRO, serving painters and distributors across Algeria with product discovery, color palettes and a direct order flow.",
    live: "https://paintiro-xi.vercel.app/en",
    gradient: "linear-gradient(135deg,#c0392b 0%,#e74c3c 40%,#f5f0eb 100%)",
    cover: { device: "browser", seed: 17 },
    coverImage: "/projectsPhoto/paintiro/Screenshot 2026-10-31 201703.png",
    meta: {
      role: "Frontend Developer & Designer",
      year: "2025",
      client: "Paint Manufacturer",
      platform: "Web",
    },
    stats: [
      { value: "25+", label: "Years of experience" },
      { value: "500+", label: "Quality products" },
      { value: "1 000+", label: "Trusted distributors" },
      { value: "15", label: "Wilayas covered" },
    ],
    showcase: [
      {
        seed: 901,
        device: "browser",
        title: "Color, crafted to last",
        body: "The hero opens with a floating 3D paint bucket and a single promise: professional paints, primers and fixers made for walls that matter. A loading screen counts in with \"Color is loading...\" before the canvas appears.",
        image: "/projectsPhoto/paintiro/Screenshot 2026-10-31 201703.png",
      },
      {
        seed: 902,
        device: "browser",
        title: "The product line",
        body: "Five products scroll one by one in a sticky viewport: IROVELLA (satin acrylic, 18 kg), PLAFONYA (ceiling paint, seamless film), FIX-ONE (extreme coverage fixer), IROCRYL (acrylic interior), IROFAÇADE (exterior facade, 20 kg). Each bucket is a 3D render that rotates as the user switches variant from a dropdown.",
        image: "/projectsPhoto/paintiro/Screenshot 2026-10-31 202838.png",
      },
      {
        seed: 903,
        device: "browser",
        title: "Give your walls back their life",
        body: "A bold red section with paint dripping down into the dark transitions the page from product to story. Subtext: \"Cracks, stains, tired plaster: one PAINTIRO system and the wall is new again.\"",
        image: "/projectsPhoto/paintiro/Screenshot 2026-10-31 202916.png",
      },
      {
        seed: 904,
        device: "browser",
        title: "From raw mineral to your wall",
        body: "A dark factory section animates five production steps live: raw materials (TiO2, CaCO3, resin) mix, tint, pass quality lab and fill. A real-time liter counter climbs as the user scrolls. \"1 000+ SHADES ON DEMAND.\"",
        image: "/projectsPhoto/paintiro/Screenshot 2026-10-31 201742.png",
      },
      {
        seed: 905,
        device: "browser",
        title: "Solutions for every project",
        body: "Six use-case cards scroll horizontally: Interior (smooth washable finishes), Exterior (façade durability), Ceilings (no-drip application), Preparation (fixers and primers), Professional and more. Each card pairs a room photo with a recommended product.",
        image: "/projectsPhoto/paintiro/Screenshot 2026-10-31 201833.png",
      },
      {
        seed: 906,
        device: "browser",
        title: "Colors that inspire",
        body: "An interactive fan deck with 1 000+ shades organized by family: Whites, Beiges, Greys, Blues, Greens, Reds. Each swatch shows its code (PT-304 Pebble, #D6D5D1) and a \"Copy Code\" button. Open the fan, pick a shade, the whole room takes its color.",
        image: "/projectsPhoto/paintiro/Screenshot 2026-10-31 201846.png",
      },
      {
        seed: 907,
        device: "browser",
        title: "See the color in your room",
        body: "A live room visualizer: pick a shade (Harbor PT-404), choose a finish (Matte, Satin, Gloss), drag the before/after slider and see the Living Room, Dining Room or Bedroom transform in real time. Then hit \"Find this color\" to locate it in a store.",
        image: "/projectsPhoto/paintiro/Screenshot 2026-10-31 201927.png",
      },
      {
        seed: 908,
        device: "browser",
        title: "Scroll ten years of sun, rain and sand",
        body: "An interactive comparison scrolls a house façade through a decade of weather: UV SUN, RAIN, SAND WIND, HEAT. A year counter climbs to 2035. The left side shows cracked ordinary paint; the right shows PAINTIRO IROFAÇADE still pristine.",
        image: "/projectsPhoto/paintiro/Screenshot 2026-10-31 202950.png",
      },
      {
        seed: 909,
        device: "browser",
        title: "Find PAINTIRO near you",
        body: "An interactive SVG map of Algeria lets users tap any wilaya to reveal local distributors, stores and showrooms. 19 points of sale across 15 wilayas: Chlef, Batna, Béjaïa, Biskra, Blida, Tlemcen, Tizi Ouzou, Alger and more.",
        image: "/projectsPhoto/paintiro/Screenshot 2026-10-31 202006.png",
      },
    ],
  },
,
,
{
    id: "driver-app",
    n: "06",
    title: "Driver App: Road Companion",
    category: "Mobile Application",
    problem:
      "Drivers lacked a single platform to access essential roadside services like parking, repairs, hotels, and mechanical assistance.",
    solution:
      "Developed a cross-platform React Native app with Expo, featuring service categories, a built-in navigation map, real-time listings, and user authentication via Node.js and MongoDB backend.",
    stack: ["React Native", "Expo", "Node.js", "MongoDB", "Google Maps API"],
    impact: "A comprehensive mobile solution simplifying daily challenges for drivers on the road.",
    github: "https://github.com/saidseghirakram/DRIVER-apk",
    gradient: "linear-gradient(135deg,#5b21b6 0%,#a855f7 50%,#f6f1e9 100%)",
    cover: { device: "mobile", seed: 12 },
    coverImage: "/projectsPhoto/driver/SCREENSHOT/Main%20Screen/Home.png",
    meta: {
      role: "Full-Stack Developer",
      year: "2023",
      client: "Startup MVP",
      platform: "iOS & Android",
      degree: "Final Year Project, Licence (Information Systems)",
    },
    showcase: [
      {
        seed: 301,
        device: "mobile",
        chapter: "Onboarding",
        title: "The welcome screen",
        body: "A short sign-in keeps friction low: phone, verification code, done. The welcome screen promises essentials, not a marketing essay.",
        image: "/projectsPhoto/driver/SCREENSHOT/Oboarding%20Screens/Start.png",
      },
      {
        seed: 302,
        device: "mobile",
        title: "Parking, first pick",
        body: "Finding a safe spot on the road is the first need the onboarding sells. One idea, one action, one big visual.",
        image: "/projectsPhoto/driver/SCREENSHOT/Oboarding%20Screens/Parking.png",
      },
      {
        seed: 303,
        device: "mobile",
        title: "Hotels on the road",
        body: "Long-haul drivers rest deliberately. The hotel frame sets the promise: a clean room, one tap away from the highway.",
        image: "/projectsPhoto/driver/SCREENSHOT/Oboarding%20Screens/Hotel.png",
      },
      {
        seed: 304,
        device: "mobile",
        title: "Restaurants nearby",
        body: "Meal breaks matter. The restaurant frame introduces hungry-driver convenience before the engine even warms up.",
        image: "/projectsPhoto/driver/SCREENSHOT/Oboarding%20Screens/Restaurant.png",
      },
      {
        seed: 305,
        device: "mobile",
        title: "Mechanical assistance",
        body: "Breakdowns are the worst part of the job. This frame promises help on the hardest days: a mechanic, dispatched in seconds.",
        image: "/projectsPhoto/driver/SCREENSHOT/Oboarding%20Screens/Mechanical.png",
      },
      {
        seed: 306,
        device: "mobile",
        title: "Truck recovery",
        body: "The heaviest problems deserve a dedicated answer. Truck recovery closes the onboarding loop so every driver feels covered.",
        image: "/projectsPhoto/driver/SCREENSHOT/Oboarding%20Screens/Truck%20Recovery.png",
      },
      {
        seed: 307,
        device: "mobile",
        chapter: "Main App",
        title: "The driver's home",
        body: "Home groups every service into one glanceable dashboard: parking, fuel, repair, hotels and breakdown assistance. Each need is one tap away.",
        image: "/projectsPhoto/driver/SCREENSHOT/Main%20Screen/Home.png",
      },
      {
        seed: 308,
        device: "mobile",
        title: "Find help on the map",
        body: "The built-in map shows nearby listings as the road moves. Pinch, tap, and the nearest mechanic or hotel answers back instantly.",
        image: "/projectsPhoto/driver/SCREENSHOT/Main%20Screen/Map.jpeg",
      },
      {
        seed: 309,
        device: "mobile",
        title: "The account tab",
        body: "A clean profile surface with your trips, saved places and preferences, always a thumb away from the driving screen.",
        image: "/projectsPhoto/driver/SCREENSHOT/Main%20Screen/Account.png",
      },
      {
        seed: 310,
        device: "mobile",
        chapter: "Admin Space",
        title: "The admin overview",
        body: "Operators land on a single control room: active users, service health and the day's stats read left to right in one glance.",
        image: "/projectsPhoto/driver/SCREENSHOT/Admin%20Space/ALL.png",
      },
      {
        seed: 311,
        device: "mobile",
        title: "Map with styled layers",
        body: "The admin map is fully stylable with custom layers, pins and zones to keep listings accurate as the city changes.",
        image: "/projectsPhoto/driver/SCREENSHOT/Admin%20Space/Map/Add_Style_Map.png",
      },
      {
        seed: 312,
        device: "mobile",
        title: "Service manager I",
        body: "Parking lots, hotels and mechanical workshops are approved and edited from one management screen. New listings go live immediately.",
        image:
          "/projectsPhoto/driver/SCREENSHOT/Admin%20Space/Services/Parking_Hotel_Mechanical.png",
      },
      {
        seed: 313,
        device: "mobile",
        title: "Service manager II",
        body: "Spare-parts shops, restaurants and truck-recovery providers get the same treatment. Every category supervised in the same flow.",
        image:
          "/projectsPhoto/driver/SCREENSHOT/Admin%20Space/Services/Pieces_Restaurant_Recovery-turck.png",
      },
      {
        seed: 314,
        device: "mobile",
        chapter: "Account & Settings",
        title: "Admin settings",
        body: "The admin role unlocks moderation controls: approvals, permissions and the tools the crew needs to keep the platform accurate.",
        image: "/projectsPhoto/driver/SCREENSHOT/Account%20and%20setting/Admin.png",
      },
      {
        seed: 315,
        device: "mobile",
        title: "User settings",
        body: "Driver preferences live here: language, vehicle profile and saved searches, tuned once and applied everywhere.",
        image: "/projectsPhoto/driver/SCREENSHOT/Account%20and%20setting/User.png",
      },
      {
        seed: 316,
        device: "mobile",
        title: "Guest settings",
        body: "Guests still get a useful experience. Browse listings and get help without an account, with a gentle nudge to sign in.",
        image: "/projectsPhoto/driver/SCREENSHOT/Account%20and%20setting/Guest.png",
      },
    ],
  },
,
,
{
    id: "devfest",
    n: "07",
    title: "DevFest Medea 23: Event Website",
    category: "Web Application",
    problem:
      "GDG Medea needed a modern, engaging website for their largest annual tech event with countdown, speakers, and schedule.",
    solution:
      "Built a sleek, dynamic website with a countdown, highlights from past events, speaker profiles, a clear time map of all sessions, and strong visual storytelling for the three-day festival.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    impact:
      "Served as the ultimate hub for developers, students, and professionals excited about technology and community growth.",
    live: "https://devfest23medea.vercel.app/",
    github: "https://github.com/saidseghirakram/finale_devfest_website",
    gradient: "linear-gradient(135deg,#2563eb 0%,#7c3aed 50%,#e9d8fd 100%)",
    cover: { device: "browser", seed: 15 },
    coverImage: "/projectsPhoto/devfest/1.png",
    meta: {
      role: "Lead Web Developer",
      year: "2023",
      client: "GDG Medea",
      platform: "Web",
    },
    showcase: [
      {
        seed: 601,
        device: "browser",
        title: "Countdown to kickoff",
        body: "A festival-scale hero tracks the days, hours and minutes until the event, building energy before the doors even open.",
        image: "/projectsPhoto/devfest/1.png",
      },
      {
        seed: 602,
        device: "browser",
        title: "Sessions that map the day",
        body: "The full schedule is a clear time-map: stage, speaker, topic and track are all legible at a single glance.",
        image: "/projectsPhoto/devfest/2.png",
      },
      {
        seed: 603,
        device: "browser",
        title: "Meet the speakers",
        body: "Speaker cards bring the community forward. Photo, session and socials in a card that begs for a tap.",
        image: "/projectsPhoto/devfest/3.png",
      },
      {
        seed: 604,
        device: "browser",
        title: "Highlights & the hub",
        body: "Past editions, clear CTAs and a sponsor rail close the loop. Register, follow, share. The festival keeps moving.",
        image: "/projectsPhoto/devfest/4.png",
      },
    ],
  },
,
,
{
    id: "trips",
    n: "08",
    title: "TRIPS FI BLADI: Travel Platform",
    category: "Web Application",
    problem:
      "Algeria lacked a dedicated platform promoting sustainable, responsible, and immersive tourism experiences across the country.",
    solution:
      "Created a full-featured travel agency platform with custom-made trips emphasizing eco-responsibility, cultural preservation, community support, a marketplace, library, and user-friendly contact system.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    impact:
      "Connects travelers with authentic local experiences while supporting artisans and preserving Algerian heritage.",
    live: "https://trips-fi-bladi.vercel.app/",
    gradient: "linear-gradient(135deg,#059669 0%,#7c3aed 100%)",
    cover: { device: "browser", seed: 14 },
    coverImage: "/projectsPhoto/tripsFiBladi/home%20page1.png",
    meta: {
      role: "Frontend Developer & Designer",
      year: "2024",
      client: "Tourism Agency",
      platform: "Web",
    },
    showcase: [
      {
        seed: 501,
        device: "browser",
        title: "The journey begins",
        body: "A full-bleed hero pairs bold Algerian landscape imagery with a trip search that feels more like an invitation than a form.",
        image: "/projectsPhoto/tripsFiBladi/Landing%20page.png",
      },
      {
        seed: 502,
        device: "browser",
        title: "Trips, built by hand",
        body: "Each custom trip is a story: itinerary, pace, host and impact are visible before you commit. Transparency is the design principle.",
        image: "/projectsPhoto/tripsFiBladi/sur%20mesure%20(1).png",
      },
      {
        seed: 503,
        device: "browser",
        title: "A marketplace for artisans",
        body: "Local makers sell directly on the platform with verified origins and the story behind every piece. Tourism income that stays in the community.",
        image: "/projectsPhoto/tripsFiBladi/home%20page2.png",
      },
      {
        seed: 504,
        device: "browser",
        title: "A library of the country",
        animated: true,
        body: "Guides, essays and maps about Algeria's regions live in a library that both informs and quietly sells the next trip.",
        image: "/projectsPhoto/tripsFiBladi/Historique%20&%20Culturel.png",
      },
      {
        seed: 505,
        device: "browser",
        title: "Book with a human touch",
        body: "A contact-first booking system keeps the agency close: ask a question, receive a real answer, then confirm with confidence.",
        image: "/projectsPhoto/tripsFiBladi/Desktop%20(Who%20are%20we).png",
      },
      {
        seed: 506,
        device: "browser",
        title: "Beautiful on the road",
        body: "The responsive layout keeps the storytelling intact from desktop to phone. Same trips, re-flowed for any screen.",
        image: "/projectsPhoto/tripsFiBladi/sur%20mesure.png",
      },
    ],
  },
,
,
{
    id: "athar",
    n: "09",
    title: "ATHAR: Tourism & Volunteering Platform",
    category: "Web Application",
    problem:
      "Traveling through Algeria is often reduced to sightseeing alone, missing the chance to connect with local communities and give something back while discovering the country.",
    solution:
      "Built a tourism and volunteering platform that pairs discovery of Algeria with meaningful volunteer opportunities: environmental initiatives, community projects, and cultural experiences, plus a touristic assistant and a full booking journey.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    impact:
      "2nd place at the 2025 Tourism Hackathon. Makes travel in Algeria more accessible, social, affordable, and impactful, one volunteering experience at a time.",
    live: "https://athar-jade.vercel.app/",
    github: "https://github.com/saidseghirakram/athar",
    gradient: "linear-gradient(135deg,#0f766e 0%,#7c3aed 100%)",
    cover: { device: "mobile", seed: 15 },
    coverImage: "/projectsPhoto/athar/home-page.png",
    meta: {
      role: "Product · UX & UI · Frontend Development",
      year: "2025",
      client: "2025 Tourism Hackathon",
      platform: "Web",
      award: "2nd Place, Travel Tourism Hackathon 2025",
    },
    capabilities: [
      "Discover volunteer opportunities",
      "Environmental initiatives",
      "Community engagement",
      "Explore Algerian destinations",
      "Touristic assistance",
      "Location-based experiences",
    ],
    showcase: [
      {
        seed: 601,
        device: "mobile",
        title: "Make a Difference While Exploring Algeria",
        body: "The landing page opens with a bold invitation: join meaningful volunteer programs in Algeria, help communities, protect nature, and discover a country full of beauty and heritage.",
        image: "/projectsPhoto/athar/home-page.png",
      },
      {
        seed: 603,
        device: "browser",
        title: "Impactful Plans: Volunteer Opportunities",
        body: "Each program is presented with its activity, location, dates, volunteer count, capacity, objective, and rating. From planting trees in the Aurès Mountains (4.8 stars, 14 of 20 volunteers) to coastal cleanups in Bejaïa and teaching English in the Sahara.",
        image: "/projectsPhoto/athar/plans&voulenterring.png",
      },
      {
        seed: 604,
        device: "browser",
        title: "Opportunity Details",
        body: "Diving into a single plan lays out everything a traveler needs to commit with confidence. The schedule, the team they'll work with, and the impact left behind.",
        image: "/projectsPhoto/athar/planDetails.png",
      },
      {
        seed: 605,
        device: "browser",
        title: "Volunteer Memories: Discover Algeria",
        body: "A map-led gallery of destinations from past experiences. Yemma Gouraya, Plage Aftis, Skikda, Médéa, Taghit, connecting the volunteering work with real places worth discovering.",
        image: "/projectsPhoto/athar/Map-page.png",
      },
      {
        seed: 606,
        device: "browser",
        title: "Get Your Touristic Assistant",
        body: "An AI-powered travel companion that guides users through their journey. Destinations, logistics, and local tips, ready whenever a volunteer or traveler needs help in real time.",
        image: "/projectsPhoto/athar/ai-services.png",
      },
    ],
  }

];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}
