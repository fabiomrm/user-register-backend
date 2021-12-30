import { PrismaClient, User } from "@prisma/client";
import bcrypt from 'bcrypt';
// import { encrypt } from "../helper/encrypt";

class UserRepository {
    async createUser(user: User): Promise<User | string>
    {
        const db = new PrismaClient();
        
        const salt = bcrypt.genSaltSync(Number(10));
        const hash = bcrypt.hashSync(user.password, salt);
        
        
        user.password = hash;
        
        const userCreated = await db.user.create({
            data: user,
        });

        db.$disconnect();
            
        return userCreated;
    }

    async findByEmail(email: string): Promise<User | null> {
        const db = new PrismaClient();

        try {
            
            return await db.user.findUnique({
                where: {
                    email: email,
                }
            });
            
        } catch(err) {
            throw err;

        } finally {
            db.$disconnect();
        }
    };

    async findById(id: number): Promise<User | null> {
        const db = new PrismaClient();

        try {
            

            return await db.user.findUnique({
                where: {
                   id
                }
            });
            
        } catch(err) {
            throw err;

        } finally {
            db.$disconnect();
        }
    };
}

export default new UserRepository();