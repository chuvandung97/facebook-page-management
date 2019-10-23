import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PagesModule } from './pages/pages.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PagesModule, /* TypeOrmModule.forRoot() */],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
