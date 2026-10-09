(()=>{'use strict';
const api=window.BOBINA_DEMO, head=document.getElementById('real-header'), drop=document.getElementById('real-header-dropdown'), inp=document.getElementById('real-search-input'), catBtn=document.getElementById('header-catalog-button');
const categories=['Vše','Ženy','Muži','Děti','Bydlení','Elektronika','Móda','Knihy, hudba, video','Krása a zdraví','Sport','Hobby','Kolekce','Boty','Kabelky','Doplňky','Šperky'];
let type='';function close(){drop.hidden=true;drop.innerHTML='';type='';catBtn.setAttribute('aria-expanded','false');document.getElementById('header-lang').setAttribute('aria-expanded','false')}
function open(name){if(type===name&&!drop.hidden){close();return}type=name;drop.hidden=false;catBtn.setAttribute('aria-expanded',String(name==='catalog'));document.getElementById('header-lang').setAttribute('aria-expanded',String(name==='lang'));
if(name==='catalog')drop.innerHTML='<h3>Procházet kategorie</h3><div class="menu-items">'+categories.map(c=>`<button data-pick="${c}">${c}</button>`).join('')+'</div>';
if(name==='search')drop.innerHTML='<h3>Tipy na hledání</h3><div class="menu-items">'+['Tenisky','Svetr','Kabelka','iPhone','Sluchátka','Bunda'].map(c=>`<button data-query="${c}">${c}</button>`).join('')+'</div>';
if(name==='lang')drop.innerHTML='<h3>Jazyk ukázky</h3><p>Čeština (CZ). Další jazyky nejsou v tomto demu aktivní.</p>';
}
function browse(c){const state=api.state;let recognized=window.BOBINA_DEMO.products.some(p=>p.category===c);state.category=recognized?c:'Vše';state.query='';document.getElementById('market-search').value='';api.render();close();document.getElementById('demo').scrollIntoView({behavior:'smooth'});if(!recognized&&c!=='Vše') api.show(`<h2>${c}</h2><p>Tato hlavní sekce je připravena k prohlížení. V ukázce můžeš procházet celý katalog s 50 položkami.</p><button data-market="reset" class="primary-btn">Zobrazit katalog</button>`)}
catBtn.addEventListener('mouseenter',()=>open('catalog'));
head.addEventListener('mouseleave',()=>{if(type==='catalog')close()});
catBtn.addEventListener('click',()=>open('catalog'));
document.getElementById('real-search-form').addEventListener('submit',e=>{e.preventDefault();api.state.query=inp.value.trim();api.state.category='Vše';document.getElementById('market-search').value=api.state.query;api.render();close();document.getElementById('demo').scrollIntoView({behavior:'smooth'})});
inp.addEventListener('focus',()=>{if(!inp.value)open('search')});
inp.addEventListener('input',()=>{api.state.query=inp.value;api.state.category='Vše';document.getElementById('market-search').value=inp.value;api.render();if(type==='search'&&inp.value)close()});
head.addEventListener('click',e=>{const cat=e.target.closest('[data-h-cat]');if(cat){browse(cat.dataset.hCat);return}const c=e.target.closest('[data-pick]');if(c){browse(c.dataset.pick);return}const q=e.target.closest('[data-query]');if(q){inp.value=q.dataset.query;document.getElementById('real-search-form').requestSubmit();return}const b=e.target.closest('[data-h-action]');if(b){close();if(b.dataset.hAction==='help')api.show('<h2>Jak funguje BOBINA?</h2><p>Vyberte kategorii, do hledání napište název produktu nebo otevřete ukázkový účet. Jde o simulaci bez skutečných plateb.</p>');else api.account(b.dataset.hAction)} });
document.getElementById('header-lang').addEventListener('click',()=>open('lang'));
document.addEventListener('click',e=>{if(!head.contains(e.target))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
})();
