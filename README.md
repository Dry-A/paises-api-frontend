# Frontend para Gerenciamento de Países

Este projeto frontend fornece uma interface de usuário para gerenciar informações de países através de uma API RESTful. O sistema permite listar, visualizar detalhes, criar, editar e excluir registros de países.

## Funcionalidades

- **Listagem de países** com paginação e busca por nome
- **Visualização detalhada** de informações de um país específico
- **Cadastro de novos países** com validação de formulário
- **Edição de países existentes**
- **Exclusão de países**
- Interface responsiva usando Bootstrap

## Tecnologias Utilizadas

- React 19
- React Router v7
- Axios para requisições HTTP
- Bootstrap 5 para estilização
- Create React App como base do projeto

## Estrutura do Projeto

- `src/components/` - Componentes React reutilizáveis
  - `Navbar.jsx` - Menu de navegação
  - `PaisesLista.jsx` - Listagem de países com paginação e busca
  - `PaisDetalhes.jsx` - Visualização detalhada de um país
  - `PaisForm.jsx` - Formulário para criar/editar países
  - `Paginacao.jsx` - Componente de paginação
- `src/services/` - Serviços para comunicação com a API
  - `api.js` - Configuração do Axios e endpoints

## Pré-requisitos

- Node.js (versão recomendada: 18 ou superior)
- Backend de países em execução (porta 8080)

## Instalação e Execução

1. Clone este repositório
```bash
git clone https://github.com/seu-usuario/paises-frontend.git
cd paises-frontend


Collecting workspace information# Um README para o seu projeto de Frontend de Países

Baseado no seu código, criarei um README para o projeto de frontend que se conecta ao backend de países.

```markdown
# Frontend para Gerenciamento de Países

Este projeto frontend fornece uma interface de usuário para gerenciar informações de países através de uma API RESTful. O sistema permite listar, visualizar detalhes, criar, editar e excluir registros de países.

## Funcionalidades

- **Listagem de países** com paginação e busca por nome
- **Visualização detalhada** de informações de um país específico
- **Cadastro de novos países** com validação de formulário
- **Edição de países existentes**
- **Exclusão de países**
- Interface responsiva usando Bootstrap

## Tecnologias Utilizadas

- React 19
- React Router v7
- Axios para requisições HTTP
- Bootstrap 5 para estilização
- Create React App como base do projeto

## Estrutura do Projeto

- `src/components/` - Componentes React reutilizáveis
  - `Navbar.jsx` - Menu de navegação
  - `PaisesLista.jsx` - Listagem de países com paginação e busca
  - `PaisDetalhes.jsx` - Visualização detalhada de um país
  - `PaisForm.jsx` - Formulário para criar/editar países
  - `Paginacao.jsx` - Componente de paginação
- `src/services/` - Serviços para comunicação com a API
  - `api.js` - Configuração do Axios e endpoints

## Pré-requisitos

- Node.js (versão recomendada: 18 ou superior)
- Backend de países em execução (porta 8080)

## Instalação e Execução

1. Clone este repositório
```bash
git clone https://github.com/seu-usuario/paises-frontend.git
cd paises-frontend
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm start
```

4. Acesse a aplicação em http://localhost:3000

## Configuração da API

O frontend está configurado para se conectar a uma API REST rodando em `http://localhost:8080/api`. Se necessário, você pode modificar esta URL no arquivo api.js.

## Conexão com o Backend

Este frontend foi projetado para trabalhar com o backend disponível em [seu-repositorio-backend]. Certifique-se de que o backend esteja em execução antes de iniciar este aplicativo.

## Screenshots



## Compilação para Produção

```bash
npm run build
```

Isso criará uma versão otimizada do aplicativo na pasta `build/` que pode ser servida por qualquer servidor web estático.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

 MIT
```









