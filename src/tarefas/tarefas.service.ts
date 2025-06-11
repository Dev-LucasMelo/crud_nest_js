import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'
import { tarefa, user } from '@prisma/client';
import { createTarefasDto } from './validations/createTarefas.dto';
import { updateTarefasDto } from './validations/updateTarefas.dto';
import { deleteTarefasDto } from './validations/deleteTarefas.dto';

@Injectable()
export class TarefasService {
    constructor(private prisma: PrismaService) { }

    async findAll(): Promise<tarefa[]> {
        return await this.prisma.tarefa.findMany()
    }

    async findUnique(id: number): Promise<tarefa | NotFoundException> {
        return await this.prisma.tarefa.findUniqueOrThrow({
            where: {
                id: id
            }
        }).then((response) => {
            return response
        }).catch((err) => {
            throw new NotFoundException("Tarefa não existente")
        })
    }

    async create(dados: createTarefasDto, user: user): Promise<tarefa> {

        let insert: Omit<tarefa, 'id' |'realizada' > = {
            nome: dados.nome,
            descricao: dados.descricao,
            user_id: user.id
        }

        return await this.prisma.tarefa.create({ data: insert })
    }

    async update(dados: updateTarefasDto): Promise<tarefa | NotFoundException> {
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

    async delete(dados: deleteTarefasDto): Promise<any | NotFoundException> {
        return await this.prisma.tarefa.delete({
            where: {
                id: dados.id
            }
        }).then((response) => {
            return {
                message: "Tarefa excluida com sucesso"
            }
        }).catch((err) => {
            throw new NotFoundException("Tarefa não existente")
        })
    }

}
