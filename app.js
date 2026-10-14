const products = [
  {
    id: "shirt", name: "Everyday Cotton Shirt", category: "Clothes", price: 1499, originalPrice: 1999, rating: 4.8, reviews: 218, tag: "Bestseller",
    image: "photo-1598033129183-c4f50c736f10", alt: "Relaxed white cotton shirt", colors: ["Ivory", "Sage", "Rose"], sizes: ["S", "M", "L", "XL"],
    description: "An easy-to-wear cotton shirt with a relaxed fit, soft feel and a timeless silhouette."
  },
  {
    id: "sneakers", name: "Everyday Low-Top Sneakers", category: "Shoes", price: 2499, originalPrice: 3299, rating: 4.7, reviews: 164, tag: "25% off",
    image: "photo-1542291026-7eec264c27ff", alt: "Bright red everyday sneakers", colors: ["Red", "White", "Black"], sizes: ["6", "7", "8", "9", "10"],
    description: "Comfortable low-top sneakers with a cushioned sole for everyday walks and weekends."
  },
  {
    id: "headphones", name: "Studio Wireless Headphones", category: "Electronics", price: 3999, originalPrice: 5499, rating: 4.9, reviews: 532, tag: "Top rated",
    image: "photo-1505740420928-5e560c06d30e", alt: "Wireless over-ear headphones", colors: ["Black", "Sand"],
    description: "Clear, balanced sound in a comfortable wireless design. Includes a charging cable and carry pouch."
  },
  {
    id: "vase", name: "Soft Form Ceramic Vase", category: "Home", price: 1299, originalPrice: 1699, rating: 4.6, reviews: 87, tag: "",
    image: "photo-1578500494198-246f612d3b3d", alt: "Sculptural ceramic vase", colors: ["Sand", "Chalk"],
    description: "A sculptural ceramic vase that adds a warm, simple accent to shelves, tables and windowsills."
  },
  {
    id: "tote", name: "Canvas Everyday Tote", category: "Accessories", price: 799, originalPrice: 999, rating: 4.7, reviews: 103, tag: "Made to last",
    image: "photo-1590874103328-eac38a683ce7", alt: "Natural canvas everyday tote", colors: ["Natural", "Olive"],
    description: "A sturdy, roomy canvas tote for errands, work and all the things you carry through the day."
  },
  {
    id: "skincare", name: "Daily Glow Skincare Set", category: "Beauty", price: 1899, originalPrice: 2499, rating: 4.8, reviews: 196, tag: "20% off",
    image: "photo-1608248543803-ba4f8c70ae0b", alt: "Skincare bottles and beauty products", colors: [],
    description: "A simple daily routine set with gentle, hydrating essentials for a fresh, comfortable feel."
  },
  {
    id: "knit", name: "Weekend Soft Knit", category: "Clothes", price: 2199, originalPrice: 2799, rating: 4.6, reviews: 91, tag: "New",
    image: "photo-1576566588028-4147f3842f27", alt: "Soft neutral knit sweater", colors: ["Oat", "Charcoal"], sizes: ["S", "M", "L", "XL"],
    description: "A soft, versatile knit made for layering on cool mornings and relaxed evenings."
  },
  {
    id: "watch", name: "Minimal Everyday Watch", category: "Accessories", price: 2799, originalPrice: 3599, rating: 4.5, reviews: 72, tag: "",
    image: "photo-1523275335684-37898b6baf30", alt: "Minimal wristwatch", colors: ["Silver", "Gold"],
    description: "A clean, easy-to-style everyday watch with a comfortable strap and a clear dial."
  },
  {
    id: "speaker", name: "Portable Bluetooth Speaker", category: "Electronics", price: 2299, originalPrice: 2999, rating: 4.7, reviews: 243, tag: "Bestseller",
    image: "photo-1608043152269-423dbba4e7e1", alt: "Portable wireless speaker", colors: ["Black", "Blue"],
    description: "A compact Bluetooth speaker for your desk, kitchen or weekend plans, with easy wireless pairing."
  },
  {
    id: "lamp", name: "Sculpted Table Lamp", category: "Home", price: 3299, originalPrice: 4199, rating: 4.6, reviews: 56, tag: "",
    image: "photo-1507473885765-e6ed057f782c", alt: "Modern table lamp", colors: ["Cream", "Black"],
    description: "A softly sculpted table lamp that brings a warm glow to bedside tables and reading corners."
  },
  {
    id: "sunglasses", name: "Classic Everyday Sunglasses", category: "Accessories", price: 1199, originalPrice: 1599, rating: 4.4, reviews: 61, tag: "25% off",
    image: "photo-1511499767150-a48a237f0083", alt: "Classic sunglasses", colors: ["Tortoise", "Black"],
    description: "A lightweight classic frame designed to finish off everyday outfits with ease."
  },
  {
    id: "candle", name: "Calm Evening Candle", category: "Home", price: 699, originalPrice: 899, rating: 4.8, reviews: 132, tag: "",
    image: "photo-1603006905003-be475563bc59", alt: "Minimal candle for a quiet evening", colors: [],
    description: "A gentle, warm-scented candle for slow evenings, quiet corners and thoughtful gifting."
  },
  {
    id: "phone", name: "Nova 5G Smartphone", category: "Mobiles", price: 18999, originalPrice: 22999, rating: 4.7, reviews: 418, tag: "17% off",
    image: "photo-1511707171634-5f897ff02aa9", alt: "Modern smartphone", colors: ["Midnight", "Silver"],
    description: "A responsive 5G smartphone with a bright display, all-day battery and ample room for your photos and apps."
  },
  {
    id: "kettle", name: "Quick-Boil Electric Kettle", category: "Appliances", price: 1799, originalPrice: 2299, rating: 4.6, reviews: 147, tag: "",
    image: "photo-1608354580875-30bd4168b351", alt: "Modern electric kettle", colors: ["Steel", "Black"],
    description: "A quick-boil kitchen essential with a comfortable handle and an easy-to-clean stainless interior."
  },
  {
    id: "toy", name: "Wooden Building Blocks", category: "Toys & Baby", price: 899, originalPrice: 1199, rating: 4.8, reviews: 76, tag: "Family pick",
    image: "photo-1599623560574-39d485900c95", alt: "Colourful children's building blocks", colors: [],
    description: "A colourful set of smooth wooden blocks for open-ended building, play and learning."
  },
  {
    id: "snack", name: "Everyday Wellness Box", category: "Food & Health", price: 649, originalPrice: 799, rating: 4.5, reviews: 89, tag: "",
    image: "photo-1490645935967-10de6ba17061", alt: "Fresh healthy food ingredients", colors: [],
    description: "A handy selection of feel-good pantry favourites for a little boost to your everyday routine."
  },
  {
    id: "car-mount", name: "Magnetic Car Phone Mount", category: "Auto Accessories", price: 599, originalPrice: 799, rating: 4.4, reviews: 113, tag: "",
    image: "photo-1503376780353-7e6692767b70", alt: "Modern car interior", colors: ["Black"],
    description: "A compact, adjustable dashboard mount that keeps your phone visible and within reach while parked."
  },
  {
    id: "yoga-mat", name: "Comfort Grip Yoga Mat", category: "Sports & Fitness", price: 1299, originalPrice: 1699, rating: 4.7, reviews: 201, tag: "Popular",
    image: "photo-1544367567-0f2fcb009e0b", alt: "Yoga and wellness practice", colors: ["Sage", "Blue"],
    description: "A cushioned, grippy mat for stretching, yoga and at-home workouts."
  },
  {
    id: "chair", name: "Modern Accent Chair", category: "Furniture", price: 8499, originalPrice: 9999, rating: 4.6, reviews: 38, tag: "15% off",
    image: "photo-1503602642458-232111445657", alt: "Modern accent chair", colors: ["Natural", "Black"],
    description: "A thoughtfully shaped accent chair that adds a comfortable seat to a reading nook or living room."
  },
  {
    id: "book", name: "The Little Book of Slow Days", category: "Books", price: 399, originalPrice: 499, rating: 4.8, reviews: 94, tag: "Reader favourite",
    image: "photo-1544947950-fa07a98d237f", alt: "A book open for reading", colors: [],
    description: "A feel-good collection of short reflections and practical ideas for making a little more room in your day."
  },
  {
    id: "scooter-helmet", name: "City Ride Helmet", category: "2 Wheelers", price: 1599, originalPrice: 1999, rating: 4.7, reviews: 127, tag: "20% off",
    image: "photo-1558981806-ec527fa84c39", alt: "Motorcycle and riding gear", colors: ["Black", "White"],
    description: "A lightweight, everyday helmet with a comfortable fit for city rides. Choose the right fit before riding."
  }
];

