import { Body, Controller, Get, Post, Patch, Delete, Param, NotFoundException, UseGuards } from '@nestjs/common';
import { tarefa,user } from '@prisma/client';
import { TarefasService } from './tarefas.service';
import { createTarefasDto } from './validations/createTarefas.dto';
import { updateTarefasDto } from './validations/updateTarefas.dto';
import { deleteTarefasDto } from './validations/deleteTarefas.dto';
import { JWTguard } from '../auth/jwt.guard';
import { usuarioLogado } from 'src/auth/decorators/usuarioLogado.Decorator';


@Controller('tarefas')
@UseGuards(JWTguard)
export class TarefasController {
    constructor(private service: TarefasService) { }

    @Get('/')
    async findAll(@usuarioLogado() user: user): Promise<tarefa[]> {
        return await this.service.findAll(user)
    }

    @Get(':id')
    async findUnique(@Param('id') id: number): Promise<tarefa | NotFoundException> {
        return await this.service.findUnique(id)
    }

    @Post('/create')
    async create(@Body() dados: createTarefasDto, @usuarioLogado() user: user) {
        return await this.service.create(dados,user)
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
