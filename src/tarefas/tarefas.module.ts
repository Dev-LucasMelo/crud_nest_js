import { Module } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { TarefasController } from './tarefas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule], //interface com metodos prontos para consumir banco de dados
  providers: [TarefasService],
  controllers: [TarefasController]
})
export class TarefasModule {}
