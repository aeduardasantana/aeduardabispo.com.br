# Fundação visual e editorial — Eduarda Bispo

Versão 1 • Bloco 01 • 23/10/2026

## Arquitetura de marca
Site pessoal: conhecimento, experiências, reflexão, psicoterapia integrativa, comportamento, relações, educação e inclusão. Apresentar a necessidade do visitante primeiro. Eduarda é a referência humana e intelectual; o GEB é a estrutura empresarial. A comunicação do site pessoal não reproduz a oferta comercial do GEB Empresarial.

## Linguagem
- Primeira pessoa em textos autorais; terceira pessoa em minibio, currículo e material de cerimonial.
- Sequência de cada seção: situação reconhecível → contribuição possível → evidência/experiência → próximo passo adequado.
- Usar exemplos concretos, sem metáforas artificiais, paralelismos repetidos, promessas terapêuticas ou resultados não documentados.
- Evitar excesso de cartões, bordões vazios e listagens de qualificações na abertura.
- CTAs específicos, orientados a destinos reais. Não misturar contato pessoal e contratação empresarial.
- Manter as três dimensões do currículo, sem transformar o site pessoal em um catálogo de serviços empresariais.

## Tokens de design (styles.css)
- Verde editorial profundo: `--eb-forest: #19383b`; verde escuro: `--eb-forest-strong: #10282b`.
- Cobre: `--eb-copper: #a36b45`; areia: `--eb-sand: #e8d9c8`.
- Marfim: `--eb-ivory: #f6f2eb`; papel: `--eb-white: #fffdf9`.
- Texto: `--eb-text: #252320`; secundário: `--eb-secondary: #5e584f`.
- Títulos editoriais: Georgia (fallback Times New Roman); texto funcional: Arial (fallback Helvetica).
- Linha de leitura: `--eb-measure:68ch`; espaçamento de seções: `--eb-space-section`.
- **Compatibilidade:** os tokens antigos `--bg`, `--paper`, `--ink`, `--gold` e classes antigas permanecem inalterados neste bloco. Fazer a convergência gradual nas páginas nos blocos seguintes, evitando quebra visual.

## Componentes reutilizáveis
`eb-section`, `eb-section--paper`, `eb-section--dark`, `eb-editorial-layout`, `eb-editorial-layout--reverse`, `eb-photo`, `eb-intro`, `eb-overline`, `eb-measure`, `eb-feature-list`, `eb-text-link`, `editorial-rule`. São classes opt-in, sem obrigação de repetição nas seções.

## Fotografia e elementos gráficos
Prioridade absoluta ao acervo oficial em `/assets/FOTOS EDUARDA PARA SITE/`. Retratos já utilizados: `Eduarda_100 (1).jpg`, `Eduarda_101.jpg` e `Eduarda_244.jpg`; existem outras fotos no diretório, cuja composição e contexto devem ser inspecionados antes do uso. Preservar identidade real, expressão e enquadramento; não gerar imagens artificiais para representar atividades, palestras, pacientes ou experiências vividas. Usar fotografias documentais dos projetos quando houver autorização pertinente. Elementos gráficos (linha do tempo, diagrama e numeração) somente se acrescentarem informação. Legendas devem contextualizar fatos; alt deve descrever imagens informativas, sem replicar captions.

## Ritmo de composição
Alternar texto e fotografia de forma intencional; variar escalas e largura das seções, sem criar cards para cada parágrafo. Manter fotografia de abertura como recurso de confiança, subordinado à proposta de valor. Preferir bordas finas, contraste e tipografia a sombras e gradientes decorativos.

## Acessibilidade e experiência
- Hierarquia semântica de títulos e landmarks; foco visível em controles; alvo de toque de pelo menos 44px nos controles da navegação móvel.
- Menu: `aria-expanded`, `aria-controls`, fechamento por Escape, clique fora e mudança para desktop.
- `prefers-reduced-motion`, zoom 200%, testes com teclado e leitores de tela; VLibras como complemento, não substituto de acessibilidade nativa.
- Conteúdo de psicoterapia com privacidade e sem promessas clínicas. Não usar depoimentos sem autorização.
- Links externos preferencialmente HTTPS, sem mudar URLs sem validar o destino.

## Escopo e dependências
Este bloco cria fundação de estilos e comportamento da navegação. **Não redesenha as 32 páginas**, não muda sua redação, não adiciona ativos nem modifica rotas. Algumas LPs possuem CSS e scripts embutidos; migrar de modo cuidadoso nos blocos próprios sem modificar o gerador de artes e as funções particulares.

## Homologação dos blocos seguintes
Checar visual desktop/mobile, menu aberto/fechado, foco teclado, Libras, contraste, captura de compartilhamento, links, sitemap, impressão PDF do currículo e canvas do mídia kit. Commit no GitHub não comprova sincronização com a hospedagem.
