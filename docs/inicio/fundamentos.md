# Fundamentos de IHC e UX

## O que são?

Antes de verificar critérios de acessibilidade ou aplicar checklists, é preciso entender **para quem** e **por que** se projeta. Esta página reúne os **fundamentos conceituais** de Interação Humano-Computador (IHC) que sustentam todo o guia: **acessibilidade**, **experiência do usuário (UX)**, **personas**, **jornadas**, **Service Blueprint**, **Canvas** e **design empático**.

Esses fundamentos servem para:

- **Dar rosto ao usuário:** Substituir o "usuário genérico" por pessoas concretas, com limitações, contextos e objetivos reais;
- **Enxergar a experiência de ponta a ponta:** Mapear não apenas telas isoladas, mas o caminho completo que o cidadão percorre — e o que acontece nos bastidores do serviço;
- **Orientar as decisões do guia:** Dar sentido aos critérios normativos da **WCAG 2.2**, da **ABNT NBR 17225:2025** e do **eMAG** apresentados nas seções seguintes.

### Onde os fundamentos se encaixam no ciclo de prototipação

No seminário anterior do grupo (*Prototipação e Figma*), a prototipação foi apresentada como **"a ponte entre a ideia e o produto real"**, organizada em um ciclo de três fases (Santos, 2025; Martins, 2025):

| Fase do ciclo | Objetivo | Técnicas e artefatos |
|---|---|---|
| **1. Pré-Prototipação** | Descoberta, mapeamento e requisitos | Personas, Jornada do Usuário, Service Blueprint, Canvas, Design Empático — sempre orientados por critérios de **acessibilidade** e **UX** |
| **2. Prototipação** | Construção ativa e experimentação | Protótipos de baixa, média e alta fidelidade (papel, wireframes, Figma) |
| **3. Pós-Prototipação** | Coleta de *feedbacks* e testes formais | Percurso Cognitivo, Avaliação Heurística e testes com usuários |

Esta página cobre a **Pré-Prototipação**: ela responde *para quem* e *por que* projetar antes de desenhar a primeira tela. As técnicas de avaliação da Pós-Prototipação, aplicadas ao Meu SUS Digital, estão descritas em [Técnicas de IHC](../metodo/tecnicasIHC.md).

!!! quote "Don Norman"
    "As pessoas frequentemente não sabem dizer do que precisam." Por isso, **observar, testar, iterar e aprender** vem antes do código.

---

## 1. Acessibilidade (*Accessibility*)

Acessibilidade digital é a garantia de que **todas as pessoas**, com ou sem deficiência, consigam **perceber, compreender, navegar e interagir** com um serviço digital de forma autônoma e em igualdade de condições. No Brasil, trata-se de um **direito**, assegurado pela **Lei nº 13.146/2015 (Lei Brasileira de Inclusão)**, e de uma **obrigação** para portais da administração pública, nos termos do **eMAG**.

A **WCAG 2.2** organiza a acessibilidade em quatro princípios, conhecidos pelo acrônimo **POUR**:

| Princípio | Significado | Exemplo no Meu SUS Digital |
|---|---|---|
| **Perceptível** | A informação deve ser apresentada de forma que os sentidos do usuário consigam captá-la. | Imagens precisam de texto alternativo; rótulos precisam de contraste mínimo de 4,5:1. |
| **Operável** | Todos os componentes devem poder ser acionados, inclusive sem mouse. | O certificado de vacinação deve ser acessível apenas pelo teclado. |
| **Compreensível** | O conteúdo e o funcionamento da interface devem ser claros. | Termos como "lote" e "dose de reforço" devem vir acompanhados de linguagem simples. |
| **Robusto** | O código deve ser interpretável por diferentes tecnologias assistivas. | Campos de formulário precisam de rótulos associados programaticamente para o leitor de tela. |

