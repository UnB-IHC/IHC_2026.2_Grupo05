# Checklist de Avaliação de Acessibilidade e Interação Humano-Computador em Websites

## Sobre este checklist

Este checklist consolida, em um único instrumento de avaliação, as recomendações de três fontes:

- **Guia de Boas Práticas para Acessibilidade Digital**, elaborado no Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital;
- **ABNT NBR 17225:2025**, norma brasileira de acessibilidade digital;
- **WCAG (Web Content Accessibility Guidelines)**, do W3C, que serve de base técnica para as duas fontes anteriores.

O objetivo é avaliar a qualidade da interação humano-computador (IHC) de um website sob a ótica da acessibilidade, cobrindo desde o processo de projeto até a verificação final com usuários reais.

### Princípios que orientam a avaliação (P.O.U.R.)

| Princípio | O que significa |
|---|---|
| **Perceptível** | A informação e a interface podem ser percebidas por diferentes sentidos (texto alternativo, legendas, audiodescrição). |
| **Operável** | A interface e a navegação podem ser usadas por qualquer pessoa, com suporte total a teclado e tempo suficiente. |
| **Compreensível** | A informação e a operação são fáceis de entender, com linguagem clara, comportamento previsível e ajuda para corrigir erros. |
| **Robusto** | O código é semântico e limpo, sendo interpretado de forma confiável por navegadores e tecnologias assistivas. |

### Níveis de conformidade

| Nível | Descrição |
|---|---|
| **A** (mínimo) | Remove as barreiras mais graves. |
| **AA** (intermediário) | Padrão exigido pela maioria das normas e governos, incluindo a ABNT. **É a meta recomendada para esta avaliação.** |
| **AAA** (pleno) | Nível mais rigoroso; nem sempre aplicável a 100% do conteúdo. |

> A coluna **Ref. WCAG** indica os critérios de sucesso relacionados, para consulta. Itens marcados com "—" são de processo ou de boas práticas e não têm critério WCAG direto.

---

## 1. Gestão de Projetos (Cultura e Processo)

| # | Critério | O que verificar | Ref. WCAG |
|---|---|---|---|
| 1.1 | **Iniciação** | A acessibilidade foi incorporada desde a concepção do projeto, como requisito e não como ajuste posterior. | — |
| 1.2 | **Personas** | Perfis diversos foram considerados, incluindo pessoas com deficiência, idosos e usuários com baixo letramento digital. | — |
| 1.3 | **Equipe** | As áreas envolvidas no projeto têm responsabilidades definidas para garantir uma cultura de acessibilidade. | — |
| 1.4 | **Planejamento** | O cronograma, os recursos e as ferramentas necessárias para uma entrega acessível foram previstos. | — |
| 1.5 | **Testes** | Foram previstos testes com pessoas com deficiência e validações manuais e automáticas. | — |
| 1.6 | **Conformidade** | A meta de conformidade (ex.: WCAG 2.1 ou 2.2 nível AA) foi definida, documentada e compartilhada com toda a equipe. | — |

---

## 2. Desenvolvimento (Código e Estrutura)

| # | Critério | O que verificar | Ref. WCAG |
|---|---|---|---|
| 2.1 | **Semântica HTML** | Elementos nativos (botões, links, formulários, `<header>`, `<nav>`, `<main>`, `<footer>`) foram priorizados em vez de componentes simulados com elementos neutros. | 1.3.1, 4.1.2 |
| 2.2 | **Navegação por teclado** | Todas as funcionalidades podem ser operadas por teclado (Tab, Shift+Tab, Enter/Espaço), com foco visível e ordem lógica. | 2.1.1, 2.4.3, 2.4.7 |
| 2.3 | **Rótulos e links** | Nomes de botões, links e campos deixam clara a ação ou o destino (evitar "clique aqui" e "saiba mais" isolados). | 2.4.4, 2.4.6 |
| 2.4 | **Imagens** | Imagens informativas possuem texto alternativo (`alt`) e imagens decorativas usam `alt=""`. | 1.1.1 |
| 2.5 | **Cabeçalhos** | A estrutura segue hierarquia lógica de títulos (`<h1>` a `<h6>`), sem saltar níveis. | 1.3.1, 2.4.6 |
| 2.6 | **Áreas de clique** | Os alvos de interação têm tamanho adequado para toque e clique (recomendado 44×44 px; 48×48 px em mobile). | 2.5.8, 2.5.5 |
| 2.7 | **Modais** | Quando houver modal, ele pode ser fechado com teclado (ex.: tecla Esc) e não prende o foco. | 2.1.2 |
| 2.8 | **WAI-ARIA** | Atributos ARIA (ex.: `aria-expanded`, `aria-hidden`, `aria-live`) são usados corretamente e apenas quando o HTML nativo não é suficiente. | 4.1.2 |
| 2.9 | **Formulários e erros** | Campos obrigatórios estão identificados no código e visualmente. Mensagens de erro descrevem o problema em texto e sugerem a correção. | 3.3.1, 3.3.2, 3.3.3 |
| 2.10 | **Tempo suficiente** | Usuários podem ajustar, estender ou desativar limites de tempo (como sessões que expiram). | 2.2.1 |

