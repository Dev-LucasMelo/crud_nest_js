import { Module } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { TarefasController } from './tarefas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';


@Module({
  imports: [PrismaModule,AuthModule], //interface com metodos prontos para consumir banco de dados
  providers: [TarefasService],
  controllers: [TarefasController]
})
export class TarefasModule {}
