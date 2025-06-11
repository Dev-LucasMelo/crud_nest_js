import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'
import { tarefa, user } from '@prisma/client';
import { createTarefasDto } from './validations/createTarefas.dto';
import { updateTarefasDto } from './validations/updateTarefas.dto';
import { deleteTarefasDto } from './validations/deleteTarefas.dto';

@Injectable()
export class TarefasService {
    constructor(private prisma: PrismaService) { }

    async findAll(user: user): Promise<tarefa[]> {
        return await this.prisma.tarefa.findMany({
            where: {
                user_id: user.id
            }
        })
    }

    async findUnique(id: number, user: user): Promise<tarefa | NotFoundException> {

        return await this.prisma.tarefa.findUniqueOrThrow({
            where: {
                id: id,
                user_id: user.id
            }
        }).then((response) => {
            return response
        }).catch((err) => {
            throw new NotFoundException("Tarefa não existente")
        })
    }

    async create(dados: createTarefasDto, user: user): Promise<tarefa> {

        let insert: Omit<tarefa, 'id' | 'realizada'> = {
            nome: dados.nome,
            descricao: dados.descricao,
            user_id: user.id
        }

        return await this.prisma.tarefa.create({ data: insert })
    }

    async update(dados: updateTarefasDto, user: user): Promise<tarefa | NotFoundException> {

        let tarefaAlvo = await this.prisma.tarefa.findUnique({
            where: {
                id: dados.id,
                user_id: user.id,
            }
        })

        if (!tarefaAlvo) {
            throw new NotFoundException("Tarefa não existente")
        }

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

    async delete(dados: deleteTarefasDto, user: user): Promise<any | NotFoundException> {
        
        return await this.prisma.tarefa.delete({
            where: {
                id: dados.id,
                user_id: user.id
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
