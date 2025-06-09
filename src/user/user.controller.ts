import { Controller,Post } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Post('/create')
  async create(){
    return {
      data: "criando user"
    }
  }



}
