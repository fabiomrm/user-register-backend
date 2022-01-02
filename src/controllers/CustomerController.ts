import { Request, Response, NextFunction } from 'express';
import CustomerRepository from '../repositories/CustomerRepository';
import { Customer } from '@prisma/client';

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

    async delete(req: Request, res: Response, next: NextFunction) {
        
    }
}

export default new CustomerController();