const SURL='https://gffzskbxjzgewztjhncz.supabase.co';
const SKEY='sb_publishable_agTW0NWNmrewQJZuOGV6Lw_llciY6Yw';
let _DB=null;
window.addEventListener('load',()=>{_DB=supabase.createClient(SURL,SKEY);LD();});

const $=id=>document.getElementById(id);
const M=[{id:1,n:'Sophie',i:1200},{id:2,n:'Mohammed',i:1800},{id:3,n:'Lisa',i:2100},{id:4,n:'Ravi',i:2300},{id:5,n:'Emma',i:2800},{id:6,n:'Pieter',i:3400},{id:7,n:'Yasmine',i:4200},{id:8,n:'Jan',i:5800}];
const SH_DATA=[
{n:'Ekoplaza',c:'voeding',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,w:'https://www.ekoplaza.nl'},
{n:'Odin',c:'voeding',t:'cooperative',s:'hybrid',bio:5,fair:4,sust:4,lo:4,w:'https://www.odin.nl'},
{n:'Marqt',c:'voeding',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:5,w:'https://www.marqt.com'},
{n:'Pieter Pot',c:'voeding',t:'steward',s:'online',bio:4,fair:4,sust:5,lo:3,w:'https://www.pieterpot.nl'},
{n:"Tony's Chocolonely",c:'voeding',t:'steward',s:'online',bio:3,fair:5,sust:4,lo:1,w:'https://www.tonyschocolonely.com'},
{n:'De Vegetarische Slager',c:'voeding',t:'steward',s:'hybrid',bio:4,fair:4,sust:5,lo:3,w:'https://www.devegetarischeslager.nl'},
{n:'Moyee Coffee',c:'voeding',t:'steward',s:'online',bio:4,fair:5,sust:4,lo:2,w:'https://www.moyeecoffee.com'},
{n:'Rechtstreex',c:'voeding',t:'steward',s:'hybrid',bio:4,fair:5,sust:5,lo:5,w:'https://www.rechtstreex.nl'},
{n:'Boerschappen',c:'voeding',t:'steward',s:'online',bio:4,fair:5,sust:5,lo:5,w:'https://www.boerschappen.nl'},
{n:'Bioplanet',c:'voeding',t:'retailer',s:'hybrid',bio:5,fair:4,sust:4,lo:3,w:'https://www.bioplanet.nl'},
{n:'Udea/Ekomarkt',c:'voeding',t:'cooperative',s:'hybrid',bio:5,fair:4,sust:5,lo:4,w:'https://www.udea.nl'},
{n:'Zonnatura',c:'voeding',t:'steward',s:'hybrid',bio:5,fair:4,sust:4,lo:3,w:'https://www.zonnatura.nl'},
{n:'Mud Jeans',c:'kleding',t:'steward',s:'online',bio:4,fair:5,sust:5,lo:2,w:'https://www.mudjeans.eu'},
{n:'Nudie Jeans',c:'kleding',t:'steward',s:'hybrid',bio:4,fair:5,sust:5,lo:2,w:'https://www.nudiejeans.com'},
{n:'Kuyichi',c:'kleding',t:'steward',s:'online',bio:4,fair:5,sust:5,lo:2,w:'https://www.kuyichi.com'},
{n:'Patagonia',c:'kleding',t:'steward',s:'hybrid',bio:4,fair:4,sust:5,lo:1,w:'https://eu.patagonia.com/nl'},
{n:'Organic Basics',c:'kleding',t:'steward',s:'online',bio:5,fair:5,sust:5,lo:1,w:'https://www.organicbasics.com'},
{n:'Armed Angels',c:'kleding',t:'steward',s:'online',bio:5,fair:5,sust:5,lo:1,w:'https://www.armedangels.com'},
{n:'Fairphone',c:'tech',t:'steward',s:'online',bio:null,fair:5,sust:5,lo:2,w:'https://www.fairphone.com'},
{n:'Leapp',c:'tech',t:'retailer',s:'hybrid',bio:null,fair:3,sust:5,lo:3,w:'https://www.leapp.nl'},
{n:'Back Market',c:'tech',t:'retailer',s:'online',bio:null,fair:3,sust:5,lo:1,w:'https://www.backmarket.nl'},
{n:'Renew Electronics',c:'witgoed',t:'retailer',s:'online',bio:null,fair:3,sust:5,lo:3,w:'https://www.renewelectronics.nl'},
{n:'Repair Café NL',c:'witgoed',t:'steward',s:'physical',bio:null,fair:5,sust:5,lo:5,w:'https://repaircafe.org/nl'},
{n:'Seepje',c:'verzorging',t:'steward',s:'online',bio:5,fair:4,sust:5,lo:2,w:'https://www.seepje.com'},
{n:'Weleda',c:'verzorging',t:'steward',s:'hybrid',bio:5,fair:4,sust:5,lo:2,w:'https://www.weleda.nl'},
{n:"Dr. Bronner's",c:'verzorging',t:'steward',s:'online',bio:5,fair:5,sust:5,lo:1,w:'https://www.drbronner.nl'},
{n:'Landwinkel.nl',c:'markt',t:'steward',s:'hybrid',bio:4,fair:5,sust:5,lo:5,w:'https://www.landwinkel.nl'},
{n:'Boerenmarkt.nl',c:'markt',t:'steward',s:'physical',bio:4,fair:5,sust:5,lo:5,w:'https://www.boerenmarkt.nl'},
{n:'Herenboeren',c:'markt',t:'cooperative',s:'physical',bio:5,fair:5,sust:5,lo:5,w:'https://www.herenboeren.nl'},
{n:'Triodos Bank',c:'financien',t:'steward',s:'online',bio:null,fair:5,sust:5,lo:4,w:'https://www.triodos.nl'},
{n:'ASN Bank',c:'financien',t:'steward',s:'online',bio:null,fair:5,sust:5,lo:4,w:'https://www.asnbank.nl'},
{n:'Swapfiets',c:'mobiliteit',t:'steward',s:'physical',bio:null,fair:4,sust:4,lo:5,w:'https://www.swapfiets.nl'},
{n:'Vandebron',c:'energie',t:'steward',s:'online',bio:null,fair:5,sust:5,lo:4,w:'https://www.vandebron.nl'},
{n:'Buurtzorg',c:'zorg',t:'steward',s:'physical',bio:null,fair:5,sust:5,lo:5,w:'https://www.buurtzorg.com'},
{n:'Tony\'s Chocolonely',c:'voeding',t:'steward',s:'online',bio:3,fair:5,sust:4,lo:1,w:'https://www.tonyschocolonely.com'},
{n:'De Groene Weg',c:'voeding',t:'cooperative',s:'physical',bio:5,fair:4,sust:4,lo:4,w:'https://www.degroeneweg.nl'},
{n:'Rewear',c:'kleding',t:'retailer',s:'physical',bio:null,fair:3,sust:5,lo:4,w:'https://www.rewear.nl'},
{n:'Sympany',c:'kleding',t:'steward',s:'physical',bio:null,fair:4,sust:5,lo:4,w:'https://www.sympany.nl'},
{n:'Refurbed',c:'tech',t:'retailer',s:'online',bio:null,fair:3,sust:5,lo:2,w:'https://www.refurbed.nl'},
{n:'Closing the Loop',c:'tech',t:'steward',s:'online',bio:null,fair:5,sust:5,lo:2,w:'https://www.closingtheloop.eu'},
{n:'De Witgoedboer',c:'witgoed',t:'retailer',s:'physical',bio:null,fair:3,sust:4,lo:5,w:'https://www.dewitgoedboer.nl'},
{n:'Plukk',c:'verzorging',t:'steward',s:'online',bio:4,fair:4,sust:5,lo:3,w:'https://www.plukk.nl'},
{n:'Dr. Bronner\'s',c:'verzorging',t:'steward',s:'online',bio:5,fair:5,sust:5,lo:1,w:'https://www.drbronner.nl'},
{n:'Bioboerderijen.nl',c:'markt',t:'steward',s:'hybrid',bio:5,fair:5,sust:5,lo:5,w:'https://www.bioboerderijen.nl'},
{n:'Oikocredit',c:'financien',t:'cooperative',s:'online',bio:null,fair:5,sust:5,lo:2,w:'https://www.oikocredit.nl'},
{n:'Greenwheels',c:'mobiliteit',t:'steward',s:'physical',bio:null,fair:4,sust:5,lo:5,w:'https://www.greenwheels.com'},
{n:'Greenchoice',c:'energie',t:'steward',s:'online',bio:null,fair:4,sust:5,lo:3,w:'https://www.greenchoice.nl'},
{n:'Powerpeers',c:'energie',t:'steward',s:'online',bio:null,fair:5,sust:5,lo:5,w:'https://www.powerpeers.nl'},
{n:'Urgenda',c:'vrije_tijd',t:'steward',s:'online',bio:null,fair:5,sust:5,lo:5,w:'https://www.urgenda.nl'},
{n:'Natuurmonumenten',c:'vrije_tijd',t:'cooperative',s:'physical',bio:null,fair:5,sust:5,lo:5,w:'https://www.natuurmonumenten.nl'},
{n:'Peerby',c:'wonen',t:'steward',s:'online',bio:null,fair:5,sust:5,lo:5,w:'https://www.peerby.com'},
{n:'Weaver Green',c:'wonen',t:'steward',s:'online',bio:null,fair:4,sust:5,lo:1,w:'https://www.weavergreen.com'},
{n:'Naiff Care',c:'verzorging',t:'steward',s:'hybrid',bio:4,fair:4,sust:4,lo:4,w:'https://www.naif.nl'},
{n:'Faith in Nature',c:'verzorging',t:'steward',s:'online',bio:5,fair:4,sust:5,lo:1,w:'https://www.faithinnature.co.uk'}
];
const TX={wasmachine:{c:['witgoed']},koelkast:{c:['witgoed']},ijskast:{c:['witgoed']},laptop:{c:['tech']},telefoon:{c:['tech']},jeans:{c:['kleding']},shampoo:{c:['verzorging']},wasmiddel:{c:['verzorging']},energie:{c:['energie']},fiets:{c:['mobiliteit']},spinazie:{c:['voeding','markt']},koffie:{c:['voeding']},chocolade:{c:['voeding']}};
const OSC=[
['netwerk','🌐 Netwerk','#2d5a27','Contacten?','Wie ken je?'],
['wetenschap','🔬 Kennis','#1a7a6e','Kennis?','Welke kennis?'],
['vaardigheid','🎯 Talent','#5b4fa8','Vaardigheden?','Welk talent?'],
['tijd','⏳ Tijd','#c45e00','Tijd?','Hoeveel tijd?'],
['middelen','💰 Middelen','#c17f24','Middelen?','Welke middelen?'],
['xfactor','✨ X-factor','#b85450','Uniek?','Jouw bijdrage?']
];

