# Guia de Construção e Manutenção de Sítio Acessível

> **Contexto de Aplicação:** Este guia orienta equipes multidisciplinares (desenvolvedores, designers, redatores e auditores de qualidade) sobre como conceber, codificar e manter serviços digitais plenamente acessíveis no ecossistema do **Meu SUS Digital**, integrando de forma prática as recomendações da **WCAG 2.2 (Nível AA)**, da **ABNT NBR 17225:2025** e dos padrões federais (**eMAG / Design System Gov.br**).

---

## Conexão com IHC: Personas e Heurísticas de Usabilidade

A construção de um serviço público acessível não é um mero cumprimento de regras técnicas isoladas; ela responde a necessidades reais de pessoas e caminha lado a lado com a boa usabilidade:

* **Foco nas Personas do Projeto:** Cada diretriz deste guia foi pensada para eliminar barreiras vivenciadas pelos usuários do sistema de saúde pública — tais como idosos com dificuldades de visão ou manuseio do celular, pessoas com baixa acuidade visual sob luz solar, cidadãos cegos navegando por leitores de tela e pessoas com limitações motoras ou cognitivas. Para conhecer detalhadamente esses perfis e suas necessidades, consulte a seção [Persona de Referência](../avaliacao/persona.md).
* **Alinhamento com as Heurísticas de Nielsen:** Práticas de acessibilidade fortalecem diretamente os princípios fundamentais de usabilidade. Por exemplo, a clareza nas mensagens de erro atende à *Prevenção e Recuperação de Erros*, a ordem lógica e atalhos reforçam o *Controle e Liberdade do Usuário*, e a consistência visual e terminológica sustenta a *Consistência e Padrões*. Para aprofundar esses critérios, acesse a página de [Heurísticas de Nielsen](../metodo/heuristicas.md).

---

## 1. Diretrizes Práticas de Desenvolvimento Web (Front-End)

A implementação de código robusto e acessível assegura a interoperabilidade com navegadores convencionais e tecnologias assistivas (leitores de tela como NVDA, JAWS e TalkBack, navegadores textuais, acionadores de pressão e teclados virtuais).

### 1.1 Semântica Estrutural Nativa e Pontos de Referência (Landmarks)
O HTML nativo carrega papéis e comportamentos automáticos de foco e teclado. Em aplicações de saúde pública, a previsibilidade da tela é vital:

* **Uso prioritário de tags semânticas estruturais:** Empregue `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` e `<footer>`.
* **Mapeamento de regiões:** Reforce as áreas principais para facilitar a navegação em leitores de tela:
  * Topo institucional: `<header role="banner">`
  * Menu primário: `<nav role="navigation" aria-label="Menu Principal do SUS">`
  * Área de dados em saúde: `<main id="conteudo-principal" role="main">`
  * Busca de estabelecimentos/vacinas: `<form role="search">`
  * Rodapé e contatos da Ouvidoria SUS: `<footer role="contentinfo">`
* **Regiões únicas:** Evite duplicidade de `<main>`. Caso haja mais de um elemento `<nav>` (ex.: menu institucional e paginação), diferencie-os obrigatoriamente através de atributos `aria-label` descritivos.

```html
<!-- Exemplo: Estrutura semântica para consulta de vacinação -->
<header role="banner">
  <!-- Barra de acessibilidade governamental -->
  <nav aria-label="Acessibilidade e Atalhos" class="gov-acessibilidade">
    <a href="#conteudo-principal" accesskey="1">Ir para o conteúdo [1]</a>
    <a href="#menu-principal" accesskey="2">Ir para o menu [2]</a>
    <a href="#busca-sus" accesskey="3">Ir para a busca [3]</a>
  </nav>
</header>

<main id="conteudo-principal" role="main">
  <h1>Histórico de Imunização</h1>
  <section aria-labelledby="vacinas-recentes">
    <h2 id="vacinas-recentes">Doses Aplicadas</h2>
    <!-- Conteúdo da tabela ou lista semântica -->
  </section>
</main>
```

### 1.2 Interação por Teclado e Gestão de Foco
Todo serviço crítico do Meu SUS (agendamento de consultas, emissão do Certificado Nacional de Vacinação, consulta de medicamentos e exames) deve ser 100% operável via teclado (Tab, Shift+Tab, Enter, Espaço, Esc e Setas), sem exigir mouse ou gestos táteis complexos.

