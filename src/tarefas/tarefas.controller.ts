import { Body, Controller, Get,Post } from '@nestjs/common';
import { tarefa } from '@prisma/client';
import { TarefasService } from './tarefas.service';
import { createTarefasDto } from './dto/createTarefas.dto';

@Controller('tarefas')
export class TarefasController {
    constructor(private service: TarefasService) { }

    @Get('/')
    async findAll(): Promise<tarefa[]> {
        return this.service.findAll()
    }

    @Post('/create')
    async create(@Body() createDto: createTarefasDto ) {
        console.log(createDto)

        return createDto
    }

}
