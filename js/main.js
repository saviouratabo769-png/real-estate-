/* Shared demonstration listings power the homepage, search results and details page. */
const WHATSAPP_NUMBER = "2348000000000";

const properties = [
  {
    id: "lekki-duplex",
    title: "Four-bedroom detached duplex",
    type: "detached duplex",
    intent: "sale",
    location: "Lagos",
    areaName: "Lekki Phase 1",
    price: 250000000,
    priceLabel: "₦250,000,000",
    bedrooms: 4,
    bathrooms: 5,
    area: 320,
    areaLabel: "320 sqm",
    reference: "PP-LAG-001",
    listed: "2026-10-12",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1500&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "A spacious sample family home in the popular Lekki area. The illustrative listing features generous living spaces, contemporary finishes and room for entertaining. Property details, condition and availability should be independently confirmed.",
    features: ["En-suite bedrooms", "Fitted kitchen", "Family lounge", "Private garden", "Secure parking", "Water storage"],
    featured: true
  },
  {
    id: "wuse-apartment",
    title: "Three-bedroom apartment",
    type: "apartment",
    intent: "rent",
    location: "Abuja",
    areaName: "Wuse II",
    price: 12000000,
    priceLabel: "₦12,000,000",
    priceSuffix: "per year",
    bedrooms: 3,
    bathrooms: 3,
    area: 175,
    areaLabel: "175 sqm",
    reference: "PP-ABJ-002",
    listed: "2026-10-10",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "A bright sample apartment in Wuse II, with a practical layout for comfortable city living. This illustrative rental listing is provided to demonstrate the search and enquiry experience; rent, terms and availability are not live.",
    features: ["Three bedrooms", "Fitted kitchen", "Dedicated parking", "24-hour security", "Balcony", "Water supply"],
    featured: true
  },
  {
    id: "ajah-duplex",
    title: "Five-bedroom duplex with BQ",
    type: "detached duplex",
    intent: "sale",
    location: "Lagos",
    areaName: "Ajah",
    price: 180000000,
    priceLabel: "₦180,000,000",
    bedrooms: 5,
    bathrooms: 6,
    area: 410,
    areaLabel: "410 sqm",
    reference: "PP-LAG-003",
    listed: "2026-10-08",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "A generous sample duplex in Ajah, including a boys’ quarters (BQ) and space for a larger household. Details are fictional demonstration content and should not be relied upon as an active property offer.",
    features: ["Five en-suite bedrooms", "Boys’ quarters", "Two living rooms", "Fitted kitchen", "Gated compound", "Parking for four cars"],
    featured: true
  },
  {
    id: "lugbe-land",
    title: "Residential land in Lugbe",
    type: "land",
    intent: "sale",
    location: "Abuja",
    areaName: "Lugbe",
    price: 25000000,
    priceLabel: "₦25,000,000",
    bedrooms: 0,
    bathrooms: 0,
    area: 600,
    areaLabel: "600 sqm",
    reference: "PP-ABJ-004",
    listed: "2026-10-06",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1500&q=85",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "A sample residential land listing in Lugbe, Abuja. The plot size and price are for demonstration only; title, zoning, access and all legal details must be independently verified for any real transaction.",
    features: ["Residential use sample", "Approx. 600 sqm", "Road access", "Growing neighbourhood", "Illustrative listing", "Independent checks required"],
    featured: true
  },
  {
    id: "gwarinpa-family-home",
    title: "Four-bedroom family home",
    type: "detached duplex",
    intent: "rent",
    location: "Abuja",
    areaName: "Gwarinpa",
    price: 8500000,
    priceLabel: "₦8,500,000",
    priceSuffix: "per year",
    bedrooms: 4,
    bathrooms: 4,
    area: 280,
    areaLabel: "280 sqm",
    reference: "PP-ABJ-005",
    listed: "2026-10-04",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "This illustrative Gwarinpa rental home offers a family-friendly layout with multiple living spaces and a private outdoor area. All listed rental terms are sample information.",
    features: ["Four bedrooms", "Private outdoor space", "Fitted kitchen", "Guest parking", "Family lounge", "Demo rental listing"]
  },
  {
    id: "ph-commercial-space",
    title: "Modern commercial office suite",
    type: "commercial",
    intent: "rent",
    location: "Port Harcourt",
    areaName: "Peter Odili Road",
    price: 18000000,
    priceLabel: "₦18,000,000",
    priceSuffix: "per year",
    bedrooms: 0,
    bathrooms: 2,
    area: 240,
    areaLabel: "240 sqm",
    reference: "PP-PH-006",
    listed: "2026-10-02",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "A sample commercial office suite in Port Harcourt, with an open work area and meeting space. Availability, permitted use and rent are not verified and are for demonstration purposes only.",
    features: ["Open-plan workspace", "Meeting room", "Backup power sample", "Reception area", "Parking", "Illustrative rental"]
  },
  {
    id: "ibadan-apartment",
    title: "Two-bedroom city apartment",
    type: "apartment",
    intent: "sale",
    location: "Ibadan",
    areaName: "Jericho",
    price: 65000000,
    priceLabel: "₦65,000,000",
    bedrooms: 2,
    bathrooms: 2,
    area: 135,
    areaLabel: "135 sqm",
    reference: "PP-IB-007",
    listed: "2026-09-28",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "A sample two-bedroom apartment in Ibadan’s Jericho area, presented as a comfortable, low-maintenance home. Pricing and property information are fictional and must be verified.",
    features: ["Two bedrooms", "Open-plan living", "Fitted kitchen", "Balcony", "Secure entry", "Covered parking"]
  },
  {
    id: "enugu-land",
    title: "Residential plot near Independence Layout",
    type: "land",
    intent: "sale",
    location: "Enugu",
    areaName: "Independence Layout",
    price: 32000000,
    priceLabel: "₦32,000,000",
    bedrooms: 0,
    bathrooms: 0,
    area: 500,
    areaLabel: "500 sqm",
    reference: "PP-EN-008",
    listed: "2026-09-24",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1500&q=85",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "A sample residential plot in Enugu, located near Independence Layout. Plot boundaries, title, zoning and suitability are not established by this demonstration listing.",
    features: ["Approx. 500 sqm", "Residential sample", "Neighbourhood access", "Illustrative price", "Title checks essential", "Demo content"]
  },
  {
    id: "kano-townhouse",
    title: "Three-bedroom modern townhouse",
    type: "detached duplex",
    intent: "sale",
    location: "Kano",
    areaName: "Nassarawa GRA",
    price: 95000000,
    priceLabel: "₦95,000,000",
    bedrooms: 3,
    bathrooms: 4,
    area: 250,
    areaLabel: "250 sqm",
    reference: "PP-KN-009",
    listed: "2026-09-20",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
    ],
    description: "A sample three-bedroom townhouse in Nassarawa GRA, Kano. This fictional example illustrates property details and does not represent a verified home for sale.",
    features: ["Three bedrooms", "Private courtyard", "Modern kitchen", "Guest washroom", "Gated parking", "Sample listing"]
  }
];

