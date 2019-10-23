import { Controller, Get, Body, Res, HttpStatus, Post } from '@nestjs/common';
import { PagesService } from './pages.service'
import { Pages } from './pages.entity';
import { CreatePagesDto } from './pages.dto'
import { Response } from 'express';

@Controller('pages')
export class PagesController {
    constructor(private pagesService: PagesService) {}

    @Get('info')
    async getInfo(@Body() createPagesDto: CreatePagesDto, @Res() res: Response): Promise<any> {
        let response = await this.pagesService.getInfo(createPagesDto.user_id, createPagesDto.user_token, createPagesDto.limit)
        res.status(HttpStatus.OK).json({statusCode: HttpStatus.OK, message: 'Success', body: response})
    } 

    @Get('post')
    async getPost(@Body() createPagesDto: CreatePagesDto, @Res() res: Response): Promise<any> {
        let response = await this.pagesService.getPost(createPagesDto.page_id, createPagesDto.page_token, createPagesDto.limit)
        res.status(HttpStatus.OK).json({statusCode: HttpStatus.OK, message: 'Success', body: response})
    }

    @Post('post')
    async post(@Body() createPagesDto: CreatePagesDto, @Res() res: Response): Promise<any> {
        let response = await this.pagesService.post(createPagesDto.page_id, createPagesDto.page_token, createPagesDto.message, createPagesDto.link)
        res.status(HttpStatus.OK).json({statusCode: HttpStatus.OK, message: 'Success', body: response})
    }

    @Post('message')
    async sendMessage(@Body() createPagesDto: CreatePagesDto, @Res() res: Response): Promise<any> {
        let response = await this.pagesService.sendMessage(createPagesDto.conversation_id, createPagesDto.page_token, createPagesDto.message)
        res.status(HttpStatus.OK).json({statusCode: HttpStatus.OK, message: 'Success', body: response})
    }

    @Get('message')
    async getMessage(@Body() createPagesDto: CreatePagesDto, @Res() res: Response): Promise<any> {
        let response = await this.pagesService.getMessage(createPagesDto.page_id, createPagesDto.page_token, createPagesDto.limit)
        res.status(HttpStatus.OK).json({statusCode: HttpStatus.OK, message: 'Success', body: response})
    }
}
