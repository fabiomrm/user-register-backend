import { Router } from 'express';
import { AuthController } from '../../../controllers/AuthController';
import { JWTAuthenticationMiddleware } from '../../../middlewares/jwt-middleware';



const router = Router();
const authController = new AuthController();

router.post("/signin", authController.signIn);

router.post("/signup", authController.signUp);

export default router;