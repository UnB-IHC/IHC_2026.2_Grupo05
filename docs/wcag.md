# Diretrizes WCAG

O WCAG (Web Content Accessibility Guidelines, ou Diretrizes de Acessibilidade para Conteúdo Web) é um conjunto de recomendações internacionais desenvolvido pelo W3C (World Wide Web Consortium) para tornar o conteúdo da web acessível a pessoas com diferentes tipos de deficiência.

O principal objetivo dessas diretrizes é fornecer um padrão compartilhado que garanta a inclusão digital para usuários com deficiências visuais, auditivas, motoras ou cognitivas. Além disso, a adoção do WCAG beneficia a usabilidade geral para todos os usuários (como idosos) e melhora o posicionamento de um site nos mecanismos de busca (SEO).

---

## Os 4 Princípios da Acessibilidade (P.O.U.R.)

### 1. Percebível (*Perceivable*)
As informações e os elementos da interface devem ser apresentados de formas que os usuários consigam percebê-los. O acesso ao conteúdo não pode depender exclusivamente de um único sentido. Isso inclui fornecer textos alternativos (alt) em imagens para leitores de tela, oferecer legendas e audiodescrição para vídeos, e garantir um contraste adequado de cores.

### 2. Operável (*Operable*)
Os componentes de navegação e interface precisam ser operáveis por diferentes formas de interação. Isso exige garantir que o site possa ser navegado inteiramente por meio do teclado, oferecer tempo suficiente para a realização de tarefas e evitar conteúdos que possam desencadear convulsões (como flashes na tela).

### 3. Compreensível (*Understandable*)
As informações e o funcionamento da interface devem ser fáceis de entender. Deve-se utilizar uma linguagem clara, evitar mudanças inesperadas no contexto da página e oferecer assistência ou prevenção de erros ao preencher formulários.

### 4. Robusto (*Robust*)
O conteúdo digital deve ser codificado de maneira robusta o suficiente para ser interpretado de forma confiável por uma ampla variedade de tecnologias assistivas e navegadores atuais ou futuros. Isso é alcançado por meio do uso de códigos HTML semânticos e da definição de nomes acessíveis para os componentes técnicos.

---

## Níveis de Conformidade

| Nível | Impacto e Descrição |
| ----- | ------------------- |
| <p id="a">**A (Básico/Crítico)**</p> | Representa os requisitos básicos e atua na remoção das barreiras mais graves que impedem totalmente o acesso de usuários ao conteúdo. |
| <p id="aa">**AA (Padrão Global)**</p> | É considerado o padrão intermediário, amplamente adotado e exigido internacionalmente pela maioria das legislações. Para que um conteúdo atinja o Nível AA, ele precisa obrigatoriamente atender a todos os critérios dos níveis A e AA. |
| <p id="aaa">**AAA (Excelência)**</p> | Representa o nível mais avançado e rigoroso de acessibilidade especializada. Possui critérios bastante complexos que nem sempre são aplicáveis a todos os tipos de conteúdo web. |

<style>
    #a {
        color: red
    }
    #aa {
        color: green
    }
    #aaa {
        color: yellow
    }
</style>