const storageKeys = {
  cart: "forma-cart",
  wishlist: "forma-wishlist",
  profile: "forma-profile",
  orders: "forma-orders"
};

const productGrid = document.getElementById("product-grid");
const cartCount = document.getElementById("cart-count");
const cartButton = document.getElementById("cart-button");
const toast = document.getElementById("toast");
const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
let cartItems = loadStored(storageKeys.cart, []);
let wishlist = loadStored(storageKeys.wishlist, []);
let orders = loadStored(storageKeys.orders, []);
let profile = loadStored(storageKeys.profile, { name: "", email: "", phone: "", address: "", city: "", pincode: "" });
let activeFilter = "All";
let searchTerm = "";
let toastTimer;
let selectedProductId = null;

function loadStored(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    console.error(`Could not load ${key} from browser storage.`, error);
    return fallback;
  }
}

function saveStored(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Could not save ${key} to browser storage.`, error);
    showToast("Browser storage is unavailable. Your changes may not be saved.");
    return false;
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function getProduct(id) {
  return products.find((product) => product.id === id);
}

function imageUrl(product, width = 800) {
  return `https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=${width}&q=82`;
}

function discountPercent(product) {
  return Math.round((1 - product.price / product.originalPrice) * 100);
}

function totalCartQuantity() {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

function cartSubtotal() {
  return cartItems.reduce((total, item) => {
    const product = getProduct(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function syncCartCount() {
  const count = totalCartQuantity();
  cartCount.textContent = String(count);
  cartButton.setAttribute("aria-label", `Shopping cart, ${count} ${count === 1 ? "item" : "items"}`);
}

function addToCart(id, options = {}) {
  const product = getProduct(id);
  if (!product) return;
  const size = options.size || product.sizes?.[0] || "";
  const color = options.color || product.colors[0] || "";
  const existing = cartItems.find((item) => item.id === id && item.size === size && item.color === color);
  if (existing) existing.quantity += 1;
  else cartItems.push({ id, size, color, quantity: 1 });
  saveStored(storageKeys.cart, cartItems);
  syncCartCount();
  showToast(`${product.name} added to your cart`);
}

function updateFilterButtons() {
  document.querySelectorAll(".filter-button, .quick-category").forEach((button) => {
    const selected = button.dataset.filter === activeFilter;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function renderProducts() {
  const sortBy = document.getElementById("sort-products").value;
  const visibleProducts = products.filter((product) => {
    const matchesCategory = activeFilter === "All" || product.category === activeFilter;
    const matchesSearch = `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  if (sortBy === "price-low") visibleProducts.sort((a, b) => a.price - b.price);
  if (sortBy === "price-high") visibleProducts.sort((a, b) => b.price - a.price);
  if (sortBy === "rating") visibleProducts.sort((a, b) => b.rating - a.rating);
  if (sortBy === "discount") visibleProducts.sort((a, b) => discountPercent(b) - discountPercent(a));

  document.getElementById("result-count").textContent = `${visibleProducts.length} products`;
  if (visibleProducts.length === 0) {
    productGrid.innerHTML = '<p class="empty-state">No products found. Try another search or category.</p>';
    return;
  }

  productGrid.innerHTML = visibleProducts.map((product) => {
    const saved = wishlist.includes(product.id);
    return `
      <article class="product-card" data-product-card="${product.id}" tabindex="0" aria-label="View ${escapeHTML(product.name)} details">
        <div class="product-image">
          <img src="${imageUrl(product)}" alt="${escapeHTML(product.alt)}" loading="lazy">
          <span class="product-tag">${escapeHTML(product.tag || `${discountPercent(product)}% off`)}</span>
          <button class="wishlist" type="button" aria-label="${saved ? "Remove from" : "Add to"} wishlist: ${escapeHTML(product.name)}" aria-pressed="${saved}" data-wishlist="${product.id}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.4Z"/></svg>
          </button>
          <button class="add-button" type="button" data-add="${product.id}">Add to cart · ${currency.format(product.price)}</button>
        </div>
        <div class="product-info">
          <div>
            <p class="product-name">${escapeHTML(product.name)}</p>
            <p class="product-rating"><span aria-label="${product.rating} out of 5 stars">★ ${product.rating}</span> <span>(${product.reviews})</span></p>
          </div>
          <div class="product-pricing"><strong>${currency.format(product.price)}</strong><del>${currency.format(product.originalPrice)}</del></div>
        </div>
      </article>`;
  }).join("");
}

