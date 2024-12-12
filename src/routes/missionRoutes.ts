import { Router } from 'express';
import { createMission, listMissions, deleteMission } from '../controllers/missionController';
import { authenticateJWT } from '../middlewares/authMiddleware'; // Certifique-se de que o caminho está correto

const router = Router();

router.get('/missoes', listMissions);
router.post('/missoes', authenticateJWT, createMission);  // Middleware de autenticação aplicado aqui
router.delete('/missoes/:id', authenticateJWT, deleteMission); // Middleware de autenticação aplicado aqui

export default router;
