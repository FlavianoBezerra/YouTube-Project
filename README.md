# Clone da Interface do YouTube

Este projeto é um clone da interface do YouTube, construído com **React**, **TypeScript** e uma API backend que gerencia usuários e vídeos. A interface do YouTube foi replicada para exibir vídeos obtidos da API pública do YouTube e permitir que os usuários se registrem, façam login e gerenciem seus vídeos. O backend é responsável pela criação e autenticação de usuários, bem como pela criação, busca e pesquisa de vídeos.
- [Acessar projeto online](https://you-tube-project-kappa.vercel.app/).
- Você pode acessar o repositório do back-end do projeto [aqui](https://github.com/FlavianoBezerra/API-YouTube.git).

## Estrutura do Projeto

A estrutura do diretório do projeto é organizada da seguinte maneira:

- **node_modules**: Pasta que armazena as dependências do projeto.  
- **public**: Arquivos estáticos (imagens, fontes, `index.html`).  
- **src**: Pasta contendo o código fonte do projeto.  
  - **assets**: Imagens, fontes e outros ativos estáticos.  
  - **components**: Componentes reutilizáveis da interface.  
    - **DrawerMenu**: Menu lateral de navegação.
      - `index.tsx`: Componente principal.
      - `styles.ts`: Estilização com styled-components.
    - **dropDownCreateAccount**: Menu suspenso para criar conta.
      - `index.tsx`: Componente principal.
      - `styles.ts`: Estilização com styled-components.
    - **dropDownMenu**: Menu suspenso de navegação do usuário.
      - `index.tsx`: Componente principal.
      - `styles.ts`: Estilização com styled-components.
    - **footer**: Rodapé da página.
      - `index.tsx`: Componente principal.
      - `styles.ts`: Estilização com styled-components.
    - **header**: Cabeçalho da página.
      - `index.tsx`: Componente principal.
      - `styles.ts`: Estilização com styled-components.
    - **menu**: Menu principal da aplicação.
      - `index.tsx`: Componente principal.
      - `styles.ts`: Estilização com styled-components.
    - **searchVideos**: Componente de vídeo utilizado na página de busca.
      - `index.tsx`: Componente principal.
      - `styles.ts`: Estilização com styled-components.
    - **shortsComponent**: Componente de vídeo usado na seção de shorts.
      - `index.tsx`: Componente principal.
      - `styles.ts`: Estilização com styled-components.
    - **studioComponent**: Componente de vídeo usado na página do estúdio.
      - `index.tsx`: Componente principal.
      - `styles.ts`: Estilização com styled-components.
    - **videoCategories**: Componente para exibir categorias de vídeos.
      - `index.tsx`: Componente principal.
      - `styles.ts`: Estilização com styled-components.
    - **videoComponent**: Componente de vídeo usado na página inicial.
      - `index.tsx`: Componente principal.
      - `styles.ts`: Estilização com styled-components.
  - **context**: Lógica de gerenciamento de estado global.  
  - **icons**: Ícones usados no projeto.  
  - **pages**: Páginas principais da aplicação.  
    - **home**: Página inicial.
    - **login**: Página de login.
    - **registers**: Página de registro.
    - **search**: Página de busca.
    - **studio**: Página do estúdio.
  - **api.ts**: Comunicação com a API de backend.  
  - **App.tsx**: Componente principal da aplicação.  
  - **declarations.d.ts**: Definições de tipos personalizados.  
  - **index.tsx**: Ponto de entrada da aplicação.  
- **.env**: Arquivo de variáveis de ambiente.  
- **.gitignore**: Arquivos a serem ignorados pelo Git.  
- **package-lock.json**: Arquivo que descreve as dependências do projeto e suas versões.  
- **package.json**: Arquivo que descreve as dependências do projeto e seus scripts.  
- **README.md**: Este arquivo.  
- **tsconfig.json**: Arquivo de configuração do TypeScript.

## Funcionalidades

Este clone do YouTube inclui as seguintes funcionalidades principais:

- **Página Inicial**: Apresenta vídeos recomendados, usando a API pública do YouTube para buscar vídeos.
- **Página de Login**: Permite aos usuários fazerem login com suas credenciais.
- **Página de Registro**: Permite a criação de uma nova conta de usuário.
- **Página de Busca**: Permite que os usuários busquem vídeos usando a API do YouTube.
- **Página do Estúdio**: Permite o gerenciamento de vídeos do usuário.
- **API Backend**: O backend é responsável pela criação de usuários, login e gerenciamento de vídeos.

## Rotas da API

A aplicação utiliza a seguinte API para gerenciar usuários e vídeos:

### **Usuários**

- **POST /sign-up**: Cria um novo usuário.
- **POST /sign-in**: Realiza o login de um usuário.
- **GET /get-user**: Retorna os dados do usuário logado (requer autenticação).

### **Vídeos**

- **POST /create-video/:user_id**: Cria um novo vídeo para um usuário (requer autenticação).
- **GET /get-video/:user_id**: Retorna todos os vídeos de um usuário (requer autenticação).
- **GET /search-video**: Realiza uma busca por vídeos usando a API do YouTube.

## Dependências

O projeto utiliza as seguintes dependências principais:

- **axios**: Biblioteca para realizar requisições HTTP.
- **moment**: Manipulação de datas e horas.
- **react**: Biblioteca para construção da interface do usuário.
- **react-dom**: Integração do React com o DOM.
- **react-router-dom**: Gerenciamento de rotas para React.
- **react-scripts**: Ferramentas de configuração e execução do projeto React.
- **styled-components**: Biblioteca para estilizar componentes com CSS-in-JS.
- **web-vitals**: Biblioteca para medir a performance da aplicação.

### Dependências de Desenvolvimento

- **@types/react-router-dom**: Tipagens para o `react-router-dom`.
- **@types/styled-components**: Tipagens para o `styled-components`.
- **@babel/plugin-proposal-private-property-in-object**: Permite o uso de propriedades privadas dentro de objetos em classes.

## Scripts

Este projeto contém os seguintes scripts:

- **start**: Inicia o servidor de desenvolvimento.
  
    ```bash
    npm start
    ```

- **build**: Cria uma versão otimizada da aplicação para produção.

    ```bash
    npm run build
    ```

- **test**: Executa os testes do projeto (não há testes especificados no momento).

    ```bash
    npm run test
    ```

- **eject**: Ejecta a configuração do `react-scripts` para personalização.

    ```bash
    npm run eject
    ```

## Como Rodar o Projeto

### Frontend (React)

1. Clone este repositório:

    ```bash
    git clone https://github.com/FlavianoBezerra/YouTube-Project.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd clone-youtube
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Inicie o servidor de desenvolvimento:

    ```bash
    npm start
    ```

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **TypeScript**: Superset do JavaScript que oferece tipagem estática.
- **styled-components**: Biblioteca para estilizar componentes com CSS-in-JS.
- **API do YouTube**: Utilizada para buscar vídeos públicos do YouTube.
- **Node.js / Express**: Servidor backend para gerenciar usuários e vídeos.
- **Neon**: Banco de dados baseado em **PostgreSQL** utilizado para armazenar e gerenciar dados da aplicação.

## Possíveis Alterações Futuras

- Adicionar suporte a comentários em vídeos.
- Implementar sistema de likes e dislikes.
- Adicionar suporte a categorias e recomendações de vídeos.

## Licença

Este projeto está licenciado sob a Licença MIT – veja o arquivo [LICENSE](LICENSE) para mais detalhes.

Criado por [Flaviano Bezerra](https://www.linkedin.com/in/flaviano-bezerra-5203bb333).
