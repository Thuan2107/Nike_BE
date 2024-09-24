import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('decimal')
    price: number;

    @Column()
    category_id: number

    @Column({ default: '' })
    category_name: string

    @Column()
    status_id: number

    @Column({ default: '' })
    status_name: string

    @Column()
    type_id: number 

    @Column({ default: '' })
    type_name: string

    @Column()
    image: string
    
    @Column('json', {default: () => "'[]'", nullable: false })
    images: string[]

    @Column()
    description: string

    @Column({default: false})
    is_favorite: boolean

    @Column('json', {default: () => "'[]'", nullable: false })
    sizes: number[]
    
    @Column('json', {default: () => "'[]'", nullable: false })
    colors: string[]
}