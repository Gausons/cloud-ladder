import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestService } from './test.service';
import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './accounts/accounts.module';
import { TasksModule } from './tasks/tasks.module';
import { AiModule } from './ai/ai.module';
import { PlatformsModule } from './platforms/platforms.module';

@Module({
  imports: [AuthModule, AccountsModule, TasksModule, AiModule, PlatformsModule],
  controllers: [AppController],
  providers: [AppService, TestService],
})
export class AppModule {}
