import { Module, HttpModule } from '@nestjs/common';
import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pages } from './pages.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pages]), HttpModule
  ],
  providers: [PagesService],
  controllers: [PagesController]
})
export class PagesModule {}
