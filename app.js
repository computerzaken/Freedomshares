const SURL='https://gffzskbxjzgewztjhncz.supabase.co';
const SKEY='sb_publishable_agTW0NWNmrewQJZuOGV6Lw_llciY6Yw';
let _DB=null;
function EDPROJ(id){
  var p=projs.find(function(x){return x.id===id;});
  if(!p)return;
  var f=document.getElementById('hf');
  f.style.display='block';
  var opts=PS.map(function(s){return'<option value="'+s+'"'+(p.status===s?' selected':'')+'>'+s+'</option>';}).join('');
  f.innerHTML='<div class="card" style="border:1px solid #5b4fa8;"><h3 style="font-size:13px;margin-bottom:10px;color:#5b4fa8;">&#9998; Project bewerken</h3>'
    +'<div style="display:grid;gap:7px;">'
    +'<input id="pn" value="'+p.name.replace(/"/g,'&quot;')+'" placeholder="Naam *" style="width:100%;padding:6px 10px;border:1px solid var(--br);border-radius:7px;font-size:12px;background:var(--w);color:var(--tx);">'
    +'<input id="pi" value="'+(p.ind||'').replace(/"/g,'&quot;')+'" placeholder="Indiener(s)" style="width:100%;padding:6px 10px;border:1px solid var(--br);border-radius:7px;font-size:12px;background:var(--w);color:var(--tx);">'
    +'<textarea id="pd" style="width:100%;padding:6px 10px;border:1px solid var(--br);border-radius:7px;font-size:12px;background:var(--w);color:var(--tx);min-height:60px;">'+(p.desc||'').replace(/</g,'&lt;')+'</textarea>'
    +'<select id="pp" style="width:100%;padding:6px 10px;border:1px solid var(--br);border-radius:7px;font-size:12px;background:var(--w);color:var(--tx);">'+opts+'</select>'
    +'</div>'
    +'<div style="margin:8px 0 6px;font-size:11px;font-weight:600;color:var(--mu);">Benodigde ondersteuning:</div>'
    +'<div id="hn-btns"></div>'
    +'<div style="display:flex;gap:6px;margin-top:10px;">'
    +'<button onclick="SAVPROJ('+id+')" style="flex:1;background:#5b4fa8;color:#fff;padding:8px;border-radius:8px;font-size:12px;font-weight:700;border:none;cursor:pointer;">Opslaan</button>'
    +'<button onclick="document.getElementById(\'hf\').style.display=\'none\';" style="padding:8px 12px;border-radius:8px;border:2px solid var(--br);background:var(--bg);font-size:11px;font-weight:600;cursor:pointer;">Annuleren</button>'
    +'</div></div>';
  RHN();
  if(p.needs)p.needs.forEach(function(n){var key=n&&n.v?n.v:n;var note=n&&n.note?n.note:'';var inp=document.getElementById('hn-'+key);if(inp&&note)inp.value=note;});
}

async function SAVPROJ(id){
  var n=document.getElementById('pn');
  if(!n||!n.value.trim()){alert('Naam vereist');return;}
  var needs=OSC.map(function(osc){var v=osc[0];var inp=document.getElementById('hn-'+v);var note=inp?inp.value.trim():'';return note?{v:v,note:note}:null;}).filter(Boolean);
  var upd={name:n.value.trim(),ind:(document.getElementById('pi')||{value:''}).value,status:(document.getElementById('pp')||{value:'Idee'}).value,description:(document.getElementById('pd')||{value:''}).value.trim(),needs:needs};
  await _DB.from('projects').update(upd).eq('id',id);
  document.getElementById('hf').style.display='none';
  await LD();
}

window.addEventListener('load',()=>{_DB=supabase.createClient(SURL,SKEY);LD();});

const $=id=>document.getElementById(id);
const M=[{id:1,n:'Sophie',i:1200},{id:2,n:'Mohammed',i:1800},{id:3,n:'Lisa',i:2100},{id:4,n:'Ravi',i:2300},{id:5,n:'Emma',i:2800},{id:6,n:'Pieter',i:3400},{id:7,n:'Yasmine',i:4200},{id:8,n:'Jan',i:5800}];
const SH_DATA=[
{n:'Ekoplaza',c:'voeding',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,w:'https://www.ekoplaza.nl',certs:['demeter','steward'],d:'biologisch supermarkt groente fruit vlees vis zuivel brood eieren kaas yoghurt noten koffie thee'},
{n:'Odin',c:'voeding',t:'cooperative',s:'hybrid',bio:5,fair:4,sust:4,lo:4,w:'https://www.odin.nl',certs:['demeter','fairtrade','steward'],d:'biologische supermarkt groente fruit zuivel brood eieren kaas boter boodschappen'},
{n:'Marqt',c:'voeding',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:5,w:'https://www.marqt.com',d:'supermarkt biologisch groente fruit vlees vis zuivel brood eieren lokale producten boodschappen'},
{n:'Pieter Pot',c:'voeding',t:'steward',s:'online',bio:4,fair:4,sust:5,lo:3,w:'https://www.pieterpot.nl',certs:['steward'],d:'verpakkingsvrij groente pasta noten olie kruiden sauzen zeezout boodschappen'},
{n:"Tony's Chocolonely",c:'voeding',t:'steward',s:'online',bio:3,fair:5,sust:4,lo:1,w:'https://www.tonyschocolonely.com',certs:['steward']},
{n:'De Vegetarische Slager',c:'voeding',t:'steward',s:'hybrid',bio:4,fair:4,sust:5,lo:3,w:'https://www.devegetarischeslager.nl',certs:['steward']},
{n:'Moyee Coffee',c:'voeding',t:'steward',s:'online',bio:4,fair:5,sust:4,lo:2,w:'https://www.moyeecoffee.com',certs:['bcorp','fairtrade','steward'],d:'koffie fairtrade biologisch espresso'},
{n:'Rechtstreex',c:'voeding',t:'steward',s:'hybrid',bio:4,fair:5,sust:5,lo:5,w:'https://www.rechtstreex.nl',certs:['fairtrade'],d:'biologische groente fruit seizoensproducten streekproducten boer'},
{n:'Boerschappen',c:'voeding',t:'steward',s:'online',bio:4,fair:5,sust:5,lo:5,w:'https://www.boerschappen.nl',certs:['steward'],d:'biologisch vlees groente fruit seizoensbox lokaal boerderij'},
{n:'Bioplanet',c:'voeding',t:'retailer',s:'hybrid',bio:5,fair:4,sust:4,lo:3,w:'https://www.bioplanet.nl'},
{n:'Udea/Ekomarkt',c:'voeding',t:'cooperative',s:'hybrid',bio:5,fair:4,sust:5,lo:4,w:'https://www.udea.nl',certs:['steward']},
{n:'Zonnatura',c:'voeding',t:'steward',s:'hybrid',bio:5,fair:4,sust:4,lo:3,w:'https://www.zonnatura.nl',certs:['steward']},
{n:'Mud Jeans',c:'kleding',t:'steward',s:'online',bio:4,fair:5,sust:5,lo:2,w:'https://www.mudjeans.eu',certs:['great','bcorp','gots','fairwear'],d:'duurzame jeans spijkerbroek kleding biologisch katoen'},
{n:'Nudie Jeans',c:'kleding',t:'steward',s:'hybrid',bio:4,fair:5,sust:5,lo:2,w:'https://www.nudiejeans.com',certs:['great','gots','fairwear'],d:'biologische jeans kleding duurzaam katoen'},
{n:'Kuyichi',c:'kleding',t:'steward',s:'online',bio:4,fair:5,sust:5,lo:2,w:'https://www.kuyichi.com',certs:['great','gots','fairtrade'],d:'biologische kleding jeans shirts fair trade'},
{n:'Patagonia',c:'kleding',t:'steward',s:'hybrid',bio:4,fair:4,sust:5,lo:1,w:'https://eu.patagonia.com/nl',certs:['good','bcorp'],d:'outdoor kleding jas fleece duurzaam repareren'},
{n:'Organic Basics',c:'kleding',t:'steward',s:'online',bio:5,fair:5,sust:5,lo:1,w:'https://www.organicbasics.com',certs:['start','gots'],d:'biologisch ondergoed shirts sokken kleding'},
{n:'Armed Angels',c:'kleding',t:'steward',s:'online',bio:5,fair:5,sust:5,lo:1,w:'https://www.armedangels.com',certs:['great','gots','fairwear'],d:'biologische kleding shirts broeken duurzaam'},
{n:'Fairphone',c:'tech',t:'steward',s:'online',bio:null,fair:5,sust:5,lo:2,w:'https://www.fairphone.com',certs:['bcorp','steward'],d:'eerlijke telefoon smartphone repareerbaar'},
{n:'Leapp',c:'tech',t:'retailer',s:'hybrid',bio:null,fair:3,sust:5,lo:3,w:'https://www.leapp.nl'},
{n:'Back Market',c:'tech',t:'retailer',s:'online',bio:null,fair:3,sust:5,lo:1,w:'https://www.backmarket.nl'},
{n:'Renew Electronics',c:'witgoed',t:'retailer',s:'online',bio:null,fair:3,sust:5,lo:3,w:'https://www.renewelectronics.nl'},
{n:'Repair Café NL',c:'witgoed',t:'steward',s:'physical',bio:null,fair:5,sust:5,lo:5,w:'https://repaircafe.org/nl',certs:['steward']},
{n:'Seepje',c:'verzorging',t:'steward',s:'online',bio:5,fair:4,sust:5,lo:2,w:'https://www.seepje.com',certs:['bcorp','steward'],d:'biologisch wasmiddel schoonmaakmiddel zeep verzorging'},
{n:'Weleda',c:'verzorging',t:'steward',s:'hybrid',bio:5,fair:4,sust:5,lo:2,w:'https://www.weleda.nl',certs:['steward']},
{n:"Dr. Bronner's",c:'verzorging',t:'steward',s:'online',bio:5,fair:5,sust:5,lo:1,w:'https://www.drbronner.nl',certs:['steward']},
{n:'Landwinkel.nl',c:'markt',t:'steward',s:'hybrid',bio:4,fair:5,sust:5,lo:5,w:'https://www.landwinkel.nl',certs:['steward']},
{n:'Boerenmarkt.nl',c:'markt',t:'steward',s:'physical',bio:4,fair:5,sust:5,lo:5,w:'https://www.boerenmarkt.nl',certs:['steward']},
{n:'Herenboeren',c:'markt',t:'cooperative',s:'physical',bio:5,fair:5,sust:5,lo:5,w:'https://www.herenboeren.nl',certs:['demeter','steward'],d:'boerencoöperatie vlees groente melk eieren zuivel kaas streekproducten lokaal'},
{n:'Triodos Bank',c:'financien',t:'steward',s:'online',bio:null,fair:5,sust:5,lo:4,w:'https://www.triodos.nl',certs:['bcorp','steward'],d:'duurzame bank sparen beleggen hypotheek verzekering'},
{n:'ASN Bank',c:'financien',t:'steward',s:'online',bio:null,fair:5,sust:5,lo:4,w:'https://www.asnbank.nl',certs:['steward'],d:'duurzame bank sparen beleggen groene hypotheek'},
{n:'Swapfiets',c:'mobiliteit',t:'steward',s:'physical',bio:null,fair:4,sust:4,lo:5,w:'https://www.swapfiets.nl',certs:['steward'],d:'fiets ebike abonnement reparatie'},
{n:'Vandebron',c:'energie',t:'steward',s:'online',bio:null,fair:5,sust:5,lo:4,w:'https://www.vandebron.nl',certs:['steward'],d:'groene energie stroom zonnepanelen wind'},
{n:'Buurtzorg',c:'zorg',t:'steward',s:'physical',bio:null,fair:5,sust:5,lo:5,w:'https://www.buurtzorg.com',certs:['steward'],d:'thuiszorg zorg verpleging'},
{n:'Tony\'s Chocolonely',c:'voeding',t:'steward',s:'online',bio:3,fair:5,sust:4,lo:1,w:'https://www.tonyschocolonely.com',certs:['bcorp']},
{n:'De Groene Weg',c:'voeding',t:'cooperative',s:'physical',bio:5,fair:4,sust:4,lo:4,w:'https://www.degroeneweg.nl',certs:['fairtrade','steward']},
{n:'Rewear',c:'kleding',t:'retailer',s:'physical',bio:null,fair:3,sust:5,lo:4,w:'https://www.rewear.nl'},
{n:'Sympany',c:'kleding',t:'steward',s:'physical',bio:null,fair:4,sust:5,lo:4,w:'https://www.sympany.nl',certs:['steward']},
{n:'Refurbed',c:'tech',t:'retailer',s:'online',bio:null,fair:3,sust:5,lo:2,w:'https://www.refurbed.nl'},
{n:'Closing the Loop',c:'tech',t:'steward',s:'online',bio:null,fair:5,sust:5,lo:2,w:'https://www.closingtheloop.eu',certs:['steward']},
{n:'De Witgoedboer',c:'witgoed',t:'retailer',s:'physical',bio:null,fair:3,sust:4,lo:5,w:'https://www.dewitgoedboer.nl'},
{n:'Plukk',c:'verzorging',t:'steward',s:'online',bio:4,fair:4,sust:5,lo:3,w:'https://www.plukk.nl',certs:['steward']},
{n:'Dr. Bronner\'s',c:'verzorging',t:'steward',s:'online',bio:5,fair:5,sust:5,lo:1,w:'https://www.drbronner.nl',certs:['steward']},
{n:'Bioboerderijen.nl',c:'markt',t:'steward',s:'hybrid',bio:5,fair:5,sust:5,lo:5,w:'https://www.bioboerderijen.nl',certs:['steward']},
{n:'Oikocredit',c:'financien',t:'cooperative',s:'online',bio:null,fair:5,sust:5,lo:2,w:'https://www.oikocredit.nl',certs:['steward']},
{n:'Greenwheels',c:'mobiliteit',t:'steward',s:'physical',bio:null,fair:4,sust:5,lo:5,w:'https://www.greenwheels.com',certs:['steward']},
{n:'Greenchoice',c:'energie',t:'steward',s:'online',bio:null,fair:4,sust:5,lo:3,w:'https://www.greenchoice.nl',certs:['steward'],d:'groene energie stroom gas duurzaam'},
{n:'Powerpeers',c:'energie',t:'steward',s:'online',bio:null,fair:5,sust:5,lo:5,w:'https://www.powerpeers.nl',certs:['steward']},
{n:'Urgenda',c:'vrije_tijd',t:'steward',s:'online',bio:null,fair:5,sust:5,lo:5,w:'https://www.urgenda.nl',certs:['steward']},
{n:'Natuurmonumenten',c:'vrije_tijd',t:'cooperative',s:'physical',bio:null,fair:5,sust:5,lo:5,w:'https://www.natuurmonumenten.nl',certs:['steward']},
{n:'Peerby',c:'wonen',t:'steward',s:'online',bio:null,fair:5,sust:5,lo:5,w:'https://www.peerby.com',certs:['steward']},
{n:'Weaver Green',c:'wonen',t:'steward',s:'online',bio:null,fair:4,sust:5,lo:1,w:'https://www.weavergreen.com',certs:['steward']},
{n:'Naiff Care',c:'verzorging',t:'steward',s:'hybrid',bio:4,fair:4,sust:4,lo:4,w:'https://www.naif.nl',certs:['steward']},
{n:'Faith in Nature',c:'verzorging',t:'steward',s:'online',bio:5,fair:4,sust:5,lo:1,w:'https://www.faithinnature.co.uk',certs:['steward']}
// === STEWARD-OWNED ORGANISATIES (bron: We Are Stewards NL, 128 bedrijven) ===
// Zorg & welzijn
,{n:'Amada Zorgcollectief',c:'zorg',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:5,w:'https://amada.nl',certs:['steward']}
,{n:'Arbo Unie',c:'zorg',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:4,w:'https://www.arbounie.nl',certs:['steward']}
,{n:'BuurtzorgT',c:'zorg',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:5,w:'https://www.buurtzorgt.nl',certs:['steward']}
,{n:'Careibu',c:'zorg',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:5,w:'https://www.careibu.nl',certs:['steward']}
,{n:'Carend',c:'zorg',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:5,w:'https://www.carend.nl',certs:['steward']}
,{n:'De Advieswinkel',c:'zorg',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:5,w:'https://www.deadvieswinkel.nl',certs:['steward']}
,{n:'De Sprank',c:'zorg',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:5,w:'https://www.desprank.nl',certs:['steward']}
,{n:'De Sterrekijker',c:'zorg',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:5,w:'https://www.desterrekijker.nl',certs:['steward']}
,{n:'Duindoorn Thuiszorg',c:'zorg',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:5,w:'https://www.duindoorn.nl',certs:['steward']}
,{n:'Het Rozentuintje',c:'zorg',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:5,w:'https://www.hetrozentuintje.nl',certs:['steward']}
,{n:'LTP Psychologen',c:'zorg',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:4,w:'https://www.ltp.nl',certs:['steward']}
,{n:'Maminka',c:'zorg',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:5,w:'https://www.maminka.nl',certs:['steward']}
,{n:'Olles Huis',c:'zorg',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:5,w:'https://www.olleshuis.nl',certs:['steward']}
,{n:'Social Medicines',c:'zorg',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:4,w:'https://www.socialmedicines.nl',certs:['steward']}
,{n:'Team050',c:'zorg',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:5,w:'https://www.team050.nl',certs:['steward']}
// Landbouw, natuur & voedselketen
,{n:'Behout Houtzagerij',c:'markt',t:'steward',s:'physical',bio:5,fair:4,sust:5,lo:5,w:'https://www.behout.nl',certs:['steward']}
,{n:'Coöperatie Kraaybeekerhof',c:'markt',t:'cooperative',s:'physical',bio:5,fair:5,sust:5,lo:5,w:'https://www.kraaybeekerhof.nl',certs:['steward'],d:'biologisch-dynamisch groente fruit zuivel eieren demeter streekproducten'}
,{n:'De Biesterhof',c:'markt',t:'steward',s:'physical',bio:5,fair:4,sust:5,lo:5,w:'https://www.debiesterhof.nl',certs:['steward'],d:'biologische boerderij groente fruit eieren vlees streekproducten'}
,{n:'De Buurtboer',c:'markt',t:'steward',s:'hybrid',bio:5,fair:4,sust:5,lo:5,w:'https://www.debuurtboer.nl',certs:['steward'],d:'seizoensgroente groentepakket groentebox fruit biologisch lokaal boerderij'}
,{n:'De Patrijs',c:'markt',t:'steward',s:'physical',bio:5,fair:4,sust:5,lo:5,w:'https://www.departrijs.nl',certs:['steward'],d:'biologische boerderij groente eieren vlees lokaal'}
,{n:'De Terp',c:'markt',t:'steward',s:'physical',bio:5,fair:4,sust:5,lo:5,w:'https://www.boerderijdeterp.nl',certs:['steward'],d:'biologische boerderij groente fruit eieren melk lokaal'}
,{n:'Donker Groep',c:'markt',t:'steward',s:'physical',bio:4,fair:4,sust:5,lo:4,w:'https://www.donkergroep.nl',certs:['steward']}
,{n:'Eerste Wijk',c:'markt',t:'steward',s:'physical',bio:5,fair:4,sust:5,lo:5,w:'https://www.eerstewijk.nl',certs:['steward']}
,{n:'Lenteland',c:'markt',t:'cooperative',s:'physical',bio:5,fair:5,sust:5,lo:5,w:'https://www.lenteland.nl',certs:['steward'],d:'coöperatie groente fruit biologisch seizoensgroente lokaal boerderij'}
,{n:'Loverendale Ter Linde',c:'markt',t:'steward',s:'physical',bio:5,fair:4,sust:5,lo:5,w:'https://www.loverendale.nl',certs:['steward']}
,{n:'Regelink',c:'markt',t:'steward',s:'physical',bio:4,fair:4,sust:4,lo:5,w:'https://www.regelink.nl',certs:['steward'],d:'biologische groente fruit seizoensgroente lokaal boerderij'}
,{n:'Tuinen van Kraaybeekerhof',c:'markt',t:'steward',s:'physical',bio:5,fair:4,sust:5,lo:5,w:'https://www.kraaybeekerhof.nl',certs:['steward']}
,{n:'Werkplaats de Smidse',c:'markt',t:'steward',s:'physical',bio:4,fair:4,sust:5,lo:5,w:'https://www.desmidse.nl',certs:['steward']}
,{n:'Ygen Forest',c:'markt',t:'steward',s:'physical',bio:5,fair:4,sust:5,lo:5,w:'https://www.ygen.nl',certs:['steward']}
// Horeca, hospitality & vrije tijd
,{n:'Albron',c:'horeca',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:4,w:'https://www.albron.nl',certs:['steward']}
,{n:'Blooming',c:'horeca',t:'steward',s:'physical',bio:3,fair:4,sust:4,lo:4,w:'https://www.blooming.nl',certs:['steward']}
,{n:'Brownies&Downies',c:'horeca',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:5,w:'https://www.browniesdownies.nl',certs:['steward']}
,{n:'Café De Plak',c:'horeca',t:'steward',s:'physical',bio:3,fair:4,sust:4,lo:5,w:'https://www.deplak.nl',certs:['steward']}
,{n:'Camping Zeeburg',c:'horeca',t:'steward',s:'physical',bio:3,fair:4,sust:5,lo:5,w:'https://www.campingzeeburg.nl',certs:['steward']}
,{n:'Coffeecompany',c:'horeca',t:'steward',s:'physical',bio:4,fair:4,sust:4,lo:4,w:'https://www.coffeecompany.nl',certs:['steward']}
,{n:'De Boomhuttenclub',c:'horeca',t:'steward',s:'physical',bio:4,fair:4,sust:5,lo:5,w:'https://www.boomhuttenclub.nl',certs:['steward']}
,{n:'De Leistert',c:'horeca',t:'steward',s:'physical',bio:3,fair:4,sust:4,lo:5,w:'https://www.deleistert.nl',certs:['steward']}
,{n:'Hotel Casa',c:'horeca',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:5,w:'https://www.hotelcasa.nl',certs:['steward']}
,{n:'Hutten',c:'horeca',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:4,w:'https://www.hutten.eu',certs:['steward']}
,{n:'Local Happinez',c:'horeca',t:'steward',s:'physical',bio:3,fair:4,sust:4,lo:5,w:'https://www.localhappinez.com',certs:['steward']}
,{n:'SKEK',c:'horeca',t:'steward',s:'physical',bio:3,fair:4,sust:4,lo:5,w:'https://www.skek.nl',certs:['steward']}
,{n:'The Green House',c:'horeca',t:'steward',s:'physical',bio:4,fair:4,sust:5,lo:4,w:'https://wearestewards.nl/en/companies/',certs:['steward']}
,{n:'The Loffly Chef',c:'horeca',t:'steward',s:'physical',bio:3,fair:4,sust:4,lo:4,w:'https://www.thelofflychef.nl',certs:['steward']}
,{n:'The Shore',c:'horeca',t:'steward',s:'physical',bio:3,fair:4,sust:4,lo:4,w:'https://www.theshore.nl',certs:['steward']}
// Bouw, techniek & maakindustrie
,{n:'Biosphere Solar',c:'bouw',t:'steward',s:'physical',bio:2,fair:4,sust:5,lo:4,w:'https://www.biospheresolar.nl',certs:['steward']}
,{n:'Blade-Made',c:'bouw',t:'steward',s:'physical',bio:3,fair:4,sust:5,lo:4,w:'https://www.blade-made.com',certs:['steward']}
,{n:'De Vries en Verburg',c:'bouw',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.devriesenverburg.nl',certs:['steward']}
,{n:'Dipam',c:'bouw',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.dipam.nl',certs:['steward']}
,{n:'ECOBLOQ',c:'bouw',t:'steward',s:'physical',bio:4,fair:4,sust:5,lo:4,w:'https://www.ecobloq.nl',certs:['steward']}
,{n:'Nederhout',c:'bouw',t:'steward',s:'physical',bio:5,fair:4,sust:5,lo:5,w:'https://www.nederhout.nl',certs:['steward']}
,{n:'NiVoGe Groep',c:'bouw',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.nivoge.nl',certs:['steward']}
,{n:'Remeha',c:'bouw',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:4,w:'https://www.remeha.nl',certs:['steward']}
,{n:'SafanDarley',c:'bouw',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:4,w:'https://www.safandarley.com',certs:['steward']}
,{n:'TBI',c:'bouw',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:4,w:'https://www.tbi.nl',certs:['steward']}
,{n:'Tierrafino',c:'bouw',t:'steward',s:'physical',bio:5,fair:4,sust:5,lo:4,w:'https://www.tierrafino.nl',certs:['steward']}
,{n:'Topa',c:'bouw',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.topa.nl',certs:['steward']}
,{n:'VDR Bouwgroep',c:'bouw',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.vdrbouwgroep.nl',certs:['steward']}
// Tech, software & online platforms
,{n:'Adabtive',c:'tech',t:'steward',s:'online',bio:2,fair:4,sust:4,lo:4,w:'https://www.adabtive.nl',certs:['steward']}
,{n:'Alkemio',c:'tech',t:'steward',s:'online',bio:2,fair:5,sust:5,lo:3,w:'https://welcome.alkem.io',certs:['steward']}
,{n:'Bijzonderetafel.nl',c:'tech',t:'steward',s:'online',bio:3,fair:4,sust:4,lo:4,w:'https://www.bijzonderetafel.nl',certs:['steward']}
,{n:'BOAS',c:'tech',t:'steward',s:'online',bio:2,fair:4,sust:4,lo:3,w:'https://www.boas.nl',certs:['steward']}
,{n:'CrowdBuilding',c:'tech',t:'steward',s:'online',bio:2,fair:4,sust:4,lo:4,w:'https://www.crowdbuilding.nl',certs:['steward']}
,{n:'DataOwn',c:'tech',t:'steward',s:'online',bio:2,fair:4,sust:4,lo:3,w:'https://www.dataown.nl',certs:['steward']}
,{n:'Odesys',c:'tech',t:'steward',s:'online',bio:2,fair:4,sust:4,lo:4,w:'https://www.odesys.nl',certs:['steward']}
,{n:'QBayLogic',c:'tech',t:'steward',s:'online',bio:2,fair:4,sust:4,lo:3,w:'https://www.qbaylogic.com',certs:['steward']}
,{n:'REM Automatisering',c:'tech',t:'steward',s:'online',bio:2,fair:4,sust:4,lo:5,w:'https://www.rem-automatisering.nl',certs:['steward']}
,{n:'Shift',c:'tech',t:'steward',s:'online',bio:2,fair:4,sust:4,lo:3,w:'https://www.shift.nl',certs:['steward']}
,{n:'Slow Your Life',c:'tech',t:'steward',s:'online',bio:2,fair:4,sust:5,lo:3,w:'https://www.slowyourlife.nl',certs:['steward']}
,{n:'Sumthing',c:'tech',t:'steward',s:'online',bio:2,fair:4,sust:4,lo:3,w:'https://www.sumthing.co',certs:['steward']}
,{n:'Time to Momo',c:'tech',t:'steward',s:'online',bio:2,fair:4,sust:4,lo:3,w:'https://www.timetomomo.com',certs:['steward']}
,{n:'Voys',c:'tech',t:'steward',s:'online',bio:2,fair:5,sust:5,lo:4,w:'https://www.voys.nl',certs:['steward']}
// Zakelijke dienstverlening, advies & impact
,{n:'Action Academy',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:4,w:'https://www.actionacademy.nl',certs:['steward']}
,{n:'Atelier16',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.atelier16.nl',certs:['steward']}
,{n:'B&T',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:4,w:'https://www.b-t.nl',certs:['steward']}
,{n:'Berenschot',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:4,w:'https://www.berenschot.com',certs:['steward']}
,{n:'Bord&Stift',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.bordenstift.nl',certs:['steward']}
,{n:'Bureau Buitenklank',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.bureaubuitenklank.nl',certs:['steward']}
,{n:'BurgerReserve',c:'diensten',t:'steward',s:'physical',bio:2,fair:5,sust:5,lo:5,w:'https://www.burgerreserve.nl',certs:['steward']}
,{n:'CE Delft',c:'diensten',t:'steward',s:'physical',bio:3,fair:4,sust:5,lo:4,w:'https://www.ce.nl',certs:['steward']}
,{n:'Disrupt Development',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:5,lo:4,w:'https://www.disruptdevelopment.nl',certs:['steward']}
,{n:'Enviu',c:'diensten',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:4,w:'https://www.enviu.org',certs:['bcorp','steward']}
,{n:'ER Creatie',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.ercreatie.nl',certs:['steward']}
,{n:'Fiolet Taaltrainingen',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:4,w:'https://www.fiolet.nl',certs:['steward']}
,{n:'Generous Minds',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:5,lo:4,w:'https://www.generousminds.nl',certs:['bcorp','steward']}
,{n:'Haskoning',c:'diensten',t:'steward',s:'physical',bio:3,fair:4,sust:5,lo:4,w:'https://www.royalhaskoningdhv.com',certs:['steward']}
,{n:'Jaarbeurs',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.jaarbeurs.nl',certs:['steward']}
,{n:'KnopOm',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:5,lo:5,w:'https://www.knopom.nl',certs:['steward']}
,{n:'New Paradigm',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:5,lo:4,w:'https://www.newparadigm.nl',certs:['steward']}
,{n:'Perspectivity',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:3,w:'https://www.perspectivity.com',certs:['steward']}
,{n:'Rho Adviseurs',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.rho.nl',certs:['steward']}
,{n:'Showsync',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:4,w:'https://www.showsync.nl',certs:['steward']}
,{n:'Sleipnir Support',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.sleipnirsupport.nl',certs:['steward']}
,{n:'Squarewise',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:5,lo:4,w:'https://www.squarewise.com',certs:['steward']}
,{n:'The Green Silk Road',c:'diensten',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:3,w:'https://www.thegreensilkroad.com',certs:['steward']}
,{n:'Zeevonk',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:5,lo:5,w:'https://www.zeevonk.nl',certs:['steward']}
// Media, cultuur, onderwijs & attracties
,{n:'De Groene Amsterdammer',c:'media',t:'steward',s:'hybrid',bio:2,fair:4,sust:5,lo:5,w:'https://www.groene.nl',certs:['steward']}
,{n:'De Werfklas',c:'media',t:'steward',s:'physical',bio:3,fair:4,sust:5,lo:5,w:'https://www.dewerfklas.nl',certs:['steward']}
,{n:'Efteling',c:'media',t:'steward',s:'physical',bio:3,fair:4,sust:5,lo:5,w:'https://www.efteling.com',certs:['steward']}
,{n:'Groeilokaal',c:'media',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.groeilokaal.nl',certs:['steward']}
,{n:'Happy Times Magazine',c:'media',t:'steward',s:'hybrid',bio:2,fair:4,sust:4,lo:4,w:'https://www.happytimes.nl',certs:['steward']}
,{n:'Kriterion',c:'media',t:'cooperative',s:'physical',bio:3,fair:5,sust:5,lo:5,w:'https://www.kriterion.nl',certs:['steward']}
,{n:'Madurodam',c:'media',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.madurodam.nl',certs:['steward']}
,{n:'Novamedia',c:'media',t:'steward',s:'physical',bio:2,fair:5,sust:5,lo:5,w:'https://www.novamedia.nl',certs:['steward']}
,{n:'Storytelling Academy',c:'media',t:'steward',s:'hybrid',bio:2,fair:4,sust:4,lo:4,w:'https://www.storytellingacademy.nl',certs:['steward']}
,{n:'Studio/K',c:'media',t:'steward',s:'physical',bio:3,fair:5,sust:5,lo:5,w:'https://www.studiok.nl',certs:['steward']}
,{n:'Universiteit Nyenrode',c:'media',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:4,w:'https://www.nyenrode.nl',certs:['steward']}
,{n:'Vrij Nederland',c:'media',t:'steward',s:'hybrid',bio:2,fair:4,sust:5,lo:5,w:'https://www.vn.nl',certs:['steward']}
,{n:'WPG Uitgevers',c:'media',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:4,w:'https://www.wpg.nl',certs:['steward']}
// Retail & consumentenmerken (Odin al aanwezig)
,{n:'Aarden',c:'voeding',t:'steward',s:'physical',bio:4,fair:4,sust:5,lo:5,w:'https://www.aarden.nl',certs:['steward'],d:'biologisch groente fruit lokaal seizoensproducten'}
,{n:'BOOT Koffie',c:'voeding',t:'steward',s:'physical',bio:4,fair:5,sust:5,lo:5,w:'https://www.bootkoffie.nl',certs:['steward'],d:'koffie biologisch fairtrade espresso'}
,{n:'De Beeldhouwwinkel',c:'media',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.debeeldhouwwinkel.nl',certs:['steward']}
,{n:'De Haagse Boekerij',c:'media',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.haagse-boekerij.nl',certs:['steward']}
,{n:'Het Reizende Koffertje',c:'vrije_tijd',t:'steward',s:'physical',bio:3,fair:4,sust:4,lo:5,w:'https://www.hetreizendekoffertje.nl',certs:['steward']}
,{n:'Kriterion Studentenpomp',c:'horeca',t:'cooperative',s:'physical',bio:3,fair:5,sust:5,lo:5,w:'https://www.kriterion.nl',certs:['steward']}
,{n:'Mercurius',c:'voeding',t:'steward',s:'physical',bio:5,fair:4,sust:5,lo:4,w:'https://www.mercuriusshop.nl',certs:['steward'],d:'biologisch groothandel groente fruit zuivel noten bonen'}
,{n:'Nearchus',c:'voeding',t:'steward',s:'physical',bio:4,fair:4,sust:4,lo:5,w:'https://www.nearchus.nl',certs:['steward'],d:'biologisch bier brasserie lokaal'}
,{n:'Oerbouillon',c:'voeding',t:'steward',s:'hybrid',bio:5,fair:4,sust:5,lo:5,w:'https://www.oerbouillon.nl',certs:['steward'],d:'biologische bouillon groente vlees kip rund'}
,{n:'The Good Spice',c:'voeding',t:'steward',s:'hybrid',bio:4,fair:5,sust:5,lo:4,w:'https://www.thegoodspice.nl',certs:['steward'],d:'biologische kruiden specerijen thee koffie'}
,{n:'Warmenbol',c:'kleding',t:'steward',s:'physical',bio:3,fair:4,sust:4,lo:5,w:'https://www.warmenbol.nl',certs:['steward']}
// Financieel, accountancy & investeren
,{n:'Flynth',c:'financien',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:4,w:'https://www.flynth.nl',certs:['steward']}
,{n:'Fresh Ventures Studio',c:'financien',t:'steward',s:'physical',bio:2,fair:4,sust:5,lo:4,w:'https://www.freshventures.nl',certs:['steward']}
,{n:'Impact First Group',c:'financien',t:'steward',s:'physical',bio:2,fair:5,sust:5,lo:4,w:'https://www.impactfirstgroup.nl',certs:['steward']}
// Persoonlijke dienstverlening & uitvaart
,{n:'Monuta',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:4,w:'https://www.monuta.nl',certs:['steward']}
,{n:'PC Uitvaart',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.pcuitvaart.nl',certs:['steward']}
,{n:'Vanadis Uitvaartverzorging',c:'diensten',t:'steward',s:'physical',bio:2,fair:4,sust:4,lo:5,w:'https://www.vanadis.nl',certs:['steward']}
// === BIOLOGISCHE RESTAURANTS (bron: eet.nu, beoordeling 9.0+) ===
// === VEGAN RESTAURANTS (bron: curated NL vegan gids) ===
,{n:'Soepp',c:'horeca',t:'steward',s:'physical',bio:5,fair:5,sust:5,lo:5,p:'Alkmaar',certs:['vegan','biologisch'],w:'https://www.soepp.nl'}
,{n:'Cafe de Ceuvel',c:'horeca',t:'steward',s:'physical',bio:4,fair:5,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.ceuvel.nl'}
// === BIOLOGISCHE RESTAURANTS (bron: eet.nu, top 64 op beoordeling) ===
,{n:'DOYY',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Eindhoven',certs:['biologisch'],w:'https://www.eet.nu/eindhoven/doyy'}
,{n:'Brasserie de Lantaern',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Maassluis',certs:['biologisch'],w:'https://www.eet.nu/maassluis/brasserie-de-lantaern'}
,{n:'Sfeerlijk',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Sprang Capelle',certs:['biologisch'],w:'https://www.eet.nu/sprang-capelle/sfeerlijk'}
,{n:'Sjmaak',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Geleen',certs:['biologisch'],w:'https://www.eet.nu/geleen/sjmaak'}
,{n:'Het Graauwe Paard',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Oudebildtzijl',certs:['biologisch'],w:'https://www.eet.nu/oudebildtzijl/het-graauwe-paard'}
,{n:'Martha-Zaras',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Zandvoort',certs:['biologisch'],w:'https://www.eet.nu/zandvoort/martha-zaras'}
,{n:'Ten Cate',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Emmen',certs:['biologisch'],w:'https://www.eet.nu/emmen/ten-cate'}
,{n:'Bistro in den Koning',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Waterlandkerkje',certs:['biologisch'],w:'https://www.eet.nu/waterlandkerkje/bistro-in-den-koning'}
,{n:'De Drie Turven',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Drachten',certs:['biologisch'],w:'https://www.eet.nu/drachten/de-drie-turven'}
,{n:'Downey\'s',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Amersfoort',certs:['biologisch'],w:'https://www.eet.nu/amersfoort/downey-s'}
,{n:'De Arend',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Winssen',certs:['biologisch'],w:'https://www.eet.nu/winssen/de-arend'}
,{n:'Queen of Sheba',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Amsterdam',certs:['biologisch'],w:'https://www.eet.nu/amsterdam/queen-of-sheba'}
,{n:'The Booster',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Beilen',certs:['biologisch'],w:'https://www.eet.nu/beilen/the-booster'}
,{n:'GUIDO\'S | De Burg',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Noord Scharwoude',certs:['biologisch'],w:'https://www.eet.nu/noord-scharwoude/guido-s-de-burg'}
,{n:'Brasserie UIT',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Rijssen',certs:['biologisch'],w:'https://www.eet.nu/rijssen/brasserie-uit'}
,{n:'Op de Boom',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Koningsbosch',certs:['biologisch'],w:'https://www.eet.nu/koningsbosch/op-de-boom'}
,{n:'Hugo\'s Bistrobar',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Sint Oedenrode',certs:['biologisch'],w:'https://www.eet.nu/sint-oedenrode/hugo-s-bistrobar'}
,{n:'Vinck',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Geesteren Ov',certs:['biologisch'],w:'https://www.eet.nu/geesteren-ov/vinck'}
,{n:'Alles met Liefde',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Middenbeemster',certs:['biologisch'],w:'https://www.eet.nu/middenbeemster/alles-met-liefde'}
,{n:'Lo Stivale',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Groningen',certs:['biologisch'],w:'https://www.eet.nu/groningen/lo-stivale'}
,{n:'Danyel',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Maastricht',certs:['biologisch'],w:'https://www.eet.nu/maastricht/danyel-maastricht'}
,{n:'Lovely Local',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Enschede',certs:['biologisch'],w:'https://www.eet.nu/enschede/lovely-local'}
,{n:'Kale & de Bril',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Goes',certs:['biologisch'],w:'https://www.eet.nu/goes/kale-de-bril'}
,{n:'\'t KoaikersHuus',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Buren Fr',certs:['biologisch'],w:'https://www.eet.nu/buren-fr/t-koaikershuus'}
,{n:'De Eerste Aanleg',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Nieuwkoop',certs:['biologisch'],w:'https://www.eet.nu/nieuwkoop/de-eerste-aanleg'}
,{n:'Restaurant RED',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Heythuysen',certs:['biologisch'],w:'https://www.eet.nu/heythuysen/restaurant-red'}
,{n:'Picknickers',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Terherne',certs:['biologisch'],w:'https://www.eet.nu/terherne/picknickers'}
,{n:'Wijnbar Vino',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Oud Beijerland',certs:['biologisch'],w:'https://www.eet.nu/oud-beijerland/wijnbar-vino'}
,{n:'@Zeetra de Molenhoek',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Kamperland',certs:['biologisch'],w:'https://www.eet.nu/kamperland/zeetra-de-molenhoek'}
,{n:'De Zwarte Haan',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Sint Jacobiparochie',certs:['biologisch'],w:'https://www.eet.nu/sint-jacobiparochie/de-zwarte-haan'}
,{n:'Pomerol',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Landgraaf',certs:['biologisch'],w:'https://www.eet.nu/landgraaf/pomerol'}
,{n:'Hof van Herstal',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Echt',certs:['biologisch'],w:'https://www.eet.nu/echt/hof-van-herstal'}
,{n:'Unia 12',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Leeuwarden',certs:['biologisch'],w:'https://www.eet.nu/leeuwarden/unia-12'}
,{n:'Sjef\'s Table',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Rijen',certs:['biologisch'],w:'https://www.eet.nu/rijen/sjef-s-table'}
,{n:'Uijttewaal',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Breda',certs:['biologisch'],w:'https://www.eet.nu/breda/uijttewaal'}
,{n:'De Provenier',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Schiedam',certs:['biologisch'],w:'https://www.eet.nu/schiedam/de-provenier'}
,{n:'Lokate',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Wijhe',certs:['biologisch'],w:'https://www.eet.nu/wijhe/lokate'}
,{n:'Noderstraun',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Schiermonnikoog',certs:['biologisch'],w:'https://www.eet.nu/schiermonnikoog/noderstraun'}
,{n:'Infini',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Wahlwiller',certs:['biologisch'],w:'https://www.eet.nu/wahlwiller/infini'}
,{n:'Taboe',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Zwolle',certs:['biologisch'],w:'https://www.eet.nu/zwolle/taboe'}
,{n:'Bib GourmandLe Vieux Jean',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Delft',certs:['biologisch'],w:'https://www.eet.nu/delft/le-vieux-jean'}
,{n:'The Old Bakery',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Bergen Op Zoom',certs:['biologisch'],w:'https://www.eet.nu/bergen-op-zoom/the-old-bakery'}
,{n:'Caspar',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Arnhem',certs:['biologisch'],w:'https://www.eet.nu/arnhem/caspar'}
,{n:'één MichelinsterLatour1653',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Noordwijk Aan Zee',certs:['biologisch'],w:'https://www.eet.nu/noordwijk-aan-zee/latour'}
,{n:'Ritos',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Den Haag',certs:['biologisch'],w:'https://www.eet.nu/den-haag/ritos'}
,{n:'De Hooghei',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Berlicum Nb',certs:['biologisch'],w:'https://www.eet.nu/berlicum-nb/de-hooghei'}
,{n:'Colori',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Grave',certs:['biologisch'],w:'https://www.eet.nu/grave/colori'}
,{n:'één MichelinsterDa Vinci16,524',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Maasbracht',certs:['biologisch'],w:'https://www.eet.nu/maasbracht/da-vinci'}
,{n:'Gasterij Zuidbarge',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Emmen',certs:['biologisch'],w:'https://www.eet.nu/emmen/gasterij-zuidbarge'}
,{n:'The Bourbon Room',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Bergen Noord Holland',certs:['biologisch'],w:'https://www.eet.nu/bergen-noord-holland/the-bourbon-room'}
,{n:'Os en Peper',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Zwolle',certs:['biologisch'],w:'https://www.eet.nu/zwolle/os-en-peper'}
,{n:'Enya',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Maarssen',certs:['biologisch'],w:'https://www.eet.nu/maarssen/enya'}
,{n:'één MichelinsterFletcher | De Kromme Dissel52',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Heelsum',certs:['biologisch'],w:'https://www.eet.nu/heelsum/fletcher-de-kromme-dissel'}
,{n:'Tante Blanche',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Brummen',certs:['biologisch'],w:'https://www.eet.nu/brummen/tante-blanche'}
,{n:'Bib GourmandDe Schans',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Montfoort',certs:['biologisch'],w:'https://www.eet.nu/montfoort/de-schans'}
,{n:'Hafiza',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Nijmegen',certs:['biologisch'],w:'https://www.eet.nu/nijmegen/hafiza'}
,{n:'één MichelinsterApicius',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Castricum',certs:['biologisch'],w:'https://www.eet.nu/castricum/apicius'}
,{n:'Ana\'s Lams Dis',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Utrecht',certs:['biologisch'],w:'https://www.eet.nu/utrecht/ana-s-lams-dis'}
,{n:'Barrevoets',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Leeuwarden',certs:['biologisch'],w:'https://www.eet.nu/leeuwarden/barrevoets'}
,{n:'De Heerlijke Huiskamer',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Ambt Delden',certs:['biologisch'],w:'https://www.eet.nu/ambt-delden/de-heerlijke-huiskamer'}
,{n:'Stadscafé de Tapperij',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Elburg',certs:['biologisch'],w:'https://www.eet.nu/elburg/stadscafe-de-tapperij'}
,{n:'De Molenaar',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Onderdendam',certs:['biologisch'],w:'https://www.eet.nu/onderdendam/de-molenaar'}
,{n:'Brasserie AanDeel',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Emmeloord',certs:['biologisch'],w:'https://www.eet.nu/emmeloord/brasserie-aandeel'}
,{n:'Bib GourmandDe Watergeus',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:4,lo:4,p:'Noorden',certs:['biologisch'],w:'https://www.eet.nu/noorden/de-watergeus'}

// === VEGAN RESTAURANTS (bron: curated NL vegan gids, alle steden) ===
,{n:'Neighbours kitchen',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Almere',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'The black cockatoo',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Almere',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Bindi Café',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amersfoort',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Het lokaal',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amersfoort',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Rozey',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amersfoort',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Abu Amr Koshari',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Bloem eten & drinken',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Bonboon',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Café de Ceuvel',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Flower burger',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Café Gilde',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Have a roll',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Hearth',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Kitchen Impossible',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Koffie ende koeck',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Lait de Choco',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Little Plant Pantry',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Lowlander',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Luminair',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Madre',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Margo’s',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Meatless District',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'The Meets',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Mediamatic',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Men impossible',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'MKZ',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Morris & Bella',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Mr Watson',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'The Old Soul',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Oliver Green',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Robin Food',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Rose & Vanilla',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Saint-Jean',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'De Sering',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Soil',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Spirit',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Sue',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'TerraZen Centre',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Trevi’s',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Vegan Junk Food Bar',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Vegan sushi bar',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Veganees',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'De Waaghals',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Wrap Lab',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Amsterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'FLFL',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Arnhem',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Konijnenvoer',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Arnhem',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Puur Sahn',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Berg en Dal',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Loff',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Breda',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Black & White kafe',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Breda',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'FRET',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Breda',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Pollevie',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Breda',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'FOAM',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Den Haag',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Hagedis',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Den Haag',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'PLENTY',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Den Haag',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Vegane glorie',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Den Haag',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Veggies on fire',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Den Haag',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Hotel Gaia',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Deventer',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Rebel Rebel',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Dordrecht',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Jungle',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Eindhoven',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Foodbar RAUW',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Enschede',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Het Paradijs',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Enschede',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Miss Nice Banana',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Gouda',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Curcuma',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Gouda',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Achterwerk',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Groningen',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Blabla',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Groningen',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Fankaasoo',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Groningen',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Mahalo',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Groningen',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'De Herbivoor',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Groningen',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Smaakaron',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Groningen',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'SLA (I Love Sla)',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Groningen',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'New Vegas',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Haarlem',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Mama Gaia',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Haarlem',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Klein Geluk',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Heemskerk',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Lab071',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Leiden',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Logica',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Leiden',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Avantgarde',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Leiden',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Soup Bros',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Leiden',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Bar Verde',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Leiden',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Bhalu',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Nijmegen',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'De nieuwe winkel',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Nijmegen',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'De Plak',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Nijmegen',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'De Grote Broek',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Nijmegen',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Tati',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Nijmegen',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Backyard',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Rotterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Copperbranch',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Rotterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Dumbo',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Rotterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Gare du Nord',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Rotterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Happy food and health',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Rotterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Heavenly Cupcakes',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Rotterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Leaf',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Rotterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Sharp Sharp',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Rotterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Vegan pizzabar',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Rotterdam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Groenten van Roos',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Sittard',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Texel, Den Burg',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Sittard',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Broei',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Utrecht',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Gys',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Utrecht',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Kasvio',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Utrecht',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Koffiebar en vegan bakkerij Kluts',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Utrecht',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Last Vegas',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Utrecht',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Le Jardin',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Utrecht',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Life’s a peach',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Utrecht',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Oproer',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Utrecht',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Syr',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Utrecht',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Vegitalian',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Utrecht',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Warmoes',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Utrecht',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Zo’ndag Werkendam',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Utrecht',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Ministerie van geluk',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Zoetermeer',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Dr. Plant',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Leeuwarden',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Pele Surf Shack',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Hoek van Holland',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Breakaway',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Sint Geertruid',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Wit-lof Foodbar',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Texel',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}
,{n:'Zo\'ndag Werkendam',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Werkendam',certs:['vegan'],w:'https://www.eet.nu/nederland/restaurants/biologisch'}

];
const TX={
// Witgoed & tech
wasmachine:{c:['witgoed']},droger:{c:['witgoed']},koelkast:{c:['witgoed']},ijskast:{c:['witgoed']},vaatwasser:{c:['witgoed']},magnetron:{c:['witgoed']},oven:{c:['witgoed']},televisie:{c:['witgoed','tech']},laptop:{c:['tech']},computer:{c:['tech']},telefoon:{c:['tech']},smartphone:{c:['tech']},tablet:{c:['tech']},
// Kleding
jeans:{c:['kleding']},broek:{c:['kleding']},shirt:{c:['kleding']},trui:{c:['kleding']},jas:{c:['kleding']},schoenen:{c:['kleding']},sokken:{c:['kleding']},ondergoed:{c:['kleding']},kleding:{c:['kleding']},mode:{c:['kleding']},
// Voeding - dagelijkse producten
eieren:{c:['voeding','markt']},ei:{c:['voeding','markt']},
groente:{c:['voeding','markt']},groenten:{c:['voeding','markt']},groentepakket:{c:['markt']},groentebox:{c:['markt']},
fruit:{c:['voeding','markt']},appels:{c:['voeding','markt']},aardappelen:{c:['voeding','markt']},
melk:{c:['voeding','markt']},zuivel:{c:['voeding','markt']},yoghurt:{c:['voeding']},kwark:{c:['voeding']},boter:{c:['voeding','markt']},
kaas:{c:['voeding','markt']},
vlees:{c:['voeding','markt']},kip:{c:['voeding','markt']},rundvlees:{c:['voeding','markt']},varken:{c:['voeding','markt']},
vis:{c:['voeding','markt']},
brood:{c:['voeding','markt']},bakker:{c:['voeding','markt']},
pasta:{c:['voeding']},rijst:{c:['voeding']},peulvruchten:{c:['voeding','markt']},bonen:{c:['voeding','markt']},linzen:{c:['voeding']},
noten:{c:['voeding']},zaden:{c:['voeding']},
olie:{c:['voeding']},olijfolie:{c:['voeding']},
sauzen:{c:['voeding']},kruiden:{c:['voeding','markt']},specerijen:{c:['voeding']},
chocolade:{c:['voeding']},snoep:{c:['voeding']},koekjes:{c:['voeding']},
koffie:{c:['voeding','horeca']},thee:{c:['voeding']},sap:{c:['voeding']},
wijn:{c:['voeding','horeca']},bier:{c:['voeding','horeca']},drank:{c:['voeding','horeca']},
spinazie:{c:['voeding','markt']},salade:{c:['voeding','markt','horeca']},
supermarkt:{c:['voeding']},boodschappen:{c:['voeding','markt']},biologisch:{c:['voeding','markt','horeca']},
// Markt & boerderij
boerenmarkt:{c:['markt']},boerderij:{c:['markt']},streekproducten:{c:['markt']},seizoensgroente:{c:['markt']},lokaal:{c:['markt','voeding']},
// Horeca
restaurant:{c:['horeca']},eten:{c:['horeca','voeding']},diner:{c:['horeca']},lunch:{c:['horeca']},ontbijt:{c:['horeca']},cafe:{c:['horeca']},keuken:{c:['horeca']},uiteten:{c:['horeca']},horeca:{c:['horeca']},vegan:{c:['horeca']},plantbased:{c:['horeca']},
// Verzorging
shampoo:{c:['verzorging']},zeep:{c:['verzorging']},tandpasta:{c:['verzorging']},deodorant:{c:['verzorging']},lotion:{c:['verzorging']},crème:{c:['verzorging']},make:{c:['verzorging']},luiers:{c:['verzorging']},babyverzorging:{c:['verzorging']},wasmiddel:{c:['verzorging']},schoonmaak:{c:['verzorging']},
// Wonen & bouw
verf:{c:['wonen','bouw']},meubels:{c:['wonen']},tapijt:{c:['wonen']},gordijnen:{c:['wonen']},verlichting:{c:['wonen']},keukenapparatuur:{c:['witgoed','wonen']},
// Energie & mobiliteit
zonnepanelen:{c:['energie']},energie:{c:['energie']},stroom:{c:['energie']},gas:{c:['energie']},fiets:{c:['mobiliteit']},ebike:{c:['mobiliteit']},auto:{c:['mobiliteit']},
// Finance & diensten
bank:{c:['financien']},sparen:{c:['financien']},verzekering:{c:['financien']},
bouw:{c:['bouw']},software:{c:['tech']},advies:{c:['diensten']},media:{c:['media']},zorg:{c:['zorg']},
};
const OSC=[
['netwerk','🌐 Netwerk','#2d5a27','Contacten?','Wie ken je?'],
['wetenschap','🔬 Kennis','#1a7a6e','Kennis?','Welke kennis?'],
['vaardigheid','🎯 Talent','#5b4fa8','Vaardigheden?','Welk talent?'],
['tijd','⏳ Tijd','#c45e00','Tijd?','Hoeveel tijd?'],
['middelen','💰 Middelen','#c17f24','Middelen?','Welke middelen?'],
['xfactor','✨ X-factor','#b85450','Uniek?','Jouw bijdrage?']
// === VEGAN RESTAURANTS OVERIGE STEDEN ===
,{n:'FLFL',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Arnhem',certs:['vegan'],w:'https://www.flfl.nl'}
,{n:'Loff',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Breda',certs:['vegan','biologisch'],w:'https://www.loff.nl'}
,{n:'Hagedis',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Breda',certs:['vegan'],w:'https://www.restauranthagedis.nl'}
,{n:'Hotel Gaia',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Deventer',certs:['vegan'],w:'https://www.hotelgaia.nl'}
,{n:'Rebel Rebel',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Dordrecht',certs:['vegan'],w:'https://www.rebelrebel.nl'}
,{n:'Bij Albrecht',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:5,lo:5,p:'Eindhoven',certs:['vegan','biologisch'],w:'https://www.bijalbrecht.nl'}
,{n:'Foodbar RAUW',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Enschede',certs:['vegan'],w:'https://www.foodbarrauw.nl'}
,{n:'Miss Nice Banana',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Gouda',certs:['vegan'],w:'https://www.missnicebana.nl'}
,{n:'Achterwerk',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Groningen',certs:['vegan'],w:'https://www.achterwerk.nl'}
,{n:'FLFL Haarlem',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Haarlem',certs:['vegan'],w:'https://www.flfl.nl'}
,{n:'Klein Geluk',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Heemskerk',certs:['vegan'],w:'https://www.kleingeluk.nl'}
,{n:'Lab071',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Leiden',certs:['vegan'],w:'https://www.lab071.nl'}
,{n:'Bhalu',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Nijmegen',certs:['vegan'],w:'https://www.bhalu.nl'}
,{n:'Aloha Bar Rotterdam',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Rotterdam',certs:['vegan'],w:'https://www.alohabar.nl'}
,{n:'Groenten van Roos',c:'horeca',t:'retailer',s:'physical',bio:5,fair:4,sust:5,lo:5,p:'Sittard',certs:['vegan','biologisch'],w:'https://www.groentenvanroos.nl'}
,{n:'Broei Utrecht',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Utrecht',certs:['vegan'],w:'https://www.broei.nu'}
,{n:'Ministerie van Geluk',c:'horeca',t:'retailer',s:'physical',bio:4,fair:4,sust:5,lo:5,p:'Zoetermeer',certs:['vegan'],w:'https://www.ministerievangeluk.nl'}
];

const SC=[{id:'voeding',l:'Voeding & Drinken',e:'🥦',c:'#2d5a27'},{id:'kleding',l:'Kleding & Mode',e:'👕',c:'#1a7a6e'},{id:'tech',l:'Technologie',e:'💻',c:'#5b4fa8'},{id:'witgoed',l:'Witgoed & Elektronica',e:'🔌',c:'#c45e00'},{id:'wonen',l:'Wonen & Interieur',e:'🛋️',c:'#c17f24'},{id:'verzorging',l:'Lichaam & Verzorging',e:'🌿',c:'#2d5a27'},{id:'markt',l:'Boerenmarkt & Landwinkel',e:'🌾',c:'#c45e00'},{id:'financien',l:'Financiën',e:'💰',c:'#1a7a6e'},{id:'mobiliteit',l:'Mobiliteit',e:'🚲',c:'#5b4fa8'},{id:'energie',l:'Energie & Klimaat',e:'⚡',c:'#c17f24'},{id:'zorg',l:'Zorg & Welzijn',e:'🏥',c:'#b85450'},{id:'vrije_tijd',l:'Natuur & Vrije Tijd',e:'🎭',c:'#2d5a27'},{id:'horeca',l:'Horeca & vrije tijd',e:'🍽️',c:'#c45e00'},{id:'bouw',l:'Bouw & maakindustrie',e:'🔨',c:'#6b7260'},{id:'diensten',l:'Zakelijke dienstverlening',e:'💼',c:'#5b4fa8'},{id:'media',l:'Media & cultuur',e:'📚',c:'#1a7a6e'}];

const CERT_BADGES={
  bcorp:   {l:'B Corp',         e:'🅱️', c:'#2d5a27'},
  steward: {l:'Steward-owned',  e:'🌱', c:'#1a7a6e'},
  gots:    {l:'GOTS',           e:'🌿', c:'#2d5a27'},
  fairtrade:{l:'Fair Trade',    e:'☕', c:'#c17f24'},
  fairwear:{l:'Fair Wear',      e:'👕', c:'#5b4fa8'},
  demeter: {l:'Demeter',        e:'🌾', c:'#c17f24'},
  great:   {l:'GoY: Uitstekend',e:'⭐⭐⭐',c:'#2d5a27'},
  good:    {l:'GoY: Goed',      e:'⭐⭐', c:'#1a7a6e'},
  start:   {l:'GoY: Begin',     e:'⭐',  c:'#c45e00'},
  biologisch:{l:'Biologisch',   e:'🌿', c:'#2d5a27'},
  vegan:   {l:'Vegan/Plantbased',e:'🌱',c:'#1a7a6e'},
};

const QD={invest:{c:'#2d5a27',l:'Investeren',d:'Renteloos le.',di:['Initiatief starten','Renteloze lening','Deelnemen'],fi:['Geld vloeit terug','Geen rente, wel verantwoordelijkheid']},support:{c:'#1a7a6e',l:'Ondersteunen',d:'Persoonlijke.',di:['Persoonlijke voordracht','Groei ondersteunen','Geen criteria'],fi:['Gift, geen lening','Vertrouwen als basis']},crowd:{c:'#5b4fa8',l:'Crowdfunding',d:'Initiatieven.',di:['Criteria-selectie','Gelijke stem','Consent-besluitvorming'],fi:['Geld vrij bij haalbaarheid','Collectief beheer']},give:{c:'#c17f24',l:'Weggeven',d:'Zuivere gift.',di:['Geen verwachtingen','Onpersoonlijk','Trickledown'],fi:['Pure gift','Versterkt het systeem']}};
const PS=['Idee','Actief','Afgerond'],STC={Idee:'#c17f24',Actief:'#2d5a27',Afgerond:'#6b7260'};
var currentUser=null;var projs=[];var supporters=[];let mbrs=[...M],shops=[...SH_DATA];
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
  if(currentUser&&mI&&mI.value)try{localStorage.setItem('fs_inc_'+currentUser,mI.value);}catch(e){}
  const inc=+(mI.value)||0,pct=fx?(inc>0?(+(fa.value)||0)/inc:0):(+(ps.value)||0)/100;
  const mc=fx?(+(fa.value)||0):Math.round(inc*pct);
  if(!fx)$('pl').textContent=ps.value+'% = €'+mc.toLocaleString('nl-NL')+'/mnd';
  const all=[...mbrs,{id:0,n:currentUser||'Jij',i:inc,me:true}];
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
  $('tab2').innerHTML=`<div class="card" style="margin-bottom:10px;"><h3 style="font-size:13px;margin-bottom:10px;">👥 Deelnemer toevoegen</h3><div style="display:grid;grid-template-columns:1fr 1fr auto;gap:6px;align-items:end;"><div><label style="font-size:8px;font-weight:600;text-transform:uppercase;color:var(--mu);display:block;margin-bottom:3px;">Naam</label><input id="nn" placeholder="Sara" onkeydown="if(event.key==='Enter')AM()" style="width:100%;padding:6px 9px;border:1px solid var(--br);border-radius:7px;font-size:13px;background:var(--w);color:var(--tx);"></div><div><label style="font-size:8px;font-weight:600;text-transform:uppercase;color:var(--mu);display:block;margin-bottom:3px;">Inkomen/mnd</label><div style="position:relative;"><span style="position:absolute;left:7px;top:50%;transform:translateY(-50%);font-weight:700;color:var(--g);font-size:11px;">€</span><input id="ni" type="number" placeholder="2500" onkeydown="if(event.key==='Enter')AM()" style="width:100%;padding:6px 7px 6px 18px;border:1px solid var(--br);border-radius:7px;font-size:13px;background:var(--w);color:var(--tx);"></div></div><button onclick="AM()" style="background:var(--g);color:#fff;padding:6px 10px;border-radius:7px;font-size:13px;font-weight:600;height:33px;border:none;cursor:pointer;">+</button></div></div><div class="card"><div style="display:flex;justify-content:space-between;margin-bottom:8px;"><h3 style="font-size:13px;">${mbrs.length} leden</h3><span style="font-size:11px;color:var(--mu);">Gem.ink: <strong style="color:var(--g);">€${avg.toLocaleString('nl-NL')}</strong></span></div><div style="display:flex;flex-direction:column;gap:4px;">${[...comp].sort((a,b)=>a.i-b.i).map(m=>{const cl=m;return`<div style="display:grid;grid-template-columns:auto 1fr auto auto;gap:7px;align-items:center;padding:7px 9px;border-radius:9px;background:#f8f5f0;border:1px solid var(--br);"><div style="width:26px;height:26px;border-radius:50%;background:hsl(${m.i/30},40%,55%);display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:#fff;">${(m.n||'').split(' ').map(w=>w[0]).join('').slice(0,2)}</div><div><div style="font-size:12px;font-weight:500;">${m.n}</div><div style="font-size:10px;color:var(--mu);">€${m.i.toLocaleString('nl-NL')}/mnd</div></div><div style="text-align:right;"><div style="font-size:8px;color:var(--mu);">netto</div><div style="font-size:10px;font-weight:600;color:${cl.nt>=0?'#2d5a27':'#b85450'};">${cl.nt>=0?'+':''}€${Math.abs(cl.nt).toLocaleString('nl-NL')}</div></div>${m.me?'<span style="width:22px;"></span>':`<button onclick="RM(${m.id})" style="width:22px;height:22px;border-radius:50%;background:var(--w);color:var(--mu);font-size:13px;border:1px solid var(--br);cursor:pointer;display:flex;align-items:center;justify-content:center;">×</button>`}</div>`;}).join('')}</div></div>`;
}
function AM(){const n=($('nn')||{}).value||'',i=+($('ni')||{}).value||0;if(!n.trim()||!i)return;mbrs.push({id:++nid,n:n.trim(),i});CS();}
function RM(id){mbrs=mbrs.filter(m=>m.id!==id);try{const r=JSON.parse(localStorage.getItem('fs_r')||'[]');r.push(id);localStorage.setItem('fs_r',JSON.stringify(r));}catch(e){}CS();}

function CT(i){['ck0','ck1','ck2'].forEach((id,j)=>{const el=document.getElementById(id);if(el)el.style.display=i===j?'block':'none';});['ct0','ct1','ct2'].forEach((id,j)=>{const b=document.getElementById(id);if(!b)return;b.className='tb'+(i===j?' on':'');});if(i===1)RCW();if(i===2){window._sc=window._sc||[];ROS();}}

function SQ(id,btn){const q=QD[id];document.querySelectorAll('.qb').forEach(b=>b.classList.remove('sel'));btn.classList.add('sel');$('qd').innerHTML=`<div style="border-radius:12px;border:1px solid ${q.c};padding:14px;animation:fu .3s ease both;"><div style="display:flex;align-items:center;gap:8px;margin-bottom:9px;"><div style="width:32px;height:32px;border-radius:8px;background:${q.c};display:flex;align-items:center;justify-content:center;font-size:16px;color:#fff;flex-shrink:0;">${{invest:'📈',support:'🌱',crowd:'👥',give:'🎁'}[id]}</div><div><h3 style="font-size:13px;color:${q.c};">${q.l}</h3><p style="font-size:11px;color:var(--mu);">${q.d}</p></div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">${[{t:'Kenmerken',i:q.di},{t:'Financieel',i:q.fi}].map(s=>`<div><p style="font-size:8px;font-weight:600;text-transform:uppercase;color:var(--mu);margin-bottom:4px;">${s.t}</p>${s.i.map(d=>`<div style="display:flex;gap:4px;margin-bottom:3px;"><span style="width:4px;height:4px;border-radius:50%;background:${q.c};margin-top:5px;flex-shrink:0;"></span><span style="font-size:11px;">${d}</span></div>`).join('')}</div>`).join('')}</div></div>`;}
function RCW(){const wq=[{q:'Heb je een persoonlijke relatie met de ontvanger of het initiatief?',o:[{l:'✋ Ja',v:'y'},{l:'🌍 Nee',v:'n'}]},{q:'Stel je een voorwaarde of heb je een verwachting bij je bijdrage?',o:[{l:'📋 Ja',v:'y'},{l:'🕊️ Nee',v:'n'}]}];if(cwr){const q=QD[cwr];$('ck1').innerHTML=`<div class="card" style="border:1px solid ${q.c};"><div style="text-align:center;margin-bottom:12px;"><div style="width:44px;height:44px;border-radius:11px;background:${q.c};display:flex;align-items:center;justify-content:center;font-size:20px;color:#fff;margin:0 auto 8px;">${{invest:'📈',support:'🌱',crowd:'👥',give:'🎁'}[cwr]}</div><h2 style="font-size:17px;color:${q.c};margin-bottom:2px;">${q.l}</h2><p style="color:var(--mu);font-size:12px;">${q.d}</p></div>${q.di.map(d=>`<div style="display:flex;gap:6px;align-items:center;margin-bottom:5px;"><span style="width:12px;height:12px;border-radius:50%;background:${q.c}22;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="width:4px;height:4px;border-radius:50%;background:${q.c};"></span></span><span style="font-size:12px;">${d}</span></div>`).join('')}<button onclick="cwr=null;cws=0;cwa={};RCW();" style="margin-top:10px;width:100%;padding:7px;border-radius:8px;background:#f3f0eb;color:var(--mu);font-size:12px;border:none;cursor:pointer;">🔄 Opnieuw</button></div>`;return;}const step=wq[cws];$('ck1').innerHTML=`<div class="card"><div style="display:flex;gap:4px;margin-bottom:12px;">${wq.map((_,i)=>`<div style="flex:1;height:4px;border-radius:2px;background:${i<=cws?'#1a7a6e':'var(--br)'}"></div>`).join('')}</div><p style="font-size:11px;color:var(--mu);margin-bottom:2px;">Vraag ${cws+1} van ${wq.length}</p><h3 style="font-size:15px;margin-bottom:12px;">${step.q}</h3><div style="display:flex;flex-direction:column;gap:6px;">${step.o.map(o=>`<button class="wo" onclick="cwa['${cws===0?'p':'c'}']=this.dataset.v;${cws<1?'cws++;RCW()':'const p=cwa.p===\"y\",c=cwa.c===\"y\";cwr=p&&c?\"invest\":p?\"support\":c?\"crowd\":\"give\";RCW();'}" data-v="${o.v}">${o.l} <span style="color:var(--mu);">→</span></button>`).join('')}</div>${cws>0?`<button onclick="cws--;RCW();" style="margin-top:7px;padding:3px 8px;border-radius:5px;background:none;border:none;font-size:11px;color:var(--mu);cursor:pointer;">← Vorige</button>`:''}</div>`;}

function LTX(q){const ql=q.toLowerCase().trim();if(TX[ql])return TX[ql];const m=Object.entries(TX).find(([k])=>ql.includes(k)||k.includes(ql));return m?m[1]:null;}
function SH(){$('sb').style.display='none';$('sht').textContent='🛍️ Shopping';$('shs').textContent='Zoek op product of winkel, of gebruik de Koophulp.';si.value='';$('sc').innerHTML=`<p style="font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--mu);margin-bottom:9px;">Browse per categorie</p><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:7px;margin-bottom:18px;">${SC.map(cat=>`<div class="pl" onclick="SC2('${cat.id}')" style="padding:10px;"><div style="font-size:16px;margin-bottom:6px;">${cat.e}</div><div style="font-size:11px;font-weight:600;color:${cat.c};line-height:1.3;">${cat.l}</div><div style="font-size:9px;color:var(--mu);margin-top:2px;">${shops.filter(s=>s.c===cat.id).length} winkels</div></div>`).join('')}</div><div onclick="KH()" style="border-radius:14px;background:linear-gradient(135deg,#2d5a27,#1a7a6e);padding:14px;display:flex;align-items:center;gap:10px;cursor:pointer;"><div style="font-size:24px;">🧭</div><div><h3 style="font-size:13px;color:#fff;margin-bottom:1px;">Weet je niet waar te beginnen?</h3><p style="font-size:12px;color:rgba(255,255,255,.8);">Koophulp geeft persoonlijk advies.</p></div><div style="margin-left:auto;color:rgba(255,255,255,.6);font-size:16px;">→</div></div>`;}
function SC2(cid){$('sb').style.display='';const cat=SC.find(c=>c.id===cid);$('sht').textContent=cat.e+' '+cat.l;const lst=shops.filter(s=>s.c===cid);$('shs').textContent=lst.length+' winkels';$('sc').innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:7px;">${lst.map(s=>KA(s,'')).join('')}</div>`;}
function DS(){const q=si.value.trim();if(!q)return;$('sb').style.display='';$('sht').textContent='🛍️ "'+q+'"';const ex=LTX(q);const res=shops.filter(s=>{const qlow=q.toLowerCase();const cat=SC.find(c=>c.id===s.c);const d=s.n.toLowerCase().includes(qlow)||(s.d||'').toLowerCase().includes(qlow)||(s.p||'').toLowerCase().includes(qlow)||((s.certs||[]).some(c=>c.includes(qlow)))||((cat&&cat.l)||'').toLowerCase().includes(qlow);const em=ex&&(ex.c.includes(s.c));return d||em;});$('shs').textContent=res.length+' resultaten'+(ex?' (product herkend)':'');if(!res.length){$('sc').innerHTML=`<div style="text-align:center;padding:32px 0;"><div style="font-size:28px;margin-bottom:7px;">🔍</div><h3 style="font-size:14px;margin-bottom:4px;">Niets gevonden voor "${q}"</h3><p style="color:var(--mu);font-size:13px;">Probeer bijv. spinazie, ijskast, jeans</p></div>`;return;}let h=ex?`<div style="background:var(--al);border-radius:8px;padding:7px 12px;margin-bottom:10px;font-size:12px;color:var(--a);font-weight:500;">💡 Product herkend: winkels voor "${q}"</div>`:'';SC.forEach(cat=>{const cs=res.filter(s=>s.c===cat.id);if(!cs.length)return;h+=`<div style="margin-bottom:16px;"><div style="display:flex;align-items:center;gap:6px;margin-bottom:7px;"><span style="font-size:13px;">${cat.e}</span><h3 style="font-size:12px;font-weight:600;color:${cat.c};">${cat.l} (${cs.length})</h3></div><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:7px;">${cs.map(s=>KA(s,q)).join('')}</div></div>`;});$('sc').innerHTML=h;}
function LS(){const q=si.value.trim();if(q.length>=1)DS();else if(!q)SH();}
function HL(t,q){if(!q||!t)return t||'';const i=t.toLowerCase().indexOf(q.toLowerCase());if(i<0)return t;return t.slice(0,i)+'<mark>'+t.slice(i,i+q.length)+'</mark>'+t.slice(i+q.length);}
function TB(t){const m={steward:{l:'Steward',bg:'#eef5ec',c:'#2d5a27'},cooperative:{l:'Coöp',bg:'#eaf5f3',c:'#1a7a6e'},retailer:{l:'Retailer',bg:'#fdf5e8',c:'#c17f24'}}[t]||{l:'?',bg:'#f3f0eb',c:'#6b7260'};return`<span style="font-size:8px;padding:2px 5px;border-radius:4px;background:${m.bg};color:${m.c};font-weight:700;flex-shrink:0;">${m.l}</span>`;}
function SB(s){return[[s.bio,'Bio','#2d5a27'],[s.fair,'Fair','#1a7a6e'],[s.sust,'Duurz','#5b4fa8'],[s.lo,'Lokaal','#c17f24']].filter(([v])=>v!=null).map(([v,l,c])=>`<span style="padding:1px 5px;border-radius:8px;font-size:9px;font-weight:500;border:1px solid ${c}40;background:${c}15;color:${c};">${l} ${v}/5</span>`).join('');}
function KA(s,q){const cat=SC.find(c=>c.id===s.c)||{e:'🛍️',c:'#c17f24'};const dm=s.w?s.w.replace('https://','').replace('http://','').replace('www.','').split('/')[0]:'';return`<div class="cc"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:5px;"><div style="display:flex;align-items:center;gap:5px;flex:1;min-width:0;"><span style="font-size:12px;flex-shrink:0;">${cat.e}</span><h3 style="font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${HL(s.n,q)}</h3></div>${TB(s.t)}</div><p style="font-size:11px;color:var(--mu);line-height:1.6;margin-bottom:7px;flex:1;">${HL(s.d,q)}</p><div style="display:flex;gap:3px;flex-wrap:wrap;margin-bottom:6px;">${SB(s)}</div><div style="display:flex;gap:6px;align-items:center;margin-bottom:6px;font-size:10px;color:var(--mu);"><span>📍 ${s.p||'Landelijk'}</span><span>${s.s==='online'?'🌐':s.s==='physical'?'🏪':'🔀'}</span></div>${s.w?`<a href="${s.w}" target="_blank" class="sl">🔗 ${dm}</a>`:''}<div style="margin-top:5px;display:flex;flex-wrap:wrap;gap:3px;">${(s.certs||[]).map(k=>{k=k.trim();const b=CERT_BADGES[k];return b?`<span style="font-size:9px;padding:1px 5px;border-radius:4px;background:${b.c}18;color:${b.c};border:1px solid ${b.c}44;white-space:nowrap;">${b.e} ${b.l}</span>`:''}).join('')}</div></div>`;}

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
    const nb=(p.needs||[]).map(function(n){var key=n&&n.v?n.v:n;var lbl=n&&n.note?n.note:'';var e=OSC.find(function(x){return x[0]===key;})||[key,key,'#6b7260'];return'<span style="padding:1px 6px;border-radius:8px;font-size:9px;background:'+e[2]+'18;color:'+e[2]+';" title="'+(lbl||e[3]||'')+'">'+e[1]+'</span>';}).join(' ');
    return'<div style="background:var(--w);border-radius:12px;border:1px solid '+(exp?'var(--t)':'var(--br)')+';padding:11px 12px;margin-bottom:7px;"><div style="display:flex;align-items:flex-start;gap:7px;"><div style="flex:1;cursor:pointer;" onclick="window._exp=window._exp||new Set();window._exp.has('+p.id+')?window._exp.delete('+p.id+'):window._exp.add('+p.id+');RH();"><div style="display:flex;gap:4px;align-items:center;margin-bottom:2px;flex-wrap:wrap;"><strong style="font-size:13px;">'+p.name+'</strong>'+(p.ind?'<span style="font-size:11px;color:var(--mu);"> — '+p.ind+'</span>':'')+'<span style="padding:2px 6px;border-radius:10px;font-size:9px;font-weight:600;background:'+STC[p.status]+'18;color:'+STC[p.status]+';">'+p.status+'</span></div>'+(nb?'<div style="margin-top:2px;">'+nb+'</div>':'')+(mx.length&&!exp?'<p style="font-size:10px;color:var(--t);margin-top:2px;">🤝 '+mx.map(s=>s.name).join(',')+'</p>':'')+'</div><button onclick="DELP('+p.id+')" style="background:none;border:none;font-size:15px;cursor:pointer;color:var(--mu);">×</button></div>'+(exp?'<div style="margin-top:9px;padding-top:9px;border-top:1px solid var(--br);">'+(p.desc?'<p style="font-size:12px;color:var(--mu);margin-bottom:7px;">'+p.desc+'</p>':'')+(mx.length?'<p style="font-size:11px;font-weight:600;margin-bottom:5px;">Passende ondersteuners:</p>'+mx.map(s=>'<div style="display:flex;align-items:center;gap:7px;padding:5px 8px;border-radius:8px;background:var(--gl);margin-bottom:3px;"><span style="flex:1;font-size:12px;">'+s.name+'</span></div>').join(''):'')+'<div style="display:flex;gap:4px;margin-top:7px;flex-wrap:wrap;">'+PS.filter(s=>s!==p.status).map(s=>'<button onclick="UPDP('+p.id+',\''+s+'\')" style="padding:2px 7px;border-radius:8px;font-size:9px;font-weight:500;background:'+STC[s]+'18;color:'+STC[s]+';border:none;cursor:pointer;">→ '+s+'</button>').join('')+'<button onclick="EDPROJ('+p.id+')" style="padding:2px 7px;border-radius:8px;font-size:9px;font-weight:500;background:#5b4fa818;color:#5b4fa8;border:none;cursor:pointer;margin-left:auto;">✏️ Bewerken</button></div></div>':'')+'</div>';
  }).join(''):'<div style="text-align:center;padding:28px 0;color:var(--mu);">Geen projecten.</div>';}

function TH(){const f=document.getElementById('hf'),show=f.style.display==='none';f.style.display=show?'block':'none';if(!show)return;window._hn=[];f.innerHTML=`<div class="card" style="border:1px solid var(--co);"><h3 style="font-size:13px;margin-bottom:9px;">Nieuw project</h3><div style="display:grid;gap:7px;"><input id="pn" placeholder="Naam *" style="width:100%;padding:6px 10px;border:1px solid var(--br);border-radius:7px;font-size:12px;background:var(--w);color:var(--tx);"><input id="pi" placeholder="Indiener(s)" style="width:100%;padding:6px 10px;border:1px solid var(--br);border-radius:7px;font-size:12px;background:var(--w);color:var(--tx);"><textarea id="pd" placeholder="Beschrijving" rows="2" style="width:100%;padding:6px 10px;border:1px solid var(--br);border-radius:7px;font-size:12px;background:var(--w);color:var(--tx);resize:vertical;"></textarea><select id="pp" style="width:100%;padding:6px 10px;border:1px solid var(--br);border-radius:7px;font-size:12px;background:var(--w);color:var(--tx);">${PS.map(s=>`<option>${s}</option>`).join('')}</select><p style="font-size:11px;font-weight:600;">Welke ondersteuning nodig?</p><div id="hn-btns" style="display:flex;flex-direction:column;gap:5px;"></div><div style="display:flex;gap:5px;"><button onclick="SAV()" style="flex:1;background:var(--co);color:#fff;padding:8px;border-radius:8px;font-size:12px;font-weight:700;border:none;cursor:pointer;box-shadow:0 2px 6px var(--co)44;">✅ Opslaan</button><button onclick="document.getElementById('hf').style.display='none';" style="padding:8px 12px;border-radius:8px;border:2px solid var(--br);background:var(--bg);font-size:11px;font-weight:600;color:var(--tx);cursor:pointer;">✖ Annuleren</button></div></div></div>`;RHN();}

async function DELP(id){await _DB.from('projects').delete().eq('id',id);await LD();}async function UPDP(id,st){await _DB.from('projects').update({status:st}).eq('id',id);await LD();}function SD(){}
async function LD(){if(!_DB)return;const{data:pd}=await _DB.from('projects').select('*').order('created_at',{ascending:false});if(pd)projs=pd.map(p=>({...p,desc:p.description}));const{data:sd}=await _DB.from('supporters').select('*').order('created_at',{ascending:false});if(sd)supporters=sd;RH();let d=document.getElementById('h-debug');if(d&&pd)d.innerHTML='✅ '+pd.length+' project(en) geladen';}
function MATCH(p){const pv=(p.needs||[]).map(x=>x&&x.v?x.v:x);return(supporters||[]).filter(s=>{const sv=(s.cats||[]).map(x=>x&&x.v?x.v:x);return pv.some(n=>sv.includes(n));});}
async function SAV(){const n=document.getElementById('pn');if(!n||!n.value.trim()){alert('Naam vereist');return;}const needs=OSC.map(([v])=>{const inp=document.getElementById('hn-'+v);const note=inp?inp.value.trim():'';return note?{v,note}:null;}).filter(Boolean);await _DB.from('projects').insert([{name:n.value.trim(),ind:(document.getElementById('pi')||{value:''}).value,status:(document.getElementById('pp')||{value:'Idee'}).value,description:(document.getElementById('pd')||{value:''}).value.trim(),needs}]);document.getElementById('hf').style.display='none';await LD();}
function RHN(){const b=document.getElementById('hn-btns');if(!b)return;b.innerHTML=OSC.map(([v,l,cl,q1,q2])=>{const ico=l.split(' ')[0];const lbl=l.split(' ').slice(1).join(' ');return'<div style="margin-bottom:8px;"><label style="display:flex;align-items:center;gap:5px;font-size:12px;font-weight:600;color:'+cl+';margin-bottom:3px;"><span style="font-size:15px;">'+ico+'</span>'+lbl+'</label><input id="hn-'+v+'" placeholder="'+q2+'" style="width:100%;padding:6px 10px;border:1px solid var(--br);border-radius:7px;font-size:12px;background:var(--w);color:var(--tx);box-sizing:border-box;" onfocus="this.style.borderColor=\''+cl+'\'" onblur="this.style.borderColor=\'var(--br)\'"></div>';}).join('');}
function ROS(){
  const b=document.getElementById('sc-btns');
  if(b){
    b.innerHTML=OSC.map(([v,l,cl,q1,q2])=>{
      const ico=l.split(' ')[0];
      const lbl=l.split(' ').slice(1).join(' ');
      return '<div style="margin-bottom:10px;">'
        +'<label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:'+cl+';margin-bottom:4px;">'
        +'<span style="font-size:16px;">'+ico+'</span>'+lbl
        +'</label>'
        +'<input id="osc-'+v+'" placeholder="'+q2+'" class="osc-inp" '
        +'onfocus="this.style.borderColor=\''+cl+'\';" onblur="this.style.borderColor=\'var(--br)\';">'
        +'</div>';
    }).join('');
  }
  const sl=document.getElementById('sup-list');
  if(sl)sl.innerHTML=supporters.length
    ?supporters.map(s=>'<div class="card" style="padding:9px;margin-bottom:6px;">'
      +'<div style="display:flex;align-items:center;gap:7px;">'
      +'<div style="flex:1;"><strong style="font-size:13px;">'+s.name+'</strong>'
      +'<div style="font-size:11px;color:var(--mu);">'+(s.cats||[]).map(c=>c.v+': '+c.note).join(' · ')+'</div></div>'
      +'<button onclick="DELS('+s.id+')" style="background:none;border:none;cursor:pointer;color:var(--co);font-size:13px;">×</button>'
      +'</div></div>').join('')
    :'<p style="font-size:12px;color:var(--mu);padding:8px 0;">Nog geen ondersteuners.</p>';
}
async function ADS(){
  const n=document.getElementById('sn');
  if(!n||!n.value.trim()){alert('Naam vereist');return;}
  const cats=OSC.map(([v])=>{
    const inp=document.getElementById('osc-'+v);
    const note=inp?inp.value.trim():'';
    return note?{v,note}:null;
  }).filter(Boolean);
  const note=(document.getElementById('st')||{value:''}).value;
  await _DB.from('supporters').insert([{name:n.value.trim(),cats,note}]);
  await LD();
  n.value='';
  OSC.forEach(([v])=>{const inp=document.getElementById('osc-'+v);if(inp)inp.value='';});
  (document.getElementById('st')||{}).value='';
  ROS();
}

CS();ST(0);

window.addEventListener('load',()=>{
  _DB=supabase.createClient(SURL,SKEY);
  try{
    const saved=localStorage.getItem('fs_user');
    if(saved){
      currentUser=saved;
      const sv=localStorage.getItem('fs_inc_'+currentUser);
      if(sv&&mI)mI.value=sv;
      // Restore removed members
      const removed=JSON.parse(localStorage.getItem('fs_r')||'[]');
      mbrs=M.filter(m=>!removed.includes(m.id));
      CS();
      document.getElementById('wl').style.display='none';
      const ub=document.getElementById('ubar');if(ub)ub.style.display='flex';
      document.getElementById('ubar-name').textContent='👤 '+currentUser;
    }
  }catch(e){}
  LD();
});

function JOIN(){
  const n=document.getElementById('uname');
  if(!n||!n.value.trim()){alert('Vul je naam in');return;}
  currentUser=n.value.trim();
  try{localStorage.setItem('fs_user',currentUser);}catch(e){}
  // Restore removed members for this user
  try{const removed=JSON.parse(localStorage.getItem('fs_r')||'[]');mbrs=M.filter(m=>!removed.includes(m.id));}catch(e){mbrs=[...M];}
  // Restore income
  try{const sv=localStorage.getItem('fs_inc_'+currentUser);if(sv&&mI)mI.value=sv;}catch(e){}
  CS();
  document.getElementById('wl').style.display='none';
  const ub=document.getElementById('ubar');if(ub)ub.style.display='flex';
  document.getElementById('ubar-name').textContent='👤 '+currentUser;
}

function DEMO_START(){
  currentUser='Demo';
  mbrs=[...M];
  if(mI)mI.value='2500';
  CS();
  document.getElementById('wl').style.display='none';
  const ub=document.getElementById('ubar');if(ub)ub.style.display='flex';
  document.getElementById('ubar-name').textContent='👤 Demo (demo)';
}

function LOGOUT(){
  currentUser=null;
  mbrs=[...M];
  if(mI)mI.value='';
  try{localStorage.removeItem('fs_user');}catch(e){}
  CS();
  document.getElementById('wl').style.display='flex';
  const ub=document.getElementById('ubar');if(ub)ub.style.display='none';
}
