    import { Request, Response, NextFunction } from 'express';
    import jwt from 'jsonwebtoken';
    import { JwtPayload } from 'jsonwebtoken';

    // Definindo a tipagem para a extensão do objeto Request
    declare global {
      namespace Express {
        interface Request {
          userId?: number; // Adicionando o `userId` ao Request, que será usado nas rotas protegidas
        }
      }
    }

    export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
      // Pegando o token da requisição (no cabeçalho Authorization)
      const token = req.header('Authorization')?.replace('Bearer ', '');

      if (!token) {
        return res.status(401).json({ message: 'Acesso não autorizado. Token ausente.' });
      }

      try {
        // Decodificando e verificando o token JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

        // Adicionando o userId decodificado no objeto Request
        req.userId = decoded.userId;

        next(); // Chama a próxima função ou middleware

      } catch (err) {
        return res.status(401).json({ message: 'Token inválido ou expirado.' });
      }
    };