function showDialog(dialog) {
  if (!dialog.open) dialog.showModal();
}

function closeDialog(dialog) {
  if (dialog.open) dialog.close();
}

function renderProductDetail(productId) {
  const product = getProduct(productId);
  if (!product) return;
  selectedProductId = product.id;
  const colorOptions = product.colors.length
    ? `<label>Colour<select id="detail-color">${product.colors.map((color) => `<option value="${escapeHTML(color)}">${escapeHTML(color)}</option>`).join("")}</select></label>`
    : "";
  const sizeOptions = product.sizes?.length
    ? `<label>Size<select id="detail-size">${product.sizes.map((size) => `<option value="${escapeHTML(size)}">${escapeHTML(size)}</option>`).join("")}</select></label>`
    : "";
  document.getElementById("product-detail").innerHTML = `
    <div class="detail-layout">
      <div class="detail-image"><img src="${imageUrl(product, 1000)}" alt="${escapeHTML(product.alt)}"></div>
      <div class="detail-copy">
        <p class="eyebrow">${escapeHTML(product.category)} · ${product.rating} ★ (${product.reviews} reviews)</p>
        <h2 id="detail-name">${escapeHTML(product.name)}</h2>
        <p class="detail-price"><strong>${currency.format(product.price)}</strong><del>${currency.format(product.originalPrice)}</del><span>${discountPercent(product)}% off</span></p>
        <p class="detail-description">${escapeHTML(product.description)}</p>
        <div class="variant-row">${colorOptions}${sizeOptions}</div>
        <div class="detail-actions">
          <button class="button-dark" type="button" data-detail-add>Add to cart</button>
          <button class="button-light" type="button" data-buy-now>Buy now</button>
        </div>
        <p class="delivery-note">Free delivery on orders over ₹2,000 · Easy 7-day returns</p>
      </div>
    </div>`;
  showDialog(document.getElementById("product-dialog"));
}

