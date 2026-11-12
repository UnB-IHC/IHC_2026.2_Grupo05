# Relatório Técnico de Avaliação de Acessibilidade e Usabilidade Digital

## Portal Meu SUS Digital

| Campo | Descrição |
|---|---|
| **Objeto avaliado** | Portal **Meu SUS Digital** — `https://meususdigital.saude.gov.br` |
| **Destinatário** | Ministério da Saúde e equipe responsável pelo Meu SUS Digital |
| **Elaboração** | Grupo 05 — Interação Humano-Computador (IHC) — Universidade de Brasília (UnB/FCTE) — 2026.2 |
| **Data de emissão** | 11 de novembro de 2026 |
| **Versão** | 1.0 |
| **Abrangência** | 4 telas/fluxos; 7 verificações aplicadas; inspeção automatizada e analítica |
| **Natureza** | Avaliação acadêmica independente, de caráter técnico; **não constitui certificação de conformidade** |
| **Classificação** | Documento técnico de uso institucional |

### Controle de versões

| Versão | Data | Descrição | Responsável |
|:---:|:---:|---|---|
| 1.0 | 11/11/2026 | Consolidação inicial do relatório a partir das evidências do projeto | Grupo 05 |

---

## Sumário

1. [Sumário executivo](#1-sumário-executivo)
2. [Identificação e contexto](#2-identificação-e-contexto)
3. [Objetivos da avaliação](#3-objetivos-da-avaliação)
4. [Escopo e exclusões](#4-escopo-e-exclusões)
5. [Referenciais normativos e metodológicos](#5-referenciais-normativos-e-metodológicos)
6. [Metodologia](#6-metodologia)
7. [Resultados quantitativos](#7-resultados-quantitativos)
8. [Achados detalhados](#8-achados-detalhados)
9. [Matriz de priorização](#9-matriz-de-priorização)
10. [Plano de ação recomendado](#10-plano-de-ação-recomendado)
11. [Indicadores e monitoramento](#11-indicadores-e-monitoramento)
12. [Limitações e ressalvas](#12-limitações-e-ressalvas)
13. [Conclusão e parecer técnico](#13-conclusão-e-parecer-técnico)
14. [Referências](#14-referências)
15. [Anexos](#15-anexos)

---

## 1. Sumário executivo

Este relatório consolida a avaliação de acessibilidade e usabilidade do portal **Meu SUS Digital**, conduzida no âmbito da disciplina de Interação Humano-Computador do Grupo 05 da UnB/FCTE. A análise abrangeu quatro telas representativas da jornada do cidadão: página pública/deslogada, página inicial autenticada, listagem de vacinas em “Minha Saúde” e detalhes do certificado de vacinação.

A avaliação combinou inspeção automatizada com o **WAVE** (*Web Accessibility Evaluation Tool*), verificação por **checklist** baseado na WCAG 2.2, na ABNT NBR 17225:2025 e no Guia de Boas Práticas do Gov.br, e análise ergonômica à luz das **10 Heurísticas de Usabilidade de Nielsen**. Complementarmente, foram utilizados **Percurso Cognitivo** e **Persona** como instrumentos de interpretação da experiência.

### 1.1 Resultado em síntese

| Indicador | Resultado |
|---|---|
| Telas avaliadas | 4 |
| Verificações aplicadas | 7 critérios por tela (28 verificações) |
| Verificações conformes | **5 de 28 (17,9%)** |
| Verificações não conformes | **11 de 28 (39,3%)** |
| Verificações parcialmente conformes ou pendentes de validação | **12 de 28 (42,9%)** |
| Erros WAVE registrados | **38** |
| Erros de contraste registrados | **13** |
| Alertas WAVE registrados | **42 a 49** (variação conforme a tela) |
| AIM Score médio (não ponderado) | **6,9/10** |
| Menor AIM Score | **4,3/10** — página inicial autenticada |
| Maior AIM Score | **9,4/10** — detalhes do documento |

> **Leitura do resultado:** a nota média de 6,9/10 **não representa conformidade**. O AIM Score é um indicador de impacto da ferramenta WAVE e pode coexistir com barreiras relevantes. A avaliação por checklist evidenciou que quase 40% das verificações falharam e outros 43% permanecem parciais ou exigem validação manual.

### 1.2 Principais achados

1. **Imagens sem texto alternativo (C02)** — 33 ocorrências na página inicial autenticada, além de ocorrências nas demais telas. É o achado de maior severidade (**grau 4 — catastrófico**), pois remove conteúdo informativo do acesso por leitores de tela.
2. **Contraste insuficiente na área pública (C01)** — 12 erros de contraste na página deslogada e 1 na tela de vacinas. Compromete a identificação dos serviços disponíveis, sobretudo para pessoas com baixa visão e em uso externo do celular.
3. **Rótulos de formulário sem associação programática (C04)** — 10 alertas distribuídos entre as telas. Campos podem ser anunciados apenas como “campo de texto”, elevando o risco de erro.
4. **Textos excessivamente pequenos (C06)** — 31 alertas nas telas internas, afetando datas de vacinação, nomes de imunizantes e lotes.
5. **Hierarquia de cabeçalhos quebrada (C05)** — salto de `h1` para `h3`/`h4` na página inicial autenticada, prejudicando a navegação por títulos.
6. **Textos alternativos longos (C03)** — 4 alertas na página inicial; impacto menor, porém relevante para a eficiência da leitura assistiva.
7. **Navegação por teclado, foco e ARIA (C07)** — ainda **não validada manualmente**; a ausência de teste não permite declarar conformidade.

### 1.3 Recomendação principal

Recomenda-se tratar os achados de severidade alta (**C02, C01, C04 e C06**) como **prioridade P1**, com correção em até 30 dias, e executar imediatamente o **teste manual de teclado, foco e leitor de tela (C07)**. Sem essas ações, não é tecnicamente sustentável declarar que o portal atende à WCAG 2.2 no nível AA.

---

## 2. Identificação e contexto

### 2.1 Objeto

O **Meu SUS Digital** é um portal governamental de serviços de saúde que permite ao cidadão acessar informações e documentos pessoais de saúde, entre eles o histórico de vacinação e o Certificado Nacional de Vacinação. O acesso a funcionalidades autenticadas ocorre por meio da conta **Gov.br**.

A avaliação considerou a experiência em duas condições distintas:

- **Ambiente público (pré-login):** apresentação do serviço, acesso à autenticação e atalhos de utilidade pública;
- **Ambiente autenticado (pós-login):** painel inicial, navegação em “Minha Saúde”, listagem de vacinas e detalhes do documento.

### 2.2 Contexto de acessibilidade

A acessibilidade digital é condição para o exercício autônomo do direito à saúde e para a efetividade dos serviços públicos digitais. No Brasil, a **Lei nº 13.146/2015 — Lei Brasileira de Inclusão da Pessoa com Deficiência** estabelece o direito à acessibilidade, e o **eMAG — Modelo de Acessibilidade em Governo Eletrônico** orienta a implementação em portais da administração pública federal [5][6].

A norma **ABNT NBR 17225:2025** estabelece requisitos de acessibilidade para conteúdo e aplicações web [3], enquanto a **WCAG 2.2**, do W3C, organiza os critérios de sucesso nos níveis A, AA e AAA [1]. Para serviços públicos, o nível **AA** é o parâmetro usualmente adotado como meta de conformidade.

Além da dimensão normativa, a avaliação considerou a dimensão ergonômica: uma interface pode cumprir requisitos técnicos e ainda assim apresentar carga cognitiva excessiva, feedback insuficiente ou padrões inconsistentes. Por isso, os achados foram cruzados com as **10 Heurísticas de Nielsen** [10][11].

### 2.3 Equipe de avaliação

| Integrante | GitHub |
|---|---|
| Davi Barbosa Alves | `@Raglig` |
| Rafael Silva Wasconcelos | `@Rafaelwasconcelos` |
| Felype Gomes Ribeiro Carrijo | `@Flyxs` |
| Gustavo Rodrigues de Noronha | `@gustavuh7` |
| Pedro Henrique Inácio dos Santos | `@pedrossantoss` |
| Victor Alexim Amaral | `@valexim` |
| Renan Curione de Castro | `@thatsrenan` |
| Guilherme Lorenzi Ventura | `@GuiVentura1510` |

A avaliação foi realizada em contexto acadêmico, sem vínculo contratual ou hierárquico com o Ministério da Saúde. O documento tem por finalidade demonstrar método, registrar evidências e propor correções verificáveis.

---

## 3. Objetivos da avaliação

### 3.1 Objetivo geral

Avaliar a acessibilidade e a usabilidade do portal Meu SUS Digital em fluxos essenciais ao cidadão, identificando barreiras observáveis, sua relação com critérios normativos e heurísticas de usabilidade, e propondo um plano de correção priorizado.

### 3.2 Objetivos específicos

1. Registrar evidências de acessibilidade nas quatro telas selecionadas;
2. Classificar a conformidade de cada verificação como conforme, parcialmente conforme, não conforme ou não aplicável;
3. Relacionar cada achado aos critérios da WCAG 2.2 e às heurísticas de Nielsen;
4. Estimar a severidade dos problemas e o impacto sobre diferentes perfis de usuários;
5. Propor recomendações técnicas e de conteúdo verificáveis;
6. Definir prioridades, prazos e indicadores de acompanhamento;
7. Explicitar as limitações da avaliação para evitar conclusões indevidas de conformidade.

---

## 4. Escopo e exclusões

### 4.1 Escopo incluído

| # | Tela ou fluxo | Condição de acesso | Foco da avaliação |
|:---:|---|---|---|
| 1 | Página inicial pública / deslogada | Sem autenticação | Contraste, texto alternativo, estrutura, acesso ao Gov.br |
| 2 | Página inicial autenticada / painel | Após login Gov.br | Imagens, cabeçalhos, conteúdo e atalhos |
| 3 | Minha Saúde / listagem de vacinas | Autenticado | Contraste, rótulos, tipografia, estrutura |
| 4 | Detalhes do documento / certificado de vacinação | Autenticado | Rótulos, tipografia, estrutura e leitura do certificado |

### 4.2 Exclusões

- Aplicativo móvel nativo do Meu SUS Digital;
- Fluxo completo de autenticação e cadastro no Gov.br, por pertencer a domínio externo;
- Conteúdo de PDFs e documentos gerados para download, salvo quando mencionados nas telas;
- Testes com usuários reais e com tecnologias assistivas em sessão formal;
- Avaliação de desempenho, segurança da informação, privacidade e disponibilidade;
- Verificação de todos os critérios da WCAG 2.2 — a avaliação utilizou um recorte de 7 verificações;
- Conteúdo dinâmico que exija interação não capturada nas evidências disponíveis.

### 4.3 Unidade de análise

A unidade de análise é a **tela renderizada** no navegador, com inspeção do DOM e da apresentação visual. Os resultados se referem ao estado observado no momento da coleta registrada pelo grupo. Como a data, a versão do navegador e a versão da extensão WAVE não estão documentadas nos arquivos-fonte, os resultados não devem ser tratados como medição histórica reproduzível sem nova coleta.

---

## 5. Referenciais normativos e metodológicos

| Referencial | Tipo | Aplicação neste relatório |
|---|---|---|
| **WCAG 2.2 — níveis A e AA** | Diretriz internacional (W3C) | Critérios de sucesso utilizados na classificação dos achados [1][2] |
| **ABNT NBR 17225:2025** | Norma brasileira | Requisitos de acessibilidade em conteúdo e aplicações web [3] |
| **ABNT NBR 17060:2022** | Norma brasileira | Referência complementar para acessibilidade mobile [4] |
| **eMAG** | Modelo federal brasileiro | Parâmetro de acessibilidade para portais do governo [6] |
| **Guia de Boas Práticas para Acessibilidade Digital (Gov.br)** | Guia público | Recomendações práticas de acessibilidade [7] |
| **Lei nº 13.146/2015 — Lei Brasileira de Inclusão** | Legislação | Fundamento legal do direito à acessibilidade [5] |
| **ISO 9241-11:2018** | Norma internacional | Definição de usabilidade: eficácia, eficiência e satisfação [8] |
| **ISO 9241-210:2019** | Norma internacional | Conceito de experiência do usuário [9] |
| **10 Heurísticas de Nielsen** | Método de inspeção | Análise ergonômica dos achados [10][11] |
| **Percurso Cognitivo** | Método de inspeção | Simulação da aprendizagem da tarefa pelo usuário [12] |
| **Persona** | Técnica de IHC | Representação do perfil de usuário para orientar a análise [13][14] |

### 5.1 Critérios WCAG diretamente mobilizados

| Critério | Nome | Nível | Achados relacionados |
|---|---|:---:|---|
| **1.1.1** | Conteúdo não textual | A | C02, C03 |
| **1.3.1** | Informações e relações | A | C04, C05 |
| **1.4.3** | Contraste mínimo | AA | C01 |
| **1.4.4** | Redimensionamento de texto | AA | C06 |
| **2.1.1** | Teclado | A | C07 |
| **2.4.6** | Títulos e rótulos | AA | C05 |
| **2.4.7** | Foco visível | AA | C07 |
| **3.3.2** | Rótulos ou instruções | A | C04 |
| **4.1.2** | Nome, função e valor | A | C07 |

> A referência completa dos critérios, incluindo técnicas suficientes e casos de falha, está disponível no documento oficial da WCAG 2.2 e nos guias de entendimento do W3C [1][2].

---

## 6. Metodologia

### 6.1 Desenho da avaliação

A avaliação adotou abordagem **mista de inspeção**, combinando:

1. **Análise automatizada** com WAVE;
2. **Verificação por checklist** de 7 critérios aplicados a 4 telas;
3. **Avaliação heurística** com as 10 heurísticas de Nielsen;
4. **Percurso cognitivo** sobre a tarefa “obter o certificado de vacinação COVID-19 pelo celular”;
5. **Persona de referência** como instrumento de contextualização;
6. **Análise documental** dos artefatos do projeto.

### 6.2 WAVE

O WAVE inspeciona a árvore DOM da página renderizada e classifica as ocorrências em:

- **Erros:** violações graves que bloqueiam ou dificultam o uso por tecnologias assistivas;
- **Erros de contraste:** razão de contraste abaixo do limiar normativo;
- **Alertas:** ocorrências que exigem validação humana;
- **Recursos:** boas práticas identificadas;
- **Estrutura:** hierarquia de títulos e regiões;
- **ARIA:** presença e integridade de atributos WAI-ARIA.

O **AIM Score** (*Accessibility Impact Metric*) é uma pontuação de 0 a 10 apresentada pela ferramenta. Ele resume o impacto potencial das ocorrências, mas **não é uma medida de conformidade** e não substitui a verificação critério a critério [15].

### 6.3 Checklist aplicado

O instrumento utilizado contém 7 verificações:

| ID | Verificação |
|---|---|
| C01 | Texto e controles possuem contraste suficiente |
| C02 | Imagens informativas possuem texto alternativo adequado |
| C03 | Textos alternativos são objetivos e não excessivos |
| C04 | Campos e controles possuem rótulos programáticos |
| C05 | A hierarquia de cabeçalhos e a estrutura são lógicas |
| C06 | Textos permanecem legíveis em tamanho e ampliação |
| C07 | Navegação por teclado, foco e componentes interativos |

Cada verificação foi classificada como:

- ✅ **Conforme**;
- ⚠️ **Parcialmente conforme / necessita validação**;
- ❌ **Não conforme**;
- ➖ **Não aplicável**.

O checklist de referência do projeto possui **34 critérios** distribuídos em gestão, desenvolvimento, design, conteúdo e verificação. A aplicação de 7 verificações é, portanto, um **recorte**, e não uma auditoria completa [18].

### 6.4 Avaliação heurística

Os achados foram confrontados com as 10 heurísticas de Nielsen [10]:

1. Visibilidade do estado do sistema;
2. Correspondência entre o sistema e o mundo real;
3. Controle e liberdade do usuário;
4. Consistência e padrões;
5. Prevenção de erros;
6. Reconhecimento em vez de memorização;
7. Flexibilidade e eficiência de uso;
8. Estética e design minimalista;
9. Ajuda para reconhecer, diagnosticar e recuperar erros;
10. Ajuda e documentação.

A severidade foi estimada conforme a escala de Nielsen [14]:

| Grau | Classificação | Interpretação |
|:---:|---|---|
| 0 | Não é problema | Não há consenso de que seja um problema |
| 1 | Cosmético | Correção apenas se houver tempo |
| 2 | Pequeno | Correção de baixa prioridade |
| 3 | Grande | Correção importante e prioritária |
| 4 | Catastrófico | Correção obrigatória antes de nova publicação |

> **Ressalva:** a severidade foi proposta pela equipe e deve ser consolidada por, no mínimo, três avaliadores independentes, conforme recomendação de Nielsen [14]. A avaliação não contou com testes empíricos com pessoas com deficiência.

### 6.5 Percurso cognitivo

O Percurso Cognitivo foi aplicado à tarefa **“obter o certificado de vacinação COVID-19 pelo celular”**, com cinco passos: localizar a entrada, autenticar no Gov.br, encontrar “Minha Saúde”, selecionar a vacina e abrir/baixar o certificado. Para cada passo, responderam-se às quatro perguntas clássicas [12]:

| Pergunta | Verificação |
|---|---|
| P1 | O usuário tentará atingir o efeito correto? |
| P2 | O usuário perceberá que a ação correta está disponível? |
| P3 | O usuário associará a ação ao efeito desejado? |
| P4 | O usuário perceberá que está progredindo? |

O resultado é uma **simulação analítica**, não um teste com usuários. As respostas marcadas como incertas dependem da validação manual prevista em C07.

### 6.6 Controle de qualidade e rastreabilidade

Cada achado foi registrado com:

- identificador e descrição;
- tela(s) afetada(s);
- evidência quantitativa do WAVE;
- critério WCAG correspondente;
- heurística(s) de Nielsen violada(s);
- impacto sobre o usuário;
- recomendação técnica;
- critério de aceite sugerido.

As evidências visuais estão reunidas no **Anexo C**. A rastreabilidade entre documentos analisados e conteúdo utilizado está no **Anexo A**.

---

## 7. Resultados quantitativos

### 7.1 Dados brutos do WAVE

| Indicador WAVE | Página pública (deslogada) | Página inicial autenticada | Minha Saúde / Vacinas | Detalhes do documento |
|:---|:---:|:---:|:---:|:---:|
| **AIM Score** | **5,8/10** | **4,3/10** | **8,2 a 8,3/10** | **9,4/10** |
| **Erros** | 1 | 33 | 2 | 2 |
| **Erros de contraste** | 12 | 0 | 1 | 0 |
| **Alertas** | 2 | 17 | 7 a 14 | 16 |
| **Recursos** | 2 | 5 | 3 | 4 |
| **Elementos estruturais** | 3 | 16 | 4 | 6 |
| **Atributos ARIA** | 11 | 28 | 21 a 22 | 31 |

**Fonte:** `docs/avaliacao/introducao.md` e `docs/avaliacao/checklistmeusus.md`.

### 7.2 Indicadores derivados

| Indicador | Cálculo | Resultado |
|---|---|---|
| Média aritmética simples do AIM Score | (5,8 + 4,3 + 8,25 + 9,4) ÷ 4 | **6,9/10** |
| Amplitude do AIM Score | 9,4 − 4,3 | **5,1 pontos** |
| Total de erros WAVE | 1 + 33 + 2 + 2 | **38** |
| Total de erros de contraste | 12 + 0 + 1 + 0 | **13** |
| Total de alertas | 2 + 17 + (7 a 14) + 16 | **42 a 49** |
| Concentração dos erros na home autenticada | 33 ÷ 38 | **86,8%** |
| Concentração dos erros de contraste na página pública | 12 ÷ 13 | **92,3%** |
| Verificações conformes | 5 ÷ 28 | **17,9%** |
| Verificações não conformes | 11 ÷ 28 | **39,3%** |
| Verificações parciais ou pendentes | 12 ÷ 28 | **42,9%** |

### 7.3 Distribuição do checklist por tela

| Tela | ✅ Conforme | ❌ Não conforme | ⚠️ Parcial / validar | Total |
|:---|:---:|:---:|:---:|:---:|
| Página pública | 1 | 2 | 4 | 7 |
| Página inicial autenticada | 1 | 3 | 3 | 7 |
| Minha Saúde / Vacinas | 1 | 3 | 3 | 7 |
| Detalhes do documento | 2 | 3 | 2 | 7 |
| **Total** | **5** | **11** | **12** | **28** |

### 7.4 Interpretação

Os dados revelam três fenômenos distintos:

1. **A página pública tem problema concentrado de contraste.** São 12 dos 13 erros de contraste do escopo, o que explica o AIM Score de 5,8 apesar de haver apenas 1 erro de outra natureza.
2. **A página inicial autenticada tem problema sistêmico de texto alternativo.** São 33 dos 38 erros, resultando no pior AIM Score (4,3) e no maior número de elementos estruturais (16) e ARIA (28).
3. **As telas internas têm boa base semântica, mas falham em legibilidade e rótulos.** Vacinas e Detalhes alcançam 8,2–9,4, porém mantêm erros de contraste, rótulos órfãos, textos pequenos e hierarquia parcial. Isso demonstra que **nota alta de ferramenta não equivale a conformidade**.

---

## 8. Achados detalhados

### 8.1 Quadro-resumo dos achados

| ID | Achado | Evidência WAVE | Telas afetadas | WCAG | Nielsen | Severidade |
|:---:|---|---|---|---|:---:|:---:|
| **C01** | Contraste insuficiente | 12 erros na pública; 1 em Vacinas | Pública, Vacinas | 1.4.3 (AA) | #1, #7, #8 | **3** |
| **C02** | Imagens sem texto alternativo | 1 na pública; 33 na home; 2 em cada tela interna | Todas | 1.1.1 (A) | #1, #6 | **4** |
| **C03** | Texto alternativo excessivamente longo | 4 alertas na home | Home | 1.1.1 (A) | #7, #8 | **1** |
| **C04** | Rótulos de formulário órfãos | 2 pública; 2 home; 2 Vacinas; 4 Detalhes | Todas | 1.3.1 e 3.3.2 (A) | #5, #6 | **3** |
| **C05** | Hierarquia de cabeçalhos quebrada | 1 alerta na home; estrutura limitada na pública | Home, demais telas | 1.3.1 (A), 2.4.6 (AA) | #2, #4 | **2** |
| **C06** | Texto excessivamente pequeno | 10 home; até 9 Vacinas; 12 Detalhes | Todas as internas | 1.4.4 (AA) | #6, #8 | **3** |
| **C07** | Teclado, foco e ARIA não validados | Estrutura ARIA e alertas, sem sessão manual | Todas | 2.1.1, 2.4.7, 4.1.2 | #3, #5, #7 | **A definir** |

---

### C01 — Contraste insuficiente na área pública

**Classificação no checklist:** ❌ Não conforme na página pública e em Vacinas; ✅ conforme na home e em Detalhes.

**Evidência:** a página inicial pública apresentou **12 erros severos de contraste**. Os rótulos dos serviços posicionados abaixo dos ícones — como “Conteúdos”, “Rede de Saúde”, “Valida Certidão”, “Calendário Nacional de Vacinação”, “Fale com o Meu SUS Digital”, “Sobre o SUS” e “Termos de Utilização” — aparecem sobre uma imagem fotográfica azulada com máscara translúcida. Na tela de Vacinas, foi registrado **1 erro de contraste**.

**Critério WCAG:** **1.4.3 — Contraste Mínimo (AA)**. Textos em tamanho normal devem atingir razão mínima de **4,5:1**; textos grandes, **3:1** [1][2].

**Heurísticas de Nielsen violadas:**

- **#1 — Visibilidade do estado do sistema:** os atalhos e serviços disponíveis não são perceptíveis de imediato;
- **#7 — Flexibilidade e eficiência de uso:** a leitura exige esforço visual excessivo, sobretudo sob luz solar;
- **#8 — Estética e design minimalista:** o fundo fotográfico compete com a tipografia e gera ruído visual.

**Impacto:** pessoas com baixa visão, daltonismo, idosos e usuários em ambientes muito iluminados podem não identificar os serviços disponíveis antes da autenticação.

**Recomendação:**

- aplicar superfície sólida ou sobreposição escura sob os rótulos;
- validar a razão de contraste com ferramenta específica;
- preservar a legibilidade em diferentes tamanhos de tela e no modo de alto contraste;
- não depender exclusivamente da imagem de fundo para transmitir informação.

**Critério de aceite:**

- nenhum erro de contraste no WAVE;
- razão ≥ 4,5:1 para texto normal e ≥ 3:1 para texto grande;
- leitura preservada com zoom de 200%.

---

### C02 — Imagens sem texto alternativo

**Classificação no checklist:** ❌ Não conforme em todas as telas.

**Evidência:** **1 erro** na página pública, **33 erros** na página inicial autenticada e **2 erros em cada tela interna** (Vacinas e Detalhes), conforme a tabela quantitativa. As ocorrências incluem ilustrações de campanhas, cabeçalhos e ícones da barra superior.

**Critério WCAG:** **1.1.1 — Conteúdo Não Textual (A)**. Todo conteúdo não textual que transmita informação deve ter alternativa textual equivalente; conteúdo decorativo deve ser ignorado pela tecnologia assistiva [1][2].

**Heurísticas de Nielsen violadas:**

- **#1 — Visibilidade do estado do sistema:** informações de campanhas e atalhos não são anunciadas;
- **#6 — Reconhecimento em vez de memorização:** o usuário precisa adivinhar o destino de links e botões associados a imagens.

**Impacto:** pessoas que usam leitores de tela (NVDA, JAWS, TalkBack, VoiceOver) deixam de receber informações de campanhas, saúde da mulher, saúde mental e vacinação. Em alguns casos, o leitor anuncia apenas o nome do arquivo ou permanece em silêncio.

**Recomendação:**

```html
<!-- Imagem informativa: descrever o propósito, não a estética -->
<img src="campanha_saude_mental.png"
     alt="Campanha de saúde mental para mulheres: atendimento especializado na rede pública">

<!-- Imagem decorativa: remover da árvore de acessibilidade -->
<img src="divisor_grafico.png" alt="" aria-hidden="true">

<!-- Ícone funcional: nome acessível no controle -->
<button type="button" aria-label="Baixar certificado de vacinação em PDF">
  <svg aria-hidden="true" focusable="false"><!-- ícone --></svg>
</button>
```

**Critério de aceite:**

- zero ocorrências de “missing alternative text” no WAVE;
- 100% das imagens informativas com `alt` objetivo;
- imagens decorativas com `alt=""` e, quando aplicável, `aria-hidden="true"`;
- ícones funcionais com `aria-label` ou texto visível.

---

### C03 — Textos alternativos excessivamente longos

**Classificação no checklist:** ✅ Conforme na pública, Vacinas e Detalhes; ⚠️ parcial na home.

**Evidência:** **4 alertas** na página inicial autenticada. Os textos descrevem minuciosamente características cênicas das fotografias, como “Mulher jovem apoiada sobre os ombros de uma mulher idosa, ambas de perfil, em imagem em preto e branco”.

**Critério WCAG:** **1.1.1 — Conteúdo Não Textual (A)**. A alternativa deve ser equivalente ao propósito da imagem, não uma descrição artística exaustiva [1][2].

**Heurísticas de Nielsen violadas:**

- **#7 — Flexibilidade e eficiência de uso:** a leitura linear se torna mais lenta;
- **#8 — Estética e design minimalista:** informação irrelevante compete com a informação essencial.

**Impacto:** a navegação por leitor de tela fica cansativa, especialmente para quem busca um documento de saúde e precisa atravessar descrições longas antes de chegar à ação.

**Recomendação:**

- manter no `alt` apenas o significado necessário para a ação ou compreensão;
- quando a descrição detalhada for indispensável, disponibilizá-la no conteúdo da página ou por `aria-describedby`;
- revisar o texto com a equipe de conteúdo, não apenas com a equipe de desenvolvimento.

**Critério de aceite:**

- textos alternativos concisos e orientados à finalidade;
- descrições longas disponíveis fora do fluxo principal de leitura;
- validação manual por amostragem.

---

### C04 — Rótulos de formulário sem associação programática

**Classificação no checklist:** ⚠️ parcial na pública, home e Vacinas; ❌ não conforme em Detalhes.

**Evidência:** **2 alertas** na página pública, **2** na página inicial, **2** em Vacinas e **4** em Detalhes do Documento, totalizando **10 alertas** de rótulos órfãos.

**Critérios WCAG:** **1.3.1 — Informações e Relações (A)** e **3.3.2 — Rótulos ou Instruções (A)** [1][2].

**Heurísticas de Nielsen violadas:**

- **#5 — Prevenção de erros:** sem rótulo, o usuário não sabe qual dado inserir;
- **#6 — Reconhecimento em vez de memorização:** a finalidade do campo precisa ser deduzida de fragmentos ao redor.

**Impacto:** leitores de tela podem anunciar apenas “campo de texto”, sem informar o dado esperado. Isso aumenta erros no acesso, na consulta e no download de informações de saúde.

**Recomendação:**

```html
<label for="campo-busca-sus">Buscar serviço ou conteúdo</label>
<input type="text" id="campo-busca-sus" name="busca" autocomplete="off">

<!-- Grupos de campos -->
<fieldset>
  <legend>Dados do titular</legend>
  <!-- campos -->
</fieldset>
```

Para mensagens de erro e instruções:

```html
<input id="cns" aria-describedby="ajuda-cns erro-cns" aria-invalid="true">
<p id="ajuda-cns">Informe os 15 dígitos do Cartão Nacional de Saúde.</p>
<p id="erro-cns" role="alert">O CNS deve conter exatamente 15 números.</p>
```

**Critério de aceite:**

- zero alertas de rótulo órfão;
- todo campo com `<label for>` e `id` correspondentes;
- instruções, obrigatoriedade e erros associados programaticamente;
- leitura do formulário validada com leitor de tela.

---

### C05 — Hierarquia de cabeçalhos quebrada

**Classificação no checklist:** ⚠️ parcial na pública, Vacinas e Detalhes; ❌ não conforme na home autenticada.

**Evidência:** na página inicial autenticada foi observado salto de `h1` para `h3` e `h4`, sem o nível `h2`. A página pública apresenta estrutura semântica limitada, com apenas 1 `h1` e 3 elementos de estrutura.

**Critérios WCAG:** **1.3.1 — Informações e Relações (A)** e **2.4.6 — Títulos e Rótulos (AA)** [1][2].

**Heurísticas de Nielsen violadas:**

- **#2 — Correspondência entre o sistema e o mundo real:** a organização digital não segue a lógica de capítulos e subseções;
- **#4 — Consistência e padrões:** a quebra do padrão de navegação por títulos desorienta.

**Impacto:** quem navega por títulos com leitor de tela perde o mapa mental do documento e tem dificuldade para localizar seções.

**Recomendação:**

- um único `h1` por tela, com o título principal;
- `h2` para seções funcionais (“Serviços Rápidos”, “Conteúdos em Destaque”, “Histórico de Vacinação”);
- `h3` para cartões, módulos e itens subordinados;
- ajustar a aparência visual com CSS, nunca com saltos de nível.

**Critério de aceite:**

- nenhum salto de nível;
- um `h1` por página;
- estrutura consistente entre telas;
- navegação por títulos validada com leitor de tela.

---

### C06 — Textos e dados de saúde excessivamente pequenos

**Classificação no checklist:** ⚠️ parcial na pública; ❌ não conforme na home, Vacinas e Detalhes.

**Evidência:** **10 alertas** na home autenticada, até **9** em Vacinas e **12** em Detalhes do Documento. O problema afeta datas de imunização, nomes técnicos de vacinas e números de lote.

**Critério WCAG:** **1.4.4 — Redimensionamento de Texto (AA)**. O texto deve poder ser ampliado em até 200% sem perda de conteúdo ou funcionalidade [1][2].

**Heurísticas de Nielsen violadas:**

- **#6 — Reconhecimento em vez de memorização:** datas e lotes precisam ser decifrados com esforço;
- **#8 — Estética e design minimalista:** a compactação excessiva prejudica a hierarquia e a legibilidade.

**Impacto:** idosos e pessoas com baixa visão podem não conseguir conferir datas, reforços e lotes, comprometendo a compreensão do histórico vacinal.

**Recomendação:**

- usar unidades relativas (`rem`) e definir um piso tipográfico;
- adotar corpo de texto de **16 px** e textos secundários com no mínimo **12 a 14 px**;
- evitar alturas fixas que cortem conteúdo ampliado;
- testar com zoom de 200% e com configurações de fonte do sistema.

**Critério de aceite:**

- nenhum alerta de “very small text”;
- conteúdo legível com zoom de 200%;
- ausência de rolagem horizontal e de sobreposição;
- datas, lotes e nomes de vacinas legíveis sem ampliação extrema.

---

### C07 — Navegação por teclado, foco e componentes interativos

**Classificação no checklist:** ⚠️ necessita validação manual em todas as telas.

**Evidência:** os documentos registram estrutura ARIA e alertas do WAVE, mas não há registro de sessão completa utilizando apenas teclado ou leitor de tela. Portanto, **não é correto declarar conformidade** com base apenas no resultado automatizado.

**Critérios WCAG:** **2.1.1 — Teclado (A)**, **2.4.7 — Foco Visível (AA)** e **4.1.2 — Nome, Função e Valor (A)** [1][2].

**Heurísticas de Nielsen potencialmente afetadas:**

- **#3 — Controle e liberdade do usuário:** fechamento de modais e retorno de foco;
- **#5 — Prevenção de erros:** acionamento de controles sem informação adequada;
- **#7 — Flexibilidade e eficiência de uso:** atalhos e navegação eficiente.

**Impacto potencial:** pessoas com deficiência motora ou visual podem não conseguir abrir menus, acionar botões, preencher campos ou compreender o estado de um componente.

**Protocolo de teste recomendado:**

1. Percorrer cada fluxo somente com `Tab`, `Shift+Tab`, `Enter`, `Espaço`, `Esc` e setas;
2. Registrar a ordem do foco e verificar se ela acompanha a ordem visual;
3. Confirmar a visibilidade do foco em todos os elementos interativos;
4. Verificar armadilhas de teclado em modais, menus e campos;
5. Confirmar o retorno do foco ao elemento que abriu o modal;
6. Repetir com **NVDA** (desktop) e **TalkBack** (mobile);
7. Testar zoom de 200% a 400%;
8. Registrar nome, função, valor e estado anunciados por componente.

**Critério de aceite:**

- 100% dos fluxos críticos operáveis por teclado;
- foco visível e ordem lógica;
- nenhuma armadilha de teclado;
- componentes customizados com nome, função e valor corretos;
- resultados registrados em relatório de teste manual.

---

## 9. Matriz de priorização

A priorização combina **severidade**, **abrangência** e **esforço estimado**. Prazos são contados a partir da aprovação deste relatório.

| Prioridade | Achados | Justificativa | Prazo | Critério de saída |
|:---:|---|---|:---:|---|
| **P1 — Crítica** | C02, C01, C04, C06 | Barreiras que impedem ou dificultam o acesso à informação e a conclusão de tarefas; alta abrangência | **30 dias** | Zero erros críticos de alt e contraste; rótulos associados; texto legível em 200% |
| **P1 — Validação** | C07 | Sem teste manual não é possível afirmar conformidade | **30 dias** | Relatório de teclado e leitor de tela concluído |
| **P2 — Alta** | C05 | Prejudica navegação assistiva, mas com menor impacto imediato que C02/C04 | **60 a 90 dias** | Hierarquia corrigida em todas as telas |
| **P3 — Média** | C03 | Impacto cosmético e de eficiência; correção simples | **90 dias** | Textos alternativos revisados e concisos |
| **P3 — Governança** | Monitoramento e documentação | Sustenta a conformidade ao longo do tempo | **90 a 180 dias** | Processo contínuo implantado |

### 9.1 Matriz esforço × impacto

|  | **Baixo esforço** | **Médio/alto esforço** |
|---|---|---|
| **Alto impacto** | C02 (alt), C04 (rótulos), C01 (contraste), C06 (tipografia) | Testes manuais com usuários e tecnologias assistivas |
| **Médio/baixo impacto** | C03 (alt longo), C05 (hierarquia) | Reestruturação ampla de componentes e design system |

> **Observação:** a maior parte dos achados é de correção simples em HTML e CSS, com alto retorno para a experiência do cidadão. Isso reforça a viabilidade de um ciclo curto de correção antes de uma nova auditoria.

---

## 10. Plano de ação recomendado

| # | Ação | Achado | Responsável sugerido | Prazo | Evidência de conclusão |
|:---:|---|---|---|---|:---:|
| A01 | Corrigir textos alternativos de imagens informativas e decorativas | C02 | Front-end + Conteúdo | 30 dias | WAVE sem “missing alt”; amostragem manual |
| A02 | Aplicar superfícies de alto contraste nos rótulos da área pública e em Vacinas | C01 | Design + Front-end | 30 dias | Contraste ≥ 4,5:1 validado |
| A03 | Associar rótulos, instruções e erros aos campos | C04 | Front-end | 30 dias | Zero rótulos órfãos; teste com leitor de tela |
| A04 | Revisar escala tipográfica e adotar unidades relativas | C06 | Design + Front-end | 30 dias | Texto ≥ 12 px; zoom 200% sem perda |
| A05 | Reorganizar a hierarquia de títulos | C05 | Front-end + Conteúdo | 60 dias | Nenhum salto de nível; um `h1` por tela |
| A06 | Executar teste manual de teclado, foco e leitor de tela | C07 | QA/Acessibilidade | 30 dias | Relatório de teste com evidências |
| A07 | Revisar textos alternativos longos | C03 | Conteúdo | 90 dias | `alt` conciso; descrição longa fora do fluxo |
| A08 | Inserir validações automáticas no pipeline | Prevenção | DevOps + Front-end | 90 dias | axe/Lighthouse no CI; bloqueio de regressões |
| A09 | Realizar testes com pessoas com deficiência | Validação empírica | UX + Gestão | 120 dias | Relatório de sessões e plano de ajustes |
| A10 | Instituir canal de feedback e ciclo de auditoria | Governança | Gestão do produto | 180 dias | Processo documentado e indicadores ativos |
| A11 | Completar a documentação de suporte do projeto | Qualidade do artefato | Grupo 05 | 30 dias | Persona e páginas de checklist preenchidas |

### 10.1 Critérios de aceite globais

A correção somente deve ser considerada concluída quando:

1. Não houver erros críticos de acessibilidade no WAVE;
2. Os critérios 1.1.1, 1.3.1, 1.4.3, 1.4.4, 2.1.1, 2.4.6, 2.4.7, 3.3.2 e 4.1.2 estiverem verificados com evidência;
3. Os fluxos críticos forem operáveis apenas por teclado;
4. Os fluxos críticos forem compreensíveis com leitor de tela;
5. O conteúdo permanecer utilizável com zoom de 200%;
6. Houver teste com pelo menos um usuário com deficiência;
7. Os resultados forem registrados e rastreáveis.

---

## 11. Indicadores e monitoramento

### 11.1 Indicadores de saída

| Indicador | Meta | Fonte | Frequência |
|---|---:|---|---|
| Erros críticos WAVE | 0 | WAVE | A cada release |
| Erros de contraste | 0 | WAVE + validador de contraste | A cada release |
| Imagens informativas com `alt` | 100% | WAVE + inspeção manual | A cada release |
| Campos com rótulo programático | 100% | WAVE + teste com leitor de tela | A cada release |
| Saltos na hierarquia de títulos | 0 | WAVE + inspeção | A cada release |
| Textos abaixo de 12 px | 0 | Inspeção + Lighthouse | Mensal |
| Fluxos críticos operáveis por teclado | 100% | Teste manual | Trimestral |
| Conformidade no checklist aplicado | ≥ 90% | Checklist | Trimestral |
| Sessões de teste com usuários com deficiência | ≥ 1 por ciclo | Relatório de teste | Semestral |
| AIM Score | Monitorar tendência | WAVE | Mensal |

> **Alerta metodológico:** o AIM Score deve ser usado como **indicador de acompanhamento**, nunca como meta isolada ou prova de conformidade. A meta principal é a eliminação de barreiras verificadas por critério.

### 11.2 Ciclo de governança

| Cadência | Atividade | Responsável |
|---|---|---|
| A cada pull request | Validação automatizada de acessibilidade | Desenvolvimento |
| Mensal | Revisão de indicadores e regressões | QA/Acessibilidade |
| Trimestral | Auditoria por checklist e teste de teclado | QA + UX |
| Semestral | Teste com usuários com deficiência | UX + Gestão |
| Anual | Revisão do plano e atualização normativa | Governança |

---

## 12. Limitações e ressalvas

Este relatório deve ser lido com as seguintes ressalvas:

1. **Não houve nova coleta no portal.** O documento consolida evidências já registradas nos arquivos do projeto; a data, o navegador e a versão da extensão WAVE não estão documentados.
2. **A avaliação não é uma auditoria completa.** Foram aplicadas 7 verificações, enquanto o checklist de referência possui 34 critérios. A cobertura é parcial e não permite declarar conformidade integral com a WCAG 2.2.
3. **O WAVE cobre apenas parte das barreiras.** Validadores automatizados identificam uma fração dos problemas; a própria documentação do projeto estima cobertura de 30% a 40% [18].
4. **Não houve teste manual completo com teclado, zoom e leitor de tela.** O item C07 permanece pendente e pode revelar barreiras não capturadas.
5. **Não houve teste com usuários reais.** A persona e o percurso cognitivo são instrumentos analíticos, não evidência empírica.
6. **A persona de referência está incompleta.** O arquivo `docs/avaliacao/persona.md` contém campos genéricos (“XX anos”, “Profissão”, “Cidade – UF”), o que fragiliza a simulação cognitiva e deve ser corrigido antes de novas avaliações.
7. **Há inconsistências nos dados-fonte.** O texto do relatório menciona “2 erros” nas telas internas, enquanto a tabela quantitativa registra 2 erros em Vacinas e 2 em Detalhes. Este relatório adotou a tabela quantitativa e sinaliza a divergência para conferência.
8. **Variações de escopo e de ambiente.** Telas autenticadas podem mudar conforme perfil, data e dados do usuário; a autenticação ocorre em domínio externo (Gov.br), fora do controle direto do portal.
9. **O AIM Score não é comparável sem controle de versão.** Mudanças na ferramenta, no navegador ou no conteúdo podem alterar a pontuação sem relação direta com a conformidade.
10. **A severidade é uma proposta da equipe.** Deve ser consolidada por pelo menos três avaliadores independentes, conforme recomendação de Nielsen [14].
11. **A documentação do projeto tem lacunas.** Páginas de checklist e de persona estão em estado de modelo, o que limita a reprodutibilidade de parte da análise (ver Anexo D).
12. **Não há declaração de acessibilidade do portal analisada neste escopo.** A existência de declaração institucional, canal de contato e mecanismo de feedback não foi verificada.

---

## 13. Conclusão e parecer técnico

### 13.1 Síntese

A avaliação identificou **conformidade parcial** do Meu SUS Digital em relação aos critérios verificados. Os resultados não sustentam a afirmação de que o portal atende integralmente à WCAG 2.2 no nível AA. Ao mesmo tempo, os achados são, em sua maioria, corrigíveis com intervenções objetivas de HTML, CSS e conteúdo, o que torna viável um ciclo curto de melhorias.

### 13.2 Parecer

> **Parecer técnico:** o Meu SUS Digital apresenta **barreiras de acessibilidade relevantes** nas quatro telas avaliadas, com destaque para a ausência de texto alternativo em imagens, o contraste insuficiente na área pública, a falta de associação programática de rótulos e a tipografia reduzida. Recomenda-se **não declarar conformidade com a WCAG 2.2 AA** até que os achados P1 sejam corrigidos e o teste manual de teclado, foco e leitor de tela seja concluído. A situação é **prioritária**, mas **tecnicamente reversível** em curto prazo.

### 13.3 Recomendações finais

1. Corrigir imediatamente os achados **C02, C01, C04 e C06**;
2. Executar o protocolo de teste manual de **C07** e registrar evidências;
3. Corrigir a hierarquia de títulos (**C05**) e revisar os textos alternativos longos (**C03**);
4. Instituir validação automatizada no pipeline e auditoria periódica;
5. Realizar testes com pessoas com deficiência antes de nova declaração de conformidade;
6. Completar a documentação de suporte do projeto, especialmente a persona;
7. Reavaliar o portal após 90 dias e emitir novo parecer com base em evidências atualizadas.

### 13.4 Próxima revisão

| Item | Definição |
|---|---|
| Prazo sugerido | 90 dias após a aprovação deste relatório |
| Escopo | Quatro telas originais + fluxos corrigidos |
| Método | WAVE + checklist + teste manual + teste com usuários |
| Saída esperada | Relatório de reavaliação e declaração de status |

---

## 14. Referências

### 14.1 Referências normativas e bibliográficas

[1] W3C. **Web Content Accessibility Guidelines (WCAG) 2.2**. W3C Recommendation, 5 out. 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>. Acesso em: 11 nov. 2026.

[2] W3C. **Understanding WCAG 2.2**. Web Accessibility Initiative. Disponível em: <https://www.w3.org/WAI/WCAG22/Understanding/>. Acesso em: 11 nov. 2026.

[3] ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225:2025 — Acessibilidade em conteúdo e aplicações web**. Rio de Janeiro: ABNT, 2025.

[4] ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17060:2022 — Acessibilidade em aplicativos móveis**. Rio de Janeiro: ABNT, 2022.

[5] BRASIL. **Lei nº 13.146, de 6 de julho de 2015** — Institui a Lei Brasileira de Inclusão da Pessoa com Deficiência. Diário Oficial da União, Brasília, DF, 7 jul. 2015.

[6] BRASIL. **eMAG — Modelo de Acessibilidade em Governo Eletrônico**. Disponível em: <https://emag.governoeletronico.gov.br/>. Acesso em: 11 nov. 2026.

[7] BRASIL. **Guia de Boas Práticas para Acessibilidade Digital**. Programa de Cooperação Reino Unido–Brasil em Acesso Digital. Disponível em: <https://guiadigital.brasil.gov.br/>. Acesso em: 11 nov. 2026.

[8] INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. **ISO 9241-11:2018 — Ergonomics of human-system interaction — Part 11: Usability: Definitions and concepts**. Genebra: ISO, 2018.

[9] INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. **ISO 9241-210:2019 — Ergonomics of human-system interaction — Part 210: Human-centred design for interactive systems**. Genebra: ISO, 2019.

[10] NIELSEN, Jakob. **10 Usability Heuristics for User Interface Design**. Nielsen Norman Group, 24 abr. 1994. Disponível em: <https://www.nngroup.com/articles/ten-usability-heuristics/>. Acesso em: 11 nov. 2026.

[11] NIELSEN, Jakob; MOLICH, Rolf. Heuristic evaluation of user interfaces. In: **Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI '90)**. New York: ACM, 1990. p. 249–256.

[12] WHARTON, Cathleen; RIEMAN, John; LEWIS, Clayton; POLSON, Peter. The cognitive walkthrough method: a practitioner's guide. In: NIELSEN, Jakob; MACK, Robert L. (ed.). **Usability Inspection Methods**. New York: Wiley, 1994.

[13] COOPER, Alan. **The Inmates Are Running the Asylum**. Indianapolis: Sams, 1999.

[14] NIELSEN, Jakob. **Usability Engineering**. San Francisco: Morgan Kaufmann, 1993.

[15] WEBAIM. **WAVE Web Accessibility Evaluation Tool**. Disponível em: <https://wave.webaim.org/>. Acesso em: 11 nov. 2026.

[16] W3C. **WAI-ARIA 1.2 — Accessible Rich Internet Applications**. W3C Recommendation, 2023. Disponível em: <https://www.w3.org/TR/wai-aria-1.2/>. Acesso em: 11 nov. 2026.

[17] GOV.BR. **Design System do Governo Federal**. Disponível em: <https://www.gov.br/ds/>. Acesso em: 11 nov. 2026.

[18] GRUPO 05. **Checklist de Avaliação de Acessibilidade e IHC em Websites**. Repositório IHC 2026.2 — UnB/FCTE, 2026. Arquivo: `docs/checklist/checklist.md`.

### 14.2 Fontes primárias do projeto

- `docs/avaliacao/introducao.md` — relatório de inspeção do Meu SUS Digital;
- `docs/avaliacao/checklistmeusus.md` — aplicação do checklist e evidências;
- `docs/avaliacao/persona.md` — persona de referência;
- `docs/metodo/tecnicasIHC.md` — persona, percurso cognitivo e avaliação heurística;
- `docs/metodo/heuristicas.md` — 10 heurísticas de Nielsen;
- `docs/guia/site_acessivel.md` — diretrizes técnicas de acessibilidade;
- `docs/checklist/checklist.md` — checklist de referência com 34 critérios;
- `docs/inicio/fundamentos.md` — fundamentos de IHC e UX;
- `docs/tools/ferramentas.md` — ferramentas de apoio;
- `docs/wcag.md` — princípios POUR e níveis de conformidade;
- `mkdocs.yml`, `Dockerfile`, `docker-compose.yml`, `requirements.txt` e `CONTRIBUTING.md` — estrutura e reprodutibilidade da documentação.

---

## 15. Anexos

### Anexo A — Rastreabilidade dos documentos analisados

| Documento | Conteúdo utilizado | Situação |
|---|---|:---:|
| `README.md` | Identificação da equipe, referenciais e contexto | Completo |
| `mkdocs.yml` | Estrutura do site, navegação, tema e plugins | Completo, com ajustes recomendados |
| `docs/index.md` | Apresentação do projeto e referências | Completo |
| `docs/inicio/fundamentos.md` | POUR, UX, personas, jornada, blueprint, canvas | Completo |
| `docs/inicio/paraQueServe.md` | Público-alvo e glossário | **Incompleto** |
| `docs/guia/site_acessivel.md` | Diretrizes de desenvolvimento, design e conteúdo | Completo |
| `docs/checklist/checklist.md` | 34 critérios de avaliação | Completo |
| `docs/checklist/gestao.md` | Checklist de gestão | **Incompleto** |
| `docs/design/design.md` | Checklist de design | **Incompleto** |
| `docs/devWeb/desenvolvimento.md` | Checklist de desenvolvimento | **Incompleto** |
| `docs/geracaoConteudo/conteudo.md` | Checklist de conteúdo | **Incompleto** |
| `docs/avaliacao/introducao.md` | Evidências quantitativas e diagnóstico | Completo |
| `docs/avaliacao/checklistmeusus.md` | Checklist aplicado ao portal | Completo |
| `docs/avaliacao/persona.md` | Persona de referência | **Incompleto** |
| `docs/metodo/heuristicas.md` | 10 heurísticas e referências | Completo |
| `docs/metodo/tecnicasIHC.md` | Métodos, severidade e conclusões | Completo |
| `docs/tools/ferramentas.md` | Ferramentas de validação | Parcial |
| `docs/wcag.md` | Princípios e níveis | Parcial |
| `docs/Sobre/sobreGuia.md` | Apresentação do guia | **Incompleto e fora da navegação** |
| `docs/stylesheets/extra.css` | Estilos de foco e progresso | Completo |
| `docs/javascripts/checklist-progress.js` | Barra de progresso acessível | Completo |
| `Dockerfile`, `docker-compose.yml`, `requirements.txt` | Execução local | Completo |
| `.github/workflows/deploy.yml` | Publicação no GitHub Pages | Atenção: gatilho restrito ao branch `inicia-repositorio` |

### Anexo B — Checklist consolidado

| ID | Item | Página pública | Home autenticada | Vacinas | Detalhes |
|:---:|---|:---:|:---:|:---:|:---:|
| C01 | Contraste suficiente | ❌ | ✅ | ❌ | ✅ |
| C02 | Imagens com texto alternativo adequado | ❌ | ❌ | ❌ | ❌ |
| C03 | Textos alternativos objetivos | ✅ | ⚠️ | ✅ | ✅ |
| C04 | Rótulos programáticos | ⚠️ | ⚠️ | ⚠️ | ❌ |
| C05 | Hierarquia de cabeçalhos lógica | ⚠️ | ❌ | ⚠️ | ⚠️ |
| C06 | Legibilidade e ampliação | ⚠️ | ❌ | ❌ | ❌ |
| C07 | Teclado, foco e componentes | ⚠️ | ⚠️ | ⚠️ | ⚠️ |

**Legenda:** ✅ conforme · ⚠️ parcial ou necessita validação · ❌ não conforme.

**Totais:** 5 conformes · 11 não conformes · 12 parciais · 28 verificações.

### Anexo C — Evidências visuais

| Figura | Arquivo | Descrição |
|:---:|---|---|
| 1 | `docs/images/wave_pagina_deslogada.png` | Página pública com 12 erros de contraste e AIM Score 5,8 |
| 2 | `docs/images/wave_pagina_inicial.png` | Página inicial autenticada com 33 erros de texto alternativo e AIM Score 4,3 |
| 3 | `docs/images/wave_vacinas_geral.png` | Listagem de vacinas com marcações do WAVE |
| 4 | `docs/images/wave_detalhes_documento.png` | Detalhes do certificado de vacinação com marcações do WAVE |

As imagens estão incorporadas ao relatório de inspeção em `docs/avaliacao/introducao.md` e à checklist aplicada em `docs/avaliacao/checklistmeusus.md`.

### Anexo D — Avaliação da documentação de suporte

Além do portal, a análise dos arquivos do projeto identificou lacunas na documentação que sustentam a avaliação:

| Achado documental | Impacto | Recomendação |
|---|---|---|
| Persona com campos genéricos | Fragiliza o Percurso Cognitivo e a priorização por perfil | Preencher com dados demográficos, contexto, objetivos e necessidades de acessibilidade |
| Páginas de checklist em estado de modelo | Reduz a utilidade prática do guia | Completar critérios, exemplos e referências |
| `docs/Sobre/sobreGuia.md` fora da navegação | Conteúdo não acessível pelo site | Incluir no `nav` do `mkdocs.yml` ou remover |
| `docs/wcag.md` parcial | Não detalha critérios de sucesso | Complementar com tabela de critérios e níveis |
| Workflow de deploy restrito a um branch | Risco de não publicar atualizações | Ajustar gatilho para o branch principal |
| Ausência de data e ambiente da coleta | Limita a reprodutibilidade | Registrar data, navegador, versão da ferramenta e responsável |
| Divergência de contagem de erros | Pode induzir a conclusões distintas | Consolidar uma única fonte de dados e revisar o texto |

> Essas lacunas não invalidam os achados do portal, mas reduzem a rastreabilidade e a reprodutibilidade da avaliação. A correção é de baixo custo e deve acompanhar o plano de ação.

### Anexo E — Glossário

| Termo | Definição |
|---|---|
| **AIM Score** | Métrica de impacto de acessibilidade apresentada pelo WAVE, em escala de 0 a 10; não é medida de conformidade |
| **ARIA** | Especificação WAI-ARIA para atributos de acessibilidade em componentes ricos |
| **eMAG** | Modelo de Acessibilidade em Governo Eletrônico, referência para portais públicos brasileiros |
| **Foco visível** | Indicação visual do elemento que recebe foco na navegação por teclado |
| **POUR** | Princípios da WCAG: Perceptível, Operável, Compreensível e Robusto |
| **Reflow** | Reorganização do conteúdo sem rolagem horizontal em telas estreitas ou com zoom |
| **Texto alternativo** | Equivalente textual de uma imagem, fornecido pelo atributo `alt` |
| **WCAG** | Web Content Accessibility Guidelines, diretrizes do W3C para acessibilidade web |

---

**Fim do relatório.**

*Documento elaborado pelo Grupo 05 — IHC 2026.2 — UnB/FCTE. Avaliação acadêmica independente, sem finalidade de certificação. As evidências quantitativas são provenientes dos registros do projeto e devem ser reverificadas antes de qualquer decisão institucional.*
