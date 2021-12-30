import { Router } from 'express';
import AuthController  from '../../../controllers/AuthController';
import { JWTAuthenticationMiddleware } from '../../../middlewares/jwt-middleware';



const router = Router();

router.post("/signin", AuthController.signIn);

router.post("/signup", AuthController.signUp);

export default router;