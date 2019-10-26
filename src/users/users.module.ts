import { Module, HttpModule } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]), HttpModule
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
