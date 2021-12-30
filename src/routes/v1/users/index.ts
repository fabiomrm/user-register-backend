import { Router } from 'express';
import  UsersController  from '../../../controllers/UsersController';
import { JWTAuthenticationMiddleware } from '../../../middlewares/jwt-middleware';

const router = Router();

router.get('/users/me', JWTAuthenticationMiddleware, UsersController.findOne);



export default router;