* **Ordem de Foco Sequencial e Lógica:** A ordem de tabulação no código deve acompanhar a ordem visual e lógica de leitura (evite `tabindex` positivo; use `tabindex="0"` apenas para incluir controles customizados ou `tabindex="-1"` para foco programático).
* **Ausência de Armadilhas de Teclado:** O usuário que acessa uma janela modal (ex.: termo de consentimento ou filtro de agendamento) deve conseguir fechá-la via tecla `Esc` ou botão focado, com o foco retornando imediatamente ao elemento gatilho que abriu a janela.
* **Foco Não Obscurado:** Elementos em foco nunca podem ficar totalmente cobertos por cabeçalhos fixos no topo, avisos de cookies ou barras flutuantes inferiores. Utilize `scroll-margin-top` no CSS para garantir margem de respiro segura na navegação.

```css
/* Prevenção de sobreposição de foco por cabeçalhos fixos */
:target,
[tabindex="-1"]:focus {
  scroll-margin-top: 5rem;
}

/* Indicador de foco evidente com dupla borda para alto contraste */
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible {
  outline: 3px solid #0056b3;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px #ffffff;
}
```

### 1.3 Formulários Robustos, Erros e Autenticação Acessível
Formulários no Meu SUS coletam dados sensíveis (CPF, Cartão Nacional de Saúde - CNS, datas, CEP). Erros de preenchimento causam frustração e exclusão de idosos e pessoas com deficiência:

* **Associação Explícita de Rótulos:** Todo campo de entrada deve possuir um `<label>` correspondente com atributo `for` idêntico ao `id` do campo.
* **Campos Obrigatórios Transparentes:** Sinalize obrigatoriedade visualmente e de forma programável com o atributo nativo `required` e `aria-required="true"`.
* **Identificação de Propósito de Entrada:** Adicione atributos de preenchimento automático padronizados (`autocomplete="cpf"`, `autocomplete="tel"`, `autocomplete="postal-code"`, `autocomplete="email"`).
* **Reaproveitamento de Dados (Entrada Redundante):** Informações já preenchidas pelo cidadão (como dados pessoais ou endereço) em etapas anteriores de um agendamento devem ser reaproveitadas automaticamente ou oferecidas para seleção rápida, sem exigir redigitação repetitiva.
* **Mensagens e Sugestões de Erro em Texto:** Erros de validação devem associar o texto explicativo ao campo via `aria-describedby` e `aria-invalid="true"`, informando claramente como corrigir (ex.: "O número do CNS deve conter exatamente 15 dígitos numéricos").
* **Autenticação Acessível (Acesso via Gov.br):** Como o Meu SUS utiliza o login unificado do Gov.br, é imprescindível **nunca bloquear a função de copiar e colar** em campos de senha, tokens de verificação em duas etapas ou códigos de confirmação (permitindo o uso pleno de gerenciadores de senhas). Além disso, evite desafios de segurança baseados em testes cognitivos complexos ou CAPTCHAs puramente visuais, priorizando alternativas como confirmação por e-mail, biometria nativa do aparelho ou autenticação em dois fatores acessível.

```html
<!-- Formulário Acessível de Busca de Unidade Básica de Saúde (UBS) -->
<form action="/buscar-ubs" method="post" novalidate>
  <div class="campo-grupo">
    <label for="campo-cep">
      CEP Residencial <span aria-hidden="true">*</span>
      <span class="sr-only">(campo obrigatório)</span>
    </label>
    <input 
      type="text" 
      id="campo-cep" 
      name="cep" 
      required 
      pattern="[0-9]{5}-[0-9]{3}" 
      autocomplete="postal-code"
      inputmode="numeric"
      aria-describedby="dica-cep erro-cep"
      aria-invalid="true"
    />
    <small id="dica-cep">Formato: 00000-000</small>
    <div id="erro-cep" class="mensagem-erro" role="alert">
      Informe um CEP válido com 8 números para localizar os postos de saúde da sua região.
    </div>
  </div>
  <button type="submit">Localizar Unidade</button>
</form>
```

### 1.4 Notificações Dinâmicas sem Roubo de Foco (Status Messages)
Atualizações assíncronas (como resultados de carregamento de exames, filas virtuais ou confirmação de agendamento) devem comunicar-se com leitores de tela sem mover o cursor abruptamente, utilizando atributos `role="status"` ou `aria-live="polite"`.

---

## 2. Diretrizes Práticas de Design de Interface (UI/UX)

O design visual inclusivo garante que pessoas com diferentes graus de baixa visão, daltonismo, dificuldades motoras ou uso em ambientes externos sob luz solar intensa possam perceber e interagir com as interfaces de saúde.

