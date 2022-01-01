import { Router } from "express";
import CustomerController from "../../../controllers/CustomerController";
import { JWTAuthenticationMiddleware } from "../../../middlewares/jwt-middleware";


const router = Router();

router.get("/customers", JWTAuthenticationMiddleware, CustomerController.fetch);

router.post("/customer", JWTAuthenticationMiddleware, CustomerController.insert);

export default router;