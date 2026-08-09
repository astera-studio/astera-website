# Astera Studio — Plano de Refatoração

## 1. Contexto do Projeto

Projeto desenvolvido inicialmente através do Figma Make e exportado para o GitHub.

### Stack atual

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- npm
- Git

### Objetivo

Transformar o export inicial do Figma Make em uma base profissional, organizada, escalável e preparada para sustentar o site institucional e o Design System da Astera Studio.

---

# 2. Estado Atual

## Estrutura

- Componentes organizados por domínio.
- Layout separado das seções.
- Componentes de interface reutilizáveis.
- Tokens centralizados em `theme`.
- Tipos compartilhados em `types`.
- Barrel exports para `theme`, `types` e `components/ui`.
- Assets proprietários organizados em `src/assets`.
- Assets de marca separados em `src/assets/brand`.
- Fontes locais organizadas em `src/assets/fonts`.
- `App.tsx` atua apenas como composição da aplicação.

## Observações

- Projeto validado com TypeScript.
- Build funcionando normalmente.
- Vite configurado na porta 8443.
- Refatoração incremental concluída nas Fases 1 e 2.
- Ciclo de refinamento das seções da homepage concluído na Fase 3.
- Navigation, Hero, About, Services, Process, Projects, Values, Contact e Footer foram refinados e validados responsivamente.
- Navegação interna da homepage utiliza âncoras nativas com offset para o header fixo.
- Próxima etapa concentrada em polimento transversal e preparação para produção.
- Branch `refactor/astera-v1` utilizada para a refatoração.

---

# 3. Arquitetura Atual

## Organização

A aplicação encontra-se dividida em:

- Layout
- Sections
- UI
- Componentes de domínio
- Graphics
- Assets
- Theme
- Types

Cada responsabilidade possui seu próprio diretório.

### Assets

Estrutura destinada aos arquivos proprietários da marca:

- `assets/brand` — logotipo e demais elementos de identidade.
- `assets/fonts` — tipografias locais da Astera.

## App.tsx

O `App.tsx` contém apenas:

- Shell da aplicação
- Navigation
- Hero
- About
- Services
- Process
- Portfolio
- Values
- CTA
- Footer

Não existem mais:

- dados internos;
- arrays locais;
- estados das seções;
- componentes declarados dentro do App.

---

# 4. Princípios da Refatoração

- Não reescrever o projeto.
- Refatorar incrementalmente.
- Validar cada alteração.
- Preservar a direção visual existente quando ela estiver alinhada à marca.
- Criar abstrações apenas quando comprovadamente reutilizáveis.
- Manter elementos expressivos próximos aos componentes.
- Evitar overengineering.
- Priorizar legibilidade e manutenção.
- Evoluir o Design System conforme padrões reais de uso forem identificados.
- Preservar a personalidade visual da Astera durante as decisões técnicas.

---

# 5. Fase 1 — Organização Arquitetural

## Status

✅ Concluída

## Objetivo

Separar responsabilidades sem alterar o comportamento visual da aplicação.

## Entregas

- estrutura modular criada;
- componentes de layout extraídos;
- componentes UI extraídos;
- Hero extraído;
- About extraído;
- Services extraído;
- Process extraído;
- Portfolio extraído;
- Values extraído;
- CTA extraído;
- Footer reorganizado;
- App reduzido à composição da aplicação.

Todos os passos foram validados individualmente.

---

# 6. Fase 2 — Fundação do Design System

## Status

✅ Concluída

## Objetivo

Criar uma fundação sólida para o Design System sem alterar significativamente a identidade visual.

## Entregas

### Tokens semânticos

Foram criados tokens para:

- cores;
- tipografia;
- espaçamento;
- motion.

### Componentes compartilhados

- SectionHeader

### Tipos compartilhados

- Service
- Project
- Value
- ProcessStep

### Theme

Centralização de:

- colors
- fonts
- spacing
- motion

### Barrel exports

Foram adicionados barrels focados para:

- theme
- types
- components/ui

### Tailwind CSS 4

Integração inicial através de:

- `@theme`
- CSS custom properties

### Princípios preservados

- nenhuma migração em massa para Tailwind;
- nenhuma abstração desnecessária;
- elementos editoriais permanecem locais;
- Design System evolui incrementalmente.

---

# 7. Estado Atual do Design System

## Cores

Possui papéis semânticos para:

- canvas
- textPrimary
- accentPrimary
- accentTechnical
- lineSubtle
- surfaceAlternative

### Paleta oficial da Astera

