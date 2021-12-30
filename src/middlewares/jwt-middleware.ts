import { NextFunction, Request, Response } from "express";
import * as JWT from 'jsonwebtoken';

export async function JWTAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) 
{
    try {
        const authHeaders = req.headers.authorization || '';
       
        const [authType, authToken] = authHeaders.split(" ");

        const tokenPayload = JWT.verify(authToken, "secret");
        
        

        if(typeof tokenPayload === "object") {

            (req as any).userId = (tokenPayload as any).id
            
        }
        
        next();  

    } catch(err) {

        res.status(401).json({message: "Usuário não autorizado."});
    }

}