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

    async handleCostumer() {
        
    }

    async insert() {

    }

    async update() {

    }

}

export default new CustomerRepository();