function renderCart() {
  const content = document.getElementById("cart-content");
  if (cartItems.length === 0) {
    content.innerHTML = '<p class="eyebrow">Your shopping bag</p><h2 id="cart-heading">Your cart is empty</h2><p class="dialog-intro">Browse popular products and find something you love.</p><button class="button-dark" type="button" data-close-dialog>Continue shopping</button>';
    return;
  }
  const lines = cartItems.map((item) => {
    const product = getProduct(item.id);
    if (!product) return "";
    return `
      <article class="cart-line">
        <img src="${imageUrl(product, 250)}" alt="${escapeHTML(product.alt)}">
        <div class="cart-line-info">
          <h3>${escapeHTML(product.name)}</h3>
          <p>${[item.color, item.size].filter(Boolean).map(escapeHTML).join(" · ")}</p>
          <strong>${currency.format(product.price)}</strong>
          <div class="quantity-control" aria-label="Quantity">
            <button type="button" data-quantity="-1" data-id="${product.id}" data-size="${escapeHTML(item.size)}" data-color="${escapeHTML(item.color)}" aria-label="Decrease quantity">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-quantity="1" data-id="${product.id}" data-size="${escapeHTML(item.size)}" data-color="${escapeHTML(item.color)}" aria-label="Increase quantity">+</button>
            <button type="button" class="remove-button" data-remove="${product.id}" data-size="${escapeHTML(item.size)}" data-color="${escapeHTML(item.color)}">Remove</button>
          </div>
        </div>
        <strong>${currency.format(product.price * item.quantity)}</strong>
      </article>`;
  }).join("");
  const subtotal = cartSubtotal();
  content.innerHTML = `
    <p class="eyebrow">Ready when you are</p><h2 id="cart-heading">Your shopping cart</h2>
    <div class="cart-lines">${lines}</div>
    <div class="cart-total"><span>Subtotal</span><strong>${currency.format(subtotal)}</strong></div>
    <p class="delivery-note">${subtotal >= 2000 ? "Your order qualifies for free delivery." : `Add ${currency.format(2000 - subtotal)} more for free delivery.`}</p>
    <button class="button-dark checkout-button" type="button" data-checkout>Continue to checkout <span>→</span></button>`;
}