const SC=[{id:'voeding',l:'Voeding & Drinken',e:'🥦',c:'#2d5a27'},{id:'kleding',l:'Kleding & Mode',e:'👕',c:'#1a7a6e'},{id:'tech',l:'Technologie',e:'💻',c:'#5b4fa8'},{id:'witgoed',l:'Witgoed & Elektronica',e:'🔌',c:'#c45e00'},{id:'wonen',l:'Wonen & Interieur',e:'🛋️',c:'#c17f24'},{id:'verzorging',l:'Lichaam & Verzorging',e:'🌿',c:'#2d5a27'},{id:'markt',l:'Boerenmarkt & Landwinkel',e:'🌾',c:'#c45e00'},{id:'financien',l:'Financiën',e:'💰',c:'#1a7a6e'},{id:'mobiliteit',l:'Mobiliteit',e:'🚲',c:'#5b4fa8'},{id:'energie',l:'Energie & Klimaat',e:'⚡',c:'#c17f24'},{id:'zorg',l:'Zorg & Welzijn',e:'🏥',c:'#b85450'},{id:'vrije_tijd',l:'Natuur & Vrije Tijd',e:'🎭',c:'#2d5a27'}];
const QD={invest:{c:'#2d5a27',l:'Investeren',d:'Renteloos le.',di:['Initiatief starten','Renteloze lening','Deelnemen'],fi:['Geld vloeit terug','Geen rente, wel verantwoordelijkheid']},support:{c:'#1a7a6e',l:'Ondersteunen',d:'Persoonlijke.',di:['Persoonlijke voordracht','Groei ondersteunen','Geen criteria'],fi:['Gift, geen lening','Vertrouwen als basis']},crowd:{c:'#5b4fa8',l:'Crowdfunding',d:'Initiatieven.',di:['Criteria-selectie','Gelijke stem','Consent-besluitvorming'],fi:['Geld vrij bij haalbaarheid','Collectief beheer']},give:{c:'#c17f24',l:'Weggeven',d:'Zuivere gift.',di:['Geen verwachtingen','Onpersoonlijk','Trickledown'],fi:['Pure gift','Versterkt het systeem']}};
const PS=['Idee','Actief','Afgerond'],STC={Idee:'#c17f24',Actief:'#2d5a27',Afgerond:'#6b7260'};
var projs=[];var supporters=[];let mbrs=[...M],shops=[...SH_DATA];
var hf='Alle';let fx=false,nid=200,cws=0,cwa={},cwr=null,ks=0,ka={},km=[];

function G(p){
 ['home','sharing','caring','shopping','helping'].forEach(x=>{const s=$('p-'+x);if(s)s.classList.remove('show');const n=$('nb-'+x);if(n){n.classList.remove('on');n.style.background='';}});
 const s=$('p-'+p);if(s)s.classList.add('show');
  const C={sharing:'#2d5a27',caring:'#1a7a6e',shopping:'#c17f24',helping:'#b85450'};
  if(C[p]){const n=$('nb-'+p);if(n){n.classList.add('on');n.style.background=C[p];}}
  if(p==='sharing')CS();if(p==='helping')RH();if(p==='shopping')SH();
  $('st-s').textContent=shops.length;
}

