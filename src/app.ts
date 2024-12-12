import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan'; // Para log de requisições HTTP
import userRoutes from './routes/userRoutes';
import missionRoutes from './routes/missionRoutes';
import client from './database'; // Conexão com o banco de dados
import { authenticateJWT } from './middlewares/authMiddleware';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Inicializar o aplicativo Express
const app = express();

// Middleware de log de requisições (usando o morgan)
app.use(morgan('dev'));

// Middleware para permitir que o servidor aceite requisições JSON
app.use(express.json());

// Middleware para permitir CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Rota de verificação (opcional) para testar se o servidor está funcionando
app.get('/', (req: Request, res: Response) => {
  res.send('Servidor de Exploração Espacial em Funcionamento!');
});

// Registrar as rotas de usuário e missão
app.use(userRoutes);
app.use(missionRoutes);

// Conexão com o banco de dados PostgreSQL
client.connect()
  .then(() => {
    console.log('Conectado ao banco de dados PostgreSQL!');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

// Middleware global de erro (caso algo dê errado)
app.use((err: any, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Algo deu errado!', error: err.message });
});

// Configuração da porta do servidor
const PORT = process.env.PORT || 4000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
