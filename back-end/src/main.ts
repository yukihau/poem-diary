import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { main } from './infrastructure/mongo/mongo';

async function bootstrap() {
  console.log('Starting server...');
  const PORT = process.env.PORT ?? 3001;

  console.log('------------------');
  const app = await NestFactory.create(AppModule);

  main().catch((err) => console.log(err));
  console.log('Mongoose started successfuly.');

  app.enableCors();
  await app.listen(PORT);
  console.log('Server started on port ' + PORT);
  console.log('------------------');
}

bootstrap().catch((err) => {
  console.error('Error during app bootstrap:', err);
  process.exit(1);
});
