import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { tarefa } from '@prisma/client';

@Injectable()
export class TarefasService {
    constructor(private prisma: PrismaService) { }

    async findAll(): Promise<tarefa[]> {
        return this.prisma.tarefa.findMany()
    }
}
