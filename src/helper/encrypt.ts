// import { User } from '@prisma/client';
import bcrypt from 'bcrypt';

// export const encrypt = (data: User) => {

//     const salt = bcrypt.genSaltSync(Number(10));
//     const hash = bcrypt.hashSync(data.password, salt);

//     data.password = hash;
    
//     return data;
// };

export const decrypt = (password: string, hashedPassword: string) => {
    return bcrypt.compareSync(password, hashedPassword);   
}