- Preto — `#090909`
- Off White — `#F4F1EA`
- Laranja queimado — `#E86A33`
- Turquesa — `#467978`
- Turquesa profundo — `#224B5A`
- Rosa — `#B01942`
- Cinza grafite — `#222222`
- Cinza claro — `#D8D8D8`

A paleta complementar ainda será aplicada progressivamente conforme as necessidades das próximas seções.

## Tipografia

Papéis semânticos existentes:

- heading
- editorial
- body
- eyebrow
- metadata
- micro

### Tipografias da marca

A direção tipográfica passa a trabalhar com:

- ASTERAV1 — tipografia personalizada da marca, derivada da identidade utilizada no logotipo.
- DM Sans — tipografia principal para interface, textos e títulos.
- Playfair Display — tipografia editorial de apoio.

A ASTERAV1 deve ter uso pontual. Seu papel principal é reforçar a identidade visual da marca, evitando utilização excessiva em grandes blocos de texto.

Textos técnicos, eyebrows, metadata, ticker e navegação deverão receber peso suficiente para manter boa legibilidade sobre o fundo escuro.

## Espaçamento

Tokens compartilhados:

- pageGutter
- sectionPaddingY

## Motion

Token compartilhado:

- uiFeedback

---

# 8. Assets Proprietários

## Status

🚧 Em desenvolvimento contínuo

Foi iniciada a substituição de elementos provisórios por assets próprios da Astera.

### Estrutura

- `src/assets/brand`
- `src/assets/fonts`
- `src/assets/projects`
- `src/assets/about`

### Logotipo

O logotipo oficial foi preparado para utilização como SVG.

O arquivo original exportado pelo Canva passou por revisão para evitar:

- excesso de área vazia;
- filtros desnecessários;
- imagens Base64 embutidas;
- problemas de renderização nos caracteres;
- dependência da fonte instalada no dispositivo.

A versão utilizada no site foi convertida para vetores e exportada novamente através do Figma.

### Versões atuais

Foram preparadas versões do logotipo para diferentes aplicações, incluindo:

- versão principal;
- versão clara em `#F4F1EA`.

### Tipografia proprietária

A fonte personalizada está armazenada como:

`src/assets/fonts/ASTERAV1.ttf`

e integrada através de `@font-face`.

### Trabalhos conceituais

As imagens em `src/assets/projects` sustentam temporariamente a seção de Projetos Selecionados enquanto os estudos de caso reais da Astera são desenvolvidos. Esses materiais representam explorações criativas e não trabalhos concluídos para clientes.

### Asset experimental retido

O arquivo `src/assets/about/esfera.svg` permanece no repositório como asset de marca potencial, mas não integra a composição atual da seção About. A versão aprovada da seção permanece limpa, sem esfera animada e sem glow difuso.

---

# 9. Direção Visual Atual

A evolução da Hero ajudou a consolidar uma direção visual mais específica para a Astera.

## Conceito

A linguagem atual pode ser definida como:

**Editorial retrofuturista com precisão técnica.**

A identidade combina referências de:

- design editorial;
- astronomia;
- diagramas científicos;
- retrofuturismo;
- interfaces técnicas;
- tecnologia contemporânea;
- direção de arte minimalista.

## Características

- fundo predominantemente preto;
- alto uso de espaço negativo;
- tipografia de forte presença;
- linhas técnicas finas;
- elementos orbitais;
- pequenas informações e códigos visuais;
- laranja queimado como acento;
- turquesa como elemento técnico;
- superfícies sem sombras convencionais;
- glow atmosférico discreto;
- textura e grão extremamente sutis;
- movimento controlado.

## Princípio visual

A estética futurista não deve depender exclusivamente da tipografia.

Ela deve surgir da combinação entre:

- composição;
- movimento;
- gráficos;
- espaçamento;
- contraste;
- elementos técnicos;
- tipografia;
- cor.

Isso permite que a interface permaneça sofisticada sem excesso de efeitos.

# 10. Hero — Refinamento de Identidade

## Status

✅ Refinamento concluído no ciclo da Fase 3

A Hero foi a primeira seção trabalhada na Fase 3 e passou a funcionar como principal referência visual para a evolução das demais seções do site.

## Headline

A mensagem anterior:

**Projetamos o futuro digital das marcas.**

foi substituída por:

**Onde ideias se tornam marcas memoráveis.**

### Composição atual

A headline é diagramada em quatro linhas:

- ONDE IDEIAS
- SE TORNAM
- MARCAS
- MEMORÁVEIS.

