import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { PrismaService } from './database/prisma.service';


@Module({
  imports: [EmailModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
