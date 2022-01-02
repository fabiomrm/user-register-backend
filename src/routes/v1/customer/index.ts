import { Router } from "express";
import CustomerController from "../../../controllers/CustomerController";
import { JWTAuthenticationMiddleware } from "../../../middlewares/jwt-middleware";


const router = Router();

router.get("/customers", JWTAuthenticationMiddleware, CustomerController.fetch);

router.post("/customers", JWTAuthenticationMiddleware, CustomerController.save);

export default router;