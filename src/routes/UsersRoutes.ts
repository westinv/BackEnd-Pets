import { Router, request, response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersControler } from '../modules/Users/Controller/UserController';
import { UserRepository } from '../repositories/UserRepository';

const userRoutes = Router();

const userControler = new UsersControler();


userRoutes.post("/users", userControler.create );



export {userRoutes};