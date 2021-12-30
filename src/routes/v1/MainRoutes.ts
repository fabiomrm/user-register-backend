import { Router } from 'express';
import UserRoutes from './users';
import AuthRoutes from './auth';


const router = Router();


router.use(AuthRoutes);

router.use(UserRoutes);


export default router;