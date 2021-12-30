import { Router } from 'express';
import { UsersController } from '../../../controllers/UsersController';
import { UserRepository } from '../../../repositories/UserRepository';

const router = Router();
const usersRepository = new UserRepository();

router.get('/users/me', async (req, res) => {
    const id = (req as any).userId;
    console.log(id);
    try {
        const user = await usersRepository.findById(id);

        return res.json({user});

    } catch(err) {
        return res.status(500).json({message: "Não foi possível obter os dados do usuário."})
    }
})



export default router;