(function(){
const P=document.body.dataset.page,app=document.getElementById('app'),M=FG.M;
const WA='918851541077';
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent('Hello Forever Garden! '+t)}`;
const ARROW='<svg width="18" height="18" viewBox="0 0 24 24"><path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const NAV=[['index.html','Home',''],['categories.html','Artificial Trees','categories'],['solutions.html','By Industry','solutions'],['projects.html','Projects','projects'],['about.html','About Us','about'],['index.html#contact','Contact','']];

/* ---------- page content ---------- */
const HERO={
  categories:{img:'try2',eye:'Shop by Category',t:'Artificial Trees, Palms, Flowers & Planters',d:'Handcrafted greenery made to look real and built to last — explore every collection below.'},
  solutions:{img:'try1',eye:'By Industry',t:'Green Solutions for Every Space',d:'Hotels, restaurants, banquet halls, resorts, offices and homes — see how we transform each one.'},
  projects:{img:'try',eye:'Featured Projects',t:'Our Work, Our Pride',d:'A look at real installations by Forever Garden — photos and videos from our latest projects.'},
  about:{img:'new2',eye:'About Us',t:'Crafting Green Spaces for a Better Tomorrow',d:'1500+ projects delivered, 3 showrooms and service across 28+ states of India.'}
};
const CATS=[
 {id:'large',n:'01',sub:'Statement Greenery',t:'Large Artificial Trees',tag:'large',d:'Grand, lifelike trees for lobbies, atriums, showrooms and event halls. Each trunk is steel-reinforced and finished by hand, so it stands tall for years with no watering, pruning or dust worries.',pts:['Heights from 5 ft to 20 ft+','UV-treated, fade-resistant leaves','Custom sizes and canopy shapes','Fire-retardant options available']},
 {id:'palm',n:'02',sub:'Tropical Look',t:'Artificial Palm Trees',tag:'palm',d:'Areca, kentia, date and coconut palms that bring a resort feel to any space. Natural-look trunks and soft, flowing fronds — ideal for pool sides, lobbies and cafés.',pts:['Indoor & outdoor grade','Realistic textured trunks','Wind-stable bases','Bulk supply for resorts']},
 {id:'flowering',n:'03',sub:'Always In Bloom',t:'Flowering Trees',tag:'flowering',d:'Cherry blossom, bougainvillea, red & pink blossom trees that make a dramatic first impression. Perfect for weddings, entrances, dining areas and photo corners — always in full bloom.',pts:['Red, pink, white, peach & orange','Reusable for events','Custom canopy & colour matching','On-site installation support']},
 {id:'planter',n:'04',sub:'Finishing Touch',t:'Designer Planters',tag:'planter',d:'Premium pots, fibre planters and flower arrangements that complete the look. Pair any tree or plant with a planter that suits your décor theme.',pts:['Fibre, ceramic & metal finishes','Matching flower arrangements','Sizes for table-top to floor','Weighted bases for stability']}
];
const SOLS=[
 {id:'hotel',n:'01',sub:'Hotels',t:'Hotel Lobby & Reception',tag:'hotel',d:'Make a lasting first impression. Statement trees and floral arrangements that give your lobby, reception and corridors a luxury, welcoming feel — year-round with zero upkeep.',pts:['Lobby feature trees','Corridor & suite greenery','Seasonal theme décor','Pan-India supply & fitting']},
 {id:'restaurant',n:'02',sub:'Dining',t:'Restaurants & Cafés',tag:'restaurant',d:'Hanging greens, blossom canopies and table plants that keep your dining space fresh and Instagram-ready. Dust-free, easy-to-clean finishes with fire-safe options.',pts:['Blossom ceilings & canopies','Fire-safe materials','Quick installation','Easy to wipe & maintain']},
 {id:'banquet',n:'03',sub:'Events',t:'Banquet & Wedding Lawns',tag:'banquet',d:'Floral arches, entrance décor and stage backdrops in artificial flowers — reusable, stunning and always in bloom, whatever the season or weather.',pts:['Entrance & stage décor','Theme designing','Reusable for multiple events','On-site setup team']},
 {id:'resort',n:'04',sub:'Outdoors',t:'Resorts & Outdoor Spaces',tag:'resort',d:"Nature's beauty all year round. UV-resistant trees and palms built for sun, rain and wind, so poolsides, gardens and walkways always look their best.",pts:['UV & weather-resistant','Poolside palms','Large garden trees','Bulk project pricing']},
 {id:'office',n:'05',sub:'Workspaces',t:'Office Spaces',tag:'office',d:'Boost productivity and positivity. Greenery for reception areas, cabins and open workspaces that never needs watering or sunlight.',pts:['Reception feature trees','Desk & cabin plants','Green partitions','Low-light friendly']},
 {id:'wall',n:'06',sub:'Walls',t:'Vertical Garden',tag:'wall',d:'Green walls and blossom feature walls that turn a plain surface into a showpiece. Custom sizes with back-lit and photo-wall options.',pts:['Custom wall sizes','Blossom & green walls','LED back-lit options','Fast installation']},
 {id:'home',n:'07',sub:'Homes',t:'Home Décor',tag:'home',d:'Beautiful flower arrangements, indoor plants and designer planters for your living room, balcony and bedroom — safe for pets and kids.',pts:['No watering needed','Pet & kid friendly','Free home advice','Planters & arrangements']},
 {id:'trees',n:'08',sub:'Big Impact',t:'Artificial Trees & Palms',tag:'large',d:'Bigger greenery, greater impact. Our biggest trees and palms for malls, showrooms, atriums and large commercial interiors.',pts:['Tallest custom trees','Showroom & mall projects','Steel-frame build','Delivery across India']}
];

const IDS={
 /* categories */
 large:['new','px_atrium','new1','a15','banner'],
 palm:['banner1','px_palm1','px_palm2','px_palm3','px_palm4'],
 flowering:['banner2','a8','a1','a9','a10'],
 planter:['px_pots1','a3','px_pots2','px_flower1','a11'],
 /* industries */
 hotel:['px_lobby1','a7','v1','px_lobby2','px_lobby5'],
 restaurant:['px_cafe1','a2','a4','px_cafe2','a12'],
 banquet:['px_stage','a16','v2','px_aisle','px_arch2'],
 resort:['px_resort1','a14','px_resort2','px_resort3','px_resort5'],
 office:['px_office1','a5','px_office2','a6','v6'],
 wall:['v3','px_wall1','a13','v5','v4'],
 home:['px_home1','a17','px_home2','px_home3','px_home4'],
 trees:['px_atrium2','px_dubai','px_dome','px_green1','px_green2']
};
/* ---------- builders ---------- */
function header(){
  return `<header class="ph"><div class="container nav">
  <a href="index.html" class="logo"><img src="logo1.png" alt="Forever Garden"><span class="brand"><b>Forever Garden</b><small>Crafting Green Spaces</small></span></a>
  <nav id="nav"><ul>${NAV.map(n=>`<li><a href="${n[0]}" class="${n[2]===P?'active':''}">${n[1]}</a></li>`).join('')}</ul></nav>
  <a href="${wa('I would like a bulk quote.')}" target="_blank" class="btn fill" style="padding:11px 22px">Get a Bulk Quote ${ARROW}</a>
  <button class="burger" id="burger" aria-label="Menu">☰</button></div></header>`;
}
function hero(){
  const h=HERO[P];
  return `<section class="phero"><div class="hb">${FG.img(M[h.img],h.t)}</div><div id="petals"></div>
  <div class="container hi"><div class="crumb"><a href="index.html">Home</a> / ${h.eye}</div>
  <h1>${h.t}</h1><p>${h.d}</p>
  <div class="btns"><a class="btn gold" href="${wa('I want a quote.')}" target="_blank">Get a Free Quote ${ARROW}</a><a class="btn ghost" href="index.html">← Back to Home</a></div></div></section>`;
}
let tIdx=0;
function tile(it,grp,label){
  const media=it.k==='vid'?FG.vid(it):FG.img(it,it.t);
  const d=(tIdx++%6)*.08;
  return `<figure class="tile rv z" style="transition-delay:${d}s" data-g="${grp}" data-id="${it.id}" data-tags="${it.tags.join(' ')}">
  <div class="tm">${media}</div><span class="badge">${it.k==='vid'?'▶ Video':label||'Forever Garden'}</span><span class="zoom">⤢</span>
  <figcaption><b>${it.t}</b><small>Tap to view</small></figcaption></figure>`;
}
function pickItems(s){return (IDS[s.id]||[]).map(k=>M[k]).filter(Boolean)}
function sectionHTML(s,i,label){
  const items=pickItems(s);
  return `<section class="ps" id="${s.id}"><div class="container">
  <div class="ps-head rv"><span class="num">${s.n}</span><div><small>${s.sub}</small><h2>${s.t}</h2></div></div>
  <div class="ps-body"><div class="ps-text rv l"><p>${s.d}</p><ul class="pts">${s.pts.map(p=>`<li>🌿 ${p}</li>`).join('')}</ul>
  <a class="btn fill" target="_blank" href="${wa('I am interested in '+s.t+'. Please share details.')}">Enquire Now ${ARROW}</a></div>
  <div class="mosaic">${items.map(it=>tile(it,s.id,label)).join('')}</div></div></div></section>`;
}
function jump(list){
  return `<div class="jump"><div class="container row">${list.map(s=>`<a class="chip" href="#${s.id}" data-s="${s.id}">${s.t}</a>`).join('')}</div></div>`;
}
function cta(){
  return `<section class="cta"><div class="container rv"><h2>Have a Project in Mind?</h2><p>Call or WhatsApp us for bulk enquiries and expert advice. We deliver all over India.</p>
  <div class="btns"><a class="btn gold" target="_blank" href="${wa('I have a project in mind.')}">💬 Chat on WhatsApp</a><a class="btn ghost" href="tel:+918851541077">📞 +91-88515 41077</a><a class="btn ghost" href="index.html#contact">Request Callback</a></div></div></section>`;
}
function footer(){
  return `<div id="site-footer"></div>
  <a class="wa-float" href="https://wa.me/${WA}" target="_blank" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-8.6 15L2 22l5.1-1.3A10 10 0 1012 2zm5.2 13.9c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.8-.1 1.3z"/></svg></a>
  <div id="lb"><button class="x" aria-label="Close">✕</button><button class="pv" aria-label="Previous">‹</button><button class="nx" aria-label="Next">›</button><div class="stage"></div><div class="cap"></div></div>`;
}

/* ---------- page types ---------- */
let body='';
if(P==='categories'||P==='solutions'){
  const L=P==='categories'?CATS:SOLS;
  body=jump(L)+L.map((s,i)=>sectionHTML(s,i,P==='categories'?'Collection':'Project')).join('');
}
if(P==='projects'){
  const all=FG.list.filter(i=>!i.stock);
  const F=[['all','All Work'],['hotel','Hotels'],['restaurant','Restaurants'],['banquet','Banquet'],['office','Office'],['home','Home'],['wall','Feature Walls'],['video','Videos']];
  body=`<div class="jump"><div class="container row" id="filters">${F.map((f,i)=>`<button class="chip ${i?'':'on'}" data-f="${f[0]}">${f[1]}</button>`).join('')}</div></div>
  <section class="ps" style="background:transparent"><div class="container">
  <div class="ps-head rv"><span class="num">${all.length}</span><div><small>Photos &amp; Videos</small><h2>Our Latest Installations</h2></div></div>
  <div class="masonry" id="grid">${all.map(it=>tile(it,'proj','Project')).join('')}</div>
  </div></section>`;
}
if(P==='about'){
  const A=['px_nursery','px_green3','px_bougain2'].map(k=>M[k]);
  const BR=[['Delhi – Karol Bagh','5/7, Saraswati Marg, Block 5, WEA Karol Bagh, New Delhi-110005','+91-99107 11296','+919910711296','5/7 Saraswati Marg, WEA Karol Bagh, New Delhi 110005'],['Delhi – Kirti Nagar','2/4, W.H.S. Kirti Nagar, Delhi-110015','+91-88515 41077','+918851541077','2/4 W.H.S. Kirti Nagar, Delhi 110015'],['Noida Branch','LGB-24, Galaxy Diamond Plaza, Greater Noida West, 201009-UP','+91-88515 41077','+918851541077','Galaxy Diamond Plaza, Greater Noida West 201009']];
  const V=[['🌿','Zero Maintenance','No watering, pruning or sunlight — just lasting greenery.'],['💎','Premium Finish','Hand-finished leaves, trunks and blooms that look real.'],['🎨','Custom Designs','Sizes, colours and canopies made to suit your space.'],['🚚','Pan-India Delivery','We deliver and install across 28+ states.']];
  const strip=FG.own().filter(i=>i.k==='img');
  body=`<section class="ps"><div class="container"><div class="about-story">
   <div class="rv l"><div class="ps-head" style="margin-bottom:18px"><div><small>Our Story</small><h2>Forever Garden</h2></div></div>
   <p>Forever Garden brings premium artificial trees, flowers and plants to hotels, restaurants, cafés, banquet halls, offices and homes. Every piece is crafted to look real and built to last — with zero maintenance.</p>
   <p>With 1500+ projects delivered, 500+ product designs and service across 28+ states, we supply and install greenery for every kind of space. Visit one of our three showrooms to experience the quality in person.</p>
   <a class="btn fill" href="projects.html">See Our Projects ${ARROW}</a></div>
   <div class="about-img">${A.slice(0,3).map(it=>tile(it,'about','Forever Garden')).join('')}</div></div></div></section>
  <div class="stats"><div class="container row">
   <div class="rv"><b data-n="1500" data-s="+">0</b>Projects Delivered</div><div class="rv"><b data-n="3" data-s="">0</b>Branches</div>
   <div class="rv"><b data-n="500" data-s="+">0</b>Product Designs</div><div class="rv"><b data-n="28" data-s="+">0</b>States Served</div></div></div>
  <section class="ps"><div class="container"><div class="ps-head rv"><div><small>Why Us</small><h2>What Makes Us Different</h2></div></div>
   <div class="vals">${V.map((v,i)=>`<div class="val rv" style="transition-delay:${i*.12}s"><div class="ic">${v[0]}</div><h4>${v[1]}</h4><p>${v[2]}</p></div>`).join('')}</div></div></section>
  <section class="ps" id="branches"><div class="container"><div class="ps-head rv"><div><small>Visit Us</small><h2>Our Branches</h2></div></div>
   <div class="br3">${BR.map((b,i)=>`<div class="branch rv" style="transition-delay:${i*.15}s"><div class="pill">📍 ${b[0]}</div><p>${b[1]}</p><a class="ph" href="tel:${b[3]}">📞 ${b[2]}</a><a class="mp" target="_blank" href="https://www.google.com/maps/search/${encodeURIComponent(b[4])}">View on Google Maps →</a></div>`).join('')}</div></div></section>
  <div class="marq"><div class="track">${strip.concat(strip).map(it=>tile(it,'strip','Gallery').replace('rv z','in')).join('')}</div></div>`;
}

app.innerHTML=header()+hero()+body+(P==='about'?'':cta())+footer();
if(P==='about')app.insertAdjacentHTML('beforeend','');

/* ---------- behaviour ---------- */
FG.watch(document);
/* shared footer */
FGFooter(document.getElementById('site-footer'));

const curtain=document.getElementById('curtain');
setTimeout(()=>curtain&&curtain.classList.add('hide'),600);
document.getElementById('burger').onclick=()=>document.getElementById('nav').classList.toggle('open');

/* petals */
const pb=document.getElementById('petals'),cols=['#e8467c','#f48fb1','#4caf50','#d32f2f','#7bc67b'];
for(let i=0;i<16;i++){const d=document.createElement('div');d.className='petal';
  d.innerHTML=`<svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M5 19C5 9 11 4 20 4c0 9-5 15-13 15" fill="${cols[i%5]}"/></svg>`;
  d.style.left=Math.random()*100+'%';d.style.animationDuration=(10+Math.random()*12)+'s';d.style.animationDelay=(-Math.random()*16)+'s';
  d.style.width=d.style.height=(10+Math.random()*16)+'px';pb.appendChild(d)}

