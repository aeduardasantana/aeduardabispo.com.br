const t=document.querySelector('.menu-toggle');const m=document.querySelector('.menu');if(t&&m){
  if(!m.id)m.id='menu-principal';
  t.setAttribute('aria-controls',m.id);
  function closeMenu(returnFocus=false){m.classList.remove('open');t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Abrir menu');if(returnFocus)t.focus()}
  t.addEventListener('click',()=>{const open=m.classList.toggle('open');t.setAttribute('aria-expanded',String(open));t.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});
  m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu()));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&m.classList.contains('open'))closeMenu(true)});
  document.addEventListener('click',e=>{if(m.classList.contains('open')&&!m.contains(e.target)&&!t.contains(e.target))closeMenu()});
  window.addEventListener('resize',()=>{if(window.innerWidth>1100&&m.classList.contains('open'))closeMenu()});
}const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();

// Rodapé semântico permanece no HTML e está disponível sem JavaScript.
document.querySelectorAll('[data-current-year]').forEach(el=>el.textContent=String(new Date().getFullYear()));

/* Vitrine Blog GEB: mesmos índices públicos utilizados pelo blog, por data de publicação. */
(function(){
  const root=document.getElementById('geb-blog-articles');
  if(!root)return;
  const blog='https://blog.grupoeduardabispo.com.br/';
  // A origem GitHub Raw permite leitura CORS por sites externos, sem depender dos headers do servidor do blog.
  const raw='https://raw.githubusercontent.com/aeduardasantana/gebblog/main/conteudo/';
  const indices=['indices/legado.json','indices/lote-01.json','indices/lote-02.json','indices/lote-03.json','indices/lote-04.json','indices/lote-05.json','indices/lote-06.json'];
  const esc=s=>String(s||'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  const iso=a=>{
    if(/^\d{4}-\d{2}-\d{2}$/.test(a.dataPublicacaoISO||''))return a.dataPublicacaoISO;
    const m=String(a.dataPublicacao||'').match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    return m?m[3]+'-'+m[2].padStart(2,'0')+'-'+m[1].padStart(2,'0'):'0000-00-00';
  };
  const clean=s=>String(s||'').replace(/\s+/g,' ').trim();
  const validSummary=s=>s&&!/^\[?https?:\/\//i.test(s)&&!/blogger\.googleusercontent/i.test(s)&&!/^(SLUG|TAGS|CATEGORIA|CATEGORIAS|GÊNERO EDITORIAL|AUTOR PÚBLICO|DATA DE PUBLICAÇÃO)\s*:/i.test(s);
  const summary=a=>{
    const text=clean(a.resumo);
    if(validSummary(text))return text;
    const seo=clean(a.descricaoSEO);
    if(validSummary(seo))return seo;
    return 'Leia o artigo completo no Blog GEB.';
  };
  const load=async path=>{
    const res=await fetch(raw+path,{cache:'no-store'});
    if(!res.ok)throw new Error(path+': HTTP '+res.status);
    return res.json();
  };
  Promise.allSettled(indices.map(load)).then(results=>{
    const merged=new Map();
    results.forEach(r=>{
      if(r.status==='fulfilled'&&Array.isArray(r.value))r.value.forEach(a=>{
        if(a&&a.slug&&a.status==='Publicado'&&a.arquivo)merged.set(a.slug,a);
      });
    });
    const articles=[...merged.values()].filter(a=>{
      const cats=[a.categoria,...(Array.isArray(a.categorias)?a.categorias:[])];
      return cats.some(c=>['desenvolvimento','eduarda'].includes(norm(c)));
    }).sort((a,b)=>iso(b).localeCompare(iso(a))||String(a.titulo||'').localeCompare(String(b.titulo||''),'pt-BR')).slice(0,3);
    if(!articles.length)throw new Error('Sem artigos públicos da categoria Desenvolvimento');
    root.innerHTML=articles.map(a=>'<article class="geb-blog-card"><span class="geb-blog-category">DESENVOLVIMENTO</span><h3><a href="'+blog+'artigo/'+encodeURIComponent(a.slug)+'/" target="_blank" rel="noopener noreferrer">'+esc(a.titulo)+'</a></h3><p>'+esc(summary(a))+'</p><time>'+esc(a.dataPublicacao||'')+'</time></article>').join('');
  }).catch(error=>{
    console.error('Vitrine Blog GEB:',error);
    root.innerHTML='<p class="geb-blog-status">Os artigos não puderam ser carregados agora. <a href="'+blog+'?categoria=Desenvolvimento">Consultar Desenvolvimento no Blog GEB →</a></p>';
  });
})();


/* GA4 Eduarda Bispo — opt-in via preferências de privacidade */
(function () {
  "use strict";
  const measurementId = "G-FSYVX9Q7JS";
  const preferenceKey = "eduarda_bispo_analytics_consent_v1";
  let preference = null;
  let loaded = false;
  try { preference = localStorage.getItem(preferenceKey); } catch (_) {}

  function enableAnalytics() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { send_page_view: true });
    const tag = document.createElement("script");
    tag.async = true;
    tag.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
    document.head.appendChild(tag);
  }

  function dismiss() {
    const panel = document.getElementById("eb-analytics-privacy");
    if (panel) panel.remove();
  }
  function setPreference(granted) {
    preference = granted ? "granted" : "denied";
    try { localStorage.setItem(preferenceKey, preference); } catch (_) {}
    if (granted) enableAnalytics();
    else if (loaded && typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "denied" });
    }
    dismiss();
  }
  function openPreferences() {
    dismiss();
    const panel = document.createElement("section");
    panel.id = "eb-analytics-privacy";
    panel.setAttribute("aria-label", "Preferências de privacidade do site");
    panel.style.cssText = "position:fixed;bottom:18px;left:16px;right:16px;margin:auto;max-width:600px;z-index:2147483000;background:white;color:#1b2928;border:1px solid #465b57;box-shadow:0 8px 28px rgba(0,0,0,.2);padding:20px;font:14px/1.5 system-ui,Arial,sans-serif";
    const h = document.createElement("strong");
    h.textContent = "Privacidade e medição";
    h.style.cssText = "display:block;font-size:17px;margin-bottom:8px";
    const message = document.createElement("p");
    message.textContent = "Com sua autorização, utilizamos o Google Analytics para compreender a audiência e melhorar este site. Você pode recusar e alterar esta escolha posteriormente.";
    message.style.cssText = "margin:0 0 14px";
    const actions = document.createElement("div");
    actions.style.cssText = "display:flex;gap:8px;flex-wrap:wrap";
    function action(label, granted) {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = label;
      b.style.cssText = "min-height:44px;padding:9px 14px;background:" + (granted ? "#1b2928" : "#fff") + ";color:" + (granted ? "#fff" : "#1b2928") + ";border:1px solid #1b2928;cursor:pointer;font:600 13px system-ui,Arial,sans-serif";
      b.addEventListener("click", function () { setPreference(granted); });
      actions.appendChild(b);
    }
    action("Continuar sem medição", false);
    action("Aceitar medição", true);
    panel.append(h,message,actions);
    document.body.appendChild(panel);
  }
  function init() {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = "Privacidade";
    b.setAttribute("aria-label", "Alterar preferências de privacidade e medição");
    b.style.cssText = "position:fixed;bottom:8px;left:8px;z-index:2147482999;min-height:34px;border:1px solid #465b57;background:#fff;color:#1b2928;padding:6px 10px;font:12px system-ui,Arial,sans-serif;cursor:pointer";
    b.addEventListener("click", openPreferences);
    document.body.appendChild(b);
    if (preference === "granted") enableAnalytics();
    else if (preference !== "denied") openPreferences();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
