# Universidade de Brasília — FCTE
## Faculdade de Ciências e Tecnologias em Engenharia
### Disciplina: Interação Humano-Computador (IHC) • Grupo 5

---

# Guia de Boas Práticas para Acessibilidade Digital e Conformidade com a ABNT NBR 17225:2025

**Versão Revisada e Consolidada**  
Alinhada à **WCAG 2.2 (Nível AA)**, **ABNT NBR 17225:2025 (Web)**, **ABNT NBR 17060:2022 (Mobile)**, **Lei Brasileira de Inclusão (LBI nº 13.146/2015)** e diretrizes do **Guia Gov.br**.

---

### Integrantes do Grupo 5:
- **Davi Barbosa Alves** — Matrícula: 241012131
- **Rafael Silva Wasconcelos** — Matrícula: 232030364
- **Felype Gomes Ribeiro Carrijo** — Matrícula: 241025766
- **Gustavo Rodrigues de Noronha** — Matrícula: 241011930
- **Pedro Henrique Inácio dos Santos** — Matrícula: 241026001
- **Victor Alexim Amaral** — Matrícula: 242005060
- **Renan Curione de Castro** — Matrícula: 242024834
- **Guilherme Lorenzi Ventura** — Matrícula: 241011116

---

## Sumário Geral

1. **Introdução e Contextualização Legal**
2. **Fundamentação Técnica Internacional e Nacional**
   - 2.1 Diretrizes Internacionais: WCAG 2.2 e os 4 Princípios P.O.U.R.
   - 2.2 Níveis de Conformidade (A, AA e AAA)
   - 2.3 Normas Brasileiras: ABNT NBR 17225:2025 e NBR 17060:2022
3. **Diretrizes e Práticas por Área de Atuação**
   - 3.1 Gestão de Projetos e Governança de Acessibilidade
   - 3.2 Design de Interação e Interface Visual (UI/UX)
   - 3.3 Desenvolvimento Web (HTML Semântico, Teclado e ARIA)
   - 3.4 Produção de Conteúdo, Mídias e Linguagem Inclusiva
4. **Metodologia de Verificação, Auditoria e Ferramentas**
   - 4.1 Validação Automática em CI/CD e Navegador
   - 4.2 Inspeção Manual Técnica e Árvore de Acessibilidade
   - 4.3 Métodos de Avaliação de IHC (Personas, Percurso Cognitivo e Heurísticas de Nielsen)
   - 4.4 Testes Empíricos com Usuários Reais e Pessoas com Deficiência
5. **Checklist Consolidado e Integrado de Acessibilidade Digital**
   - Bloco 1: Gestão e Governança
   - Bloco 2: Desenvolvimento e Código
   - Bloco 3: Design e Identidade Visual
   - Bloco 4: Conteúdo e Comunicação
   - Bloco 5: Processo de Validação e Monitoramento Contínuo
6. **Referências Normativas e Bibliográficas**

---

## 1. Introdução e Contextualização Legal

A acessibilidade digital não é um recurso estético ou acessório opcional: é um **direito humano fundamental**, garantido pela **Lei Brasileira de Inclusão (Lei nº 13.146/2015 - LBI)**, cujo Artigo 63 estabelece como obrigatória a acessibilidade nos sítios da internet mantidos por empresas com sede ou representação comercial no País e por órgãos da administração pública.

Este documento consolida as melhores práticas decorrentes do *Guia de Boas Práticas para Acessibilidade Digital* (fruto da cooperação técnica Reino Unido–Brasil), articulando-as diretamente com a nova norma **ABNT NBR 17225:2025** (*Acessibilidade em Conteúdo Web*) e a recomendação técnica internacional **WCAG 2.2** do W3C.

O objetivo deste material é fornecer um referencial técnico e operacional de ponta para equipes multidisciplinares (Gestão, Design, Engenharia de Software, Produção de Conteúdo e Garantia da Qualidade - QA), eliminando barreiras digitais e viabilizando produtos universais e inclusivos.

---

## 2. Fundamentação Técnica Internacional e Nacional

### 2.1 As Diretrizes Internacionais WCAG 2.2 e o Princípio P.O.U.R.

As **Web Content Accessibility Guidelines (WCAG 2.2)** constituem a base científica e técnica global de acessibilidade na Web. São organizadas em quatro princípios fundamentais:

