import { Controller, Get, Post, Body, Res, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { Response } from 'express';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
    ) {}

    @Get('login')
    async createUser(@Body() user: Users): Promise<any> {
        await this.usersService.createUser(user)
    }

}
