import { Request, Response, NextFunction } from 'express';
import CustomerRepository from '../repositories/CustomerRepository';
import { Customer } from '@prisma/client';
import { uploadToStorage } from "../services/storageService";

class CustomerController {

    async fetch(req: Request, res: Response, next: NextFunction) {

        const userId: number = (req as any).userId;
        try {
            const customers = await CustomerRepository.findAll(userId)
            
            res.json(customers);
            
        }catch(e) {
            res.status(500).json({message: "Não foi possível obter os clientes. "});
        }
    }

    async save(req: Request, res: Response, next: NextFunction) {
        const customer: Customer = req.body;

        customer.userId = (req as any).userId

        try {
            const handledCustomer = await CustomerRepository.handleCustomer(customer);
            
            res.status(201).json(handledCustomer);

        } catch(e) {
            
            res.status(500).json({message: "Dados insuficientes para cadastrar/atualizar cliente."});
        }

    }

    async addProfilePicture(req: Request, res: Response) {
        const id = (req as any).userId
        const customerId = Number(req.body.id);
    
        if(req.files) {
            try {
                
                // https://cloudinary..../userId/customerId/profile-picture
                const response = await uploadToStorage(
                    // @ts-ignore
                    req.files[0], 
                    `${id}/${customerId}/profile-picture`
                    );
    
                const pictureUrl = response["secure_url"];
                if(pictureUrl) {
                    
                    const updatedCustomer = await CustomerRepository.updatePicture(customerId, pictureUrl);

                    
                    
                    
                    return res.status(200).json({updatedCustomer});
                }
                
            } catch(e) {
                throw e;
            } 
        }
    
        res.status(500).json({message: "Não foi possível salvar a imagem de perfil."});
    }
        
}

export default new CustomerController();