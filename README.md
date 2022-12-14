## Frontend

Projeto utilizando React.js, Typescript, Jest, Material UI, Axios, Moment.js, Recharts, Styled-Components.

### Pré-requisitos

- Antes de rodar o projeto certifique se você tem o git e o node instalados em sua maquina rodando os seguintes comandos:
  **git --version** e **node -v** respectivamente, caso não tenha instale antes de ir para o próximo passo.

### Clonagem

Clone o repositorio do seu fork

```sh
git clone <URL>
```

### Instalação backend

1. Entre na pasta server
   ```sh
   cd server
   ```
2. Copie o arquivo .env.example e renomeie para .env e preencha a API_KEY <br />
   Obs: O token pode ser gerado no site Alpha Vantage [click aqui](https://www.alphavantage.co/support/#api-key)

3. Instale os pacotes npm
   ```sh
   npm install
   ```

### Instalação frontend

1. Entre na pasta front

   ```sh
   cd front
   ```

2. Instale os pacotes npm

   ```sh
   npm install
   ```

### Execução

- Para executar em modo desenvolvimento
  ```sh
  npm start
  ```

### Testes

- Para executar os tests
  ```sh
  npm run test
  ```

* Foram desenvolvidos testes básicos nos componentes somente para verificar o carregamento dos mesmos na tela

### Rotas

- /

Rota raiz, onde pode ser feito a consulta dos dados das ações e projeção de ganho

- /comparacao

Rota para executar a comparação de preço de duas ou mais ações

### Detalhes

#### Responsividade

Foi desenvolvido pensando na responsividade para uso também em sistemas mobile, com quebra e redução de tamanho de componentes

#### Tema

Foi desenvolvido uma feature para troca de temas entre tema claro e tema escuro através do hook useTheme

#### API

A consulta na API é feita pelo Axios

#### Interfaces

Foi desenvolvido arquivos separados de interface para cada retorno das requisições com dados
