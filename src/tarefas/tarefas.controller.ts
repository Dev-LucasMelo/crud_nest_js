import { Body, Controller, Get, Post, Patch, Delete, Param, NotFoundException } from '@nestjs/common';
import { tarefa } from '@prisma/client';
import { TarefasService } from './tarefas.service';
import { createTarefasDto } from './validations/createTarefas.dto';
import { updateTarefasDto } from './validations/updateTarefas.dto';
import { deleteTarefasDto } from './validations/deleteTarefas.dto';


@Controller('tarefas')
export class TarefasController {
    constructor(private service: TarefasService) { }

    @Get('/')
    async findAll(): Promise<tarefa[]> {
        return await this.service.findAll()
    }

    @Get(':id')
    async findUnique(@Param('id') id: number): Promise<tarefa | NotFoundException> {
        return await this.service.findUnique(id)
    }

    @Post('/create')
    async create(@Body() dados: createTarefasDto) {
        return await this.service.create(dados)
    }

    @Patch('/update')
    async update(@Body() dados: updateTarefasDto) {
        return await this.service.update(dados)
    }

    @Delete('/delete')
    async delete(@Body() dados: deleteTarefasDto) {
        return await this.service.delete(dados)
    }

}
