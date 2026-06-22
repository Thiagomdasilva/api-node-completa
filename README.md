# 🚀 API Node.js - CRUD com JWT, SQL e NoSQL

## 📌 Descrição do Projeto

Esta API foi desenvolvida utilizando **Node.js e Express**, com o objetivo de demonstrar uma arquitetura backend moderna, integrando dois tipos de persistência de dados:

- **MongoDB (NoSQL)** → Carros, Motos e Roupas  
- **PostgreSQL (SQL)** → Usuários do sistema  

O sistema implementa autenticação com **JWT**, controle de acesso baseado em **roles (admin/user)**, documentação automática com **Swagger**, testes automatizados com **Jest + Supertest**, e execução totalmente containerizada com **Docker e Docker Compose**.

---

## ⚙️ Tecnologias Utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- PostgreSQL + Sequelize
- JWT (Json Web Token)
- bcryptjs
- Swagger (swagger-ui-express + swagger-jsdoc)
- Jest
- Supertest
- Docker
- Docker Compose
- dotenv

---

## 🧱 Arquitetura do Projeto

src/
├── config/ # Conexões com bancos (Mongo e Postgres)
├── controllers/ # Lógica de negócio
├── middlewares/ # Autenticação e autorização
├── models/
│ ├── nosql/ # MongoDB (Carros, Motos, Roupas)
│ ├── sql/ # PostgreSQL (Users)
├── routes/ # Rotas da API
├── docs/ # Configuração Swagger
├── server.js # Inicialização do servidor
└── app.js # Configuração principal do Express


---

## 🔐 Autenticação e Segurança

A API utiliza **JWT (JSON Web Token)** para autenticação.

### Fluxo:
1. Usuário realiza login
2. API gera um token JWT
3. Token é enviado no header:

Authorization: Bearer <token>

4. Middleware valida o token antes de acessar rotas protegidas

### Controle de acesso:
- Usuários com role `admin` podem criar, editar e deletar recursos
- Usuários comuns apenas consultam dados

---

## 📦 Funcionalidades (CRUDs)

### 🚗 Carros (MongoDB)
- Criar carro
- Listar carros
- Buscar por ID
- Atualizar carro
- Deletar carro

### 🏍 Motos (MongoDB)
- CRUD completo

### 👕 Roupas (MongoDB)
- CRUD completo

### 👤 Usuários (PostgreSQL)
- Criar usuário
- Listar usuários
- Buscar por ID
- Atualizar usuário
- Remover usuário

---

## 📘 Documentação Swagger

A documentação da API está disponível em:
http://localhost:3000/docs/


O Swagger apresenta todos os endpoints, parâmetros e autenticação JWT.

---

## 🧪 Testes Automatizados

A API possui testes de integração utilizando:

- Jest
- Supertest

### Cobertura:
- Login de usuário
- Acesso protegido sem token
- Acesso autenticado com token JWT

### Executar testes:
```bash
npm test

🐳 Execução com Docker

O projeto é totalmente containerizado.

Subir aplicação:

docker-compose up --build

Serviços incluídos:
API Node.js
MongoDB
PostgreSQL

📄 Variáveis de Ambiente (.env)
</> env

PORT=3000
JWT_SECRET=segredo123
MONGO_URL=mongodb://mongo:27017/api
DB_HOST=postgres
DB_USER=admin
DB_PASSWORD=admin
DB_NAME=usersdb

🚀 Como Rodar o Projeto
1. Instalar dependências
npm install
2. Rodar com Docker (recomendado)
docker-compose up --build
3. Acessar API
http://localhost:3000
🔑 Exemplo de Login
POST /auth/login

{
  "email": "teste",
  "password": "123"
}

Resposta:

{
  "token": "JWT_TOKEN_AQUI"
}
📌 Boas Práticas Aplicadas
Separação de responsabilidades (MVC)
Autenticação JWT
Middleware de autorização
Validação de rotas protegidas
Uso de variáveis de ambiente
Arquitetura híbrida (SQL + NoSQL)
Containerização com Docker
Testes automatizados
Documentação com Swagger
📊 Objetivo do Projeto

Este projeto tem como objetivo demonstrar conhecimentos em:

Desenvolvimento de APIs RESTful
Integração de bancos SQL e NoSQL
Segurança de APIs
Testes automatizados
Containerização de aplicações
Documentação profissional de APIs

👨‍💻 Autor

Projeto desenvolvido por Thiago Marinho da Silva
matricula: 202322140

📦 Status do Projeto

✔ Backend funcional
✔ Autenticação JWT
✔ CRUD completo
✔ Swagger documentado
✔ Testes implementados
✔ Docker configurado