// app.module.ts
import { Module } from '@nestjs/common';
import { AuthModule } from './domain/auth/auth.module';
import { DiaryModule } from './domain/diary/diary.module';

@Module({
  imports: [AuthModule, DiaryModule],
  exports: [AuthModule, DiaryModule],
})
export class AppModule {}
