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
- Fase 3 iniciada.
- Primeira dobra da página passou por refinamento de identidade.
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

🚧 Em desenvolvimento

Foi iniciada a substituição de elementos provisórios por assets próprios da Astera.

### Estrutura

- `src/assets/brand`
- `src/assets/fonts`

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

🚧 Refinamento avançado

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

A legibilidade dos textos secundários deverá continuar sendo revisada, principalmente em relação a:

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

🚧 Refinamento iniciado

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

## CTA

O botão **Iniciar Projeto** permanece como ação principal da Navigation.

Seu tratamento visual utiliza o laranja queimado como elemento de destaque sem competir com o restante da composição.

---

# 12. Tipografia de Interface e Legibilidade

Foi identificada a necessidade de padronizar textos pequenos utilizados como:

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

pode prejudicar a leitura.

## Diretriz

Esses textos deverão utilizar pesos intermediários, aproximadamente `500`, mantendo a aparência técnica sem comprometer a legibilidade.

A criação de tokens tipográficos semânticos adicionais poderá ser realizada posteriormente, evitando alterações estruturais prematuras.

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

🚧 Em andamento

## Objetivo

Transformar a fundação arquitetural e o Design System inicial em uma interface visualmente alinhada à identidade definitiva da Astera.

---

## 3.1 — Tipografia e identidade inicial

### Status

🚧 Parcialmente concluída

### Concluído

- integração da ASTERAV1;
- organização das fontes locais;
- integração do SVG oficial da marca;
- revisão inicial da hierarquia da Hero;
- substituição da headline;
- revisão de escala tipográfica;
- definição inicial do papel da ASTERAV1;
- revisão da Navigation;
- identificação de melhorias de legibilidade para microtipografia.

### Pendente

- padronizar pesos de eyebrows, metadata, ticker e navigation;
- revisar hierarquia tipográfica nas demais seções;
- avaliar usos editoriais da Playfair Display;
- revisar comportamento tipográfico em tablet e mobile.

---

## 3.2 — Paleta completa

### Status

⏳ Pendente

### Objetivos

- introduzir cores secundárias;
- definir contextos de uso;
- revisar contrastes;
- validar acessibilidade;
- evitar uso excessivo das cores de destaque.

---

## 3.3 — Design Tokens avançados

### Status

⏳ Pendente

Definir quando necessário:

- radius;
- shadows;
- blur;
- gradients;
- opacidades;
- overlays;
- tokens tipográficos adicionais.

Novos tokens devem ser criados apenas quando houver padrões reais de reutilização.

---

## 3.4 — Assets proprietários

### Status

🚧 Iniciada

Assets atuais e planejados:

- logo oficial;
- versão clara da logo;
- esfera metálica;
- Orbital Diagram refinado;
- elementos gráficos;
- ícones.

A prioridade é reduzir progressivamente a dependência de elementos provisórios herdados da versão inicial.

---

## 3.5 — Refinamento visual

### Status

⏳ Pendente

- animações;
- microinterações;
- estados de hover;
- espaçamentos finais;
- refinamento dos grids;
- responsividade fina;
- acessibilidade.

As animações devem permanecer discretas e funcionais, evitando excesso de movimento.

---

## 3.6 — Conteúdo definitivo

### Status

⏳ Pendente

- textos;
- portfólio;
- serviços;
- CTAs;
- SEO.

---

# 15. Fase 4 — Preparação para Produção

## Status

⏳ Pendente

## Checklist

- revisar configurações do Vite;
- avaliar remoção das dependências do Figma Make;
- revisar avisos relacionados ao `configLoader: native`;
- revisar uso de `__dirname` no `vite.config.ts`;
- revisar importação JSON utilizada pela configuração do Figma Make;
- revisar SEO;
- configurar Open Graph;
- inserir favicon definitivo;
- otimizar SVGs;
- otimizar imagens;
- revisar bundle;
- executar Lighthouse;
- configurar deploy definitivo;
- revisar analytics.

---

# 16. Validação

As Fases 1 e 2 foram validadas com:

- `npx tsc --noEmit`
- `npm run build`
- `npm run dev`
- validação visual em desktop;
- validação visual em mobile;
- verificação de overflow horizontal;
- validação dos componentes interativos;
- `git diff --check`;
- `git status`.

Durante a Fase 3 também foram realizadas validações visuais contínuas da Hero e da Navigation em ambiente local.

O projeto permanece disponível através do Vite na porta `8443`.

Os avisos existentes do Vite permanecem documentados e não impedem atualmente o funcionamento da aplicação.

---

# 17. Decisões de Design Consolidadas

Até o momento, foram consolidadas as seguintes decisões:

- a identidade deve permanecer minimalista e editorial;
- o retrofuturismo deve ser utilizado com contenção;
- a ASTERAV1 funciona principalmente como assinatura de marca e elemento display pontual;
- DM Sans permanece como base funcional da interface;
- Playfair Display permanece disponível como recurso editorial;
- o Orbital Diagram é um elemento importante da identidade digital;
- a animação orbital atual deve ser preservada;
- o laranja é utilizado como acento, não como cor dominante;
- o turquesa funciona como cor técnica e interativa;
- o Off White substitui o branco puro para reduzir contraste excessivamente agressivo;
- microtipografia deve priorizar legibilidade mesmo quando utilizada com tracking elevado;
- elementos decorativos devem possuir função dentro da composição;
- efeitos futuristas não devem competir com o conteúdo;
- a interface deve evitar tendências visuais excessivamente efêmeras.

---

# 18. Próximos Passos

1. Finalizar a etapa 3.1.
2. Padronizar a microtipografia e melhorar sua legibilidade.
3. Revisar Hero e Navigation em diferentes breakpoints.
4. Aplicar a mesma linguagem visual às demais seções.
5. Introduzir gradualmente a paleta complementar.
6. Desenvolver e integrar os demais assets proprietários.
7. Refinar grids, espaçamentos e ritmo editorial.
8. Implementar microinterações de forma criteriosa.
9. Revisar acessibilidade e contraste.
10. Finalizar conteúdo e portfólio.
11. Executar a preparação para produção.

---

# 19. Direção para a Continuação

A prioridade deixa de ser reconstruir a interface e passa a ser **refinar um sistema visual que já começou a adquirir identidade própria**.

A Hero estabelece a referência visual para as próximas seções.

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