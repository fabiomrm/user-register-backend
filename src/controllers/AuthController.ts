import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "@prisma/client";
import { decrypt } from "../helper/encrypt";
import * as JWT from 'jsonwebtoken';

const userRepository = new UserRepository();

export class AuthController {
    async signUp(req: Request, res: Response, next: NextFunction): Promise<void | Record<string, any>> {

        const user: User = req.body;

        try {
            const createdUser = await userRepository.createUser(req.body);
            console.log(createdUser);
            res.status(201).send({ createdUser })

        }catch(err) {
            return res.status(500).json({message: "Não foi possível criar o usuário"});

        }
    }

    async signIn(req: Request, res: Response, next: NextFunction): Promise<null | Record<string, any>> {
        const { email, password } = req.body;

        const user = await  userRepository.findByEmail(email);

        if(user) {

            const checkPassword = decrypt(password, user.password);
            
            if(checkPassword) {
                const token = JWT.sign(
                    {
                    name: user.name,
                    id: user.id,
                    }, 
                    "secret", 
                    {expiresIn: "1h"}
                );
                
                
                console.log(`token: ${token}`);
                return res.status(200).json({token});
            }
        }

        return res.status(500).json({message: "Usuário ou senha inválido(s)."})

    }
}