const formatPrice = (property) => `${property.priceLabel}${property.priceSuffix ? ` <small>${escapeHTML(property.priceSuffix)}</small>` : ""}`;
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[character]);

function propertyBadge(property) {
  if (property.type === "land") return { label: "Land", className: "badge-land" };
  if (property.intent === "rent") return { label: "For Rent", className: "badge-rent" };
  return { label: "For Sale", className: "" };
}

function propertyCard(property) {
  const badge = propertyBadge(property);
  const features = [
    property.bedrooms > 0 ? `${property.bedrooms} beds` : "",
    property.bathrooms > 0 ? `${property.bathrooms} baths` : "",
    property.areaLabel
  ].filter(Boolean);
  return `<article class="property-card">
    <a class="property-card-image" href="property-details.html?id=${encodeURIComponent(property.id)}" aria-label="View details for ${escapeHTML(property.title)}">
      <img src="${escapeHTML(property.image)}" alt="${escapeHTML(property.title)} in ${escapeHTML(property.areaName)}, ${escapeHTML(property.location)}" loading="lazy">
      <span class="property-badge ${badge.className}">${badge.label}</span>
    </a>
    <div class="property-card-body">
      <p class="property-type-label">${escapeHTML(property.type)}</p>
      <h3>${escapeHTML(property.title)}</h3>
      <p class="property-location"><span aria-hidden="true">⌖</span>${escapeHTML(property.areaName)}, ${escapeHTML(property.location)}</p>
      <p class="property-price">${formatPrice(property)}${property.intent === "rent" && !property.priceSuffix ? " <small>per year</small>" : ""}</p>
      <div class="property-features">${features.map((feature) => `<span>${escapeHTML(feature)}</span>`).join("")}</div>
      <a class="button button-outline card-details-link" href="property-details.html?id=${encodeURIComponent(property.id)}">View Details <span aria-hidden="true">→</span></a>
    </div>
  </article>`;
}

