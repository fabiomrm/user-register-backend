import { PrismaClient, Customer } from "@prisma/client";
class CustomerRepository {

    async findAll(id: number) {
        const db = new PrismaClient();

        try {
            const customers = await db.customer.findMany({
                where: {
                    userId: id,
                },
                orderBy: {
                    name: "asc"
                }
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
                data: {
                    name: customer.name,
                    email: customer.email,
                    phone: customer.phone,
                    user: { connect: { id: customer.userId }}
                }
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

    async updatePicture(id: number, pictureUrl: string) {
        const db = new PrismaClient();
        

        try {
            const updatedCustomer = await  db.customer.update({
                data: {
                    pictureUrl
                }, 
                where: {
                    id
                },
            });
            
            return updatedCustomer;
        } catch(e) {
            throw e;
        } finally {
            db.$disconnect();
        }
       
    }

}

export default new CustomerRepository();