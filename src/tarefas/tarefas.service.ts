import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { tarefa } from '@prisma/client';
import { createTarefasDto } from './dto/createTarefas.dto';
import { updateTarefasDto } from './dto/updateTarefas.dto';

@Injectable()
export class TarefasService {
    constructor(private prisma: PrismaService) { }

    async findAll(): Promise<tarefa[]> {
        return await this.prisma.tarefa.findMany()
    }

    async create(dados: createTarefasDto): Promise<tarefa> {
        return await this.prisma.tarefa.create({ data: dados })
    }

    async update(dados: updateTarefasDto): Promise<tarefa | any> {

        return await this.prisma.tarefa.update({
            where: {
                id: dados.id,
            },
            data: dados
        }).then((response) => {
            return response
        }).catch((err) => {
            throw new NotFoundException("Tarefa não existente")
        })

    }
}
