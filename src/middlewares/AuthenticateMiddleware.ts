import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";

import { UserRepository } from "../modules/Users/repositories/UserRepository";
import AppError from "../utils/AppError";

interface IPayload {
  email: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token is missing");
  }

  const [, token] = authHeader.split(" ");

  const { email } = verify(token, "Renato") as IPayload;

  const userRepository = getCustomRepository(UserRepository);

  const user = await userRepository.findOne({ email });

  if (!user) {
    throw new AppError("Invalid Token");
  }

  next();
}
