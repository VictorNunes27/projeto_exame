import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect()
  .then(() => console.log('Banco de dados conectado com sucesso!'))
  .catch((err) => console.error('Erro ao conectar ao banco de dados:', err));

export default client;
