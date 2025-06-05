import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //configuração de validação automatica via DTO com class validator
  app.useGlobalPipes( new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,

      exceptionFactory: (errors) => {
        const formattedErrors = errors.map(err => ({
          campo: err.property,
          erros: Object.values(err.constraints || {}),
        }));

        return new BadRequestException({
          status: 'erro',
          mensagem: 'Falha na validação dos dados',
          erros: formattedErrors,
        });

      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