### 2.1 Relações de Contraste e Independência de Cores
* **Texto Convencional (mínimo 4.5:1):** Textos abaixo de 18pt (ou 14pt em negrito) devem apresentar contraste de pelo menos 4.5:1 contra a cor de fundo.
* **Texto em Tamanho Grande (mínimo 3:1):** Títulos principais destacados requerem contraste mínimo de 3:1.
* **Elementos Gráficos e Componentes de Interface (mínimo 3:1):** Bordas de caixas de entrada de texto, botões de ação secundária, ícones de status de vacinação e marcadores de navegação devem atingir pelo menos 3:1 contra o fundo adjacente.
* **Independência de Cor:** Informações de saúde não podem depender exclusivamente de cor. Um resultado de exame ou alerta de vacina em atraso deve somar à cor um ícone representativo e um texto explícito (ex.: tag textual "Atrasada", "Pendente", "Concluída").

| Situação no Meu SUS | Exemplo Inadequado | Implementação Conforme |
| :--- | :--- | :--- |
| **Situação Vacinal** | Apenas um círculo vermelho ao lado da vacina | Círculo vermelho + Ícone de exclamação + Texto legível `[Atrasada]` com contraste de 4.7:1 |
| **Laudo de Exame** | Texto verde claro `#7ED321` sobre fundo branco | Fundo verde escuro `#0D6832` sobre texto branco `#FFFFFF` (Contraste 6.4:1) com rótulo "Disponível para download" |
| **Botão de Agendamento** | Botão cinza claro desabilitado sem indicação textual | Botão com borda destacada e mensagem textual explicando motivo de bloqueio caso haja pendência cadastral |

### 2.2 Dimensões de Alvos de Toque e Espaçamento (Target Size)
Em telas sensíveis ao toque (smartphones utilizados majoritariamente pela população para acessar o Meu SUS), alvos pequenos causam toques acidentais e exclusão:

* **Tamanho Mínimo Obrigatório:** Qualquer área interativa (botões, ícones de download de laudos, abas) deve possuir dimensões mínimas de **24 × 24 pixels CSS**, ou espaçamento compensatório periférico equivalente.
* **Tamanho Recomendado para Dispositivos Móveis:** Em botões primários e controles de ação crítica no celular, priorize alvos com no mínimo **44 × 44 pixels CSS**.

### 2.3 Responsividade, Reflow e Zoom sem Perda de Conteúdo
* **Reflow sem Rolagem Horizontal:** O conteúdo do Meu SUS deve ser responsivo de 320px de largura (equivalente a 400% de zoom em monitor padrão) até grandes resoluções sem exigir rolagem bidimensional.
* **Não Bloqueio de Zoom:** Nunca desative o zoom nativo do navegador no elemento de cabeçalho da página. O cidadão com baixa visão deve ter total liberdade para ampliar a interface conforme sua necessidade.

### 2.4 Padronização Federal: Alto Contraste, Barra Gov.br e VLibras
Em consonância com as diretrizes da Identidade Digital do Governo Federal:
* **Barra de Acessibilidade Governamental:** Disponibilize no topo da página atalhos de salto para conteúdo, menu e busca, além do botão de **Alto Contraste** (paleta de alto impacto com fundo preto `#000000`, textos brancos `#FFFFFF` e links em amarelo `#FFFF00` destacados e sublinhados).
* **Integração com VLibras:** Como padrão obrigatório dos portais de serviços públicos federais, a interface deve integrar o widget oficial do **VLibras** (posicionado de forma fixa e acessível, com botão devidamente rotulado), garantindo a tradução de conteúdos digitais para a Língua Brasileira de Sinais de maneira imediata para a comunidade surda.

---

## 3. Diretrizes de Produção e Geração de Conteúdo Acessível

O conteúdo textual e multimídia em saúde deve ser universalmente compreensível, considerando os diversos níveis de escolaridade e capacidades sensoriais da população atendida pelo SUS.

### 3.1 Descrição Textual de Imagens e Ícones
* **Imagens Informativas e Gráficos de Saúde:** Imagens de campanhas, gráficos epidemiológicos ou cronogramas de vacinação devem possuir texto alternativo descritivo claro via atributo `alt`.
* **Imagens Complexas (Infográficos e Fluxogramas):** Quando o conteúdo for denso, forneça um resumo sucinto no `alt` e a transcrição completa na própria página ou por link acessível logo abaixo da figura.
* **Imagens Puramente Decorativas:** Ilustrações abstratas ou divisores estéticos devem receber atributo `alt=""` vazio e `aria-hidden="true"`, para que não poluam a leitura de usuários de leitores de tela.
* **Imagens Funcionais (Ícones de Ação):** Botões compostos apenas por ícones (ex.: impressora para emitir comprovante, lupa para busca) necessitam de nome acessível via `aria-label` ou texto escondido para tecnologias assistivas (`.sr-only`).

