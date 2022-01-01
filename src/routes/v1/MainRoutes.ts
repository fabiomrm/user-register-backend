import { Router } from 'express';
import UserRoutes from './users';
import AuthRoutes from './auth';
import CostumerRoutes from './customer';


const router = Router();


router.use(AuthRoutes);

router.use(UserRoutes);

router.use(CostumerRoutes);


export default router;