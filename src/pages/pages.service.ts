import { Injectable, HttpService, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Pages } from './pages.entity';
import { Observable, throwError } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map, catchError } from 'rxjs/operators';
import { url } from 'inspector';

@Injectable()
export class PagesService {
    constructor(
        @InjectRepository(Pages)
        private pagesRepository: Repository<Pages>,
        private httpService: HttpService
    ) { }

    async getInfo(user_id: string, user_token: string): Promise<Pages[]> {
        let url = "https://graph.facebook.com/v4.0/" + user_id + "/accounts?access_token=" + user_token
        let response = await this.httpService.get(url).toPromise()
        return response.data.data
    }

    async getPost(page_id: string, page_token: string): Promise<Pages[]> {
        let url = "https://graph.facebook.com/v4.0/" + page_id + "?fields=posts&access_token=" + page_token
        let response = await this.httpService.get(url).toPromise()
        if(!response.data.posts) {
            throw new HttpException(
                'No post',
                HttpStatus.OK
            )
        }
        return response.data.posts.data
    }

    async post(page_id: string, page_token: string, message: string, link: string): Promise<Pages[]> {
        let url = "https://graph.facebook.com/v4.0/" + page_id + "/feed?access_token=" + page_token
        let response = await this.httpService.post(url, {
            message: message,
            link: link
        }).toPromise()
        return response.data
    }
}