```html
<!-- Exemplo de botão funcional com ícone -->
<button type="button" class="btn-icone" aria-label="Baixar Certificado Nacional de Vacinação COVID-19 em PDF">
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><!-- ícone de download --></svg>
</button>
```

### 3.2 Linguagem Simples, Escrita e Inteligibilidade
A saúde pública envolve terminologias técnicas complexas que geram barreiras cognitivas severas. Seguindo as boas práticas de Linguagem Simples:

* **Vocabulário Direto:** Prefira termos comuns e familiares (ex.: em vez de "imunobiológico administrado por via intramuscular", adote "vacina aplicada no braço").
* **Estrutura Frasal:** Escreva sentenças curtas em ordem direta (sujeito + verbo + complemento), restringindo cada parágrafo a uma ideia central.
* **Siglas e Abreviações Médicas:** Na primeira menção de siglas ou acrônimos do sistema de saúde (SUS, RNDS, UBS, UPA, SAMU, DTP), forneça a forma por extenso e utilize a tag `<abbr title="Sistema Único de Saúde">SUS</abbr>`.

### 3.3 Links Descritivos e Arquivos Anexos
* **Links Contextualizados:** Elimine totalmente termos genéricos como "clique aqui", "saiba mais" ou "leia mais". O texto do link deve enunciar seu objetivo mesmo fora do contexto (ex.: "Consultar farmácias credenciadas no Programa Farmácia Popular").
* **Links para Documentos Externos e PDFs:** Especifique formato e tamanho aproximado no próprio corpo do link (ex.: "Cartão Nacional de Saúde Digital (.pdf, 180 KB) - Abre em nova janela").

### 3.4 Recursos de Acessibilidade em Mídias (Vídeos e Áudios)
Vídeos instrutivos do Ministério da Saúde sobre prevenção, campanhas e uso do aplicativo devem disponibilizar:
* Legendas descritivas completas para diálogos e efeitos sonoros relevantes.
* Audiodescrição para elementos visuais essenciais que não são falados na narração.
* Janela de intérprete humano de Libras em vídeos e sincronização com o ecossistema VLibras.

---

## 4. Estratégia de Validação e Manutenção Contínua da Acessibilidade

A acessibilidade não é uma etapa pontual de finalização, mas um ciclo contínuo integrado ao desenvolvimento e à evolução do serviço.

### 4.1 Validação Técnica Automatizada
* **WAVE (Web Accessibility Evaluation Tool):** Empregado para análise preliminar de código, acusando ausência de `alt`, contraste insuficiente em elementos estáticos, inconsistência na hierarquia de cabeçalhos (`h1` a `h6`) e formulários sem rótulos.
* **Lighthouse / Axe-core:** Execução periódica em pipelines de integração contínua (CI/CD) para barrar regressões técnicas antes da publicação de novas versões do Meu SUS.
* **Limitações:** Validadores automatizados cobrem apenas entre 30% e 40% das falhas de acessibilidade. A validação mecânica nunca substitui a auditoria humana.

### 4.2 Inspeção Manual Especializada
* **Navegação Exclusiva por Teclado:** Percorrer 100% dos fluxos de ponta a ponta (login via Gov.br, navegação nas telas de agendamento, emissão de documentos) utilizando exclusivamente as teclas `Tab`, `Shift+Tab`, `Enter`, `Espaço`, `Esc` e setas direcionais, certificando-se de que o foco é visível e sequencial.
* **Auditoria com Leitores de Tela:**
  * **Desktop:** NVDA (NonVisual Desktop Access) e JAWS em navegadores como Google Chrome e Mozilla Firefox.
  * **Mobile:** TalkBack (Android) e VoiceOver (iOS), avaliando a precisão da leitura de laudos, botões e mensagens de status.
* **Teste com Zoom de 200% a 400%:** Confirmar que textos e blocos se reorganizam fluidamente sem sobreposição de caixas nem surgimento de rolagem horizontal.

### 4.3 Participação de Usuários Reais e Governança
* **Testes de Usabilidade com Pessoas com Deficiência:** Conduzir sessões de avaliação envolvendo pessoas cegas, com baixa visão, usuárias de Libras, pessoas neurodivergentes e idosos, avaliando a realização autônoma de tarefas críticas no Meu SUS.
* **Canal Ativo de Feedback de Acessibilidade:** Manter visível no rodapé e na página de acessibilidade um formulário direto de contato para que cidadãos reportem barreiras encontradas, em cumprimento às diretrizes legais de inclusão cidadã.
