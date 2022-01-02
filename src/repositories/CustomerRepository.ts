import { PrismaClient, Customer } from "@prisma/client";
class CustomerRepository {

    async findAll(id: number) {
        const db = new PrismaClient();

        try {
            const customers = await db.customer.findMany({
                where: {
                    userId: id,
                },
            })

            return customers;
        } catch(e) {
            throw e;
        } finally {
            db.$disconnect();
        }
    }

    async handleCustomer(customer: Customer) {
        
        if(customer.id && customer.id > 0) {
           
            return await this.update(customer);
       } else {
            return await this.insert(customer);
       }
    
    }

    async insert(customer: Customer) {
        
        const db = new PrismaClient();
        try {
            const createdCustomer = await db.customer.create({
                data: customer,
            });

            return createdCustomer;

        }catch(e) {
            throw e;
        } finally {
            db.$disconnect();
        }
    }

    async update(customer: Customer) {
        const db = new PrismaClient();
       
        try {
            console.log(customer)

            const updatedCustomer = await db.customer.update({
                data: {
                    name: customer.name,
                    email: customer.email,
                    phone: customer.phone,
                },
                where: {
                    id: Number(customer.id),
                }
            });
           
           
            return updatedCustomer;

        }catch(e) {
            throw e;
        } finally {
            db.$disconnect();
        }
    }

}

export default new CustomerRepository();