---

## 3. Design (Visual e Interface)

| # | Critério | O que verificar | Ref. WCAG |
|---|---|---|---|
| 3.1 | **Design responsivo** | A interface se adapta a diferentes tamanhos de tela, orientações e ampliação de até 200% sem perda de conteúdo. | 1.3.4, 1.4.4, 1.4.10 |
| 3.2 | **Uso da cor** | A cor não é usada como único meio para transmitir informação crítica (ex.: erros, status, links). | 1.4.1 |
| 3.3 | **Contraste** | Texto e fundo mantêm contraste suficiente para leitura. | 1.4.3 |
| 3.4 | **Animações** | Conteúdos em movimento (carrosséis, banners, autoplay) podem ser pausados, ocultados ou interrompidos. | 2.2.2 |
| 3.5 | **Espaçamento** | Os elementos têm respiro suficiente para facilitar leitura e interação. | — |
| 3.6 | **Contraste não textual e foco** | Componentes essenciais (como bordas de campos) e o indicador de foco têm contraste mínimo de 3:1 em relação ao fundo. | 1.4.11 |
| 3.7 | **Conteúdo ao focar / passar o mouse** | Menus flutuantes e tooltips podem ser fechados sem mover o cursor, permanecem visíveis enquanto o cursor estiver sobre eles e não somem quando o cursor entra no elemento. | 1.4.13 |

---

## 4. Conteúdo (Linguagem e Mídia)

| # | Critério | O que verificar | Ref. WCAG |
|---|---|---|---|
| 4.1 | **Terminologia** | A linguagem respeita o protagonismo da pessoa (ex.: "pessoa com deficiência"), evitando expressões inadequadas. | — |
| 4.2 | **Linguagem simples** | Os textos são diretos, curtos (cerca de 15 a 20 palavras por frase) e com vocabulário acessível. | 3.1.5 |
| 4.3 | **Vídeos** | Vídeos possuem legendas e, quando necessário, audiodescrição e janela de Libras. | 1.2.2, 1.2.5 |
| 4.4 | **Áudio / podcasts** | O conteúdo sonoro tem transcrição textual completa. | 1.2.1 |
| 4.5 | **Hashtags e emojis** | Hashtags seguem um padrão legível (CamelCase, ex.: `#AcessibilidadeDigital`) e o uso de emojis é moderado. | — |
| 4.6 | **Títulos de página (`<title>`)** | O título de cada página é único, descritivo e indica o propósito daquela tela. | 2.4.2 |
| 4.7 | **Instruções sensoriais** | As instruções não dependem só de formato, tamanho, posição, orientação ou som (ex.: evitar "clique no botão verde à direita"). | 1.3.3 |

---

## 5. Verificação e Ferramentas

| # | Critério | O que verificar | Ref. WCAG |
|---|---|---|---|
| 5.1 | **Testes automáticos** | Foram usados validadores e analisadores automáticos (ex.: Lighthouse, WAVE, Axe DevTools). | — |
| 5.2 | **Testes manuais** | A navegação foi validada com teclado, leitor de tela e zoom. | — |
| 5.3 | **Validação com usuários e tecnologias assistivas** | Testes práticos foram feitos com pessoas que usam leitores de tela (NVDA, VoiceOver, JAWS), lupas ou controle por voz. | — |
| 5.4 | **Monitoramento contínuo** | Existe um processo recorrente de auditoria para que novas atualizações de código e conteúdo não criem barreiras. | — |

> **Por que combinar testes automáticos e manuais?** Ferramentas automáticas encontram rapidamente problemas técnicos, mas o uso real revela falhas de compreensão, navegação e contexto, enriquecendo nossa avaliação.