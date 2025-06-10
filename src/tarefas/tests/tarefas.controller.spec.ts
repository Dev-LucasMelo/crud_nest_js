import { Test, TestingModule } from '@nestjs/testing';
import { TarefasController } from '../tarefas.controller';
import { TarefasService } from '../tarefas.service';
import { PrismaService } from '../../prisma/prisma.service';


describe('TarefasController', () => {
  let controller: TarefasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TarefasController],
      providers: [TarefasService, PrismaService]
    }).compile();

    controller = module.get<TarefasController>(TarefasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