function CS(){
  const inc=+(mI.value)||0,pct=fx?(inc>0?(+(fa.value)||0)/inc:0):(+(ps.value)||0)/100;
  const mc=fx?(+(fa.value)||0):Math.round(inc*pct);
  if(!fx)$('pl').textContent=ps.value+'% = €'+mc.toLocaleString('nl-NL')+'/mnd';
  const all=[...mbrs,{id:0,n:'Jij',i:inc,me:true}];
  const pool=all.reduce((s,m)=>s+Math.round(m.i*pct),0),pp=all.length?Math.round(pool/all.length):0;
  const comp=all.map(m=>({...m,cn:Math.round(m.i*pct),rc:pp,nt:pp-Math.round(m.i*pct)}));
  const me=comp.find(m=>m.me)||{cn:0,rc:0,nt:0};
  const avg=mbrs.length?Math.round(mbrs.reduce((s,m)=>s+m.i,0)/mbrs.length):0;
  $('st-l').textContent=mbrs.length+1;
  $('pst').innerHTML=[{l:'Leden',v:comp.length,c:'#5b4fa8'},{l:'Pool',v:'€'+pool.toLocaleString('nl-NL'),c:'#1a7a6e'},{l:'Per persoon',v:'€'+pp.toLocaleString('nl-NL'),c:'#2d5a27'},{l:'Gem.ink.',v:'€'+avg.toLocaleString('nl-NL'),c:'#c17f24'}].map(s=>`<div class="card" style="text-align:center;padding:8px 5px;"><div style="font-family:'Lora',serif;font-size:14px;font-weight:700;color:${s.c};">${s.v}</div><div style="font-size:9px;color:var(--mu);">${s.l}</div></div>`).join('');
  RS(me,comp,pool,avg);
}
function SF(v){fx=v;$('pr').style.display=v?'none':'block';$('fr').style.display=v?'block':'none';$('pb1').className='tb'+(v?'':' on');$('pb2').className='tb'+(v?' on':'');CS();}
function ST(i){[0,1,2].forEach(j=>{$('tab'+j).style.display=j===i?'block':'none';$('t'+j).className='tb'+(j===i?' on':'');});}
function RS(me,comp,pool,avg){
  const nt=me.nt,na=Math.abs(nt),g=nt>=0?'#2d5a27':'#b85450';
  $('tab0').innerHTML=`<div class="card" style="margin-bottom:10px;"><div style="text-align:center;margin-bottom:11px;"><div style="font-size:22px;margin-bottom:3px;">${nt>=0?'🌱':'💛'}</div><h2 style="font-size:14px;color:${g};">${!me.i?'Vul je inkomen in':''}</h2></div><div style="display:flex;gap:6px;margin-bottom:9px;"><div style="flex:1;border-radius:10px;padding:10px 6px;text-align:center;background:var(--cl);"><div style="font-size:9px;color:var(--mu);margin-bottom:1px;">Jij geeft</div><div style="font-family:'Lora',serif;font-size:16px;font-weight:700;color:var(--co);">↑ €${me.cn.toLocaleString('nl-NL')}</div></div><div style="flex:1;border-radius:10px;padding:10px 6px;text-align:center;background:var(--gl);"><div style="font-size:9px;color:var(--mu);margin-bottom:1px;">Jij ontvangt</div><div style="font-family:'Lora',serif;font-size:16px;font-weight:700;color:var(--g);">↓ €${me.rc.toLocaleString('nl-NL')}</div></div></div><div style="border-radius:10px;padding:12px;text-align:center;background:${nt>=0?'var(--gl)':'var(--cl)'};"><div style="font-size:9px;color:var(--mu);text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;">Netto</div><div style="font-family:'Lora',serif;font-size:28px;font-weight:700;color:${g};">${nt>=0?'+':'−'}€${na.toLocaleString('nl-NL')}</div><div style="font-size:10px;color:var(--mu);margin-top:1px;">per maand</div></div></div>`;
  $('tab1').innerHTML=`<div class="card"><h3 style="font-size:13px;margin-bottom:8px;">Alle ${comp.length} deelnemers</h3><table style="width:100%;border-collapse:collapse;font-size:11px;"><thead><tr style="background:#f8f5f0;font-size:8px;text-transform:uppercase;color:var(--mu);">${['Naam','Inkomen','Bijdrage','Ontvangt','Netto'].map((h,i)=>`<th style="padding:3px 5px;text-align:${i?'right':'left'};">${h}</th>`).join('')}</tr></thead><tbody>${[...comp].sort((a,b)=>a.i-b.i).map(m=>`<tr style="background:${m.me?'var(--gl)':'transparent'};border-bottom:1px solid var(--br);"><td style="padding:5px 5px;font-weight:${m.me?600:400};color:${m.me?'#2d5a27':'var(--tx)'};">${m.n}${m.me?' ⬅':''}</td><td style="text-align:right;padding:5px;color:var(--mu);">€${m.i.toLocaleString('nl-NL')}</td><td style="text-align:right;padding:5px;color:var(--co);">−€${m.cn.toLocaleString('nl-NL')}</td><td style="text-align:right;padding:5px;color:var(--t);">+€${m.rc.toLocaleString('nl-NL')}</td><td style="text-align:right;padding:5px;font-weight:600;color:${m.nt>=0?'#2d5a27':'#b85450'};">${m.nt>=0?'+':''}€${Math.abs(m.nt).toLocaleString('nl-NL')}</td></tr>`).join('')}<tr style="border-top:2px solid var(--br);font-weight:700;"><td style="padding:5px;font-size:8px;color:var(--mu);">TOTAAL</td><td></td><td style="text-align:right;padding:5px;color:var(--co);">€${pool.toLocaleString('nl-NL')}</td><td style="text-align:right;padding:5px;color:var(--t);">€${pool.toLocaleString('nl-NL')}</td><td style="text-align:right;padding:5px;color:#2d5a27;">€0</td></tr></tbody></table></div>`;
  $('tab2').innerHTML=`<div class="card" style="margin-bottom:10px;"><h3 style="font-size:13px;margin-bottom:10px;">👥 Deelnemer toevoegen</h3><div style="display:grid;grid-template-columns:1fr 1fr auto;gap:6px;align-items:end;"><div><label style="font-size:8px;font-weight:600;text-transform:uppercase;color:var(--mu);display:block;margin-bottom:3px;">Naam</label><input id="nn" placeholder="Sara" onkeydown="if(event.key==='Enter')AM()" style="width:100%;padding:6px 9px;border:1px solid var(--br);border-radius:7px;font-size:13px;background:var(--w);color:var(--tx);"></div><div><label style="font-size:8px;font-weight:600;text-transform:uppercase;color:var(--mu);display:block;margin-bottom:3px;">Inkomen/mnd</label><div style="position:relative;"><span style="position:absolute;left:7px;top:50%;transform:translateY(-50%);font-weight:700;color:var(--g);font-size:11px;">€</span><input id="ni" type="number" placeholder="2500" onkeydown="if(event.key==='Enter')AM()" style="width:100%;padding:6px 7px 6px 18px;border:1px solid var(--br);border-radius:7px;font-size:13px;background:var(--w);color:var(--tx);"></div></div><button onclick="AM()" style="background:var(--g);color:#fff;padding:6px 10px;border-radius:7px;font-size:13px;font-weight:600;height:33px;border:none;cursor:pointer;">+</button></div></div><div class="card"><div style="display:flex;justify-content:space-between;margin-bottom:8px;"><h3 style="font-size:13px;">${mbrs.length} leden</h3><span style="font-size:11px;color:var(--mu);">Gem.ink: <strong style="color:var(--g);">€${avg.toLocaleString('nl-NL')}</strong></span></div><div style="display:flex;flex-direction:column;gap:4px;">${[...mbrs].sort((a,b)=>a.i-b.i).map(m=>{const cl=comp.find(c=>c.id===m.id)||{nt:0};return`<div style="display:grid;grid-template-columns:auto 1fr auto auto;gap:7px;align-items:center;padding:7px 9px;border-radius:9px;background:#f8f5f0;border:1px solid var(--br);"><div style="width:26px;height:26px;border-radius:50%;background:hsl(${m.i/30},40%,55%);display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:#fff;">${(m.n||'').split(' ').map(w=>w[0]).join('').slice(0,2)}</div><div><div style="font-size:12px;font-weight:500;">${m.n}</div><div style="font-size:10px;color:var(--mu);">€${m.i.toLocaleString('nl-NL')}/mnd</div></div><div style="text-align:right;"><div style="font-size:8px;color:var(--mu);">netto</div><div style="font-size:10px;font-weight:600;color:${cl.nt>=0?'#2d5a27':'#b85450'};">${cl.nt>=0?'+':''}€${Math.abs(cl.nt).toLocaleString('nl-NL')}</div></div><button onclick="RM(${m.id})" style="width:22px;height:22px;border-radius:50%;background:var(--w);color:var(--mu);font-size:13px;border:1px solid var(--br);cursor:pointer;display:flex;align-items:center;justify-content:center;">×</button></div>`;}).join('')}</div></div>`;
}
function AM(){const n=($('nn')||{}).value||'',i=+($('ni')||{}).value||0;if(!n.trim()||!i)return;mbrs.push({id:++nid,n:n.trim(),i});CS();}
function RM(id){mbrs=mbrs.filter(m=>m.id!==id);CS();}