1. **Perceptível (*Perceivable*):** A informação e os elementos de interface não podem ser invisíveis a todos os sentidos da pessoa. Se um usuário não puder ver, ele precisa ser capaz de ouvir ou tatear (ex.: alternativas em texto para imagens, legendas e audiodescrição em vídeos, contraste suficiente de cores).
2. **Operável (*Operable*):** A interface não pode exigir interações que a pessoa não consiga executar. Toda ação disponível pelo mouse deve ser 100% operável via teclado, com foco visível, tempo suficiente para interação e ausência de elementos estroboscópicos que provoquem convulsões.
3. **Compreensível (*Understandable*):** As informações e a dinâmica de operação devem ser fáceis de assimilar, com linguagem clara, fluxos consistentes, indicação do idioma da página e mecanismos preventivos e explicativos contra erros de preenchimento.
4. **Robusto (*Robust*):** O código deve ser estruturado de forma padronizada e semântica para ser interpretado confiavelmente por navegadores e tecnologias assistivas (leitores de tela, lupas eletrônicas, teclados virtuais).

### 2.2 Níveis de Conformidade

- **Nível A (Mínimo / Essencial):** Aborda as barreiras mais impeditivas. Se desrespeitado, impede integralmente o acesso de pessoas usuárias de tecnologias assistivas.
- **Nível AA (Padrão de Conformidade / Obrigatório):** Padrão legal e contratual exigido pela administração pública brasileira, pela LBI e pela NBR 17225. Remove a grande maioria das barreiras de usabilidade e acessibilidade.
- **Nível AAA (Pleno / Especializado):** Nível mais rigoroso, voltado para otimizar ao máximo o conforto e personalização.

### 2.3 Atualizações Críticas da WCAG 2.2 e Normas Brasileiras

Diferente de versões anteriores (como a 2.0 e 2.1), a **WCAG 2.2** e a **NBR 17225:2025** introduziram critérios essenciais que devem constar no planejamento:

- **Foco Não Obscurecido (SC 2.4.11 - AA):** Quando um componente recebe foco do teclado, ele não pode ficar encoberto por cabeçalhos fixos (*sticky*), banners ou rodapés.
- **Tamanho Mínimo do Alvo de Toque (SC 2.5.8 - AA):** Alvos clicáveis/tocáveis devem ter no mínimo **24×24 pixels CSS** ou espaçamento equivalente entre alvos adjacentes, prevenindo cliques acidentais.
- **Movimentos de Arrastar (SC 2.5.7 - AA):** Qualquer funcionalidade acionada por arrastar (*drag and drop*) deve ter uma alternativa equivalente por clique único simples (ex.: botões de "Subir" e "Descer").
- **Entrada Redundante (SC 3.3.7 - A):** Informações já digitadas pelo usuário na mesma sessão/processo não devem ser exigidas novamente.
- **Autenticação Acessível (SC 3.3.8 - AA):** Processos de login não podem depender de testes cognitivos de memória (ex.: não bloquear o recurso de "Copiar e Colar" senhas).
- **Ajuda Consistente (SC 3.2.6 - A):** Meios de suporte ao usuário (chat, FAQ, contato) devem permanecer no mesmo local relativo em páginas de um mesmo domínio.

---

## 3. Diretrizes e Práticas por Área de Atuação

### 3.1 Gestão de Projetos e Governança

- **Desenho Universal como Requisito:** A acessibilidade deve ser tratada como requisito funcional e não funcional na fase de concepção (*Shift-Left A11y*), reduzindo retrabalho e custos de refatoração tardia.
- **Matriz RACI para Acessibilidade:**
  - *Design:* Contraste, hierarquia tipográfica, alvos de toque, estados de foco e animações controláveis.
  - *Conteúdo:* Textos alternativos (`alt`), linguagem clara, legendas, transcrições e links contextuais.
  - *Desenvolvimento:* HTML semântico, landmarks, suporte completo ao teclado e atributos ARIA adequados.
  - *QA / Testes:* Verificação automática, testes de navegação por teclado e auditoria com leitores de tela.
  - *PO / Gestão:* Definição de metas de conformidade, priorização no backlog e inclusão de acessibilidade no *Definition of Done (DoD)*.
