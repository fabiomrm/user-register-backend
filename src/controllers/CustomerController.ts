import { Request, Response, NextFunction } from 'express';
import CustomerRepository from '../repositories/CustomerRepository';

class CustomerController {

    async fetch(req: Request, res: Response, next: NextFunction) {

        const userId: number = (req as any).userId;
        try {
            const costumers = await CustomerRepository.findAll(userId)

            res.json(costumers);
            
        }catch(e) {
            res.status(500).json({message: "Não foi possível obter os clientes. "});
        }
    }

    async save(req: Request, res: Response, next: NextFunction) {
        
    }

    async insert(req: Request, res: Response, next: NextFunction) {
        
        // const customer: Customer = req.body;
        
        // customer.userId = (req as any).userId;
       

        // const db = new PrismaClient();
        
        // try {
        //     const createdCustomer = await db.customer.create({
        //         data: customer,
        //     });

        //     res.status(201).send({ createdCustomer });
            
        // } catch(e) {
        //     throw e;
        // }

        // finally {
        //     db.$disconnect();   
        // }
    }

    async update(req: Request, res: Response, next: NextFunction) {

    }


}

export default new CustomerController();