- **Pergunte-se:**
    - Uma pessoa cega, usando o TalkBack, consegue concluir a mesma tarefa que uma pessoa vidente?
    - Uma pessoa idosa, com baixa visão, consegue ler as datas e os lotes das vacinas sem recorrer ao zoom?
- **Risco se ignorado:**
    - Exclusão de parcela significativa da população de um serviço público essencial;
    - Descumprimento legal e dependência de terceiros para acessar informações pessoais de saúde.

!!! info "Acessibilidade não é um nicho"
    Barreiras de acessibilidade afetam também usuários **sem deficiência**: quem usa o celular sob o sol, quem está com o braço imobilizado ou quem tem pouca familiaridade com tecnologia. Projetar para os extremos melhora a experiência de todos.

---

## 2. Experiência do Usuário (*User Experience — UX*)

**UX** é o conjunto de percepções e respostas de uma pessoa resultantes do uso — ou da antecipação do uso — de um produto, sistema ou serviço (ISO 9241-210). Ela vai além da interface gráfica (UI): abrange **utilidade, usabilidade, acessibilidade, confiança e satisfação** em toda a interação.

A **usabilidade**, componente central da UX, é definida pela ISO 9241-11 a partir de três dimensões:

- **Eficácia:** O usuário consegue concluir a tarefa?
- **Eficiência:** Com quanto esforço, tempo e número de passos?
- **Satisfação:** A experiência foi confortável e confiável?

**Relação com a acessibilidade:** a acessibilidade é a condição para que a UX exista. Uma interface bonita, mas inacessível ao leitor de tela, oferece **experiência nula** para quem depende dele. Por outro lado, uma interface tecnicamente conforme à WCAG pode ainda ser confusa — por isso este guia combina critérios normativos com as **Heurísticas de Nielsen**.

- **Pergunte-se:**
    - O cidadão encontra o certificado de vacinação no primeiro caminho que tenta?
    - Ele sai da interação confiando que a informação exibida está correta e atualizada?
- **Risco se ignorado:**
    - Abandono do serviço digital e retorno ao atendimento presencial, sobrecarregando as unidades de saúde.

---

## 3. Personas

**Personas** são **representações fictícias, porém fundamentadas em dados reais**, de grupos de usuários com características, objetivos e comportamentos semelhantes. O conceito foi popularizado por **Alan Cooper** (*The Inmates Are Running the Asylum*, 1999) como forma de evitar que a equipe projete para si mesma ou para um "usuário médio" que não existe.

Uma persona bem construída contém:

- **Dados demográficos:** nome, idade, profissão, localização;
- **Contexto e rotina:** como, onde e quando usa tecnologia;
- **Afinidade tecnológica e dispositivos;**
- **Necessidades de acessibilidade:** visuais, motoras, auditivas, cognitivas;
- **Objetivos:** o que deseja alcançar com o sistema;
- **Frustrações e dores:** o que a impede ou desmotiva.

!!! warning "Persona não é estereótipo"
    A persona deve emergir de **pesquisa** (entrevistas, dados de uso, estatísticas demográficas), e não de suposições da equipe. Personas inventadas sem base empírica reforçam vieses em vez de combatê-los.

