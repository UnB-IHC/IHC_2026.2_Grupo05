# Técnicas de IHC

## O que são?

As **técnicas de Interação Humano-Computador (IHC)** são métodos sistemáticos usados para **compreender** quem são as pessoas usuárias e **avaliar** se a solução entregue é, de fato, utilizável e acessível. Elas transformam a intuição da equipe em decisões fundamentadas e rastreáveis.

No ciclo de prototipação, estas técnicas pertencem à **Pós-Prototipação** — coleta de *feedbacks* e testes formais. Os conceitos que as sustentam (acessibilidade, UX, personas, jornadas, Service Blueprint, Canvas e design empático) estão descritos em [Fundamentos de IHC e UX](../inicio/fundamentos.md).

Esta página descreve as três técnicas efetivamente adotadas na avaliação do **Meu SUS Digital**: **Persona**, **Percurso Cognitivo** e **Avaliação Heurística**.

---

## 1. Persona

### O que é

Conforme descrito em [Fundamentos de IHC e UX](../inicio/fundamentos.md#3-personas), a persona é o **instrumento que orienta** as demais técnicas: é "na pele" dela que o avaliador executa o Percurso Cognitivo, e é a partir de seu perfil que se atribui severidade aos problemas da Avaliação Heurística.

### Como foi aplicada

A persona do projeto é documentada na página [Persona de Referência](../avaliacao/persona.md), que reúne dados demográficos, perfil, afinidade com tecnologia, objetivos e dificuldades ao acessar o sistema. Sua finalidade declarada é **guiar as simulações cognitivas e a avaliação de IHC**.

Na construção da persona, os grupos de usuários priorizados no [Guia de Site Acessível](../guia/site_acessivel.md) servem como ponto de partida para definir as **necessidades de acessibilidade**: pessoas com baixa visão, pessoas cegas usuárias de leitores de tela, pessoas com daltonismo, com limitações motoras, com limitações cognitivas ou neurodivergentes e pessoas surdas usuárias de Libras.

---

## 2. Percurso Cognitivo (*Cognitive Walkthrough*)

### O que é

O **Percurso Cognitivo** (Wharton, Rieman, Lewis e Polson, 1994) é um método de **inspeção analítica** em que um ou mais avaliadores **simulam, passo a passo, o raciocínio** de um usuário de primeira viagem ao executar uma tarefa específica. Seu foco é a **facilidade de aprendizado por exploração** — ou seja, se a pessoa consegue descobrir sozinha o que fazer.

Por não exigir um sistema pronto, o Percurso Cognitivo pode ser aplicado **desde um protótipo de baixa fidelidade em papel** até um protótipo interativo no **modo *Play* do Figma**, o que o torna uma técnica típica de **avaliação formativa** — aquela que orienta o design durante a concepção (Barbosa et al., 2021).

### Como conduzir

1. **Definir a persona** que será simulada;
2. **Escolher as tarefas** representativas e prioritárias;
3. **Descrever a sequência correta de ações** para concluir cada tarefa;
4. **Percorrer cada ação** respondendo às quatro perguntas clássicas:

| # | Pergunta | O que verifica |
|---|---|---|
| **P1** | O usuário tentará atingir o efeito correto? | Se o objetivo da etapa está claro. |
| **P2** | O usuário perceberá que a ação correta está disponível? | Visibilidade do controle (contraste, posição, rótulo). |
| **P3** | O usuário associará a ação correta ao efeito desejado? | Clareza do rótulo e da linguagem. |
| **P4** | O usuário perceberá que está progredindo após a ação? | Qualidade do *feedback*. |

5. **Registrar** cada resposta "não" como uma **história de falha**, indicando a causa e uma sugestão de correção.

### Como foi aplicada

- **Persona:** a [Persona de Referência](../avaliacao/persona.md) do projeto;
- **Tarefa:** *"Obter o certificado de vacinação COVID-19 pelo celular."*

**Análise prévia** (a ser validada em sessão manual com teclado, zoom e leitor de tela), com base nos achados do [Relatório de Inspeção](../avaliacao/introducao.md):

| Passo | Ação correta | P1 | P2 | P3 | P4 | História de falha |
|---|---|:-:|:-:|:-:|:-:|---|
| 1 | Na página pública, localizar a opção de entrada | ✅ | ❌ | ✅ | ✅ | Rótulos sobre fundo azul com contraste insuficiente (12 erros) dificultam a localização da ação. |
| 2 | Entrar com a conta Gov.br | ✅ | ✅ | ✅ | ⚠️ | O redirecionamento para outro domínio pode desorientar a persona. |
| 3 | No painel, encontrar "Minha Saúde" | ⚠️ | ⚠️ | ❌ | ✅ | 33 imagens sem texto alternativo: no leitor de tela, ícones de atalho não são anunciados. |
| 4 | Selecionar a vacina COVID-19 | ✅ | ⚠️ | ✅ | ✅ | Nomes de vacinas, datas e lotes em fonte muito pequena. |
| 5 | Abrir e baixar o certificado | ✅ | ✅ | ⚠️ | ⚠️ | Campos sem rótulo associado podem ser anunciados apenas como "campo de texto". |

- **Pergunte-se:**
    - Em cada passo, a persona saberia **o que fazer** sem que ninguém lhe explicasse?
    - O sistema confirma claramente que o certificado foi baixado ou gerado?
- **Risco se ignorado:**
    - Interfaces que funcionam para quem já as conhece, mas bloqueiam novos usuários — exatamente o público que mais depende do serviço público digital.

!!! note "Limitação"
    O percurso acima é uma **simulação analítica** e não substitui testes com usuários reais. As respostas marcadas com ⚠️ dependem da sessão manual prevista no item **C07** da [Checklist Aplicada](../avaliacao/checklistmeusus.md).

---

## 3. Avaliação Heurística

### O que é

A **Avaliação Heurística** (Nielsen e Molich, 1990) é um método de **inspeção por especialistas** em que avaliadores examinam a interface à luz de um conjunto de princípios reconhecidos — no caso deste projeto, as [10 Heurísticas de Nielsen](heuristicas.md). Diferentemente do Percurso Cognitivo, que segue uma tarefa, a Avaliação Heurística examina a **interface como um todo**.

É um método **rápido e de baixo custo**, que pode ser aplicado sobre protótipos de média e alta fidelidade — como *frames* do Figma — para identificar falhas **antes** do produto final, reforçando o principal benefício da prototipação: a **economia de custos e tempo**. Quando aplicada sobre um sistema já publicado, como o Meu SUS Digital, assume caráter de **avaliação somativa**, medindo o resultado ao término.

### Como conduzir

1. **Preparação:** definir o escopo (telas), as heurísticas de referência e a escala de severidade;
2. **Inspeção individual:** cada avaliador percorre a interface ao menos duas vezes — uma para se familiarizar e outra para registrar problemas — **sem** discutir com os demais, a fim de evitar vieses;
3. **Consolidação:** os avaliadores unificam a lista de problemas, eliminando duplicidades;
4. **Classificação da severidade**, conforme a escala de Nielsen:

| Grau | Severidade | Descrição |
|:-:|---|---|
| **0** | Não é problema | Não há consenso de que seja um problema de usabilidade. |
| **1** | Cosmético | Corrigir apenas se houver tempo disponível. |
| **2** | Pequeno | Correção de baixa prioridade. |
| **3** | Grande | Correção importante, de alta prioridade. |
| **4** | Catastrófico | Correção obrigatória antes do lançamento. |

5. **Relatório:** para cada problema, registrar o local, a heurística violada, a severidade e a recomendação.

!!! info "Quantos avaliadores?"
    Nielsen recomenda de **3 a 5 avaliadores**: um único avaliador encontra, em média, cerca de 35% dos problemas, enquanto cinco avaliadores identificam aproximadamente 75%.

### Como foi aplicada

A avaliação do Meu SUS Digital combinou a **inspeção automatizada** com a ferramenta **WAVE** e o **cruzamento dos achados com as 10 Heurísticas de Nielsen** e os critérios da WCAG (níveis A e AA). O escopo compreendeu quatro telas: página pública, página inicial autenticada, listagem de vacinas e detalhes do certificado.

| Problema | Critério WCAG | Heurísticas violadas | Severidade sugerida |
|---|---|---|:-:|
| Contraste insuficiente nos rótulos sobre fundo azul (12 ocorrências) | 1.4.3 (AA) | #1, #7, #8 | **3** |
| Imagens sem texto alternativo (33 na página inicial autenticada) | 1.1.1 (A) | #1, #6 | **4** |
| Rótulos de formulário não associados aos campos | 1.3.1 e 3.3.2 (A) | #5, #6 | **3** |
| Hierarquia de cabeçalhos quebrada (`h1` → `h3`) | 1.3.1 e 2.4.6 | #2, #4 | **2** |
| Textos muito pequenos (datas, lotes, nomes de vacinas) | 1.4.4 (AA) | #6, #8 | **3** |
| Textos alternativos excessivamente longos | 1.1.1 (boa prática) | #7, #8 | **1** |

**Principais conclusões:**

- A **página inicial autenticada** obteve o pior AIM Score (**4,3/10**), sobretudo pela ausência de descrições em imagens;
- As telas internas de vacinas e certificados alcançaram notas elevadas (**8,2 a 9,4/10**), mas **ainda falham** em rótulos e tamanho de texto — o que demonstra que **a nota da ferramenta automatizada não equivale à conformidade**;
- Os problemas são majoritariamente de **marcação HTML e CSS**, de correção relativamente simples e alto impacto.

!!! warning "Limitação"
    A severidade acima é uma **proposta da equipe**, a ser consolidada por, no mínimo, três avaliadores independentes. A avaliação não contou com testes com usuários reais, como pessoas que utilizam leitores de tela.

---

## 4. Como as técnicas se complementam

| Técnica | Pergunta que responde | Foco | Momento no projeto |
|---|---|---|---|
| **Persona** | *Para quem* estamos projetando? | Usuário | Antes da avaliação |
| **Jornada / Blueprint** | *Por onde* o usuário passa e *o que* sustenta cada etapa? | Fluxo e serviço | Mapeamento |
| **Canvas / Mapa de Empatia** | *O que* o usuário sente, precisa e ganha? | Necessidades | Mapeamento |
| **Percurso Cognitivo** | O usuário *consegue aprender* a tarefa sozinho? | Tarefa | Inspeção |
| **Avaliação Heurística** | A interface *respeita* os princípios de usabilidade? | Interface como um todo | Inspeção |

O ciclo se fecha com o **teste com usuários reais**, que valida — ou refuta — o que as técnicas analíticas anteciparam. Na lógica do ciclo de prototipação, os achados da avaliação do Meu SUS Digital não são um ponto final: eles alimentam uma nova rodada de **Solução → Simulação → Feedback → Ajustes**, em que as correções propostas (contraste, textos alternativos, rótulos, hierarquia e tipografia) podem ser prototipadas no Figma e reavaliadas com a mesma persona antes de chegarem ao código.

---

## Referências

- COOPER, A. *The Inmates Are Running the Asylum*. Indianapolis: Sams, 1999.
- NIELSEN, J.; MOLICH, R. Heuristic evaluation of user interfaces. *Proceedings of ACM CHI'90*, 1990.
- NIELSEN, J. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1993.
- SHOSTACK, G. L. Designing services that deliver. *Harvard Business Review*, v. 62, n. 1, 1984.
- WHARTON, C.; RIEMAN, J.; LEWIS, C.; POLSON, P. The cognitive walkthrough method: a practitioner's guide. In: NIELSEN, J.; MACK, R. (Eds.). *Usability Inspection Methods*. New York: Wiley, 1994.
- OSTERWALDER, A. et al. *Value Proposition Design*. Hoboken: Wiley, 2014.
- ABNT. *NBR 17225:2025 — Acessibilidade em conteúdo e aplicações web*. Rio de Janeiro: ABNT, 2025.
- ISO. *ISO 9241-11:2018 / ISO 9241-210:2019 — Ergonomics of human-system interaction*.
- BRASIL. *Lei nº 13.146, de 6 de julho de 2015 — Lei Brasileira de Inclusão da Pessoa com Deficiência*.
- W3C. *Web Content Accessibility Guidelines (WCAG) 2.2*. 2023.
- BARBOSA, S. D. J. et al. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Elsevier / GEN LTC, 2021.
- SANTOS, M. E. B. *Estruturação do Processo de Prototipação com Foco no Compartilhamento de Conhecimento em Projetos de Design de Serviços Digitais*. 2025. Monografia (Bacharelado em Engenharia de Software) – FCTE, Universidade de Brasília, 2025.
- MARTINS, L. T. S. *Mecanismos de Compartilhamento de Conhecimento no Pré, Durante e Pós-Prototipação em Projetos de Design de Serviços Digitais*. 2025. Monografia (Bacharelado em Engenharia de Software) – FCTE, Universidade de Brasília, 2025.
- NORMAN, D. A. *The Design of Everyday Things*. Ed. rev. New York: Basic Books, 2013.
