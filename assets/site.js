/* ============ Two River — site behaviour (chrome, cart, helpers) ============ */
(function () {
  const LOGO = TRM.IMG.logo;
  const LOGO_BADGE = TRM.IMG.logoBadge || TRM.IMG.logo;
  const LOGO_TEXT = TRM.IMG.logoText || TRM.IMG.logo;
  const CART_KEY = 'trm_cart_v1';

  /* ---------- cart store ---------- */
  function getCart(){ try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch(e){ return {}; } }
  function saveCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); renderCart(); updateCount(); }
  function cartCount(){ const c = getCart(); return Object.values(c).reduce((a,b)=>a+b,0); }
  function cartTotal(){ const c = getCart(); return Object.keys(c).reduce((a,id)=>{ const p=TRM.find(id); return a + (p? p.price*c[id] : 0); },0); }

  window.TRMcart = {
    add(id, qty){ const c=getCart(); c[id]=(c[id]||0)+(qty||1); saveCart(c); openCart(); },
    set(id, qty){ const c=getCart(); if(qty<=0) delete c[id]; else c[id]=qty; saveCart(c); },
    remove(id){ const c=getCart(); delete c[id]; saveCart(c); }
  };

  /* ---------- chrome markup ---------- */
  const CARET = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>`;

  const isHome = document.body.dataset.page === 'home';
  const brothShopHref = isHome ? '#subscribe' : 'index.html#subscribe';
  const shopHref = isHome ? '#subscribe' : 'broth.html';

  const NAV = `
    <div class="nav-item">
      <a class="nav-link" href="${shopHref}">Shop ${CARET}</a>
      <div class="mega">
        <div class="mega-inner">
          <div class="mega-col">
            <h6>Shop</h6>
            <a class="mega-link" href="broth.html"><b>Mushroom Broth</b><span>Award-winning · ships free nationwide</span></a>
            <a class="mega-link" href="shop.html"><b>Organic Mushrooms</b><span>Fresh from the farm — local pick-up only</span></a>
            <a class="mega-link" href="merch.html"><b>Merchandise</b><span>Wear the farm</span></a>
          </div>
          <div class="mega-col">
            <h6>Programs</h6>
            <a class="mega-link" href="subscribe.html"><b>Subscribe &amp; Save</b><span>10% off every delivery, free shipping always</span></a>
            <a class="mega-link" href="broth.html#subscribe"><b>The Starter Box</b><span>All three flavors — find your favorite</span></a>
            <a class="mega-link" href="locations.html"><b>Where to Buy</b><span>40+ restaurants, grocers &amp; the farm</span></a>
          </div>
          <a class="mega-feature" href="broth.html">
            <img src="${TRM.IMG.broth}" alt="Two River Mushroom Broth" loading="lazy">
            <div class="cap"><b>Two River Mushroom Broth</b><span>sofi™ Gold 2023 · NEXTY 2026</span></div>
          </a>
        </div>
      </div>
    </div>
    <a class="nav-link" href="subscribe.html">Subscribe</a>
    <div class="nav-item">
      <a class="nav-link" href="grow.html">Learn ${CARET}</a>
      <div class="mega">
        <div class="mega-inner">
          <div class="mega-col">
            <h6>Learn</h6>
            <a class="mega-link" href="grow.html"><b>How We Grow</b><span>Five patient steps from block to basket</span></a>
            <a class="mega-link" href="facts.html"><b>‘Shroom Fun Facts</b><span>Fungi trivia to impress your dinner table</span></a>
            <a class="mega-link" href="recipes.html"><b>Recipes</b><span>Breakfast, lunch &amp; dinner ideas</span></a>
            <a class="mega-link" href="faq.html"><b>FAQ</b><span>Pick-up, shipping &amp; subscriptions</span></a>
          </div>
          <div class="mega-col">
            <h6>News &amp; press</h6>
            <a class="mega-link" href="news.html"><b>Farm News</b><span>Our broth lands at all 465 Sprouts stores</span></a>
            <a class="mega-link" href="media.html"><b>Press &amp; Awards</b><span>sofi™ Gold, NEXTY &amp; coverage</span></a>
          </div>
          <a class="mega-feature" href="recipes.html">
            <img src="${TRM.IMG.recipe || 'https://www.tworivermushroom.com/cdn/shop/files/organic_mushroom_recipe.jpg?width=600&v=1719253586'}" alt="Mushroom recipe" loading="lazy">
            <div class="cap"><b>Cook with us</b><span>Recipes from the farm kitchen</span></div>
          </a>
        </div>
      </div>
    </div>
    <div class="nav-item">
      <a class="nav-link" href="about.html">About ${CARET}</a>
      <div class="mega">
        <div class="mega-inner">
          <div class="mega-col">
            <h6>The farm</h6>
            <a class="mega-link" href="about.html"><b>Our Story</b><span>Est. 2014 on 25 preserved acres</span></a>
            <a class="mega-link" href="team.html"><b>Meet the Team</b><span>Small team, single farm</span></a>
            <a class="mega-link" href="derek.html"><b>Derek Sarno</b><span>Our chef &amp; brand ambassador</span></a>
          </div>
          <div class="mega-col">
            <h6>Visit</h6>
            <a class="mega-link" href="locations.html"><b>Where to Buy</b><span>Locator, grocers &amp; the pick-up barn</span></a>
            <a class="mega-link" href="contact.html"><b>Contact</b><span>Mon–Sat · 10AM–4PM · Millstone, NJ</span></a>
          </div>
          <a class="mega-feature" href="about.html">
            <img src="${TRM.IMG.farm}" alt="Mighty Dare Farm" loading="lazy">
            <div class="cap"><b>Grown slow, on preserved land</b><span>The Two River story</span></div>
          </a>
        </div>
      </div>
    </div>`;

  const HEADER = `
    <div class="announce">
      <span>Award-winning broth · Ships free · Farm pick-up in Millstone, NJ</span>
      <a href="${brothShopHref}">Shop broth →</a>
    </div>
    <header class="site-header">
      <div class="wrap header-row">
        <a class="brand" href="index.html" aria-label="Two River Gourmet Mushroom home">
          <img class="brand-logo" src="${LOGO}" alt="Two River Gourmet Mushroom logo">
          <img class="brand-wordmark" src="${LOGO_TEXT}" alt="Two River Mushroom">
        </a>
        <nav class="nav">${NAV}</nav>
        <div class="header-actions">
          <a class="icon-btn" href="${shopHref}" aria-label="Shop broth">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2a231b" stroke-width="1.7"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg></a>
          <button class="icon-btn" id="cartBtn" aria-label="Open cart">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2a231b" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span class="cart-count" id="cartCount" hidden></span>
          </button>
          <button class="icon-btn menu-toggle" id="menuToggle" aria-label="Open menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2a231b" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
    </header>
    <div class="mobile-menu" id="mobileMenu">
      <div class="mhead">
        <img class="brand-logo" src="${LOGO}" alt="Two River" style="height:40px">
        <button class="cart-close" id="menuClose" aria-label="Close menu">&times;</button>
      </div>
      <a href="index.html">Home</a>
      <div class="mgroup-label">Shop</div>
      <div class="sub"><a href="${brothShopHref}">Shop Broth</a><a href="shop.html">Organic Mushrooms</a><a href="broth.html">Mushroom Broth</a><a href="merch.html">Merchandise</a></div>
      <a href="subscribe.html">Subscribe</a>
      <div class="mgroup-label">Learn</div>
      <div class="sub"><a href="grow.html">How We Grow</a><a href="facts.html">Fun Facts</a><a href="recipes.html">Recipes</a><a href="faq.html">FAQ</a><a href="news.html">Farm News</a><a href="media.html">Press &amp; Awards</a></div>
      <div class="mgroup-label">About</div>
      <div class="sub"><a href="about.html">Our Farm</a><a href="team.html">Meet the Team</a><a href="derek.html">Derek Sarno</a><a href="locations.html">Locations</a></div>
      <a href="contact.html">Contact</a>
      <a href="returns.html">Returns &amp; Refunds</a>
    </div>`;

  const FOOTER = `
    <footer class="site-footer">
      <div class="footer-grid">
        <div>
          <div class="footer-brand"><img src="${LOGO_BADGE}" alt="Two River Gourmet Mushroom"></div>
          <p>A small-scale, USDA Organic mushroom farm in Millstone, N.J. For those who desire only the finest gourmet mushrooms.</p>
          <div class="socials">
            <a href="https://www.facebook.com/tworivermushroom" target="_blank" rel="noopener" aria-label="Facebook" title="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21.9v-7.4h2.5l.4-2.9h-2.9V9.7c0-.8.2-1.4 1.4-1.4h1.6V5.7c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2h-2.5v2.9h2.5v7.4h3.2z"/></svg></a>
            <a href="https://www.instagram.com/tworivermushroom" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="3.8"/><circle cx="16.9" cy="7.1" r="1.1" fill="currentColor" stroke="none"/></svg></a>
            <a href="https://www.tiktok.com/@tworivermushroom" target="_blank" rel="noopener" aria-label="TikTok" title="TikTok">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16.7 5.6c-.9-.6-1.6-1.6-1.8-2.8h-3v11.8a2.7 2.7 0 1 1-2.7-2.7c.3 0 .6 0 .8.1V8.9c-.3 0-.5-.1-.8-.1a5.8 5.8 0 1 0 5.8 5.8V9.2c1 .7 2.3 1.2 3.6 1.2v-3c-.7 0-1.4-.3-1.9-.8z"/></svg></a>
            <a href="https://www.youtube.com/@tworivermushroom" target="_blank" rel="noopener" aria-label="YouTube" title="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12c0 1.6.1 3.2.4 4.8a2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2c.3-1.6.4-3.2.4-4.8s-.1-3.2-.4-4.8zM10 15.3V8.7l5.7 3.3-5.7 3.3z"/></svg></a>
          </div>
        </div>
        <div class="foot-col">
          <h5>Shop</h5>
          <a href="broth.html">Mushroom Broth</a>
          <a href="subscribe.html">Subscribe &amp; Save</a>
          <a href="shop.html">Organic Mushrooms</a>
          <a href="merch.html">Merchandise</a>
          <a href="returns.html">Returns &amp; Refunds</a>
        </div>
        <div class="foot-col">
          <h5>Explore</h5>
          <a href="about.html">Our Story</a>
          <a href="grow.html">How We Grow</a>
          <a href="recipes.html">Recipes</a>
          <a href="faq.html">FAQ</a>
          <a href="news.html">Farm News</a>
          <a href="media.html">Press &amp; Awards</a>
          <a href="locations.html">Where to Buy</a>
        </div>
        <div class="foot-col">
          <h5>Visit the farm</h5>
          <p style="margin:0 0 12px">Mighty Dare Farm<br>145 Stillhouse Road<br>Millstone, NJ 08510</p>
          <p style="margin:0 0 12px">Mon–Sat · 10AM–4PM<br>(732) 216-1859</p>
          <a href="contact.html">Contact us →</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="copy">© ${new Date().getFullYear()} Two River Gourmet Mushroom</span>
        <span class="copy credit">Designed and Powered by <a href="https://www.powercommerce.com" target="_blank" rel="noopener">Power Commerce</a></span>
      </div>
    </footer>`;

  const CART = `
    <div id="cartRoot"></div>`;

  /* ---------- cart drawer render ---------- */
  function openCart(){ document.getElementById('cartRoot').dataset.open = '1'; renderCart(); }
  function closeCart(){ const r=document.getElementById('cartRoot'); r.dataset.open=''; r.innerHTML=''; }
  window.TRMopenCart = openCart;

  function updateCount(){ const el=document.getElementById('cartCount'); if(!el) return; const n=cartCount(); el.textContent = n; el.hidden = n < 1; }

  function renderCart(){
    const root = document.getElementById('cartRoot');
    if(!root || root.dataset.open !== '1') return;
    const c = getCart(); const ids = Object.keys(c);
    let lines;
    if(ids.length === 0){
      lines = `<div class="cart-empty">
        <div style="font-family:var(--serif);font-size:19px;color:var(--muted);margin-bottom:10px">Your basket is empty</div>
        <p style="font-size:14px;margin:0 0 22px">Award-winning broth ships free nationwide.</p>
        <a class="btn btn-terra" href="${brothShopHref}">Shop broth</a>
        <a class="link-arrow" href="shop.html" style="margin-top:16px">or shop fresh mushrooms
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>`;
    } else {
      lines = ids.map(id => {
        const p = TRM.find(id); if(!p) return '';
        const q = c[id];
        return `<div class="cart-line">
          <div class="thumb"><img src="${p.img[0]}" alt="${p.name}"></div>
          <div style="flex:1">
            <div class="nm">${p.name}</div>
            <div class="pr">${TRM.money(p.price)} each</div>
            <div style="display:flex;align-items:center;gap:12px">
              <div class="miniqty">
                <button onclick="TRMcart.set('${id}',${q-1})">−</button>
                <span>${q}</span>
                <button onclick="TRMcart.set('${id}',${q+1})">+</button>
              </div>
              <button class="cart-remove" onclick="TRMcart.remove('${id}')">Remove</button>
            </div>
          </div>
          <div class="ln">${TRM.money(p.price*q)}</div>
        </div>`;
      }).join('');
    }
    const foot = ids.length ? `<div class="cart-foot">
        <div class="cart-sub"><span>Subtotal</span><span>${TRM.money(cartTotal())}</span></div>
        <div style="font:500 12px var(--mono);color:var(--soft);margin-bottom:16px">Fresh mushrooms: farm pick-up · broth ships free</div>
        <button class="btn btn-terra" style="width:100%;justify-content:center" onclick="alert('This is a demo checkout. Reserve your order and pick up at Mighty Dare Farm, or order broth online.')">Reserve for pick-up</button>
      </div>` : '';
    root.innerHTML = `
      <div class="cart-overlay" id="cartOverlay"></div>
      <aside class="cart-drawer scroll">
        <div class="cart-head"><div class="ttl">Your basket</div><button class="cart-close" id="cartClose">&times;</button></div>
        <div class="cart-body scroll">${lines}</div>
        ${foot}
      </aside>`;
    document.getElementById('cartOverlay').onclick = closeCart;
    document.getElementById('cartClose').onclick = closeCart;
  }

  /* ---------- card helper (used by grid pages) ---------- */
  window.TRMcard = function(p){
    const catLabel = (TRM.CATS.find(c=>c.key===p.cat)||{}).label || p.cat;
    const foot = p.soldOut
      ? `<span class="soldlabel">Sold out</span>`
      : `<button class="add-btn" onclick="event.stopPropagation();TRMcart.add('${p.id}',1)">Add
           <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 5v14M5 12h14"/></svg></button>`;
    const sold = p.soldOut ? `<span class="badge-sold">Sold Out</span>` : '';
    const href = `product.html?id=${p.id}`;
    const tag = p.type === 'broth'
      ? `<div class="card-tag ships">Ships free</div>`
      : (p.type === 'fresh' ? `<div class="card-tag local">Farm pick-up only</div>` : '');
    return `<article class="card">
      <a class="card-media" href="${href}"><img src="${p.img[0]}" alt="${p.name}" loading="lazy">${sold}</a>
      <div class="card-body">
        <div class="card-cat">${catLabel}</div>
        <a class="card-name" href="${href}">${p.name}</a>
        <div class="card-note">${p.note||''}</div>
        ${tag}
        <div class="card-foot"><span class="price">${TRM.money(p.price)}</span>${foot}</div>
      </div>
    </article>`;
  };

  /* ---------- boot ---------- */
  function setActiveNav(){
    const page = document.body.dataset.page;
    const map = { shop:'shop.html', broth:'broth.html', merch:'merch.html', subscribe:'subscribe.html',
      grow:'grow.html', facts:'facts.html', recipes:'recipes.html', media:'media.html', faq:'faq.html', news:'news.html',
      about:'about.html', team:'team.html', derek:'derek.html', locations:'locations.html',
      contact:'contact.html' };
    const href = map[page];
    if(!href) return;
    document.querySelectorAll('.site-header .nav-link').forEach(a=>{
      if(a.getAttribute('href')===href) a.classList.add('active');
    });
    if(['shop','broth','merch'].includes(page)){
      const shopLink = document.querySelector('.site-header .nav-item .nav-link');
      if(shopLink) shopLink.classList.add('active');
    }
  }

  /* intelligent sticky: shrink the bar + tuck the medallion once the page scrolls */
  function setupStickyHeader(host){
    const header = (host || document).querySelector('.site-header');
    if(!header) return;
    let ticking = false;
    const apply = ()=> header.classList.toggle('scrolled', window.scrollY > 24);
    const onScroll = ()=>{
      if(ticking) return;
      ticking = true;
      requestAnimationFrame(()=>{ apply(); ticking = false; });
    };
    apply();
    window.addEventListener('scroll', onScroll, {passive:true});
  }

  function boot(){
    const h = document.getElementById('site-header');
    const f = document.getElementById('site-footer');
    if(h) h.innerHTML = HEADER;
    if(f) f.innerHTML = FOOTER + CART;
    updateCount();
    setActiveNav();
    setupStickyHeader(h);
    const cb = document.getElementById('cartBtn'); if(cb) cb.onclick = openCart;
    const mt = document.getElementById('menuToggle'), mm = document.getElementById('mobileMenu'), mc = document.getElementById('menuClose');
    if(mt && mm) mt.onclick = ()=> mm.classList.add('open');
    if(mc && mm) mc.onclick = ()=> mm.classList.remove('open');
    document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ closeCart(); if(mm) mm.classList.remove('open'); } });
    if(typeof window.TRMpageInit === 'function') window.TRMpageInit();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