A palavra `MARCAS` recebe tratamento display/outline como detalhe de identidade, enquanto o restante mantém maior neutralidade tipográfica.

O tamanho geral da headline foi reduzido em relação às primeiras versões para melhorar:

- elegância;
- proporção;
- espaço negativo;
- equilíbrio com o Orbital Diagram;
- adaptação à primeira dobra da página.

O objetivo é manter impacto visual sem transformar a Hero em uma composição excessivamente pesada.

## Texto de apoio

Texto atual:

**Um estúdio criativo independente onde arte, design e tecnologia se encontram para criar experiências digitais memoráveis.**

A legibilidade dos textos secundários foi refinada principalmente em relação a:

- contraste;
- opacidade;
- peso;
- tamanho mínimo.

## Eyebrow

A Hero utiliza:

**Art · Design · Technology**

como assinatura visual acima da headline.

O elemento é acompanhado por uma pequena linha horizontal em turquesa, reforçando a linguagem técnica e editorial.

## Assinatura secundária

Também foi introduzida a assinatura:

**Independent Creative Studio · Brazil**

como elemento editorial secundário.

## CTAs

A Hero mantém:

- Iniciar Projeto
- Ver Trabalhos

O CTA principal utiliza o laranja queimado da marca.

O CTA secundário mantém tratamento mais discreto para preservar a hierarquia visual.

## Orbital Diagram

O `OrbitalDiagram` foi preservado como um dos principais elementos gráficos da Hero.

Sua animação atual foi considerada adequada e não deve ser alterada durante os refinamentos de posicionamento.

No desktop, o contêiner pode receber deslocamento vertical responsivo para melhorar o equilíbrio da composição.

No mobile:

- o Orbital Diagram permanece abaixo do conteúdo;
- mantém centralização;
- não deve herdar o deslocamento utilizado no desktop;
- seu posicionamento deve respeitar o fluxo natural da página.

## Primeira dobra

A composição da Hero foi ajustada para evitar que elementos importantes sejam cortados antes do término da primeira dobra.

Foram revisados:

- padding superior;
- posicionamento vertical do conteúdo;
- escala da headline;
- espaçamento entre texto e CTAs;
- altura do Orbital Diagram;
- equilíbrio entre as duas colunas.

---

# 11. Navigation

## Status

✅ Refinamento concluído no ciclo da Fase 3

O logotipo textual provisório da navbar foi substituído pelo SVG oficial da Astera.

## Logotipo

A Navigation utiliza o asset oficial armazenado em:

`src/assets/brand`

A substituição elimina a dependência de texto estilizado para representar a identidade da marca e garante maior fidelidade visual.

## Links

Os links de navegação devem utilizar:

- cor padrão: `#F4F1EA`;
- hover: turquesa `#467978`;
- transição suave;
- peso suficiente para garantir legibilidade.

A navbar mantém estética minimalista e técnica, evitando efeitos excessivos.

## Comportamento responsivo

- navegação completa disponível a partir de `1024px`;
- menu compacto com overlay abaixo desse breakpoint;
- fechamento por destino selecionado ou `Escape`;
- controle de foco e bloqueio do scroll da página durante a abertura do menu;
- mesmos destinos preservados em desktop, tablet e mobile.

## Navegação interna

Os links utilizam âncoras nativas para os alvos:

- `#about`;
- `#services`;
- `#work`;
- `#process`;
- `#contact`.

O logotipo retorna para `#top`. O scroll suave é definido globalmente, com `scroll-margin-top: 72px` nas seções para compensar o header fixo e fallback sem animação quando `prefers-reduced-motion: reduce` está ativo.

## CTA

O botão **Iniciar Projeto** permanece como ação principal da Navigation.

Seu tratamento visual utiliza o laranja queimado como elemento de destaque sem competir com o restante da composição.

O CTA permanece externo e utiliza o fluxo oficial de diagnóstico inicial da Astera.

---

# 12. Tipografia de Interface e Legibilidade

Durante a Fase 3, os textos pequenos utilizados como:

- eyebrows;
- navigation;
- metadata;
- ticker;
- labels técnicos.

A combinação de:

- tamanho reduzido;
- tracking elevado;
- baixo contraste;
- peso leve

foi evitada nos refinamentos aprovados por prejudicar a leitura.

## Diretriz

Esses textos utilizam pesos intermediários, aproximadamente `500`, mantendo a aparência técnica sem comprometer a legibilidade.

