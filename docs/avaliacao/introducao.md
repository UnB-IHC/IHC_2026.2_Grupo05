# Relatório de Avaliação

> **Objeto de Estudo:** Meu SUS digital  
> **URL:** [https://meususdigital.saude.gov.br](https://meususdigital.saude.gov.br/login)


# Avaliação de Acessibilidade e Usabilidade: Meu SUS Digital

## 1. Introdução

Esta etapa da disciplina de Interação Humano-Computador (IHC) tem como objetivo avaliar a acessibilidade e a usabilidade do portal governamental **Meu SUS Digital** (`meususdigital.saude.gov.br`). A acessibilidade no ambiente digital é fundamental para assegurar que todas as pessoas — especialmente indivíduos com deficiência visual, motora, auditiva ou cognitiva, além de idosos e usuários em condições de conectividade ou dispositivos limitados — consigam usufruir com autonomia, eficácia e equidade dos serviços públicos de saúde.

A análise combinou a inspeção técnica automatizada por meio da ferramenta **WAVE (*Web Accessibility Evaluation Tool*)**, mantida pela WebAIM, com a avaliação ergonômica baseada nas **10 Heurísticas de Usabilidade de Jakob Nielsen**. O diagnóstico fundamentou-se nas diretrizes internacionais da **WCAG 2.1 (*Web Content Accessibility Guidelines*)**, nos níveis de conformidade A e AA, e nos parâmetros estabelecidos pelo **eMAG (*Modelo de Acessibilidade em Governo Eletrônico*)**, normativo obrigatório para portais da administração pública brasileira.

Foram avaliados quatro fluxos e telas fundamentais da aplicação:

1. **Página Inicial Pública / Deslogada (Boas-Vindas e Acesso Gov.br)**
2. **Página Inicial Autenticada / Conteúdos e Notificações (Dashboard)**
3. **Minha Saúde / Listagem de Vacinas**
4. **Detalhes do Documento (Certificado de Vacinação de COVID-19)**

---

## 2. Metodologia

A avaliação utilizou a extensão de navegador da ferramenta WAVE. O mecanismo inspeciona a árvore DOM da página renderizada e categoriza as ocorrências encontradas em:

* **Erros (*Errors*):** Problemas graves de acessibilidade que violam critérios normativos da WCAG e bloqueiam ou dificultam substancialmente o uso por tecnologias assistivas.
* **Erros de Contraste (*Contrast Errors*):** Descompassos cromáticos onde a razão de contraste entre a cor de primeiro plano (texto) e a cor de fundo não atinge o limiar regulamentar.
* **Alertas (*Alerts*):** Elementos com comportamento ou marcação atípica que exigem validação qualitativa humana para atestar se configuram barreira ao usuário.
* **Recursos (*Features*):** Elementos implementados corretamente sob a ótica da acessibilidade (ex.: declaração válida de idioma, textos alternativos sucintos).
* **Elementos Estruturais (*Structure*):** Avaliação da hierarquia semântica de marcação (`<h1>` a `<h6>`), regiões de ponto de referência (`<header>`, `<main>`, `<nav>`) e blocos de conteúdo.
* **Atributos ARIA:** Presença e integridade de anotações semânticas da especificação WAI-ARIA.

A métrica quantitativa consolidada é expressa pelo **AIM Score (*Accessibility Impact Metric*)**, pontuada em uma escala contínua de 0 a 10.

Para cada grupo de falhas apontadas pelo WAVE, foi realizado o cruzamento analítico com as **10 Heurísticas de Usabilidade de Jakob Nielsen**, identificando os impactos no modelo mental do usuário, na prevenção de equívocos operacionais e na carga cognitiva durante a execução das tarefas.

---

## 3. Resultados Quantitativos Coletados

A tabela a seguir apresenta os resultados brutos extraídos do WAVE para as quatro interfaces avaliadas:

| Indicador WAVE | Página Pública (Deslogada) | Página Inicial (Autenticada) | Minha Saúde / Vacinas | Detalhes do Documento |
| :--- | :---: | :---: | :---: | :---: |
| **AIM Score** | **5.8 / 10** | **4.3 / 10** | **8.2 / 10** a **8.3 / 10** | **9.4 / 10** |
| **Erros (*Errors*)** | 1 | 33 | 2 | 2 |
| **Erros de Contraste** | 12 | 0 | 1 | 0 |
| **Alertas (*Alerts*)** | 2 | 17 | 7 a 14 | 16 |
| **Recursos (*Features*)** | 2 | 5 | 3 | 4 |
| **Elementos Estruturais** | 3 | 16 | 4 | 6 |
| **Atributos ARIA** | 11 | 28 | 21 a 22 | 31 |

<div align="center">
  <img src="../../images/wave_pagina_deslogada.png" alt="Painel do WAVE na Página Pública Deslogada do Meu SUS Digital apresentando AIM Score 5.8 e 12 erros de contraste">
  <p><strong>Figura 1:</strong> Avaliação no WAVE da tela inicial deslogada/pública do Meu SUS Digital com destaque para os 12 erros de contraste sob o fundo azul e o AIM Score de 5.8.</p>
</div>

<div align="center">
  <img src="../../images/wave_pagina_inicial.png" alt="Painel do WAVE na Página Inicial autenticada">
  <p><strong>Figura 2:</strong> Avaliação no WAVE da Página Inicial autenticada evidenciando 33 erros de ausência de texto alternativo e AIM Score de 4.3.</p>
</div>


<div align="center">
  <img src="../../images/wave_vacinas_geral.png" alt="Visão geral da tela de Vacinas com marcações do WAVE">
  <p><strong>Figura 3:</strong> Visão geral da interface de listagem de Vacinas e histórico de doses.</p>
</div>

<div align="center">
  <img src="../../images/wave_detalhes_documento.png" alt="Tela de Detalhes do Documento no WAVE com doses de vacinas">
  <p><strong>Figura 4:</strong> Interface de Detalhes do Documento (Certificado de Vacinação COVID-19)</p>
</div>

---

## 4. Diagnóstico Detalhado: WAVE × WCAG 2.1 × Heurísticas de Nielsen

### A. Contraste Crítico na Área Pública de Entrada (*Very low contrast*)

* **Evidência do WAVE:** A tela inicial pública (deslogada) apresentou **12 erros severos de contraste**. Todos os rótulos textuais dispostos abaixo dos ícones dos serviços centrais ("Agora tem Especialistas em Saúde Mental para Mulheres", "Conteúdos", "Rede de Saúde", "Valida Certidão", "Calendário Nacional de Vacinação", "Fale com o Meu SUS Digital", "Sobre o SUS" e "Termos de Utilização") encontram-se sobrepostos a uma imagem fotográfica azulada com máscara translúcida sem contraste mínimo garantido.
* **Violação Técnica (WCAG 2.1):** Critério de Sucesso 1.4.3 — Contraste Mínimo (Nível AA). A razão de contraste apurada situa-se abaixo do limiar obrigatório de $4.5:1$ para texto em tamanho normal.
* **Violação Ergonômica (Heurísticas de Nielsen):**
  * **Heurística #1: Visibilidade do status do sistema.** O portal não garante que seus atalhos funcionais estejam perceptíveis de pronto ao cidadão. O usuário não consegue discernir visualmente os serviços públicos que podem ser acessados ou validados antes da autenticação (como validação de certidão ou calendário vacinal).
  * **Heurística #7: Flexibilidade e eficiência de uso.** A camuflagem ótica das opções contra a imagem de fundo exige lentidão excessiva e esforço de focalização visual, prejudicando usuários idosos ou sob incidência de luz solar em dispositivos móveis.
  * **Heurística #8: Estética e design minimalista.** A escolha de utilizar uma fotografia de fundo com gradiente complexo de azul sobreposta a tipografia fina gera ruído visual (*visual clutter*) e compete com os elementos de ação, violando o princípio de simplicidade visual.
* **Recomendação Técnica e de IHC:** Aplicar caixas de contraste sólidas (*chips* ou cartões com fundo branco opaco) em volta dos títulos dos ícones, ou escurecer significativamente a sobreposição de cor do fundo até alcançar no mínimo $4.5:1$ de relação de luminância:
  ```css
  /* Sugestão de estilo para rótulo acessível */
  .service-icon-label {
    background-color: rgba(0, 35, 102, 0.85); /* Fundo sólido de alto contraste */
    color: #ffffff; /* Contraste > 7:1 (Nível AAA) */
    padding: 4px 8px;
    border-radius: 4px;
  }
  ```

---

### B. Ausência de Texto Alternativo em Imagens (*Missing alternative text*)

* **Evidência do WAVE:** Foram identificados **1 erro** na tela pública (ícone ilustrativo central desprovido de descrição) e **33 erros** massivos na Página Inicial autenticada decorrentes de ilustrações de campanhas e cabeçalhos sem `alt`. Nas telas internas (Vacinas e Detalhes), repetiram-se **2 erros** pontuais em ícones da barra superior.
* **Violação Técnica (WCAG 2.1):** Critério de Sucesso 1.1.1 — Conteúdo Não Textual (Nível A).
* **Violação Ergonômica (Heurísticas de Nielsen):**
  * **Heurística #1: Visibilidade do status do sistema.** Para quem utiliza sintetizador de voz (NVDA, TalkBack, Orca), o sistema oculta integralmente as peças informativas sobre saúde feminina, saúde mental e campanhas de vacinação, verbalizando apenas o nome cru do arquivo (ex.: `banner_campanha.png`) ou mantendo o foco em silêncio.
  * **Heurística #6: Reconhecimento em vez de memorização.** A falta de equivalência textual impede o reconhecimento direto do conteúdo, forçando o cidadão com deficiência a adivinhar o destino de links e botões associados às imagens.
* **Recomendação Técnica e de IHC:** Inserir o atributo `alt` com conteúdo objetivo em todas as imagens informativas:
  ```html
  <!-- Inadequado -->
  <img src="campanha_saude_mental.png">

  <!-- Acessível e Usável -->
  <img src="campanha_saude_mental.png" alt="Campanha: Agora tem Especialistas em Saúde Mental para Mulheres">
  ```
  Para ícones decorativos complementares a textos visíveis, deve-se adotar `alt=""` ou `aria-hidden="true"`.

---

### C. Textos Alternativos Excessivamente Longos (*Long alternative text*)

* **Evidência do WAVE:** Identificados **4 alertas** na Página Inicial autenticada. A equipe de desenvolvimento tentou descrever minuciosamente cada traço cênico das fotografias diretamente no atributo `alt` (ex.: *"Mulher jovem apoiada sobre os ombros de uma mulher idosa, ambas de perfil, em imagem em preto e branco"* e *"Pessoa idosa segurando um celular com as duas mãos e tocando na tela, representando o uso de serviços digitais de saúde pelo smartphone"*).
* **Violação Técnica (WCAG 2.1):** Critério de Sucesso 1.1.1 — Conteúdo Não Textual (Recomendações e Boas Práticas).
* **Violação Ergonômica (Heurísticas de Nielsen):**
  * **Heurística #8: Estética e design minimalista.** Textos alternativos prolixos poluem o fluxo auditivo. O leitor de tela lê o atributo de uma só vez, sem suporte a pausas por parágrafo, saturando a atenção do usuário com descrições plásticas irrelevantes para a finalidade pública da página.
  * **Heurística #7: Flexibilidade e eficiência de uso.** Usuários avançados de leitor de tela que buscam emitir um documento de saúde têm sua navegação linear lentificada pela leitura compulsória de longas descrições imagéticas.
* **Recomendação Técnica e de IHC:** Reduzir o texto alternativo ao núcleo semântico (ex.: `alt="Cartilha educativa: Ciclo da violência contra as mulheres"`). Descrições ricas de acessibilidade artística devem ser disponibilizadas em acordeões ou via `aria-describedby`.

---

### D. Rótulos de Formulários Órfãos (*Orphaned form label*)

* **Evidência do WAVE:** Ocorrência de campos sem rótulo programático associado: **2 alertas** na tela pública (área de "Você não está logado" / "Entrar com Gov.br"), **2 alertas** na Página Inicial autenticada, **2 alertas** em Vacinas e **4 alertas** na tela de Detalhes do Documento.
* **Violação Técnica (WCAG 2.1):** Critérios de Sucesso 1.3.1 — Informações e Relações (Nível A) e 3.3.2 — Rótulos ou Instruções (Nível A).
* **Violação Ergonômica (Heurísticas de Nielsen):**
  * **Heurística #5: Prevenção de erros.** Controles de formulário sem `<label>` vinculada via atributos `for` e `id` são vocalizados de forma vaga (ex.: "campo de texto"). Usuários com deficiência visual não conseguem antecipar qual dado deve ser digitado ou qual ação aquele controle executará, aumentando a taxa de erros no preenchimento.
  * **Heurística #6: Reconhecimento em vez de memorização.** O usuário é forçado a deduzir a finalidade do campo a partir de fragmentos de texto soltos ao redor, gerando esforço mnemônico desnecessário.
* **Recomendação Técnica e de IHC:** Associar explicitamente cada controle ao seu respectivo rótulo semântico:
  ```html
  <label for="campo-busca-sus">Buscar serviço ou conteúdo</label>
  <input type="text" id="campo-busca-sus" name="busca">
  ```

---

### E. Quebra na Hierarquia de Cabeçalhos (*Skipped heading level*)

* **Evidência do WAVE:** Detectado **1 alerta** na Página Inicial autenticada e ausência quase total de hierarquia estrutural na tela deslogada (que possui apenas 1 `<h1>` e 3 elementos de estrutura no total). Na tela autenticada, a estrutura salta diretamente de `<h1>` para `<h3>` e `<h4>`, omitindo o nível `<h2>`.
* **Violação Técnica (WCAG 2.1):** Critérios de Sucesso 1.3.1 — Informações e Relações (Nível A) e 2.4.6 — Títulos e Rótulos (Nível AA).
* **Violação Ergonômica (Heurísticas de Nielsen):**
  * **Heurística #4: Consistência e padrões.** A supressão de níveis da hierarquia quebra o padrão de navegação universal da web. Leitores de tela fornecem comandos para avançar entre seções mestras via cabeçalhos de nível 2; ao pular direto para o nível 3, o mapa mental do documento se fragmenta.
  * **Heurística #2: Correspondência entre o sistema e o mundo real.** O documento digital deve seguir a lógica usual de capítulos e subseções encontrada em sumários tradicionais.
* **Recomendação Técnica e de IHC:** Padronizar a árvore de títulos semânticos:
  * `<h1>`: Título institucional ("Meu SUS Digital");
  * `<h2>`: Seções funcionais ("Serviços Rápidos", "Conteúdos em Destaque", "Histórico de Vacinação");
  * `<h3>`: Títulos dos módulos, cartões e doses individuais.

---

### F. Tipografia Excessivamente Reduzida (*Very small text*)

* **Evidência do WAVE:** Registrada incidência crítica de microtextos em todas as áreas internas: **10 alertas** na Home autenticada, até **9 alertas** em Vacinas e **12 alertas** na tela de Detalhes do Documento. O problema afeta datas cruciais de imunização (*"09/07/2022"*, *"20/12/2021"*), nomes técnicos de vacinas (*"Sinovac/Butantan"*, *"Pfizer Comirnaty"*) e dados de lote.
* **Violação Técnica (WCAG 2.1):** Critério de Sucesso 1.4.4 — Redimensionamento de Texto (Nível AA).
* **Violação Ergonômica (Heurísticas de Nielsen):**
  * **Heurística #8: Estética e design minimalista.** A tentativa de compactar a tela com tamanhos tipográficos inferiores a $10\text{px}$ prejudica a legibilidade e a hierarquia visual.
  * **Heurística #6: Reconhecimento em vez de memorização.** A ilegibilidade de metadados médicos e sanitários força o cidadão idoso ou com acuidade visual comprometida a fazer esforço excessivo para decifrar datas de reforço e prazos de vacinação.
* **Recomendação Técnica e de IHC:** Adotar unidades relativas (`rem`) e estipular tamanho mínimo de $12\text{px}$ a $14\text{px}$ ($0.75\text{rem}$ a $0.875\text{rem}$) para datas e notas secundárias, garantindo legibilidade e suporte à ampliação de tela de até 200%.

---

## 5. Matriz Integrada: WAVE × WCAG 2.1 × Heurísticas de Nielsen

| Elemento / Erro WAVE | Ocorrência no Meu SUS Digital | Diretriz WCAG 2.1 | Heurística de Nielsen Violada | Impacto no Usuário e Solução Recomendada |
| :--- | :--- | :--- | :--- | :--- |
| **Very low contrast** | 12 na Página Pública; 1 em Vacinas | 1.4.3 (Nível AA) | **#1 Visibilidade do Status**<br>**#7 Eficiência de Uso**<br>**#8 Design Minimalista** | Rótulos de serviços e botões camuflados contra fundo azul com imagem. Solução: aplicar fundo sólido escuro ou cartões com razão $\ge 4.5:1$. |
| **Missing alternative text** | 1 na Pública; 33 na Home; 2 em Vacinas/Detalhes | 1.1.1 (Nível A) | **#1 Visibilidade do Status**<br>**#6 Reconhecimento em vez de Memória** | Imagens e campanhas silenciadas no sintetizador de voz. Solução: inserir atributos `alt` informativos nos links e campanhas. |
| **Long alternative text** | 4 na Página Inicial autenticada | 1.1.1 (Recomendação) | **#8 Design Minimalista**<br>**#7 Eficiência de Uso** | Sobrecarga cognitiva com descrições prolixas de fotografias. Solução: sintetizar textos para focar no propósito do serviço. |
| **Orphaned form label** | 2 na Pública; 2 na Home; 2 em Vacinas; 4 em Detalhes | 1.3.1 e 3.3.2 (Nível A) | **#5 Prevenção de Erros**<br>**#6 Reconhecimento em vez de Memória** | Campos de entrada sem finalidade anunciada pelo leitor. Solução: amarrar explicitamente `<label for="...">` com `<input id="...">`. |
| **Skipped heading level** | 1 na Home (`<h1>` para `<h3>`); ausente na Pública | 1.3.1 e 2.4.6 (Nível AA) | **#4 Consistência e Padrões**<br>**#2 Correspondência com o Mundo Real** | Quebra na estrutura lógica de navegação por teclado. Solução: ordenar a taxonomia com `<h1>`, `<h2>` e `<h3>`. |
| **Very small text** | 10 na Home; 9 em Vacinas; 12 em Detalhes | 1.4.4 (Nível AA) | **#8 Design Minimalista**<br>**#6 Reconhecimento em vez de Memória** | Microtextos dificultam a conferência de datas e lotes de vacinas. Solução: estabelecer piso tipográfico de $0.75\text{rem}$ a $0.875\text{rem}$. |

---

## 6. Conclusão e Considerações de IHC

A ampliação da análise para abranger tanto o ambiente pré-login quanto o ambiente pós-login revelou uma dinâmica relevante de Interação Humano-Computador:

1. **Acesso Público com Severas Barreiras Visuais:** A página de entrada pública obteve **AIM Score de 5.8**, prejudicada principalmente pelos **12 erros graves de contraste** gerados pela sobreposição de texto em fundo azul fotográfico sem tratamento cromático adequado. Isso impacta negativamente a primeira impressão e a localização de serviços que dispensam login (ex.: verificação de certidões).
2. **Descompasso entre o Portal Informativo e os Módulos Transacionais:** Enquanto a área inicial autenticada atinge a pior nota do sistema (**AIM Score 4.3**) devido à ausência quase total de descrições nas imagens (33 erros), as telas internas utilitárias de visualização de doses e certificados alcançam marcas elevadas (**AIM Score entre 8.2 e 9.4**), impulsionadas por marcações WAI-ARIA maduras e fluxos operáveis.
3. **Sinergia entre Acessibilidade Técnica e Usabilidade Ergonomizada:** Os problemas detectados pelo WAVE violam diretamente heurísticas universais de usabilidade, demonstrando que falhas de marcação HTML e CSS afetam negativamente a visibilidade do status do sistema, a prevenção de erros operacionais e a eficiência de uso para todos os cidadãos.
