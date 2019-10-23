export class CreatePagesDto {
    readonly user_id: string
    readonly user_token: string
    readonly page_id: string
    readonly page_token: string
    readonly message: string
    readonly link: string
    readonly conversation_id: string
}