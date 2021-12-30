import { Router, Request, Response } from 'express';
import UserRoutes from './users';
import AuthRoutes from './auth';
import { JWTAuthenticationMiddleware } from '../../middlewares/jwt-middleware';

const router = Router();


router.use(AuthRoutes);

router.use(JWTAuthenticationMiddleware);
router.use(UserRoutes);


export default router;