function renderCheckout() {
  const address = profile;
  document.getElementById("checkout-content").innerHTML = `
    <p class="eyebrow">Almost there</p><h2 id="checkout-heading">Delivery & payment</h2>
    <form id="checkout-form">
      <fieldset class="checkout-fieldset">
        <legend>Delivery address</legend>
        <div class="form-grid">
          <label>Full name<input name="name" autocomplete="name" value="${escapeHTML(address.name || "")}" required></label>
          <label>Email address<input name="email" type="email" autocomplete="email" value="${escapeHTML(address.email || "")}" required></label>
          <label>Phone number<input name="phone" type="tel" autocomplete="tel" value="${escapeHTML(address.phone || "")}" required></label>
          <label class="form-wide">Street address<input name="address" autocomplete="street-address" value="${escapeHTML(address.address || "")}" required></label>
          <label>City<input name="city" autocomplete="address-level2" value="${escapeHTML(address.city || "")}" required></label>
          <label>PIN code<input name="pincode" inputmode="numeric" pattern="[0-9]{6}" maxlength="6" autocomplete="postal-code" value="${escapeHTML(address.pincode || "")}" required></label>
        </div>
      </fieldset>
      <fieldset class="checkout-fieldset">
        <legend>Payment option</legend>
        <label class="payment-option"><input type="radio" name="payment" value="Cash on delivery" checked> Cash on delivery</label>
        <label class="payment-option"><input type="radio" name="payment" value="UPI (demo)"> UPI (demo selection)</label>
        <label class="payment-option"><input type="radio" name="payment" value="Card (demo)"> Card (demo selection)</label>
        <p class="demo-note">Demo checkout only. No payment details are collected and no real payment is taken.</p>
      </fieldset>
      <div class="cart-total"><span>Order total</span><strong>${currency.format(cartSubtotal())}</strong></div>
      <button class="button-dark checkout-button" type="submit">Place order · ${currency.format(cartSubtotal())}</button>
    </form>`;
}

function renderOrderCard(order) {
  const lineSummary = order.items.map((item) => `${item.name} × ${item.quantity}`).join(", ");
  return `
    <article class="order-card">
      <div class="order-card-head"><div><p class="eyebrow">Order ${escapeHTML(order.id)}</p><h3>${escapeHTML(order.status)}</h3></div><strong>${currency.format(order.total)}</strong></div>
      <p>${escapeHTML(lineSummary)}</p>
      <p class="order-meta">Placed ${escapeHTML(order.date)} · ${escapeHTML(order.payment)}</p>
      <button class="text-link" type="button" data-track-order="${escapeHTML(order.id)}">Track order →</button>
    </article>`;
}

