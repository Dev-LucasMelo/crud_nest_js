import { Body, Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { tarefa } from '@prisma/client';
import { TarefasService } from './tarefas.service';
import { createTarefasDto } from './dto/createTarefas.dto';
import { updateTarefasDto } from './dto/updateTarefas.dto';
import { deleteTarefasDto } from './dto/deleteTarefas.dto';


@Controller('tarefas')
export class TarefasController {
    constructor(private service: TarefasService) { }

    @Get('/')
    async findAll(): Promise<tarefa[]> {
        return await this.service.findAll()
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
