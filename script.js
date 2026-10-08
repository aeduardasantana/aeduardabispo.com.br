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
            <a href="https://aeduardabispo.blogspot.com/" target="_blank" rel="noopener noreferrer">Artigos e reflexões</a>
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
        <span>Desenvolvimento: <a href="https://compassrosesystems.com.br/" target="_blank" rel="noopener noreferrer">Compass Rose Systems</a></span>
        <span>© ${new Date().getFullYear()} Eduarda Bispo. Todos os direitos reservados.</span>
      </div>
    </div>`;
}