function renderOrders() {
  const content = document.getElementById("account-content");
  content.innerHTML = `
    <p class="eyebrow">Your shopping history</p><h2 id="account-heading">My orders</h2>
    ${orders.length ? [...orders].reverse().map(renderOrderCard).join("") : '<p class="dialog-intro">You have no orders yet. Your placed demo orders will appear here.</p><button class="button-dark" type="button" data-close-dialog>Explore products</button>'}`;
}

function renderProfile() {
  const savedProducts = wishlist.map(getProduct).filter(Boolean);
  const content = document.getElementById("account-content");
  content.innerHTML = `
    <p class="eyebrow">Your details, all in one place</p><h2 id="account-heading">My profile</h2>
    <form class="profile-form" id="profile-form">
      <label>Full name<input name="name" autocomplete="name" value="${escapeHTML(profile.name || "")}" required></label>
      <label>Email address<input name="email" type="email" autocomplete="email" value="${escapeHTML(profile.email || "")}" required></label>
      <label>Phone number<input name="phone" type="tel" autocomplete="tel" value="${escapeHTML(profile.phone || "")}"></label>
      <label>Delivery address<input name="address" autocomplete="street-address" value="${escapeHTML(profile.address || "")}"></label>
      <div class="form-grid"><label>City<input name="city" value="${escapeHTML(profile.city || "")}"></label><label>PIN code<input name="pincode" inputmode="numeric" pattern="[0-9]{6}" maxlength="6" value="${escapeHTML(profile.pincode || "")}"></label></div>
      <button class="button-dark" type="submit">Save profile</button>
    </form>
    <div class="account-subheading"><h3>Saved addresses</h3><p>${profile.address ? `${escapeHTML(profile.address)}, ${escapeHTML(profile.city || "")} ${escapeHTML(profile.pincode || "")}` : "Save your delivery details above to keep an address handy."}</p></div>
    <div class="account-subheading"><h3>My wishlist (${savedProducts.length})</h3>
      ${savedProducts.length ? `<div class="saved-list">${savedProducts.map((product) => `<div class="saved-item"><img src="${imageUrl(product, 120)}" alt=""><span>${escapeHTML(product.name)} · ${currency.format(product.price)}</span><button type="button" data-add="${product.id}">Add to cart</button></div>`).join("")}</div>` : "<p>Your saved products will appear here.</p>"}
    </div>`;
}

function renderWishlist() {
  const savedProducts = wishlist.map(getProduct).filter(Boolean);
  document.getElementById("account-content").innerHTML = `
    <p class="eyebrow">Your saved finds</p><h2 id="account-heading">My wishlist</h2>
    ${savedProducts.length
      ? `<div class="saved-list">${savedProducts.map((product) => `<div class="saved-item"><img src="${imageUrl(product, 120)}" alt="${escapeHTML(product.alt)}"><span>${escapeHTML(product.name)} · ${currency.format(product.price)}</span><button type="button" data-add="${product.id}">Add to cart</button></div>`).join("")}</div>`
      : '<p class="dialog-intro">Your wishlist is empty. Tap the heart on a product to save it here.</p><button class="button-dark" type="button" data-close-dialog>Explore products</button>'}`;
}

function openAccountPage(page) {
  if (page === "orders") renderOrders();
  else if (page === "wishlist") renderWishlist();
  else renderProfile();
  showDialog(document.getElementById("account-dialog"));
}

