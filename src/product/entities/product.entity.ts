import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('decimal')
    price: number;

    @Column()
    categoryId: number

    @Column({ default: '' })
    categoryName: string

    @Column()
    statusId: number

    @Column({ default: '' })
    statusName: string

    @Column()
    typeId: number 

    @Column({ default: '' })
    typeName: string

    @Column()
    image: string
    
    @Column('text', { array: true, default: () => 'ARRAY[]::text[]', nullable: false })
    images: string[]

    @Column()
    description: string

    @Column({default: false})
    isFavorite: boolean

    @Column('text', { array: true, default: () => 'ARRAY[]::int[]', nullable: false })
    sizes: number[]
    
    @Column('text', { array: true, default: () => 'ARRAY[]::text[]', nullable: false })
    colors: string[]
}