function initFeaturedProperties() {
  const grid = document.querySelector("#featured-properties");
  if (!grid) return;
  grid.innerHTML = properties.filter((property) => property.featured).map(propertyCard).join("");
}

function initNavigation() {
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
    link.href = link.href.replace(/https:\/\/wa\.me\/[^/?]+/, `https://wa.me/${WHATSAPP_NUMBER}`);
  });
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !open);
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
      }
    });
  }
  const path = window.location.pathname.toLowerCase();
  const current = path.endsWith("properties.html") || path.endsWith("property-details.html") ? "properties"
    : path.endsWith("about.html") ? "about"
      : path.endsWith("contact.html") ? "contact" : "home";
  document.querySelector(`[data-nav="${current}"]`)?.setAttribute("aria-current", "page");
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}

function initHeroSearch() {
  const form = document.querySelector("#hero-search");
  if (!form) return;
  let intent = "sale";
  document.querySelectorAll("[data-search-intent]").forEach((tab) => {
    tab.addEventListener("click", () => {
      intent = tab.dataset.searchIntent;
      document.querySelectorAll("[data-search-intent]").forEach((otherTab) => {
        const active = otherTab === tab;
        otherTab.classList.toggle("is-active", active);
        otherTab.setAttribute("aria-selected", String(active));
      });
      const type = form.elements.namedItem("type");
      if (intent === "land") type.value = "land";
      else if (intent === "commercial") type.value = "commercial";
      else if (type.value === "land" || type.value === "commercial") type.value = "";
    });
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = new URLSearchParams();
    const location = form.elements.namedItem("location").value;
    const type = form.elements.namedItem("type").value;
    const priceRange = form.elements.namedItem("price").value;
    if (location) query.set("location", location);
    if (intent === "land" || intent === "commercial") query.set("type", intent);
    else query.set("intent", intent);
    if (type && intent !== "land" && intent !== "commercial") query.set("type", type);
    if (priceRange) {
      const [minimum, maximum] = priceRange.split("-");
      if (minimum) query.set("min", minimum);
      if (maximum) query.set("max", maximum);
    }
    window.location.href = `properties.html?${query.toString()}`;
  });
}