- **Declaração Pública de Acessibilidade:** Manter uma página pública com o nível de conformidade visado, limitações técnicas conhecidas, canais de ouvidoria/contato acessíveis e data da última auditoria.

### 3.2 Design de Interação e Interface Visual (UI/UX)

- **Contraste Mínimo de Cores (SC 1.4.3 e 1.4.11):**
  - Texto comum: proporção mínima de **4,5:1** em relação ao fundo.
  - Texto grande (≥18pt regular ou ≥14pt negrito): proporção mínima de **3:1**.
  - Componentes essenciais de interface (bordas de campos, ícones interativos) e estados ativos (foco, seleção): mínimo de **3:1**.
- **Independência de Cor (SC 1.4.1):** A cor nunca deve ser o único canal informativo. Mensagens de sucesso ou erro devem conter ícones e rótulos textuais de apoio.
- **Tipografia e Espaçamento (SC 1.4.12):**
  - Não justificar textos longos (o alinhamento à esquerda evita espaços irregulares que prejudicam pessoas com dislexia).
  - Permitir alteração de espaçamento entre linhas (1,5× a fonte), parágrafos e letras sem sobreposição ou perda de funcionalidade.
- **Preferências do Sistema:** Respeitar variáveis de acessibilidade do usuário via CSS:
  - `@media (prefers-reduced-motion)`: desativar ou atenuar transições e animações;
  - `@media (prefers-contrast)`: elevar o contraste quando solicitado pelo sistema operacional.

### 3.3 Desenvolvimento Web (Código e Estrutura)

- **Semântica Nativa em Primeiro Lugar (Primeira Regra do ARIA):** Sempre priorizar elementos HTML nativos (`<button>`, `<a>`, `<input>`, `<select>`) em vez de recriá-los com `<div>` ou `<span>` com ouvintes de clique.
- **Landmarks Estruturais:** A página deve conter regiões claras: `<header>`, `<nav>`, `<main>` (apenas um por tela), `<aside>` e `<footer>`.
- **Navegação Exclusiva por Teclado:**
  - Todo componente interativo deve ser acessível via `Tab`, `Shift+Tab`, `Enter`, `Espaço` e teclas direcionais.
  - **Indicador de foco visível:** Nunca zerar o outline com `outline: none` sem fornecer indicador visual claro e contrastante.
  - **Prevenção de Armadilhas de Foco (*Focus Trap*):** Modais devem reter o foco enquanto abertos e permitir saída imediata com a tecla `Esc`, devolvendo o foco ao gatilho original.
  - **Skip Links:** Disponibilizar no topo da página o atalho "Ir para o conteúdo principal".
- **Formulários e Entradas de Dados:**
  - Associação explícita entre `<label for="id">` e `<input id="id">`.
  - Agrupamento semântico de blocos de opções com `<fieldset>` e `<legend>`.
  - Mensagens de erro associadas aos inputs com `aria-describedby` e `aria-invalid="true"`.
- **Atualizações Dinâmicas:** Utilizar ARIA Live Regions (`role="status"` ou `aria-live="polite"`) para que leitores de tela anunciem mensagens dinâmicas (ex.: filtros aplicados, itens adicionados ao carrinho) sem deslocar o foco bruscamente.

### 3.4 Produção de Conteúdo, Mídias e Comunicação

- **Linguagem Simples e Inclusiva:**
  - Utilizar frases curtas (15 a 20 palavras), ordem direta (Sujeito + Verbo + Complemento) e evitar jargões burocráticos.
  - Utilizar o termo legal e correto **"Pessoa com Deficiência (PcD)"**, priorizando o sujeito em relação à sua condição.
- **Alternativas para Imagens (SC 1.1.1):**
  - Imagens informativas: preencher o atributo `alt` com descrição concisa e contextual.
  - Imagens complexas (gráficos, diagramas): fornecer resumo no `alt` e detalhamento dos dados em tabela HTML ou texto corrido.
  - Imagens puramente decorativas: declarar explicitamente `alt=""` ou `aria-hidden="true"`.
- **Hiperlinks Claros:**
  - Evitar rótulos genéricos ("clique aqui", "saiba mais", URLs puras). Usar textos explicativos: *"Baixar edital de abertura"*.
  - Indicar quando o link abre em nova janela (`(abre em nova aba)`) ou se faz download de arquivos (`(PDF, 1,2 MB)`).
