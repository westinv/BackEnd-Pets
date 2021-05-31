import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

interface IUserCreate{
    nome : string;
    username: string;
    password: string;
    Email: string;
    telefone: string;
}

class UserServicie{
async create({nome, username,password, Email, telefone }: IUserCreate){
    const userRepository = getCustomRepository(UserRepository);
    const user =  userRepository.create({
        nome,
        username,
        password,
        Email,
        telefone,
    })
    await userRepository.save(user);
}
 
/* async update({nome, username,password, Email, telefone }: IUserCreate){
    const userRepository = getCustomRepository(UserRepository);
    const userupdate =  userRepository.update({
        nome,
        username,
        password,
        Email,
        telefone,
    })
    
    await userRepository.save(userupdate);
  
}*/
}

export {UserServicie}