function initListingPage() {
  const grid = document.querySelector("#all-properties");
  if (!grid) return;
  const controls = {
    location: document.querySelector("#filter-location"),
    intent: document.querySelector("#filter-intent"),
    type: document.querySelector("#filter-type"),
    min: document.querySelector("#filter-min-price"),
    max: document.querySelector("#filter-max-price"),
    bedrooms: document.querySelector("#filter-bedrooms"),
    sort: document.querySelector("#sort-properties"),
    keyword: document.querySelector("#listing-search [name='keyword']")
  };
  const count = document.querySelector("#result-count");
  const loadMore = document.querySelector("#load-more");
  const loadMoreWrap = loadMore?.parentElement;
  const filterPanel = document.querySelector("#filter-panel");
  let visibleCount = 6;
  const params = new URLSearchParams(window.location.search);
  const locationParam = params.get("location");
  const typeParam = params.get("type");
  const intentParam = params.get("intent");
  if (locationParam && [...controls.location.options].some((option) => option.value.toLowerCase() === locationParam.toLowerCase())) controls.location.value = [...controls.location.options].find((option) => option.value.toLowerCase() === locationParam.toLowerCase()).value;
  if (typeParam && [...controls.type.options].some((option) => option.value.toLowerCase() === typeParam.toLowerCase())) controls.type.value = [...controls.type.options].find((option) => option.value.toLowerCase() === typeParam.toLowerCase()).value;
  if (intentParam && ["sale", "rent"].includes(intentParam)) controls.intent.value = intentParam;
  if (intentParam === "land" || intentParam === "commercial") controls.type.value = intentParam;
  if (params.has("min")) controls.min.value = params.get("min");
  if (params.has("max")) controls.max.value = params.get("max");

  function render() {
    const location = controls.location.value.toLowerCase();
    const type = controls.type.value.toLowerCase();
    const intent = controls.intent.value;
    const min = controls.min.value === "" ? null : Number(controls.min.value);
    const max = controls.max.value === "" ? null : Number(controls.max.value);
    const bedrooms = controls.bedrooms.value === "" ? 0 : Number(controls.bedrooms.value);
    const keyword = controls.keyword.value.trim().toLowerCase();
    let matches = properties.filter((property) => {
      const matchesIntent = intent === "land" ? property.type === "land"
        : intent === "commercial" ? property.type === "commercial"
          : !intent || property.intent === intent;
      const searchable = `${property.title} ${property.location} ${property.areaName} ${property.type}`.toLowerCase();
      return (!location || property.location.toLowerCase() === location)
        && matchesIntent
        && (!type || property.type === type)
        && (min === null || property.price >= min)
        && (max === null || property.price <= max)
        && (bedrooms === 0 || property.bedrooms >= bedrooms)
        && (!keyword || searchable.includes(keyword));
    });
    if (controls.sort.value === "price-asc") matches.sort((a, b) => a.price - b.price);
    else if (controls.sort.value === "price-desc") matches.sort((a, b) => b.price - a.price);
    else matches.sort((a, b) => b.listed.localeCompare(a.listed));
    count.textContent = `${matches.length} ${matches.length === 1 ? "property" : "properties"} found`;
    if (matches.length === 0) {
      grid.innerHTML = `<div class="empty-state"><h2>No matching properties</h2><p>Try changing your search or clearing some filters to see more sample listings.</p><button class="button button-navy" type="button" data-empty-clear>Clear filters</button></div>`;
      loadMoreWrap.hidden = true;
      grid.querySelector("[data-empty-clear]").addEventListener("click", clearFilters);
      return;
    }
    grid.innerHTML = matches.slice(0, visibleCount).map(propertyCard).join("");
    loadMoreWrap.hidden = visibleCount >= matches.length;
  }

  function clearFilters() {
    document.querySelector("#listing-search").reset();
    controls.location.value = "";
    controls.intent.value = "";
    controls.type.value = "";
    controls.min.value = "";
    controls.max.value = "";
    controls.bedrooms.value = "";
    controls.sort.value = "newest";
    visibleCount = 6;
    render();
  }
  [controls.location, controls.intent, controls.type, controls.min, controls.max, controls.bedrooms, controls.sort].forEach((control) => {
    control.addEventListener("change", () => {
      visibleCount = 6;
      render();
    });
  });
  controls.keyword.addEventListener("input", () => {
    visibleCount = 6;
    render();
  });
  document.querySelector("#listing-search").addEventListener("submit", (event) => {
    event.preventDefault();
    visibleCount = 6;
    render();
  });
  document.querySelector("#clear-filters").addEventListener("click", clearFilters);
  document.querySelector("#apply-filters").addEventListener("click", () => {
    filterPanel.classList.remove("is-open");
    document.querySelector("#filter-toggle").setAttribute("aria-expanded", "false");
    render();
  });
  document.querySelector("#filter-toggle").addEventListener("click", (event) => {
    const open = filterPanel.classList.toggle("is-open");
    event.currentTarget.setAttribute("aria-expanded", String(open));
    event.currentTarget.firstChild.textContent = open ? "Hide filters " : "Show filters ";
  });
  loadMore.addEventListener("click", () => {
    visibleCount += 3;
    render();
  });
  render();
}

