# ProjetoSoftware_SistemaWeb

O projeto é um sistema de autenticação que utiliza tecnologias modernas para a construção de telas de login e cadastro, combinando o framework de frontend React com o backend Spring Boot.

## :computer: Tecnologias

**Front-end:** JavaScript, React, ContextAPI, TailwindCSS, Semantic-UI

**Back-end:** Java, Spring Boot, Spring Security, JWT


## :pushpin: Instalação

Instale dependências **Front-End** com npm

```bash
  npm install
  npm start
  http://localhost:3000/home
```
Projeto **Back-End**

```bash
  Executar projeto localmente
  JAVA 17+
```

Consulta ao banco de dados **h2-console** e **swagger**

```bash
  http://localhost:8080/h2-console
  username: user
  password: user
  http://localhost:8080/swagger-ui.html
```
Caso você tenha o **Docker** instalado em sua máquina, pode executar o arquivo **docker-compose.yml** na raiz do projeto com o comando:

```bash
   docker-compose up - iniciar projeto
   docker-compose down - finalizar projeto
```
## :open_file_folder: Documentação

**Backend com Spring Boot**:
O backend foi construído usando o framework Spring Boot e o Spring Security foi implementado para garantir um processo de autenticação seguro.

Para a persistência dos dados, o Spring Data JPA foi utilizado, integrando-se com o banco de dados **h2-console**. O backend também inclui serviços para lidar com o registro de novos usuários, validações de campos e comunicação com o frontend.


:key: **Access Token**:
Um "Access Token" é uma credencial que é usado para autenticar e autorizar um cliente (aplicação ou usuário) para acessar recursos específicos.
Ele é frequentemente emitido por um servidor de autorização após a autenticação bem-sucedida do usuário.


## :file_folder: Documentação da API
Existem os usuários `ADMIN` e `USER`, em que cada um tem sua permissão no sistema.

### ADMIN
#### Retorna um usuário

```http
  GET /api/{username}
```

#### Retorna todos os usuários

```http
  GET /api
```

#### Excluir um usuário

```http
  DELETE /api/users/${username}
```

### USER
#### Atualizar Senha

```http
  PUT /api/update/{username}
```


:chart_with_upwards_trend: **Integração entre Frontend e Backend**:
A comunicação entre o frontend e o backend é realizada por meio de requisições HTTP, seguindo boas práticas RESTful. As informações são trocadas no formato JSON, proporcionando uma integração eficiente e desacoplada entre as partes.
## Autores

- [@Elias](https://www.github.com/EliasBRodrigues)