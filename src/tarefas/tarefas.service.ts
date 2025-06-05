import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { tarefa } from '@prisma/client';
import { createTarefasDto } from './dto/createTarefas.dto';

@Injectable()
export class TarefasService {
    constructor(private prisma: PrismaService) { }

    async findAll(): Promise<tarefa[]> {
        return this.prisma.tarefa.findMany()
    }

    async create(dados: createTarefasDto): Promise<any> {
        return this.prisma.tarefa.create({data: dados})
    }
}