function placeOrder(form) {
  if (cartItems.length === 0) {
    showToast("Your cart is empty.");
    closeDialog(document.getElementById("checkout-dialog"));
    return;
  }
  const formData = new FormData(form);
  profile = {
    name: String(formData.get("name")).trim(),
    email: String(formData.get("email")).trim(),
    phone: String(formData.get("phone")).trim(),
    address: String(formData.get("address")).trim(),
    city: String(formData.get("city")).trim(),
    pincode: String(formData.get("pincode")).trim()
  };
  saveStored(storageKeys.profile, profile);
  const order = {
    id: `FM${Date.now().toString().slice(-8)}`,
    date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
    status: "Order confirmed",
    payment: String(formData.get("payment")),
    total: cartSubtotal(),
    address: `${profile.address}, ${profile.city} ${profile.pincode}`,
    customerName: profile.name,
    items: cartItems.map((item) => {
      const product = getProduct(item.id);
      return { id: item.id, name: product.name, quantity: item.quantity, size: item.size, color: item.color, price: product.price };
    })
  };
  orders.push(order);
  saveStored(storageKeys.orders, orders);
  cartItems = [];
  saveStored(storageKeys.cart, cartItems);
  syncCartCount();
  closeDialog(document.getElementById("checkout-dialog"));
  document.getElementById("confirmation-content").innerHTML = `
    <div class="confirmation-mark">✓</div><p class="eyebrow">Thank you, ${escapeHTML(order.customerName)}</p>
    <h2 id="confirmation-heading">Your order is confirmed!</h2>
    <p>Order <strong>${escapeHTML(order.id)}</strong> has been placed. You can review its status in My orders.</p>
    <p class="order-meta">${escapeHTML(order.address)}</p>
    <button class="button-dark" type="button" data-open-page="orders">View my orders</button>
    <button class="button-light" type="button" data-close-dialog>Continue shopping</button>`;
  showDialog(document.getElementById("confirmation-dialog"));
}

function showOrderTracking(orderId) {
  const order = orders.find((item) => item.id === orderId);
  if (!order) return;
  const content = document.getElementById("account-content");
  content.innerHTML = `
    <p class="eyebrow">Order ${escapeHTML(order.id)}</p><h2 id="account-heading">Track your order</h2>
    <p class="dialog-intro">Current status: <strong>${escapeHTML(order.status)}</strong></p>
    <ol class="tracking-steps"><li class="complete">Order confirmed</li><li>Preparing your items</li><li>On the way</li><li>Delivered</li></ol>
    <p class="order-meta">Delivery address: ${escapeHTML(order.address)}</p>
    <button class="text-link" type="button" data-open-page="orders">← Back to my orders</button>`;
}

document.querySelector(".filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  updateFilterButtons();
  renderProducts();
});

document.querySelector(".category-strip").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  updateFilterButtons();
  renderProducts();
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("sort-products").addEventListener("change", renderProducts);

document.getElementById("product-grid").addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    event.stopPropagation();
    addToCart(addButton.dataset.add);
    return;
  }
  const wishlistButton = event.target.closest("[data-wishlist]");
  if (wishlistButton) {
    event.stopPropagation();
    const id = wishlistButton.dataset.wishlist;
    wishlist = wishlist.includes(id) ? wishlist.filter((savedId) => savedId !== id) : [...wishlist, id];
    saveStored(storageKeys.wishlist, wishlist);
    renderProducts();
    return;
  }
  const card = event.target.closest("[data-product-card]");
  if (card) renderProductDetail(card.dataset.productCard);
});

productGrid.addEventListener("keydown", (event) => {
  const card = event.target.closest("[data-product-card]");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    renderProductDetail(card.dataset.productCard);
  }
});

document.querySelectorAll("[data-category-link]").forEach((link) => {
  link.addEventListener("click", () => {
    activeFilter = link.dataset.categoryLink;
    updateFilterButtons();
    renderProducts();
  });
});

document.getElementById("view-all").addEventListener("click", () => {
  searchTerm = "";
  document.getElementById("product-search").value = "";
  activeFilter = "All";
  updateFilterButtons();
  renderProducts();
});

document.getElementById("search-toggle").addEventListener("click", () => {
  const panel = document.getElementById("search-panel");
  const button = document.getElementById("search-toggle");
  const open = !panel.classList.contains("open");
  panel.classList.toggle("open", open);
  button.setAttribute("aria-expanded", String(open));
  if (open) document.getElementById("product-search").focus();
});