- **Formatos Multimídia:**
  - Vídeos com legendas sincronizadas (CC), faixa de audiodescrição (AD) e janela de intérprete de Libras.
  - Áudios e podcasts com transcrição textual completa e autodescrição de interlocutores.
  - Hashtags escritas em formato **CamelCase** (ex.: `#AcessibilidadeDigital`), possibilitando que os sintetizadores de voz pronunciem cada palavra corretamente.

---

## 4. Metodologia de Verificação, Auditoria e Ferramentas

A validação de acessibilidade digital exige uma **abordagem híbrida** de IHC, combinando métodos automáticos, manuais e empíricos.

```
                  ┌────────────────────────────────────────┐
                  │ METODOLOGIA DE AVALIAÇÃO DE ACESSIBILIDADE│
                  └───────────────────┬────────────────────┘
                                      │
        ┌─────────────────────────────┼─────────────────────────────┐
        ▼                             ▼                             ▼
┌───────────────┐             ┌───────────────┐             ┌───────────────┐
│  Automática   │             │   Analítica   │             │   Empírica    │
│  (Linters e   │             │   (Inspeção   │             │  (Usuários e  │
│  Validadores) │             │  Especialista)│             │ Pessoas PcD)  │
└───────┬───────┘             └───────┬───────┘             └───────┬───────┘
        │                             │                             │
• ASES / e-Scanner (Gov)      • Navegação via Teclado       • Testes de Usabilidade
• axe DevTools                • Árvore de Acessibilidade    • Métricas: Taxa de
• Lighthouse (Chrome)         • 10 Heurísticas de Nielsen     Sucesso e Tempo Médio
• WAVE Extension              • Percurso Cognitivo / Persona• Feedback Qualitativo
```

### 4.1 Validação Automática
- **ASES / e-Scanner (Gov.br):** Ferramenta oficial do governo brasileiro para verificação de conformidade em sites públicos.
- **axe DevTools & WAVE:** Varreduras em tempo de execução para identificar falhas objetivas de contraste, rótulos ausentes e tags duplicadas.
- **Pa11y:** Automação em esteiras de integração contínua (CI/CD) para barrar regressões em Pull Requests.
> *Nota Crítica:* Escâneres automáticos cobrem apenas de 30% a 40% das falhas da WCAG; testes manuais são mandatórios.

### 4.2 Inspeção Manual e Tecnologias Assistivas
- **Teste de Teclado:** Percorrer 100% da interface apenas com `Tab`, `Shift+Tab`, `Enter`, `Espaço` e `Setas`, conferindo foco e ausência de armadilhas.
- **Inspeção da Árvore de Acessibilidade:** Validar as propriedades `Name, Role, Value` no painel *Accessibility* do DevTools.
- **Leitores de Tela:** Validar a experiência utilizando as combinações mais frequentes de mercado:
  - Windows: **NVDA** com Mozilla Firefox / Google Chrome.
  - macOS / iOS: **VoiceOver** com Safari.
  - Android: **TalkBack** com Google Chrome.

### 4.3 Métodos de IHC e Heurísticas de Nielsen
- **Personas Diversas:** Simular o fluxo de tarefas a partir de perfis com baixo letramento digital, idosos ou pessoas com deficiências sensoriais/motoras.
- **10 Heurísticas de Nielsen:** Avaliar visibilidade do sistema, correspondência com o mundo real, prevenção de erros e simplicidade estética em consonância com a acessibilidade.

---

## 5. Checklist Consolidado e Integrado de Acessibilidade Digital

### 1. Gestão e Governança
- [ ] Acessibilidade incluída na etapa de concepção do projeto (*Definition of Done* estipulada em WCAG 2.2 AA).
- [ ] Matriz RACI estabelecida com responsabilidades de cada disciplina (Design, Conteúdo, Dev, QA, PO).
- [ ] Declaração Pública de Acessibilidade redigida e publicada com canal de contato e ouvidoria.
- [ ] Recursos previstos em orçamento para testes com pessoas com deficiência e auditorias periódicas.