/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);
  setTimeout(()=>{e.target.style.transitionDelay='0s'},1400)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

/* counters */
const st=document.querySelector('.stats');
if(st){let done=0;new IntersectionObserver((es,o)=>{if(es[0].isIntersecting&&!done){done=1;
  document.querySelectorAll('[data-n]').forEach(el=>{const n=+el.dataset.n,s=el.dataset.s;let t0=null;
    const step=ts=>{t0=t0||ts;const p=Math.min((ts-t0)/1800,1);el.textContent=Math.floor(n*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)})}},{threshold:.4}).observe(st)}

/* 3D tilt + video hover */
document.addEventListener('mousemove',e=>{const t=e.target.closest&&e.target.closest('.tile');if(!t)return;
  const tm=t.querySelector('.tm'),r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  tm.style.transform=`perspective(800px) rotateX(${-y*7}deg) rotateY(${x*7}deg)`});
document.addEventListener('mouseout',e=>{const t=e.target.closest&&e.target.closest('.tile');if(t&&!t.contains(e.relatedTarget)){const tm=t.querySelector('.tm');tm.style.transform=''}});

/* jump bar highlight */
const chips=[...document.querySelectorAll('.chip[data-s]')];
if(chips.length){addEventListener('scroll',()=>{let id='';document.querySelectorAll('.ps[id]').forEach(s=>{if(scrollY>=s.offsetTop-220)id=s.id});
  chips.forEach(c=>{const on=c.dataset.s===id;c.classList.toggle('on',on);if(on)c.scrollIntoView({block:'nearest',inline:'center'})})},{passive:true})}

/* projects filter */
const fl=document.getElementById('filters');
if(fl)fl.addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;
  fl.querySelectorAll('.chip').forEach(c=>c.classList.toggle('on',c===b));const f=b.dataset.f;
  document.querySelectorAll('#grid .tile').forEach(t=>{
    const show=f==='all'||t.dataset.tags.split(' ').includes(f==='video'?'video':f);
    t.classList.toggle('gone',!show);
    if(show){t.classList.remove('pop-in');void t.offsetWidth;t.classList.add('pop-in');t.classList.add('in')}});
});

