import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import client from '../database';

export const registerUser = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;
  const hashedPassword = await bcrypt.hash(senha, 10);

  const result = await client.query(
    'INSERT INTO usuarios (nome, email, senha_hash) VALUES ($1, $2, $3) RETURNING id, nome, email',
    [nome, email, hashedPassword]
  );

  res.status(201).json(result.rows[0]);
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  const result = await client.query('SELECT * FROM usuarios WHERE email = $1', [email]);
  const user = result.rows[0];

  if (!user || !await bcrypt.compare(senha, user.senha_hash)) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

  res.json({ token });
};
