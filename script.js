const t=document.querySelector('.menu-toggle');const m=document.querySelector('.menu');if(t&&m){t.addEventListener('click',()=>{const o=m.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false')});m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{m.classList.remove('open');t.setAttribute('aria-expanded','false')}))}const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();

const siteFooter = document.querySelector('footer.site-footer');
if (siteFooter) {
  siteFooter.className = 'site-footer site-footer--editorial';
  siteFooter.innerHTML = `
    <div class="container footer-editorial-shell">
      <div class="footer-editorial-main">
        <div class="footer-editorial-about">
          <a class="footer-editorial-logo" href="/" aria-label="Eduarda Bispo — início">
            <img src="/assets/FOTOS%20EDUARDA%20PARA%20SITE/LOGO%20Eduarda%20Bispo.png" alt="Assinatura Eduarda Bispo">
          </a>
          <p>Desenvolvimento humano, liderança, relações de trabalho e psicoterapia, com uma leitura integrada de pessoas e contextos.</p>
          <a class="footer-editorial-cta" href="/eduarda-bispo/">Conhecer minha trajetória <span aria-hidden="true">↗</span></a>
        </div>
        <nav class="footer-editorial-nav" aria-label="Navegação do rodapé">
          <div class="footer-editorial-column">
            <strong>Atuação</strong>
            <a href="/desenvolvimento-humano/">Desenvolvimento Humano</a>
            <a href="/lideranca/">Liderança</a>
            <a href="/riscos-psicossociais/">Riscos Psicossociais</a>
            <a href="/palestras/">Palestras</a>
          </div>
          <div class="footer-editorial-column">
            <strong>Conteúdos</strong>
            <a href="/eduarda-bispo/">Sobre Eduarda</a>
            <a href="https://blog.grupoeduardabispo.com.br/?categoria=Desenvolvimento" target="_blank" rel="noopener noreferrer">Blog GEB · Desenvolvimento</a>
          </div>
          <div class="footer-editorial-column">
            <strong>Conexões</strong>
            <a href="/contato/">Contato</a>
            <a href="https://grupoeduardabispo.com.br/" target="_blank" rel="noopener noreferrer">GEB — Grupo Eduarda Bispo</a>
            <a href="https://gebempresarial.grupoeduardabispo.com.br/" target="_blank" rel="noopener noreferrer">Soluções empresariais</a>
            <a href="/politica-de-privacidade/">Privacidade</a>
          </div>
        </nav>
      </div>
      <div class="footer-editorial-bottom">
        <span>Desenvolvido por <a href="https://gebtecnologia.grupoeduardabispo.com.br/" target="_blank" rel="noopener noreferrer"><strong>GEB Tecnologia</strong></a></span>
        <span>© ${new Date().getFullYear()} Eduarda Bispo. Todos os direitos reservados.</span>
      </div>
    </div>`;
}


/* Vitrine Blog GEB: índice editorial público, sem dados fictícios. */
(function(){
const root=document.getElementById('geb-blog-articles');if(!root)return;
const url='https://blog.grupoeduardabispo.com.br/';
const escapeHTML=s=>String(s||'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const date=a=>{if(/^\d{4}-\d\d-\d\d$/.test(a.dataPublicacaoISO||''))return a.dataPublicacaoISO;const m=String(a.dataPublicacao||'').match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);return m?m[3]+'-'+m[2].padStart(2,'0')+'-'+m[1].padStart(2,'0'):'0000-00-00'};
const script=document.createElement('script');script.src=url+'conteudo/indices/catalogo.js';script.async=true;
script.onload=()=>{
const articles=(Array.isArray(window.GEB_INDICE_ARTIGOS)?window.GEB_INDICE_ARTIGOS:[]).filter(a=>a&&a.status==='Publicado'&&a.slug&&[a.categoria,...(a.categorias||[])].some(v=>norm(v)==='desenvolvimento')).sort((a,b)=>date(b).localeCompare(date(a))).slice(0,3);
if(!articles.length){root.innerHTML='<p class="geb-blog-status">Os artigos de Desenvolvimento estão sendo preparados. <a href="'+url+'?categoria=Desenvolvimento">Acessar o Blog GEB</a>.</p>';return}
root.innerHTML=articles.map(a=>'<article class="geb-blog-card"><span class="geb-blog-category">DESENVOLVIMENTO</span><h3><a href="'+url+'artigo/'+encodeURIComponent(a.slug)+'/" target="_blank" rel="noopener noreferrer">'+escapeHTML(a.titulo)+'</a></h3><p>'+escapeHTML(a.resumo||a.descricaoSEO||'Leia o artigo completo no Blog GEB.')+'</p><time>'+escapeHTML(a.dataPublicacao||'')+'</time></article>').join('');
};script.onerror=()=>{root.innerHTML='<p class="geb-blog-status">Não foi possível carregar os artigos agora. <a href="'+url+'?categoria=Desenvolvimento">Consultar no Blog GEB →</a></p>'};document.head.appendChild(script);
})();
