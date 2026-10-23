# Bloco 12 — Auditoria de integração (23/10/2026)

## Evidências verificadas
- Árvore main: 33 HTML, workflow FTP, sitemap, robots e fotografias oficiais.
- Oito páginas institucionais verificadas por leitura: cada uma possui um H1, um main, VLibras e não utiliza o antigo subdomínio lp.
- Ativos oficiais Eduarda_139.jpg, Eduarda_244.jpg, Eduarda_101.jpg e galeria WebP encontrados.
- Currículo e mídia kit não foram modificados nesta etapa.
- Corrigido defeito do script.js: rótulo acessível de menu não retornava a Abrir menu após fechamento.

## Estado da hospedagem
- Workflow .github/workflows/main.yml: push em main com FTP para ./public_html/.
- Execuções do GitHub Actions não acessíveis neste ambiente.
- Páginas públicas do domínio não acessíveis pela ferramenta de leitura.
- Status de publicação na Locaweb: NÃO CONFIRMADO.

## Pendências de homologação
1. Verificar execuções e logs do workflow, credenciais e pasta efetiva do domínio.
2. Abrir site em navegador real, desktop e celular; conferir CSS, imagens e comportamento.
3. Testar menu, VLibras, galerias, links, fluxos de contato e compartilhamento.
4. Testar impressão A4 do currículo e gerador de PNG do mídia kit, sem alterar os arquivos.
5. Conferir HTTP, URLs canônicas, sitemap e redirecionamentos em produção.
6. Executar auditoria por teclado e leitor de tela.
7. Concluir validação jurídica da privacidade conforme provedores e controlador reais.

Conclusão: auditoria estática parcial realizada. Homologação funcional e de produção pendente.