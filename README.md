# projeto_exame


Projeto de Exploração Espacial - API de Missões
Este projeto é uma API RESTful para gerenciamento de missões espaciais, incluindo funcionalidades de registro e login de usuários, além de criação, listagem e remoção de missões espaciais. A API foi desenvolvida com o framework Express e utiliza PostgreSQL como banco de dados. Ela também oferece autenticação de usuários com JWT (JSON Web Token) e criptografia de senhas com bcryptjs.

Funcionalidades
Cadastro e Login de Usuários:

O sistema permite que os usuários se registrem e façam login para acessar rotas protegidas.
A senha dos usuários é criptografada utilizando o bcryptjs.
Um token JWT é gerado ao fazer login, permitindo acesso às rotas protegidas.
Gerenciamento de Missões Espaciais:

Os usuários autenticados podem criar, listar e excluir missões espaciais.
Cada missão contém informações como: nome da missão, planeta alvo, duração em anos, número de tripulantes e tecnologias utilizadas.
O banco de dados é organizado para armazenar missões associadas aos usuários.
Autenticação JWT:

A autenticação é feita por meio de JWT (JSON Web Token). O token é gerado durante o login e deve ser enviado no cabeçalho de autorização das requisições protegidas.
Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript para backend.
Express: Framework para construção de APIs RESTful.
PostgreSQL: Banco de dados relacional utilizado para armazenar informações dos usuários e missões.
bcryptjs: Biblioteca para criptografar senhas dos usuários.
jsonwebtoken (JWT): Biblioteca para geração e verificação de tokens JWT.
dotenv: Gerenciamento de variáveis de ambiente.
cors: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
morgan: Middleware de logging para registrar as requisições HTTP.
Estrutura do Projeto
bash
Copiar código
├── controllers
│   ├── missionController.ts  # Lógica de controle de missões (criação, listagem, exclusão)
│   └── userController.ts    # Lógica de controle de usuários (registro e login)
├── database
│   └── index.ts             # Conexão com o banco de dados PostgreSQL
├── middlewares
│   └── authMiddleware.ts    # Middleware para autenticação JWT
├── models
│   ├── missionModel.ts      # Interface de dados da missão
│   └── userModel.ts         # Interface de dados do usuário
├── routes
│   ├── missionRoutes.ts     # Definição das rotas de missões
│   └── userRoutes.ts        # Definição das rotas de usuários
├── .env                     # Arquivo de configuração de variáveis de ambiente (ex. JWT_SECRET, DATABASE_URL)
├── server.ts                # Arquivo principal que inicializa o servidor Express
├── package.json             # Dependências e scripts do projeto
└── README.md                # Este arquivo
Requisitos
Node.js (v14 ou superior)
PostgreSQL (banco de dados)
