# As 10 Heurísticas de Nielsen

## O que são?

As **10 Heurísticas de Usabilidade de Jakob Nielsen** (desenvolvidas em parceria com Rolf Molich em 1990 e refinadas por Nielsen em 1994 pelo *Nielsen Norman Group - NN/g*) são regras gerais e princípios consolidados de design de interação humano-computador.

Elas servem fundamentalmente para:

- **Avaliar interfaces:** Identificar problemas críticos de usabilidade por meio de métodos de inspeção analítica (Avaliação Heurística);
- **Guiar decisões de design:** Orientar a arquitetura de informação e fluxos de interação antes mesmo da fase de testes com usuários finais;
- **Complementar a acessibilidade:** Atuar em sinergia com os critérios normativos da **WCAG 2.2** e **ABNT NBR 17225**, assegurando que interfaces acessíveis sejam também intuitivas, eficientes e agradáveis.

---

## 1. Visibilidade do estado do sistema (*Visibility of system status*)

O sistema deve sempre manter as pessoas usuárias informadas sobre o que está acontecendo no momento, por meio de feedback imediato, apropriado e em tempo razoável.

- **Exemplos práticos:**
    - Indicadores de carregamento visíveis e acessíveis (*spinners*, barras de progresso percentuais, *skeletons*);
    - Alertas contextuais de status ("Salvando rascunho...", "Alterações salvas com sucesso");
    - Indicação visual e programática da etapa atual em fluxos com múltiplos passos (breadcrumbs, steppers).
- **Pergunte-se:**
    - O usuário sabe exatamente se a sua ação foi processada ou se o sistema travou?
    - A interface fornece resposta sensorial ou visual rápida após cliques ou envios de dados?
- **Risco se ignorado:**
    - Cliques repetidos em botões de ação (causando duplicação de requisições ou transações);
    - Insegurança, frustração e abandono da tarefa por acreditar que o sistema está fora do ar.

---

## 2. Correspondência entre o sistema e o mundo real (*Match between system and the real world*)

A interface deve falar a linguagem do público-alvo, utilizando palavras, expressões, termos e conceitos familiares ao usuário, em vez de nomenclaturas internas ou jargões técnicos de sistemas/banco de dados.

- **Exemplos práticos:**
    - Metáforas do mundo físico compreensíveis (ex.: ícone de lixeira para exclusão, pasta para agrupamentos, carrinho para compras);
    - Linguagem simples, direta e centrada no cidadão (ex.: "Solicitar 2ª via da CNH" em vez de "Executar transação do serviço CNH_V2_REQ");
    - Formatação de dados de acordo com a convenção local (datas em `DD/MM/AAAA`, moeda em `R$`).
- **Pergunte-se:**
    - O vocabulário utilizado faz sentido para alguém leigo ou sem afinidade técnica?
    - As mensagens de interface refletem a perspectiva do usuário ou a estrutura do banco de dados?
- **Risco se ignorado:**
    - Ruídos de comunicação, erros de interpretação e dependência de suporte externo para concluir ações rotineiras.

---

## 3. Controle e liberdade do usuário (*User control and freedom*)

Pessoas frequentemente executam ações por engano ou mudam de ideia durante um fluxo. A interface precisa disponibilizar uma "saída de emergência" clara e imediata, sem exigir que o usuário passe por processos punitivos ou burocráticos.

- **Exemplos práticos:**
    - Ações de **Desfazer (*Undo*)** e **Refazer (*Redo*)** fáceis de acionar;
    - Botões visíveis de **Cancelar**, **Fechar** ou **Voltar** em caixas de diálogo, modais e telas de etapas;
    - Confirmação explícita antes de operações destrutivas ou irreversíveis (ex.: exclusão permanente de cadastros).
- **Pergunte-se:**
    - Se um usuário clicar acidentalmente em uma opção, ele consegue retornar ao estado anterior sem perda de dados?
    - É possível fechar um modal utilizando a tecla `Esc` ou clicando fora dele?
- **Risco se ignorado:**
    - Medo de explorar a interface por receio de "estragar tudo" ou perder o progresso realizado.

---

## 4. Consistência e padrões (*Consistency and standards*)

