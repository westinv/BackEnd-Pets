import express from 'express'
import './database'
import "reflect-metadata";
import { userRoutes } from './routes/UsersRoutes';
import { petsRoutes } from './modules/Pets/routes/PetsRoutes';
const app = express();



app.use(express.json());

app.use(userRoutes);
app.use(petsRoutes);

app.listen(3333, ()=> console.log("rodando"));
