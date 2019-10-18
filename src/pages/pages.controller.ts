import { Controller, Get, Body, Res, HttpStatus } from '@nestjs/common';
import { PagesService } from './pages.service'
import { Pages } from './pages.entity';
import { CreatePagesDto } from './pages.dto'
import { Response } from 'express';

@Controller('pages')
export class PagesController {
    constructor(private pagesService: PagesService) {}

    @Get('info')
    async getInfo(@Body() createPagesDto: CreatePagesDto, @Res() res: Response): Promise<any> {
        let response = await this.pagesService.getInfo(createPagesDto.user_id, createPagesDto.user_token)
        res.status(HttpStatus.OK).json({statusCode: HttpStatus.OK, message: 'Success', body: response})
    } 

    @Get('post')
    async getPost(@Body() createPagesDto: CreatePagesDto, @Res() res: Response): Promise<any> {
        let response = await this.pagesService.getPost(createPagesDto.page_id, createPagesDto.page_token)
        res.status(HttpStatus.OK).json({statusCode: HttpStatus.OK, message: 'Success', body: response})
    }

}