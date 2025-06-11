import { Body, Controller, Get, Post, Patch, Delete, Param, NotFoundException, UseGuards } from '@nestjs/common';
import { tarefa,user } from '@prisma/client';
import { TarefasService } from './tarefas.service';
import { createTarefasDto } from './validations/createTarefas.dto';
import { updateTarefasDto } from './validations/updateTarefas.dto';
import { deleteTarefasDto } from './validations/deleteTarefas.dto';
import { JWTguard } from '../auth/jwt.guard';
import { usuarioLogado } from '../auth/decorators/usuarioLogado.Decorator';


@Controller('tarefas')
@UseGuards(JWTguard)
export class TarefasController {
    constructor(private service: TarefasService) { }

    @Get('/')
    async findAll(@usuarioLogado() user: user): Promise<tarefa[]> {
        return await this.service.findAll(user)
    }

    @Get(':id')
    async findUnique(@Param('id') id: number, @usuarioLogado() user: user): Promise<tarefa | NotFoundException> {
        return await this.service.findUnique(id, user)
    }

    @Post('/create')
    async create(@Body() dados: createTarefasDto, @usuarioLogado() user: user) {
        return await this.service.create(dados,user)
    }

    @Patch('/update')
    async update(@Body() dados: updateTarefasDto, @usuarioLogado() user: user) {
        return await this.service.update(dados, user)
    }

    @Delete('/delete')
    async delete(@Body() dados: deleteTarefasDto, @usuarioLogado() user: user) {
        return await this.service.delete(dados,user )
    }

}
