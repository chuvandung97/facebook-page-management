import { Injectable, HttpService, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Pages } from './pages.entity';

@Injectable()
export class PagesService {
    constructor(
        /* @InjectRepository(Pages) */
        /* private pagesRepository: Repository<Pages>, */
        private httpService: HttpService
    ) { }

    async getInfo(user_id: string, user_token: string, limit: number = 25): Promise<Pages[]> {
        let url = "https://graph.facebook.com/v4.0/" + user_id + "/accounts?limit=" + limit + "&access_token=" + user_token
        let response = await this.httpService.get(url).toPromise()
            .catch((error) => {
                throw new HttpException(
                    error.response.data.error.message,
                    HttpStatus.BAD_REQUEST
                )
            })
        return response.data
    }

    async getPost(page_id: string, page_token: string, limit: number = 25): Promise<Pages[]> {
        let url = "https://graph.facebook.com/v4.0/" + page_id + "/published_posts?limit=" + limit + "&access_token=" + page_token
        let response = await this.httpService.get(url).toPromise()
            .catch((error) => {
                throw new HttpException(
                    error.response.data.error.message,
                    HttpStatus.BAD_REQUEST
                )
            })
        return response.data.data
    }

    async post(page_id: string, page_token: string, message: string, link: string): Promise<Pages[]> {
        let url = "https://graph.facebook.com/v4.0/" + page_id + "/feed?access_token=" + page_token
        let response = await this.httpService.post(url, {
            message: message,
            link: link
        }).toPromise()
            .catch((error) => {
                throw new HttpException(
                    error.response.data.error.message,
                    HttpStatus.BAD_REQUEST
                )
            })
        return response.data
    }

    async sendMessage(conversation_id: string, page_token: string, message: string): Promise<Pages[]> {
        let url = "https://graph.facebook.com/v4.0/" + conversation_id + "/messages?access_token=" + page_token
        let response = await this.httpService.post(url, {
            message: message,
        }).toPromise()
            .catch((error) => {
                throw new HttpException(
                    error.response.data.error.message,
                    HttpStatus.BAD_REQUEST
                )
            })
        return response.data
    }

    async getMessage(page_id: string, page_token: string, limit: number = 25): Promise<any> {
        let url = "https://graph.facebook.com/v4.0/" + page_id + "/conversations?limit=" + limit + "&access_token=" + page_token
        let response = await this.httpService.get(url).toPromise()
            .catch((error) => {
                throw new HttpException(
                    error.response.data.error.message,
                    HttpStatus.BAD_REQUEST
                )
            })
        return response.data.data
    }
}