/* lightbox */
const lb=document.getElementById('lb'),stage=lb.querySelector('.stage'),cap=lb.querySelector('.cap');
let cur=[],ci=0;
function show(){const it=M[cur[ci]];
  stage.innerHTML=it.k==='vid'?FG.vid(it,{controls:1,autoplay:1,muted:0}):FG.img(it,it.t).replace('loading="lazy"','');
  cap.innerHTML=`${it.t}<small>${ci+1} / ${cur.length}</small>`}
function open(grp,id){
  cur=[...document.querySelectorAll(`.tile[data-g="${grp}"]:not(.gone)`)].map(t=>t.dataset.id).filter((v,i,a)=>a.indexOf(v)===i);
  ci=Math.max(0,cur.indexOf(id));show();lb.classList.add('show');document.body.style.overflow='hidden'}
function close(){lb.classList.remove('show');stage.innerHTML='';document.body.style.overflow=''}
const go=d=>{ci=(ci+d+cur.length)%cur.length;show()};
document.addEventListener('click',e=>{const t=e.target.closest('.tile');if(t&&!lb.contains(e.target)){open(t.dataset.g,t.dataset.id)}});
lb.querySelector('.x').onclick=close;lb.querySelector('.pv').onclick=()=>go(-1);lb.querySelector('.nx').onclick=()=>go(1);
lb.addEventListener('click',e=>{if(e.target===lb)close()});
document.addEventListener('keydown',e=>{if(!lb.classList.contains('show'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')go(-1);if(e.key==='ArrowRight')go(1)});

/* deep-link scroll after render */
if(location.hash){setTimeout(()=>{const t=document.querySelector(location.hash);t&&t.scrollIntoView({behavior:'smooth'})},700)}
})();