function CT(i){['ck0','ck1','ck2'].forEach((id,j)=>{const el=document.getElementById(id);if(el)el.style.display=i===j?'block':'none';});['ct0','ct1','ct2'].forEach((id,j)=>{const b=document.getElementById(id);if(!b)return;b.className='tb'+(i===j?' on':'');});if(i===1)RCW();if(i===2){window._sc=window._sc||[];ROS();}}

function SQ(id,btn){const q=QD[id];document.querySelectorAll('.qb').forEach(b=>b.classList.remove('sel'));btn.classList.add('sel');$('qd').innerHTML=`<div style="border-radius:12px;border:1px solid ${q.c};padding:14px;animation:fu .3s ease both;"><div style="display:flex;align-items:center;gap:8px;margin-bottom:9px;"><div style="width:32px;height:32px;border-radius:8px;background:${q.c};display:flex;align-items:center;justify-content:center;font-size:16px;color:#fff;flex-shrink:0;">${{invest:'📈',support:'🌱',crowd:'👥',give:'🎁'}[id]}</div><div><h3 style="font-size:13px;color:${q.c};">${q.l}</h3><p style="font-size:11px;color:var(--mu);">${q.d}</p></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">${[{t:'Kenmerken',i:q.di},{t:'Financieel',i:q.fi}].map(s=>`<div><p style="font-size:8px;font-weight:600;text-transform:uppercase;color:var(--mu);margin-bottom:4px;">${s.t}</p>${s.i.map(d=>`<div style="display:flex;gap:4px;margin-bottom:3px;"><span style="width:4px;height:4px;border-radius:50%;background:${q.c};margin-top:5px;flex-shrink:0;"></span><span style="font-size:11px;">${d}</span></div>`).join('')}</div>`).join('')}</div></div>`;}
function RCW(){const wq=[{q:'Heb je een persoonlijke relatie met de ontvanger of het initiatief?',o:[{l:'✋ Ja',v:'y'},{l:'🌍 Nee',v:'n'}]},{q:'Stel je een voorwaarde of heb je een verwachting bij je bijdrage?',o:[{l:'📋 Ja',v:'y'},{l:'🕊️ Nee',v:'n'}]}];if(cwr){const q=QD[cwr];$('ck1').innerHTML=`<div class="card" style="border:1px solid ${q.c};"><div style="text-align:center;margin-bottom:12px;"><div style="width:44px;height:44px;border-radius:11px;background:${q.c};display:flex;align-items:center;justify-content:center;font-size:20px;color:#fff;margin:0 auto 8px;">${{invest:'📈',support:'🌱',crowd:'👥',give:'🎁'}[cwr]}</div><h2 style="font-size:17px;color:${q.c};margin-bottom:2px;">${q.l}</h2><p style="color:var(--mu);font-size:12px;">${q.d}</p></div>${q.di.map(d=>`<div style="display:flex;gap:6px;align-items:center;margin-bottom:5px;"><span style="width:12px;height:12px;border-radius:50%;background:${q.c}22;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="width:4px;height:4px;border-radius:50%;background:${q.c};"></span></span><span style="font-size:12px;">${d}</span></div>`).join('')}<button onclick="cwr=null;cws=0;cwa={};RCW();" style="margin-top:10px;width:100%;padding:7px;border-radius:8px;background:#f3f0eb;color:var(--mu);font-size:12px;border:none;cursor:pointer;">🔄 Opnieuw</button></div>`;return;}const step=wq[cws];$('ck1').innerHTML=`<div class="card"><div style="display:flex;gap:4px;margin-bottom:12px;">${wq.map((_,i)=>`<div style="flex:1;height:4px;border-radius:2px;background:${i<=cws?'#1a7a6e':'var(--br)'}"></div>`).join('')}</div><p style="font-size:11px;color:var(--mu);margin-bottom:2px;">Vraag ${cws+1} van ${wq.length}</p><h3 style="font-size:15px;margin-bottom:12px;">${step.q}</h3><div style="display:flex;flex-direction:column;gap:6px;">${step.o.map(o=>`<button class="wo" onclick="cwa['${cws===0?'p':'c'}']=this.dataset.v;${cws<1?'cws++;RCW()':'const p=cwa.p===\"y\",c=cwa.c===\"y\";cwr=p&&c?\"invest\":p?\"support\":c?\"crowd\":\"give\";RCW();'}" data-v="${o.v}">${o.l} <span style="color:var(--mu);">→</span></button>`).join('')}</div>${cws>0?`<button onclick="cws--;RCW();" style="margin-top:7px;padding:3px 8px;border-radius:5px;background:none;border:none;font-size:11px;color:var(--mu);cursor:pointer;">← Vorige</button>`:''}</div>`;}

function LTX(q){const ql=q.toLowerCase().trim();if(TX[ql])return TX[ql];const m=Object.entries(TX).find(([k])=>ql.includes(k)||k.includes(ql));return m?m[1]:null;}
function SH(){$('sb').style.display='none';$('sht').textContent='🛍️ Shopping';$('shs').textContent='Zoek op product of winkel, of gebruik de Koophulp.';si.value='';$('sc').innerHTML=`<p style="font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--mu);margin-bottom:9px;">Browse per categorie</p><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:7px;margin-bottom:18px;">${SC.map(cat=>`<div class="pl" onclick="SC2('${cat.id}')" style="padding:10px;"><div style="font-size:16px;margin-bottom:6px;">${cat.e}</div><div style="font-size:11px;font-weight:600;color:${cat.c};line-height:1.3;">${cat.l}</div><div style="font-size:9px;color:var(--mu);margin-top:2px;">${shops.filter(s=>s.c===cat.id).length} winkels</div></div>`).join('')}</div><div onclick="KH()" style="border-radius:14px;background:linear-gradient(135deg,#2d5a27,#1a7a6e);padding:14px;display:flex;align-items:center;gap:10px;cursor:pointer;"><div style="font-size:24px;">🧭</div><div><h3 style="font-size:13px;color:#fff;margin-bottom:1px;">Weet je niet waar te beginnen?</h3><p style="font-size:12px;color:rgba(255,255,255,.8);">Koophulp geeft persoonlijk advies.</p></div><div style="margin-left:auto;color:rgba(255,255,255,.6);font-size:16px;">→</div></div>`;}
function SC2(cid){$('sb').style.display='';const cat=SC.find(c=>c.id===cid);$('sht').textContent=cat.e+' '+cat.l;const lst=shops.filter(s=>s.c===cid);$('shs').textContent=lst.length+' winkels';$('sc').innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:7px;">${lst.map(s=>KA(s,'')).join('')}</div>`;}
function DS(){const q=si.value.trim();if(!q)return;$('sb').style.display='';$('sht').textContent='🛍️ "'+q+'"';const ex=LTX(q);const res=shops.filter(s=>{const d=s.n.toLowerCase().includes(q.toLowerCase())||s.d.toLowerCase().includes(q.toLowerCase());const em=ex&&(ex.c.includes(s.c));return d||em;});$('shs').textContent=res.length+' resultaten'+(ex?' (product herkend)':'');if(!res.length){$('sc').innerHTML=`<div style="text-align:center;padding:32px 0;"><div style="font-size:28px;margin-bottom:7px;">🔍</div><h3 style="font-size:14px;margin-bottom:4px;">Niets gevonden voor "${q}"</h3><p style="color:var(--mu);font-size:13px;">Probeer bijv. spinazie, ijskast, jeans</p></div>`;return;}let h=ex?`<div style="background:var(--al);border-radius:8px;padding:7px 12px;margin-bottom:10px;font-size:12px;color:var(--a);font-weight:500;">💡 Product herkend: winkels voor "${q}"</div>`:'';SC.forEach(cat=>{const cs=res.filter(s=>s.c===cat.id);if(!cs.length)return;h+=`<div style="margin-bottom:16px;"><div style="display:flex;align-items:center;gap:6px;margin-bottom:7px;"><span style="font-size:13px;">${cat.e}</span><h3 style="font-size:12px;font-weight:600;color:${cat.c};">${cat.l} (${cs.length})</h3></div><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:7px;">${cs.map(s=>KA(s,q)).join('')}</div></div>`;});$('sc').innerHTML=h;}
function LS(){const q=si.value.trim();if(q.length>=1)DS();else if(!q)SH();}
function HL(t,q){if(!q||!t)return t||'';const i=t.toLowerCase().indexOf(q.toLowerCase());if(i<0)return t;return t.slice(0,i)+'<mark>'+t.slice(i,i+q.length)+'</mark>'+t.slice(i+q.length);}
function TB(t){const m={steward:{l:'Steward',bg:'#eef5ec',c:'#2d5a27'},cooperative:{l:'Coöp',bg:'#eaf5f3',c:'#1a7a6e'},retailer:{l:'Retailer',bg:'#fdf5e8',c:'#c17f24'}}[t]||{l:'?',bg:'#f3f0eb',c:'#6b7260'};return`<span style="font-size:8px;padding:2px 5px;border-radius:4px;background:${m.bg};color:${m.c};font-weight:700;flex-shrink:0;">${m.l}</span>`;}
function SB(s){return[[s.bio,'Bio','#2d5a27'],[s.fair,'Fair','#1a7a6e'],[s.sust,'Duurz','#5b4fa8'],[s.lo,'Lokaal','#c17f24']].filter(([v])=>v!=null).map(([v,l,c])=>`<span style="padding:1px 5px;border-radius:8px;font-size:9px;font-weight:500;border:1px solid ${c}40;background:${c}15;color:${c};">${l} ${v}/5</span>`).join('');}
function KA(s,q){const cat=SC.find(c=>c.id===s.c)||{e:'🛍️',c:'#c17f24'};const dm=s.w?s.w.replace('https://','').replace('http://','').replace('www.','').split('/')[0]:'';return`<div class="cc"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:5px;"><div style="display:flex;align-items:center;gap:5px;flex:1;min-width:0;"><span style="font-size:12px;flex-shrink:0;">${cat.e}</span><h3 style="font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${HL(s.n,q)}</h3></div>${TB(s.t)}</div><p style="font-size:11px;color:var(--mu);line-height:1.6;margin-bottom:7px;flex:1;">${HL(s.d,q)}</p><div style="display:flex;gap:3px;flex-wrap:wrap;margin-bottom:6px;">${SB(s)}</div><div style="display:flex;gap:6px;align-items:center;margin-bottom:6px;font-size:10px;color:var(--mu);"><span>📍 ${s.p||'Landelijk'}</span><span>${s.s==='online'?'🌐':s.s==='physical'?'🏪':'🔀'}</span></div>${s.w?`<a href="${s.w}" target="_blank" class="sl">🔗 ${dm}</a>`:''}</div></div>`;}

function KH(){$('sb').style.display='';$('sht').textContent='🧭 Koophulp';$('shs').textContent='3 vragen — persoonlijk advies.';ks=0;ka={};km=[];RKH();}
function RKH(){const steps=[{q:'Wat wil je kopen?',o:SC.map(c=>({l:c.e+' '+c.l,v:c.id})),g:true},{q:'Wat is het belangrijkste?',m:true,o:[{l:'🌿 Bio',v:'bio'},{l:'🤝 Eerlijk',v:'fair'},{l:'♻️ Circulair',v:'sust'},{l:'📍 Lokaal',v:'local'},{l:'💰 Budget',v:'bgt'},{l:'🌐 Online',v:'onl'}]},{q:'Hoe wil je winkelen?',o:[{l:'🌐 Online',v:'onl'},{l:'🏪 Fysiek',v:'phy'},{l:'🔀 Maakt niet uit',v:'any'}]}];
if(ks>=steps.length){const sc=shops.map(s=>{let x=0;if(s.c===ka.cat)x+=12;const p=ka.prio||[];if(p.includes('bio')&&s.bio>=4)x+=5;if(p.includes('fair')&&s.fair>=4)x+=5;if(p.includes('sust')&&s.sust>=4)x+=5;if(p.includes('local')&&s.lo>=4)x+=5;if(p.includes('bgt'))x+=2;if(ka.svc==='onl'&&s.s!=='physical')x+=3;if(ka.svc==='phy'&&s.s!=='online')x+=3;if(s.t==='steward')x+=2;return{...s,x};}).sort((a,b)=>b.x-a.x).slice(0,8);$('sc').innerHTML=`<div style="background:linear-gradient(135deg,#2d5a27,#1a7a6e);border-radius:14px;padding:14px;margin-bottom:11px;text-align:center;"><div style="font-size:22px;margin-bottom:2px;">🎯</div><h2 style="font-size:15px;color:#fff;">Top ${sc.length} aanbevelingen</h2></div>${sc.map((s,i)=>{const cat=SC.find(c=>c.id===s.c)||{e:'🛍️'};const dm=s.w?s.w.replace('https://','').replace('http://','').replace('www.','').split('/')[0]:'';return`<div style="background:var(--w);border-radius:12px;border:1px solid var(--br);padding:12px;margin-bottom:8px;"><div style="display:flex;justify-content:space-between;margin-bottom:4px;"><div style="display:flex;align-items:center;gap:6px;"><span style="font-size:16px;">${cat.e}</span><div><div style="display:flex;align-items:center;gap:5px;"><span style="font-size:9px;font-weight:700;color:var(--a);">#${i+1}</span><strong style="font-size:13px;">${s.n}</strong></div><div style="font-size:10px;color:var(--mu);">📍 ${s.p||'Landelijk'}</div></div></div>${TB(s.t)}</div><p style="font-size:11px;color:var(--mu);line-height:1.6;margin-bottom:6px;">${s.d}</p><div style="display:flex;gap:5px;align-items:center;flex-wrap:wrap;">${SB(s)}${s.w?`<a href="${s.w}" target="_blank" class="sl" style="margin-left:auto;">🔗 ${dm}</a>`:''}</div></div>`;}).join('')}<div style="display:flex;gap:6px;"><button onclick="KH()" style="flex:1;background:var(--a);color:#fff;padding:8px;border-radius:8px;font-size:12px;font-weight:600;border:none;cursor:pointer;">🔄 Opnieuw</button><button onclick="SH()" style="padding:8px 10px;border-radius:8px;border:1px solid var(--br);background:none;font-size:11px;color:var(--mu);cursor:pointer;">Alle winkels</button></div>`;return;}
const step=steps[ks];$('sc').innerHTML=`<div class="card" style="max-width:520px;"><div style="display:flex;gap:4px;margin-bottom:12px;">${steps.map((_,i)=>`<div style="flex:1;height:4px;border-radius:2px;background:${i<=ks?'var(--a)':'var(--br)'}"></div>`).join('')}</div><p style="font-size:11px;color:var(--mu);margin-bottom:2px;">Stap ${ks+1} van ${steps.length}</p><h3 style="font-size:15px;margin-bottom:${step.m?3:9}px;">${step.q}</h3>${step.m?'<p style="font-size:10px;color:var(--a);margin-bottom:8px;font-weight:600;">✓ Meerdere keuzes mogelijk</p>':''}${ks===0?`<div style="margin-bottom:9px;"><p style="font-size:10px;color:var(--mu);margin-bottom:4px;">Of typ een product:</p><input placeholder="spinazie, ijskast, jeans…" onkeydown="if(event.key==='Enter'&&this.value.trim()){const q=this.value.trim();const ex=LTX(q);if(ex&&ex.c.length>0){ka.cat=ex.c[0];ks=1;RKH();}else{si.value=q;DS();}}" style="width:100%;padding:6px 10px;border:1px solid var(--br);border-radius:7px;font-size:13px;background:var(--w);color:var(--tx);"></div>`:''}<div style="display:grid;grid-template-columns:${step.g?'1fr 1fr':'1fr'};gap:6px;">${step.o.map(o=>{const act=step.m&&km.includes(o.v);return`<button class="wo${act?' sel':''}" onclick="${step.m?`const i=km.indexOf('${o.v}');i>=0?km.splice(i,1):km.push('${o.v}');RKH();`:`ka['${ks===0?'cat':ks===2?'svc':'x'}']=this.dataset.v;ks++;${ks===1?'ka.prio=[];':''}RKH();`}" data-v="${o.v}" style="font-size:${step.g?11:13}px;">${o.l} ${!step.m?'<span style="color:var(--mu);">→</span>':act?'<span style="color:var(--a);">✓</span>':''}</button>`;}).join('')}</div>${step.m?`<button onclick="ka.prio=[...km];ks++;RKH();" style="width:100%;margin-top:10px;background:var(--a);color:#fff;padding:9px;border-radius:8px;font-size:13px;font-weight:600;border:none;cursor:pointer;">Volgende →</button>`:''}</div>`;}

function OA(){$('sm').style.display='block';const I='width:100%;padding:6px 10px;border:1px solid var(--br);border-radius:7px;font-size:12px;background:var(--w);color:var(--tx);';$('sm').innerHTML=`<div class="mb" onclick="if(event.target===this)$('sm').style.display='none'"><div class="md"><h3 style="font-size:15px;margin-bottom:11px;">+ Winkel toevoegen</h3><div style="display:grid;gap:7px;"><input id="an" placeholder="Naam *" style="${I}"><input id="aw" placeholder="https://..." style="${I}"><textarea id="ad" placeholder="Beschrijving" rows="2" style="${I}resize:vertical;"></textarea><select id="ac" style="${I}">${SC.map(x=>`<option value="${x.id}">${x.e} ${x.l}</option>`).join('')}</select><select id="at_" style="${I}"><option value="steward">Steward-owned</option><option value="cooperative">Coöperatief</option><option value="retailer">Retailer</option></select><select id="as_" style="${I}"><option value="online">Online</option><option value="physical">Fysiek</option><option value="hybrid">Hybrid</option></select><div style="display:flex;gap:6px;"><button onclick="AS()" style="flex:1;background:var(--g);color:#fff;padding:9px;border-radius:8px;font-size:13px;font-weight:600;border:none;cursor:pointer;">Toevoegen</button><button onclick="$('sm').style.display='none';" style="padding:9px 12px;border-radius:8px;border:1px solid var(--br);background:none;font-size:12px;color:var(--mu);cursor:pointer;">✕</button></div></div></div></div>`;}

function AS(){const n=$('an').value.trim();if(!n)return;shops.unshift({n,c:$('ac').value,t:$('at_').value,s:$('as_').value,p:'',bio:null,fair:null,sust:null,lo:null,tg:[],d:$('ad').value.trim(),w:$('aw').value.trim()});$('sm').style.display='none';$('st-s').textContent=shops.length;SH();}

function RH(){
  const cnt=PS.reduce((a,s)=>({...a,[s]:projs.filter(p=>p.status===s).length}),{});
  document.getElementById('hst').innerHTML=PS.map(s=>`<div class="card" style="text-align:center;padding:9px;"><div style="font-family:'Lora',serif;font-size:22px;font-weight:700;color:${STC[s]};">${cnt[s]||0}</div><div style="font-size:10px;color:var(--mu);">${s}</div></div>`).join('');
  document.getElementById('hfi').innerHTML=['Alle',...PS].map(s=>{const ac=hf===s;return`<button class="pb" onclick="hf='${s}';RH();" style="${ac?'background:'+STC[s]+';border-color:'+STC[s]+';color:#fff;':''}">${s}</button>`;}).join('');
  const fil=projs.filter(p=>hf==='Alle'||p.status===hf);
  const M=p=>MATCH(p);
  document.getElementById('hl').innerHTML=fil.length?fil.map(p=>{
    const exp=window._exp&&window._exp.has(p.id);
    const mx=M(p);
    const nb=(p.needs||[]).map(v=>{const e=OSC.find(x=>x[0]===v)||[v,v,'#6b7260'];return'<span style="padding:1px 6px;border-radius:8px;font-size:9px;background:'+e[2]+'18;color:'+e[2]+';">'+e[1]+'</span>';}).join(' ');
    return'<div style="background:var(--w);border-radius:12px;border:1px solid '+(exp?'var(--t)':'var(--br)')+';padding:11px 12px;margin-bottom:7px;"><div style="display:flex;align-items:flex-start;gap:7px;"><div style="flex:1;cursor:pointer;" onclick="window._exp=window._exp||new Set();window._exp.has('+p.id+')?window._exp.delete('+p.id+'):window._exp.add('+p.id+');RH();"><div style="display:flex;gap:4px;align-items:center;margin-bottom:2px;flex-wrap:wrap;"><strong style="font-size:13px;">'+p.name+'</strong>'+(p.ind?'<span style="font-size:11px;color:var(--mu);"> — '+p.ind+'</span>':'')+'<span style="padding:2px 6px;border-radius:10px;font-size:9px;font-weight:600;background:'+STC[p.status]+'18;color:'+STC[p.status]+';">'+p.status+'</span></div>'+(nb?'<div style="margin-top:2px;">'+nb+'</div>':'')+(mx.length&&!exp?'<p style="font-size:10px;color:var(--t);margin-top:2px;">🤝 '+mx.map(s=>s.name).join(', ')+'</p>':'')+'</div><button onclick="DELP('+p.id+')" style="background:none;border:none;font-size:15px;cursor:pointer;color:var(--mu);">×</button></div>'+(exp?'<div style="margin-top:9px;padding-top:9px;border-top:1px solid var(--br);">'+(p.desc?'<p style="font-size:12px;color:var(--mu);margin-bottom:7px;">'+p.desc+'</p>':'')+(mx.length?'<p style="font-size:11px;font-weight:600;margin-bottom:5px;">Passende ondersteuners:</p>'+mx.map(s=>'<div style="display:flex;align-items:center;gap:7px;padding:5px 8px;border-radius:8px;background:var(--gl);margin-bottom:3px;"><span style="flex:1;font-size:12px;">'+s.name+'</span></div>').join(''):'')+'<div style="display:flex;gap:4px;margin-top:7px;">'+PS.filter(s=>s!==p.status).map(s=>'<button onclick="UPDP('+p.id+',\''+s+'\')" style="padding:2px 7px;border-radius:8px;font-size:9px;font-weight:500;background:'+STC[s]+'18;color:'+STC[s]+';border:none;cursor:pointer;">→ '+s+'</button>').join('')+'</div></div>':'')+'</div>';
  }).join(''):'<div style="text-align:center;padding:28px 0;color:var(--mu);">Geen projecten.</div>';}

function TH(){const f=document.getElementById('hf'),show=f.style.display==='none';f.style.display=show?'block':'none';if(!show)return;window._hn=[];f.innerHTML=`<div class="card" style="border:1px solid var(--co);"><h3 style="font-size:13px;margin-bottom:9px;">Nieuw project</h3><div style="display:grid;gap:7px;"><input id="pn" placeholder="Naam *" style="width:100%;padding:6px 10px;border:1px solid var(--br);border-radius:7px;font-size:12px;background:var(--w);color:var(--tx);"><input id="pi" placeholder="Indiener(s)" style="width:100%;padding:6px 10px;border:1px solid var(--br);border-radius:7px;font-size:12px;background:var(--w);color:var(--tx);"><textarea id="pd" placeholder="Beschrijving" rows="2" style="width:100%;padding:6px 10px;border:1px solid var(--br);border-radius:7px;font-size:12px;background:var(--w);color:var(--tx);resize:vertical;"></textarea><select id="pp" style="width:100%;padding:6px 10px;border:1px solid var(--br);border-radius:7px;font-size:12px;background:var(--w);color:var(--tx);">${PS.map(s=>`<option>${s}</option>`).join('')}</select><p style="font-size:11px;font-weight:600;">Welke ondersteuning nodig?</p><div id="hn-btns" style="display:flex;flex-direction:column;gap:5px;"></div><div style="display:flex;gap:5px;"><button onclick="SAV()" style="flex:1;background:var(--co);color:#fff;padding:8px;border-radius:8px;font-size:12px;font-weight:700;border:none;cursor:pointer;box-shadow:0 2px 6px var(--co)44;">✅ Opslaan</button><button onclick="document.getElementById('hf').style.display='none';" style="padding:8px 12px;border-radius:8px;border:2px solid var(--br);background:var(--bg);font-size:11px;font-weight:600;color:var(--tx);cursor:pointer;">✖ Annuleren</button></div></div></div>`;RHN();}

async function DELP(id){await _DB.from('projects').delete().eq('id',id);await LD();}async function UPDP(id,st){await _DB.from('projects').update({status:st}).eq('id',id);await LD();}function SD(){}
async function LD(){if(!_DB)return;const{data:pd}=await _DB.from('projects').select('*').order('created_at',{ascending:false});if(pd)projs=pd.map(p=>({...p,desc:p.description}));const{data:sd}=await _DB.from('supporters').select('*').order('created_at',{ascending:false});if(sd&&sd.length){supporters=sd;}else{try{const ls=localStorage.getItem('fs_sup');if(ls)supporters=JSON.parse(ls);}catch(e){}}RH();let d=document.getElementById('h-debug');if(d&&pd)d.innerHTML='✅ '+pd.length+' project(en) geladen';}
function MATCH(p){const pv=(p.needs||[]).map(x=>x&&x.v?x.v:x);return(supporters||[]).filter(s=>{const sv=(s.cats||[]).map(x=>x&&x.v?x.v:x);return pv.some(n=>sv.includes(n));});}
async function SAV(){const n=document.getElementById('pn');if(!n||!n.value.trim()){alert('Naam vereist');return;}const needs=OSC.map(([v])=>{const inp=document.getElementById('hn-'+v);const note=inp?inp.value.trim():'';return note?{v,note}:null;}).filter(Boolean);await _DB.from('projects').insert([{name:n.value.trim(),ind:(document.getElementById('pi')||{value:''}).value,status:(document.getElementById('pp')||{value:'Idee'}).value,description:(document.getElementById('pd')||{value:''}).value.trim(),needs}]);document.getElementById('hf').style.display='none';await LD();}
function RHN(){const b=document.getElementById('hn-btns');if(!b)return;b.innerHTML=OSC.map(([v,l,cl,q1,q2])=>{const ico=l.split(' ')[0];const lbl=l.split(' ').slice(1).join(' ');return'<div style="margin-bottom:8px;"><label style="display:flex;align-items:center;gap:5px;font-size:12px;font-weight:600;color:'+cl+';margin-bottom:3px;"><span style="font-size:15px;">'+ico+'</span>'+lbl+'</label><input id="hn-'+v+'" placeholder="'+q2+'" style="width:100%;padding:6px 10px;border:1px solid var(--br);border-radius:7px;font-size:12px;background:var(--w);color:var(--tx);box-sizing:border-box;" onfocus="this.style.borderColor=\''+cl+'\'" onblur="this.style.borderColor=\'var(--br)\'"></div>';}).join('');}
function ROS(){
  // OSC invoervelden
  const b=document.getElementById('sc-btns');
  if(b)b.innerHTML=OSC.map(([v,l,cl,q1,q2])=>{
    const ico=l.split(' ')[0],lbl=l.split(' ').slice(1).join(' ');
    return '<div style="margin-bottom:10px;"><label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:'+cl+';margin-bottom:4px;"><span style="font-size:16px;">'+ico+'</span>'+lbl+'</label><input id="osc-'+v+'" placeholder="'+q2+'" class="osc-inp" onfocus="this.style.borderColor=\''+cl+'\'" onblur="this.style.borderColor=\'var(--br)\'"></div>';
  }).join('');

  // Ondersteuner lijst via createElement (geen escaping issues)
  const sl=document.getElementById('sup-list');
  if(!sl)return;
  sl.innerHTML='';
  if(!supporters.length){
    sl.innerHTML='<p style="font-size:12px;color:var(--mu);padding:8px 0;">Nog geen ondersteuners aangemeld.</p>';
    return;
  }
  supporters.forEach(s=>{
    const card=document.createElement('div');
    card.className='card';
    card.style.cssText='padding:9px;margin-bottom:6px;';
    const cats=(s.cats||[]).filter(c=>c.note).map(c=>c.v+': '+c.note).join(' · ');
    card.innerHTML='<div style="display:flex;align-items:center;gap:7px;"><div style="flex:1;"><strong style="font-size:13px;">'+s.name+'</strong><div style="font-size:11px;color:var(--mu);">'+cats+'</div></div></div>';
    const row=card.querySelector('div>div:last-child');
    const editBtn=document.createElement('button');
    editBtn.textContent='✏️';
    editBtn.style.cssText='background:none;border:1px solid var(--g);border-radius:5px;cursor:pointer;color:var(--g);font-size:11px;font-weight:600;padding:2px 6px;margin-right:4px;';
    editBtn.onclick=function(){EDSUPP(s.id);};
    const delBtn=document.createElement('button');
    delBtn.textContent='×';
    delBtn.style.cssText='background:none;border:none;cursor:pointer;color:var(--co);font-size:16px;';
    delBtn.onclick=function(){DELSUPP(s.id);};
    const flex=card.querySelector('div');
    flex.appendChild(editBtn);
    flex.appendChild(delBtn);
    sl.appendChild(card);
  });
}

var _editSuppId=null;

function EDSUPP(id){
  const s=supporters.find(x=>String(x.id)===String(id));
  if(!s)return;
  _editSuppId=id;
  const n=document.getElementById('sn');
  if(n)n.value=s.name;
  OSC.forEach(([v])=>{
    const inp=document.getElementById('osc-'+v);
    if(inp){
      const cat=(s.cats||[]).find(c=>c.v===v);
      inp.value=cat?cat.note:'';
    }
  });
  const stEl=document.getElementById('st');
  if(stEl)stEl.value=s.note||'';
  const btn=document.querySelector('#ck2 button[onclick]');
  if(btn)btn.textContent='Opslaan wijzigingen';
  const lbl=document.getElementById('ads-lbl');
  if(lbl)lbl.textContent='Gegevens aanpassen';
  window.scrollTo(0,document.getElementById('ck2').offsetTop-60);
}

function DELSUPP(id){
  supporters=supporters.filter(x=>String(x.id)!==String(id));
  try{localStorage.setItem('fs_sup',JSON.stringify(supporters));}catch(e){}
  if(_DB)Promise.resolve(_DB.from('supporters').delete().eq('id',id)).catch(()=>{});
  ROS();
}

async function ADS(){
  const n=document.getElementById('sn');
  const msgEl=document.getElementById('ads-msg');
  function showMsg(t,ok){if(msgEl){msgEl.textContent=t;msgEl.style.cssText='display:block;padding:6px 10px;border-radius:7px;font-size:12px;font-weight:600;margin-top:4px;background:'+(ok?'#2d5a2718':'#b8545018')+';color:'+(ok?'#2d5a27':'#b85450')+';';if(ok)setTimeout(()=>{msgEl.style.display='none';},3000);}}
  if(!n||!n.value.trim()){showMsg('Vul je naam in',false);return;}
  const btn=document.querySelector('#ck2 button');
  if(btn){btn.textContent='⏳';btn.disabled=true;}
  const cats=OSC.map(([v])=>{const inp=document.getElementById('osc-'+v);const note=inp?inp.value.trim():'';return note?{v,note}:null;}).filter(Boolean);
  const note=(document.getElementById('st')||{value:''}).value;
  const entry={id:Date.now(),name:n.value.trim(),cats,note,created_at:new Date().toISOString()};
  if(_editSuppId){
    // Update bestaande ondersteuner
    supporters=supporters.map(x=>String(x.id)===String(_editSuppId)?{...x,...entry,id:x.id}:x);
    if(_DB)Promise.resolve(_DB.from('supporters').update({name:entry.name,cats,note}).eq('id',_editSuppId)).catch(()=>{});
    _editSuppId=null;
    const lbl=document.getElementById('ads-lbl');if(lbl)lbl.textContent='Aanmelden als ondersteuner';
  } else {
    supporters.unshift(entry);
    if(_DB)Promise.resolve(_DB.from('supporters').insert([{name:entry.name,cats,note}])).catch(()=>{});
  }
  try{localStorage.setItem('fs_sup',JSON.stringify(supporters));}catch(e){}
  n.value='';
  OSC.forEach(([v])=>{const inp=document.getElementById('osc-'+v);if(inp)inp.value='';});
  const stEl=document.getElementById('st');if(stEl)stEl.value='';
  if(btn){btn.textContent='✅ Opgeslagen!';setTimeout(()=>{btn.textContent='Aanmelden';btn.disabled=false;},2000);}
  showMsg('✅ '+entry.name+' aangemeld!',true);
  ROS();
}

CS();ST(0);
