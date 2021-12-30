import {  User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import { UserRepository } from "../repositories/UserRepository";


// const userRepository = new UserRepository();

export class UsersController {

    // async create(req: Request, res: Response, next: NextFunction): Promise<void | Record<string, any>> {

    //     const user: User = req.body;

    //     try {
    //         const createdUser = await userRepository.createUser(req.body);
    //         res.status(201).send({ createdUser })

    //     }catch(err) {
    //         return res.status(500).json({message: "Não foi possível criar o usuário"});

    //     }
    // }
}