function initDetailsPage() {
  const root = document.querySelector("#property-detail-content");
  if (!root) return;
  const property = properties.find((item) => item.id === new URLSearchParams(window.location.search).get("id"));
  if (!property) {
    root.innerHTML = `<div class="not-found"><p class="eyebrow">PROPERTY NOT FOUND</p><h1>We couldn’t find that listing.</h1><p>The link may be incomplete, or this sample listing may no longer be available. Browse all properties to explore the current demonstration listings.</p><a class="button button-navy" href="properties.html">Browse All Properties <span aria-hidden="true">→</span></a></div>`;
    return;
  }
  document.title = `${property.title} in ${property.areaName} | Prime Properties`;
  const badge = propertyBadge(property);
  const images = property.gallery;
  const features = property.bedrooms > 0 ? [`${property.bedrooms} bedrooms`, `${property.bathrooms} bathrooms`, property.areaLabel] : [property.areaLabel];
  const whatsappText = encodeURIComponent(`Hello Prime Properties, I am interested in ${property.title} in ${property.areaName}, ${property.location} (${property.reference}).`);
  const similar = properties.filter((item) => item.id !== property.id && (item.location === property.location || item.type === property.type)).slice(0, 3);
  root.innerHTML = `
    <div class="detail-topline"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span aria-hidden="true">/</span><a href="properties.html">Properties</a><span aria-hidden="true">/</span><span aria-current="page">${escapeHTML(property.title)}</span></nav><span class="detail-ref">Demo reference: ${escapeHTML(property.reference)}</span></div>
    <div class="gallery-main" id="gallery-main">
      <button type="button" class="gallery-current" aria-label="Show selected property image"><img src="${escapeHTML(images[0])}" alt="${escapeHTML(property.title)} — image 1"></button>
      <div class="gallery-side"><button type="button" data-gallery-index="1" aria-label="View property image 2"><img src="${escapeHTML(images[1])}" alt="${escapeHTML(property.title)} — image 2"></button><button type="button" data-gallery-index="2" aria-label="View property image 3"><img src="${escapeHTML(images[2])}" alt="${escapeHTML(property.title)} — image 3"></button></div>
    </div>
    <div class="gallery-thumbnails" aria-label="Property photo gallery">${images.map((image, index) => `<button type="button" data-gallery-index="${index}" aria-label="Show property image ${index + 1}" aria-pressed="${index === 0}"><img src="${escapeHTML(image)}" alt="" loading="lazy"></button>`).join("")}</div>
    <div class="detail-layout">
      <article class="detail-copy">
        <div class="detail-title-row"><div><span class="property-badge ${badge.className}">${badge.label}</span><h1>${escapeHTML(property.title)}</h1><p class="detail-location">⌖ ${escapeHTML(property.areaName)}, ${escapeHTML(property.location)}, Nigeria</p></div><div class="detail-price">${formatPrice(property)}${property.intent === "rent" && !property.priceSuffix ? "<small>per year</small>" : ""}</div></div>
        <div class="detail-meta">${features.map((feature) => `<span>${escapeHTML(feature)}</span>`).join("")}<span>${escapeHTML(property.type)}</span></div>
        <h2>About this property</h2><p>${escapeHTML(property.description)}</p>
        <h2>Features and amenities</h2><ul class="amenity-list">${property.features.map((feature) => `<li>${escapeHTML(feature)}</li>`).join("")}</ul>
        <p class="demo-note">This is a sample listing for website demonstration only. Property details, price, availability, legal status and suitability have not been verified.</p>
      </article>
      <aside class="agent-card"><p class="eyebrow">PROPERTY ENQUIRY</p><h2>Interested in this property?</h2><p>Contact our sample team about this demo listing.</p><div class="agent-profile"><span class="agent-avatar" aria-hidden="true">PP</span><span><strong>Prime Properties Team</strong><small>Sample agent contact</small></span></div><a class="button button-orange" href="https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}" target="_blank" rel="noopener">Enquire on WhatsApp <span aria-hidden="true">↗</span></a><a class="button button-outline" href="tel:+2348000000000">Call demo number</a>
        <form class="stacked-form enquiry-form" id="enquiry-form" novalidate><h2>Send an enquiry</h2><label class="field-label">Your name<input name="name" autocomplete="name" required minlength="2"></label><label class="field-label">Email address<input name="email" type="email" autocomplete="email" placeholder="you@example.com"></label><label class="field-label">Phone number<input name="phone" type="tel" autocomplete="tel" placeholder="+234 800 000 0000"></label><label class="field-label">Message<textarea name="message" rows="4" required minlength="10">I’m interested in ${escapeHTML(property.title)} in ${escapeHTML(property.areaName)}.</textarea></label><button class="button button-navy" type="submit">Submit Enquiry</button><p class="form-message" role="status" aria-live="polite"></p></form>
      </aside>
    </div>
    ${similar.length ? `<section class="similar-section"><h2>Similar properties</h2><div class="property-grid">${similar.map(propertyCard).join("")}</div></section>` : ""}
  `;
  const mainImage = root.querySelector(".gallery-current img");
  root.querySelectorAll("[data-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.galleryIndex);
      mainImage.src = images[index];
      mainImage.alt = `${property.title} — image ${index + 1}`;
      root.querySelectorAll(".gallery-thumbnails button").forEach((thumbnail) => {
        thumbnail.setAttribute("aria-pressed", String(Number(thumbnail.dataset.galleryIndex) === index));
      });
    });
  });
  root.querySelector(".gallery-current").addEventListener("click", () => {
    const selected = Number(root.querySelector('.gallery-thumbnails button[aria-pressed="true"]')?.dataset.galleryIndex || 0);
    const next = (selected + 1) % images.length;
    root.querySelector(`.gallery-thumbnails button[data-gallery-index="${next}"]`).click();
  });
  initDemoForm(root.querySelector("#enquiry-form"), { requireContact: true, kind: "property enquiry" });
}

function initDemoForm(form, options = {}) {
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.querySelector(".form-message");
    message.textContent = "";
    message.classList.remove("is-error");
    const email = form.elements.namedItem("email");
    const phone = form.elements.namedItem("phone");
    if (options.requireContact && !email.value.trim() && !phone.value.trim()) {
      message.textContent = "Please provide an email address or phone number so the team could contact you.";
      message.classList.add("is-error");
      (email || phone).focus();
      return;
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    message.textContent = `Thanks — your ${options.kind || "message"} passed demo validation. It has not been sent to a server or stored.`;
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initHeroSearch();
  initFeaturedProperties();
  initListingPage();
  initDetailsPage();
  initDemoForm(document.querySelector("#contact-form"), { requireContact: true, kind: "enquiry" });
});
