import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

@Entity()
export class Pages {
    @PrimaryGeneratedColumn()
    id: number;
}