As pessoas não devem precisar adivinhar se palavras, situações ou ações diferentes significam a mesma coisa. O design deve respeitar as convenções da plataforma e manter coerência interna em todas as telas.

- **Exemplos práticos:**
    - **Consistência interna:** Botões de ação primária com o mesmo estilo, peso visual e posicionamento ao longo de todo o sistema;
    - **Consistência externa:** Seguir os padrões consolidados da Web ou do sistema operacional (ex.: links com sublinhado ou cor destacada, atalho `Ctrl+Z` para desfazer, ícone de engrenagem para configurações).
- **Pergunte-se:**
    - Elementos visuais semelhantes desempenham funções equivalentes em diferentes partes do site?
    - Estamos reinventando padrões consolidados sem um benefício claro de usabilidade?
- **Risco se ignorado:**
    - Desorientação, aumento significativo da carga cognitiva e curva de aprendizado desnecessariamente íngreme.

---

## 5. Prevenção de erros (*Error prevention*)

Ainda melhor do que exibir boas mensagens de erro é projetar uma interface que impeça a ocorrência de erros desde o início, seja eliminando condições propensas a falhas ou confirmando a intenção do usuário antes de ações críticas.

- **Exemplos práticos:**
    - Máscaras dinâmicas de formatação para campos estruturados (CPF, CEP, telefone, data);
    - Validação de formato em tempo real (inline), indicando os requisitos antes do clique final de envio;
    - Utilização de seletores (*dropdowns*, calendários ou botões de rádio) quando as opções forem finitas, evitando digitação livre propensa a erros de sintaxe;
    - Bloqueio inteligente de ações inválidas (ex.: não permitir selecionar uma data de retorno anterior à de ida).
- **Pergunte-se:**
    - O sistema oferece guardrails que impedem entradas de dados obviamente incorretas?
    - Foram criadas proteções adicionais para ações com impacto financeiro ou cadastral permanente?
- **Risco se ignorado:**
    - Frustração recorrente, mensagens repetidas de falha e sensação de incapacidade por parte do usuário.

---

## 6. Reconhecimento em vez de memorização (*Recognition rather than recall*)

A memória de trabalho humana possui capacidade limitada. O sistema deve minimizar a sobrecarga de memória tornando elementos, ações e opções visíveis e facilmente recuperáveis, em vez de exigir que a pessoa se lembre de dados vistos em telas anteriores.

- **Exemplos práticos:**
    - Rótulos sempre visíveis em campos de formulário (não usar apenas placeholders temporários que somem ao digitar);
    - Histórico recente de buscas, filtros ativados destacados e sugestões contextuais;
    - Resumo das seleções feitas durante um fluxo de compra ou agendamento antes da confirmação.
- **Pergunte-se:**
    - O usuário é forçado a memorizar um código, número de protocolo ou instrução de uma página para digitar em outra?
    - As opções fundamentais para a decisão estão acessíveis no campo de visão imediato?
- **Risco se ignorado:**
    - Sobrecarga cognitiva, maior taxa de abandono e sensação de cansaço mental durante o uso.

---

## 7. Flexibilidade e eficiência de uso (*Flexibility and efficiency of use*)

Atalhos e aceleradores ocultos aos novatos podem agilizar substancialmente a rotina de usuários experientes. O sistema deve oferecer flexibilidade para acomodar tanto novatos quanto pessoas com alto grau de proficiência.

- **Exemplos práticos:**
    - Atalhos de teclado para comandos frequentes (ex.: `Ctrl+S`, `Tab`, teclas de acesso rápido);
    - Personalização de painéis, filtros salvos e histórico de preferências;
    - Suporte a ações em lote (ex.: selecionar múltiplos itens para arquivar ou excluir).
- **Pergunte-se:**
    - Usuários avançados ou que usam a ferramenta diariamente possuem formas de trabalhar com maior agilidade?
    - A presença desses atalhos preserva a simplicidade da interface para quem está acessando pela primeira vez?
- **Risco se ignorado:**
    - Ineficiência operacional, lentidão em tarefas repetitivas e perda de produtividade.

---

## 8. Estética e design minimalista (*Aesthetic and minimalist design*)

As interfaces não devem conter informações irrelevantes ou raramente necessárias. Cada elemento adicional na tela compete com os elementos prioritários e diminui a visibilidade do que é verdadeiramente essencial.

