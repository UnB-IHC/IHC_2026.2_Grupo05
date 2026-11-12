# Ferramentas de Apoio

Página destinada a listar ferramentas práticas de verificação de acessibilidade e usabilidade.

---

## Validação automática

### ASES (Avaliador e Simulador de Acessibilidade)
- **Quando usar:** Verificação inicial de conformidade em portais e páginas públicas, focada nas diretrizes governamentais brasileiras (eMAG).
- **Como usar:** Abra a página publicada, rode a análise com o endereço completo no software e registre os achados (erros e alertas) divididos por categoria.
- **Limitações:** Não avalia a intenção ou a experiência do usuário, não interpreta estados dinâmicos (Javascript) e pode gerar falsos positivos.

### axe DevTools
- **Quando usar:** Checagem profunda de componentes e do DOM durante o desenvolvimento (tanto em ambiente local quanto publicado).
- **Como usar:** Com a página aberta, acesse o DevTools do navegador, vá para a aba "axe", clique em "Analyze" e navegue pelos itens reportados para ir ao elemento exato.
- **Limitações:** Cobre apenas regras objetivas de código (HTML/ARIA); não avalia a linguagem, fluxos complexos ou a usabilidade real.

### Lighthouse
- **Quando usar:** Medição rápida de métricas e obtenção de uma pontuação inicial de acessibilidade, além de performance e boas práticas web.
- **Como usar:** Acesse o DevTools do Chrome, vá na aba "Lighthouse", selecione a opção "Accessibility" e clique em "Analyze page load".
- **Limitações:** A nota alta não é um certificado de acessibilidade; muitos critérios exigem validação humana e passam despercebidos pela ferramenta.

### WAVE (Web Accessibility Evaluation Tool)
- **Quando usar:** Obtenção de feedback visual imediato sobre erros de estrutura, hierarquia de cabeçalhos e falhas de contraste renderizados diretamente na interface.
- **Como usar:** Ative a extensão no navegador, percorra os ícones que aparecem sobre o layout e clique neles para ver os detalhes dos alertas e erros.
- **Limitações:** Pode poluir visualmente a interface da página testada e gera falsos positivos dependendo de como o CSS está estruturado.

---

## Testes Manuais e Tecnologias Assistivas

### Leitores de Tela (NVDA, VoiceOver, TalkBack)
- **Quando usar:** Testes empíricos essenciais de operabilidade, navegação não-visual e validação da estrutura semântica (HTML/ARIA).
- **Como usar:** Ative o leitor correspondente ao seu sistema operacional, navegue pela página utilizando exclusivamente o teclado (Tab, Shift+Tab, setas, teclas de atalho) e teste o feedback auditivo em botões, links e formulários.
- **Limitações:** Possui curva de aprendizado para dominar os atalhos, exige atenção manual constante e os comportamentos podem variar entre diferentes softwares (NVDA vs JAWS vs VoiceOver).