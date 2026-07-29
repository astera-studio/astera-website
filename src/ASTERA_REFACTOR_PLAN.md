# Astera Studio — Plano de Refatoração

## 1. Contexto do Projeto

Projeto desenvolvido inicialmente através do Figma Make e exportado para GitHub.

Stack atual:

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- npm
- Git

Objetivo:

Transformar o export inicial do Figma Make em uma base profissional, organizada e escalável para o site institucional da Astera Studio.

---

# 2. Estado Atual

## Estrutura atual
src/
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts


## Observações

- O projeto funciona localmente.
- O ambiente foi validado após reinstalação das dependências.
- O servidor Vite está configurado inicialmente para a porta 8443 devido ao ambiente Figma Make/Codespaces.
- O projeto utiliza TypeScript.
- O projeto utiliza Tailwind CSS.
- A refatoração incremental já foi iniciada.
- Os primeiros componentes reutilizáveis foram extraídos do App.tsx.
- Os tokens de cores e tipografia foram centralizados na pasta theme.
---

# 3. Pontos positivos encontrados

## Arquitetura

Apesar de estar concentrado em um único arquivo, o App.tsx já possui componentes separados:

- Navigation
- Hero Section
- About Section
- Services Section
- Process Section
- Portfolio Section
- Values Section
- CTA Section
- Footer

Isso permite uma refatoração incremental sem reconstrução completa.

---

## Design

A direção visual já está alinhada parcialmente com a proposta da Astera:

- estética futurista/editorial;
- fundo escuro;
- elementos técnicos;
- glow;
- paleta próxima da identidade definida;
- componente orbital em SVG;
- animações CSS.

---

# 4. Problemas encontrados

## Organização

Problema principal:

O arquivo:

src/App.tsx


contém praticamente toda a aplicação.

Consequências:

- difícil manutenção;
- difícil evolução;
- componentes pouco reutilizáveis;
- baixa escalabilidade.

---

## Estilos

Atualmente:

- muitos estilos inline dentro dos componentes;
- tokens de design definidos dentro do App.tsx;
- pouca separação entre estrutura e aparência.

---

## Figma Make

Foram identificados arquivos e configurações específicas do Figma:

- .figma/
- plugins do Figma no vite.config.ts
- configurações automáticas de preview.

Esses itens serão avaliados antes de remoção.

---

# 5. Objetivos da Refatoração

src/

├── assets/

├── components/
│
├── graphics/
│   └── OrbitalDiagram.tsx
│
├── layout/
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── Navigation.tsx
│
├── portfolio/
│
├── sections/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Portfolio.tsx
│   ├── Process.tsx
│   ├── Services.tsx
│   └── Values.tsx
│
├── services/
│
├── ui/
│   ├── HoverButton.tsx
│   ├── NavLink.tsx
│   ├── SectionHeading.tsx
│   └── SectionLabel.tsx
│
├── values/
│
├── theme/
│   ├── colors.ts
│   └── fonts.ts
│
├── App.tsx
├── index.css
└── main.tsx


---

# 6. Estratégia de Refatoração

## Fase 1 — Organização

Objetivo:

Separar responsabilidades sem alterar o visual.

Ações:

- criar estrutura de pastas;
- extrair componentes pequenos;
- manter funcionamento após cada mudança.

---

Status atual:

✔ Estrutura principal de pastas criada.

✔ Componentes reutilizáveis extraídos:

- SectionLabel
- SectionHeading
- HoverButton
- NavLink
- OrbitalDiagram

✔ Tokens de design movidos para:

- theme/colors.ts
- theme/fonts.ts

Próximo passo:

Extrair as seções completas do App.tsx (Hero, About, Services, Process, Portfolio, Values, Contact).

## Fase 2 — Design System

Objetivo:

Centralizar identidade visual.

Criar:

- variáveis de cores;
- tipografia;
- espaçamentos;
- padrões de componentes.

---

## Fase 3 — Refinamento Astera

Alterações:

- substituir fontes provisórias;
- ajustar textos;
- inserir assets próprios;
- melhorar animações;
- adicionar elementos visuais da marca.

---

## Fase 4 — Preparação para produção

Checklist:

- remover dependências do Figma Make quando seguro;
- revisar SEO;
- otimizar imagens;
- configurar deploy.

---

# 7. Regras da Refatoração

- Não reescrever tudo do zero.
- Não alterar visual sem necessidade.
- Fazer pequenas mudanças testáveis.
- Manter a aplicação funcionando em cada etapa.
- Priorizar organização antes de estética.

---

# 8. Próximos passos

1. Extrair as seções do App.tsx uma por uma.
2. Reduzir progressivamente o tamanho do App.tsx.
3. Validar funcionamento após cada extração.
4. Revisar componentes para eliminar duplicações.
5. Avaliar remoção definitiva das dependências do Figma Make.
6. Preparar o Design System completo.