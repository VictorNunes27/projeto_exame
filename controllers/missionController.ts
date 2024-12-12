import { Request, Response } from 'express';
import client from '../database';
// import { Mission } from '../models/missionModel'; // Removed the unused import

export const createMission = async (req: Request, res: Response) => {
  const { nome_missao, planeta_alvo, duracao_anos, tripulantes, tecnologias } = req.body;

  // Usando o userId do token para associar a missão ao usuário (se necessário)
  const userId = req.userId;  // Aqui você tem acesso ao userId, já que foi setado pelo middleware

  const result = await client.query(
    'INSERT INTO missoes (nome_missao, planeta_alvo, duracao_anos, tripulantes, tecnologias, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [nome_missao, planeta_alvo, duracao_anos, tripulantes, tecnologias, userId]
  );

  res.status(201).json(result.rows[0]);
};