### 2. Desenvolvimento Web (Código e Estrutura)
- [ ] Hierarquia de cabeçalhos lógica e estrita (`<h1>` a `<h6>`) sem salto artificial de níveis.
- [ ] Uso exclusivo de landmarks HTML5 (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`) com um único `<main>`.
- [ ] Elementos interativos nativos (`<a>` para navegação, `<button>` para ações; sem `div` com `onclick`).
- [ ] 100% das funções operáveis por teclado com foco visível e ordem lógica de tabulação.
- [ ] Foco visual não obscurecido por cabeçalhos ou barras fixas (respeitando `scroll-margin-top`).
- [ ] Ausência de armadilhas de teclado; modais fecháveis por `Esc` com devolução de foco ao elemento original.
- [ ] Atalho no topo (*Skip Link*) permitindo pular direto ao conteúdo principal.
- [ ] Tabelas de dados contendo `<th>`, atributos `scope="col|row"` e descrições com `<caption>`.
- [ ] Todos os campos de formulário com `<label>` associado e agrupamento por `<fieldset>` e `<legend>`.
- [ ] Mensagens de status dinâmicas comunicadas via ARIA Live Regions sem roubo inesperado de foco.
- [ ] Alternativas a gestos complexos ou arraste (*drag-and-drop*) acionáveis por clique simples.

### 3. Design Visual e Interface (UI/UX)
- [ ] Relação de contraste mínima de 4,5:1 (texto regular) e 3:1 (texto grande e controles interativos/foco).
- [ ] Informação nunca dependente unicamente de cor (suporte com textos, ícones ou padrões).
- [ ] Alvos de toque com área mínima de 24×24px (ou espaçamento compensatório seguro).
- [ ] Textos alinhados à esquerda (não justificados), com altura de linha entre 1.4 e 1.6.
- [ ] Layout responsivo suportando zoom de até 200% sem perda de funcionalidade e sem rolagem horizontal dupla.
- [ ] Respeito às diretrizes de movimento do sistema (`prefers-reduced-motion`) e controle para pausar animações.
- [ ] Autenticação sem imposição de testes cognitivos de memória (permitindo colagem de senhas).

### 4. Produção de Conteúdo e Linguagem
- [ ] Linguagem simples, direta, frases curtas e ordem direta (SVO), sem termos capacitistas.
- [ ] Utilização da terminologia oficial "Pessoa com Deficiência (PcD)".
- [ ] Imagens informativas com `alt` descritivo; imagens decorativas com `alt=""` vazio.
- [ ] Conteúdos visuais complexos (infográficos e gráficos) explicados em texto longo e tabelas.
- [ ] Links compreensíveis fora de contexto, avisando abertura de novas abas ou download de anexos.
- [ ] Vídeos com legendas sincronizadas, janela de Libras e audiodescrição; áudios com transcrição integral.
- [ ] Hashtags padronizadas em CamelCase (`#InclusaoDigital`) e uso moderado de emojis.
- [ ] Ajuda e canais de suporte posicionados de maneira consistente e previsível em todas as páginas.

### 5. Auditoria e Monitoramento Contínuo
- [ ] Varreduras automáticas em pipeline de CI/CD (ex.: axe / Pa11y / Lighthouse).
- [ ] Validação periódica no ASES (Governo Federal).
- [ ] Testes manuais sistemáticos via teclado e com leitores de tela (NVDA, VoiceOver, TalkBack).
- [ ] Condução de sessões de teste de usabilidade empíricas com usuários reais, incluindo pessoas com deficiência.

---

## 6. Referências Normativas e Bibliográficas

1. **ABNT.** *ABNT NBR 17225:2025 — Acessibilidade em Conteúdo Web*. Associação Brasileira de Normas Técnicas, Rio de Janeiro, 2025.
2. **ABNT.** *ABNT NBR 17060:2022 — Acessibilidade em Aplicativos Móveis*. Associação Brasileira de Normas Técnicas, Rio de Janeiro, 2022.
3. **BRASIL.** *Lei nº 13.146, de 6 de julho de 2015*. Institui a Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência).
4. **BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos.** *Guia de Boas Práticas para Acessibilidade Digital*. Programa de Cooperação Reino Unido–Brasil, 2023. Disponível em: <https://www.gov.br>.
5. **NIELSEN, Jakob.** *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group, 1994.
6. **W3C.** *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation, 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>.
7. **W3C.** *WAI-ARIA Authoring Practices Guide (APG)*. W3C Working Group Note. Disponível em: <https://www.w3.org/WAI/ARIA/apg/>.