A aplicação desta técnica no projeto está detalhada em [Técnicas de IHC](../metodo/tecnicasIHC.md#1-persona).

---

## 4. Jornada do Usuário (*User Journey Map*)

O **Mapa de Jornada do Usuário** é uma representação visual e cronológica de **todas as etapas** que uma persona percorre para atingir um objetivo — incluindo o que ela **faz**, **pensa** e **sente** em cada momento, e os **pontos de contato** (*touchpoints*) com o serviço.

Estrutura típica de um mapa de jornada:

| Camada | O que registra |
|---|---|
| **Etapas** | Fases macro da experiência (descobrir, acessar, buscar, consumir, concluir). |
| **Ações** | O que o usuário efetivamente faz em cada etapa. |
| **Pensamentos** | Dúvidas e expectativas ("Onde fica o meu certificado?"). |
| **Emoções** | Curva emocional — momentos de satisfação e de frustração. |
| **Pontos de dor** | Barreiras identificadas. |
| **Oportunidades** | Melhorias possíveis. |

**Exemplo — Jornada "Obter o certificado de vacinação COVID-19" no Meu SUS Digital:**

| Etapa | 1. Acessar | 2. Autenticar | 3. Navegar | 4. Localizar | 5. Consultar |
|---|---|---|---|---|---|
| **Ação** | Abre o portal público | Entra pelo Gov.br | Visualiza a página inicial | Acessa *Minha Saúde → Vacinas* | Abre os detalhes do certificado |
| **Ponto de dor** | Rótulos com baixo contraste sobre fundo azul (12 erros) | Dependência de um sistema externo | 33 imagens sem texto alternativo; hierarquia de títulos quebrada | Textos muito pequenos em datas e lotes | Campos sem rótulo associado; fonte reduzida |

As etapas acima coincidem com as **quatro telas** que compõem o escopo do [Relatório de Inspeção](../avaliacao/introducao.md), o que permite ler os achados técnicos como momentos concretos da experiência do cidadão.

- **Pergunte-se:**
    - Em qual etapa a persona tem maior probabilidade de desistir?
    - Os problemas estão concentrados no início da jornada (primeira impressão) ou no final (conclusão da tarefa)?
- **Risco se ignorado:**
    - Otimização de telas isoladas sem perceber que o fluxo, como um todo, é inviável.

---

## 5. Service Blueprint

O **Service Blueprint** (proposto por **G. Lynn Shostack**, 1984) é uma extensão da jornada do usuário que revela **o que acontece nos bastidores** para que cada etapa da experiência funcione. Enquanto a jornada mostra o "palco", o blueprint mostra também a "coxia".

Suas camadas são separadas por linhas horizontais:

1. **Evidências físicas/digitais:** o que o usuário vê (telas, e-mails, PDFs);
2. **Ações do usuário;**
3. ── *Linha de interação* ──
4. **Ações de linha de frente (*frontstage*):** o que o sistema exibe ou responde diretamente;
5. ── *Linha de visibilidade* ──
6. **Ações de retaguarda (*backstage*):** processos invisíveis ao usuário;
7. ── *Linha de interação interna* ──
8. **Processos de suporte:** sistemas, bases de dados e equipes que sustentam o serviço.

**Exemplo aplicado ao Meu SUS Digital:**

| Camada | Autenticar | Consultar vacinas |
|---|---|---|
| **Evidência** | Tela de login Gov.br | Lista de doses e certificado |
| **Ação do usuário** | Informa CPF e senha | Seleciona a vacina |
| **Frontstage** | Redireciona ao painel | Exibe datas, lotes e QR Code |
| **Backstage** | Validação da identidade e do nível da conta | Consulta ao histórico vacinal do cidadão |
| **Suporte** | Plataforma Gov.br | Registros enviados pelas unidades de saúde à base nacional |

**Relevância para a acessibilidade:** o blueprint evidencia que parte da experiência **não é controlada** pela equipe do Meu SUS Digital — por exemplo, a acessibilidade da tela de login depende do Gov.br, e a exatidão do certificado depende do registro feito no posto de saúde.

---

## 6. Canvas

**Canvas** são quadros visuais de uma única página que organizam, de forma sintética e colaborativa, as informações essenciais sobre um problema, um público ou uma solução. Seu valor está em **alinhar a equipe** rapidamente e tornar visíveis as premissas do projeto.

Principais modelos utilizados em IHC e design de serviços:

- **Mapa de Empatia:** organiza o que a persona **pensa e sente, ouve, vê, fala e faz**, além de suas **dores** e **ganhos** (detalhado na seção 7);
- **Canvas de Proposta de Valor** (*Value Proposition Canvas*, Osterwalder): confronta as **tarefas, dores e ganhos** do usuário com os **produtos, aliviadores de dor e criadores de ganho** da solução;
- **Lean Canvas** (Ash Maurya): versão enxuta do *Business Model Canvas*, voltada a problema, solução e métricas;
- **Canvas de Persona:** ficha estruturada que padroniza a construção de personas.

**Exemplo — Proposta de Valor do Meu SUS Digital (perspectiva do cidadão):**

| Lado do usuário | Lado da solução |
|---|---|
| **Tarefa:** comprovar a vacinação para viagem, trabalho ou matrícula escolar | **Produto:** certificado digital com QR Code |
| **Dor:** filas e deslocamento até a unidade de saúde | **Aliviador:** acesso remoto, 24 horas |
| **Dor:** perda do cartão de vacinação em papel | **Aliviador:** histórico vacinal centralizado |
| **Ganho esperado:** autonomia e rapidez | **Criador de ganho:** download imediato — **desde que a interface seja acessível** |

---

## 7. Design Empático (*Empathic Design*)

O **Design Empático** é a abordagem que coloca a **compreensão profunda das pessoas** — suas emoções, limitações e contextos — no centro do processo de projeto. É a primeira etapa do **Design Thinking** (*Empatizar → Definir → Idear → Prototipar → Testar*) e parte do princípio de que **a equipe não é o usuário**.

A justificativa vem diretamente de **Don Norman**: usuários habituados à própria rotina **não sabem expressar com clareza** suas necessidades reais. Perguntar "do que você precisa?" não basta — é preciso **observar antes de codificar**. O design empático é, portanto, o coração da **Pré-Prototipação**, e o protótipo é o instrumento que permite devolver essa empatia ao usuário em forma concreta: como afirmam Barbosa et al. (2021), construir versões interativas **"facilita a participação dos usuários"**.

Ferramentas típicas:

- **Entrevistas e observação em contexto:** acompanhar o usuário usando o sistema em seu ambiente real;
- **Mapa de Empatia:** canvas que sintetiza o que se aprendeu sobre a persona;
- **Simulação de limitações:** a equipe navega usando apenas o teclado, com o leitor de tela ativado ou com filtros que simulam baixa visão e daltonismo;
- **Testes com usuários reais**, especialmente pessoas com deficiência.

**Estrutura do Mapa de Empatia:**

| Quadrante | Pergunta orientadora |
|---|---|
| **Pensa e sente** | Quais são as preocupações, expectativas e medos da pessoa ao usar o sistema? |
| **Vê** | O que ela encontra no ambiente e na interface? |
| **Ouve** | O que pessoas próximas e outros canais lhe dizem sobre o serviço? |
| **Fala e faz** | Como ela se comporta e o que relata durante o uso? |
| **Dores** | Quais obstáculos, riscos e frustrações enfrenta? |
| **Ganhos** | O que ela espera conquistar ao concluir a tarefa? |

!!! note "Preenchimento"
    Os quadrantes devem ser preenchidos com dados coletados em **entrevistas e observação** de usuários reais, e não com suposições da equipe.

!!! tip "Empatia como prática, não como discurso"
    O guia deste projeto parte de **necessidades reais** das pessoas usuárias e prevê **testes com usuários com deficiência** como etapa de validação. A inspeção automatizada (WAVE) e a análise heurística são o ponto de partida — nunca o ponto final.

---

## Próximos passos

Com os fundamentos estabelecidos, o guia segue para a parte prática:

- **[Guia de Site Acessível](../guia/site_acessivel.md):** diretrizes de acessibilidade organizadas por tema;
- **[WCAG](../wcag.md):** princípios e níveis de conformidade;
- **[Técnicas de IHC](../metodo/tecnicasIHC.md):** Persona, Percurso Cognitivo e Avaliação Heurística aplicados ao Meu SUS Digital.

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
