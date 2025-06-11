import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';
import { AuthModule } from '../auth.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { UserService } from '../../user/user.service';
import { JwtService } from '@nestjs/jwt';


describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, UserService, JwtService],
      imports: [AuthModule, PrismaModule]
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
