import { Injectable, HttpException, HttpStatus} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) { }

    async createUser(user: Users): Promise<Users> {
        let users = await this.usersRepository.findOne({where: {email: user.email}})
        if(!users) {
            await this.usersRepository.save(user)
            throw new HttpException(
                'Success',
                HttpStatus.CREATED
            )
        } else {
            throw new HttpException(
                'Email already exists',
                HttpStatus.CONFLICT
            )
        }
    } 
}