- **Exemplos práticos:**
    - Hierarquia tipográfica bem definida que direciona a leitura para o conteúdo central;
    - Espaçamento adequado (respiro visual) e agrupamento semântico de blocos de informação;
    - Redução de textos redundantes, ícones meramente decorativos e ruído visual excessivo.
- **Pergunte-se:**
    - Todo dado ou botão presente nesta tela é realmente relevante para a conclusão da tarefa atual?
    - O visual favorece a escaneabilidade rápida da página?
- **Risco se ignorado:**
    - Poluição visual, distração e dificuldade em localizar as ações primárias de interação.

---

## 9. Ajudar usuários a reconhecer, diagnosticar e recuperar-se de erros (*Help users recognize, diagnose, and recover from errors*)

As mensagens de erro devem ser expressas em linguagem clara, objetiva e humana (sem códigos de erro ou detalhes de pilha de software), apontar com exatidão a causa do problema e sugerir construtivamente uma solução viável.

- **Exemplos práticos:**
    - *Incorreto:* `Erro 500: Internal NullPointer in svc_auth.ts line 42`.
    - *Correto:* `Não foi possível entrar no sistema. Seu CPF ou senha estão incorretos. [Esqueci minha senha]`.
    - Destaque direto próximo ao campo incorreto, com a instrução exata para retificação (ex.: "A senha deve conter ao menos 8 caracteres, incluindo um número").
- **Pergunte-se:**
    - A mensagem informa claramente o que ocorreu e o que a pessoa precisa fazer para continuar?
    - O tom da mensagem é acolhedor e informativo, sem culpar o usuário pelo erro?
- **Risco se ignorado:**
    - Bloqueio completo da navegação, chamados desnecessários ao suporte técnico e perda de confiança no serviço.

---

## 10. Ajuda e documentação (*Help and documentation*)

Embora seja preferível que o sistema possa ser utilizado sem documentação, pode ser essencial fornecer orientações, tutoriais ou documentações contextuais, fáceis de pesquisar e focadas na tarefa imediata.

- **Exemplos práticos:**
    - Seção de Perguntas Frequentes (FAQ) categorizada por assunto com campo de busca ágil;
    - Tooltips explicativos (*dicas de tela*) ao lado de campos que exigem dados técnicos específicos;
    - Guias passo a passo ou tutoriais de introdução no primeiro acesso (*onboarding*).
- **Pergunte-se:**
    - Se o usuário tiver uma dúvida pontual, ele consegue encontrar a resposta sem ter que sair do fluxo atual?
    - O material de ajuda é sucinto, direto e focado em passos concretos de ação?
- **Risco se ignorado:**
    - Abandono de cadastros ou processos complexos por falta de orientação mínima acessível.

---

## Relação entre as Heurísticas de Nielsen e a Acessibilidade (WCAG)

No escopo de projetos de Interação Humano-Computador:

| Referencial | Foco Principal | Pergunta Central |
| ----------- | -------------- | ---------------- |
| **WCAG 2.2 / NBR 17225** | Conformidade técnica de acessibilidade (Perceptível, Operável, Compreensível e Robusto). | *A interface permite que pessoas com deficiência ou tecnologias assistivas tenham acesso integral ao conteúdo?* |
| **Heurísticas de Nielsen** | Usabilidade, cognição, eficiência e fluidez da interação. | *A experiência de uso é clara, ágil, previsível e livre de atritos para os usuários?* |

A união das **Heurísticas de Nielsen** com as **diretrizes de Acessibilidade** garante que o produto digital não seja apenas tecnicamente compatível, mas verdadeiramente acolhedor e funcional para todas as pessoas.

---

## Referências Bibliográficas

1. **NIELSEN, Jakob.** *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group, 1994. Disponível em: <https://www.nngroup.com/articles/ten-usability-heuristics/>.
2. **NIELSEN, Jakob; MOLICH, Rolf.** *Heuristic evaluation of user interfaces*. In: Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI '90), p. 249–256, 1990.
3. **PREECE, Jennifer; SHARP, Helen; ROGERS, Yvonne.** *Design de Interação: Além da Interação Humano-Computador*. 3ª ed. Bookman, 2013.
4. **W3C.** *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation, 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>.
