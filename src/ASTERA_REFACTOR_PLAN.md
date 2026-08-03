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
- `App.tsx` atua apenas como composição da aplicação.

## Observações

- Projeto validado com TypeScript.
- Build funcionando normalmente.
- Vite configurado na porta 8443.
- Refatoração incremental concluída nas Fases 1 e 2.

---

# 3. Arquitetura Atual

## Organização

A aplicação encontra-se dividida em:

- Layout
- Seções
- UI
- Componentes de domínio
- Graphics
- Theme
- Types

Cada responsabilidade possui seu próprio diretório.

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
- Preservar o visual existente.
- Criar abstrações apenas quando comprovadamente reutilizáveis.
- Manter elementos expressivos próximos aos componentes.
- Evitar overengineering.
- Priorizar legibilidade e manutenção.

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

- @theme
- CSS custom properties

### Princípios preservados

- nenhuma alteração visual significativa;
- nenhuma troca de tipografia oficial;
- nenhuma migração em massa para Tailwind;
- nenhuma abstração desnecessária;
- elementos editoriais permanecem locais.

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

## Tipografia

Papéis semânticos:

- heading
- editorial
- body
- eyebrow
- metadata
- micro

## Espaçamento

Tokens compartilhados:

- pageGutter
- sectionPaddingY

## Motion

Token compartilhado:

- uiFeedback

---

# 8. Refinamentos Pendentes

Ainda permanecem pendentes:

- tipografia oficial da marca;
- aplicação das cores complementares;
- assets proprietários;
- refinamento editorial;
- microinterações;
- acessibilidade;
- revisão fina da responsividade;
- otimizações para produção.

---

# 9. Diretriz sobre Radius e Sombras

O site institucional da Astera privilegia:

- superfícies retas;
- linhas técnicas;
- contraste elevado;
- ausência de sombras convencionais.

Pequenos raios de borda (4–8px) e sombras discretas poderão ser utilizados futuramente em dashboards, sistemas internos e aplicações SaaS quando contribuírem para a usabilidade, mantendo coerência com a identidade visual da marca.

---

# 10. Fase 3 — Refinamento Visual

## Status

⏳ Próxima fase

## Objetivos

- substituir a fonte display provisória pela tipografia oficial;
- revisar a hierarquia tipográfica;
- aplicar pontualmente a paleta complementar;
- substituir imagens temporárias;
- incorporar assets proprietários;
- refinar grids e espaçamentos;
- aprimorar motion;
- revisar acessibilidade;
- ajustar responsividade fina.

---

# 11. Fase 4 — Preparação para Produção

## Status

⏳ Pendente

## Checklist

- revisar configurações do Vite;
- avaliar remoção das dependências do Figma Make;
- revisar SEO;
- configurar Open Graph;
- inserir favicon definitivo;
- otimizar imagens;
- revisar bundle;
- executar Lighthouse;
- configurar deploy definitivo;
- revisar analytics.

---

# 12. Validação

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

Os avisos existentes no Vite permanecem documentados e não impedem o funcionamento da aplicação.

---

# 13. Próximos Passos

1. Publicar a branch `refactor/astera-v1`.
2. Planejar detalhadamente a Fase 3.
3. Integrar a tipografia oficial da Astera.
4. Aplicar a paleta complementar de forma criteriosa.
5. Inserir os assets definitivos da marca.
6. Refinar a identidade visual editorial.
7. Preparar a aplicação para produção.