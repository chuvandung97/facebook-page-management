import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    facebook_id: string;

    @Column()
    name: string;

    @Column({
        unique: true
    })
    email: string;

    @Column({
        length: 500
    })
    access_token: string;

    @Column()
    center_id: string;

    @Column({
        default: true
    })
    active: boolean;

    @CreateDateColumn({
        type: "timestamp"
    })
    created_at: string

    @UpdateDateColumn({
        type: "timestamp"
    })
    updated_at: string;

    @VersionColumn()
    version_cloumn: string  
}