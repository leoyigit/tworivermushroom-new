/* ============ Two River — site behaviour (chrome, cart, helpers) ============ */
(function () {
  const LOGO = TRM.IMG.logo;
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
  const NAV = `
    <div class="nav-item">
      <a class="nav-link" href="shop.html">Shop
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></a>
      <div class="dropdown">
        <a href="shop.html">Organic Mushrooms</a>
        <a href="broth.html">Mushroom Broth</a>
        <a href="merch.html">Merchandise</a>
      </div>
    </div>
    <div class="nav-item">
      <a class="nav-link" href="grow.html">Learn
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></a>
      <div class="dropdown">
        <a href="grow.html">How We Grow</a>
        <a href="facts.html">‘Shroom Fun Facts</a>
        <a href="recipes.html">Recipes</a>
        <a href="media.html">In the Media</a>
      </div>
    </div>
    <div class="nav-item">
      <a class="nav-link" href="about.html">About
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></a>
      <div class="dropdown">
        <a href="about.html">Our Farm</a>
        <a href="team.html">Meet the Team</a>
        <a href="derek.html">Derek Sarno</a>
        <a href="locations.html">Locations &amp; Partners</a>
      </div>
    </div>
    <a class="nav-link" href="contact.html">Contact</a>`;

  const HEADER = `
    <div class="announce">
      <span>Certified USDA Organic · Local Farm Pick-Up · Millstone, NJ</span>
      <a href="shop.html">Shop now →</a>
    </div>
    <header class="site-header">
      <div class="wrap header-row">
        <a class="brand" href="index.html" aria-label="Two River Gourmet Mushroom home">
          <img class="brand-logo" src="${LOGO}" alt="Two River Gourmet Mushroom logo">
        </a>
        <nav class="nav">${NAV}</nav>
        <div class="header-actions">
          <a class="icon-btn" href="shop.html" aria-label="Shop">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2a231b" stroke-width="1.7"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg></a>
          <button class="icon-btn" id="cartBtn" aria-label="Open cart">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2a231b" stroke-width="1.7"><path d="M6 7h12l-1.2 11.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>
            <span class="cart-count" id="cartCount">0</span>
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
      <div class="sub"><a href="shop.html">Organic Mushrooms</a><a href="broth.html">Mushroom Broth</a><a href="merch.html">Merchandise</a></div>
      <div class="mgroup-label">Learn</div>
      <div class="sub"><a href="grow.html">How We Grow</a><a href="facts.html">Fun Facts</a><a href="recipes.html">Recipes</a><a href="media.html">In the Media</a></div>
      <div class="mgroup-label">About</div>
      <div class="sub"><a href="about.html">Our Farm</a><a href="team.html">Meet the Team</a><a href="derek.html">Derek Sarno</a><a href="locations.html">Locations</a></div>
      <a href="contact.html">Contact</a>
      <a href="returns.html">Returns &amp; Refunds</a>
    </div>`;

  const FOOTER = `
    <footer class="site-footer">
      <div class="footer-grid">
        <div>
          <div class="footer-brand"><img src="${LOGO}" alt="Two River Gourmet Mushroom"></div>
          <p>A small-scale, USDA Organic mushroom farm in Millstone, N.J. For those who desire only the finest gourmet mushrooms.</p>
          <div class="socials">
            <a href="https://www.facebook.com/tworivermushroom" target="_blank" rel="noopener" title="Facebook">f</a>
            <a href="https://www.instagram.com/tworivermushroom" target="_blank" rel="noopener" title="Instagram">IG</a>
            <a href="https://www.tiktok.com/@tworivermushroom" target="_blank" rel="noopener" title="TikTok">TT</a>
            <a href="https://www.youtube.com/@tworivermushroom" target="_blank" rel="noopener" title="YouTube">YT</a>
          </div>
        </div>
        <div class="foot-col">
          <h5>Shop</h5>
          <a href="shop.html">Organic Mushrooms</a>
          <a href="broth.html">Mushroom Broth</a>
          <a href="merch.html">Merchandise</a>
          <a href="returns.html">Returns &amp; Refunds</a>
        </div>
        <div class="foot-col">
          <h5>Explore</h5>
          <a href="about.html">Our Farm</a>
          <a href="grow.html">How We Grow</a>
          <a href="recipes.html">Recipes</a>
          <a href="media.html">In the Media</a>
          <a href="locations.html">Locations</a>
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
        <div class="pays"><span>VISA</span><span>AMEX</span><span>MC</span><span>APPLE PAY</span><span>SHOP PAY</span></div>
      </div>
    </footer>`;

  const CART = `
    <div id="cartRoot"></div>`;

  /* ---------- cart drawer render ---------- */
  function openCart(){ document.getElementById('cartRoot').dataset.open = '1'; renderCart(); }
  function closeCart(){ const r=document.getElementById('cartRoot'); r.dataset.open=''; r.innerHTML=''; }
  window.TRMopenCart = openCart;

  function updateCount(){ const el=document.getElementById('cartCount'); if(el) el.textContent = cartCount(); }

  function renderCart(){
    const root = document.getElementById('cartRoot');
    if(!root || root.dataset.open !== '1') return;
    const c = getCart(); const ids = Object.keys(c);
    let lines;
    if(ids.length === 0){
      lines = `<div class="cart-empty">
        <div style="font-family:var(--serif);font-size:19px;color:var(--muted);margin-bottom:10px">Your basket is empty</div>
        <p style="font-size:14px;margin:0 0 22px">Fresh mushrooms are waiting at the farm.</p>
        <a class="btn btn-terra" href="shop.html">Shop mushrooms</a></div>`;
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
    return `<article class="card">
      <a class="card-media" href="${href}"><img src="${p.img[0]}" alt="${p.name}" loading="lazy">${sold}</a>
      <div class="card-body">
        <div class="card-cat">${catLabel}</div>
        <a class="card-name" href="${href}">${p.name}</a>
        <div class="card-note">${p.note||''}</div>
        <div class="card-foot"><span class="price">${TRM.money(p.price)}</span>${foot}</div>
      </div>
    </article>`;
  };

  /* ---------- boot ---------- */
  function setActiveNav(){
    const page = document.body.dataset.page;
    const map = { shop:'shop.html', broth:'broth.html', merch:'merch.html',
      grow:'grow.html', facts:'facts.html', recipes:'recipes.html', media:'media.html',
      about:'about.html', team:'team.html', derek:'derek.html', locations:'locations.html',
      contact:'contact.html' };
    const href = map[page];
    if(!href) return;
    document.querySelectorAll('.site-header .nav-link').forEach(a=>{
      if(a.getAttribute('href')===href) a.classList.add('active');
    });
  }

  function boot(){
    const h = document.getElementById('site-header');
    const f = document.getElementById('site-footer');
    if(h) h.innerHTML = HEADER;
    if(f) f.innerHTML = FOOTER + CART;
    updateCount();
    setActiveNav();
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