A criação de tokens tipográficos semânticos adicionais permanece opcional para a Fase 4 e só deve ocorrer se padrões reais de reutilização justificarem a alteração.

## Contraste

O branco puro foi evitado como cor predominante da interface por produzir contraste visual excessivamente agressivo sobre o fundo preto.

O Off White `#F4F1EA` passa a funcionar como referência principal para textos claros.

Opacidades podem ser utilizadas para estabelecer hierarquia, desde que não comprometam a leitura.

---

# 13. Diretriz sobre Radius e Sombras

O site institucional da Astera privilegia:

- superfícies retas;
- linhas técnicas;
- contraste elevado;
- ausência de sombras convencionais.

Pequenos raios de borda entre 4–8px e sombras discretas poderão ser utilizados futuramente em dashboards, sistemas internos e aplicações SaaS quando contribuírem para a usabilidade, mantendo coerência com a identidade visual da marca.

---

# 14. Fase 3 — Refinamento da Identidade Astera

## Status

✅ Concluída — ciclo de refinamento das seções da homepage

## Objetivo

Transformar a fundação arquitetural e o Design System inicial em uma interface visualmente alinhada à identidade definitiva da Astera.

---

## 3.1 — Navigation e Hero

### Status

✅ Concluída

### Entregas

- logotipo oficial aplicado na Navigation;
- navegação completa em desktop a partir de `1024px`;
- menu compacto com overlay em tablet e mobile;
- interação por teclado, fechamento por `Escape`, controle de foco e bloqueio do scroll durante o menu aberto;
- Hero consolidada como principal referência visual do site;
- headline em quatro linhas com tratamento ASTERAV1/outline em `MARCAS`;
- refinamentos de primeira dobra, espaçamento, legibilidade e equilíbrio responsivo;
- Orbital Diagram preservado em comportamento e animação;
- CTAs e assinaturas editoriais preservados com melhor legibilidade.

---

## 3.2 — About

### Status

✅ Concluída

### Identidade

- `01 — INDEPENDENTE` — Estrutura enxuta, próxima e colaborativa.
- `02 — POTIGUAR` — Criado no Rio Grande do Norte, conectado ao mundo.
- `03 — DIGITAL FIRST` — Pensado para marcas e experiências no ambiente digital.

As métricas comerciais fictícias foram removidas e não foram substituídas por novos números inventados.

### Manifesto atual

**Acreditamos que marcas relevantes não são construídas por acaso.**

**Elas nascem de boas perguntas, decisões conscientes e da capacidade de transformar ideias em experiências que fazem sentido para as pessoas.**

A composição aprovada permanece limpa e editorial: fundo preto, eyebrow centralizada, manifesto em Playfair Display, texto de apoio em DM Sans, pequeno divisor laranja e espaço negativo generoso.

Os experimentos com glow difuso e `esfera.svg` foram descartados da implementação. O asset permanece retido no repositório para possível uso futuro, sem renderização na seção atual.

---

## 3.3 — Services

### Status

✅ Concluída

### Introdução

**Da identidade ao produto digital, criamos soluções pensadas para cada etapa da marca.**

### Áreas de atuação

1. `BRAND IDENTITY` — Identidade Visual;
2. `WEB DESIGN` — Design & Desenvolvimento;
3. `E COMMERCE` — Comércio Digital;
4. `UI/UX DESIGN` — Experiências Digitais;
5. `CREATIVE DIRECTION` — Direção Criativa.

Os títulos utilizam ASTERAV1 sem distorção horizontal. Subtítulos, descrições, metadata e tags receberam contraste e peso mais legíveis. A composição usa uma coluna no mobile, duas no tablet e uma grade editorial de seis colunas no desktop, com três serviços na primeira linha e dois cards mais largos na segunda.

A seção descreve a prática criativa e digital da Astera, sem posicionamento como agência de marketing, mídia paga, tráfego ou publicidade.

---

## 3.4 — Process

### Status

✅ Concluída

### Etapas atuais

1. `DISCOVERY` — Imersão

   Começamos pelas perguntas certas. Entendemos o contexto, os objetivos e os desafios da marca antes de definir qualquer direção.
2. `STRATEGY` — Direção

   Transformamos os aprendizados em uma direção clara, definindo prioridades e decisões que orientam todo o projeto.
3. `DESIGN` — Criação

   A direção ganha forma através de conceitos, sistemas visuais e experiências que traduzem a essência e os objetivos da marca.
4. `DEVELOPMENT` — Desenvolvimento

   Transformamos o design em experiências digitais funcionais, responsivas e acessíveis, com atenção à performance e aos detalhes técnicos.
