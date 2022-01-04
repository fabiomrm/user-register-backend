import { Router } from "express";
import CustomerController from "../../../controllers/CustomerController";
import { JWTAuthenticationMiddleware } from "../../../middlewares/jwt-middleware";
import multer from "multer";



const router = Router();

router.get("/customers", JWTAuthenticationMiddleware, CustomerController.fetch);

router.post("/customers", JWTAuthenticationMiddleware, CustomerController.save);


const upload = multer({
    dest: "./uploads/",
});

router.post("/costumers/profile-picture", upload.array("profile-picture"), CustomerController.addProfilePicture);

export default router;