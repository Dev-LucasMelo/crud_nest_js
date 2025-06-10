import { Injectable, BadRequestException } from '@nestjs/common';
import { CadastroUserDto } from './validations/cadastro.dto';
import { PrismaService } from '../prisma/prisma.service';
import { hash } from "bcrypt"

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async create(dados: CadastroUserDto) {

        let user = await this.prisma.user.findUnique({
            where: {
                name: dados.name
            }
        })

        if (user) {
            throw new BadRequestException("Nome de usuario já cadastrado");
        }

        let passwordHash = await hash(dados.password, 10)

        let insert: CadastroUserDto = {
            name: dados.name,
            password: passwordHash
        }

        return await this.prisma.user.create({ data: insert }).then((response) => {
            return { message: "Usuario cadastrado com sucesso" }
        }).catch((err) => {
            throw new BadRequestException("Erro ao cadastrar usuario");
        })
    }
}
