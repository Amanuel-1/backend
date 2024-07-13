import { Router } from 'express';
import { signup, signin, authenticateToken, profile } from '../controllers/user.js';

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', authenticateToken, profile);

export default router;
