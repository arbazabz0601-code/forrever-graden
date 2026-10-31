/* Forever Garden – shared media library (index.html + all inner pages)
   Your own files live in /images (extension auto-detected). Stock photos (marked stock:1)
   come from Pexels (free licence) – replace them later by adding your own file and
   changing the entry (give it an `f` name instead of a `u` url). */
window.FG=(function(){
const W='WhatsApp Image 2026-10-30 at ',V='WhatsApp Video 2026-10-30 at ';
const PX=id=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;
const FB=PX(7193660);
const EXT='jpeg,jpg,png,webp,JPEG,JPG,PNG';
const M={},list=[];
function add(id,f,t,tags,o){
  const it=Object.assign({id,f,t,tags:tags.split(' '),k:'img',x:EXT},o||{});
  M[id]=it;list.push(it);return it;
}
/* ---- your WhatsApp photos ---- */
add('a1', W+'5.14.47 PM','Red Blossom Lobby Tree','flowering hotel office');
add('a2', W+'5.14.50 PM','White Cherry Blossom Café','flowering restaurant');
add('a3', W+'5.14.55 PM','Pink Blossom Tree in Designer Pot','flowering planter home');
add('a4', W+'5.15.05 PM','Red Blossom Dining Canopy','flowering restaurant');
add('a5', W+'5.20.22 PM','Crimson Blossom Office Corner','flowering office');
add('a6', W+'5.20.51 PM','Purple-Red Blossom Showroom','flowering office home');
add('a7', W+'5.20.56 PM (1)','Scarlet Blossom Entrance','flowering hotel');
add('a8', W+'5.20.57 PM','Red Blossom Statement Tree','flowering banquet');
add('a9', W+'5.20.58 PM','Crimson Lounge Tree','flowering hotel');
add('a10',W+'5.21.00 PM','Peach Blossom Atrium Tree','flowering hotel banquet');
add('a11',W+'5.21.05 PM','Magenta Blossom Tree','flowering planter banquet');
add('a12',W+'5.21.06 PM (1)','Cherry Blossom Interior','flowering restaurant home');
add('a13',W+'5.21.07 PM','Blossom Feature Wall','wall flowering hotel');
add('a14',W+'5.21.08 PM','Autumn Orange Canopy Tree','large flowering resort');
add('a15',W+'5.21.09 PM (1)','Golden Orange Grand Tree','large hotel resort');
add('a16',W+'5.21.13 PM','Pink Blossom Corner Décor','flowering banquet home');
add('a17',W+'5.21.16 PM','Purple Blossom Salon Tree','flowering home office');
/* ---- your WhatsApp videos ---- */
const VX='mp4,MP4,mov,webm';
add('v1',V+'5.21.20 PM (1)','Blossom Tree in Entrance Hall','flowering hotel video',{k:'vid',x:VX});
add('v2',V+'5.21.20 PM','Red Blossom Tree Walkthrough','flowering banquet video',{k:'vid',x:VX});
add('v3',V+'5.21.22 PM','Blossom Wall Backdrop','wall flowering video',{k:'vid',x:VX});
add('v4',V+'5.21.23 PM','Illuminated Feature Wall','wall hotel video',{k:'vid',x:VX});
add('v5',V+'5.21.24 PM (1)','Blossom Wall Close-up','wall flowering video',{k:'vid',x:VX});
add('v6',V+'5.21.24 PM','Blossom Wall Installation','wall office video',{k:'vid',x:VX});
/* ---- your banners ---- */
const BX='jpg,jpeg,png,webp,JPG,JPEG,PNG',TX='png,jpg,jpeg,webp,PNG,JPG,JPEG';
add('new', 'new','Golden Hall Tree','large hotel',{x:BX});
add('new1','new1','Grand Atrium Tree','large resort',{x:BX});
add('new2','new2','Green Banyan Tree Hall','large resort hotel',{x:BX});
add('try', 'try','Pink Blossom Tree Hall','large banquet hotel',{x:TX});
add('try1','try1','Golden Blossom Tree Hall','large banquet',{x:TX});
add('try2','try2','Evergreen Tree Hall','large home',{x:TX});
add('banner', 'banner','Signature Large Tree','large',{x:BX});
add('banner1','banner1','Artificial Palm Trees','palm',{x:BX});
add('banner2','banner2','Flowering Tree Collection','flowering',{x:BX});
/* ---- topic stock photos (Pexels) ---- */
const S=[
 ['px_palm1',7645577,'Areca Palm Décor'],['px_palm2',1470403,'Tall Palm Trees'],['px_palm3',261101,'Poolside Palm Tree'],['px_palm4',7193660,'Potted Green Plant'],['px_palm5',17590971,'Palm Trees around Pool'],
 ['px_atrium',36776751,'Indoor Trees in Mall'],['px_atrium2',30497768,'Indoor Garden Atrium'],['px_tropical',9989484,'Tropical Trees Hall'],['px_dubai',4835292,'Green Biodome Interior'],['px_dome',37160765,'Mall Dome with Greenery'],
 ['px_green1',30343627,'Lush Indoor Greenhouse'],['px_green2',28905710,'Tropical Plants Greenhouse'],['px_ficus',15191694,'Large Ficus Tree'],
 ['px_pots1',3952031,'Plants in Designer Pots'],['px_pots2',9707245,'Clay Pot Plants'],['px_flower1',31500320,'Spring Flower Arrangement'],['px_flower2',31739478,'Elegant Flower Bouquet'],['px_bougain',1732419,'Bougainvillea Blooms'],
 ['px_lobby1',6758532,'Luxury Hotel Lobby'],['px_lobby2',28999491,'Modern Hotel Lobby'],['px_lobby3',17264519,'Hotel Interior Décor'],['px_lobby5',37252307,'Upscale Lobby Lounge'],
 ['px_rest_ceil',10133364,'Flowers on Restaurant Ceiling'],['px_cafe1',28927606,'Café with Greenery'],['px_cafe2',10826634,'Café Bar with Plants'],
 ['px_stage',36669332,'Green Floral Wedding Stage'],['px_aisle',7082467,'Decorated Wedding Aisle'],['px_arch',38348659,'Floral Wedding Arch'],['px_arch2',15242526,'Flower Arch Ceremony'],
 ['px_resort1',39598347,'Resort Palms by the Pool'],['px_resort2',8484839,'Pool Beside Palm Trees'],['px_resort3',35167994,'Tropical Resort Palms'],['px_resort4',261105,'Poolside Palm Tree'],['px_resort5',33191057,'Tropical Resort View'],
 ['px_office1',28461040,'Office Interior with Plants'],['px_office2',39985110,'Office Desk with Plants'],['px_office3',15599144,'Workspace Greenery'],
 ['px_wall1',1188834,'Green Plant Wall'],['px_wall2',7443025,'Hanging Plants on Wall'],
 ['px_home1',5825380,'Living Room with Plants'],['px_home2',4451407,'Cozy Living Room Greenery'],['px_home3',5824517,'Sofa Corner with Plant'],['px_home4',3952028,'Potted Plant on Shelf'],['px_home5',30765724,'Cozy Home with Plants'],
 ['px_nursery',102721,'Plant Nursery'],['px_green3',12315415,'Plants in Greenhouse'],['px_bougain2',33224462,'Pink Bougainvillea Garden']
];
S.forEach(s=>add(s[0],null,s[2],'stock',{u:PX(s[1]),stock:1}));

/* files are looked up next to the html first, then inside /images */
const PRE=['','images/'];
const enc=(f,x,p)=>encodeURI((p||'')+f+'.'+x);
const combo=(f,xs,i)=>enc(f,xs[i%xs.length],PRE[Math.floor(i/xs.length)]);
function img(it,alt){
  alt=(alt||it.t||'').replace(/"/g,'');
  if(it.u)return `<img loading="lazy" src="${it.u}" alt="${alt}" onerror="FG.err(this)">`;
  const xs=it.x.split(',');
  return `<img loading="lazy" src="${enc(it.f,xs[0])}" data-f="${it.f}" data-x="${it.x}" data-i="0" alt="${alt}" onerror="FG.err(this)">`;
}
/* video: several <source> candidates so any WhatsApp export (mp4/MP4/mov/webm) plays */
const MIME={mp4:'video/mp4',MP4:'video/mp4',mov:'video/quicktime',webm:'video/webm'};
function vid(it,o){
  o=o||{};
  const xs=it.x.split(','),n=xs.length;
  const all=[];PRE.forEach(p=>xs.forEach(x=>all.push([p,x])));
  const src=all.map((a,i)=>`<source src="${enc(it.f,a[1],a[0])}" type="${MIME[a[1]]||'video/mp4'}"${i===all.length-1?' onerror="FG.verr(this)"':''}>`).join('');
  return `<video data-v${o.controls?' controls':''}${o.noloop?'':' loop'}${o.muted===0?'':' muted'} ${o.autoplay?'autoplay ':''}playsinline preload="${o.controls?'auto':'metadata'}">${src}</video>`;
}
function verr(s){const v=s.parentNode,p=v.parentNode;if(p){p.classList.add('img-fallback');p.insertAdjacentHTML('beforeend','<em class="verr">Video file not found</em>')}v.remove()}
function err(el){
  if(el.dataset.fbd){if(el.parentNode)el.parentNode.classList.add('img-fallback');el.remove();return}
  if(el.dataset.f){
    const xs=el.dataset.x.split(','),i=+el.dataset.i+1;
    if(i<xs.length*PRE.length){el.dataset.i=i;el.src=combo(el.dataset.f,xs,i);return}
  }
  el.dataset.fbd=1;el.src=FB;
}
/* play videos only while they are on screen (autoplay, muted, loop) */
function watch(root){
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    const v=e.target;
    if(e.isIntersecting){const p=v.play();p&&p.catch&&p.catch(()=>{})}else v.pause();
  }),{threshold:.2});
  (root||document).querySelectorAll('video[data-v]').forEach(v=>{v.muted=true;io.observe(v)});
}
const own=()=>list.filter(i=>!i.stock&&i.f&&!/^(new|new1|new2|try|try1|try2|banner|banner1|banner2)$/.test(i.id));
/* any plain <img> (logo etc.) that is missing next to the html is retried inside /images */
document.addEventListener('error',e=>{const el=e.target;
  if(el&&el.tagName==='IMG'&&!el.dataset.f&&!el.dataset.fbd&&!el.dataset.retry){const s=el.getAttribute('src')||'';
    if(s&&!/^(https?:|data:|images\/)/.test(s)){el.dataset.retry=1;el.src='images/'+s}}},true);
return {M,list,img,vid,verr,err,watch,own,PX,enc};
})();
