import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from '@prisma/client';
import { CadastroUserDto } from './validations/cadastro.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) { }

  @Post('/create')
  async create(@Body() dados: CadastroUserDto) {
    return await this.userService.create(dados)
  }

}
