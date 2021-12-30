import express from 'express';
import MainRoutes from './routes/v1/MainRoutes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/v1', MainRoutes);



app.listen(process.env.PORT, () => {
    console.log(`Servidor inicializado na porta: ${process.env.PORT} `)
})