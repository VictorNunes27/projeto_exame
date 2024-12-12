import jwt from 'jsonwebtoken';
import { User } from '../models/userModel';
import dotenv from 'dotenv';

dotenv.config();

// Definindo um tipo customizado para o payload do JWT
interface JwtPayload {
  userId: number;
}

export const generateToken = (user: User): string => {
  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET!,
    { expiresIn: '1h' }
  );

  return token;
};

export const verifyToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    return decoded; // Retorna o payload
  } catch (err) {
    return null; // Se o token for inválido, retorna null
  }
};
