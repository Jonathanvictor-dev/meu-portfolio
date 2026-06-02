# 🚀 Portfólio Moderno - Jonathan Victor

Este é um portfólio profissional desenvolvido com foco em performance, acessibilidade e design minimalista. O projeto utiliza uma arquitetura limpa e tecnologias modernas de front-end para garantir uma experiência de usuário fluida em todos os dispositivos.

## 🛠️ Tecnologias e Ferramentas

As seguintes tecnologias foram utilizadas na construção deste projeto:

- **HTML5 Semântico:** Estruturação de conteúdo otimizada para SEO e tecnologias assistivas.
- **Tailwind CSS:** Framework CSS utilitário para estilização rápida, responsividade e animações.
- **Vanilla JavaScript:** Lógica de interatividade, manipulação de DOM e animações sem dependências externas pesadas.
- **FontAwesome 6:** Biblioteca de ícones vetoriais para uma interface visual intuitiva.
- **Google Fonts (Inter):** Tipografia moderna focada em legibilidade.

## ✨ Funcionalidades

- 📱 **Design Totalmente Responsivo:** Layout adaptável para smartphones, tablets e desktops.
- ♿ **Acessibilidade (WCAG):** Implementação rigorosa de atributos ARIA, semântica correta e contraste adequado.
- 🎭 **Animações de Revelação:** Uso da `Intersection Observer API` para efeitos de fade-in enquanto o usuário navega pela página.
- 🍔 **Menu Mobile Interativo:** Navegação otimizada para telas pequenas com transições suaves.
- 📩 **Formulário de Contato:** Sistema de feedback visual (Toast notification) após o envio simulado.
- 🚀 **Otimização de Performance:** Imagens com `loading="lazy"` e carregamento crítico otimizado.

## 🚀 Como iniciar o projeto

### Pré-requisitos

Para visualizar o projeto, basta um navegador moderno. No entanto, se você deseja modificar os estilos utilizando o Tailwind CSS, precisará do Node.js instalado.

### Passo a passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/Jonathanvictor-dev/portfolio.git
   ```

2. **Instalar as dependências de desenvolvimento:**
   ```bash
   npm install
   ```

3. **Compilar o Tailwind CSS (Modo Watch):**
   Se você fizer alterações nas classes CSS no HTML, execute o comando abaixo para atualizar o arquivo `output.css`:
   ```bash
   npx tailwindcss -i ./css/input.css -o ./css/output.css --watch
   ```

4. **Abrir o projeto:**
   Abra o arquivo `index.html` diretamente no navegador ou utilize a extensão **Live Server** no VS Code para uma melhor experiência de desenvolvimento.

## 📁 Estrutura do Projeto

```plaintext
├── index.html
├── js/
│   └── main.js
├── css/
│   ├── style.css
│   └── output.css
├── assets/
│   ├── images/
│   └── favicons/
├── docs/
├── .gitignore
├── README.md
├── package.json
└── tailwind.config.js
```