document.getElementById("close-search").addEventListener("click", () => {
  document.getElementById("search-panel").classList.remove("open");
  document.getElementById("search-toggle").setAttribute("aria-expanded", "false");
});

document.getElementById("product-search").addEventListener("input", (event) => {
  searchTerm = event.currentTarget.value.trim().toLowerCase();
  activeFilter = "All";
  updateFilterButtons();
  renderProducts();
});

cartButton.addEventListener("click", () => {
  renderCart();
  showDialog(document.getElementById("cart-dialog"));
});

document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const nav = document.getElementById("main-nav");
  const expanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("open", !expanded);
});

document.getElementById("main-nav").addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    document.getElementById("main-nav").classList.remove("open");
    document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (addButton && !addButton.closest("#product-grid")) {
    addToCart(addButton.dataset.add);
    return;
  }

  const closeButton = event.target.closest("[data-close-dialog]");
  if (closeButton) {
    const dialog = closeButton.closest("dialog");
    if (dialog) closeDialog(dialog);
    return;
  }

  const pageButton = event.target.closest("[data-open-page]");
  if (pageButton) {
    const activeDialog = pageButton.closest("dialog");
    if (activeDialog) closeDialog(activeDialog);
    openAccountPage(pageButton.dataset.openPage);
    return;
  }

  const quantityButton = event.target.closest("[data-quantity]");
  if (quantityButton) {
    const item = cartItems.find((cartItem) => cartItem.id === quantityButton.dataset.id && cartItem.size === quantityButton.dataset.size && cartItem.color === quantityButton.dataset.color);
    if (!item) return;
    item.quantity += Number(quantityButton.dataset.quantity);
    if (item.quantity <= 0) cartItems = cartItems.filter((cartItem) => cartItem !== item);
    saveStored(storageKeys.cart, cartItems);
    syncCartCount();
    renderCart();
    return;
  }

  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    cartItems = cartItems.filter((item) => item.id !== removeButton.dataset.remove || item.size !== removeButton.dataset.size || item.color !== removeButton.dataset.color);
    saveStored(storageKeys.cart, cartItems);
    syncCartCount();
    renderCart();
    return;
  }

  if (event.target.closest("[data-detail-add]") || event.target.closest("[data-buy-now]")) {
    const size = document.getElementById("detail-size")?.value || "";
    const color = document.getElementById("detail-color")?.value || "";
    const isBuyNow = Boolean(event.target.closest("[data-buy-now]"));
    addToCart(selectedProductId, { size, color });
    closeDialog(document.getElementById("product-dialog"));
    if (isBuyNow) {
      renderCheckout();
      showDialog(document.getElementById("checkout-dialog"));
    }
    return;
  }

  if (event.target.closest("[data-checkout]")) {
    closeDialog(document.getElementById("cart-dialog"));
    renderCheckout();
    showDialog(document.getElementById("checkout-dialog"));
    return;
  }

  const trackButton = event.target.closest("[data-track-order]");
  if (trackButton) showOrderTracking(trackButton.dataset.trackOrder);
});

document.getElementById("checkout-content").addEventListener("submit", (event) => {
  if (event.target.id !== "checkout-form") return;
  event.preventDefault();
  if (!event.target.reportValidity()) return;
  placeOrder(event.target);
});

document.getElementById("account-content").addEventListener("submit", (event) => {
  if (event.target.id !== "profile-form") return;
  event.preventDefault();
  const formData = new FormData(event.target);
  profile = Object.fromEntries(["name", "email", "phone", "address", "city", "pincode"].map((key) => [key, String(formData.get(key) || "").trim()]));
  if (saveStored(storageKeys.profile, profile)) showToast("Profile saved on this device.");
  renderProfile();
});

document.getElementById("signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  if (!emailInput.reportValidity()) return;
  showToast("Thanks for signing up!");
  event.currentTarget.reset();
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog(dialog);
  });
});

syncCartCount();
renderProducts();