5. `DELIVERY` — Entrega

   Finalizamos o projeto com cuidado, organizamos os materiais e preparamos tudo o que a marca precisa para seguir com clareza e autonomia.

`EVOLUTION` foi removida do processo. A implementação mantém lista interativa, estado ativo, painel editorial em desktop, conteúdo completo em mobile/tablet, ativação por clique/toque/teclado e foco visível.

---

## 3.5 — Projects / Selected Work

### Status

✅ Concluída como composição conceitual temporária

Os projetos fictícios gerados no Figma, seus clientes e anos foram removidos. A seção utiliza temporariamente quatro explorações conceituais:

1. `VISUAL SYSTEMS` — Brand Identity · Art Direction;
2. `DIGITAL SYSTEMS` — UI/UX · Digital Experience;
3. `BRAND SYSTEMS` — Brand Identity · Editorial;
4. `EXPERIMENTAL` — Creative Direction · Digital Art.

Essas explorações não representam cases concluídos para clientes. O CTA `VER TODOS →` foi preservado para a futura integração dos estudos de caso reais.

As imagens mantêm suas cores originais. Os cards usam gradientes localizados na área de metadata, com tratamento específico para o artwork claro de Brand Systems. A grade permanece em duas colunas a partir do tablet e em uma coluna no mobile.

---

## 3.6 — Values

### Status

✅ Concluída

Valores atuais:

- Estratégia;
- Excelência;
- Transparência;
- Criatividade;
- Evolução.

A composição funciona como uma tabela editorial contínua, organizada em `3 + 2` no desktop, `2 + 2 + 1` no tablet e coluna única no mobile. ASTERAV1 permanece expressiva nos títulos sem compressão artificial, enquanto descrições, índices e símbolos receberam melhor legibilidade.

---

## 3.7 — Contact e Footer

### Status

✅ Concluída no ciclo da Fase 3

### CTA final

Headline atual:

**Vamos construir o próximo passo da sua marca.**

Texto de apoio:

**Vamos transformar sua ideia em uma experiência digital que faça sentido para sua marca.**

O CTA `INICIAR PROJETO →` utiliza o destino oficial do Diagnóstico Inicial da Astera, centralizado em `src/constants/links.ts` e aberto em nova aba.

Destino técnico atual: `https://docs.google.com/forms/d/e/1FAIpQLSe9xpdAbO6aHZVDv4_kGNNUMElkd-UxSFJAPhL2BjNiHw8A0w/viewform?usp=dialog`.

### Contatos oficiais

- Email — `goastera.contato@gmail.com`;
- Instagram — `@goastera`;
- LinkedIn — `Astera Studio`.

### Footer

- `ASTERA`;
- `INDEPENDENT CREATIVE STUDIO`;
- `© 2026 ASTERA`;
- navegação institucional preservada.

---

## 3.8 — Hierarquia global, navegação e QA

### Status

✅ Concluída no escopo das seções

- a Hero permanece como momento tipográfico mais forte;
- headings internos foram reduzidos por meio do componente compartilhado `SectionHeading`;
- ASTERAV1 permanece seletiva e não domina todas as seções;
- Off White `#F4F1EA` é a referência para tipografia clara;
- textos de apoio usam DM Sans, peso intermediário e contraste secundário legível;
- destinos `top`, `about`, `services`, `work`, `process` e `contact` estão implementados;
- scroll interno usa âncoras nativas, comportamento suave e offset de `72px` para o header fixo;
- o CTA de projeto permanece externo;
- foram realizados ciclos de QA responsivo em mobile, tablet, desktop e viewports altos.

## Limite desta conclusão

A conclusão da Fase 3 representa o encerramento do refinamento seção por seção da homepage. Revisões transversais de acessibilidade, performance, semântica, otimização de assets, configuração e preparação para deploy pertencem à Fase 4.

---

# 15. Fase 4 — Final Polish & Production Readiness

## Status

⏳ Pendente

## Checklist

