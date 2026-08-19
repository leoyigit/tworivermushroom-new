/* ============ Two River — catalog & content data (from live store) ============ */
const CDN = 'https://www.tworivermushroom.com/cdn/shop/files/';
const img = (f, w) => 'https://cdn.shopify.com/s/files/1/0634/0906/2084/files/' + f + (w ? '&width=' + w : '');

const TRM = {
  // ---- shared imagery ----
  IMG: {
    logo: 'assets/logo.png',           // round badge — header nav (big)
    logoText: 'assets/logo-text.png',  // wordmark — kept for alternate uses
    logoBadge: 'assets/logo.png',      // round badge — footer
    logoLight: 'assets/logo.png',
    hero: CDN + 'organic_mushrooms.jpg?width=1600&v=1719253562',
    broth: 'https://cdn.shopify.com/s/files/1/0634/0906/2084/files/tworiverbroth-8374_1.jpg?width=1200&v=1704327414',
    farm: 'https://cdn.shopify.com/s/files/1/0634/0906/2084/files/IMG_3448.jpg?width=900&v=1716421280',
    farm2: 'https://cdn.shopify.com/s/files/1/0634/0906/2084/files/IMG_4555.jpg?width=900&v=1716421802',
    recipe: CDN + 'organic_mushroom_recipe.jpg?width=900&v=1719253586',
    shopHero: 'https://cdn.shopify.com/s/files/1/0634/0906/2084/files/oyster-mushroom-1296x728-header.webp?width=1400&v=1716475350',
    mushrooms01: 'https://cdn.shopify.com/s/files/1/0634/0906/2084/files/da2d39a1-ed1e-47a5-86df-ff8f39e505a4-mushrooms01.webp?width=800&v=1711571350'
  },

  // ---- fresh mushrooms (local pickup only) ----
  PRODUCTS: [
    { id:'king-trumpet-oyster', name:'King Trumpet Oyster', price:6, cat:'Oyster', type:'fresh', soldOut:true,
      note:'Meaty & firm — scallop-like',
      img:[img('king_trumpet_oyster_mushroom.jpg?v=1719254066',1000)],
      blurb:'Thick, scallop-like stems with a savory bite — the king of the oyster family. Slice into medallions, sear hard, and watch them caramelize.',
      flavor:['Dense, meaty texture','Mild umami, scallop-like','Holds its shape when seared'] },

    { id:'maitake-mushroom', name:'Maitake', price:7, cat:'Chef', type:'fresh',
      note:'Hen of the Woods — earthy',
      img:[img('0-6.jpg?v=1712856115',1000)],
      blurb:'Maitake — “Hen of the Woods” — has a distinct aroma and a rich, woodsy flavor with a delicate, feathery texture. Cook the cluster whole or tear into pieces for mains, sides and soups.',
      flavor:['Rich, woodsy flavor','Meaty, earthy, peppery','Succulent texture'] },

    { id:'lions-mane-mushrooms', name:"Lion's Mane", price:6, cat:'Specialty', type:'fresh',
      note:'Seafood-like — sweet & tender',
      img:[img('0-5.jpg?v=1712856083',1000)],
      blurb:'A choice edible and medicinal mushroom with a seafood-like character — think crab or lobster. The base for our famous “crab” cakes.',
      flavor:['Seafood-like, slightly sweet','Tender & juicy','Pulls apart like crab'] },

    { id:'chestnut-mushrooms', name:'Chestnut', price:6, cat:'Specialty', type:'fresh',
      note:'Nutty & firm',
      img:[img('organic_chestnut_mushrooms.jpg?v=1719253915',1000)],
      blurb:'Clusters of leggy orange-cinnamon caps speckled with white flakes, ready to sauté and serve. The stems are just as good as the caps.',
      flavor:['Earthy & nutty flavor','Robust aroma','Crunchy, firm texture'] },

    { id:'golden-oyster-mushrooms', name:'Golden Oyster', price:5, cat:'Oyster', type:'fresh',
      note:'Delicate — faintly fruity',
      img:[img('golden_oyster_mushrooms.jpg?v=1719253998',1000)],
      blurb:'Bright yellow clusters with a fragrant, wine-like aroma and a crispy but slightly chewy texture. As beautiful on the plate as in the pan.',
      flavor:['Buttery, mild flavor','Fruity aroma','Crunchy texture'] },

    { id:'pioppino-mushrooms', name:'Pioppino', price:6, cat:'Specialty', type:'fresh',
      note:'Woodsy & peppery',
      img:[img('0-4.jpg?v=1712856051',1000)],
      blurb:'Dark brown caps on long cream-colored stems with an intense forest flavor. Widely used in Italy for pasta con funghi — perfect for pastas, game and red meats.',
      flavor:['Faint floral aroma','Nutty, peppery & earthy','Firm texture'] },

    { id:'forest-medley-mix', name:'Forest Medley Mix', price:10, cat:'Chef', type:'fresh',
      note:"Chef's daily selection",
      img:[img('0-7.jpg?v=1712856136',1000)],
      blurb:'A rotating mix of oyster, shiitake, lion’s mane, king and chestnut mushrooms — whatever is at peak that morning. The easiest way to cook the whole forest at once.',
      flavor:["Chef's daily selection",'A spectrum of textures','Best value by weight'] },

    { id:'oyster-mushrooms', name:'Oyster', price:5, cat:'Oyster', type:'fresh',
      note:'Mild & velvety',
      img:[img('organic_oyster_mushrooms.jpg?v=1719253851',1000)],
      blurb:'The classic — velvety, mild and endlessly versatile. Grows in soft fans that cook in minutes and take any seasoning you give them.',
      flavor:['Mild & velvety','Tender fans','Takes any seasoning'] },

    { id:'shitake-mushrooms', name:'Shiitake', price:6, cat:'Specialty', type:'fresh',
      note:'Smoky umami',
      img:[img('TRMShitake.jpg?v=1704156828',1000)],
      blurb:'Smoky, deeply umami caps — the backbone of broths and stir-fries, and one of the two stars in our award-winning broth.',
      flavor:['Smoky umami','Rich & savory','Meaty cap'] }
  ],

  // ---- mushroom broth (ships free) ----
  BROTH: [
    { id:'4-pack-mushroom-broth', name:"Lion's Mane & Shiitake Broth", price:34, cat:'Broth', type:'broth', pack:'4 Pack · Free Shipping',
      note:'Rich umami · sofi™ Gold winner',
      img:[img('TRMFourPack.jpg?v=1767800175',1100), img('TRMFourPack6.jpg?v=1767800175',1100), img('TRMFourPack5.jpg?v=1767800175',1100)],
      blurb:'Made with organic Lion’s Mane and Shiitake mushrooms alongside 20 other simple ingredients — savory and earthy with a rich, umami flavor. Delicious as a sipping drink, or use it as the richest stock you’ve ever cooked with.',
      flavor:['Rich umami flavor','Functional, adaptogenic mushrooms','Clean & organic — no preservatives','Plant-based & gluten-free'] },

    { id:'4-pack-maitake-mushroom-broth-with-free-shipping', name:'Maitake Broth', price:34, cat:'Broth', type:'broth', pack:'4 Pack · Free Shipping',
      note:'Grounding & nourishing',
      img:[img('MaitakeFrontView.png?v=1771032117',1100), img('Maittakebackview.png?v=1767837502',1100)],
      blurb:'Made with organic Maitake mushrooms, coconut milk and 20 other simple ingredients. Comforting, grounding and satisfying — delicious as a sipping drink or substituted for stock in curries, soups and beyond.',
      flavor:['Naturally occurring beta-glucans','Helps the body adapt to stress','Comforting & grounding','Free shipping or farm pickup'] },

    { id:'4-pack-chaga-mushroom-broth-with-free-shipping', name:'Chaga Broth', price:34, cat:'Broth', type:'broth', pack:'4 Pack · Free Shipping',
      note:'Earthy & anti-inflammatory',
      img:[img('Chagafront.jpg?v=1771032117',1100), img('Chagaback.jpg?v=1763946163',1100)],
      blurb:'Made with organic wild-harvested Chaga mushrooms and 20 other simple ingredients — savory and earthy with rich umami. Pairs well with everything from miso soup and ramen to vegetarian gravy. *Chaga doesn’t fully dissolve, so some pieces are normal.*',
      flavor:['Wild-harvested Chaga','Rich, earthy umami','Anti-inflammatory properties','Free shipping or farm pickup'] },

    { id:'mushroom-broth-mixed-pack-6-pack-with-free-shipping', name:'Mushroom Broth Mixed Pack', price:49, cat:'Broth', type:'broth', pack:'6 Pack · Free Shipping',
      note:'All three flavors',
      img:[img('TwoRiver-Edited-03.jpg?v=1771032117',1300), img('MaitakeFrontView.png?v=1771032117',1100), img('Chagafront.jpg?v=1771032117',1100), img('LionsManeFrontView.jpg?v=1771032117',1100)],
      blurb:'Try all three flavors — Lion’s Mane, Chaga and Maitake — in one box. Each broth is packed with organic mushrooms and simple, clean ingredients, perfect for sipping, soup or stock. Two boxes of each flavor.',
      flavor:['Two boxes of each flavor','Lion’s Mane · Chaga · Maitake','Clean, organic ingredients','Free shipping or farm pickup'] }
  ],

  // ---- merch ----
  OTHER: [
    { id:'two-river-long-sleeve', name:'Two River Long Sleeve', price:25, cat:'Merch', type:'merch', soldOut:true,
      note:'Soft organic-cotton tee',
      img:[img('two_river_mushroom_long_sleeve_t_shirt_grey.png?v=1719253362',1000), img('green_two_river_mushroom_long_sleeve_t_shirt.png?v=1719253293',1000)],
      blurb:'Wear the farm. Our soft long-sleeve tee in green or grey, sizes S–2XL. Pick up with your mushrooms at the farm.',
      flavor:['Sizes S – 2XL','Green or grey','Farm pickup'] }
  ],

  REVIEWS: [
    { name:'Eileen Fiorentino', text:"They grow so many different kinds of beautiful mushrooms that you can't find everywhere. The guys are friendly and knowledgeable. A must for any fan of fungi." },
    { name:'Cesare De Chellis', text:"I always order my mushrooms here — consistently fresh, flavorful, beautiful. Highly recommend for chefs, restaurants and home cooks." },
    { name:'Rachel Borwegen', text:"Oh wow. These are THE BEST mushrooms I've ever had! Such a special place — glad it's in our backyard." }
  ],

  RECIPES: [
    { title:"Lion's Mane Crab Cakes", time:'35 min', level:'Intermediate', img:CDN+'organic_mushroom_recipe.jpg?width=900&v=1719253586',
      blurb:"Our most-requested dish. Shredded Lion's Mane, bound and pan-fried until golden — uncannily close to the real thing." },
    { title:'Cream of Mushroom Soup', time:'45 min', level:'Easy', img:'https://cdn.shopify.com/s/files/1/0634/0906/2084/files/tworiverbroth-8374_1.jpg?width=900&v=1704327414',
      blurb:'Silky, rich and built on a base of Shiitake and Oyster mushrooms with a splash of our broth. Comfort in a bowl.' },
    { title:'Roasted Maitake', time:'25 min', level:'Easy', img:img('0-6.jpg?v=1712856115',900),
      blurb:'High heat, good olive oil, flaky salt. Let the ruffled edges crisp until shatteringly golden.' },
    { title:'Forest Medley Stir-Fry', time:'20 min', level:'Easy', img:img('0-7.jpg?v=1712856136',900),
      blurb:"A hot wok and the day's medley. Fast, savory and weeknight-perfect." }
  ],

  GROW: [
    { n:'1', title:'Substrate', body:'We blend organic hardwood sawdust and grain into nutrient-rich growing blocks — the soil our mushrooms call home.' },
    { n:'2', title:'Inoculation', body:'Sterilised blocks are seeded with living, organic mushroom culture in a clean lab environment.' },
    { n:'3', title:'Incubation', body:'In the dark and quiet, white mycelium slowly colonises every block over the course of a few weeks.' },
    { n:'4', title:'Fruiting', body:'We move blocks into fresh air and high humidity, which coaxes mushrooms to push out and form.' },
    { n:'5', title:'Harvest', body:'Everything is picked by hand at peak ripeness — often the very morning you take it home.' }
  ],

  FACTS: [
    { tag:'Fungi 101', fact:'Mushrooms are more closely related to animals than they are to plants.' },
    { tag:'Spores', fact:'A single mushroom can release billions of microscopic spores into the air.' },
    { tag:'Mycelium', fact:'Underground mycelium networks can stretch for miles, quietly connecting an entire forest.' },
    { tag:"Lion's Mane", fact:'Lion’s Mane has been studied for its potential to support nerves, memory and focus.' },
    { tag:'Vitamin D', fact:'Given a little sunlight, mushrooms become one of the few plant-based sources of vitamin D.' },
    { tag:'Upcycling', fact:'Many gourmet mushrooms will happily fruit on spent coffee grounds and sawdust.' }
  ],

  MEDIA: [
    { outlet:'Specialty Food Association', date:'2023', quote:'Mushroom Broth named a sofi™ Gold Award Winner — the food industry’s top honor for new specialty products.' },
    { outlet:'NJ Local Press', date:'2024', quote:'A Garden State farm putting New Jersey on the gourmet-mushroom map.' },
    { outlet:'Chef Feature', date:'2024', quote:'Small-batch, organic and chef-approved — grown right in Millstone.' }
  ],

  TEAM: [
    { id:'kc', initials:'KS', role:'Founder', name:'KC Sullivan',
      img:'https://www.tworivermushroom.com/cdn/shop/files/3556798023.jpg?v=1711633023&width=900',
      pos:'50% 50%',
      bio:'KC started Two River with a simple belief — that New Jersey deserved its own organic, gourmet mushrooms. What began as a few fruiting blocks is now the state’s first organic mushroom farm, supplying dozens of restaurants and markets.' },
    { id:'kurt', initials:'KC', role:'Co-Owner', name:'Kurt Cavano',
      img:'https://www.tworivermushroom.com/cdn/shop/files/IMG_3836.jpg?v=1716423390&width=900',
      pos:'45% 30%',
      bio:'Kurt is a co-owner of Two River Gourmet Mushroom, helping grow the farm’s reach across New Jersey restaurants, markets, and home kitchens.' },
    { id:'scott', initials:'SS', role:'Co-Owner', name:'Scott Szegeski',
      img:'https://www.tworivermushroom.com/cdn/shop/files/scott_szegeski.webp?v=1716423361&width=900',
      pos:'50% 50%',
      bio:'Scott is a co-owner of Two River Gourmet Mushroom, working alongside KC and Kurt to keep the farm small-scale, organic, and close to the community it feeds.' }
  ],

  // farmers' markets from the farm's Google Map
  MARKETS: [
    { name:'Alstede Farms', when:'On-farm market', time:'Seasonal', where:'Chester, NJ' },
    { name:'Asbury Park Farmers Market', when:'Seasonal', time:'Check market hours', where:'Asbury Park, NJ' },
    { name:'Blue Moon Acres', when:'On-farm market', time:'Seasonal', where:'Pennington, NJ' },
    { name:'Brick Farmers’ Market', when:'Saturdays · May – late Sept', time:'8:30AM – 1:30PM', where:'Windward Beach Park, Brick NJ' },
    { name:'Cook’s Market', when:'Seasonal', time:'Check market hours', where:'New Brunswick, NJ' },
    { name:'Ethos Farm Project Organic Market', when:'On-farm market', time:'Seasonal', where:'Long Valley, NJ' },
    { name:'Fernbrook Farms CSA', when:'CSA pick-up', time:'Seasonal', where:'Chesterfield, NJ' },
    { name:'HoneyBrook Organic Farm', when:'On-farm market', time:'Seasonal', where:'Pennington, NJ' },
    { name:'Ironbound Farmers Market', when:'Seasonal', time:'Check market hours', where:'Newark, NJ' },
    { name:'West Windsor Community Farmers’ Market', when:'Seasonal', time:'Check market hours', where:'West Windsor, NJ' }
  ],

  // partner locator from https://www.google.com/maps/d/viewer?mid=1xxR2HcEiPs_C84lLQk1EjnsqJNw0P7yk
  // NJ restaurants, retail, ShopRite, Foodtown, and farmers' markets. Deduped. Out-of-state broth/Sprouts layers omitted.
  LOCATIONS: [
    { name:'Mighty Dare Farm — pick-up barn', town:'Millstone', type:'farm' },

    { name:'12 Farms Restaurant', town:'Cream Ridge', type:'restaurant' },
    { name:'26 West On The Navesink', town:'Red Bank', type:'restaurant' },
    { name:'618 Restaurant', town:'Matawan', type:'restaurant' },
    { name:'Al Ponte', town:'Belmar', type:'restaurant' },
    { name:'Almost Home General', town:'Holmdel', type:'restaurant' },
    { name:'Anjelica’s', town:'Sea Bright', type:'restaurant' },
    { name:'Atlantic Highlands Yacht Club', town:'Atlantic Highlands', type:'restaurant' },
    { name:'Avenue Le Club', town:'Long Branch', type:'restaurant' },
    { name:'B2 Bistro + Bar', town:'Point Pleasant', type:'restaurant' },
    { name:'B2 Bistro + Bar', town:'Red Bank', type:'restaurant' },
    { name:'Baseline Social', town:'Little Silver', type:'restaurant' },
    { name:'Belford Bistro', town:'Belford', type:'restaurant' },
    { name:'Birravino', town:'Red Bank', type:'restaurant' },
    { name:'Bistro Iberia', town:'Highlands', type:'restaurant' },
    { name:'Bloomfield Steak & Seafood House', town:'Bloomfield', type:'restaurant' },
    { name:'Blu Grotto', town:'West Long Branch', type:'restaurant' },
    { name:'Brandl', town:'Belmar', type:'restaurant' },
    { name:'Cardinal Provisions', town:'Asbury Park', type:'restaurant' },
    { name:'Catch 19', town:'Red Bank', type:'restaurant' },
    { name:'Catherine’s Farm to Table', town:'Wall', type:'restaurant' },
    { name:'Christine’s', town:'Atlantic Highlands', type:'restaurant' },
    { name:'Copper Canyon', town:'Atlantic Highlands', type:'restaurant' },
    { name:'DSN Community Center', town:'Deal', type:'restaurant' },
    { name:'Drew’s Bayshore Bistro', town:'Keyport', type:'restaurant' },
    { name:'Drifthouse by David Burke', town:'Sea Bright', type:'restaurant' },
    { name:'Drumthwacket Foundation', town:'Princeton', type:'restaurant' },
    { name:'E. Holland Sundries', town:'Asbury Park', type:'restaurant' },
    { name:'Eagle Ridge Golf Club', town:'Lakewood', type:'restaurant' },
    { name:'Flavia’s Cucina Romana', town:'Asbury Park', type:'restaurant' },
    { name:'Gabriella’s Italian Steakhouse', town:'Rumson', type:'restaurant' },
    { name:'Gaslight', town:'Atlantic Highlands', type:'restaurant' },
    { name:'Harvest', town:'Howell', type:'restaurant' },
    { name:'Il Nido', town:'Marlboro', type:'restaurant' },
    { name:'Jasper Stone Italian Steakhouse', town:'Monroe Township', type:'restaurant' },
    { name:'KITCH Organic', town:'Red Bank', type:'restaurant' },
    { name:'La Lupa', town:'Englishtown', type:'restaurant' },
    { name:'La Mondina', town:'Spring Lake', type:'restaurant' },
    { name:'Lamppost Bistro Bar & Lounge', town:'Toms River', type:'restaurant' },
    { name:'Langosta Lounge', town:'Asbury Park', type:'restaurant' },
    { name:'Locale', town:'Rumson', type:'restaurant' },
    { name:'Manasquan River Golf Club', town:'Brielle', type:'restaurant' },
    { name:'Nettie’s', town:'Tinton Falls', type:'restaurant' },
    { name:'Olivia’s II Pizza and Pasta', town:'Oceanport', type:'restaurant' },
    { name:'One Willow', town:'Highlands', type:'restaurant' },
    { name:'Porcini', town:'Highlands', type:'restaurant' },
    { name:'Red Horse by David Burke', town:'Sea Bright', type:'restaurant' },
    { name:'Rooney’s Oceanfront Restaurant', town:'Long Branch', type:'restaurant' },
    { name:'Salt Steakhouse', town:'Long Branch', type:'restaurant' },
    { name:'Seared', town:'Jackson', type:'restaurant' },
    { name:'Solo', town:'Matawan', type:'restaurant' },
    { name:'Spring Lake Golf Club', town:'Spring Lake', type:'restaurant' },
    { name:'Stage Left Steak', town:'New Brunswick', type:'restaurant' },
    { name:'STRADA', town:'Atlantic Highlands', type:'restaurant' },
    { name:'Taka', town:'Asbury Park', type:'restaurant' },
    { name:'THE GOAT by David Burke', town:'Hazlet', type:'restaurant' },
    { name:'The Atlantic House', town:'Atlantic Highlands', type:'restaurant' },
    { name:'The Bernards Inn', town:'Bernardsville', type:'restaurant' },
    { name:'The Black Swan', town:'Asbury Park', type:'restaurant' },
    { name:'The Butcher’s Block', town:'Long Branch', type:'restaurant' },
    { name:'The Park Loft', town:'Sea Bright', type:'restaurant' },
    { name:'The Whitechapel Projects', town:'Long Branch', type:'restaurant' },
    { name:'Triumph Brewing Company', town:'Red Bank', type:'restaurant' },
    { name:'Undici', town:'Rumson', type:'restaurant' },
    { name:'Victory Park Tavern', town:'Rumson', type:'restaurant' },
    { name:'Villa Amalfi', town:'Toms River', type:'restaurant' },
    { name:'Wave Resort', town:'Long Branch', type:'restaurant' },
    { name:'Zina', town:'Toms River', type:'restaurant' },

    { name:'Burke’s Market', town:'Manasquan', type:'grocer' },
    { name:'Dearborn Market', town:'Holmdel', type:'grocer' },
    { name:'Delicious Orchards', town:'Colts Neck', type:'grocer' },
    { name:'Foodtown of Atlantic Highlands', town:'Atlantic Highlands', type:'grocer' },
    { name:'Foodtown of Red Bank', town:'Red Bank', type:'grocer' },
    { name:'Foodtown of Sea Girt', town:'Sea Girt', type:'grocer' },
    { name:'Green Life Market', town:'Byram', type:'grocer' },
    { name:'Green Life Market', town:'Montclair', type:'grocer' },
    { name:'Green Life Market', town:'Wayne', type:'grocer' },
    { name:'Green’s Natural Foods', town:'Basking Ridge', type:'grocer' },
    { name:'Green’s Natural Foods', town:'Chester', type:'grocer' },
    { name:'Green’s Natural Foods', town:'Ocean Township', type:'grocer' },
    { name:'Green’s Natural Foods', town:'Shrewsbury', type:'grocer' },
    { name:'Local 130 Seafood', town:'Belmar', type:'grocer' },
    { name:'ShopRite of Belmar', town:'Belmar', type:'grocer' },
    { name:'ShopRite of Byram', town:'Byram', type:'grocer' },
    { name:'ShopRite of Flanders', town:'Flanders', type:'grocer' },
    { name:'ShopRite of Franklin', town:'Franklin', type:'grocer' },
    { name:'ShopRite of Hadley Commons', town:'South Plainfield', type:'grocer' },
    { name:'ShopRite of Hamilton Square', town:'Hamilton Square', type:'grocer' },
    { name:'ShopRite of Hazlet', town:'Hazlet', type:'grocer' },
    { name:'ShopRite of Hoboken', town:'Hoboken', type:'grocer' },
    { name:'ShopRite of Kings Commons', town:'Middletown', type:'grocer' },
    { name:'ShopRite of Lawrenceville', town:'Lawrenceville', type:'grocer' },
    { name:'ShopRite of Mansfield', town:'Mansfield', type:'grocer' },
    { name:'ShopRite of Montgomery', town:'Montgomery', type:'grocer' },
    { name:'ShopRite of Newton', town:'Newton', type:'grocer' },
    { name:'ShopRite of Ramsey', town:'Ramsey', type:'grocer' },
    { name:'ShopRite of Shrewsbury', town:'Shrewsbury', type:'grocer' },
    { name:'ShopRite of South Brunswick', town:'South Brunswick', type:'grocer' },
    { name:'ShopRite of Sparta', town:'Sparta', type:'grocer' },
    { name:'ShopRite of Succasunna', town:'Succasunna', type:'grocer' },
    { name:'ShopRite of Sussex', town:'Sussex', type:'grocer' },
    { name:'ShopRite of Wall Township', town:'Wall', type:'grocer' },
    { name:'ShopRite of Wayne', town:'Wayne', type:'grocer' },
    { name:'ShopRite of West Long Branch', town:'West Long Branch', type:'grocer' },
    { name:'ShopRite of Wyckoff', town:'Wyckoff', type:'grocer' },
    { name:'Sickles Market', town:'Little Silver', type:'grocer' },
    { name:'Sickles Market', town:'Red Bank', type:'grocer' },
    { name:'The Food Emporium', town:'Marlboro', type:'grocer' },
    { name:'The Fresh Grocer of Fieldstone Plaza', town:'Oakland', type:'grocer' },
    { name:'Waterwitch', town:'Highlands', type:'grocer' },

    { name:'Alstede Farms', town:'Chester', type:'market' },
    { name:'Asbury Park Farmers Market', town:'Asbury Park', type:'market' },
    { name:'Blue Moon Acres', town:'Pennington', type:'market' },
    { name:'Brick Farmers’ Market', town:'Brick', type:'market' },
    { name:'Cook’s Market', town:'New Brunswick', type:'market' },
    { name:'Ethos Farm Project Organic Market', town:'Long Valley', type:'market' },
    { name:'Fernbrook Farms CSA', town:'Chesterfield', type:'market' },
    { name:'HoneyBrook Organic Farm', town:'Pennington', type:'market' },
    { name:'Ironbound Farmers Market', town:'Newark', type:'market' },
    { name:'West Windsor Community Farmers’ Market', town:'West Windsor', type:'market' }
  ],

  PARTNERS: [
    { label:'Farm-to-table restaurants', desc:'On menus across the Shore & beyond', count:'60+' },
    { label:'Specialty grocers', desc:'Independent markets, ShopRite & Foodtown', count:'40+' },
    { label:'Farm pick-up', desc:'Mighty Dare Farm · Millstone', count:'1' },
    { label:"Farmers' markets", desc:'Weekend stalls & on-farm stands', count:'10' }
  ],

  POLICIES: [
    { title:'Fresh mushrooms', body:'Because our mushrooms are fresh and perishable, all sales are final. If something isn’t right with your order, let us know within 24 hours of pick-up and we’ll replace it or refund you.' },
    { title:'Broth & merchandise', body:'Unopened, shelf-stable broth and unworn merchandise can be returned within 14 days for a full refund. Just bring your receipt to the farm.' },
    { title:'Local pick-up only (fresh)', body:'To protect quality, we don’t ship fresh mushrooms. Please choose pick-up at checkout and collect your order at Mighty Dare Farm during open hours. Broth ships free nationwide.' },
    { title:'Damaged or incorrect items', body:'If you receive the wrong item or something arrives damaged, contact us and we’ll sort it out right away — no fuss.' }
  ],

  CATS: [
    { key:'All', label:'All Mushrooms' },
    { key:'Oyster', label:'Oyster Family' },
    { key:'Specialty', label:'Specialty' },
    { key:'Chef', label:"Chef's Picks" }
  ]
};

// flat catalog for cart/PDP lookups
TRM.catalog = function(){ return [...this.PRODUCTS, ...this.BROTH, ...this.OTHER]; };
TRM.find = function(id){ return this.catalog().find(p => p.id === id); };
TRM.money = function(n){ return '$' + Number(n).toFixed(2); };
