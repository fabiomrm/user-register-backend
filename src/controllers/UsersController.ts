import { NextFunction, Request, Response } from "express";

import  UserRepository  from "../repositories/UserRepository";

class UsersController {
    async findOne(req: Request, res: Response, next: NextFunction) {
        const id = (req as any).userId;
        console.log(id);
        try {
            const user = await UserRepository.findById(id);
            return res.json({user});
    
        } catch(err) {
            return res.status(500).json({message: "Não foi possível obter os dados do usuário. [msg controller]"})
        }
    }
}

export default new UsersController();