- revisar ritmo visual da página completa;
- revisar consistência de espaçamento entre seções;
- executar QA responsivo final em breakpoints e proporções representativas;
- revisar acessibilidade, semântica HTML, navegação por teclado e estados de foco;
- revisar comportamento com `prefers-reduced-motion`;
- validar todos os links internos e externos, incluindo Footer e CTAs ainda provisórios;
- revisar contraste e legibilidade em contexto de página completa;
- avaliar conversão dos PNGs de Projects para WebP/AVIF quando apropriado;
- otimizar imagens, SVGs e estratégia de carregamento;
- revisar performance, loading e bundle;
- revisar assets não utilizados e código experimental residual;
- revisar os dois lockfiles e definir o gerenciador de pacotes autoritativo;
- revisar configurações do Vite;
- avaliar limpeza da configuração e das dependências herdadas do Figma Make;
- revisar avisos relacionados ao `configLoader: native`;
- revisar uso de `__dirname` no `vite.config.ts`;
- revisar importação JSON utilizada pela configuração do Figma Make;
- revisar metadata e fundamentos de SEO;
- configurar Open Graph;
- revisar e inserir favicon definitivo;
- executar Lighthouse;
- revisar analytics, se aplicável;
- preparar configuração e checklist de deploy definitivo.

---

# 16. Validação

As Fases 1, 2 e o ciclo de homepage da Fase 3 foram validados continuamente com:

- `npx tsc --noEmit`
- `npm run build`
- `npm run dev`
- validação visual em desktop;
- validação visual em mobile;
- verificação de overflow horizontal;
- validação dos componentes interativos;
- `git diff --check`;
- `git status`.

Durante a Fase 3 foram realizadas validações visuais das seções e interações em viewports mobile, tablet, desktop e desktop/tablet altos. A navegação interna, o menu responsivo, o processo interativo, o carregamento da ASTERAV1, os CTAs externos e o overflow horizontal também foram verificados.

O projeto permanece disponível através do Vite na porta `8443`.

Os avisos existentes do Vite permanecem documentados e não impedem atualmente o funcionamento da aplicação.

---

# 17. Decisões de Design Consolidadas

Até o momento, foram consolidadas as seguintes decisões:

- a identidade deve permanecer minimalista e editorial;
- o editorial retrofuturista com precisão técnica permanece como direção central;
- a Hero permanece como principal referência visual e momento tipográfico mais forte;
- a ASTERAV1 funciona principalmente como assinatura de marca e elemento display pontual;
- DM Sans permanece como base funcional da interface;
- Playfair Display permanece como voz editorial;
- o Orbital Diagram é um elemento importante da identidade digital;
- a animação orbital atual deve ser preservada;
- o laranja é utilizado como acento, não como cor dominante;
- o turquesa funciona como cor técnica e interativa;
- o Off White substitui o branco puro para reduzir contraste excessivamente agressivo;
- headings internos são intencionalmente menos dominantes que a Hero;
- microtipografia deve priorizar legibilidade, com tracking, peso e opacidade controlados;
- Projects utiliza explorações conceituais temporárias, nunca clientes ou cases fictícios;
- About utiliza composição editorial limpa, sem esfera ou glow difuso;
- espaço negativo permanece uma decisão composicional intencional;
- elementos decorativos devem possuir função dentro da composição;
- efeitos futuristas não devem competir com o conteúdo;
- a interface deve evitar tendências visuais excessivamente efêmeras.

---

# 18. Próximos Passos

1. Executar revisão visual transversal da página completa.
2. Validar espaçamentos e transições entre seções sem reiniciar redesigns locais.
3. Concluir revisão de acessibilidade, teclado, foco, reduced motion e semântica.
4. Validar todos os links internos e externos ainda provisórios.
5. Otimizar imagens, assets e carregamento.
6. Avaliar conversão dos artworks PNG para formatos modernos.
7. Revisar configuração do Vite e dependências herdadas do Figma Make.
8. Resolver a definição do lockfile/gerenciador de pacotes autoritativo.
9. Revisar favicon, metadata, SEO e Open Graph.
10. Executar análise de bundle e Lighthouse.
11. Preparar deploy e analytics, quando aplicável.

---

# 19. Direção para a Continuação

A prioridade deixa de ser refinar cada seção isoladamente e passa a ser **validar o sistema visual como uma experiência completa e prepará-lo para produção**.

A Hero permanece como referência visual para decisões transversais.

A partir dela, o restante do site deverá preservar:

- impacto tipográfico controlado;
- composição editorial;
- espaço negativo;
- elementos técnicos discretos;
- movimento sutil;
- contraste entre preto, Off White, turquesa e laranja;
- referências astronômicas abstratas;
- consistência entre arte, design e tecnologia.

A intenção não é transformar todas as seções em variações da Hero, mas utilizar os mesmos princípios para construir uma experiência visual coesa ao longo de todo o site.

A direção visual consolidada para a Astera pode ser resumida como:

**Editorial retrofuturista com precisão técnica.**
